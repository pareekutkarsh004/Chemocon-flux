import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  FileText,
  Calendar,
  ExternalLink,
  User,
  Mail,
  Phone,
  Building,
  GraduationCap,
  MapPin,
  Hash,
  HelpCircle,
  IdCard,
  Upload,
} from "lucide-react";
import {
  STORAGE_KEY,
  CATEGORY_OPTIONS,
  BANK_DETAILS,
  GOOGLE_FORM_RESPONSE_URL,
  GOOGLE_FORM_ENTRIES,
  APPS_SCRIPT_UPLOAD_URL, // ✅ REQUIRED
} from "./registration-data";

/* =========================
   Helper: File → Base64
========================= */
const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const getInitialFormData = () => {
  const defaultData = {
    fullName: "",
    email: "",
    phone: "",
    affiliation: "",
    designation: "",
    address: "",
    category: "",
    paperTitle: "",
    utrNo: "",
    transactionDate: "",
    applicantId: "",
    paymentFile: null,
  };
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...defaultData, ...parsed.formData, paymentFile: null };
    }
  } catch (e) {
    console.error("Error loading saved form data:", e);
  }
  return defaultData;
};

const getInitialCategoryKey = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed.categoryKey || "";
    }
  } catch (e) {
    console.error("Error loading saved category:", e);
  }
  return "";
};

const RegistrationForm = () => {
  const hiddenIframeRef = useRef(null);
  const [submittingPaper, setSubmittingPaper] = useState(null);
  const [selectedCategoryKey, setSelectedCategoryKey] = useState(
    getInitialCategoryKey,
  );
  const [formData, setFormData] = useState(getInitialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    try {
      const { paymentFile, ...dataToSave } = formData;
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          formData: dataToSave,
          categoryKey: selectedCategoryKey,
        }),
      );
    } catch (e) {
      console.error("Error saving form data:", e);
    }
  }, [formData, selectedCategoryKey]);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleCategoryChange = (e) => {
    const key = e.target.value;
    const found = CATEGORY_OPTIONS.find((c) => c.key === key);
    setSelectedCategoryKey(key);
    setFormData((prev) => ({ ...prev, category: found ? found.label : "" }));
  };

  const clearSavedData = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  /* =========================
     SUBMIT
  ========================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    /* ---------- GOOGLE FORM (UNCHANGED) ---------- */
    const tempForm = document.createElement("form");
    tempForm.action = GOOGLE_FORM_RESPONSE_URL;
    tempForm.method = "POST";
    tempForm.target = "hidden-google-form-frame";
    tempForm.style.display = "none";

    const dataMap = {
      NAME: formData.fullName,
      EMAIL: formData.email,
      PHONE: formData.phone,
      AFFILIATION: formData.affiliation,
      DESIGNATION: formData.designation,
      ADDRESS: formData.address,
      CATEGORY: formData.category,
      PAPER_ID: formData.applicantId || formData.paperTitle,
      DATE: formData.transactionDate,
      PAYMENT_INFO: formData.utrNo,
      ACCOMMODATION: "No",
    };

    const selectedCat = CATEGORY_OPTIONS.find(
      (c) => c.key === selectedCategoryKey,
    );
    if (selectedCat) dataMap.AMOUNT = selectedCat.amount;

    Object.entries(GOOGLE_FORM_ENTRIES).forEach(([key, entryId]) => {
      const value = dataMap[key];
      if (value !== undefined) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = entryId;
        input.value = String(value).trim();
        tempForm.appendChild(input);
      }
    });

    document.body.appendChild(tempForm);
    tempForm.submit();

    /* ---------- ✅ APPS SCRIPT UPLOAD (ADDED) ---------- */
    if (formData.paymentFile) {
      const base64 = await fileToBase64(formData.paymentFile);

      await fetch(APPS_SCRIPT_UPLOAD_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name: formData.fullName,
          email: formData.email,
          utr: formData.utrNo,
          file: base64,
          mimeType: formData.paymentFile.type,
        }),
      });
    }

    /* ---------- CLEANUP ---------- */
    setTimeout(() => {
      try {
        document.body.removeChild(tempForm);
      } catch {}

      alert("Registration submitted! We received your details.");
      clearSavedData();
      setFormData(getInitialFormData());
      setSelectedCategoryKey("");
      setSubmittingPaper(null);
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <section className="py-20 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-border dark:border-white/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Register Now
                </h2>
                <p className="text-muted-foreground">
                  Fill the details below to complete your registration
                </p>
              </div>
            </div>

            <iframe
              ref={hiddenIframeRef}
              name="hidden-google-form-frame"
              className="hidden"
              title="Google Form Response"
            />

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Paper Submission Toggle */}
              <div className="p-5 rounded-lg border border-primary/20 bg-primary/5 mb-6">
                <Label className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  Are you submitting a paper?{" "}
                  <span className="text-destructive">*</span>
                </Label>
                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant={submittingPaper === "yes" ? "default" : "outline"}
                    className={`min-w-[100px] ${
                      submittingPaper === "yes"
                        ? "bg-primary text-primary-foreground"
                        : "bg-background"
                    }`}
                    onClick={() => setSubmittingPaper("yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    type="button"
                    variant={submittingPaper === "no" ? "default" : "outline"}
                    className={`min-w-[100px] ${
                      submittingPaper === "no"
                        ? "bg-primary text-primary-foreground"
                        : "bg-background"
                    }`}
                    onClick={() => setSubmittingPaper("no")}
                  >
                    No
                  </Button>
                </div>
              </div>

              {submittingPaper !== null && (
                <>
                  {/* CMT Link & Applicant ID */}
                  {submittingPaper === "yes" && (
                    <div className="bg-muted/30 border-2 border-dashed border-primary/30 rounded-xl p-6 mb-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-full bg-primary/10 text-primary">
                          <ExternalLink className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground mb-1">
                            Paper Submission Required
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3">
                            Please ensure you have submitted your paper via the
                            Microsoft CMT portal before proceeding.
                          </p>
                          <a
                            href="https://cmt3.research.microsoft.com/CHEMCONFLUX2026"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary font-semibold hover:underline"
                          >
                            Go to Microsoft CMT Portal{" "}
                            <ExternalLink className="ml-1 w-3 h-3" />
                          </a>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="applicantId"
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <IdCard className="w-4 h-4 text-primary" />
                          Applicant ID (from CMT){" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="applicantId"
                          value={formData.applicantId}
                          onChange={handleChange("applicantId")}
                          placeholder="Enter your CMT Applicant ID"
                          required
                          className="bg-background border-border text-foreground focus:border-primary/50"
                        />
                      </div>
                    </div>
                  )}

                  {/* Standard Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="fullName"
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <User className="w-4 h-4 text-primary" />
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleChange("fullName")}
                        placeholder="Enter your full name"
                        required
                        className="bg-muted dark:bg-white/5 border-border dark:border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <Mail className="w-4 h-4 text-primary" />
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange("email")}
                        placeholder="your.email@example.com"
                        required
                        className="bg-muted dark:bg-white/5 border-border dark:border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <Phone className="w-4 h-4 text-primary" />
                        Phone <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange("phone")}
                        placeholder="+91 XXXXX XXXXX"
                        required
                        className="bg-muted dark:bg-white/5 border-border dark:border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="affiliation"
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <Building className="w-4 h-4 text-primary" />
                        Affiliation / Organization
                      </Label>
                      <Input
                        id="affiliation"
                        value={formData.affiliation}
                        onChange={handleChange("affiliation")}
                        placeholder="Your organization"
                        className="bg-muted dark:bg-white/5 border-border dark:border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="designation"
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <GraduationCap className="w-4 h-4 text-primary" />
                        Designation
                      </Label>
                      <Input
                        id="designation"
                        value={formData.designation}
                        onChange={handleChange("designation")}
                        placeholder="Your designation"
                        className="bg-muted dark:bg-white/5 border-border dark:border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="category"
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <Hash className="w-4 h-4 text-primary" />
                        Registration Category{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <select
                        id="category"
                        value={selectedCategoryKey}
                        onChange={handleCategoryChange}
                        required
                        className="w-full h-10 px-3 rounded-md bg-muted dark:bg-white/5 border border-border dark:border-white/10 text-foreground focus:border-primary/50 focus:outline-none"
                      >
                        <option
                          value=""
                          className="bg-background dark:bg-slate-800"
                        >
                          Select category
                        </option>
                        {CATEGORY_OPTIONS.map((c) => (
                          <option
                            key={c.key}
                            value={c.key}
                            className="bg-background dark:bg-slate-800"
                          >
                            {c.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Payment Instructions & UTR */}
                  {selectedCategoryKey && (
                    <>
                      <div className="bg-muted/50 rounded-lg border border-border/60 p-4 space-y-3">
                        {(() => {
                          const cat = CATEGORY_OPTIONS.find(
                            (c) => c.key === selectedCategoryKey,
                          );
                          if (!cat) return null;
                          return (
                            <>
                              <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
                                <div>
                                  <p className="text-sm text-muted-foreground">
                                    Payment Details for
                                  </p>
                                  <p className="font-display text-lg font-semibold text-foreground">
                                    {cat.label}
                                  </p>
                                  {cat.amountDisplay && (
                                    <p className="text-sm text-muted-foreground">
                                      Amount: {cat.amountDisplay}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {cat.paymentType === "qr" ? (
                                cat.qrSrc ? (
                                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                    <div className="w-40 h-40 border border-border rounded-lg overflow-hidden bg-white flex items-center justify-center">
                                      <img
                                        src={cat.qrSrc}
                                        alt={`${cat.label} payment QR`}
                                        className="w-full h-full object-contain"
                                      />
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                      Scan this QR to pay the category fee.
                                      After payment, please enter the
                                      UTR/Reference number below.
                                    </p>
                                  </div>
                                ) : (
                                  <p className="text-sm text-muted-foreground">
                                    QR not uploaded yet.
                                  </p>
                                )
                              ) : (
                                <div className="space-y-2">
                                  <p className="text-sm text-muted-foreground">
                                    Pay via bank transfer using the details
                                    below. Share your transaction reference
                                    after payment.
                                  </p>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm bg-card/60 border border-border rounded-lg p-3">
                                    <div>
                                      <p className="text-muted-foreground">
                                        Account Name
                                      </p>
                                      <p className="font-semibold text-foreground">
                                        {BANK_DETAILS.accountName}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="text-muted-foreground">
                                        Account Number
                                      </p>
                                      <p className="font-semibold text-foreground">
                                        {BANK_DETAILS.accountNumber}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="text-muted-foreground">
                                        IFSC Code
                                      </p>
                                      <p className="font-semibold text-foreground">
                                        {BANK_DETAILS.ifsc}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="text-muted-foreground">
                                        MICR Code
                                      </p>
                                      <p className="font-semibold text-foreground">
                                        {BANK_DETAILS.micr}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="text-muted-foreground">
                                        Branch
                                      </p>
                                      <p className="font-semibold text-foreground">
                                        {BANK_DETAILS.branch}
                                      </p>
                                    </div>
                                    {BANK_DETAILS.swift && (
                                      <div>
                                        <p className="text-muted-foreground">
                                          SWIFT
                                        </p>
                                        <p className="font-semibold text-foreground">
                                          {BANK_DETAILS.swift}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              )}
                            </>
                          );
                        })()}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label
                            htmlFor="utrNo"
                            className="flex items-center gap-2 text-muted-foreground"
                          >
                            <Hash className="w-4 h-4 text-primary" />
                            UTR / Transaction Number{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="utrNo"
                            value={formData.utrNo}
                            onChange={handleChange("utrNo")}
                            placeholder="Enter UTR number from your payment"
                            required
                            className="bg-muted dark:bg-white/5 border-border dark:border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="transactionDate"
                            className="flex items-center gap-2 text-muted-foreground"
                          >
                            <Calendar className="w-4 h-4 text-primary" />
                            Transaction Date{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="transactionDate"
                            type="date"
                            value={formData.transactionDate}
                            onChange={handleChange("transactionDate")}
                            required
                            className="bg-muted dark:bg-white/5 border-border dark:border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                          />
                        </div>
                      </div>

                      {/* --- MERGED: Payment Screenshot Section --- */}
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2 text-muted-foreground">
                          <Upload className="w-4 h-4 text-primary" />
                          Payment Screenshot{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          type="file"
                          accept="image/*"
                          required
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              paymentFile: e.target.files[0],
                            }))
                          }
                          className="bg-muted dark:bg-white/5 border-border dark:border-white/10 text-foreground cursor-pointer file:text-foreground file:bg-transparent file:border-0 file:mr-2 file:font-semibold"
                        />
                      </div>
                      {/* ------------------------------------------- */}
                    </>
                  )}

                  <div className="space-y-2">
                    <Label
                      htmlFor="address"
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <MapPin className="w-4 h-4 text-primary" />
                      Address
                    </Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={handleChange("address")}
                      placeholder="Your complete address"
                      rows={2}
                      className="bg-muted dark:bg-white/5 border-border dark:border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="paperTitle"
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <FileText className="w-4 h-4 text-primary" />
                      Paper Title (if submitting)
                    </Label>
                    <Input
                      id="paperTitle"
                      value={formData.paperTitle}
                      onChange={handleChange("paperTitle")}
                      placeholder="Your paper title"
                      className="bg-muted dark:bg-white/5 border-border dark:border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4 flex-wrap pt-4">
                    <p className="text-sm text-muted-foreground">
                      Please fill all required fields marked with *
                    </p>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 hover:scale-105 transition-all duration-300"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Registration"}
                    </Button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;

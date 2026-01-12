import { useRef, useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  FileText,
  CreditCard,
  Send,
  Calendar,
  ExternalLink,
  CheckCircle,
  User,
  Mail,
  Phone,
  Building,
  GraduationCap,
  MapPin,
  Hash,
  Sparkles,
  ArrowUp,
  HelpCircle,
  IdCard,
} from "lucide-react";

const STORAGE_KEY = "chemconflux26-registration-form";

const registrationFees = [
  {
    category: "Delegates from academics/Industries/Govt. org",
    earlyBird: "₹ 5900/-",
    standard: "₹ 7080/-",
  },
  {
    category: "PG Students/Research Scholars",
    earlyBird: "₹ 3540/-",
    standard: "₹ 4130/-",
  },
  { category: "UG students", earlyBird: "₹ 1770/-", standard: "₹ 2360/-" },
  {
    category: "Foreign Delegates/participants",
    earlyBird: "$ 295/-",
    standard: "$ 354/-",
  },
  {
    category: "Foreign accompanying person",
    earlyBird: "$ 118/-",
    standard: "$ 118/-",
  },
];

const CATEGORY_OPTIONS = [
  {
    key: "delegates",
    label: "Delegates from academics/Industries/Govt. org",
    amount: "₹ 7080/- (standard)",
    paymentType: "qr",
    qrSrc: "/image.png",
  },
  {
    key: "pg",
    label: "PG Students/Research Scholars",
    amount: "₹ 4130/- (standard)",
    paymentType: "qr",
    qrSrc: "/image.png",
  },
  {
    key: "ug",
    label: "UG students",
    amount: "₹ 2360/- (standard)",
    paymentType: "qr",
    qrSrc: "/image.png",
  },
  {
    key: "foreign",
    label: "Foreign Delegates/participants",
    amount: "$ 354/- (standard)",
    paymentType: "bank",
  },
  {
    key: "accompanying",
    label: "Foreign accompanying person",
    amount: "$ 118/-",
    paymentType: "bank",
  },
];

const BANK_DETAILS = {
  accountName: "SNFCE MNNIT Allahabad",
  accountNumber: "10424975574",
  ifsc: "SBIN0002580",
  micr: "211002016",
  branch: "SBI, MNNIT Allahabad",
  swift: "SBININBB828",
};

const importantDates = [
  { event: "Submission of Abstract", date: "August 15, 2026" },
  { event: "Intimation of Acceptance", date: "August 30, 2026" },
  { event: "Registration Deadline", date: "September 25, 2026" },
];

const GOOGLE_FORM_RESPONSE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfOci0F3Qo8KBkE0sFcRyPMtZlCuG-TKBP1E-R42gNVG4jAfw/formResponse";

const GOOGLE_FORM_ENTRIES = {
  fullName: "entry.2111203769",
  email: "entry.166206430",
  phone: "entry.1057242179",
  affiliation: "entry.849349972",
  designation: "entry.1938379852",
  address: "entry.556004646",
  category: "entry.1244283262",
  paperTitle: "entry.1077930342",
  abstract: "entry.1045790084",
  utrNo: "entry.1680864150",
  // TODO: Replace this with your actual Google Form Entry ID for Applicant ID
  applicantId: "entry.484512564", 
};

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
    abstract: "",
    utrNo: "",
    applicantId: "", // Added Applicant ID
  };

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...defaultData, ...parsed.formData };
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

const Registration = () => {
  const hiddenIframeRef = useRef(null);

  // null = not selected yet (hides form), 'yes' = submitting paper, 'no' = not submitting
  const [submittingPaper, setSubmittingPaper] = useState(null);

  const [selectedCategoryKey, setSelectedCategoryKey] = useState(
    getInitialCategoryKey
  );
  const [formData, setFormData] = useState(getInitialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Save to localStorage whenever form data changes
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          formData,
          categoryKey: selectedCategoryKey,
        })
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
    } catch (e) {
      console.error("Error clearing saved data:", e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const tempForm = document.createElement("form");
    tempForm.action = GOOGLE_FORM_RESPONSE_URL;
    tempForm.method = "POST";
    tempForm.target = "hidden-google-form-frame";
    tempForm.style.display = "none";

    Object.entries(GOOGLE_FORM_ENTRIES).forEach(([key, entryId]) => {
      const value = formData[key];
      if (value && entryId.startsWith("entry.")) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = entryId;
        input.value = String(value).trim();
        tempForm.appendChild(input);
      }
    });

    document.body.appendChild(tempForm);

    try {
      tempForm.submit();
    } catch (error) {
      document.body.removeChild(tempForm);
      setIsSubmitting(false);
      alert("There was an error submitting the form. Please try again.");
      return;
    }

    setTimeout(() => {
      try {
        if (document.body.contains(tempForm)) {
          document.body.removeChild(tempForm);
        }
      } catch (e) {}

      setIsSubmitting(false);
      alert("Registration submitted! We received your details.");

      // Clear saved data after successful submission
      clearSavedData();

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        affiliation: "",
        designation: "",
        address: "",
        category: "",
        paperTitle: "",
        abstract: "",
        utrNo: "",
        applicantId: "",
      });
      setSelectedCategoryKey("");
      setSubmittingPaper(null); // Reset toggle
    }, 1500);
  };

  const selectedCategory = CATEGORY_OPTIONS.find(
    (c) => c.key === selectedCategoryKey
  );

  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative hero-section-bg text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/5 dark:bg-orange-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-orange-400" />
            <p className="text-orange-400 font-semibold tracking-wider uppercase text-sm">
              Join Us
            </p>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
            Registration
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Register for CHEM-CONFLUX²⁶ - International Conference on
            Sustainable Environment & Energy Innovations
          </p>
        </div>
      </section>

      {/* Registration Form */}
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
                
                {/* --- ADDED: Required Paper Submission Question --- */}
                <div className="p-5 rounded-lg border border-primary/20 bg-primary/5 mb-6">
                  <Label className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    Are you submitting a paper? <span className="text-destructive">*</span>
                  </Label>
                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant={submittingPaper === "yes" ? "default" : "outline"}
                      className={`min-w-[100px] ${submittingPaper === "yes" ? "bg-primary text-primary-foreground" : "bg-background"}`}
                      onClick={() => setSubmittingPaper("yes")}
                    >
                      Yes
                    </Button>
                    <Button
                      type="button"
                      variant={submittingPaper === "no" ? "default" : "outline"}
                       className={`min-w-[100px] ${submittingPaper === "no" ? "bg-primary text-primary-foreground" : "bg-background"}`}
                      onClick={() => setSubmittingPaper("no")}
                    >
                      No
                    </Button>
                  </div>
                </div>

                {/* --- SHOW FORM ONLY AFTER SELECTION --- */}
                {submittingPaper !== null && (
                  <>
                    {/* --- LOGIC: If YES -> Show CMT Link & Applicant ID --- */}
                    {submittingPaper === "yes" && (
                       <div className="bg-muted/30 border-2 border-dashed border-primary/30 rounded-xl p-6 mb-8">
                         
                         {/* CMT Link */}
                         <div className="flex items-start gap-4 mb-6">
                           <div className="p-3 rounded-full bg-primary/10 text-primary">
                             <ExternalLink className="w-6 h-6" />
                           </div>
                           <div>
                             <h3 className="text-lg font-bold text-foreground mb-1">Paper Submission Required</h3>
                             <p className="text-muted-foreground text-sm mb-3">
                               Please ensure you have submitted your paper via the Microsoft CMT portal before proceeding.
                             </p>
                             <a 
                               href="https://cmt3.research.microsoft.com/" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="inline-flex items-center text-primary font-semibold hover:underline"
                             >
                               Go to Microsoft CMT Portal <ExternalLink className="ml-1 w-3 h-3" />
                             </a>
                           </div>
                         </div>

                         {/* Applicant ID Field (Required for Yes) */}
                         <div className="space-y-2">
                            <Label
                              htmlFor="applicantId"
                              className="flex items-center gap-2 text-muted-foreground"
                            >
                              <IdCard className="w-4 h-4 text-primary" />
                              Applicant ID (from CMT) <span className="text-destructive">*</span>
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

                    {/* --- STANDARD FORM (Rest all things same) --- */}
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

                    {/* Category-specific payment instructions */}
                    {selectedCategoryKey && (
                      <div className="bg-muted/50 rounded-lg border border-border/60 p-4 space-y-3">
                        {(() => {
                          const cat = CATEGORY_OPTIONS.find(
                            (c) => c.key === selectedCategoryKey
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
                                  {cat.amount && (
                                    <p className="text-sm text-muted-foreground">
                                      Amount: {cat.amount}
                                    </p>
                                  )}
                                </div>
                                <Button
                                  asChild
                                  variant="outline"
                                  className="border-conference-gold text-conference-gold hover:bg-conference-gold/10"
                                >
                                  <a href="#registration-fees">Check fee details</a>
                                </Button>
                              </div>

                              {/* --- ADDED: Pay Online Portal Section --- */}
                              <div className="bg-background border border-conference-gold/40 rounded-lg p-4 mb-4 shadow-sm">
                                <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                                  <CreditCard className="w-4 h-4 text-conference-gold" />
                                  Option 1: Pay Online
                                </h4>
                                <p className="text-sm text-muted-foreground mb-3">
                                  You can pay the registration fee securely via our online portal.
                                </p>
                                <Button 
                                  asChild
                                  className="bg-conference-gold hover:bg-conference-gold/90 text-conference-navy font-bold w-full sm:w-auto"
                                >
                                  <a 
                                      href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=5483621" 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                  >
                                    Proceed to Online Payment <ExternalLink className="ml-2 w-4 h-4" />
                                  </a>
                                </Button>
                              </div>

                              <div className="relative flex items-center py-2">
                                  <div className="flex-grow border-t border-border"></div>
                                  <span className="flex-shrink-0 mx-4 text-muted-foreground text-xs uppercase font-bold">OR Pay via {cat.paymentType === "qr" ? "QR Code" : "Bank Transfer"}</span>
                                  <div className="flex-grow border-t border-border"></div>
                              </div>
                              {/* ------------------------------------------ */}

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
                                      Scan this QR to pay the category fee. After
                                      payment, keep the transaction reference for your
                                      records.
                                    </p>
                                  </div>
                                ) : (
                                  <p className="text-sm text-muted-foreground">
                                    QR not uploaded yet. Add an image at{" "}
                                    {cat.qrSrc || "/qr/<category>.png"} in
                                    `Frontend/public/qr/`.
                                  </p>
                                )
                              ) : (
                                <div className="space-y-2">
                                  <p className="text-sm text-muted-foreground">
                                    Pay via bank transfer using the details below.
                                    Share your transaction reference after payment.
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
                                      <p className="text-muted-foreground">Branch</p>
                                      <p className="font-semibold text-foreground">
                                        {BANK_DETAILS.branch}
                                      </p>
                                    </div>
                                    {BANK_DETAILS.swift && (
                                      <div>
                                        <p className="text-muted-foreground">SWIFT</p>
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
                    )}

                    {/* UTR Number */}
                    {selectedCategoryKey && (
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
                        <p className="text-muted-foreground text-xs">
                          Enter the UTR number from your payment transaction
                        </p>
                      </div>
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

                    <div className="space-y-2">
                      <Label
                        htmlFor="abstract"
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <Send className="w-4 h-4 text-primary" />
                        Abstract (optional)
                      </Label>
                      <Textarea
                        id="abstract"
                        value={formData.abstract}
                        onChange={handleChange("abstract")}
                        placeholder="Paste your abstract here"
                        rows={4}
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

      {/* Important Dates */}
      <section className="py-12 bg-muted dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-6 text-center text-foreground">
            Important Dates
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {importantDates.map((item, index) => (
              <div
                key={index}
                className="group relative flex items-center gap-4 bg-card dark:bg-white/5 backdrop-blur-sm px-6 py-4 rounded-xl border-2 border-primary/20 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-primary/20 dark:hover:shadow-primary/10"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative w-12 h-12 rounded-xl bg-primary/15 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary/25 transition-colors duration-300 group-hover:scale-110">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="relative">
                  <p className="text-sm text-primary font-medium">
                    {item.event}
                  </p>
                  <p className="font-bold text-lg text-foreground">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Fees */}
      <section
        className="py-20 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800"
        id="registration-fees"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-primary font-medium mb-2 tracking-wider uppercase">
              Registration Fee
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-foreground">
              Conference Registration
            </h2>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mt-4">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">
                Early Bird till August 30, 2026
              </span>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="max-w-4xl mx-auto hidden md:block">
            <div className="overflow-hidden rounded-2xl border border-border dark:border-white/10">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-primary/80">
                    <th className="p-5 text-left text-primary-foreground font-semibold">
                      Delegates
                    </th>
                    <th className="p-5 text-center text-primary-foreground font-semibold">
                      Early Bird
                      <br />
                      <span className="text-xs font-normal opacity-80">
                        (till Aug 30)
                      </span>
                    </th>
                    <th className="p-5 text-center text-primary-foreground font-semibold">
                      Standard
                      <br />
                      <span className="text-xs font-normal opacity-80">
                        (incl. GST)
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {registrationFees.map((fee, index) => (
                    <tr
                      key={index}
                      className="border-t border-border dark:border-white/5 hover:bg-muted dark:hover:bg-white/5 transition-colors"
                    >
                      <td className="p-5 text-muted-foreground">
                        {fee.category}
                      </td>
                      <td className="p-5 text-center font-bold text-primary text-lg">
                        {fee.earlyBird}
                      </td>
                      <td className="p-5 text-center text-muted-foreground">
                        {fee.standard}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4 max-w-md mx-auto">
            {registrationFees.map((fee, index) => (
              <div
                key={index}
                className="bg-card dark:bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-border dark:border-white/10"
              >
                <p className="text-foreground font-medium mb-3">
                  {fee.category}
                </p>
                <div className="flex justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">
                      Early Bird
                    </p>
                    <p className="text-primary font-bold text-lg">
                      {fee.earlyBird}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground uppercase">
                      Standard
                    </p>
                    <p className="text-muted-foreground">{fee.standard}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paper Submission */}
      <section
        className="py-20 bg-muted dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900"
        id="paper-submission"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-primary font-medium mb-2 tracking-wider uppercase">
              Paper Submission
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Submit Your Research
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-border dark:border-white/10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We welcome submissions on original research, reviews and
                    case studies on topics related to the thrust areas of the
                    conference.
                  </p>

                  <div className="bg-muted dark:bg-slate-800/50 rounded-xl p-6 mb-6 border border-border dark:border-white/5">
                    <h4 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      Abstract Format (One Page)
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        { label: "Page Size", value: "A4, 1 inch margin" },
                        { label: "Font", value: "Times New Roman, 12pt" },
                        { label: "Title", value: "Bold, 14pt" },
                        { label: "Authors", value: "Bold, 12pt" },
                        { label: "Affiliation", value: "12pt" },
                        { label: "Keywords", value: "Max 5 (italics)" },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-muted-foreground">
                            {item.label}:
                          </span>
                          <span className="text-foreground">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Submit via Online Portal
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-2 border-primary/40 text-primary bg-primary/5 hover:bg-primary/15 hover:border-primary font-semibold shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=chemconflux26@gmail.com&su=Paper Submission for CHEM-CONFLUX'26"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="flex items-center">
                          <Send className="w-4 h-4 mr-2" />
                          Email to chemconflux26@gmail.com
                        </span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold mb-4 text-foreground">
            Need Help with Registration?
          </h2>
          <p className="text-muted-foreground mb-6">
            For any queries regarding registration, payment, or paper submission
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              variant="outline"
              className="border-2 border-primary/40 text-primary bg-primary/5 hover:bg-primary/15 hover:border-primary font-semibold shadow-sm hover:shadow-md transition-all duration-300"
            >
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=chemconflux26@gmail.com&su=Registration Query for CHEM-CONFLUX'26"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center">
                  <Send className="w-4 h-4 mr-2" />
                  chemconflux26@gmail.com
                </span>
              </a>
            </Button>
            <a
              href="tel:+919003670402"
              className="text-foreground font-medium hover:text-primary transition-colors py-3"
            >
              +91-9003670402
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Registration;
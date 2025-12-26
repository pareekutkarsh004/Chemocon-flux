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
  "https://docs.google.com/forms/d/e/1FAIpQLSeDQQTmndmPkEo3NoORwrensrXW7eeYoWfa30Sjdkx7A4taJg/formResponse";

const GOOGLE_FORM_ENTRIES = {
  fullName: "entry.82591335",
  email: "entry.875258813",
  phone: "entry.1219509344",
  affiliation: "entry.1014504476",
  designation: "entry.1428949176",
  address: "entry.597901852",
  category: "entry.262280136",
  paperTitle: "entry.26866841",
  abstract: "entry.850816242",
  utrNo: "entry.764707765",
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
      });
      setSelectedCategoryKey("");
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

                {/* Payment Instructions */}
                {selectedCategory && (
                  <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                      <div>
                        <p className="text-primary text-sm font-medium uppercase tracking-wider">
                          Payment for
                        </p>
                        <p className="text-foreground font-semibold">
                          {selectedCategory.label}
                        </p>
                        <p className="text-primary text-lg font-bold mt-1">
                          Amount: {selectedCategory.amount}
                        </p>
                      </div>
                      <a
                        href="#registration-fees"
                        className="text-primary text-sm hover:underline flex items-center gap-1"
                      >
                        View all fees <ArrowUp className="w-3 h-3 rotate-180" />
                      </a>
                    </div>

                    {selectedCategory.paymentType === "qr" ? (
                      <div className="text-center">
                        <div className="inline-block bg-white p-4 rounded-xl mb-4">
                          <img
                            src={selectedCategory.qrSrc}
                            alt="Payment QR"
                            className="w-48 h-48 object-contain"
                          />
                        </div>
                        <p className="text-muted-foreground text-sm">
                          Scan this QR to pay. After payment, enter the UTR
                          number below.
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-muted-foreground text-sm mb-4">
                          Pay via bank transfer using the details below:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                          {[
                            {
                              label: "Account Name",
                              value: BANK_DETAILS.accountName,
                            },
                            {
                              label: "Account Number",
                              value: BANK_DETAILS.accountNumber,
                            },
                            { label: "IFSC Code", value: BANK_DETAILS.ifsc },
                            { label: "MICR Code", value: BANK_DETAILS.micr },
                            { label: "Branch", value: BANK_DETAILS.branch },
                            ...(BANK_DETAILS.swift
                              ? [{ label: "SWIFT", value: BANK_DETAILS.swift }]
                              : []),
                          ].map((item, idx) => (
                            <div
                              key={idx}
                              className="bg-muted dark:bg-slate-800/50 rounded-lg p-3"
                            >
                              <p className="text-muted-foreground text-xs">
                                {item.label}
                              </p>
                              <p className="text-foreground font-medium">
                                {item.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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

          {/* Payment Methods */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-card dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-border dark:border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                    Payment Methods
                  </h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Local Cheque or DD in favour of{" "}
                        <strong className="text-primary">
                          "chemconflux26"
                        </strong>
                        , payable at Prayagraj
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>UPI / Net Banking (scan QR code above)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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

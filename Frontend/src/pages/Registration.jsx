import { useRef, useState } from "react";
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
} from "lucide-react";

const registrationFees = [
  { category: "Delegates from academics/Industries/Govt. org", earlyBird: "₹ 5900/-", standard: "₹ 7080/-" },
  { category: "PG Students/Research Scholars", earlyBird: "₹ 3540/-", standard: "₹ 4130/-" },
  { category: "UG students", earlyBird: "₹ 1770/-", standard: "₹ 2360/-" },
  { category: "Foreign Delegates/participants", earlyBird: "$ 295/-", standard: "$ 354/-" },
  { category: "Foreign accompanying person", earlyBird: "$ 118/-", standard: "$ 118/-" },
];

// Category options with QR placeholders (add your QR image paths)
const CATEGORY_OPTIONS = [
  {
    key: "delegates",
    label: "Delegates from academics/Industries/Govt. org",
    amount: "₹ 7080/- (standard)",
    paymentType: "qr",
    qrSrc: "/image.png",// place image at Frontend/public/qr/delegates-7080.png
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

// Bank details for foreign categories
const BANK_DETAILS = {
  accountName: "SNFCE MNNIT Allahabad",
  accountNumber: "10424975574", // TODO: replace
  ifsc: "SBIN0002580", // TODO: replace
  micr: "211002016", // TODO: replace
  branch: "SBI, MNNIT Allahabad", // TODO: replace
  swift: "SBININBB828", // Optional: add if available
};

const importantDates = [
  { event: "Submission of Abstract", date: "August 15, 2026" },
  { event: "Intimation of Acceptance", date: "August 30, 2026" },
  { event: "Registration Deadline", date: "September 25, 2026" },
];

// Google Form endpoints (same FORM_ID in both)
// view (for reference): https://docs.google.com/forms/d/e/<FORM_ID>/viewform
// submission (hidden POST): https://docs.google.com/forms/d/e/<FORM_ID>/formResponse
const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeDQQTmndmPkEo3NoORwrensrXW7eeYoWfa30Sjdkx7A4taJg/viewform";
const GOOGLE_FORM_RESPONSE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeDQQTmndmPkEo3NoORwrensrXW7eeYoWfa30Sjdkx7A4taJg/formResponse";

// TODO: replace entry.* values with the field entry IDs from your Google Form
// You can find them by opening the form, right-clicking each field, Inspect,
// and copying the `name` attribute (e.g., entry.123456789).
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

const Registration = () => {
  const hiddenIframeRef = useRef(null);
  const [selectedCategoryKey, setSelectedCategoryKey] = useState("");
  const [formData, setFormData] = useState({
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleCategoryChange = (e) => {
    const key = e.target.value;
    const found = CATEGORY_OPTIONS.find((c) => c.key === key);
    setSelectedCategoryKey(key);
    // Send the human-readable label to Google Form
    setFormData((prev) => ({ ...prev, category: found ? found.label : "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      !GOOGLE_FORM_URL.includes("docs.google.com/forms/d/e/") ||
      GOOGLE_FORM_URL.includes("YOUR_FORM_ID") ||
      GOOGLE_FORM_RESPONSE_URL.includes("YOUR_FORM_ID")
    ) {
      alert("Please configure GOOGLE_FORM_URL/GOOGLE_FORM_RESPONSE_URL and entry IDs with your real Google Form.");
      setIsSubmitting(false);
      return;
    }

    // Build a hidden HTML form to post directly to Google Forms (avoids showing the Google Form UI)
    const tempForm = document.createElement("form");
    tempForm.action = GOOGLE_FORM_RESPONSE_URL;
    tempForm.method = "POST";
    tempForm.target = "hidden-google-form-frame";
    tempForm.style.display = "none";

    // Add all form fields to the submission
    Object.entries(GOOGLE_FORM_ENTRIES).forEach(([key, entryId]) => {
      const value = formData[key];
      // Only add fields that have values (skip empty optional fields)
      if (value && entryId.startsWith("entry.")) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = entryId;
        input.value = String(value).trim();
        tempForm.appendChild(input);
      }
    });

    // Ensure iframe exists before submitting
    if (!hiddenIframeRef.current) {
      alert("Error: Form submission failed. Please refresh the page and try again.");
      setIsSubmitting(false);
      return;
    }

    document.body.appendChild(tempForm);
    
    // Submit the form
    try {
      tempForm.submit();
    } catch (error) {
      console.error("Form submission error:", error);
      document.body.removeChild(tempForm);
      setIsSubmitting(false);
      alert("There was an error submitting the form. Please try again.");
      return;
    }
    
    // Wait longer before removing the form and resetting to ensure submission completes
    setTimeout(() => {
      try {
        if (document.body.contains(tempForm)) {
          document.body.removeChild(tempForm);
        }
      } catch (e) {
        // Form might already be removed, ignore
      }
      
      setIsSubmitting(false);
      alert("Registration submitted! We received your details.");
      
      // Reset form after submission
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

    setTimeout(() => {
      setIsSubmitting(false);
      alert("Registration submitted! We received your details.");
    }, 600);
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="gradient-navy text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Registration
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Register for CHEM-CONFLUX²⁶ - International Conference on
            Sustainable Environment & Energy Innovations
          </p>
        </div>
      </section>

      {/* Register Now Form */}
      <section className="py-16 bg-background" id="register-now">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl shadow-sm">
            <div className="border-b border-border px-6 py-4 flex items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-bold flex items-center gap-2">
                  <User className="w-5 h-5 text-conference-gold" />
                  Register Now
                </h2>
                <p className="text-muted-foreground text-sm">
                  Fill the details below. We will open the Google Form with
                  these values pre-filled for quick submission.
                </p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground" />
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Hidden iframe to swallow Google Form response so users stay on this page */}
              <iframe
                name="hidden-google-form-frame"
                ref={hiddenIframeRef}
                title="Hidden Google Form submission"
                style={{ display: "none" }}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="flex items-center gap-2">
                    <User className="w-4 h-4 text-conference-gold" />
                    Full Name
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange("fullName")}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-conference-gold" />
                    Email
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange("email")}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-conference-gold" />
                    Phone
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange("phone")}
                    placeholder="+91-XXXXXXXXXX"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="affiliation"
                    className="flex items-center gap-2"
                  >
                    <Building className="w-4 h-4 text-conference-gold" />
                    Affiliation / Organization
                  </Label>
                  <Input
                    id="affiliation"
                    value={formData.affiliation}
                    onChange={handleChange("affiliation")}
                    placeholder="Institute / Company"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="designation"
                    className="flex items-center gap-2"
                  >
                    <GraduationCap className="w-4 h-4 text-conference-gold" />
                    Designation
                  </Label>
                  <Input
                    id="designation"
                    value={formData.designation}
                    onChange={handleChange("designation")}
                    placeholder="Professor / Student / Researcher"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-conference-gold" />
                    Registration Category
                  </Label>
                  <select
                    id="category"
                    value={selectedCategoryKey}
                    onChange={handleCategoryChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select category</option>
                    {CATEGORY_OPTIONS.map((c) => (
                      <option key={c.key} value={c.key}>
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
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Payment QR for
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

              {/* UTR NO - shown after category selection */}
              {selectedCategoryKey && (
                <div className="border-t border-border pt-6">
                  <div className="space-y-2">
                    <Label htmlFor="utrNo" className="flex items-center gap-2">
                      <Hash className="w-4 h-4 text-conference-gold" />
                      UTR NO
                      <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="utrNo"
                      value={formData.utrNo}
                      onChange={handleChange("utrNo")}
                      placeholder="Enter UTR/Transaction Reference Number"
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      Enter the UTR number from your payment transaction
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="address" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-conference-gold" />
                  Address
                </Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={handleChange("address")}
                  placeholder="Mailing address"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="paperTitle" className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-conference-gold" />
                  Paper Title (if submitting)
                </Label>
                <Input
                  id="paperTitle"
                  value={formData.paperTitle}
                  onChange={handleChange("paperTitle")}
                  placeholder="Your paper title"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="abstract" className="flex items-center gap-2">
                  <Send className="w-4 h-4 text-conference-gold" />
                  Abstract (optional)
                </Label>
                <Textarea
                  id="abstract"
                  value={formData.abstract}
                  onChange={handleChange("abstract")}
                  placeholder="Paste your abstract here"
                  rows={4}
                />
              </div>

              <div className="flex items-center justify-between gap-4 flex-wrap">
                <p className="text-sm text-muted-foreground">
                  Please fill all required fields and submit your registration.
                </p>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-conference-gold hover:bg-conference-gold/90 text-conference-navy font-semibold"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-12 bg-conference-gold/10 border-b border-conference-gold/20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-6 text-center">
            Important Dates
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {importantDates.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-card px-5 py-3 rounded-lg border border-border"
              >
                <Calendar className="w-5 h-5 text-conference-gold" />
                <div>
                  <p className="text-sm text-muted-foreground">{item.event}</p>
                  <p className="font-semibold text-foreground">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Fees */}
      <section className="py-16 bg-background" id="registration-fees">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-conference-gold font-medium mb-2">
              REGISTRATION FEE
            </p>
            <h2 className="font-display text-3xl font-bold mb-2">
              Conference Registration
            </h2>
            <p className="text-muted-foreground">
              Early Bird Registration till August 30, 2026
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="gradient-navy text-primary-foreground">
                  <th className="p-4 text-left border border-border/30">
                    Delegates
                  </th>
                  <th className="p-4 text-center border border-border/30">
                    <div>Early Bird</div>
                    <div className="text-xs font-normal opacity-80">
                      (till August 30, 2026)
                    </div>
                    <div className="text-xs font-normal opacity-80">
                      (including GST)
                    </div>
                  </th>
                  <th className="p-4 text-center border border-border/30">
                    <div>Standard Registration</div>
                    <div className="text-xs font-normal opacity-80">
                      (including GST)
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {registrationFees.map((fee, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-muted/50" : "bg-card"}
                  >
                    <td className="p-4 border border-border font-medium">
                      {fee.category}
                    </td>
                    <td className="p-4 text-center border border-border font-bold text-conference-gold">
                      {fee.earlyBird}
                    </td>
                    <td className="p-4 text-center border border-border font-semibold">
                      {fee.standard}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Payment Methods */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-6 border border-border mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-navy flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-conference-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold mb-3">
                    Payment Methods
                  </h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-conference-gold mt-1 flex-shrink-0" />
                      <span>
                        Local Cheque or Demand Draft in favour of{" "}
                        <strong className="text-foreground">
                          "chemconflux26"
                        </strong>
                        , payable at Prayagraj along with registration form
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-conference-gold mt-1 flex-shrink-0" />
                      <span>Net Banking / Online Payment (see below)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Online Payment Button */}
            <div className="bg-conference-gold/10 rounded-lg p-8 border border-conference-gold/30 text-center">
              <h3 className="font-display text-xl font-bold mb-3">
                Pay Online
              </h3>
              <p className="text-muted-foreground mb-6">
                Complete your registration by paying securely through our online
                payment portal
              </p>
              <Button
                className="bg-conference-gold hover:bg-conference-gold/90 text-conference-navy font-bold"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Pay Registration Fee Online
              </Button>

              <p className="text-xs text-muted-foreground mt-4">
                You will be redirected to a secure payment gateway
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Paper Submission */}
      <section className="py-16 bg-muted/50" id="paper-submission">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-conference-gold font-medium mb-2">
              PAPER SUBMISSION
            </p>
            <h2 className="font-display text-3xl font-bold mb-2">
              Submit Your Research
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full gradient-navy flex items-center justify-center flex-shrink-0">
                  <FileText className="w-7 h-7 text-conference-gold" />
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We welcome submissions on original research, reviews and
                    case studies on topics related to the thrust areas of the
                    conference.
                  </p>

                  <div className="bg-muted/50 rounded-lg p-6 mb-6">
                    <h4 className="font-display font-bold text-foreground mb-4">
                      Abstract Format (One Page)
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      Abstract should be written in MS Word (A4 size pages)
                      containing:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-conference-gold font-bold">
                          •
                        </span>
                        <span>
                          <strong>Page Setup:</strong> A4 size pages with 1 inch
                          margin on all sides
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-conference-gold font-bold">
                          •
                        </span>
                        <span>
                          <strong>Font:</strong> Times New Roman, single line
                          spacing, 12 font size
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-conference-gold font-bold">
                          •
                        </span>
                        <span>
                          <strong>Title of Paper:</strong> Bold, 14 font size
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-conference-gold font-bold">
                          •
                        </span>
                        <span>
                          <strong>Author(s) Name:</strong> Bold, 12 font size
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-conference-gold font-bold">
                          •
                        </span>
                        <span>
                          <strong>Affiliation:</strong> 12 font size (mention
                          corresponding author)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-conference-gold font-bold">
                          •
                        </span>
                        <span>
                          <strong>Keywords:</strong> Maximum 5 keywords
                          (italics)
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Submission Methods */}
                  <div className="bg-conference-gold/10 rounded-lg p-6">
                    <h4 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                      <Send className="w-5 h-5 text-conference-gold" />
                      Submission Methods
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      The extended abstract can be submitted through:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        className="bg-conference-gold hover:bg-conference-gold/90 text-conference-navy font-bold"
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Submit via Online Portal
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-conference-gold text-conference-gold hover:bg-conference-gold/10"
                      >
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=chemconflux26@gmail.com&su=Paper Submission for CHEM-CONFLUX’26"
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
        </div>
      </section>

      {/* Contact for Registration */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold mb-4">
            Need Help with Registration?
          </h2>
          <p className="text-muted-foreground mb-6">
            For any queries regarding registration, payment, or paper
            submission, please contact us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:chemconflux26@gmail.com"
              className="inline-flex items-center gap-2 text-conference-gold hover:underline font-semibold"
            >
              <Send className="w-4 h-4" />
              chemconflux26@gmail.com
            </a>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <a
              href="tel:+919003670402"
              className="text-foreground hover:text-conference-gold"
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
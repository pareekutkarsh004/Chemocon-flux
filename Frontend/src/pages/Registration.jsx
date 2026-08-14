import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  FileText,
  Send,
  Calendar,
  ExternalLink,
  Building,
  GraduationCap,
  Sparkles,
  HelpCircle,
  QrCode,
  BookOpen,
  AlertCircle,
  CheckCircle,
  Clock,
  Users,
} from "lucide-react";

import qrCode from "@/assets/Committes Image/qrcode.png";
import cppmBook from "@/assets/cppm-degruyter.png";

const registrationFees = [
  { category: "Delegates from academics/Industries/Govt. org", earlyBird: "₹ 5900/-", standard: "₹ 7080/-" },
  { category: "PG Students/Research Scholars", earlyBird: "₹ 3540/-", standard: "₹ 4130/-" },
  { category: "UG students", earlyBird: "₹ 1770/-", standard: "₹ 2360/-" },
  { category: "Foreign Delegates/participants", earlyBird: "$ 295/-", standard: "$ 354/-" },
  { category: "Foreign accompanying person", earlyBird: "$ 118/-", standard: "$ 118/-" },
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
  { event: "Submission of Abstract", oldDate: "August 15, 2026", newDate: "September 15, 2026", extended: true, icon: Calendar },
  { event: "Intimation of Acceptance", oldDate: "August 30, 2026", newDate: "September 20, 2026", extended: true, icon: CheckCircle },
  { event: "Registration Deadline", oldDate: "September 25, 2026", newDate: "October 10, 2026", extended: true, icon: Clock },
  { event: "CHEM-CONFLUX²⁶ Conference", date: "October 22-24, 2026", extended: false, highlight: true, icon: Users },
];

const EXTERNAL_GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfOci0F3Qo8KBkE0sFcRyPMtZlCuG-TKBP1E-R42gNVG4jAfw/viewform";

const Registration = () => {
  const location = useLocation();
  const [submittingAbstract, setSubmittingAbstract] = useState(location.state?.submittingAbstract || null);

  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative hero-section-bg text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/5 dark:bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-orange-400" />
            <p className="text-orange-400 font-semibold tracking-wider uppercase text-sm">Join Us</p>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">Registration</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Register for CHEM-CONFLUX²⁶ - International Conference on Sustainable Environment & Energy Innovations
          </p>
        </div>
      </section>

      {/* Deadline Extended Ticker */}
      <section className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 dark:from-orange-600 dark:via-red-600 dark:to-orange-600 overflow-hidden">
        <div className="ticker-wrapper py-2">
          <div className="ticker-content">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="inline-flex items-center gap-4 mx-8 text-white font-semibold text-sm tracking-wide whitespace-nowrap">
                <span className="inline-flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  ABSTRACT SUBMISSION DEADLINE EXTENDED — Submission of Abstract: 15 September 2026
                </span>
                <span>•</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates Timeline */}
      <section className="py-16 bg-muted dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-2 text-center text-foreground">Important Dates</h2>
          <p className="text-center font-semibold text-orange-500 mb-12 flex items-center justify-center gap-2 text-md sm:text-lg">
            <span>📢</span> IMPORTANT UPDATE — DEADLINES EXTENDED
          </p>
          
          <div className="max-w-4xl mx-auto px-4">
            <div className="relative">
              {/* Timeline line - continuous */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-orange-500 via-orange-500 to-orange-500/30 hidden md:block" />

              <div className="space-y-0">
                {importantDates.map((item, index) => (
                  <div
                    key={item.event}
                    className="flex items-stretch gap-6 group"
                  >
                    {/* Icon with connector */}
                    <div className="relative flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-card dark:bg-slate-800 border-2 border-primary/40 dark:border-primary/50 flex items-center justify-center flex-shrink-0 relative z-10 group-hover:bg-primary/20 group-hover:border-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                        <item.icon className="w-7 h-7 text-primary" />
                      </div>
                      {/* Connector line between icons */}
                      {index < importantDates.length - 1 && (
                        <div className="w-0.5 flex-1 bg-primary/50 hidden md:block min-h-[24px]" />
                      )}
                    </div>

                    {/* Content card */}
                    <div className={`bg-card dark:bg-white/5 backdrop-blur-sm border-2 rounded-xl p-6 flex-1 transition-all duration-300 group-hover:translate-x-2 mb-6 ${
                      !item.extended
                        ? "border-orange-500/60 bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent dark:border-orange-400/50 shadow-lg shadow-orange-500/10"
                        : "border-primary/15 dark:border-white/10 hover:bg-secondary dark:hover:bg-white/10 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/15"
                    }`}>
                      {item.extended ? (
                        <div>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="line-through text-muted-foreground text-sm font-medium">{item.oldDate}</span>
                            <span className="text-xs bg-orange-500/10 text-orange-500 font-semibold px-2 py-0.5 rounded-full border border-orange-500/20">Deadline Extended</span>
                          </div>
                          <p className="font-display text-xl font-bold text-primary">{item.newDate}</p>
                        </div>
                      ) : (
                        <div>
                          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-500 text-white mb-2 shadow-sm uppercase tracking-wider">
                            <span>★</span> Main Conference Event
                          </div>
                          <p className="font-display text-2xl font-black text-orange-500 mb-1 tracking-tight">
                            {item.date}
                          </p>
                        </div>
                      )}
                      <p className="text-foreground font-semibold mt-1">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Selection Section */}
      <section className="pt-20 pb-0 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-border dark:border-white/10 shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">Register Now</h2>
                  <p className="text-muted-foreground">Please select your submission status to proceed</p>
                </div>
              </div>

              {/* Step 1: Abstract Question */}
              <div className="p-6 rounded-xl border border-primary/20 bg-primary/5 mb-8">
                <Label className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  Are you submitting an abstract? <span className="text-destructive">*</span>
                </Label>
                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant={submittingAbstract === "yes" ? "default" : "outline"}
                    className="min-w-[120px] font-bold transition-all"
                    onClick={() => setSubmittingAbstract("yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    type="button"
                    variant={submittingAbstract === "no" ? "default" : "outline"}
                    className="min-w-[120px] font-bold transition-all"
                    onClick={() => setSubmittingAbstract("no")}
                  >
                    No
                  </Button>
                </div>
              </div>

              {/* Step Logic for "YES" Selection */}
              {submittingAbstract === "yes" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                  {/* Step 1 Content */}
                  <div className="bg-muted/30 border-2 border-dashed border-primary/30 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <ExternalLink className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1">Step 1: Abstract Submission Required</h3>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          Please ensure you have submitted your abstract via the Microsoft CMT portal and received your <strong>Applicant ID</strong> before filling the registration form.
                        </p>
                        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md hover:scale-105 transition-all mt-2">
                          <a href="https://cmt3.research.microsoft.com/CHEMCONFLUX2026" target="_blank" rel="noopener noreferrer">
                            Go to Microsoft CMT Portal <ExternalLink className="ml-2 w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="py-4 text-center border-y border-dashed border-primary/20 my-4">
                    <p className="font-display font-bold text-orange-500 dark:text-orange-400 text-xs sm:text-sm tracking-widest uppercase">
                      REGISTRATION FORM WILL BE ACTIVE Shortly ( AFTER ABSTRACT ACCEPTANCE)
                    </p>
                  </div>

                  {/* Step 2 Content */}
                  <div className="bg-muted/30 border-2 border-dashed border-primary/30 rounded-xl p-6 opacity-60">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <Send className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1">Step 2: Complete Registration</h3>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          After abstract acceptance and confirmation, kindly fill the google form
                        </p>
                        <Button disabled size="lg" className="bg-slate-400 dark:bg-slate-700 text-slate-200 dark:text-slate-400 font-bold shadow-lg cursor-not-allowed">
                          Fill Registration Form (Available Shortly) <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Layout for "NO" Selection (No Steps, just the direct button) */}
              {submittingAbstract === "no" && (
                <div className="text-center pt-4 border-t border-border/50 animate-in zoom-in duration-300">
                  <p className="text-sm text-muted-foreground mb-4">
                    Please click the button below to proceed to the official Google Form and complete your registration.
                  </p>
                  <Button disabled size="lg" className="bg-slate-400 dark:bg-slate-700 text-slate-200 dark:text-slate-400 font-bold px-10 py-6 text-lg rounded-full shadow-lg cursor-not-allowed">
                    Fill Registration Form (Available Shortly) <Send className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Fees & Payment Info */}
      <section className="pt-10 pb-20 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800" id="registration-fees">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-primary font-medium mb-2 tracking-wider uppercase">Registration Fee</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-foreground">Conference Registration</h2>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mt-4">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Early Bird till October 10, 2026</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto hidden md:block mb-12">
            <div className="overflow-hidden rounded-2xl border border-border dark:border-white/10">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-primary/80">
                    <th className="p-5 text-left text-primary-foreground font-semibold">Delegates</th>
                    <th className="p-5 text-center text-primary-foreground font-semibold">Early Bird</th>
                    <th className="p-5 text-center text-primary-foreground font-semibold">Standard</th>
                  </tr>
                </thead>
                <tbody>
                  {registrationFees.map((fee, index) => (
                    <tr key={index} className="border-t border-border dark:border-white/5 hover:bg-muted dark:hover:bg-white/5 transition-colors">
                      <td className="p-5 text-muted-foreground">{fee.category}</td>
                      <td className="p-5 text-center font-bold text-primary text-lg">{fee.earlyBird}</td>
                      <td className="p-5 text-center text-muted-foreground">{fee.standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Payment Section */}
          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-border dark:border-white/10">
              <h3 className="font-display text-xl font-bold mb-6 text-foreground flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" /> Bank Transfer Details
              </h3>
              <div className="space-y-3 text-sm">
                {Object.entries(BANK_DETAILS).map(([key, val]) => (
                  <div key={key} className="flex justify-between border-b border-border/50 pb-2 border-dashed">
                    <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="font-semibold text-foreground">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-border dark:border-white/10 flex flex-col items-center justify-center text-center">
              <div className="flex items-center gap-2 mb-4">
                <QrCode className="w-5 h-5 text-primary" />
                <h3 className="font-display text-xl font-bold text-foreground">Scan to Pay</h3>
              </div>
              <div className="w-48 h-48 bg-white p-2 rounded-xl mb-4 border border-border">
                <img src={qrCode} alt="Payment QR Code" className="w-full h-full object-contain" />
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-primary font-mono font-medium text-sm">UPI ID: {BANK_DETAILS.accountNumber}@sbi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Abstract Submission Info */}
      <section className="py-20 bg-muted dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900" id="abstract-submission">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-primary font-medium mb-2 tracking-wider uppercase">Abstract Submission</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Submit Your Abstract</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-border dark:border-white/10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We welcome submissions on original research, reviews and case studies on topics related to the thrust areas of the conference.
                  </p>
                  <div className="bg-muted dark:bg-slate-800/50 rounded-xl p-6 mb-6 border border-border dark:border-white/5">
                    <h4 className="font-display font-bold text-foreground mb-4">Abstract Format (One Page)</h4>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <p><span className="text-muted-foreground">Font:</span> Times New Roman, 12pt</p>
                      <p><span className="text-muted-foreground">Title:</span> Bold, 14pt</p>
                      <p><span className="text-muted-foreground">Authors:</span> Bold, 12pt</p>
                      <p><span className="text-muted-foreground">Keywords:</span> Max 5</p>
                    </div>
                  </div>
                  {/* <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg">
                    <a href="https://cmt3.research.microsoft.com/CHEMCONFLUX2026" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" /> Submit via CMT Portal
                    </a>
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Section */}
      <section className="py-20 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800" id="publication">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2 tracking-wider uppercase">Publication Opportunities</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">Publication</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Accepted abstracts will be published in conference proceedings with ISBN number. Selected submissions will be considered for publication in special/regular issues of SCI/Scopus-indexed journals and book series.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Journal Card */}
            <div className="bg-card dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-border dark:border-white/10 hover:border-primary/30 transition-all duration-300 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Book Cover Image */}
                <div className="flex-shrink-0 w-48 md:w-56 rounded-xl overflow-hidden shadow-2xl border border-border dark:border-white/10 hover:scale-105 transition-transform duration-300">
                  <img
                    src={cppmBook}
                    alt="Chemical Products and Process Modeling - De Gruyter"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Journal Details */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                    <BookOpen className="w-6 h-6 text-primary" />
                    <h3 className="font-display text-xl font-bold text-foreground">Chemical Products and Process Modeling</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">(De Gruyter)</p>
                  <div className="w-16 h-1 bg-primary/40 rounded-full mb-4 mx-auto md:mx-0" />
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Selected high-quality submissions will be considered for publication in this prestigious Scopus-indexed journal by De Gruyter, covering chemical process modeling and product engineering.
                  </p>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-500/15 border border-orange-200 dark:border-orange-500/30">
                    <Sparkles className="w-4 h-4 text-orange-500" />
                    <span className="text-orange-700 dark:text-orange-400 text-sm font-medium">
                      More Journals/Books to be included (visit the website for updates)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="py-20 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Need Help?</h2>
          <p className="text-muted-foreground mb-6">Contact us for any queries regarding registration or payment</p>
          <Button asChild variant="outline" className="border-2 border-primary/40 text-primary hover:bg-primary/15 font-semibold">
            <a href="mailto:chemconflux26@gmail.com"><Send className="w-4 h-4 mr-2" /> chemconflux26@gmail.com</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Registration;
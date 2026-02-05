import { useState } from "react";
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
} from "lucide-react";

import qrCode from "@/assets/Committes Image/qrcode.png";

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
  { event: "Submission of Abstract", date: "August 15, 2026" },
  { event: "Intimation of Acceptance", date: "August 30, 2026" },
  { event: "Registration Deadline", date: "September 25, 2026" },
];

const EXTERNAL_GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfOci0F3Qo8KBkE0sFcRyPMtZlCuG-TKBP1E-R42gNVG4jAfw/viewform";

const Registration = () => {
  const [submittingPaper, setSubmittingPaper] = useState(null);

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
       
      {/* Important Dates */}
      <section className="py-12 bg-muted dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-6 text-center text-foreground">Important Dates</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {importantDates.map((item, index) => (
              <div key={index} className="group relative flex items-center gap-4 bg-card dark:bg-white/5 backdrop-blur-sm px-6 py-4 rounded-xl border-2 border-primary/20 dark:border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 shadow-md">
                <div className="relative w-12 h-12 rounded-xl bg-primary/15 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary/25 transition-colors duration-300">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-primary font-medium">{item.event}</p>
                  <p className="font-bold text-lg text-foreground">{item.date}</p>
                </div>
              </div>
            ))}
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

              {/* Step 1: Paper Question */}
              <div className="p-6 rounded-xl border border-primary/20 bg-primary/5 mb-8">
                <Label className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  Are you submitting a paper? <span className="text-destructive">*</span>
                </Label>
                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant={submittingPaper === "yes" ? "default" : "outline"}
                    className="min-w-[120px] font-bold transition-all"
                    onClick={() => setSubmittingPaper("yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    type="button"
                    variant={submittingPaper === "no" ? "default" : "outline"}
                    className="min-w-[120px] font-bold transition-all"
                    onClick={() => setSubmittingPaper("no")}
                  >
                    No
                  </Button>
                </div>
              </div>

              {/* Step Logic for "YES" Selection */}
              {submittingPaper === "yes" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                  {/* Step 1 Content */}
                  <div className="bg-muted/30 border-2 border-dashed border-primary/30 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <ExternalLink className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1">Step 1: Paper Submission Required</h3>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          Please ensure you have submitted your paper via the Microsoft CMT portal and received your <strong>Applicant ID</strong> before filling the registration form.
                        </p>
                        <Button asChild variant="link" className="p-0 h-auto text-primary font-bold text-base hover:no-underline">
                          <a href="https://cmt3.research.microsoft.com/CHEMCONFLUX2026" target="_blank" rel="noopener noreferrer">
                            Go to Microsoft CMT Portal <ExternalLink className="ml-2 w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 Content */}
                  <div className="bg-muted/30 border-2 border-dashed border-primary/30 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <Send className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1">Step 2: Complete Registration</h3>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          Once you have your CMT ID, please proceed to fill the official Google Form to complete your registration process.
                        </p>
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg hover:scale-105 transition-all">
                          <a href={EXTERNAL_GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                            Fill Registration Form <ExternalLink className="ml-2 w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Layout for "NO" Selection (No Steps, just the direct button) */}
              {submittingPaper === "no" && (
                <div className="text-center pt-4 border-t border-border/50 animate-in zoom-in duration-300">
                  <p className="text-sm text-muted-foreground mb-4">
                    Please click the button below to proceed to the official Google Form and complete your registration.
                  </p>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-6 text-lg rounded-full shadow-lg hover:scale-105 transition-all">
                    <a href={EXTERNAL_GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                      Fill Registration Form <Send className="ml-2 w-5 h-5" />
                    </a>
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
              <span className="text-primary text-sm font-medium">Early Bird till August 30, 2026</span>
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

      {/* Paper Submission Info */}
      <section className="py-20 bg-muted dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900" id="paper-submission">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-primary font-medium mb-2 tracking-wider uppercase">Paper Submission</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Submit Your Research</h2>
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
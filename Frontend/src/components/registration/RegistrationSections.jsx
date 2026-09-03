// components/registration/RegistrationSections.jsx
import { Sparkles, Calendar, Building, QrCode, FileText, Send, ExternalLink, FileDown, AlertCircle, CheckCircle2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { registrationFees, importantDates, BANK_DETAILS } from "./registration-data"; // Import from data file
import qrCodeImg from "@/assets/brochure/qrcode.png"; // Adjust path

export const HeroSection = () => (
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
);

export const ImportantDatesSection = () => (
  <section className="py-12 bg-muted dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-2xl font-bold mb-6 text-center text-foreground">Important Dates</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {importantDates.map((item, index) => (
          <div key={index} className="group relative flex items-center gap-4 bg-card dark:bg-white/5 backdrop-blur-sm px-6 py-4 rounded-xl border-2 border-primary/20 dark:border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-xl">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-12 h-12 rounded-xl bg-primary/15 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary/25 transition-colors duration-300 group-hover:scale-110">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div className="relative">
              <p className="text-sm text-primary font-medium">{item.event}</p>
              <p className="font-bold text-lg text-foreground">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FeesSection = () => (
  <section className="py-20 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800" id="registration-fees">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <p className="text-primary font-medium mb-2 tracking-wider uppercase">Registration Fee</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-foreground">Conference Registration</h2>
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mt-4">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-primary text-sm font-medium">Early Bird till August 30, 2026 After Deadline Standard Fee will be Applicable</span>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="max-w-4xl mx-auto hidden md:block">
        <div className="overflow-hidden rounded-2xl border border-border dark:border-white/10">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-primary to-primary/80">
                <th className="p-5 text-left text-primary-foreground font-semibold">Delegates</th>
                <th className="p-5 text-center text-primary-foreground font-semibold">Early Bird<br /><span className="text-xs font-normal opacity-80">(incl. GST)</span></th>
                <th className="p-5 text-center text-primary-foreground font-semibold">Standard<br /><span className="text-xs font-normal opacity-80">(incl. GST)</span></th>
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

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4 max-w-md mx-auto">
        {registrationFees.map((fee, index) => (
          <div key={index} className="bg-card dark:bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-border dark:border-white/10">
            <p className="text-foreground font-medium mb-3">{fee.category}</p>
            <div className="flex justify-between">
              <div><p className="text-xs text-muted-foreground uppercase">Early Bird</p><p className="text-primary font-bold text-lg">{fee.earlyBird}</p></div>
              <div className="text-right"><p className="text-xs text-muted-foreground uppercase">Standard</p><p className="text-muted-foreground">{fee.standard}</p></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Payment Details Component Call */}
      <PaymentDetailsDisplay />
    </div>
  </section>
);

const PaymentDetailsDisplay = () => (
  <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
    {/* QR Details */}
    <div className="bg-card dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-border dark:border-white/10 flex flex-col items-center justify-center text-center">
      <div className="flex items-center gap-2 mb-4"><QrCode className="w-5 h-5 text-primary" /><h3 className="font-display text-xl font-bold text-foreground">Scan to Pay</h3></div>
      <div className="w-48 h-48 bg-white p-2 rounded-xl mb-4 border border-border shadow-sm overflow-hidden">
        <img src={qrCodeImg} alt="Payment QR Code" className="w-full h-full object-contain scale-110" />
      </div>
      <p className="text-sm text-muted-foreground mb-3 max-w-xs">Scan this QR code using any UPI app.<br /><span className="text-xs opacity-80">(Valid for UG / PG Students & Indian Delegates)</span></p>
      <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20"><span className="text-primary font-mono font-medium text-sm">UPI ID: {BANK_DETAILS.accountName.split(" ")[0].toLowerCase()}@sbi</span></div>
    </div>
    {/* Bank Details */}
    <div className="bg-card dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-border dark:border-white/10">
      <h3 className="font-display text-xl font-bold mb-6 text-foreground flex items-center gap-2"><Building className="w-5 h-5 text-primary" />Bank Transfer Details</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-y-3 text-sm">
           {/* Helper for rows */}
           {Object.entries({
             "Account Name": BANK_DETAILS.accountName,
             "Account Number": BANK_DETAILS.accountNumber,
             "IFSC Code": BANK_DETAILS.ifsc,
             "Branch": BANK_DETAILS.branch,
             "MICR Code": BANK_DETAILS.micr,
             "SWIFT": BANK_DETAILS.swift
           }).map(([label, value]) => (
             <div key={label} className="flex justify-between items-center border-b border-border/50 pb-2 border-dashed last:border-0 last:pb-0">
               <span className="text-muted-foreground">{label}</span>
               <span className="font-semibold text-right text-foreground">{value}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  </div>
);

export const PaperSubmissionSection = () => (
  <section className="py-20 bg-muted dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900" id="paper-submission">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <p className="text-primary font-medium mb-2 tracking-wider uppercase">Paper Submission</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Submit Your Research</h2>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="bg-card dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-border dark:border-white/10">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0"><FileText className="w-8 h-8 text-primary" /></div>
            <div className="flex-1">
              <p className="text-muted-foreground leading-relaxed mb-6">We welcome submissions on original research, reviews and case studies on topics related to the thrust areas of the conference.</p>
              <div className="bg-card dark:bg-slate-900/60 rounded-2xl border border-border dark:border-white/10 shadow-xl overflow-hidden mb-8">
                {/* Header Bar */}
                <div className="bg-gradient-to-r from-primary/15 via-primary/5 to-transparent px-6 py-5 border-b border-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shadow-inner">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg text-foreground">
                        Abstract Format & Guidelines
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Official formatting criteria for one-page submissions
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 w-fit">
                    One-Page A4 Requirement
                  </span>
                </div>

                <div className="p-6 space-y-6">
                  {/* Top Specifications Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-muted/60 dark:bg-slate-800/40 p-3.5 rounded-xl border border-border/60 flex flex-col gap-1">
                      <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Page Setup</span>
                      <span className="text-sm font-bold text-foreground">A4 with 1 inch margin</span>
                    </div>
                    <div className="bg-muted/60 dark:bg-slate-800/40 p-3.5 rounded-xl border border-border/60 flex flex-col gap-1">
                      <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Font Style</span>
                      <span className="text-sm font-bold text-foreground">Times New Roman, Single Spaced</span>
                    </div>
                    <div className="bg-muted/60 dark:bg-slate-800/40 p-3.5 rounded-xl border border-border/60 flex flex-col gap-1">
                      <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Keywords</span>
                      <span className="text-sm font-bold text-foreground">Max 5 keywords <span className="italic font-normal text-muted-foreground">(Italics)</span></span>
                    </div>
                  </div>

                  {/* Section-by-Section Formatting Table */}
                  <div>
                    <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Section Typography Rules</h5>
                    <div className="divide-y divide-border/60 rounded-xl border border-border/80 bg-background/50 dark:bg-slate-900/40 overflow-hidden">
                      <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm hover:bg-muted/30 transition-colors">
                        <span className="font-semibold text-foreground min-w-[140px]">Paper Title</span>
                        <span className="text-muted-foreground sm:text-right font-medium">Bold, <strong className="text-foreground">12 pt font size</strong></span>
                      </div>
                      <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm hover:bg-muted/30 transition-colors">
                        <span className="font-semibold text-foreground min-w-[140px]">Author Name(s)</span>
                        <span className="text-muted-foreground sm:text-right font-medium">Bold, <strong className="text-foreground">12 pt font size</strong> <span className="text-xs opacity-80">(Superscript numbers ¹, ² for affiliation)</span></span>
                      </div>
                      <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm hover:bg-muted/30 transition-colors">
                        <span className="font-semibold text-foreground min-w-[140px]">Affiliation & Email</span>
                        <span className="text-muted-foreground sm:text-right font-medium">Regular, <strong className="text-foreground">10 pt font size</strong> <span className="text-xs opacity-80">(Single spacing, include corresponding email*)</span></span>
                      </div>
                      <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm hover:bg-muted/30 transition-colors">
                        <span className="font-semibold text-foreground min-w-[140px]">Abstract Heading</span>
                        <span className="text-muted-foreground sm:text-right font-medium">Bold, <strong className="text-foreground">10 pt font size</strong></span>
                      </div>
                      <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm hover:bg-muted/30 transition-colors">
                        <span className="font-semibold text-foreground min-w-[140px]">Abstract Body</span>
                        <span className="text-muted-foreground sm:text-right font-medium">Regular <strong className="text-foreground">12 pt font size</strong> <span className="text-xs opacity-80">(Not bold, single spacing, max 250 words)</span></span>
                      </div>
                    </div>
                  </div>

                  {/* Important Policies Callout Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="bg-amber-500/10 dark:bg-amber-500/5 border border-amber-500/30 rounded-xl p-4 text-xs sm:text-sm">
                      <div className="flex items-center gap-1.5 font-bold text-amber-700 dark:text-amber-400 mb-1.5">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>Formatting Rule</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Title, Author Names, Abstract Heading, and Keywords Title must be <strong className="text-foreground">bold format only</strong>. Whole abstract body shall be regular text.
                      </p>
                    </div>

                    <div className="bg-blue-500/10 dark:bg-blue-500/5 border border-blue-500/30 rounded-xl p-4 text-xs sm:text-sm">
                      <div className="flex items-center gap-1.5 font-bold text-blue-700 dark:text-blue-400 mb-1.5">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                        <span>Plagiarism Policy</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Please check similarity before submitting. Submission confirms agreement that similarity check has been done and work is <strong className="text-foreground">plagiarism-free</strong>.
                      </p>
                    </div>

                    <div className="bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/30 rounded-xl p-4 text-xs sm:text-sm">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-700 dark:text-emerald-400 mb-1.5">
                        <Users className="w-4 h-4 flex-shrink-0" />
                        <span>Registration Rule</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        At least <strong className="text-foreground">one of the authors</strong> shall register formally in the conference for presentation and certificate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"><ExternalLink className="w-4 h-4 mr-2" />Submit via Online Portal</Button>
                <Button asChild variant="outline" className="border-2 border-primary/40 text-primary bg-primary/5 hover:bg-primary/15 hover:border-primary font-semibold shadow-sm hover:shadow-md transition-all duration-300">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=chemconflux26@gmail.com&su=Paper Submission for CHEM-CONFLUX'26" target="_blank" rel="noopener noreferrer"><span className="flex items-center"><Send className="w-4 h-4 mr-2" />Email to chemconflux26@gmail.com</span></a>
                </Button>
                <Button asChild variant="outline" className="border-primary text-primary bg-primary/10 hover:bg-primary hover:text-primary-foreground font-bold shadow-md hover:scale-105 transition-all duration-300 group">
                  <a href={`${import.meta.env.BASE_URL}Updated Abstract Template CHEMCONFLUX26.docx`} download="Updated Abstract Template CHEMCONFLUX26.docx" className="inline-flex items-center">
                    <FileDown className="w-4 h-4 mr-2 group-hover:animate-bounce" />Download Abstract Template (.docx)
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-orange-500/50 text-orange-500 dark:text-orange-400 bg-orange-500/5 hover:bg-orange-500 hover:text-white font-semibold shadow-sm hover:scale-105 transition-all duration-300 group">
                  <a href={`${import.meta.env.BASE_URL}CHEMCONFLUX 26-Brochure-Chemical Department-MNNIT (All Date Extended).pdf`} download="CHEMCONFLUX 26-Brochure-Chemical Department-MNNIT (All Date Extended).pdf" className="inline-flex items-center">
                    <FileDown className="w-4 h-4 mr-2 group-hover:animate-bounce" />Download Brochure (.pdf)
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const ContactSection = () => (
  <section className="py-20 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Need Help with Registration?</h2>
      <p className="text-muted-foreground mb-6">For any queries regarding registration, payment, or paper submission</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button asChild variant="outline" className="border-2 border-primary/40 text-primary bg-primary/5 hover:bg-primary/15 hover:border-primary font-semibold shadow-sm hover:shadow-md transition-all duration-300">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=chemconflux26@gmail.com&su=Registration Query for CHEM-CONFLUX'26" target="_blank" rel="noopener noreferrer"><span className="flex items-center"><Send className="w-4 h-4 mr-2" />chemconflux26@gmail.com</span></a>
        </Button>
      </div>
    </div>
  </section>
);
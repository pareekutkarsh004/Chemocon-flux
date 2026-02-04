// components/registration/RegistrationSections.jsx
import { Sparkles, Calendar, Building, QrCode, FileText, Send, ExternalLink } from "lucide-react";
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
              <div className="bg-muted dark:bg-slate-800/50 rounded-xl p-6 mb-6 border border-border dark:border-white/5">
                <h4 className="font-display font-bold text-foreground mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-primary" />Abstract Format (One Page)</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {[{ label: "Page Size", value: "A4, 1 inch margin" }, { label: "Font", value: "Times New Roman, 12pt" }, { label: "Title", value: "Bold, 14pt" }, { label: "Authors", value: "Bold, 12pt" }, { label: "Affiliation", value: "12pt" }, { label: "Keywords", value: "Max 5 (italics)" }].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm"><span className="w-2 h-2 rounded-full bg-primary" /><span className="text-muted-foreground">{item.label}:</span><span className="text-foreground">{item.value}</span></div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"><ExternalLink className="w-4 h-4 mr-2" />Submit via Online Portal</Button>
                <Button asChild variant="outline" className="border-2 border-primary/40 text-primary bg-primary/5 hover:bg-primary/15 hover:border-primary font-semibold shadow-sm hover:shadow-md transition-all duration-300">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=chemconflux26@gmail.com&su=Paper Submission for CHEM-CONFLUX'26" target="_blank" rel="noopener noreferrer"><span className="flex items-center"><Send className="w-4 h-4 mr-2" />Email to chemconflux26@gmail.com</span></a>
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
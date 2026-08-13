import { Layout } from "@/components/layout/Layout";
import { Calendar, AlertCircle, Sparkles } from "lucide-react";

const importantDates = [
  { event: "Submission of Abstract", originalDate: "August 15, 2026", newDate: "September 15, 2026", extended: true },
  { event: "Intimation of Acceptance", originalDate: "August 30, 2026", newDate: "September 20, 2026", extended: true },
  { event: "Registration Deadline", originalDate: "September 25, 2026", newDate: "October 10, 2026", extended: true },
  { event: "CHEM-CONFLUX²⁶ Conference", date: "October 22-24, 2026", extended: false, highlight: true },
];

function ImportantDatesPage() {
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
            <p className="text-orange-400 font-semibold tracking-wider uppercase text-sm">Schedule & Deadlines</p>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">Important Dates</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Key deadlines and timeline for CHEM-CONFLUX²⁶ - International Conference on Sustainable Environment & Energy Innovations
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

      {/* Important Dates Timeline Section */}
      <section className="py-20 bg-muted dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 min-h-[50vh]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-2 text-center text-foreground">Important Dates</h2>
          <p className="text-center font-semibold text-orange-500 mb-16 flex items-center justify-center gap-2 text-md sm:text-lg">
            <span>📢</span> IMPORTANT UPDATE — DEADLINES EXTENDED
          </p>

          <div className="max-w-5xl mx-auto px-4">
            {/* Desktop Timeline (Alternating Horizontal) */}
            <div className="hidden md:block relative py-28">
              {/* Horizontal line */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

              <div className="grid grid-cols-3 gap-8 relative z-10">
                {importantDates.slice(0, 3).map((item, index) => {
                  const isAbove = index % 2 === 0;
                  return (
                    <div key={index} className="relative flex flex-col items-center">
                      {/* Node on line */}
                      <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center shadow-md bg-card">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                      </div>

                      {/* Content Box */}
                      <div 
                        className={`
                          absolute bg-card dark:bg-white/5 border-2 border-primary/20 dark:border-white/10 rounded-xl p-5 w-64 shadow-md text-center hover:border-primary/50 transition-all duration-300 hover:scale-105
                          ${isAbove ? "bottom-[calc(50%+24px)]" : "top-[calc(50%+24px)]"}
                        `}
                      >
                        {/* Connecting Line */}
                        <div 
                          className={`
                            absolute left-1/2 -translate-x-1/2 w-0.5 h-6 bg-primary/55
                            ${isAbove ? "top-full" : "bottom-full"}
                          `} 
                        />
                        
                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{item.event}</p>
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <span className="text-xs text-muted-foreground line-through">{item.originalDate}</span>
                          <span className="text-[10px] bg-orange-500/10 text-orange-500 font-semibold px-1.5 py-0.5 rounded border border-orange-500/20">Extended</span>
                        </div>
                        <p className="text-base font-bold text-foreground">{item.newDate}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Timeline (Vertical Stack) */}
            <div className="md:hidden space-y-6">
              {importantDates.map((item, index) => (
                <div key={index} className={`flex gap-4 items-start bg-card dark:bg-white/5 border rounded-xl p-5 shadow-sm ${item.highlight ? "border-orange-500/50 bg-orange-500/5" : "border-primary/25"}`}>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{item.event}</p>
                    {item.extended ? (
                      <>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-muted-foreground line-through">{item.originalDate}</span>
                          <span className="text-[10px] bg-orange-500/10 text-orange-500 font-semibold px-1.5 py-0.5 rounded border border-orange-500/20">Extended</span>
                        </div>
                        <p className="text-base font-bold text-foreground">{item.newDate}</p>
                      </>
                    ) : (
                      <p className="text-base font-extrabold text-orange-500">{item.date}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ImportantDatesPage;

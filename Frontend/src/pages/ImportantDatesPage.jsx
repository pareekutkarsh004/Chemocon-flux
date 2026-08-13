import { Layout } from "@/components/layout/Layout";
import { Calendar, AlertCircle, Sparkles, CheckCircle, Clock, Users } from "lucide-react";

const importantDates = [
  { event: "Submission of Abstract", oldDate: "August 15, 2026", newDate: "September 15, 2026", extended: true, icon: Calendar },
  { event: "Intimation of Acceptance", oldDate: "August 30, 2026", newDate: "September 20, 2026", extended: true, icon: CheckCircle },
  { event: "Registration Deadline", oldDate: "September 25, 2026", newDate: "October 10, 2026", extended: true, icon: Clock },
  { event: "CHEM-CONFLUX²⁶ Conference", date: "October 22-24, 2026", extended: false, highlight: true, icon: Users },
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
    </Layout>
  );
}

export default ImportantDatesPage;

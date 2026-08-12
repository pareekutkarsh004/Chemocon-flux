import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { CountdownTimer } from "@/components/home/CountdownTimer";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ConferenceTracks } from "@/components/home/ConferenceTracks";
import { ImportantDates } from "@/components/home/ImportantDates";
import { Sponsors } from "@/components/home/Sponsors";
import { RegistrationCTA } from "@/components/home/RegistrationCTA";
import { AlertCircle } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <Hero />

      {/* Deadline Extended Ticker */}
      <section className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 dark:from-orange-600 dark:via-red-600 dark:to-orange-600 overflow-hidden">
        <div className="ticker-wrapper py-2">
          <div className="ticker-content">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="inline-flex items-center gap-8 mx-8 text-white font-semibold text-sm tracking-wide whitespace-nowrap">
                <span className="inline-flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  DEADLINE EXTENDED
                </span>
                <span>•</span>
                <span>Submission of Abstract — 15 September 2026</span>
                <span>•</span>
                <span>Intimation of Acceptance — 20 September 2026</span>
                <span>•</span>
                <span>Registration Deadline — 10 October 2026</span>
                <span>•</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-12 bg-muted dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <CountdownTimer />
        </div>
      </section>
      <AboutPreview />
      <ConferenceTracks />
      <ImportantDates />
      <Sponsors />
      <RegistrationCTA />
    </Layout>
  );
};

export default Index;

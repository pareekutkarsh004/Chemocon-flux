import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { CountdownTimer } from "@/components/home/CountdownTimer";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ConferenceTracks } from "@/components/home/ConferenceTracks";
import { ImportantDates } from "@/components/home/ImportantDates";
import { Sponsors } from "@/components/home/Sponsors";
import { RegistrationCTA } from "@/components/home/RegistrationCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
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

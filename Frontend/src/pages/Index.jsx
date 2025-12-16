import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ConferenceTracks } from "@/components/home/ConferenceTracks";
import { ImportantDates } from "@/components/home/ImportantDates";
import { Sponsors } from "@/components/home/Sponsors";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutPreview />
      <ConferenceTracks />
      <ImportantDates />
      <Sponsors />
    </Layout>
  );
};

export default Index;

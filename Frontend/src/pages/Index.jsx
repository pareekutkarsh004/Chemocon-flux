import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ConferenceTracks } from "@/components/home/ConferenceTracks";
import { ImportantDates } from "@/components/home/ImportantDates";
import { Sponsors } from "@/components/home/Sponsors";

const Index = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <AboutPreview />
        <ConferenceTracks />
        <ImportantDates />
        <Sponsors />
      </motion.div>
    </Layout>
  );
};

export default Index;
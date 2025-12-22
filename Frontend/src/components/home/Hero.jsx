import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import mnnitCampus1 from "@/assets/mnnit-campus-1.jpeg";

const campusImages = [mnnitCampus1];

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="relative min-h-[650px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${mnnitCampus1}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-conference-navy/95 via-conference-navy/80 to-conference-navy/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p variants={itemVariants} className="text-conference-gold font-medium mb-4 tracking-wide">
            INTERNATIONAL CONFERENCE
          </motion.p>
          <motion.h1 variants={itemVariants} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            CHEM-CONFLUX²⁶
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-primary-foreground/90 font-display mb-2">
            Sustainable Environment & Energy Innovations
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg text-primary-foreground/80 italic mb-8">
            Sustainable Energy, Environment, Green Technology & Climate Change
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 mb-8 text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-conference-gold" />
              <span>October 22-24, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-conference-gold" />
              <span>MNNIT Allahabad, Prayagraj</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Button asChild className="bg-conference-gold hover:bg-conference-gold-light text-primary font-semibold">
              <a href="https://forms.gle/w2xclc8rz1LQvusH7" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
            <Button asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
              <a href="#about">Learn More</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Users, 
  Award, 
  Image as ImageIcon 
} from "lucide-react";
import { Button } from "@/components/ui/button";

// --- IMAGE IMPORTS (Correct relative path for src/pages/) ---
import img1 from "@/assets/pastphotos/Picture1.png";
import img2 from "@/assets/pastphotos/Picture2.png";
import img3 from "@/assets/pastphotos/Picture3.png";
import img4 from "@/assets/pastphotos/EQva2bbU0AE3XIO.jpg";
import img5 from "@/assets/pastphotos/Picture5.png";
import img6 from "@/assets/pastphotos/Picture6.png";
import img7 from "@/assets/pastphotos/Picture7.png";
import img8 from "@/assets/pastphotos/Picture8.png";
import img9 from "@/assets/pastphotos/Picture9.png";
import img10 from "@/assets/pastphotos/Picture10.png";
import img11 from "@/assets/pastphotos/Picture11.png";
import img12 from "@/assets/pastphotos/Picture12.png";

// --- DATA GROUPING ---
const sections = [
  {
    id: "01",
    title: "Grand Inauguration & Keynotes",
    description: "The conference began with the lighting of the lamp by distinguished dignitaries, followed by inspiring keynote addresses from global experts in Chemical Engineering and Sustainable Energy.",
    icon: Sparkles,
    images: [img1, img2, img3, img4], 
  },
  {
    id: "02",
    title: "Knowledge Exchange & Sessions",
    description: "Technical sessions, paper presentations, and workshops fostered intense discussions on Green Technology, Hydrogen Energy, and Climate Change mitigation strategies.",
    icon: Users,
    images: [img7, img8, img12, img9], 
  },
  {
    id: "03",
    // 👇 UPDATED HEADING & DESCRIPTION 👇
    title: "Valedictory & Award Ceremony",
    description: "The conference concluded with a prestigious Valedictory function honoring excellence. Best Paper and Best Poster awards were presented to distinguished researchers for their innovative contributions.",
    icon: Award,
    images: [img5, img6, img10, img11], 
  },
];

const PastEvents = () => {
  return (
    <Layout>
      {/* --- HERO SECTION --- */}
      <section className="relative hero-section-bg text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/5 dark:bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <p className="text-orange-400 font-semibold mb-4 tracking-wider uppercase flex items-center gap-2">
              <ImageIcon className="w-5 h-5" />
              Archives
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Past <span className="text-orange-400">Glimpses</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              A visual archive of innovation, collaboration, and memories from CHEM-CONFLUX 2020 & 2022.
            </p>
          </div>
        </div>
      </section>

      {/* --- EVENT SECTIONS (Stacked for Bigger Photos) --- */}
      <section className="py-20 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 space-y-32">
          
          {sections.map((section) => (
            <div key={section.id} className="flex flex-col gap-10">
              
              {/* 1. Header Text */}
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase border border-primary/20">
                  <section.icon className="w-3 h-3" />
                  Chapter {section.id}
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
                  {section.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {section.description}
                </p>
              </div>

              {/* 2. BIG PHOTOS (2x2 Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {section.images.map((imgSrc, imgIdx) => (
                  <div 
                    key={imgIdx} 
                    className="
                      group relative overflow-hidden rounded-2xl 
                      border border-border dark:border-white/10 shadow-lg
                      h-[300px] md:h-[450px] lg:h-[500px]
                    "
                  >
                    <img 
                      src={imgSrc} 
                      alt={`${section.title} ${imgIdx}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                ))}
              </div>

              {/* Decorative Divider */}
              <div className="flex justify-center pt-8">
                <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full" />
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* --- CTA BOTTOM --- */}
      <section className="py-24 bg-muted dark:bg-slate-950 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Be Part of the Next Chapter
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto text-lg">
            Join us at CHEM-CONFLUX'26 to create new memories, forge partnerships, and shape the future of energy.
          </p>
          
          <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-7 rounded-full text-xl font-bold shadow-xl hover:shadow-orange-500/30 transition-all hover:-translate-y-1">
            <Link to="/registration">Register Now</Link>
          </Button>

        </div>
      </section>

    </Layout>
  );
};

export default PastEvents;
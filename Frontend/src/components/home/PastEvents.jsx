import { useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { 
  Sparkles, 
  Calendar, 
  Users, 
  Mic2, 
  Award, 
  ChevronRight, 
  ChevronLeft 
} from "lucide-react";
import { Button } from "@/components/ui/button";

// --- IMAGE IMPORTS (Using Correct Relative Paths) ---
import img1 from "../../assets/pastphotos/Picture1.png";
import img2 from "../../assets/pastphotos/Picture2.png";
import img3 from "../../assets/pastphotos/Picture3.png";
import img4 from "../../assets/pastphotos/Picture4.png";
import img5 from "../../assets/pastphotos/Picture5.png";
import img6 from "../../assets/pastphotos/Picture6.png";
import img7 from "../../assets/pastphotos/Picture7.png";
import img8 from "../../assets/pastphotos/Picture8.png";
import img9 from "../../assets/pastphotos/Picture9.png";
import img10 from "../../assets/pastphotos/Picture10.png";
import img11 from "../../assets/pastphotos/Picture11.png";
import img12 from "../../assets/pastphotos/Picture12.png";

// --- DATA GROUPING ---
const sections = [
  {
    title: "Grand Inauguration & Keynotes",
    description: "The conference began with the lighting of the lamp by distinguished dignitaries, followed by inspiring keynote addresses from global experts in Chemical Engineering and Sustainable Energy.",
    icon: Sparkles,
    images: [img1, img2, img3, img4], // First 4 images
    align: "left", // Text on left
  },
  {
    title: "Knowledge Exchange & Sessions",
    description: "Technical sessions, paper presentations, and workshops fostered intense discussions on Green Technology, Hydrogen Energy, and Climate Change mitigation strategies.",
    icon: Users,
    images: [img7, img8, img11, img9], // Technical images
    align: "right", // Text on right
  },
  {
    title: "Cultural Night & Valedictory",
    description: "Beyond academics, the event celebrated culture with vibrant performances and concluded with an award ceremony honoring the best research papers and posters.",
    icon: Award,
    images: [img5, img6, img10, img12], // Cultural/Closing images
    align: "left", // Text on left
  },
];

// --- REUSABLE CAROUSEL COMPONENT ---
const ImageCarousel = ({ images }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative group">
      {/* Navigation Buttons (Visible on Hover) */}
      <button 
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-orange-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button 
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-orange-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Scrollable Container */}
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((src, idx) => (
          <div 
            key={idx} 
            className="min-w-[280px] md:min-w-[320px] h-[220px] md:h-[260px] flex-shrink-0 snap-center rounded-2xl overflow-hidden border border-border dark:border-white/10 shadow-lg relative"
          >
            <img 
              src={src} 
              alt={`Event ${idx}`} 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
          </div>
        ))}
      </div>
    </div>
  );
};

const PastEvents = () => {
  return (
    <Layout>
      {/* --- HERO SECTION (Matches About.jsx) --- */}
      <section className="relative hero-section-bg text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/5 dark:bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <p className="text-orange-400 font-semibold mb-4 tracking-wider uppercase flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Archives
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Past <span className="text-orange-400">Glimpses</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Reliving the moments of innovation, collaboration, and celebration from CHEM-CONFLUX 2020 & 2024.
            </p>
          </div>
        </div>
      </section>

      {/* --- EVENT SECTIONS --- */}
      <section className="py-20 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 space-y-24">
          
          {sections.map((section, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                section.align === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <section.icon className="w-6 h-6" />
                  </div>
                  <p className="text-primary font-medium tracking-wider uppercase">
                    Chapter {index + 1}
                  </p>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  {section.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {section.description}
                </p>
                
                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
              </div>

              {/* Image Carousel */}
              <div className="flex-1 w-full max-w-2xl">
                {/* Decorative BG Blob */}
                <div className="relative">
                  <div className={`absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-[2rem] blur-2xl opacity-50`} />
                  <div className="relative bg-card dark:bg-white/5 backdrop-blur-sm border border-border dark:border-white/10 rounded-[2rem] p-4 shadow-2xl">
                    <ImageCarousel images={section.images} />
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* --- CTA BOTTOM --- */}
      <section className="py-20 bg-muted dark:bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Be Part of the Next Chapter
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join us at CHEM-CONFLUX'26 to create new memories, forge partnerships, and shape the future of energy.
          </p>
          <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-orange-500/25 transition-all hover:-translate-y-1">
            <a href="/registration">Register Now</a>
          </Button>
        </div>
      </section>

    </Layout>
  );
};

export default PastEvents;
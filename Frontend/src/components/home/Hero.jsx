import { useState, useEffect } from "react";
import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import mnnitCampus1 from "@/assets/mnnit-campus-1.jpeg";
import mnnitCampus2 from "@/assets/mnnit-campus-2.jpeg";
import mnnitCampus3 from "@/assets/mnnit-campus-3.jpeg";

const campusImages = [mnnitCampus1];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % campusImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToImage = (index) => setCurrentImage(index);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + campusImages.length) % campusImages.length);
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % campusImages.length);

  return (
    <section className="relative min-h-[650px] flex items-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {campusImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-conference-navy/95 via-conference-navy/80 to-conference-navy/60" />
      </div>

      {/* Carousel Controls */}
      {/* <button 
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-primary-foreground/20 hover:bg-primary-foreground/30 p-2 rounded-full transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-primary-foreground" />
      </button>
      <button 
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-primary-foreground/20 hover:bg-primary-foreground/30 p-2 rounded-full transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-primary-foreground" />
      </button> */}

      {/* Carousel Indicators */}
      {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {campusImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImage 
                ? "bg-conference-gold w-8" 
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div> */}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-conference-gold font-medium mb-4 tracking-wide">
            INTERNATIONAL CONFERENCE
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            CHEM-CONFLUX²⁶
          </h1>
          <p className="text-xl text-primary-foreground/90 font-display mb-2">
            Sustainable Environment & Energy Innovations
          </p>
          <p className="text-lg text-primary-foreground/80 italic mb-8">
            Sustainable Energy, Environment, Green Technology & Climate Change
          </p>

          <div className="flex flex-wrap gap-6 mb-8 text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-conference-gold" />
              <span>October 22-24, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-conference-gold" />
              <span>MNNIT Allahabad, Prayagraj</span>
            </div>
          </div>

          <p className="text-sm text-primary-foreground/80 mb-8 max-w-xl">
            Organized by Department of Chemical Engineering,
            <br />
            Motilal Nehru National Institute of Technology Allahabad
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              // size=""
              className="bg-conference-gold hover:bg-conference-gold-light text-primary font-semibold"
            >
              <a
                href="https://forms.gle/w2xclc8rz1LQvusH7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            </Button>
            <Button
              asChild
              // size="lg"
              // variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent hover:text-primary-foreground"
            >
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

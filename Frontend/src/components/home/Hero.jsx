import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
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
  const prevImage = () =>
    setCurrentImage(
      (prev) => (prev - 1 + campusImages.length) % campusImages.length
    );
  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % campusImages.length);

  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {campusImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ${
              index === currentImage
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Carousel Controls */}
  

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-orange-400 animate-pulse" />
            <p className="text-orange-400 font-bold tracking-widest uppercase text-base md:text-lg drop-shadow-lg">
              International Conference
            </p>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            CHEM-CONFLUX<span className="text-orange-400">²⁶</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 font-display mb-2">
            Sustainable Environment & Energy Innovations
          </p>
          <p className="text-lg text-slate-300 italic mb-8">
            Sustainable Energy, Environment, Green Technology & Climate Change
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <Calendar className="w-5 h-5 text-orange-400" />
              <span className="text-slate-200">October 22-24, 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <MapPin className="w-5 h-5 text-orange-400" />
              <span className="text-slate-200">MNNIT Allahabad, Prayagraj</span>
            </div>
          </div>

          <p className="text-sm text-slate-400 mb-8 max-w-xl">
            Organized by Department of Chemical Engineering,
            <br />
            Motilal Nehru National Institute of Technology Allahabad
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              // size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 hover:scale-105 transition-all duration-300"
            >
              <Link to="/registration">Register Now</Link>
            </Button>
            <Button
              asChild
              // size="lg"
              variant="outline"
              className="border-white/30 text-white bg-transparent hover:bg-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300"
            >
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

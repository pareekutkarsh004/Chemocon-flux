import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  FileDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import mnnitCampus1 from "@/assets/mnnit-campus-1.jpeg";
import mnnitCampus2 from "@/assets/mnnit-campus-2.jpeg";
import mnnitCampus3 from "@/assets/mnnit-campus-3.jpeg";
import brochurePdf from "@/assets/brochure/CHEMCONFLUX-26-Brochure.pdf";


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
        {/* CHANGED: Adjusted opacity from 95/80/60 to 70/40/20 for better photo visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-transparent" />
        {/* CHANGED: Subtle bottom vignette to keep the footer area clean but the main photo bright */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/30" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-orange-400 animate-pulse" />
            {/* CHANGED: Added drop-shadow for extra clarity on light background areas */}
            <p className="text-orange-400 font-bold tracking-widest uppercase text-base md:text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              International Conference
            </p>
          </div>

          {/* CHANGED: Added strong drop-shadow to text */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            CHEM-CONFLUX<span className="text-orange-400">²⁶</span>
          </h1>

          <p className="text-xl md:text-2xl text-white font-display mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Sustainable Environment & Energy Innovations
          </p>
          <p className="text-lg text-slate-100 italic mb-8 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            Sustainable Energy, Environment, Green Technology & Climate Change
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            {/* CHANGED: Increased backdrop-blur and background opacity for data badges */}
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Calendar className="w-5 h-5 text-orange-400" />
              <span className="text-white font-medium">
                October 22-24, 2026
              </span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <MapPin className="w-5 h-5 text-orange-400" />
              <span className="text-white font-medium">
                MNNIT Allahabad, Prayagraj
              </span>
            </div>
          </div>

          {/* CHANGED: Text color lightened for better contrast against the photo */}
          <p className="text-sm text-slate-200 font-medium mb-8 max-w-xl drop-shadow-md">
            Organized by Department of Chemical Engineering,
            <br />
            Motilal Nehru National Institute of Technology Allahabad
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 shadow-lg shadow-orange-500/20 hover:scale-105 transition-all duration-300"
            >
              <Link to="/registration">Register Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white bg-black/20 hover:bg-white/20 backdrop-blur-sm hover:scale-105 transition-all duration-300"
            >
              <a href="#about">Learn More</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-orange-400 text-orange-400 bg-black/20 hover:bg-orange-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 group"
            >
              <a
                href={brochurePdf}
                download
                className="group inline-flex items-center"
              >
                <FileDown className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Brochure
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import mnnitCampus1 from "@/assets/mnnit-campus-1.jpeg";
import mnnitCampus2 from "@/assets/mnnit-campus-2.jpeg";
import mnnitCampus3 from "@/assets/mnnit-campus-3.jpeg";

const slides = [
  {
    image: mnnitCampus1,
    title: "Academic Excellence",
    description:
      "MNNIT Allahabad stands as a beacon of technical education, producing world-class engineers and researchers since 1961. The institute consistently ranks among India's top NITs.",
    fact: "Ranked among Top 50 Engineering Institutes in India",
  },
  {
    image: mnnitCampus2,
    title: "State-of-the-Art Infrastructure",
    description:
      "Sprawling across 222 acres of lush greenery, the campus houses modern laboratories, research centers, and world-class facilities that foster innovation and learning.",
    fact: "222 acres of green, sustainable campus",
  },
  {
    image: mnnitCampus3,
    title: "Research & Innovation Hub",
    description:
      "Home to cutting-edge research in engineering, technology, and sciences. The institute collaborates with global universities and industries to drive innovation.",
    fact: "500+ research publications annually",
  },
];

const MNNITCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setDirection(index > currentSlide ? "next" : "prev");
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setDirection("next");
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setDirection("prev");
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-slate-900">
        {/* Image Container */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[550px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-600 ease-out ${
                index === currentSlide
                  ? "opacity-100 translate-x-0 scale-100"
                  : index < currentSlide ||
                    (currentSlide === 0 &&
                      index === slides.length - 1 &&
                      direction === "prev")
                  ? "opacity-0 -translate-x-full scale-95"
                  : "opacity-0 translate-x-full scale-95"
              }`}
              style={{ transitionDuration: "600ms" }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-transparent" />
            </div>
          ))}

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-12">
            <div
              className={`max-w-xl transition-all duration-500 ${
                isAnimating
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
              style={{ transitionDelay: isAnimating ? "0ms" : "200ms" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-5 h-5 text-orange-400" />
                <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                  MNNIT Allahabad
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
                {slides[currentSlide].title}
              </h3>
              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
                {slides[currentSlide].description}
              </p>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-400/30">
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                <span className="text-orange-300 text-sm font-medium">
                  {slides[currentSlide].fact}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-3 mt-6">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`group relative transition-all duration-300 ${
              index === currentSlide ? "w-20" : "w-3 hover:w-6"
            }`}
            aria-label={`Go to ${slide.title}`}
          >
            <div
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-orange-500"
                  : "bg-slate-600 group-hover:bg-orange-400/60"
              }`}
            />
            {index === currentSlide && (
              <div className="absolute inset-0 rounded-full bg-orange-500/30 animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {/* Thumbnail Strip */}
      <div className="hidden md:flex justify-center gap-3 mt-6 px-4">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
              index === currentSlide
                ? "ring-2 ring-orange-500 ring-offset-2 ring-offset-slate-900 scale-105"
                : "opacity-60 hover:opacity-100 hover:scale-105"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-20 h-14 object-cover"
            />
            {index === currentSlide && (
              <div className="absolute inset-0 bg-orange-500/20" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MNNITCarousel;

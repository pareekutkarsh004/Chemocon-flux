import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import prayagrajSangam from "@/assets/prayagraj-sangam.jpeg";
import prayagrajBridge from "@/assets/prayagraj-bridge.jpeg";
import prayagrajUniversity from "@/assets/prayagraj-university.jpeg";
import prayagrajKhusroBagh from "@/assets/prayagraj-khusro-bagh.jpeg";
import prayagrajKumbh from "@/assets/prayagraj-kumbh.jpeg";

const slides = [
  {
    image: prayagrajSangam,
    title: "Triveni Sangam",
    description:
      "The sacred confluence of three rivers—Ganga, Yamuna, and the mythical Saraswati. A place of immense spiritual significance where millions gather for holy dips.",
    fact: "Hosts the world's largest religious gathering, Kumbh Mela",
  },
  {
    image: prayagrajBridge,
    title: "New Yamuna Bridge",
    description:
      "A modern architectural marvel spanning the Yamuna River, connecting the old city with new developments. The cable-stayed bridge is a symbol of progress.",
    fact: "One of the longest cable-stayed bridges in Uttar Pradesh",
  },
  {
    image: prayagrajUniversity,
    title: "Allahabad University",
    description:
      "Founded in 1887, one of the oldest and most prestigious universities in India. Known as the 'Oxford of the East' for its rich academic heritage.",
    fact: "Alma mater of three former Prime Ministers of India",
  },
  {
    image: prayagrajKhusroBagh,
    title: "Khusro Bagh",
    description:
      "A magnificent Mughal garden housing the tombs of Prince Khusro, his mother, and sister. The sandstone mausoleums showcase exquisite Mughal architecture.",
    fact: "Built in the 17th century during Jahangir's reign",
  },
  {
    image: prayagrajKumbh,
    title: "Kumbh Mela",
    description:
      "The largest peaceful gathering of pilgrims on Earth. Held every 12 years at the Sangam, it attracts millions seeking spiritual purification.",
    fact: "UNESCO recognized as Intangible Cultural Heritage",
  },
];

const PrayagrajCarousel = () => {
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
    }, 6000);
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
                <MapPin className="w-5 h-5 text-orange-400" />
                <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                  Discover Prayagraj
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

export default PrayagrajCarousel;

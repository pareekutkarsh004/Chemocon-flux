import { useState, useEffect, useRef } from "react";
import { Award, BookOpen, Users, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

// Counter animation hook
function useCountUp(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
    }
  }, [startOnView]);

  useEffect(() => {
    if (!startOnView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return { count, ref };
}

function AnimatedNumber({ value, suffix = "", prefix = "" }) {
  // Parse the numeric value
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const { count, ref } = useCountUp(numericValue, 2000);

  // Format with commas
  const formattedCount = count.toLocaleString("en-IN");

  return (
    <span ref={ref}>
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
}

export function Sponsors() {
  const sponsorshipTiers = [
    {
      category: "Platinum",
      amount: 400000,
      displayAmount: "₹4,00,000",
      delegates: "04",
      gradient: "from-slate-300 to-slate-100",
    },
    {
      category: "Gold",
      amount: 200000,
      displayAmount: "₹2,00,000",
      delegates: "03",
      gradient: "from-yellow-400 to-yellow-300",
      featured: true,
    },
    {
      category: "Silver",
      amount: 100000,
      displayAmount: "₹1,00,000",
      delegates: "02",
      gradient: "from-gray-400 to-gray-300",
    },
  ];

  const souvenirSponsorship = [
    { type: "Inside Full Page", amount: 50000, displayAmount: "₹50,000" },
    { type: "Inside Half Page", amount: 25000, displayAmount: "₹25,000" },
  ];

  return (
    <section className="py-20 bg-muted dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wider uppercase">
            Support Us
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sponsorship Opportunities
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            The organizing committee requests support in the form of sponsorship
            from Government and private organizations for the success of this
            mega event.
          </p>
        </div>

        {/* Sponsorship Tiers */}
        <div className="mb-16">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
            Sponsorship Categories
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto items-end">
            {sponsorshipTiers.map((tier, index) => {
              const { count, ref } = useCountUp(tier.amount, 2500);
              const formattedCount = count.toLocaleString("en-IN");

              return (
                <div
                  key={tier.category}
                  ref={ref}
                  className={`group bg-card dark:bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-secondary dark:hover:bg-white/10 transition-all duration-300 text-center hover:-translate-y-2 ${
                    tier.featured
                      ? "border-primary/50 scale-105 md:scale-110"
                      : "border-border dark:border-white/10 hover:border-primary/30"
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${
                      tier.gradient
                    } flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                      tier.featured
                        ? "w-20 h-20 shadow-lg shadow-yellow-500/20"
                        : ""
                    }`}
                  >
                    <Award
                      className={`text-slate-800 ${
                        tier.featured ? "w-10 h-10" : "w-8 h-8"
                      }`}
                    />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {tier.category}
                  </h3>
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    ₹{formattedCount}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{tier.delegates} Free Delegates</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Souvenir Sponsorship */}
        <div>
          <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
            Souvenir Sponsorship
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {souvenirSponsorship.map((item) => {
              const { count, ref } = useCountUp(item.amount, 2000);
              const formattedCount = count.toLocaleString("en-IN");

              return (
                <div
                  key={item.type}
                  ref={ref}
                  className="group bg-card dark:bg-white/5 backdrop-blur-sm border border-border dark:border-white/10 rounded-xl p-6 hover:bg-secondary dark:hover:bg-white/10 hover:border-primary/30 transition-all duration-300 w-64 text-center hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/30 transition-colors">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground font-medium mb-2">
                    {item.type}
                  </p>
                  <p className="text-xl font-bold text-primary">
                    ₹{formattedCount}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact for Sponsorship */}
        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="border-orange-500 text-orange-400 bg-transparent hover:bg-orange-500/10"
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=chemconflux26@gmail.com&su=Sponsorship Inquiry for CHEM-CONFLUX'26"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center">
                <Send className="w-4 h-4 mr-2" />
                Contact for Sponsorship
              </span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

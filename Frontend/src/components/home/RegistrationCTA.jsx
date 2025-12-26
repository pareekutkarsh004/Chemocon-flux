import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RegistrationCTA() {
  return (
    <section className="py-20 bg-secondary dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-10 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">
              Limited Early Birds Available
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Join <span className="text-primary">CHEM-CONFLUX²⁶</span>?
          </h2>

          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Register now for the International Conference on Sustainable
            Environment & Energy Innovations. Early bird registration closes on
            August 30, 2026.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
            //   size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 hover:scale-105 transition-all duration-300 text-lg"
            >
              <Link to="/registration">
                Register Now <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
            //   size="lg"
              variant="outline"
              className="border-border dark:border-white/30 text-foreground bg-transparent hover:bg-secondary dark:hover:bg-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300"
            >
              <Link to="/about">
                Learn More <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg mx-auto">
            {[
              { value: "3", label: "Days" },
              { value: "8+", label: "Tracks" },
              { value: "500+", label: "Expected Delegates" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

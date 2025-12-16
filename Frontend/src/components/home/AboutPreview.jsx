import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import mnnitCampus from "@/assets/mnnit-campus-3.jpeg";

export function AboutPreview() {
  return (
    <section className="py-20 bg-background" id="program">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={mnnitCampus}
              alt="MNNIT Allahabad Campus"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-conference-gold text-primary p-6 rounded-lg shadow-lg hidden md:block">
              <p className="font-display text-3xl font-bold">5</p>
              <p className="text-sm">Days Program</p>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-conference-gold font-medium mb-2">ABOUT THE PROGRAM</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Advancing Process Optimization & Control
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This Faculty Development Program brings together experts from renowned institutions 
              worldwide to share knowledge on intelligent optimization and control techniques 
              for chemical processes. The program combines theoretical foundations with 
              hands-on computational practice using industry-standard tools like AspenTech and MATLAB.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-conference-gold/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-conference-gold" />
                </div>
                <div>
                  <p className="font-semibold">10+</p>
                  <p className="text-sm text-muted-foreground">Lectures</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-conference-gold/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-conference-gold" />
                </div>
                <div>
                  <p className="font-semibold">8</p>
                  <p className="text-sm text-muted-foreground">Speakers</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-conference-gold/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-conference-gold" />
                </div>
                <div>
                  <p className="font-semibold">Free</p>
                  <p className="text-sm text-muted-foreground">Registration</p>
                </div>
              </div>
            </div>

            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/about">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

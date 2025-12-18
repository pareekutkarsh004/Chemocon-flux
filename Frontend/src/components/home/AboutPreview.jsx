import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import mnnitCampus from "@/assets/mnnit-campus-3.jpeg";

export function AboutPreview() {
  return (
    <section className="py-20 bg-background" id="about">
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
              <p className="font-display text-3xl font-bold">3</p>
              <p className="text-sm">Days Conference</p>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-conference-gold font-medium mb-2">ABOUT THE CONFERENCE</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sustainable Energy & Environment
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              CHEM-CONFLUX²⁶ is a multi-disciplinary international conference covering thrust areas 
              concerning sustainable development of energy and environment. The conference provides 
              opportunities for delegates to establish business or research relations and find 
              partners for future collaboration.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-conference-gold/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-conference-gold" />
                </div>
                <div>
                  <p className="font-semibold">International</p>
                  <p className="text-sm text-muted-foreground">Speakers & Delegates</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-conference-gold/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-conference-gold" />
                </div>
                <div>
                  <p className="font-semibold">8+</p>
                  <p className="text-sm text-muted-foreground">Thrust Areas</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-conference-gold/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-conference-gold" />
                </div>
                <div>
                  <p className="font-semibold">Paper</p>
                  <p className="text-sm text-muted-foreground">Submissions Welcome</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-conference-gold/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-conference-gold" />
                </div>
                <div>
                  <p className="font-semibold">Certificate</p>
                  <p className="text-sm text-muted-foreground">For All Participants</p>
                </div>
              </div>
            </div>

            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/about">
                Details <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

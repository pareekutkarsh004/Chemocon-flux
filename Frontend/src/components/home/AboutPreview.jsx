import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import mnnitCampus from "@/assets/mnnit-campus-3.jpeg";

export function AboutPreview() {
  return (
    <section
      className="py-20 bg-secondary dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800"
      id="about"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <img
              src={mnnitCampus}
              alt="MNNIT Allahabad Campus"
              className="relative rounded-2xl shadow-2xl ring-1 ring-white/10 group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg hidden md:block group-hover:scale-110 transition-transform duration-300">
              <p className="font-display text-3xl font-bold">3</p>
              <p className="text-sm text-white/90">Days Conference</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-orange-400 font-medium mb-2 tracking-wider uppercase">
              About the Conference
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sustainable Energy & Environment
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              CHEM-CONFLUX²⁶ is a multi-disciplinary international conference
              covering thrust areas concerning sustainable development of energy
              and environment. The conference provides opportunities for
              delegates to establish business or research relations and find
              partners for future collaboration.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  icon: Users,
                  title: "International",
                  subtitle: "Speakers & Delegates",
                },
                { icon: BookOpen, title: "8+", subtitle: "Thrust Areas" },
                {
                  icon: FileText,
                  title: "Paper",
                  subtitle: "Submissions Welcome",
                },
                {
                  icon: Award,
                  title: "Certificate",
                  subtitle: "For All Participants",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 group/item">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center group-hover/item:bg-orange-500/30 transition-colors">
                    <item.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white hover:scale-105 transition-all duration-300"
            >
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

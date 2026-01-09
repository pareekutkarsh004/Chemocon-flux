import { Layout } from "@/components/layout/Layout";
import { 
  FileText, 
  Send, 
  Sparkles, 
  Sun, 
  Zap, 
  Factory, 
  Leaf, 
  Beaker, 
  Droplets, 
  Wind, 
  Recycle 
} from "lucide-react";

const thrustAreas = [
  { icon: Sun, title: "Sustainable Alternative Energies", description: "Bioenergy, Solar, Wind etc." },
  { icon: Zap, title: "Hydrogen Energy and Fuel Cells", description: "Clean hydrogen technologies" },
  { icon: Factory, title: "Energy Conservation and Management", description: "Innovative technologies for efficiency" },
  { icon: Leaf, title: "Biological Interventions", description: "Clean Energy and Environment" },
  { icon: Beaker, title: "Innovative Materials", description: "For Energy and Environment" },
  { icon: Droplets, title: "Water and Wastewater Treatment", description: "Treatment technologies" },
  { icon: Wind, title: "Climate Change Mitigation", description: "Sustainability solutions" },
  { icon: Recycle, title: "Air Pollution and Health", description: "Environmental health" },
  { icon: Factory, title: "Solid Waste Treatment", description: "Treatment and utilization" },
  { icon: Beaker, title: "Green and Environmental Chemistry", description: "Sustainable chemistry" },
  { icon: Zap, title: "Systems Engineering", description: "For Energy and Environmental Technologies" },
  { icon: Sparkles, title: "Contemporary Areas", description: "Any other area relevant to theme" },
];

function CallForPaper() {
  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative hero-section-bg text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/5 dark:bg-orange-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <p className="text-orange-400 font-semibold mb-4 tracking-wider uppercase flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Submissions Open
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Call for <span className="text-orange-400">Papers</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Submit your original contributions on Sustainable Environment &
              Energy Innovations. The conference welcomes research findings,
              technological advances, and practical applications.
            </p>
          </div>
        </div>
      </section>

      {/* Thrust Areas */}
      <section className="py-20 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2 tracking-wider uppercase">
              Research Topics
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Thrust Areas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We welcome submissions on the following topics relevant to
              sustainable development of energy and environment
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {thrustAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="group bg-card dark:bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-border dark:border-white/10 hover:bg-secondary dark:hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Paper Submission Guidelines */}
      <section className="py-20 bg-muted dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2 tracking-wider uppercase">
              Guidelines
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Paper Submission
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-border dark:border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                    Submission Requirements
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We welcome submissions on original research, reviews and
                    case studies on topics related to the thrust areas of the
                    conference.
                  </p>

                  <div className="bg-muted dark:bg-slate-800/50 rounded-xl p-6 mb-6 border border-border dark:border-white/5">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      Abstract Format (One Page)
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        { label: "Page Size", value: "A4 with 1 inch margin" },
                        {
                          label: "Font",
                          value: "Times New Roman, single spacing",
                        },
                        { label: "Font Size", value: "12 font size" },
                        { label: "Title", value: "Bold, 14 font size" },
                        { label: "Author(s)", value: "Bold, 12 font size" },
                        { label: "Keywords", value: "Max 5 (italics)" },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-muted-foreground">
                            {item.label}:
                          </span>
                          <span className="text-foreground">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl border border-primary/20 group hover:bg-primary/20 transition-all duration-300">
                    <Send className="w-6 h-6 text-primary group-hover:translate-x-1 transition-transform" />
                    <p className="text-foreground">
                      Submit to:{" "}
                      <a
                        href="mailto:chemconflux26@gmail.com"
                        className="text-primary font-semibold hover:underline"
                      >
                        chemconflux26@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Publications Info */}
            <div className="mt-8 bg-card dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-border dark:border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                    Publications
                  </h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                      Accepted abstracts will be published in conference
                      proceedings with Scopus/ISBN no.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                      Selected papers will be considered for publication in
                      special issues of renowned SCI/Scopus-indexed journals.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                      Best Paper Awards and Best Poster Awards will also be
                      presented.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CallForPaper;
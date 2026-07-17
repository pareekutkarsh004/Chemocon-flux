import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
  Recycle,
  FileDown,
  AlertCircle,
  CheckCircle2,
  Users
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

                  <div className="bg-card dark:bg-slate-900/60 rounded-2xl border border-border dark:border-white/10 shadow-xl overflow-hidden mb-8">
                    {/* Header Bar */}
                    <div className="bg-gradient-to-r from-primary/15 via-primary/5 to-transparent px-6 py-5 border-b border-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shadow-inner">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-lg text-foreground">
                            Abstract Format & Guidelines
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            Official formatting criteria for one-page submissions
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 w-fit">
                        One-Page A4 Requirement
                      </span>
                    </div>

                    <div className="p-6 space-y-6">
                      {/* Top Specifications Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="bg-muted/60 dark:bg-slate-800/40 p-3.5 rounded-xl border border-border/60 flex flex-col gap-1">
                          <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Page Setup</span>
                          <span className="text-sm font-bold text-foreground">A4 with 1 inch margin</span>
                        </div>
                        <div className="bg-muted/60 dark:bg-slate-800/40 p-3.5 rounded-xl border border-border/60 flex flex-col gap-1">
                          <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Font Style</span>
                          <span className="text-sm font-bold text-foreground">Times New Roman, Single Spaced</span>
                        </div>
                        <div className="bg-muted/60 dark:bg-slate-800/40 p-3.5 rounded-xl border border-border/60 flex flex-col gap-1">
                          <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Keywords</span>
                          <span className="text-sm font-bold text-foreground">Max 5 keywords <span className="italic font-normal text-muted-foreground">(Italics)</span></span>
                        </div>
                      </div>

                      {/* Section-by-Section Formatting Table */}
                      <div>
                        <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Section Typography Rules</h5>
                        <div className="divide-y divide-border/60 rounded-xl border border-border/80 bg-background/50 dark:bg-slate-900/40 overflow-hidden">
                          <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm hover:bg-muted/30 transition-colors">
                            <span className="font-semibold text-foreground min-w-[140px]">Paper Title</span>
                            <span className="text-muted-foreground sm:text-right font-medium">Bold, <strong className="text-foreground">12 pt font size</strong></span>
                          </div>
                          <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm hover:bg-muted/30 transition-colors">
                            <span className="font-semibold text-foreground min-w-[140px]">Author Name(s)</span>
                            <span className="text-muted-foreground sm:text-right font-medium">Bold, <strong className="text-foreground">12 pt font size</strong> <span className="text-xs opacity-80">(Superscript numbers ¹, ² for affiliation)</span></span>
                          </div>
                          <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm hover:bg-muted/30 transition-colors">
                            <span className="font-semibold text-foreground min-w-[140px]">Affiliation & Email</span>
                            <span className="text-muted-foreground sm:text-right font-medium">Regular, <strong className="text-foreground">10 pt font size</strong> <span className="text-xs opacity-80">(Single spacing, include corresponding email*)</span></span>
                          </div>
                          <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm hover:bg-muted/30 transition-colors">
                            <span className="font-semibold text-foreground min-w-[140px]">Abstract Heading</span>
                            <span className="text-muted-foreground sm:text-right font-medium">Bold, <strong className="text-foreground">10 pt font size</strong></span>
                          </div>
                          <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm hover:bg-muted/30 transition-colors">
                            <span className="font-semibold text-foreground min-w-[140px]">Abstract Body</span>
                            <span className="text-muted-foreground sm:text-right font-medium">Regular <strong className="text-foreground">12 pt font size</strong> <span className="text-xs opacity-80">(Not bold, single spacing, max 250 words)</span></span>
                          </div>
                        </div>
                      </div>

                      {/* Important Policies Callout Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        <div className="bg-amber-500/10 dark:bg-amber-500/5 border border-amber-500/30 rounded-xl p-4 text-xs sm:text-sm">
                          <div className="flex items-center gap-1.5 font-bold text-amber-700 dark:text-amber-400 mb-1.5">
                            <AlertCircle className="w-4 h-4 flex-shrink-0" />
                            <span>Formatting Rule</span>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            Title, Author Names, Abstract Heading, and Keywords Title must be <strong className="text-foreground">bold format only</strong>. Whole abstract body shall be regular text.
                          </p>
                        </div>

                        <div className="bg-blue-500/10 dark:bg-blue-500/5 border border-blue-500/30 rounded-xl p-4 text-xs sm:text-sm">
                          <div className="flex items-center gap-1.5 font-bold text-blue-700 dark:text-blue-400 mb-1.5">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                            <span>Plagiarism Policy</span>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            Please check similarity before submitting. Submission confirms agreement that similarity check has been done and work is <strong className="text-foreground">plagiarism-free</strong>.
                          </p>
                        </div>

                        <div className="bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/30 rounded-xl p-4 text-xs sm:text-sm">
                          <div className="flex items-center gap-1.5 font-bold text-emerald-700 dark:text-emerald-400 mb-1.5">
                            <Users className="w-4 h-4 flex-shrink-0" />
                            <span>Registration Rule</span>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            At least <strong className="text-foreground">one of the authors</strong> shall register formally in the conference for presentation and certificate.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-6">
                    <Button
                      asChild
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 shadow-lg shadow-orange-500/20 hover:scale-105 transition-all duration-300"
                    >
                      <Link to="/registration">
                        Register Now
                        <Send className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-primary text-primary bg-primary/10 hover:bg-primary hover:text-primary-foreground font-bold px-6 shadow-md hover:scale-105 transition-all duration-300 group"
                    >
                      <a
                        href={`${import.meta.env.BASE_URL}Updated Abstract Template CHEMCONFLUX26.docx`}
                        download="Updated Abstract Template CHEMCONFLUX26.docx"
                        className="inline-flex items-center"
                      >
                        <FileDown className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                        Download Abstract Template (.docx)
                      </a>
                    </Button>
                  </div>

                  {/* <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl border border-primary/20 group hover:bg-primary/20 transition-all duration-300">
                    <Send className="w-6 h-6 text-primary group-hover:translate-x-1 transition-transform" />

                    <p className="text-foreground">
                      Submit via CMT:&nbsp;
                      <a
                        href="https://cmt3.research.microsoft.com/CHEMCONFLUX2026"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-semibold hover:underline"
                      >
                        CMT LINK
                      </a>
                    </p>
                  </div> */}
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
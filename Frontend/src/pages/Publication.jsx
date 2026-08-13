import { Layout } from "@/components/layout/Layout";
import { BookOpen, Sparkles, Award, FileText } from "lucide-react";
import cppmBook from "@/assets/cppm-degruyter.png";

function Publication() {
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
              <BookOpen className="w-5 h-5" />
              Publication Opportunities
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              <span className="text-orange-400">Publication</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Accepted abstracts will be published in conference proceedings with ISBN number. Selected submissions will be considered for publication in special/regular issues of SCI/Scopus-indexed journals and book series.
            </p>
          </div>
        </div>
      </section>

      {/* Publication Details */}
      <section className="py-20 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Main Publication Info */}
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-2 tracking-wider uppercase">Journals & Proceedings</p>
            </div>

            {/* Journal Card - Chemical Products and Process Modeling */}
            <div className="bg-card dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-border dark:border-white/10 hover:border-primary/30 transition-all duration-300 shadow-lg mb-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Book Cover Image */}
                <div className="flex-shrink-0 w-52 md:w-60 rounded-xl overflow-hidden shadow-2xl border border-border dark:border-white/10 hover:scale-105 transition-transform duration-300">
                  <img
                    src={cppmBook}
                    alt="Chemical Products and Process Modeling - De Gruyter"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Journal Details */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                    <BookOpen className="w-6 h-6 text-primary" />
                    <h3 className="font-display text-2xl font-bold text-foreground">Chemical Products and Process Modeling</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">(De Gruyter)</p>
                  <div className="w-16 h-1 bg-primary/40 rounded-full mb-4 mx-auto md:mx-0" />
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Selected high-quality submissions will be considered for publication in this prestigious Scopus-indexed journal by De Gruyter, covering chemical process modeling and product engineering.
                  </p>

                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/15 text-blue-700 dark:text-blue-400 text-xs font-semibold border border-blue-200 dark:border-blue-500/30">
                      <Award className="w-3.5 h-3.5" /> Scopus Indexed
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-500/15 text-green-700 dark:text-green-400 text-xs font-semibold border border-green-200 dark:border-green-500/30">
                      <FileText className="w-3.5 h-3.5" /> Peer Reviewed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* More Journals Coming */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-500/5 dark:to-amber-500/5 rounded-2xl p-8 border border-orange-200 dark:border-orange-500/20 text-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-orange-500" />
                <h3 className="font-display text-xl font-bold text-foreground">More Journals/Books to be Included</h3>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Additional SCI/Scopus-indexed journals and book series will be announced soon. Visit the website regularly for updates on new publication opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Publication;

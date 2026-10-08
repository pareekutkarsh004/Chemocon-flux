import { Layout } from "@/components/layout/Layout";
import { Download, MonitorPlay, FileImage } from "lucide-react";

const Poster = () => {
  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative hero-section-bg text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/5 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Download className="w-12 h-12 text-white/80 mx-auto mb-4" />
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
            Templates & Guidelines
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Download the official templates for your presentations at CHEM-CONFLUX²⁶
          </p>
        </div>
      </section>

      <section className="py-24 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="grid sm:grid-cols-2 gap-8">
            
            {/* PPT Template Download Card */}
            <a 
              href="/chemconflux26/CHEMCONFLUX26%20Oral%20Ppt%20template.pptx" 
              download 
              className="group flex flex-col items-center justify-center p-12 bg-card dark:bg-white/5 border border-border dark:border-white/10 rounded-3xl shadow-lg hover:shadow-xl hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MonitorPlay className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                PPT Template
              </h2>
              <p className="text-muted-foreground text-center mb-6">
                Download the official template for Oral Presentations
              </p>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold bg-blue-500/10 px-6 py-3 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                <Download className="w-5 h-5" />
                <span>Download Template</span>
              </div>
            </a>

            {/* Poster Template Download Card */}
            <a 
              href="/chemconflux26/CHEMCONFLUX26%20Poster%20template.pptx" 
              download 
              className="group flex flex-col items-center justify-center p-12 bg-card dark:bg-white/5 border border-border dark:border-white/10 rounded-3xl shadow-lg hover:shadow-xl hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileImage className="w-10 h-10 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Poster Template
              </h2>
              <p className="text-muted-foreground text-center mb-6">
                Download the official template for Poster Presentations
              </p>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold bg-purple-500/10 px-6 py-3 rounded-full group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                <Download className="w-5 h-5" />
                <span>Download Template</span>
              </div>
            </a>

          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Poster;

import { useState } from "react";
import {
  Leaf,
  Zap,
  Droplets,
  Wind,
  Recycle,
  Beaker,
  Factory,
  Sun,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const tracks = [
  {
    icon: Sun,
    title: "Sustainable Alternative Energies",
    description: "Bioenergy, Solar, Wind and other renewable sources",
    details:
      "This track covers the latest advancements in renewable energy technologies including solar photovoltaics, wind power systems, bioenergy production, geothermal energy, and ocean energy. Topics include energy storage solutions, grid integration, and sustainable energy policy frameworks.",
  },
  {
    icon: Zap,
    title: "Hydrogen Energy & Fuel Cells",
    description: "Clean energy technologies and hydrogen economy",
    details:
      "Explore cutting-edge research in hydrogen production, storage, and utilization. This track includes fuel cell technologies, electrolyzers, hydrogen infrastructure, and the role of hydrogen in decarbonizing transportation and industry sectors.",
  },
  {
    icon: Factory,
    title: "Energy Conservation",
    description: "Innovative technologies for energy management",
    details:
      "Focus on energy efficiency improvements in buildings, industrial processes, and transportation. Topics include smart grid technologies, energy auditing, demand-side management, and innovative approaches to reduce energy consumption across sectors.",
  },
  {
    icon: Leaf,
    title: "Biological Interventions",
    description: "Clean energy and environment through biotechnology",
    details:
      "This track explores biotechnological solutions for environmental challenges including bioremediation, microbial fuel cells, algae-based biofuels, enzymatic processes for pollution control, and synthetic biology applications for sustainable development.",
  },
  {
    icon: Beaker,
    title: "Innovative Materials",
    description: "Advanced materials for energy and environment",
    details:
      "Discover breakthroughs in nanomaterials, catalysts, membranes, and smart materials for energy applications. Topics include materials for solar cells, batteries, supercapacitors, and environmental remediation technologies.",
  },
  {
    icon: Droplets,
    title: "Water Treatment",
    description: "Water and wastewater treatment technologies",
    details:
      "Comprehensive coverage of water purification, desalination, wastewater treatment, and water recycling technologies. Includes membrane processes, advanced oxidation, biological treatment systems, and sustainable water management practices.",
  },
  {
    icon: Wind,
    title: "Climate Change",
    description: "Mitigation strategies and sustainability solutions",
    details:
      "Address climate change through carbon capture and storage, greenhouse gas reduction strategies, climate modeling, adaptation technologies, and policy frameworks for achieving net-zero emissions targets.",
  },
  {
    icon: Recycle,
    title: "Waste Management",
    description: "Solid waste treatment and utilization",
    details:
      "Explore waste-to-energy technologies, recycling innovations, circular economy approaches, plastic waste management, e-waste handling, and sustainable disposal methods for industrial and municipal waste streams.",
  },
];

// Split tracks into two rows
const topRow = tracks.slice(0, 4);
const bottomRow = tracks.slice(4, 8);

function TrackCard({ track, onClick }) {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <div
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick(e)}
      className="flex-shrink-0 w-72 group bg-slate-100 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-white/20 hover:bg-slate-200 dark:hover:bg-white/20 hover:border-orange-400/40 transition-all duration-300 hover:-translate-y-2 mx-3 cursor-pointer select-none"
    >
      <div className="w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/30 group-hover:scale-110 transition-all duration-300 pointer-events-none">
        <track.icon className="w-7 h-7 text-orange-400" />
      </div>
      <h3 className="text-lg font-semibold text-foreground dark:text-white mb-2 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors pointer-events-none">
        {track.title}
      </h3>
      <p className="text-sm text-muted-foreground dark:text-slate-300 pointer-events-none">
        {track.description}
      </p>
    </div>
  );
}

function MarqueeRow({ items, direction = "left", speed = 30, onCardClick }) {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="group/marquee relative overflow-hidden py-4">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-slate-800 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10 pointer-events-none" />

      <div
        className={`flex ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        } group-hover/marquee:[animation-play-state:paused]`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedItems.map((track, index) => (
          <TrackCard
            key={`${track.title}-${index}`}
            track={track}
            onClick={() => onCardClick(track)}
          />
        ))}
      </div>
    </div>
  );
}

export function ConferenceTracks() {
  const [selectedTrack, setSelectedTrack] = useState(null);

  return (
    <section className="py-20 bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:via-blue-900/80 dark:to-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-4">
            Thrust Areas
          </h2>
          <p className="text-muted-foreground dark:text-slate-300 max-w-2xl mx-auto">
            Explore the key themes of sustainable energy, environment, and
            innovation
          </p>
        </div>
      </div>

      {/* Marquee Rows */}
      <div className="space-y-6">
        <MarqueeRow
          items={topRow}
          direction="left"
          speed={25}
          onCardClick={setSelectedTrack}
        />
        <MarqueeRow
          items={bottomRow}
          direction="right"
          speed={30}
          onCardClick={setSelectedTrack}
        />
      </div>

      {/* Track Detail Modal */}
      <Dialog
        open={!!selectedTrack}
        onOpenChange={(open) => !open && setSelectedTrack(null)}
      >
        <DialogContent className="bg-card dark:bg-slate-900 border-border dark:border-white/10 text-foreground max-w-lg">
          {selectedTrack && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                    <selectedTrack.icon className="w-8 h-8 text-primary" />
                  </div>
                  <DialogTitle className="text-2xl font-display text-foreground">
                    {selectedTrack.title}
                  </DialogTitle>
                </div>
              </DialogHeader>
              <DialogDescription className="text-muted-foreground text-base leading-relaxed">
                {selectedTrack.details}
              </DialogDescription>
              <div className="mt-4 pt-4 border-t border-border dark:border-white/10">
                <p className="text-sm text-muted-foreground">
                  <span className="text-primary font-medium">
                    Related topics:
                  </span>{" "}
                  Research papers, case studies, and innovative solutions in
                  this domain are welcome for presentation at CHEM-CONFLUX²⁶.
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

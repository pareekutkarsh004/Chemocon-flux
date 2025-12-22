import { motion } from "framer-motion";
import { Leaf, Zap, Droplets, Wind, Recycle, Beaker, Factory, Sun } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tracks = [
  { icon: Sun, title: "Sustainable Alternative Energies", description: "Bioenergy, Solar, Wind and other renewable sources" },
  { icon: Zap, title: "Hydrogen Energy & Fuel Cells", description: "Clean energy technologies and hydrogen economy" },
  { icon: Factory, title: "Energy Conservation", description: "Innovative technologies for energy management" },
  { icon: Leaf, title: "Biological Interventions", description: "Clean energy and environment through biotechnology" },
  { icon: Beaker, title: "Innovative Materials", description: "Advanced materials for energy and environment" },
  { icon: Droplets, title: "Water Treatment", description: "Water and wastewater treatment technologies" },
  { icon: Wind, title: "Climate Change", description: "Mitigation strategies and sustainability solutions" },
  { icon: Recycle, title: "Waste Management", description: "Solid waste treatment and utilization" },
];

export function ConferenceTracks() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-conference-gold font-medium mb-2">THRUST AREAS</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conference Topics
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border hover:border-conference-gold/50">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg gradient-navy flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <track.icon className="w-7 h-7 text-conference-gold" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{track.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{track.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { 
  Beaker, 
  Settings, 
  Shield,
  Brain,
  Target,
  Gauge,
  Factory,
  BarChart3
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tracks = [
  {
    icon: Beaker,
    title: "Process Modeling",
    description: "Mathematical modeling and simulation of chemical processes",
  },
  {
    icon: Settings,
    title: "Process Intensification",
    description: "Advanced techniques for process optimization and efficiency",
  },
  {
    icon: Target,
    title: "Multiobjective Optimization",
    description: "Optimization strategies for complex process systems",
  },
  {
    icon: Gauge,
    title: "Plantwide Control",
    description: "Integrated control strategies for entire plant operations",
  },
  {
    icon: Shield,
    title: "Safety & Hazards",
    description: "Safety analysis and hazard prevention in process industry",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "ML tools for process modeling and optimization",
  },
  {
    icon: Factory,
    title: "Controllability Analysis",
    description: "Holistic techniques for controllability assessment",
  },
  {
    icon: BarChart3,
    title: "Case Studies",
    description: "Real-world applications and computational practice",
  },
];

export function ConferenceTracks() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-conference-gold font-medium mb-2">THEMATIC AREAS</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Program Topics
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The FDP covers cutting-edge topics in chemical process optimization and control
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track, index) => (
            <Card 
              key={track.title} 
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-conference-gold/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}

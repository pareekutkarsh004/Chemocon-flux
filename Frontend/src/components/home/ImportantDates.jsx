import { Calendar, CheckCircle, Clock, Users } from "lucide-react";

const dates = [
  {
    icon: Calendar,
    date: "Dec 29, 2025",
    event: "Last Date of Registration",
  },
  {
    icon: CheckCircle,
    date: "Dec 31, 2025",
    event: "Registration Confirmation",
  },
  {
    icon: Clock,
    date: "Jan 05-09, 2026",
    event: "FDP Program",
  },
  {
    icon: Users,
    date: "Certificate",
    event: "Upon Completion",
  },
];

export function ImportantDates() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-conference-gold font-medium mb-2">MARK YOUR CALENDAR</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Important Dates
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-conference-gold/30 hidden md:block" />

            <div className="space-y-8">
              {dates.map((item, index) => (
                <div 
                  key={item.event} 
                  className="flex items-start gap-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="w-16 h-16 rounded-full gradient-navy flex items-center justify-center flex-shrink-0 relative z-10">
                    <item.icon className="w-7 h-7 text-conference-gold" />
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6 flex-1 hover:border-conference-gold/50 transition-colors">
                    <p className="font-display text-xl font-bold text-conference-gold mb-1">
                      {item.date}
                    </p>
                    <p className="text-muted-foreground">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

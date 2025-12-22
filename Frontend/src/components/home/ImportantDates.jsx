import { motion } from "framer-motion";
import { Calendar, CheckCircle, Clock, Users } from "lucide-react";

const dates = [
  { icon: Calendar, date: "August 15, 2026", event: "Submission of Abstract" },
  { icon: CheckCircle, date: "August 30, 2026", event: "Intimation of Acceptance" },
  { icon: Clock, date: "September 25, 2026", event: "Registration Deadline" },
  { icon: Users, date: "October 22-24, 2026", event: "CHEM-CONFLUX²⁶ Conference" },
];

export function ImportantDates() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-conference-gold font-medium mb-2">MARK YOUR CALENDAR</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Important Dates
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-conference-gold/30 hidden md:block" />
          <div className="space-y-8">
            {dates.map((item, index) => (
              <motion.div 
                key={item.event} 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="w-16 h-16 rounded-full gradient-navy flex items-center justify-center flex-shrink-0 relative z-10 shadow-lg">
                  <item.icon className="w-7 h-7 text-conference-gold" />
                </div>
                <div className="bg-card border border-border rounded-lg p-6 flex-1 hover:border-conference-gold transition-all duration-300 shadow-sm hover:shadow-md">
                  <p className="font-display text-xl font-bold text-conference-gold mb-1">{item.date}</p>
                  <p className="text-muted-foreground">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
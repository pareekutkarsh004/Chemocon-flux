import { useState, useEffect, useRef } from "react";
import { Calendar, CheckCircle, Clock, Users } from "lucide-react";

const dates = [
  { icon: Calendar, date: "August 15, 2026", event: "Submission of Abstract" },
  {
    icon: CheckCircle,
    date: "August 30, 2026",
    event: "Intimation of Acceptance",
  },
  { icon: Clock, date: "September 25, 2026", event: "Registration Deadline" },
  {
    icon: Users,
    date: "October 22-24, 2026",
    event: "CHEM-CONFLUX²⁶ Conference",
  },
];

export function ImportantDates() {
  return (
    <section className="py-20 bg-muted dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-orange-400 font-medium mb-2 tracking-wider uppercase">
            Mark Your Calendar
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Important Dates
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - continuous */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-orange-500 via-orange-500 to-orange-500/30 hidden md:block" />

            <div className="space-y-0">
              {dates.map((item, index) => (
                <div
                  key={item.event}
                  className="flex items-stretch gap-6 group"
                >
                  {/* Icon with connector */}
                  <div className="relative flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-card dark:bg-slate-800 border-2 border-primary/40 dark:border-primary/50 flex items-center justify-center flex-shrink-0 relative z-10 group-hover:bg-primary/20 group-hover:border-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    {/* Connector line between icons */}
                    {index < dates.length - 1 && (
                      <div className="w-0.5 flex-1 bg-primary/50 hidden md:block min-h-[24px]" />
                    )}
                  </div>

                  {/* Content card */}
                  <div className="bg-card dark:bg-white/5 backdrop-blur-sm border-2 border-primary/15 dark:border-white/10 rounded-xl p-6 flex-1 hover:bg-secondary dark:hover:bg-white/10 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/15 transition-all duration-300 group-hover:translate-x-2 mb-6">
                    <p className="font-display text-xl font-bold text-primary mb-1">
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

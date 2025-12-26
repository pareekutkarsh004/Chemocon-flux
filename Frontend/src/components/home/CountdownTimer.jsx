import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

// Conference start date: October 22, 2026 at 9:00 AM IST
const CONFERENCE_DATE = new Date("2026-10-22T09:00:00+05:30");

function calculateTimeLeft() {
  const now = new Date();
  const difference = CONFERENCE_DATE.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isExpired: false,
  };
}

function TimeBlock({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-muted dark:bg-white/5 backdrop-blur-sm rounded-xl border border-border dark:border-white/10 flex items-center justify-center overflow-hidden group hover:border-primary/30 transition-all duration-300">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-display group-hover:text-primary transition-colors">
            {String(value).padStart(2, "0")}
          </span>
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
      </div>
      <span className="text-xs sm:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.isExpired) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center gap-2 bg-primary/20 px-6 py-3 rounded-full border border-primary/30">
          <Calendar className="w-5 h-5 text-primary" />
          <span className="text-primary font-semibold">
            The Conference Has Started!
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-4">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-primary text-sm font-medium">
            October 22-24, 2026
          </span>
        </div>
        <h3 className="text-lg sm:text-xl text-muted-foreground font-medium">
          Conference Starts In
        </h3>
      </div>

      <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6">
        <TimeBlock value={timeLeft.days} label="Days" />
        <div className="text-2xl sm:text-3xl text-primary font-bold self-start mt-4 sm:mt-6">
          :
        </div>
        <TimeBlock value={timeLeft.hours} label="Hours" />
        <div className="text-2xl sm:text-3xl text-primary font-bold self-start mt-4 sm:mt-6">
          :
        </div>
        <TimeBlock value={timeLeft.minutes} label="Minutes" />
        <div className="text-2xl sm:text-3xl text-primary font-bold self-start mt-4 sm:mt-6 hidden sm:block">
          :
        </div>
        <div className="hidden sm:block">
          <TimeBlock value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  );
}

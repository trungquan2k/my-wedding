import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const WEDDING_DATE = new Date("2026-06-15T10:00:00+07:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = Math.max(0, WEDDING_DATE.getTime() - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  const blocks = [
    { value: timeLeft.days, label: "Ngày" },
    { value: timeLeft.hours, label: "Giờ" },
    { value: timeLeft.minutes, label: "Phút" },
    { value: timeLeft.seconds, label: "Giây" },
  ];

  return (
    <section className="wedding-section bg-wedding-warm">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <p className="wedding-script text-3xl md:text-4xl wedding-gold-text mb-8">
            Đếm ngược
          </p>
        </ScrollReveal>

        <div className="flex justify-center gap-4 md:gap-8">
          {blocks.map((b, i) => (
            <ScrollReveal key={b.label} delay={0.1 * i}>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center border-2 border-wedding-gold rounded-sm bg-background/80 shadow-md">
                  <span className="wedding-display text-2xl md:text-4xl font-semibold wedding-burgundy-text tabular-nums">
                    {String(b.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="mt-2 text-sm md:text-base text-muted-foreground wedding-body">
                  {b.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;

import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const WEDDING_DATE = new Date("2026-06-15T10:00:00+07:00");

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-2xl mx-auto text-center px-4">
        <ScrollReveal>
          <p className="wedding-script text-3xl md:text-4xl wedding-gold-text mb-3">
            Save the Date
          </p>
          <p className="wedding-display text-xl md:text-2xl font-medium text-foreground tracking-wide mb-10">
            15 tháng 06, 2026
          </p>
        </ScrollReveal>

        <div className="flex justify-center gap-4 md:gap-8">
          {blocks.map((b, i) => (
            <ScrollReveal key={b.label} delay={0.08 * i}>
              <div className="flex flex-col items-center">
                <div className="w-18 h-18 md:w-24 md:h-24 flex items-center justify-center bg-wedding-warm border border-border rounded-sm shadow-md">
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

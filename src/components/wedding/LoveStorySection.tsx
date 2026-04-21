import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import mylove from "@/assets/mylove.jpg";
import newLove from "@/assets/new.jpg";
import firstDate from "@/assets/firstdate.jpg";
import birthDay from "@/assets/my-second-birth.jpg";
import img3 from "@/assets/KENN1039.jpg";
import img4 from "@/assets/KENN0990.jpg";
import { useLanguage } from "@/context/LanguageContext";

const LoveStorySection = () => {
  const { t } = useLanguage();

  const stories = [
    {
      image: firstDate,
      title: t("story.event1.title"),
      date: t("story.event1.date"),
      text: t("story.event1.text"),
    },
    {
      image: birthDay,
      title: t("story.event2.title"),
      date: t("story.event2.date"),
      text: t("story.event2.text"),
    },
    {
      image: newLove,
      title: t("story.event3.title"),
      date: t("story.event3.date"),
      text: t("story.event3.text"),
    },
    {
      image: mylove,
      title: t("story.event4.title"),
      date: t("story.event4.date"),
      text: t("story.event4.text"),
    },
    {
      image: "https://iili.io/BgQMlbj.jpg",
      title: t("story.event5.title"),
      date: t("story.event5.date"),
      text: t("story.event5.text"),
    },
    {
      image: "https://iili.io/BgQG0PI.jpg",
      title: t("story.event6.title"),
      date: t("story.event6.date"),
      text: t("story.event6.text"),
    },
  ];

  // Double the stories for seamless looping
  // Use the original stories array for the grid layout
  const displayStories = stories;

  return (
    <section
      id="story"
      className="py-20 md:py-32 bg-background overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <ScrollReveal>
          <p className="wedding-script text-3xl md:text-4xl wedding-gold-text text-center mb-2">
            {t("story.title")}
          </p>
          <p className="text-center text-muted-foreground wedding-body text-lg">
            {t("story.subtitle")}
          </p>
        </ScrollReveal>
      </div>

      {/* Premium Staggered Grid Gallery */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-20 md:gap-y-32">
          {displayStories.map((s, i) => (
            <ScrollReveal
              key={i}
              direction="up"
              delay={i * 0.15}
              className={`${i % 2 !== 0 ? "md:mt-32" : ""}`}
            >
              <div className="bg-white p-4 md:p-6 rounded-sm shadow-[0_15px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] transition-all duration-700 group/card border border-wedding-gold/5 flex flex-col h-full transform hover:scale-[1.02] relative">
                {/* Visual Number Indicator */}
                <div className="absolute -top-6 -left-4 md:-left-8 text-6xl md:text-8xl font-bold text-wedding-gold/5 wedding-display pointer-events-none select-none">
                  0{i + 1}
                </div>

                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/3] rounded-xs mb-8 shadow-sm">
                  <img
                    src={s.image}
                    alt={s.title}
                    className={`w-full h-full object-cover ${i >= displayStories.length - 2
                      ? "object-top"
                      : "object-center"
                      } transition-all duration-1000 scale-[1.05] group-hover/card:scale-110`}
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover/card:bg-transparent transition-colors duration-700" />

                  {/* Elegant Date Tag */}
                  <div className="absolute bottom-0 left-0 bg-wedding-gold/90 backdrop-blur-md px-5 py-2 text-[12px] tracking-[0.3em] text-white uppercase font-bold wedding-display">
                    {s.date}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col items-center text-center px-4">
                  <h3 className="wedding-display text-2xl md:text-3xl font-bold wedding-burgundy-text mb-4 tracking-tight">
                    {s.title}
                  </h3>
                  <div className="w-12 h-px bg-wedding-gold/30 mb-5" />
                  <p className="wedding-body text-foreground/70 leading-relaxed text-sm md:text-base italic mb-6">
                    "{s.text}"
                  </p>
                  <div className="w-10 h-10 opacity-10 mt-auto">
                    <Heart className="w-full h-full text-wedding-gold fill-wedding-gold" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveStorySection;

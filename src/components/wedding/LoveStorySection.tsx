import { motion } from "framer-motion";
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
      image: img3,
      title: t("story.event5.title"),
      date: t("story.event5.date"),
      text: t("story.event5.text"),
    },
    {
      image: img4,
      title: t("story.event6.title"),
      date: t("story.event6.date"),
      text: t("story.event6.text"),
    },
  ];

  // Double the stories for seamless looping
  const extendedStories = [...stories, ...stories];

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

      {/* Marquee Container */}
      <div className="relative">
        <motion.div
          className="flex gap-6 md:gap-8"
          animate={{ x: [0, -1664] }} // We'll adjust this value based on card width
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "fit-content" }}
        >
          {extendedStories.map((s, i) => (
            <div key={i} className="w-[280px] md:w-[380px] flex-shrink-0">
              <div className="flex flex-col gap-5 p-4 md:p-6 bg-wedding-warm/30 rounded-sm border border-border-/50 hover:bg-wedding-warm/50 transition-colors h-full group">
                <div className="relative overflow-hidden rounded-sm shadow-md aspect-video">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute top-3 left-3 bg-wedding-gold px-3 py-1 text-[10px] tracking-[0.2em] text-white uppercase wedding-body">
                    {s.date}
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <h3 className="wedding-display text-xl font-semibold wedding-burgundy-text mb-2">
                    {s.title}
                  </h3>
                  <p className="wedding-body text-foreground/80 leading-relaxed text-sm">
                    {s.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient overlays for fade effects on edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default LoveStorySection;

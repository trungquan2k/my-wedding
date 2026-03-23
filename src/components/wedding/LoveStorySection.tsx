import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import coupleImg1 from "@/assets/KENN0587.jpg";
import coupleImg2 from "@/assets/KENN0608.jpg";
import img3 from "@/assets/KENN0981.jpg";
import img4 from "@/assets/KENN0990.jpg";

const stories = [
  {
    image: coupleImg1,
    title: "Lần đầu gặp gỡ",
    date: "10 / 2019",
    text: "Bắt đầu trò chuyện với nhau thâu đêm suốt sáng.",
  },
  {
    image: coupleImg2,
    title: "Lời cầu hôn",
    date: "12 / 2025",
    text: "Dưới bầu trời đầy sao, anh đã quỳ gối và nói những lời chân thành nhất. Và em đã gật đầu.",
  },
  {
    image: img3,
    title: "Ngày cưới",
    date: "05 / 2026",
    text: "Hành trình yêu của chúng mình khép lại bằng một đám cưới trong mơ. Cảm ơn vì đã luôn ở bên nhau.",
  },
  {
    image: img4,
    title: "Tổ ấm mới",
    date: "Mãi về sau",
    text: "Một tương lai mới đang chờ đợi phía trước, nơi chúng mình sẽ cùng nhau xây dựng tổ ấm hạnh phúc.",
  },
];

// Double the stories for seamless looping
const extendedStories = [...stories, ...stories];

const LoveStorySection = () => {
  return (
    <section
      id="story"
      className="py-20 md:py-32 bg-background overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <ScrollReveal>
          <p className="wedding-script text-3xl md:text-4xl wedding-gold-text text-center mb-2">
            Chuyện tình yêu của chúng mình
          </p>
          <p className="text-center text-muted-foreground wedding-body text-lg">
            Our Love Story
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

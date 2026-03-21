import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";
import heroImg from "@/assets/wedding-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Ảnh cưới"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
      </div>

      {/* Content overlay — text at bottom */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-24 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="wedding-script text-2xl md:text-3xl text-white/90 mb-3 drop-shadow-lg"
        >
          We're Getting Married
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 md:gap-6"
        >
          <h1 className="wedding-display text-4xl md:text-7xl font-semibold text-white drop-shadow-xl leading-[1.1]">
            Văn A
          </h1>
          <Heart className="w-6 h-6 md:w-8 md:h-8 text-wedding-gold fill-wedding-gold animate-float shrink-0" />
          <h1 className="wedding-display text-4xl md:text-7xl font-semibold text-white drop-shadow-xl leading-[1.1]">
            Thị B
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="wedding-display text-lg md:text-2xl text-white/80 mt-4 tracking-[0.2em] drop-shadow-md"
        >
          15 . 06 . 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-10"
        >
          <a
            href="#story"
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
          >
            <span className="text-sm wedding-body tracking-widest uppercase mb-2">Khám phá</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

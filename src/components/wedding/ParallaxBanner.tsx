import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxBannerProps {
  image: string;
  text?: string;
  subtext?: string;
}

const ParallaxBanner = ({ image, text, subtext }: ParallaxBannerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Create a controlled parallax effect that is safer than bg-fixed
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Move the image more significantly to make the scroll effect very noticeable
  const y = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-[80vh] md:h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Layer */}
      <motion.div
        style={{ y }}
        className="absolute -top-[30%] -bottom-[30%] inset-x-0 z-0"
      >
        <div
          className="w-full h-full bg-cover bg-[center_20%] bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-black/5" />
      </motion.div>

      {/* Main Overlays */}
      <div className="absolute inset-0 bg-black/35 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 z-[1]" />

      {/* Content Layer */}
      {
        (text || subtext) && (
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {text && (
                <h2 className="wedding-script text-5xl md:text-8xl text-white drop-shadow-2xl mb-8">
                  {text}
                </h2>
              )}
              {subtext && (
                <div className="relative inline-block">
                  <div className="absolute -left-12 -right-12 top-1/2 h-px bg-white/20 hidden md:block" />
                  <p className="wedding-body text-xl md:text-2xl text-white/90 font-light tracking-[0.3em] uppercase px-4">
                    {subtext}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )
      }
    </section >
  );
};

export default ParallaxBanner;

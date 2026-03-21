import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxBannerProps {
  image: string;
  text?: string;
  subtext?: string;
}

const ParallaxBanner = ({ image, text, subtext }: ParallaxBannerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      <motion.img
        src={image}
        alt=""
        style={{ y }}
        className="absolute inset-0 w-full h-[130%] object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      {(text || subtext) && (
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          {text && (
            <p className="wedding-script text-3xl md:text-5xl text-white drop-shadow-lg">
              {text}
            </p>
          )}
          {subtext && (
            <p className="wedding-body text-lg md:text-xl text-white/80 mt-3 max-w-lg drop-shadow-md">
              {subtext}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ParallaxBanner;

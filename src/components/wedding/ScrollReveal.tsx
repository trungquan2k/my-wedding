import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  rotate?: number;
}

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 1.0,
  rotate = 0
}: ScrollRevealProps) => {
  const variants = {
    up: { y: 60, opacity: 0, rotate },
    down: { y: -60, opacity: 0, rotate },
    left: { x: 60, opacity: 0, rotate },
    right: { x: -60, opacity: 0, rotate },
    none: { opacity: 0, rotate },
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

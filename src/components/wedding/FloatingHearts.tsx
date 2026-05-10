import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

interface HeartItem {
  id: number;
  x: number;
  duration: number;
  size: number;
  delay: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<HeartItem[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart: HeartItem = {
        id: Date.now(),
        x: Math.random() * 100, // percentage from left
        duration: 4 + Math.random() * 4, // 4-8s
        size: 12 + Math.random() * 20, // 12-32px
        delay: Math.random() * 2,
      };

      setHearts((prev) => [...prev.slice(-15), newHeart]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 0, y: "110%", x: `${heart.x}vw`, scale: 0 }}
            animate={{ 
              opacity: [0, 0.6, 0.4, 0], 
              y: "-10%", 
              scale: [0.5, 1, 1, 0.5],
              rotate: [0, 15, -15, 0]
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: heart.duration, 
              ease: "linear",
              times: [0, 0.2, 0.8, 1]
            }}
            className="absolute text-wedding-gold/20"
          >
            <Heart 
              size={heart.size} 
              fill="currentColor"
              className="drop-shadow-sm" 
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingHearts;

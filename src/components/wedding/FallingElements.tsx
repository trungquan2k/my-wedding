import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkle } from "lucide-react";

interface Element {
  id: number;
  x: number;
  duration: number;
  size: number;
  type: "heart" | "sparkle";
  rotation: number;
}

const FallingElements = () => {
  const [elements, setElements] = useState<Element[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const type = Math.random() > 0.3 ? "heart" : "sparkle";
      const newElement: Element = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100, // percentage from left
        duration: 6 + Math.random() * 6, // 6-12s
        size: type === "heart" ? 10 + Math.random() * 15 : 6 + Math.random() * 10,
        type,
        rotation: Math.random() * 360,
      };

      setElements((prev) => [...prev.slice(-20), newElement]);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <AnimatePresence>
        {elements.map((el) => (
          <motion.div
            key={el.id}
            initial={{ opacity: 0, y: -50, left: `${el.x}%`, rotate: el.rotation }}
            animate={{ 
              opacity: [0, 0.7, 0.7, 0], 
              y: "110vh",
              left: `${el.x + (Math.random() * 6 - 3)}%`, // Subtle drift
              rotate: el.rotation + 360,
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: el.duration, 
              ease: "linear",
            }}
            className="absolute top-0"
          >
            {el.type === "heart" ? (
              <Heart 
                size={el.size} 
                className="text-white/20 fill-white/10"
              />
            ) : (
              <Sparkle 
                size={el.size} 
                className="text-wedding-gold/30 fill-wedding-gold/20 animate-pulse"
              />
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FallingElements;

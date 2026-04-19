import { useState } from "react";
import { Music, Music2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MusicPlayerProps {
  isLocked: boolean;
}

const MusicPlayer = ({ isLocked }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(true);

  if (isLocked) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      <div className="relative">
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="absolute -inset-4"
            >
              <div className="absolute inset-0 border-2 border-wedding-gold/20 rounded-full animate-[ping_3s_linear_infinite]" />
              <div className="absolute inset-0 border border-wedding-gold/40 rounded-full animate-[ping_2s_linear_infinite]" />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg backdrop-blur-md border ${isPlaying
            ? "bg-wedding-gold/20 border-wedding-gold text-wedding-gold"
            : "bg-white/10 border-white/20 border text-white/40"
            }`}
          aria-label={isPlaying ? "Mute Music" : "Play Music"}
        >
          {isPlaying ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Music className="w-5 h-5" />
            </motion.div>
          ) : (
            <Music2 className="w-5 h-5" />
          )}
        </button>
      </div>
      {/* Hidden YouTube Iframe */}
      {isPlaying && (
        <div className="fixed pointer-events-none opacity-0 -z-50 invisible">
          <iframe
            width="1"
            height="1"
            src="https://www.youtube.com/embed/d1x84nMuJYA?autoplay=1&loop=1&playlist=d1x84nMuJYA,h-SdLmiEXko,IOe0tNoUGv8,FTYKmwltAQ8"
            title="Wedding Music"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;

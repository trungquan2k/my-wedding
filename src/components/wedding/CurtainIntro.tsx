import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Flower2, User } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitch } from "./LanguageSwitch";

interface CurtainIntroProps {
  onOpen?: (name: string) => void;
}

const Ornament = ({ className }: { className?: string }) => (
  <div className={`pointer-events-none opacity-40 ${className}`}>
    <Flower2 className="w-12 h-12 text-wedding-gold-light" />
  </div>
);

const CurtainIntro = ({ onOpen }: CurtainIntroProps) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  // const [nameInput, setNameInput] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const handleOpen = () => {
    if (onOpen) onOpen("");
    setIsOpen(true);
    setTimeout(() => setShouldRender(false), 2000);
  };

  if (!shouldRender) return null;

  const curtainStyle = {
    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
    backgroundSize: "24px 24px",
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex overflow-hidden ${isOpen ? "pointer-events-none" : ""}`}
    >
      {/* Language Switch for Intro */}
      <div className="absolute top-6 right-6 z-[110]">
        {!isOpen && <LanguageSwitch scrolled={false} />}
      </div>

      {/* Beautiful Floating Alert */}
      <AnimatePresence>
        {showWarning && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="absolute top-10 left-1/2 -translate-x-1/2 z-[110] px-6 py-3 bg-white/90 backdrop-blur-md border border-wedding-gold/30 rounded-full shadow-2xl flex items-center gap-3 min-w-[280px] justify-center"
          >
            <div className="w-8 h-8 rounded-full bg-wedding-burgundy/10 flex items-center justify-center">
              <Heart className="w-4 h-4 text-wedding-burgundy fill-wedding-burgundy animate-pulse" />
            </div>
            <span className="wedding-body text-wedding-burgundy font-medium text-sm tracking-wide">
              {t("curtain.warning")}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left Curtain */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isOpen ? "-100%" : 0 }}
        transition={{ duration: 1.8, ease: [0.45, 0.05, 0.55, 0.95] }}
        style={curtainStyle}
        className="relative flex-1 bg-wedding-burgundy border-r-2 border-wedding-gold/40 shadow-[10px_0_40px_rgba(0,0,0,0.6)]"
      >
        {/* Ornaments */}
        <div className="absolute inset-0">
          <Ornament className="absolute top-8 left-8 -rotate-45" />
          <Ornament className="absolute bottom-8 left-8 rotate-[225deg]" />
          <div className="absolute inset-y-0 left-4 w-px bg-wedding-gold/20" />
          <div className="absolute inset-x-0 top-4 h-px bg-wedding-gold/20" />
          <div className="absolute inset-x-0 bottom-4 h-px bg-wedding-gold/20" />
        </div>

        {/* Big circular pattern */}
        <div className="absolute inset-0 flex items-center justify-end pr-10 opacity-10 pointer-events-none">
          <div className="w-96 h-96 border-[12px] border-wedding-gold rounded-full rotate-45 transform translate-x-1/2 scale-150" />
        </div>
      </motion.div>

      {/* Right Curtain */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isOpen ? "100%" : 0 }}
        transition={{ duration: 1.8, ease: [0.45, 0.05, 0.55, 0.95] }}
        style={curtainStyle}
        className="relative flex-1 bg-wedding-burgundy border-l-2 border-wedding-gold/40 shadow-[-10px_0_40px_rgba(0,0,0,0.6)]"
      >
        {/* Ornaments */}
        <div className="absolute inset-0">
          <Ornament className="absolute top-8 right-8 rotate-45" />
          <Ornament className="absolute bottom-8 right-8 rotate-135" />
          <div className="absolute inset-y-0 right-4 w-px bg-wedding-gold/20" />
          <div className="absolute inset-x-0 top-4 h-px bg-wedding-gold/20" />
          <div className="absolute inset-x-0 bottom-4 h-px bg-wedding-gold/20" />
        </div>

        {/* Big circular pattern */}
        <div className="absolute inset-0 flex items-center justify-start pl-10 opacity-10 pointer-events-none">
          <div className="w-96 h-96 border-[12px] border-wedding-gold rounded-full rotate-45 transform -translate-x-1/2 scale-150" />
        </div>
      </motion.div>

      {/* Center Reveal Button Area */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2, filter: "blur(20px)" }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex flex-col items-center justify-center z-10"
          >
            <div className="relative group flex flex-col items-center gap-12">
              {/* Name Input */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full max-w-xl relative z-20"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder={t("curtain.placeholder")}
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="w-full pl-12 py-4 bg-white/10 border border-wedding-gold/30 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-wedding-gold/60 transition-all wedding-body tracking-wider backdrop-blur-md relative z-0"
                  />
                  <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-wedding-gold z-10 pointer-events-none drop-shadow-sm" />
                </div>
              </motion.div> */}

              <div className="relative group">
                {/* Outer Glows */}
                <div className="absolute -inset-24 bg-wedding-gold/20 blur-[80px] rounded-full animate-pulse" />

                {/* Decorative Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-20 border-[0.5px] border-wedding-gold/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-16 border-[0.5px] border-wedding-gold/50 border-dashed rounded-full"
                />

                {/* Main Button (Seal) */}
                <button
                  onClick={handleOpen}
                  className="relative flex flex-col items-center justify-center w-52 h-52 bg-wedding-gold rounded-full shadow-[0_0_50px_rgba(212,175,55,0.4)] hover:shadow-[0_0_80px_rgba(212,175,55,0.6)] transition-all duration-700 active:scale-95 group overflow-hidden border-4 border-white/20"
                >
                  {/* Texture on button */}
                  <div className="absolute inset-0 bg-radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2)_0% bg-transparent_70%)" />

                  <span className="wedding-script text-white text-4xl mb-1 mt-2 tracking-wide drop-shadow-md">
                    {t("curtain.open")}
                  </span>
                  <Heart className="w-8 h-8 text-wedding-burgundy fill-wedding-burgundy animate-float" />
                  <span className="wedding-body text-white/95 text-xs tracking-[0.3em] mt-3 uppercase font-medium">
                    Wedding
                  </span>

                  {/* Hover Shine Animation */}
                  <div className="absolute top-0 -left-[150%] w-[100%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[35deg] group-hover:left-[150%] transition-all duration-[1200ms] ease-in-out" />
                </button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-20 text-center"
            >
              <p className="wedding-display text-wedding-gold-light text-2xl md:text-3xl tracking-[0.2em] font-light mb-3 drop-shadow-lg uppercase">
                Trung Quân & Yến Nhi
              </p>
              <p className="wedding-body text-white/70 text-lg tracking-[0.4em] mb-4">
                26 . 05 . 2026
              </p>
              <div className="h-px w-48 bg-gradient-to-r from-transparent via-wedding-gold/50 to-transparent mx-auto" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Atmospheric Effects */}
      {!isOpen && (
        <>
          {/* Depth vignette */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.5)_100%)] z-[5]" />

          {/* Edge highlights */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-[1px] w-[2px] bg-gradient-to-b from-wedding-gold/10 via-wedding-gold/60 to-wedding-gold/10 z-[5]" />
        </>
      )}
    </div>
  );
};

export default CurtainIntro;

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export const LanguageSwitch = ({ scrolled }: { scrolled?: boolean }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setLanguage("vi")}
        className={`text-[10px] uppercase tracking-widest px-1.5 py-0.5 transition-all ${language === "vi"
          ? "bg-wedding-gold text-white"
          : scrolled
            ? "text-foreground/50 hover:text-foreground"
            : "text-white/50 hover:text-white"
          }`}
      >
        VI
      </button>
      <div className={`w-px h-2 ${scrolled ? "bg-border" : "bg-white/20"}`} />
      <button
        onClick={() => setLanguage("en")}
        className={`text-[10px] uppercase tracking-widest px-1.5 py-0.5 transition-all ${language === "en"
          ? "bg-wedding-gold text-white"
          : scrolled
            ? "text-foreground/50 hover:text-foreground"
            : "text-white/50 hover:text-white"
          }`}
      >
        EN
      </button>
    </div>
  );
};

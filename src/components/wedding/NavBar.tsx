import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitch } from "./LanguageSwitch";

const NavBar = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: t("nav.details"), href: "#details" },
    { label: t("nav.story"), href: "#story" },
    { label: t("nav.gallery"), href: "#gallery" },
    { label: t("nav.registration"), href: "#registration" },
    // { label: t("nav.gift"), href: "#gift" },
    { label: t("nav.wishes"), href: "#wishes" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled || isMenuOpen
          ? "bg-background/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
          <a
            href="#"
            className={`wedding-script text-2xl transition-colors ${scrolled || isMenuOpen
              ? "wedding-gold-text"
              : "text-white drop-shadow-md"
              }`}
          >
            Q & N
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`wedding-body text-sm tracking-widest uppercase transition-colors hover:opacity-100 ${scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-white/70 hover:text-white drop-shadow-sm"
                  }`}
              >
                {l.label}
              </a>
            ))}
            <LanguageSwitch scrolled={scrolled} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitch scrolled={scrolled || isMenuOpen} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors ${scrolled || isMenuOpen ? "text-wedding-gold" : "text-white"
                }`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-30 bg-background flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />

            <p className="wedding-script text-4xl wedding-gold-text mb-4">
              {t("nav.menu")}
            </p>

            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                onClick={() => setIsMenuOpen(false)}
                className="wedding-body text-xl tracking-[0.2em] uppercase text-foreground hover:text-wedding-gold transition-colors font-medium"
              >
                {l.label}
              </motion.a>
            ))}

            <div className="mt-12 flex flex-col items-center gap-4">
              <div className="w-12 h-px bg-wedding-gold/30" />
              <p className="wedding-display text-wedding-gold/60 text-xs tracking-[0.3em]">
                26 . 05 . 2026
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;

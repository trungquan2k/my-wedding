import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Câu chuyện", href: "#story" },
  { label: "Album", href: "#gallery" },
  { label: "Lễ cưới", href: "#details" },
  { label: "Mừng cưới", href: "#gift" },
  { label: "Lời chúc", href: "#wishes" },
];


const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        <a
          href="#"
          className={`wedding-script text-xl transition-colors ${
            scrolled ? "wedding-gold-text" : "text-white drop-shadow-md"
          }`}
        >
          Q & N
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`wedding-body text-sm tracking-widest uppercase transition-colors hover:opacity-100 ${
                scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-white/70 hover:text-white drop-shadow-sm"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;

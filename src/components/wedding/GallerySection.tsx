import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import img1 from "@/assets/KENN0643.jpg";
import img2 from "@/assets/KENN0674.jpg";
import img3 from "@/assets/KENN0773.jpg";
import img4 from "@/assets/KENN0794.jpg";
import img5 from "@/assets/KENN0802.jpg";
import img6 from "@/assets/KENN0945.jpg";
import img7 from "@/assets/KENN0948.jpg";
import img8 from "@/assets/KENN0957.jpg";
import img9 from "@/assets/KENN0961.jpg";
import img10 from "@/assets/KENN0975.jpg";
import img11 from "@/assets/KENN0981.jpg";
import img12 from "@/assets/KENN0990.jpg";
import img13 from "@/assets/KENN1000.jpg";
import img14 from "@/assets/KENN1018.jpg";
import img15 from "@/assets/KENN1039.jpg";
import img16 from "@/assets/KENN1103.jpg";

import { useLanguage } from "@/context/LanguageContext";

const photos = [
  img1, img2, img3, img4, img5, img6, img7, img8,
  img9, img10, img11, img12, img13, img14, img15, img16
];

const GallerySection = () => {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const go = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + photos.length) % photos.length);
  };

  return (
    <>
      <section id="gallery" className="py-20 md:py-32 bg-wedding-warm">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <p className="wedding-script text-3xl md:text-4xl wedding-gold-text text-center mb-2">
              {t("gallery.title")}
            </p>
            <p className="text-center text-muted-foreground wedding-body text-lg mb-14">
              {t("gallery.subtitle")}
            </p>
          </ScrollReveal>

          {/* Polaroid Columns Layout */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-8">
            {photos.map((src, i) => (
              <ScrollReveal 
                key={i} 
                delay={0.1 * (i % 4)} 
                direction="up"
                duration={1.2}
                rotate={i % 2 === 0 ? -1.5 : 1.5}
                className="break-inside-avoid"
              >
                <button
                  onClick={() => setLightbox(i)}
                  className={`block w-full bg-white p-2 pb-8 md:p-3 md:pb-12 shadow-xl hover:shadow-2xl transition-all duration-500 group focus:outline-none focus-visible:ring-2 focus-visible:ring-wedding-gold active:scale-[0.98] ${
                    i % 3 === 0 ? "-rotate-1" : i % 3 === 1 ? "rotate-2" : "rotate-0"
                  } hover:rotate-0 hover:z-10 relative`}
                >
                  <div className="overflow-hidden relative">
                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.8 }}
                      src={src}
                      alt={`Ảnh cưới ${i + 1}`}
                      className="w-full h-auto object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-wedding-gold/5 group-hover:opacity-0 transition-opacity" />
                  </div>
                  
                  {/* Decorative text or date on the polaroid */}
                  <div className="mt-3 md:mt-5 text-center">
                    <span className="wedding-script text-wedding-gold/60 text-lg md:text-xl">
                      {i % 2 === 0 ? "Happiness" : "Ever After"}
                    </span>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
              className="absolute top-4 right-4 text-white/70 hover:text-white z-10 active:scale-95 transition"
            >
              <X className="w-7 h-7" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); go(-1); }}
              className="absolute left-3 md:left-6 text-white/60 hover:text-white z-10 active:scale-95 transition"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); go(1); }}
              className="absolute right-3 md:right-6 text-white/60 hover:text-white z-10 active:scale-95 transition"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={photos[lightbox]}
              alt=""
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;

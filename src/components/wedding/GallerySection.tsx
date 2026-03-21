import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import img1 from "@/assets/wedding-couple-1.jpg";
import img2 from "@/assets/wedding-couple-2.jpg";
import img3 from "@/assets/wedding-couple-3.jpg";
import img4 from "@/assets/wedding-couple-4.jpg";
import img5 from "@/assets/wedding-couple-5.jpg";
import img6 from "@/assets/wedding-couple-6.jpg";

const photos = [img1, img2, img3, img4, img5, img6];

const GallerySection = () => {
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
              Album ảnh cưới
            </p>
            <p className="text-center text-muted-foreground wedding-body text-lg mb-14">
              Our Moments
            </p>
          </ScrollReveal>

          {/* Masonry-ish grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {photos.map((src, i) => (
              <ScrollReveal key={i} delay={0.06 * i}>
                <button
                  onClick={() => setLightbox(i)}
                  className="block w-full overflow-hidden rounded-sm shadow-lg group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.97] transition-transform"
                >
                  <img
                    src={src}
                    alt={`Ảnh cưới ${i + 1}`}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
                      i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
                    }`}
                  />
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

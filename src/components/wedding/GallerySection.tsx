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
import { Flower2, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WeddingAlbum from "./WeddingAlbum";

import { useLanguage } from "@/context/LanguageContext";

const photos = [
  img3,
  img1,
  img2,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
];

const GallerySection = () => {
  const { t } = useLanguage();

  return (
    <>
      <section
        id="gallery"
        className="md:py-24 silk-texture relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />

        <div className="max-w-[1600px] mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col items-center mb-2">
              <Flower2 className="w-10 h-10 text-wedding-gold/30 mb-4 animate-float" />
              <h2 className="wedding-script text-4xl md:text-6xl gold-foil text-center mb-4">
                {t("gallery.title")}
              </h2>
              <div className="flex items-center gap-4 w-48">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-wedding-gold/30" />
                <Heart className="w-3 h-3 text-wedding-gold/40 fill-wedding-gold/5" />
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-wedding-gold/30" />
              </div>
              <p className="text-center text-muted-foreground wedding-body text-xl mt-6 max-w-2xl italic leading-relaxed">
                {t("gallery.subtitle")}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <WeddingAlbum photos={photos} />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default GallerySection;

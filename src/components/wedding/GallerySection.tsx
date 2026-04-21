const img1 = "https://iili.io/BgQYWQ9.jpg";
const img2 = "https://iili.io/BgQaNnt.jpg";
const img3 = "https://iili.io/BgDM799.jpg";
const img4 = "https://iili.io/BgQurut.jpg";
const img5 = "https://iili.io/BgDVXf4.jpg";
const img6 = "https://iili.io/BgQMAfS.jpg";
const img7 = "https://iili.io/BgQGW9s.jpg";
const img8 = "https://iili.io/BgQG0PI.jpg";
const img9 = "https://iili.io/BgQa7wB.jpg";
const img10 = "https://iili.io/BgQlSTl.jpg";
const img11 = "https://iili.io/BgQufTX.jpg";
const img12 = "https://iili.io/BgDVMWG.jpg";
const img13 = "https://iili.io/BgQABHB.jpg";
const img14 = "https://iili.io/BgQc9DB.jpg";
const img15 = "https://iili.io/BgDXK8B.jpg";
const img16 = "https://iili.io/BgQaNnt.jpg";
import { Flower2, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WeddingAlbum from "./WeddingAlbum";

import { useLanguage } from "@/context/LanguageContext";

const photos = [
  img1,
  img2,
  img3,
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

          <WeddingAlbum photos={photos} />
        </div>
      </section>
    </>
  );
};

export default GallerySection;

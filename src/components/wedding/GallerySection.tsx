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
import ScrollReveal from "./ScrollReveal";
import WeddingAlbum from "./WeddingAlbum";

import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "./SectionTitle";

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
        className="md:py-10 silk-texture relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />

        <div className="max-w-[1600px] mx-auto px-4 relative z-10">
          <ScrollReveal>
            <SectionTitle title={t("gallery.title")} subtitle={t("gallery.subtitle")} />
          </ScrollReveal>

          <WeddingAlbum photos={photos} />
        </div>
      </section>
    </>
  );
};

export default GallerySection;

import { motion } from "framer-motion";
import { useState, useEffect, useMemo, memo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Info } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";
import ProgressiveImage from "./ProgressiveImage";
import CeremonyModal from "./CeremonyModal";
import { AnimatePresence } from "framer-motion";

const Carousel = memo(({ images }: { images: { src: string; pos?: string }[] }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);


  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <div className="relative h-[280px] md:h-[400px] w-full max-w-5xl mx-auto overflow-hidden px-4">
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 }
            }}
            className="absolute inset-0 w-full h-full rounded-sm overflow-hidden shadow-2xl border-[6px] md:border-[12px] border-white group"
          >
            {/* Background Blur (Desktop only) */}
            <div className="hidden md:block absolute inset-0">
              <ProgressiveImage
                src={images[index].src}
                className="absolute inset-0 w-full h-full"
                imgClassName="blur-2xl scale-110 opacity-30"
              />
              <ProgressiveImage
                src={images[index].src}
                className="relative w-full h-full z-10"
                objectFit="contain"
              />
            </div>

            {/* Mobile View: High Visibility Cover */}
            <div className="md:hidden w-full h-full">
              <ProgressiveImage
                src={images[index].src}
                alt={`Wedding ${index}`}
                className="w-full h-full"
                imgClassName={images[index].pos || 'object-center'}
              />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`transition-all duration-500 rounded-full ${i === index
              ? "w-8 h-1.5 bg-wedding-gold shadow-sm"
              : "w-1.5 h-1.5 bg-white/60 hover:bg-white"
              }`}
          />
        ))}
      </div>

      {/* Side Peek (Desktop Only) */}
      <div className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 opacity-20 hover:opacity-40 transition-opacity cursor-pointer"
        onClick={() => { setDirection(-1); setIndex((index - 1 + images.length) % images.length); }}>
        <div className="w-20 h-32 border-2 border-white rounded-sm overflow-hidden scale-75">
          <img src={images[(index - 1 + images.length) % images.length].src} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 opacity-20 hover:opacity-40 transition-opacity cursor-pointer"
        onClick={() => { setDirection(1); setIndex((index + 1) % images.length); }}>
        <div className="w-20 h-32 border-2 border-white rounded-sm overflow-hidden scale-75">
          <img src={images[(index + 1) % images.length].src} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
});

Carousel.displayName = "Carousel";

const InvitationSection = () => {
  const { t } = useLanguage();
  const [selectedCeremony, setSelectedCeremony] = useState<any>(null);

  const images = useMemo(() => [
    { src: "https://iili.io/Brj4rkF.jpg", pos: "object-[center_20%]" },
    { src: "https://iili.io/BgQG0PI.jpg", pos: "object-[center_20%]" },
    { src: "https://iili.io/BrOpjxR.jpg", pos: "object-top" },
    { src: "https://iili.io/BgDVXf4.jpg", pos: "object-[center_20%]" },
    { src: "https://iili.io/BgQYWQ9.jpg", pos: "object-[center_20%]" },
  ], []);

  const ceremonies = useMemo(() => [
    {
      title: t("profile.weddingCeremony"),
      side: t("profile.groomSideLabel"),
      day: t("profile.tuesday"),
      date: "26",
      month: "05",
      year: "2026",
      lunar: `${t("profile.tuesday")}, ${t("profile.datePrefix")} ${t("profile.lunarDateGroom")}`,
      location: t("profile.groomLocation"),
      time: "10:30",
      mapUrl: "https://maps.app.goo.gl/rQW4JUwTbxWbMa7v9",
      receptionAddress: t("profile.groomReceptionAddress"),
      receptionDate: `${t("profile.monday")}, 25 ${t("profile.month")} 05, 2026`,
      receptionTime: "16:00",
    },
    {
      title: t("profile.vuQuyCeremony"),
      side: t("profile.brideSideLabel"),
      day: t("profile.sunday"),
      date: "24",
      month: "05",
      year: "2026",
      lunar: `${t("profile.sunday")}, ${t("profile.datePrefix")} ${t("profile.lunarDateBride")}`,
      location: t("profile.brideLocation"),
      time: "11:00",
      mapUrl: "https://maps.app.goo.gl/546cZurhSAooApAT8",
      receptionAddress: t("profile.brideReceptionAddress"),
      receptionDate: `${t("profile.saturday")}, 23 ${t("profile.month")} 05, 2026`,
      receptionTime: "16:00",
    },
  ], [t]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <ScrollReveal>
          <SectionTitle
            title={t("profile.invitation")}
            subtitle={`${t("profile.joinUs")} ${t("brand.groom")} & ${t("brand.bride")}`}
          />
        </ScrollReveal>

        {/* Centered Auto-sliding Carousel */}
        <div className="mb-24">
          <Carousel images={images} />
        </div>

        {/* Ceremony Details */}
        <div className="grid lg:grid-cols-2 gap-16 md:gap-32">
          {ceremonies.map((ceremony, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.2}>
              <div className="text-center relative">
                <h3 className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-gray-800 uppercase mb-8">
                  {ceremony.title}
                </h3>

                <p className="text-xs text-gray-800 uppercase tracking-widest mb-10">
                  {t("profile.atTime")}
                </p>

                <div className="flex items-center justify-center mb-10">
                  {/* Time Col */}
                  <div className="flex-1 text-center pr-4 md:pr-8">
                    <p className="text-lg md:text-xl font-medium text-gray-600 italic">
                      {ceremony.time.split(':')[0]} {t("profile.hour")} {ceremony.time.split(':')[1]}
                    </p>
                  </div>

                  {/* Center Col */}
                  <div className="flex-none px-6 md:px-12 border-x ">
                    <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mb-2">
                      {ceremony.day}
                    </p>
                    <p className="text-5xl md:text-7xl font-bold text-wedding-gold leading-none mb-2">
                      {ceremony.date}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest">
                      {t("profile.month")} {ceremony.month}
                    </p>
                  </div>

                  {/* Year Col */}
                  <div className="flex-1 text-center pl-4 md:pl-8">
                    <p className="text-lg md:text-xl font-medium text-gray-600 italic">
                      {t("profile.year")} {ceremony.year}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm md:text-base text-gray-500 italic">
                    {ceremony.lunar}
                  </p>
                  <div className="w-16 h-px bg-wedding-gold/20 mx-auto my-6" />
                  <p className="text-lg md:text-xl font-bold text-gray-800 tracking-wide uppercase mb-6">
                    {ceremony.location}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={() => setSelectedCeremony(ceremony)}
                      className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-wedding-gold/5 border border-wedding-gold/30 text-wedding-gold text-sm tracking-widest hover:bg-wedding-gold hover:text-white transition-all duration-300 w-full sm:w-auto justify-center"
                    >
                      <Info size={16} />
                      {t("profile.viewDetails")}
                    </button>
                    <a
                      href={ceremony.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-wedding-gold/30 text-wedding-gold text-sm tracking-widest hover:bg-wedding-gold hover:text-white transition-all duration-300 w-full sm:w-auto justify-center"
                    >
                      <MapPin size={16} />
                      {t("profile.viewMap")}
                    </a>


                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <CeremonyModal
        isOpen={!!selectedCeremony}
        onClose={() => setSelectedCeremony(null)}
        ceremony={selectedCeremony || ceremonies[0]}
      />
    </section>
  );
};

export default InvitationSection;

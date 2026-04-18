import { useLanguage } from "@/context/LanguageContext";
import {
  ChevronLeft,
  ChevronRight,
  Flower2,
  Heart,
  Maximize2,
} from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import ScrollReveal from "./ScrollReveal";
import ProgressiveImage from "./ProgressiveImage";

interface WeddingAlbumProps {
  photos: string[];
}

const Page = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; number: number; isCover?: boolean }
>((props, ref) => {
  return (
    <div
      className={`${props.isCover ? "leather-cover" : "paper-texture"
        } shadow-2xl relative overflow-hidden h-full select-none`}
      ref={ref}
    >
      {/* Decorative inner border for cover */}
      {props.isCover && (
        <div className="absolute inset-4 border border-wedding-gold/20 pointer-events-none z-20" />
      )}

      <div className="h-full w-full flex flex-col items-center justify-center p-6 md:p-12 relative z-10">
        {props.children}

        {props.number > 0 && props.number < 17 && (
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <span className="text-[10px] md:text-xs text-wedding-gold/40 wedding-body tracking-[0.5em] uppercase font-bold">
              — {props.number} —
            </span>
          </div>
        )}
      </div>

      {/* Realistic page lighting/shadow */}
      {!props.isCover && (
        <>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/10 via-black/5 to-transparent pointer-events-none z-20" />
          <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-black/5 to-transparent pointer-events-none z-20" />
          <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-black/5 to-transparent pointer-events-none z-20" />
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-black/5 to-transparent pointer-events-none z-20" />
        </>
      )}
    </div>
  );
});

Page.displayName = "Page";

const WeddingAlbum: React.FC<WeddingAlbumProps> = ({ photos }) => {
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [pageSize, setPageSize] = useState({ width: 340, height: 500 });
  const { t } = useLanguage();
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);

      if (isMobileView) {
        setPageSize({ width: 340, height: 500 });
      } else {
        // Desktop: scale based on viewport height to ensure it fits
        const vh = window.innerHeight;
        const targetHeight = Math.min(vh * 0.75, 800);
        const targetWidth = targetHeight * 0.72; // Classic book ratio
        setPageSize({ width: targetWidth, height: targetHeight });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onFlip = useCallback((e: any) => {
    setCurrentPage(e.data);
  }, []);

  const next = () => bookRef.current?.pageFlip()?.flipNext();
  const prev = () => bookRef.current?.pageFlip()?.flipPrev();

  return (
    <div className="relative max-w-[1400px] mx-auto py-16 md:py-24 px-4 group">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none overflow-hidden">
        <Flower2 className="absolute top-10 left-10 w-64 h-64 text-wedding-gold rotate-12" />
        <Flower2 className="absolute bottom-10 right-10 w-64 h-64 text-wedding-gold -rotate-12" />
        <Flower2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] text-wedding-gold opacity-[0.03]" />
      </div>

      {/* Main Album Container */}
      {/* Desktop/Web FlipBook View */}
      {!isMobile && (
        <>
          <div className="flex justify-center items-center py-8">
            <div className="premium-shadow rounded-sm overflow-hidden perspective-1000">
              <HTMLFlipBook
                width={pageSize.width}
                height={pageSize.height}
                size="stretch"
                minWidth={500}
                maxWidth={1000}
                minHeight={700}
                maxHeight={1400}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
                onFlip={onFlip}
                className="wedding-album-book"
                ref={bookRef}
                startPage={0}
                drawShadow={true}
                flippingTime={1200}
                usePortrait={isMobile}
                startZIndex={0}
                autoSize={true}
                clickEventForward={true}
                useMouseEvents={true}
                swipeDistance={30}
                showPageCorners={true}
                disableFlipByClick={false}
                style={{}}
              >
                {/* Front Cover */}
                <Page number={0} isCover={true}>
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 md:p-12 relative overflow-hidden">
                    {/* SVG Corner Ornaments */}
                    <div className="absolute top-4 left-4 w-12 h-12 text-wedding-gold/20 pointer-events-none z-10">
                      <svg
                        viewBox="0 0 100 100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M0,50 Q0,0 50,0" />
                      </svg>
                    </div>
                    <div className="absolute top-4 right-4 w-12 h-12 text-wedding-gold/20 pointer-events-none rotate-90 z-10">
                      <svg
                        viewBox="0 0 100 100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M0,50 Q0,0 50,0" />
                      </svg>
                    </div>

                    <div className="flex flex-col items-center mb-6">
                      <Flower2 className="w-8 h-8 text-wedding-gold/40 mb-4 animate-float" />
                      <h2 className="wedding-script text-5xl md:text-6xl gold-foil drop-shadow-lg leading-none italic font-normal">
                        Our Journey
                      </h2>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="relative inline-block px-6 py-1 border-y border-wedding-gold/20">
                        <p className="wedding-body text-wedding-gold/90 tracking-[0.5em] md:tracking-[0.8em] uppercase text-sm md:text-xl font-bold">
                          {t("brand.groom")} & {t("brand.bride")}
                        </p>
                      </div>
                      <p className="wedding-display text-wedding-gold/40 text-[16px] md:text-md tracking-[0.5em] font-medium uppercase mt-2">
                        26 / 05 / 2026
                      </p>
                    </div>
                  </div>
                </Page>

                {/* Content Pages */}
                {photos.slice(1).map((src, i) => (
                  <Page key={i} number={i + 1}>
                    <div className="w-full h-full flex flex-col items-center justify-center relative">
                      <div className="absolute top-4 right-4 w-12 h-12 opacity-[0.03] text-wedding-gold pointer-events-none">
                        <svg
                          viewBox="0 0 100 100"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M0,0 Q100,0 100,100" />
                        </svg>
                      </div>
                      <div className="absolute bottom-16 left-4 w-12 h-12 opacity-[0.03] text-wedding-gold pointer-events-none rotate-180">
                        <svg
                          viewBox="0 0 100 100"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M0,0 Q100,0 100,100" />
                        </svg>
                      </div>

                      <div
                        className={`w-full ${i % 4 === 0 ? "h-[85%]" : "h-full"} p-0.5 bg-white shadow-2xl relative group/page transform transition-transform duration-700 hover:scale-[1.02]`}
                      >
                        <img
                          src={src}
                          className="w-full h-full object-cover"
                          alt={`Moment ${i + 1}`}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-wedding-gold/10 to-transparent opacity-0 group-hover/page:opacity-100 transition-opacity duration-700 pointer-events-none" />
                      </div>

                      {i % 4 === 0 && (
                        <div className="mt-8 text-center px-4">
                          <p className="wedding-script text-3xl text-wedding-gold/70 italic mb-1">
                            Captured Love
                          </p>
                          <p className="wedding-body text-[10px] tracking-[0.3em] uppercase text-wedding-gold/40">
                            In every heartbeat
                          </p>
                        </div>
                      )}
                    </div>
                  </Page>
                ))}

                {/* Back Cover */}
                <Page number={photos.length} isCover={true}>
                  <div className="w-full h-full flex flex-col items-center justify-center text-center">
                    <div className="mb-12 relative">
                      <Heart className="w-16 h-16 text-wedding-gold/40 animate-pulse fill-wedding-gold/5" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Flower2 className="w-6 h-6 text-wedding-gold/60" />
                      </div>
                    </div>

                    <h3 className="wedding-script text-5xl md:text-7xl gold-foil mb-8">
                      Endless Love
                    </h3>

                    <div className="max-w-md space-y-6">
                      <p className="wedding-body italic text-white/60 text-lg md:text-xl leading-relaxed">
                        {t("album.description")}
                      </p>

                      <div className="flex flex-col items-center gap-3 pt-6 border-t border-white/10">
                        <p className="text-wedding-gold/40 text-[10px] uppercase tracking-[0.4em]">
                          With Gratitude
                        </p>
                        <p className="text-wedding-gold/90 text-sm font-bold tracking-[0.2em] wedding-display">
                          {t("brand.groom")} & {t("brand.bride")}
                        </p>
                      </div>
                    </div>
                  </div>
                </Page>
              </HTMLFlipBook>
            </div>
          </div>

          {/* Premium Controls */}
          <div className="flex flex-col items-center gap-6 mt-12 md:mt-20 scale-90 md:scale-110">
            <div className="flex justify-center items-center gap-10 glass-card px-10 py-5 rounded-full border-wedding-gold/20 shadow-2xl transition-all duration-700 hover:bg-white/60">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-wedding-gold/30 flex items-center justify-center text-wedding-gold hover:bg-wedding-gold hover:text-white transition-all duration-500 disabled:opacity-20 group/btn"
                disabled={currentPage === 0}
              >
                <ChevronLeft className="w-5 h-5 transition-transform group-hover/btn:-translate-x-1" />
              </button>

              <div className="flex flex-col items-center min-w-[140px]">
                <span className="wedding-display text-base md:text-xl font-bold text-wedding-gold/80 tracking-[0.4em]">
                  {Math.min(currentPage + 1, photos.length + 1)} /{" "}
                  {photos.length + 1}
                </span>
                <div className="w-full h-0.5 bg-wedding-gold/10 mt-3 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-wedding-gold transition-all duration-1000 ease-out"
                    style={{
                      width: `${((currentPage + 1) / (photos.length + 1)) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-wedding-gold/30 flex items-center justify-center text-wedding-gold hover:bg-wedding-gold hover:text-white transition-all duration-500 disabled:opacity-20 group/btn"
                disabled={currentPage >= photos.length}
              >
                <ChevronRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>

            <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-wedding-gold/10 backdrop-blur-sm bg-white/30 transition-all duration-500 hover:bg-white/50">
              <Maximize2 className="w-3 h-3 text-wedding-gold/40" />
              <p className="text-wedding-gold/60 text-[9px] md:text-xs tracking-[0.3em] uppercase font-bold">
                {t("gallery.guide")}
              </p>
            </div>
          </div>
        </>
      )}

      {/* Mobile Vertical Gallery View */}
      {isMobile && (
        <div className="flex flex-col gap-16 pb-12 mt-8">
          {/* Cover */}
          <ScrollReveal direction="up">
            <div className="leather-cover mx-auto max-w-[340px] aspect-[3/4.5] rounded-xl shadow-2xl relative overflow-hidden flex flex-col items-center justify-center p-8 text-center ring-1 ring-wedding-gold/20">
              <div className="absolute inset-4 border border-wedding-gold/20 pointer-events-none" />
              <Flower2 className="w-12 h-12 text-wedding-gold/40 mb-6 animate-float" />
              <h2 className="wedding-script text-6xl gold-foil mb-8">
                Our Journey
              </h2>
              <div className="space-y-4">
                <p className="wedding-body text-wedding-gold/90 tracking-[0.4em] uppercase text-sm font-bold border-y border-wedding-gold/20 py-2 px-4">
                  {t("brand.groom")} & {t("brand.bride")}
                </p>
                <p className="wedding-display text-wedding-gold/40 text-[14px] tracking-[0.3em] font-medium mt-2">
                  26 . 05 . 2026
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Vertical Stream of Photos */}
          <div className="space-y-24">
            {photos.slice(1).map((src, i) => {
              // Alternate styles for a more dynamic look
              const isLandscape = i % 3 === 0;
              return (
                <ScrollReveal
                  key={i}
                  direction={i % 2 === 0 ? "left" : "right"}
                  className="flex flex-col items-center"
                >
                  <div className="paper-texture p-3 rounded-md shadow-2xl relative group max-w-[92%] mx-auto ring-1 ring-wedding-gold/10">
                    <div className="absolute inset-0 border-[8px] border-white/40 pointer-events-none z-10" />
                    <div className={`relative overflow-hidden ${isLandscape ? 'aspect-video' : 'aspect-[4/5.5]'}`}>
                      <ProgressiveImage
                        src={src}
                        className="w-full h-full object-cover"
                        alt={`Moment ${i + 1}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-wedding-gold/5 to-transparent pointer-events-none" />
                    </div>
                    {i % 4 === 0 && (
                      <div className="pt-6 pb-2 text-center">
                        <p className="wedding-script text-4xl text-wedding-gold/70 italic">
                          Captured Love
                        </p>
                        <div className="w-12 h-px bg-wedding-gold/20 mx-auto mt-2" />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Back Cover */}
          <ScrollReveal direction="up">
            <div className="leather-cover mx-auto max-w-[340px] aspect-[3/4.5] rounded-xl shadow-2xl relative overflow-hidden flex flex-col items-center justify-center p-10 text-center ring-1 ring-wedding-gold/20">
              <div className="absolute inset-4 border border-wedding-gold/20 pointer-events-none" />
              <Heart className="w-16 h-16 text-wedding-gold/40 mb-8 animate-pulse fill-wedding-gold/5" />
              <h3 className="wedding-script text-6xl gold-foil mb-8 leading-tight">
                Endless Love
              </h3>
              <p className="wedding-body italic text-white/60 text-sm leading-relaxed mb-8 px-2">
                {t("album.description")}
              </p>
              <div className="pt-6 border-t border-white/10 w-full">
                <p className="text-wedding-gold/40 text-[9px] uppercase tracking-[0.3em] mb-2">
                  Forever Together
                </p>
                <p className="text-wedding-gold/90 text-xs font-bold tracking-[0.2em] wedding-display">
                  {t("brand.groom")} & {t("brand.bride")}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      )}
    </div>
  );
};

export default WeddingAlbum;

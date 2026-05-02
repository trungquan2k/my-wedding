import NavBar from "@/components/wedding/NavBar";
import HeroSection from "@/components/wedding/HeroSection";
import LoveStorySection from "@/components/wedding/LoveStorySection";
import GallerySection from "@/components/wedding/GallerySection";
import ParallaxBanner from "@/components/wedding/ParallaxBanner";
import CountdownSection from "@/components/wedding/CountdownSection";
import WishesSection from "@/components/wedding/WishesSection";
import FooterSection from "@/components/wedding/FooterSection";
import CurtainIntro from "@/components/wedding/CurtainIntro";
import ProfileSection from "@/components/wedding/ProfileSection";
import InvitationSection from "@/components/wedding/InvitationSection";
import bannerImg from "@/assets/KENN0975.jpg";
import GiftSection from "@/components/wedding/GiftSection";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import MusicPlayer from "@/components/wedding/MusicPlayer";

const Index = () => {
  const { t } = useLanguage();
  const [isLocked, setIsLocked] = useState(true);
  const [guestName, setGuestName] = useState<string | null>(null);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      }, 0);
    }
  }, [isLocked]);

  const handleOpen = (name: string) => {
    setGuestName(name);
    setIsLocked(false);

    // Phát tín hiệu để MusicPlayer bắt đầu chơi nhạc ngay trong event click này
    window.dispatchEvent(new CustomEvent('playWeddingMusic'));
  };

  return (
    <main className="overflow-x-hidden relative">
      <CurtainIntro onOpen={handleOpen} />
      <NavBar />
      <HeroSection />
      <ProfileSection guestName={guestName} />
      <InvitationSection />
      <LoveStorySection />
      <GallerySection />
      <ParallaxBanner
        image={bannerImg}
        text={t("parallax.text")}
        subtext={t("parallax.subtext")}
      />
      <CountdownSection />
      {/* <GiftSection /> */}
      <WishesSection />
      <FooterSection />

      <MusicPlayer isLocked={isLocked} />
    </main>
  );
};

export default Index;

import NavBar from "@/components/wedding/NavBar";
import HeroSection from "@/components/wedding/HeroSection";
import LoveStorySection from "@/components/wedding/LoveStorySection";
import GallerySection from "@/components/wedding/GallerySection";
import ParallaxBanner from "@/components/wedding/ParallaxBanner";
import CountdownSection from "@/components/wedding/CountdownSection";
import DetailsSection from "@/components/wedding/DetailsSection";
import WishesSection from "@/components/wedding/WishesSection";
import FooterSection from "@/components/wedding/FooterSection";
import bannerImg from "@/assets/wedding-couple-5.jpg";

const Index = () => (
  <main className="overflow-x-hidden">
    <NavBar />
    <HeroSection />
    <LoveStorySection />
    <GallerySection />
    <ParallaxBanner
      image={bannerImg}
      text="Hạnh phúc là khi ta tìm thấy nhau"
      subtext="Forever begins with us"
    />
    <CountdownSection />
    <DetailsSection />
    <WishesSection />
    <FooterSection />
  </main>
);

export default Index;

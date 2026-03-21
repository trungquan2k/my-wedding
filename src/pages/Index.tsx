import HeroSection from "@/components/wedding/HeroSection";
import DetailsSection from "@/components/wedding/DetailsSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import WishesSection from "@/components/wedding/WishesSection";
import FooterSection from "@/components/wedding/FooterSection";

const Index = () => (
  <main className="overflow-x-hidden">
    <HeroSection />
    <CountdownSection />
    <DetailsSection />
    <WishesSection />
    <FooterSection />
  </main>
);

export default Index;

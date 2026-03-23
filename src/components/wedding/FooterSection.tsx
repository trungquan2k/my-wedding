import { Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FooterSection = () => (
  <footer className="py-16 px-4 bg-foreground text-center">
    <ScrollReveal>
      <p className="wedding-script text-2xl md:text-3xl text-wedding-gold mb-2">
        Cảm ơn bạn!
      </p>
      <p className="wedding-body text-lg text-white/70 mb-4">
        Sự hiện diện của bạn là niềm vui lớn nhất của chúng tôi
      </p>
      <Heart className="w-5 h-5 text-wedding-gold fill-wedding-gold mx-auto" />
      <p className="mt-6 text-sm text-white/40">
        Trung Quân & Yến Nhi — 26.05.2026
      </p>
    </ScrollReveal>
  </footer>
);

export default FooterSection;

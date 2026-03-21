import { Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FooterSection = () => (
  <footer className="py-12 px-4 bg-wedding-warm text-center">
    <ScrollReveal>
      <p className="wedding-script text-2xl md:text-3xl wedding-gold-text mb-2">
        Cảm ơn bạn!
      </p>
      <p className="text-muted-foreground wedding-body text-lg mb-4">
        Sự hiện diện của bạn là niềm vui lớn nhất của chúng tôi
      </p>
      <Heart className="w-5 h-5 text-wedding-gold fill-wedding-gold mx-auto" />
      <p className="mt-6 text-sm text-muted-foreground">
        Văn A & Thị B — 15.06.2026
      </p>
    </ScrollReveal>
  </footer>
);

export default FooterSection;

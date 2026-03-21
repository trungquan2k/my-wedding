import { MapPin, Clock, Calendar } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import OrnamentDivider from "./OrnamentDivider";

const DetailsSection = () => {
  return (
    <section id="details" className="wedding-section bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <p className="wedding-script text-3xl md:text-4xl wedding-gold-text mb-2">
            Lễ Thành Hôn
          </p>
          <OrnamentDivider className="mb-12" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Nhà trai */}
          <ScrollReveal delay={0.1}>
            <div className="scroll-frame rounded-sm p-8 md:p-10">
              <div className="scroll-cap mb-6" />
              <p className="wedding-script text-2xl wedding-gold-text mb-4">Nhà Trai</p>
              <h3 className="wedding-display text-xl font-semibold wedding-burgundy-text mb-6">
                Chú rể: Văn A
              </h3>
              <div className="space-y-3 text-foreground">
                <div className="flex items-start justify-center gap-2">
                  <MapPin className="w-4 h-4 mt-1 text-wedding-gold shrink-0" />
                  <p>Thôn Phú Kinh, xã Bắc Trạch, tỉnh Quảng Trị</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4 text-wedding-gold shrink-0" />
                  <p>Thứ Hai, 15/06/2026</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-wedding-gold shrink-0" />
                  <p>10:00 sáng</p>
                </div>
              </div>
              <div className="scroll-cap mt-6" />
            </div>
          </ScrollReveal>

          {/* Nhà gái */}
          <ScrollReveal delay={0.2}>
            <div className="scroll-frame rounded-sm p-8 md:p-10">
              <div className="scroll-cap mb-6" />
              <p className="wedding-script text-2xl wedding-gold-text mb-4">Nhà Gái</p>
              <h3 className="wedding-display text-xl font-semibold wedding-burgundy-text mb-6">
                Cô dâu: Thị B
              </h3>
              <div className="space-y-3 text-foreground">
                <div className="flex items-start justify-center gap-2">
                  <MapPin className="w-4 h-4 mt-1 text-wedding-gold shrink-0" />
                  <p>Thôn Mỹ Chánh, xã Nam Hải Lăng, tỉnh Quảng Trị</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4 text-wedding-gold shrink-0" />
                  <p>Chủ Nhật, 14/06/2026</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-wedding-gold shrink-0" />
                  <p>10:00 sáng</p>
                </div>
              </div>
              <div className="scroll-cap mt-6" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;

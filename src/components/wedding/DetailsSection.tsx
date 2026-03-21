import { MapPin, Clock, Calendar } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const DetailsSection = () => (
  <section id="details" className="py-20 md:py-28 bg-wedding-warm">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <ScrollReveal>
        <p className="wedding-script text-3xl md:text-4xl wedding-gold-text mb-2">
          Lễ Thành Hôn
        </p>
        <p className="text-muted-foreground wedding-body text-lg mb-14">
          Wedding Ceremony
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <ScrollReveal delay={0.1}>
          <div className="bg-background rounded-sm p-8 md:p-10 shadow-lg border border-border">
            <p className="wedding-script text-2xl wedding-gold-text mb-3">Nhà Trai</p>
            <h3 className="wedding-display text-xl font-semibold wedding-burgundy-text mb-5">
              Chú rể: Văn A
            </h3>
            <div className="space-y-3 text-foreground wedding-body">
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
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-background rounded-sm p-8 md:p-10 shadow-lg border border-border">
            <p className="wedding-script text-2xl wedding-gold-text mb-3">Nhà Gái</p>
            <h3 className="wedding-display text-xl font-semibold wedding-burgundy-text mb-5">
              Cô dâu: Thị B
            </h3>
            <div className="space-y-3 text-foreground wedding-body">
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
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default DetailsSection;

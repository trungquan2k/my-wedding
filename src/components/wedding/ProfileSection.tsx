import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { MapPin, Clock, Calendar } from "lucide-react";
import groomImg from "@/assets/KENN1083.jpg";
import brideImg from "@/assets/KENN0499.jpg";

const ProfileSection = () => {
  return (
    <section
      id="details"
      className="py-24 md:py-36 bg-wedding-warm/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20 md:mb-28">
            <span className="wedding-body text-wedding-gold tracking-[0.4em] text-sm md:text-base uppercase mb-4 block">Save The Date</span>
            <h2 className="wedding-script text-5xl md:text-7xl wedding-gold-text mb-6">
              Lời Mời Trân Trọng
            </h2>
            <div className="w-32 h-px bg-wedding-gold/40 mx-auto mb-8" />
            <p className="wedding-body text-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed italic opacity-80">
              Trân trọng kính mời quý khách đến dự buổi tiệc mừng lễ thành hôn của gia đình chúng tôi
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-20 md:gap-32">
          {/* Groom Block */}
          <div className="flex flex-col items-center group">
            <ScrollReveal direction="right" duration={1.2}>
              <div className="relative mb-12 md:mb-16">
                <div className="absolute -inset-6 border border-wedding-gold/20 rounded-full scale-105 group-hover:scale-110 transition-transform duration-1000" />
                <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-full shadow-2xl z-10 border-8 border-white">
                  <img
                    src={groomImg}
                    alt="Chú rể"
                    className="w-full h-full object-cover object-[center_10%] group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>
                {/* Badge decoration */}
                <div className="absolute top-10 right-0 z-20 bg-wedding-gold text-white px-4 py-2 rounded-full shadow-lg -rotate-12 translate-x-4">
                  <span className="wedding-body text-xs font-semibold tracking-widest uppercase">Groom Side</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="text-center w-full">
              <span className="wedding-body text-wedding-gold tracking-[0.4em] text-sm uppercase mb-4 block">
                Chú Rể
              </span>
              <h3 className="wedding-display text-4xl md:text-6xl wedding-burgundy-text mb-4 font-bold tracking-tight">
                Hoàng Trung Quân
              </h3>
              <p className="wedding-body text-muted-foreground text-xl md:text-2xl mb-8 font-light italic">(Trưởng Nam)</p>
              
              {/* Family Info */}
              <div className="mb-12 space-y-3 text-foreground wedding-body text-lg md:text-xl border-t border-b border-wedding-gold/10 py-6">
                <p>Quý tử của: <span className="font-semibold text-wedding-burgundy">Hoàng Văn Đoàn</span></p>
                <p>& <span className="font-semibold text-wedding-burgundy">Lê Thị Quy</span></p>
                <p className="text-sm text-muted-foreground mt-4 not-italic">
                   <MapPin className="inline-block w-4 h-4 mr-2 text-wedding-gold" />
                   Thôn Phú Kinh, xã Bắc Trạch, huyện Bố Trạch, tỉnh Quảng Bình
                </p>
              </div>

              {/* Groom Details Card */}
              <div className="bg-white p-10 md:p-14 rounded-3xl shadow-2xl border border-wedding-gold/20 hover:border-wedding-gold/50 transition-all duration-700 max-w-lg mx-auto relative overflow-hidden group/card text-left">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-wedding-gold via-wedding-gold-light to-wedding-gold" />
                <p className="wedding-script text-4xl md:text-5xl wedding-gold-text mb-10 text-center">
                  Lễ Thành Hôn
                </p>
                
                <div className="space-y-10 text-foreground wedding-body">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 mb-2">
                       <span className="w-10 h-px bg-wedding-gold" />
                       <p className="font-bold wedding-display text-wedding-burgundy uppercase tracking-[0.2em] text-sm">Hôn lễ cử hành tại Tư gia</p>
                    </div>
                    <div className="flex items-center gap-5 ml-2">
                      <div className="w-12 h-12 rounded-full bg-wedding-gold/10 flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 text-wedding-gold" />
                      </div>
                      <p className="text-2xl md:text-3xl font-medium">07h00 - Thứ Ba</p>
                    </div>
                    <p className="text-lg md:text-xl ml-16 text-wedding-burgundy/80 font-display">26 . 05 . 2026</p>
                    <p className="text-sm text-muted-foreground ml-16 italic">(10/04 Âm lịch năm Bính Ngọ)</p>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-dashed border-wedding-gold/20">
                    <div className="flex items-center gap-4 mb-2">
                       <span className="w-10 h-px bg-wedding-gold" />
                       <p className="font-bold wedding-display text-wedding-burgundy uppercase tracking-[0.2em] text-sm">Tiệc mừng tại Tư gia</p>
                    </div>
                    <div className="flex items-center gap-5 ml-2">
                      <div className="w-12 h-12 rounded-full bg-wedding-gold/10 flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 text-wedding-gold" />
                      </div>
                      <p className="text-2xl md:text-3xl font-medium">10h30 Sáng</p>
                    </div>
                    <div className="flex items-start gap-5 ml-2">
                      <div className="w-12 h-12 rounded-full bg-wedding-gold/10 flex items-center justify-center shrink-0 mt-1">
                        <MapPin className="w-6 h-6 text-wedding-gold" />
                      </div>
                      <p className="text-base md:text-lg leading-relaxed flex-1">Thôn Phú Kinh, xã Bắc Trạch, huyện Bố Trạch, tỉnh Quảng Bình</p>
                    </div>
                  </div>
                </div>
                
                <a
                  href="https://maps.app.goo.gl/..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-12 flex items-center justify-center gap-3 bg-wedding-gold/10 hover:bg-wedding-gold text-wedding-gold hover:text-white py-4 rounded-xl transition-all duration-500 text-xs md:text-sm uppercase tracking-[0.3em] font-bold"
                >
                  <MapPin className="w-4 h-4" /> Xem bản đồ trực tuyến
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Bride Block */}
          <div className="flex flex-col items-center group">
            <ScrollReveal direction="left" duration={1.2}>
              <div className="relative mb-12 md:mb-16">
                <div className="absolute -inset-6 border border-wedding-gold/20 rounded-full scale-105 group-hover:scale-110 transition-transform duration-1000" />
                <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-full shadow-2xl z-10 border-8 border-white">
                  <img
                    src={brideImg}
                    alt="Cô dâu"
                    className="w-full h-full object-cover object-[center_30%] group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>
                {/* Badge decoration */}
                <div className="absolute top-10 left-0 z-20 bg-wedding-gold text-white px-4 py-2 rounded-full shadow-lg rotate-12 -translate-x-4">
                  <span className="wedding-body text-xs font-semibold tracking-widest uppercase">Bride Side</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="text-center w-full">
              <span className="wedding-body text-wedding-gold tracking-[0.4em] text-sm uppercase mb-4 block">
                Cô Dâu
              </span>
              <h3 className="wedding-display text-4xl md:text-6xl wedding-burgundy-text mb-4 font-bold tracking-tight">
                Nguyễn Thị Yến Nhi
              </h3>
              <p className="wedding-body text-muted-foreground text-xl md:text-2xl mb-8 font-light italic">(Trưởng Nữ)</p>

              {/* Family Info */}
              <div className="mb-12 space-y-3 text-foreground wedding-body text-lg md:text-xl border-t border-b border-wedding-gold/10 py-6">
                <p>Ái nữ của: <span className="font-semibold text-wedding-burgundy">Nguyễn Đức Thạnh</span></p>
                <p>& <span className="font-semibold text-wedding-burgundy">Lê Thị Tuyết My</span></p>
                <p className="text-sm text-muted-foreground mt-4 not-italic">
                   <MapPin className="inline-block w-4 h-4 mr-2 text-wedding-gold" />
                   Tổ 8, thôn Mỹ Chánh, xã Nam Hải Lăng, tỉnh Quảng Trị
                </p>
              </div>

              {/* Bride Details Card */}
              <div className="bg-white p-10 md:p-14 rounded-3xl shadow-2xl border border-wedding-gold/20 hover:border-wedding-gold/50 transition-all duration-700 max-w-lg mx-auto relative overflow-hidden group/card text-left">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-wedding-gold via-wedding-gold-light to-wedding-gold" />
                <p className="wedding-script text-4xl md:text-5xl wedding-gold-text mb-10 text-center">
                  Lễ Vu Quy
                </p>

                <div className="space-y-10 text-foreground wedding-body">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 mb-2">
                       <span className="w-10 h-px bg-wedding-gold" />
                       <p className="font-bold wedding-display text-wedding-burgundy uppercase tracking-[0.2em] text-sm">Hôn lễ cử hành tại Tư gia</p>
                    </div>
                    <div className="flex items-center gap-5 ml-2">
                      <div className="w-12 h-12 rounded-full bg-wedding-gold/10 flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 text-wedding-gold" />
                      </div>
                      <p className="text-2xl md:text-3xl font-medium">08h00 - Chủ Nhật</p>
                    </div>
                    <p className="text-lg md:text-xl ml-16 text-wedding-burgundy/80 font-display">24 . 05 . 2026</p>
                    <p className="text-sm text-muted-foreground ml-16 italic">(08/04 Âm lịch năm Bính Ngọ)</p>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-dashed border-wedding-gold/20">
                    <div className="flex items-center gap-4 mb-2">
                       <span className="w-10 h-px bg-wedding-gold" />
                       <p className="font-bold wedding-display text-wedding-burgundy uppercase tracking-[0.2em] text-sm">Tiệc mừng tại Tư gia</p>
                    </div>
                    <div className="flex items-center gap-5 ml-2">
                      <div className="w-12 h-12 rounded-full bg-wedding-gold/10 flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 text-wedding-gold" />
                      </div>
                      <p className="text-2xl md:text-3xl font-medium">11h00 Sáng</p>
                    </div>
                    <div className="flex items-start gap-5 ml-2">
                      <div className="w-12 h-12 rounded-full bg-wedding-gold/10 flex items-center justify-center shrink-0 mt-1">
                        <MapPin className="w-6 h-6 text-wedding-gold" />
                      </div>
                      <p className="text-base md:text-lg leading-relaxed flex-1">Tổ 8, thôn Mỹ Chánh, xã Nam Hải Lăng, tỉnh Quảng Trị</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://maps.app.goo.gl/..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-12 flex items-center justify-center gap-3 bg-wedding-gold/10 hover:bg-wedding-gold text-wedding-gold hover:text-white py-4 rounded-xl transition-all duration-500 text-xs md:text-sm uppercase tracking-[0.3em] font-bold"
                >
                  <MapPin className="w-4 h-4" /> Xem bản đồ trực tuyến
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;



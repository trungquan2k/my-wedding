import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import floralFrame from "@/assets/wedding-floral-frame.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-wedding-cream">
      {/* Background floral frame */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={floralFrame}
          alt=""
          className="w-full h-full object-cover opacity-40 md:opacity-50"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-lg">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="wedding-script text-2xl md:text-3xl wedding-gold-text mb-4"
        >
          Trân trọng kính mời
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h1 className="wedding-display text-4xl md:text-6xl font-semibold wedding-burgundy-text leading-tight mb-2">
            Văn A
          </h1>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.0, type: "spring", stiffness: 200 }}
            className="flex justify-center my-3"
          >
            <Heart className="w-6 h-6 text-wedding-gold fill-wedding-gold animate-float" />
          </motion.div>
          <h1 className="wedding-display text-4xl md:text-6xl font-semibold wedding-burgundy-text leading-tight">
            Thị B
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8"
        >
          <div className="wedding-divider">
            <span className="wedding-script text-xl wedding-gold-text">Ngày cưới</span>
          </div>
          <p className="wedding-display text-xl md:text-2xl font-medium text-foreground tracking-wide">
            15 . 06 . 2026
          </p>
          <p className="text-muted-foreground mt-2 text-lg">(Nhằm ngày 01 tháng 05 năm Bính Ngọ)</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-10"
        >
          <a
            href="#details"
            className="inline-block px-8 py-3 border-2 border-wedding-gold text-wedding-gold wedding-display text-lg tracking-widest uppercase hover:bg-wedding-gold hover:text-wedding-cream transition-colors duration-300 active:scale-[0.97]"
          >
            Xem thiệp mời
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

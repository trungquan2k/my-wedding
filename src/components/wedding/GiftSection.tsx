import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/LanguageContext";

const BankingCard = ({ 
  owner, 
  bank, 
  accountNumber, 
  qrCode, 
  type 
}: { 
  owner: string; 
  bank: string; 
  accountNumber: string; 
  qrCode: string;
  type: "bride" | "groom";
}) => {
  const { toast } = useToast();
  const { t } = useLanguage();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber);
    toast({
      title: t("gift.copied"),
      description: `${t("gift.accountNumber")} ${owner} ${language === 'vi' ? 'đã được sao chép' : 'has been copied'}`,
    });
  };

  const { language } = useLanguage();

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-wedding-gold/20 shadow-xl flex flex-col items-center group">
      <div className="w-full aspect-square max-w-[240px] mb-6 p-4 bg-white rounded-xl border border-wedding-gold/10 shadow-inner flex items-center justify-center relative overflow-hidden">
        <img 
          src={qrCode} 
          alt={`QR Code ${owner}`} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-wedding-gold/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
      
      <div className="text-center w-full">
        <p className="wedding-body text-wedding-gold uppercase tracking-[0.2em] text-xs mb-2">
          {type === "bride" ? t("gift.brideSide") : t("gift.groomSide")}
        </p>
        <h4 className="wedding-display text-xl wedding-burgundy-text font-semibold mb-1 uppercase">
          {owner}
        </h4>
        <p className="text-sm text-muted-foreground mb-6 font-medium font-display">{bank}</p>
        
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between bg-wedding-warm/50 px-4 py-3 rounded-lg border border-wedding-gold/5 group/copy transition-colors hover:border-wedding-gold/20">
            <span className="text-sm font-medium tracking-wider text-wedding-burgundy/80">
              {accountNumber}
            </span>
            <button 
              onClick={copyToClipboard}
              className="p-1.5 hover:bg-wedding-gold/10 rounded-full transition-colors text-wedding-gold"
              title={language === 'vi' ? 'Sao chép số tài khoản' : 'Copy account number'}
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const GiftSection = () => {
  const { t } = useLanguage();
  return (
    <section id="gift" className="py-24 md:py-32 bg-wedding-cream/30 relative">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="wedding-script text-4xl md:text-5xl wedding-gold-text mb-4">
              {t("gift.title")}
            </h2>
            <p className="wedding-body text-muted-foreground italic max-w-lg mx-auto leading-relaxed">
              {t("gift.description")}
            </p>
            <div className="w-24 h-px bg-wedding-gold/30 mx-auto mt-8" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <ScrollReveal delay={0.1}>
            <BankingCard 
              owner="HOÀNG TRUNG QUÂN"
              bank="Ngân hàng MB Bank"
              accountNumber="123456789"
              qrCode="https://img.vietqr.io/image/mbbank-123456789-compact2.jpg?amount=0&addInfo=Chuc%20mung%20hanh%20phuc"
              type="groom"
            />
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <BankingCard 
              owner="NGUYỄN THỊ YẾN NHI"
              bank="Ngân hàng Vietcombank"
              accountNumber="987654321"
              qrCode="https://img.vietqr.io/image/vcb-987654321-compact2.jpg?amount=0&addInfo=Chuc%20mung%20hanh%20phuc"
              type="bride"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;

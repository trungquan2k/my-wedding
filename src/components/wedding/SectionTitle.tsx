import { Flower2, Heart } from "lucide-react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle = ({ title, subtitle, className = "" }: SectionTitleProps) => {
  return (
    <div className={`flex flex-col items-center text-center mb-12 md:mb-20 ${className}`}>
      <Flower2 className="w-8 h-8 md:w-10 md:h-10 text-wedding-gold/30 mb-4 animate-float" />
      <h2 className="wedding-script text-4xl md:text-6xl text-wedding-gold mb-4 tracking-wide drop-shadow-sm">
        {title}
      </h2>
      <div className="flex items-center gap-4 w-40 md:w-48">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-wedding-gold/30" />
        <Heart className="w-3 h-3 text-wedding-gold/40 fill-wedding-gold/5" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-wedding-gold/30" />
      </div>
      {subtitle && (
        <p className="text-muted-foreground wedding-body text-base md:text-xl mt-6 max-w-2xl italic leading-relaxed opacity-80">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

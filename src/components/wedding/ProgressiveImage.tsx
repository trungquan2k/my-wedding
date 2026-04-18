import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ProgressiveImageProps {
  src: string;
  placeholder?: string;
  className?: string;
  alt?: string;
}

const ProgressiveImage = ({
  src,
  placeholder = "https://placehold.co/20x20?text=...",
  className,
  alt = ""
}: ProgressiveImageProps) => {
  const [imgSrc, setImgSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <img
        src={imgSrc}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-all duration-1000 ease-in-out",
          !isLoaded ? "scale-110 blur-xl grayscale" : "scale-100 blur-0 grayscale-0"
        )}
        loading="lazy"
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-wedding-gold/5 animate-pulse">
          <div className="w-8 h-8 border-2 border-wedding-gold/20 border-t-wedding-gold/60 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default ProgressiveImage;

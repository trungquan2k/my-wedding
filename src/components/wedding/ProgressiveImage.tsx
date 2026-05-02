import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Global cache to track images that have already been loaded
const LOADED_IMAGES = new Set<string>();

interface ProgressiveImageProps {
  src: string;
  placeholder?: string;
  className?: string;
  alt?: string;
  imgClassName?: string;
  objectFit?: "cover" | "contain";
  highPriority?: boolean;
}

const ProgressiveImage = ({
  src,
  placeholder,
  className,
  alt = "",
  imgClassName = "",
  objectFit = "cover",
  highPriority = false
}: ProgressiveImageProps) => {
  const isAlreadyLoaded = LOADED_IMAGES.has(src);
  
  // Generate optimized placeholder for iili.io images if not provided
  const defaultPlaceholder = src.includes("iili.io") 
    ? src.replace(/\.(jpg|jpeg|png)$/, ".md.$1") 
    : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="; // Transparent pixel
    
  const [imgSrc, setImgSrc] = useState(isAlreadyLoaded || highPriority ? src : (placeholder || defaultPlaceholder));
  const [isLoaded, setIsLoaded] = useState(isAlreadyLoaded || highPriority);

  useEffect(() => {
    if (LOADED_IMAGES.has(src) || highPriority) {
      setIsLoaded(true);
      setImgSrc(src);
      return;
    }

    const img = new Image();
    img.src = src;
    img.onload = () => {
      LOADED_IMAGES.add(src);
      setImgSrc(src);
      setIsLoaded(true);
    };
  }, [src, highPriority]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <img
        src={imgSrc}
        alt={alt}
        className={cn(
          "w-full h-full transition-all duration-700 ease-in-out",
          objectFit === "cover" ? "object-cover" : "object-contain",
          imgClassName,
          !isLoaded && !highPriority ? "blur-sm scale-105" : "blur-0 scale-100"
        )}
        loading={highPriority ? "eager" : "lazy"}
      />
      {!isLoaded && !src.includes("iili.io") && !highPriority && (
        <div className="absolute inset-0 flex items-center justify-center bg-wedding-gold/5 animate-pulse">
          <div className="w-8 h-8 border-2 border-wedding-gold/20 border-t-wedding-gold/60 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default ProgressiveImage;

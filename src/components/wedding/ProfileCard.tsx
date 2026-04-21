import { Clock, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import ProgressiveImage from "./ProgressiveImage";

interface ProfileCardProps {
  image: string;
  sideLabel: string;
  name: string;
  title: string;
  relationship: string;
  parents: {
    father: string;
    mother: string;
  };
  address: string;
  addressDetail: string;
  ceremonyTitle: string;
  ceremonyTypeLabel: string;
  ceremonyTime: string;
  ceremonyDate: string;
  lunarDate: string;
  receptionTypeLabel: string;
  receptionTime: string;
  receptionAddress: string;
  mapUrl: string;
  viewMapLabel: string;
  scrollDirection: "left" | "right";
  imgPosition?: string;
  badgePosition?: "left" | "right";
  imgScale?: string;
}

const ProfileCard = ({
  image,
  sideLabel,
  name,
  title,
  relationship,
  parents,
  address,
  addressDetail,
  ceremonyTitle,
  ceremonyTypeLabel,
  ceremonyTime,
  ceremonyDate,
  lunarDate,
  receptionTypeLabel,
  receptionTime,
  receptionAddress,
  mapUrl,
  viewMapLabel,
  scrollDirection,
  imgPosition = "object-center",
  badgePosition = "right",
  imgScale = "scale-100",
}: ProfileCardProps) => {
  return (
    <div className="flex flex-col items-center group">
      <ScrollReveal direction={scrollDirection} duration={1.2}>
        <div className="relative mb-12 md:mb-16">
          <div className="absolute -inset-6 border border-wedding-gold/20 rounded-full scale-105 group-hover:scale-110 transition-transform duration-1000" />
          <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-full shadow-2xl z-10 border-8 border-white">
            <ProgressiveImage
              src={image}
              alt={name}
              className="w-full h-full"
              imgClassName={`${imgPosition} ${imgScale} group-hover:scale-[1.15]`}
            />
          </div>
          <div className={`absolute top-10 ${badgePosition === "right" ? "right-0 translate-x-4 -rotate-12" : "left-0 -translate-x-4 rotate-12"} z-20 bg-wedding-gold text-white px-4 py-2 rounded-full shadow-lg`}>
            <span className="wedding-body text-xs font-semibold tracking-widest uppercase">
              {sideLabel}
            </span>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3} className="text-center w-full">
        <h3 className="wedding-display text-4xl md:text-6xl wedding-burgundy-text mb-4 font-bold tracking-tight">
          {name}
        </h3>
        <p className="wedding-body text-muted-foreground text-xl md:text-2xl mb-8 font-light italic">
          {title}
        </p>

        {/* Family Info */}
        <div className="mb-12 space-y-3 text-foreground wedding-body text-lg md:text-xl border-t border-b border-wedding-gold/10 py-6">
          <p>{relationship}</p>
          <p>
            <span className="font-semibold text-wedding-burgundy md:text-2xl">
              {parents.father}
            </span>
            <br />
            <span className="font-semibold text-wedding-burgundy md:text-2xl">
              {parents.mother}
            </span>
          </p>
          <p className="text-lg text-muted-foreground mt-4 not-italic">
            <MapPin className="inline-block w-4 h-4 mr-2 text-wedding-gold" />
            {address}
            <br />
            <span className="text-sm text-muted-foreground mt-2 not-italic">
              {addressDetail}
            </span>
          </p>
        </div>

        {/* Details Card */}
        <div className="bg-white p-6 md:p-14 rounded-3xl shadow-2xl border border-wedding-gold/20 hover:border-wedding-gold/50 transition-all duration-700 max-w-lg mx-auto relative overflow-hidden group/card text-left">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-wedding-gold via-wedding-gold-light to-wedding-gold" />
          <p className="wedding-script text-4xl md:text-5xl wedding-gold-text mb-10 text-center">
            {ceremonyTitle}
          </p>

          <div className="space-y-10 text-foreground wedding-body">
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-2">
                <span className="w-10 h-px bg-wedding-gold" />
                <p className="font-bold wedding-display text-wedding-burgundy uppercase tracking-[0.2em] text-sm">
                  {ceremonyTypeLabel}
                </p>
              </div>
              <div className="flex items-center gap-5 ml-2">
                <div className="w-12 h-12 rounded-full bg-wedding-gold/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-wedding-gold" />
                </div>
                <p className="text-2xl md:text-3xl font-bold">
                  {ceremonyTime}
                </p>
              </div>
              <p className="text-lg md:text-xl ml-16 text-wedding-burgundy/80 font-display">
                {ceremonyDate}
              </p>
              <p className="text-md md:text-lg text-muted-foreground ml-16 italic">
                {lunarDate}
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-dashed border-wedding-gold/20">
              <div className="flex items-center gap-4 mb-2">
                <span className="w-10 h-px bg-wedding-gold" />
                <p className="font-bold wedding-display text-wedding-burgundy uppercase tracking-[0.2em] text-sm">
                  {receptionTypeLabel}
                </p>
              </div>
              <div className="flex items-center gap-5 ml-2">
                <div className="w-12 h-12 rounded-full bg-wedding-gold/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-wedding-gold" />
                </div>
                <p className="text-2xl md:text-3xl font-medium">
                  {receptionTime}
                </p>
              </div>
              <div className="flex items-start gap-5 ml-2">
                <div className="w-12 h-12 rounded-full bg-wedding-gold/10 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-6 h-6 text-wedding-gold" />
                </div>
                <p className="text-base md:text-lg leading-relaxed flex-1">
                  {receptionAddress}
                </p>
              </div>
            </div>
          </div>

          <a
            href={mapUrl}
            target={typeof window !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="mt-12 flex items-center justify-center gap-3 bg-wedding-gold/10 hover:bg-wedding-gold text-wedding-gold hover:text-white py-4 rounded-xl transition-all duration-500 text-xs md:text-sm uppercase tracking-[0.3em] font-bold"
          >
            <MapPin className="w-4 h-4" /> {viewMapLabel}
          </a>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default ProfileCard;

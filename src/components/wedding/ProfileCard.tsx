import { Quote } from "lucide-react";
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
  scrollDirection: "left" | "right";
  imgPosition?: string;
  imgScale?: string;
  quote?: string;
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
  scrollDirection,
  imgPosition = "object-center",
  imgScale = "scale-100",
  quote,
}: ProfileCardProps) => {
  return (
    <ScrollReveal direction={scrollDirection} duration={1.2}>
      <div className="p-8 md:p-12 max-w-2xl mx-auto group">
        {/* Quote at top */}
        {quote && (
          <div className="text-center mb-10 px-4">
            <p className="wedding-script text-2xl md:text-3xl text-gray-700 leading-relaxed italic">
              "{quote}"
            </p>
          </div>
        )}

        <div className="grid grid-cols-[1.3fr_1fr] md:grid-cols-[1.5fr_1.5fr] gap-6 md:gap-10 items-stretch">
          {/* Portrait Image */}
          <div className="relative overflow-hidden rounded-sm shadow-lg h-full min-h-[250px]">
            <ProgressiveImage
              src={image}
              alt={name}
              className="w-full h-full"
              imgClassName={`${imgPosition} ${imgScale || 'scale-110'} transition-transform duration-1000 group-hover:scale-125 w-full h-full object-cover`}
              highPriority
            />
            <div className="absolute inset-0 border-[6px] md:border-[12px] border-white/20 pointer-events-none" />
          </div>

          {/* Info Side */}
          <div className="flex flex-col justify-center py-2 md:py-4">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-2 md:space-y-3">
                <span className="text-[8px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] text-gray-500 uppercase block">
                  {sideLabel}
                </span>
                <div className="space-y-1 md:space-y-2">
                  <p className="text-[10px] sm:text-xs md:text-base font-bold tracking-wider text-gray-800 uppercase leading-tight">
                    {parents.father}
                  </p>
                  <p className="text-[10px] sm:text-xs md:text-base font-bold tracking-wider text-gray-800 uppercase leading-tight">
                    {parents.mother}
                  </p>
                </div>
              </div>

              <div className="space-y-1 md:space-y-2">
                <p className="text-[9px] sm:text-xs md:text-sm text-gray-600 font-medium leading-tight">
                  {address}
                </p>
              </div>

              <div className="space-y-2 md:space-y-3">
                <span className="wedding-body text-gray-500 text-sm sm:text-lg md:text-xl italic">
                  {title}
                </span>
                <h3 className="wedding-script pt-2 md:pt-4 text-3xl sm:text-4xl md:text-5xl text-wedding-burgundy leading-none">
                  {name}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ProfileCard;

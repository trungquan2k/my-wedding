
import { useLanguage } from "@/context/LanguageContext";
import { Heart } from "lucide-react";
import ProfileCard from "./ProfileCard";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";

interface ProfileSectionProps {
  guestName?: string | null;
}

const ProfileSection = ({ guestName }: ProfileSectionProps) => {
  const { t } = useLanguage();
  const isInvited = true
  return (
    <section
      id="details"
      className="py-24 md:py-36 pb-0 bg-wedding-warm/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <SectionTitle title={t("profile.saveTheDate")} />
        </ScrollReveal>

        {isInvited ? (
          <div className="grid lg:grid-cols-2 gap-4 md:gap-4">
            <ProfileCard
              image={"https://iili.io/BrOpjxR.jpg"}
              quote={t("profile.groomQuote")}
              sideLabel={t("profile.groomSide")}
              name={"Trung Quân"}
              title={t("profile.groomTitle")}
              relationship={t("profile.sonOf")}
              parents={{
                father: `${t("profile.fatherTitle")}: ${t("profile.groomFather")}`,
                mother: `${t("profile.motherTitle")}: ${t("profile.groomMother")}`,
              }}
              address={t("profile.groomAddress")}
              addressDetail={t("profile.groomAddressDetail")}
              scrollDirection="right"
              imgPosition="object-[center_10%]"
            />

            <ProfileCard
              image={"https://iili.io/BLF5rKb.jpg"}
              quote={t("profile.brideQuote")}
              sideLabel={t("profile.brideSide")}
              name={t("profile.brideName.v2")}
              title={t("profile.brideTitle")}
              relationship={t("profile.daughterOf")}
              parents={{
                father: `${t("profile.fatherTitleBride")}: ${t("profile.brideFather")}`,
                mother: `${t("profile.motherTitleBride")}: ${t("profile.brideMother")}`,
              }}
              address={t("profile.brideAddress")}
              addressDetail={t("profile.brideAddressDetail")}
              scrollDirection="left"
              imgPosition="object-[center_25%]"
              imgScale="scale-[1.5]"
            />
          </div >
        ) : (
          <ScrollReveal>
            <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-md p-6 md:p-12 rounded-3xl border border-wedding-gold/30 shadow-xl text-center">
              <Heart className="w-16 h-16 text-wedding-gold mx-auto mb-6 animate-pulse fill-wedding-gold/20" />
              <h3 className="wedding-script text-4xl wedding-gold-text mb-6">
                {t("profile.thankYou")}
              </h3>
              <p className="wedding-body text-base md:text-lg text-foreground/80 leading-relaxed italic">
                {t("profile.thankYouDesc")}
              </p>
            </div>
          </ScrollReveal>
        )}
      </div >
    </section >
  );
};

export default ProfileSection;

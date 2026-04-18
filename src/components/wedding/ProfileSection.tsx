import brideImg from "@/assets/KENN0470.jpg";
import groomImg from "@/assets/KENN1083.jpg";
import { useLanguage } from "@/context/LanguageContext";
import { GUEST_LIST } from "@/data/guests";
import { Heart } from "lucide-react";
import ProfileCard from "./ProfileCard";
import ScrollReveal from "./ScrollReveal";

interface ProfileSectionProps {
  guestName?: string | null;
}

const ProfileSection = ({ guestName }: ProfileSectionProps) => {
  const { t } = useLanguage();
  const isInvited = true

  return (
    <section
      id="details"
      className="py-24 md:py-36 bg-wedding-warm/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20 md:mb-28">
            <span className="wedding-body text-wedding-gold tracking-[0.4em] text-sm md:text-base uppercase mb-4 block">
              {t("profile.saveTheDate")}
            </span>
            <h2 className="wedding-script text-5xl md:text-7xl wedding-gold-text mb-6">
              {isInvited
                ? `${t("profile.welcome")} ${guestName}`
                : t("profile.inviteTitle")}
            </h2>
            <div className="w-32 h-px bg-wedding-gold/40 mx-auto mb-8" />
            <p className="wedding-body text-foreground text-lg md:text-3xl max-w-2xl mx-auto leading-relaxed italic opacity-80">
              {isInvited
                ? t("profile.inviteDescInvited").replace(
                  "{name}",
                  guestName || "",
                )
                : t("profile.inviteDescGeneral")}
            </p>
          </div>
        </ScrollReveal>

        {isInvited ? (
          <div className="grid lg:grid-cols-2 gap-20 md:gap-32">
            <ProfileCard
              image={groomImg}
              sideLabel={t("profile.groomSide")}
              name={t("profile.groomName")}
              title={t("profile.groomTitle")}
              relationship={t("profile.sonOf")}
              parents={{
                father: `${t("profile.fatherTitle")}: ${t("profile.groomFather")}`,
                mother: `${t("profile.motherTitle")}: ${t("profile.groomMother")}`,
              }}
              address={t("profile.groomAddress")}
              addressDetail={t("profile.groomAddressDetail")}
              ceremonyTitle={t("profile.weddingCeremony")}
              ceremonyTypeLabel={t("profile.ceremonyAtHome")}
              ceremonyTime={`07h00 - ${t("profile.tuesday")}`}
              ceremonyDate="26 . 05 . 2026"
              lunarDate={t("profile.lunarDateGroom")}
              receptionTypeLabel={t("profile.receptionAtHome")}
              receptionTime={`10h30 ${t("profile.morning")}`}
              receptionAddress={t("profile.groomReceptionAddress")}
              mapUrl="https://maps.app.goo.gl/rQW4JUwTbxWbMa7v9"
              viewMapLabel={t("profile.viewMap")}
              scrollDirection="right"
              imgPosition="object-[center_10%]"
              badgePosition="right"
            />

            <ProfileCard
              image={brideImg}
              sideLabel={t("profile.brideSide")}
              name={t("profile.brideName")}
              title={t("profile.brideTitle")}
              relationship={t("profile.daughterOf")}
              parents={{
                father: `${t("profile.fatherTitleBride")}: ${t("profile.brideFather")}`,
                mother: `${t("profile.motherTitleBride")}: ${t("profile.brideMother")}`,
              }}
              address={t("profile.brideAddress")}
              addressDetail={t("profile.brideAddressDetail")}
              ceremonyTitle={t("profile.vuQuyCeremony")}
              ceremonyTypeLabel={t("profile.ceremonyAtHome")}
              ceremonyTime={`08h00 - ${t("profile.sunday")}`}
              ceremonyDate="24 . 05 . 2026"
              lunarDate={t("profile.lunarDateBride")}
              receptionTypeLabel={t("profile.receptionAtHome")}
              receptionTime={`11h00 ${t("profile.morning")}`}
              receptionAddress={t("profile.brideReceptionAddress")}
              mapUrl="https://maps.app.goo.gl/546cZurhSAooApAT8"
              viewMapLabel={t("profile.viewMap")}
              scrollDirection="left"
              imgPosition="object-[center_30%]"
              badgePosition="left"
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

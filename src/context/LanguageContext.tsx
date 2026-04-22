import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "vi" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  vi: {
    // Brand
    "brand.groom": "Trung Quân",
    "brand.bride": "Yến Nhi",

    // NavBar
    "nav.story": "Câu chuyện",
    "nav.gallery": "Album",
    "nav.details": "Lễ cưới",
    "nav.gift": "Mừng cưới",
    "nav.wishes": "Lời chúc",
    "nav.menu": "Mục lục",

    // HeroSection
    "hero.gettingMarried": "Lễ cưới của chúng tôi",
    "hero.explore": "Khám phá",
    "hero.saveTheDate": "Save Our Date",

    // ProfileSection
    "profile.saveTheDate": "Save The Date",
    "profile.welcome": "Mến chào",
    "profile.inviteTitle": "Lời Mời Trân Trọng",
    "profile.inviteDescInvited":
      "Trân trọng kính mời (anh chị em) đến chung vui cùng gia đình chúng tôi",
    "profile.inviteDescGeneral":
      "Cảm ơn bạn đã ghé thăm và gửi những lời chúc tốt đẹp nhất đến với chúng mình!",
    "profile.groom": "Chú rể",
    "profile.bride": "Cô dâu",
    "profile.groomSide": "Groom Side",
    "profile.brideSide": "Bride Side",
    "profile.sonOf": "Quý tử của",
    "profile.daughterOf": "Ái nữ của",
    "profile.weddingCeremony": "Lễ Thành Hôn",
    "profile.vuQuyCeremony": "Lễ Vu Quy",
    "profile.ceremonyAtHome": "Hôn lễ cử hành tại Tư gia",
    "profile.receptionAtHome": "Tiệc mừng tại Tư gia",
    "profile.tuesday": "Thứ Ba",
    "profile.sunday": "Chủ Nhật",
    "profile.morning": "Sáng",
    "profile.lunarDateGroom": "(10/04 Âm lịch năm Bính Ngọ)",
    "profile.lunarDateBride": "(08/04 Âm lịch năm Bính Ngọ)",
    "profile.viewMap": "Xem bản đồ trực tuyến",
    "profile.thankYou": "Trân trọng cảm ơn",
    "profile.thankYouDesc":
      "Cảm ơn bạn đã ghé thăm và gửi những lời chúc tốt đẹp nhất dành cho ngày trọng đại của chúng mình. Sự quan tâm của bạn là nguồn động viên vô cùng to lớn đối với gia đình.",
    "profile.groomName": "Hoàng Trung Quân",
    "profile.groomTitle": "(Quý Nam)",
    "profile.groomFather": "Hoàng Văn Đoàn",
    "profile.groomMother": "Lê Thị Quy",
    "profile.groomAddress": "Thôn Phú Kinh, xã Bắc Trạch, Tỉnh Quảng Bình",
    "profile.groomAddressDetail": "(Thôn Phú Kinh, xã Liên Trạch, huyện Bố Trạch, tỉnh Quảng Bình cũ)",
    "profile.groomReceptionAddress": "Thôn Phú Kinh, xã Bắc Trạch, tỉnh Quảng Bình",
    "profile.brideName": "Nguyễn Thị Yến Nhi",
    "profile.brideTitle": "(Quý Nữ)",
    "profile.brideFather": "Nguyễn Đức Thạnh",
    "profile.brideMother": "Lê Thị Tuyết My",
    "profile.brideAddress": "Tổ 8, thôn Mỹ Chánh, xã Nam Hải Lăng, tỉnh Quảng Trị",
    "profile.brideAddressDetail": "(Thôn Mỹ Chánh, xã Hải Chánh, huyện Hải Lăng, tỉnh Quảng Trị cũ)",
    "profile.brideReceptionAddress": "Tổ 8, thôn Mỹ Chánh, xã Nam Hải Lăng, tỉnh Quảng Trị",
    "profile.fatherTitle": "Ông",
    "profile.motherTitle": "Bà",
    "profile.fatherTitleBride": "Ông",
    "profile.motherTitleBride": "Bà",

    // LoveStorySection
    "story.title": "Chuyện tình yêu của chúng mình",
    "story.subtitle1": "Cảm ơn em đã đồng hành cùng anh trong suốt 6 năm. Và kết thúc năm thứ 7 với một cái kết viên mãn.",
    "story.subtitle": "(Our Love Story)",
    "story.event1.title": "Lần đầu gặp nhau",
    "story.event1.text": "Mạnh dạn thấy em chơi ma sói cùng bạn bè. Tôi can đảm ra xem bắt đầu gửi kết bạn là nhắn ngõ lời trêu ghẹo nhưng không ai ngờ lại là định mệnh của nhau",
    "story.event1.date": "10 / 2019",
    "story.event2.title": "Sinh nhật cùng nhau",
    "story.event2.text": "Em cùng tôi đón sinh nhật",
    "story.event2.date": "11 / 2021",
    "story.event3.title": "Lời tỏ tình",
    "story.event3.text":
      "Lời tỏ tình đầy ngại ngùng khi còn đang đi học tại kí túc xá",
    "story.event3.date": "10/ 2022",
    "story.event4.title": "Lễ dặm ngõ",
    "story.event4.text":
      "Lời dặm ngõ đầu tiền của 2 gia đình. Chúng tôi chính thức chuẩn bị cho lễ cưới",
    "story.event4.date": "07/02/2026",
    "story.event5.title": "Ngày cưới",
    "story.event5.text":
      "Hành trình yêu của chúng mình khép lại bằng một đám cưới trong mơ. Cảm ơn vì đã luôn ở bên nhau trong suốt gần 7 năm vừa qua",
    "story.event5.date": "26 / 05 / 2026",
    "story.event6.title": "Tổ ấm mới",
    "story.event6.text":
      "Một tương lai mới đang chờ đợi phía trước, nơi chúng mình sẽ cùng nhau xây dựng tổ ấm hạnh phúc.",
    "story.event6.date": "Mãi về sau",

    // GallerySection
    "gallery.title": "Album Hình Cưới",
    "gallery.subtitle": "Our Gallery",
    "gallery.guide": "Dùng chuột hoặc phím mũi tên để lật trang",
    "album.description":
      "Tình yêu không phải là tìm thấy một người hoàn hảo, mà là nhìn thấy những điều hoàn hảo từ một người không hoàn hảo.",

    // ParallaxBanner
    "parallax.text": "Hạnh phúc là khi ta tìm thấy nhau",
    "parallax.subtext": "Forever begins with us",

    // CountdownSection
    "countdown.title": "Đang đếm ngược đến ngày trọng đại",
    "countdown.days": "Ngày",
    "countdown.hours": "Giờ",
    "countdown.minutes": "Phút",
    "countdown.seconds": "Giây",

    // GiftSection
    "gift.title": "Hộp Mừng Cưới",
    "gift.subtitle": "Wedding Gift",
    "gift.description":
      "Sự hiện diện của bạn là món quà lớn nhất đối với chúng tôi. Tuy nhiên, nếu bạn muốn gửi một món quà chúc mừng, chúng tôi rất trân trọng.",
    "gift.groomSide": "Mừng cưới Chú rể",
    "gift.brideSide": "Mừng cưới Cô dâu",
    "gift.bank": "Ngân hàng",
    "gift.accountNumber": "Số tài khoản",
    "gift.accountName": "Chủ tài khoản",
    "gift.copied": "Đã sao chép!",

    // WishesSection
    "wishes.title": "Sổ Lưu Bút",
    "wishes.subtitle": "Guestbook",
    "wishes.description": "Hãy để lại lời chúc tốt đẹp nhất cho chúng tôi nhé!",
    "wishes.form.name": "Tên của bạn",
    "wishes.form.message": "Lời chúc của bạn",
    "wishes.form.submit": "Gửi lời chúc",
    "wishes.form.sending": "Đang gửi...",
    "wishes.form.success": "Cảm ơn bạn đã gửi lời chúc!",
    "wishes.form.error": "Có lỗi xảy ra, vui lòng thử lại sau.",

    // CurtainIntro
    "curtain.welcome": "Chào mừng",
    "curtain.invite": "Kính mời",
    "curtain.open": "Mở Thiệp",
    "curtain.placeholder": "Nhập tên của bạn...",
    "curtain.warning": "Vui lòng nhập tên để mở thiệp nhé ❤️",

    // Footer
    "footer.thankyou": "Cảm ơn đã tham dự đám cưới của chúng tôi!",
    "footer.madeWith": "Made with love by Quan & Nga",
  },
  en: {
    // Brand
    "brand.groom": "Trung Quân",
    "brand.bride": "Yến Nhi",

    // NavBar
    "nav.story": "Our Story",
    "nav.gallery": "Album",
    "nav.details": "Ceremony",
    "nav.gift": "Wedding Gift",
    "nav.wishes": "Wishes",
    "nav.menu": "Menu",

    // HeroSection
    "hero.gettingMarried": "We're Getting Married",
    "hero.explore": "Explore",
    "hero.saveTheDate": "Save Our Date",

    // ProfileSection
    "profile.saveTheDate": "Save The Date",
    "profile.welcome": "Welcome",
    "profile.inviteTitle": "Formal Invitation",
    "profile.inviteDescInvited":
      "We cordially invite (you) to join with us in celebrating our wedding ceremony",
    "profile.inviteDescGeneral":
      "Thank you for visiting and sending your best wishes to us!",
    "profile.groom": "The Groom",
    "profile.bride": "The Bride",
    "profile.groomSide": "Groom's Side",
    "profile.brideSide": "Bride's Side",
    "profile.sonOf": "Son of",
    "profile.daughterOf": "Daughter of",
    "profile.weddingCeremony": "Wedding Ceremony",
    "profile.vuQuyCeremony": "Bride's Farewell",
    "profile.ceremonyAtHome": "Ceremony at private residence",
    "profile.receptionAtHome": "Reception at private residence",
    "profile.tuesday": "Tuesday",
    "profile.sunday": "Sunday",
    "profile.morning": "AM",
    "profile.lunarDateGroom": "(April 10th Lunar Calendar)",
    "profile.lunarDateBride": "(April 8th Lunar Calendar)",
    "profile.viewMap": "View Online Map",
    "profile.thankYou": "Sincere Thanks",
    "profile.thankYouDesc":
      "Thank you for visiting and sending your best wishes for our big day. Your care is a huge source of encouragement for our family.",
    "profile.groomName": "Hoang Trung Quan",
    "profile.groomTitle": "(The Groom)",
    "profile.groomFather": "Hoang Van Doan",
    "profile.groomMother": "Le Thi Quy",
    "profile.groomAddress": "Phu Kinh Village, Bac Trach Commune, Quang Binh Province",
    "profile.groomAddressDetail": "(Phu Kinh Village, Lien Trach Commune, Bo Trach District, former Quang Binh Province)",
    "profile.groomReceptionAddress": "Phu Kinh Village, Bac Trach Commune, Bo Trach District, Quang Binh Province",
    "profile.brideName": "Nguyen Thi Yen Nhi",
    "profile.brideTitle": "(The Bride)",
    "profile.brideFather": "Nguyen Duc Thanh",
    "profile.brideMother": "Le Thi Tuyet My",
    "profile.brideAddress": "Group 8, My Chanh Village, Nam Hai Lang Commune, Quang Tri Province",
    "profile.brideAddressDetail": "(My Chanh Village, Hai Chanh Commune, Hai Lang District, former Quang Tri Province)",
    "profile.brideReceptionAddress": "Group 8, My Chanh Village, Nam Hai Lang Commune, Quang Tri Province",
    "profile.fatherTitle": "Mr.",
    "profile.motherTitle": "Mrs.",
    "profile.fatherTitleBride": "Mr.",
    "profile.motherTitleBride": "Mrs.",

    // LoveStorySection
    "story.title": "Our Love Story",
    "story.subtitle1": "Thank you for being with me for 6 years. And ending the 7th year with a happy ending.",
    "story.subtitle": "Our Love Story",
    "story.event1.title": "Our First Love",
    "story.event1.text": "Boldly saw her playing ma sôi with friends. I dared to come see, started by sending a friend request and teasing her, but never expected it to be our destiny.",
    "story.event1.date": "Oct 2019",
    "story.event2.title": "Birthday Together",
    "story.event2.text": "Celebrating birthdays together",
    "story.event2.date": "Nov 2020",
    "story.event3.title": "The Proposal",
    "story.event3.text":
      "A shy proposal while still in school at the dormitory",
    "story.event3.date": "Feb 2020",
    "story.event4.title": "Engagement Day",
    "story.event4.text":
      "The first engagement ceremony of the two families. We officially prepare for the wedding.",
    "story.event4.date": "Feb 2026",
    "story.event5.title": "Wedding Day",
    "story.event5.text":
      "Our love journey concludes with a dream wedding. Thank you for always being together.",
    "story.event5.date": "May 26, 2026",
    "story.event6.title": "New Home",
    "story.event6.text":
      "A new future awaits us, where we will build a happy home together.",
    "story.event6.date": "Forever After",

    // GallerySection
    "gallery.title": "Wedding Album",
    "gallery.subtitle": "Our Gallery",
    "gallery.guide": "Use mouse or arrow keys to flip pages",
    "album.description":
      "Love is not about finding the perfect person, but about seeing the perfection in an imperfect person.",

    // ParallaxBanner
    "parallax.text": "Happiness is when we find each other",
    "parallax.subtext": "Forever begins with us",

    // CountdownSection
    "countdown.title": "Counting down to our big day",
    "countdown.days": "Days",
    "countdown.hours": "Hours",
    "countdown.minutes": "Min",
    "countdown.seconds": "Sec",

    // GiftSection
    "gift.title": "Wedding Gift",
    "gift.subtitle": "Wedding Gift",
    "gift.description":
      "Your presence is our greatest gift. However, if you wish to send a congratulatory gift, we would be very grateful.",
    "gift.groomSide": "Groom's Side",
    "gift.brideSide": "Bride's Side",
    "gift.bank": "Bank",
    "gift.accountNumber": "Account No.",
    "gift.accountName": "Name",
    "gift.copied": "Copied!",

    // WishesSection
    "wishes.title": "Guestbook",
    "wishes.subtitle": "Guestbook",
    "wishes.description": "Please leave your best wishes for us!",
    "wishes.form.name": "Your Name",
    "wishes.form.message": "Your Message",
    "wishes.form.submit": "Send Wishes",
    "wishes.form.sending": "Sending...",
    "wishes.form.success": "Thank you for your wishes!",
    "wishes.form.error": "Something went wrong, please try again later.",

    // CurtainIntro
    "curtain.welcome": "Welcome",
    "curtain.invite": "Invitation",
    "curtain.open": "Open Invitation",
    "curtain.placeholder": "Enter your name...",
    "curtain.warning": "Please enter your name to open the invitation ❤️",

    // Footer
    "footer.thankyou": "Thank you for attending our wedding!",
    "footer.madeWith": "Made with love by Quan & Nga",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "vi";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

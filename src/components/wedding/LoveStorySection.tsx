import ScrollReveal from "./ScrollReveal";
import coupleImg1 from "@/assets/wedding-couple-3.jpg";
import coupleImg2 from "@/assets/wedding-couple-2.jpg";

const stories = [
  {
    image: coupleImg1,
    title: "Lần đầu gặp gỡ",
    date: "Tháng 3, 2022",
    text: "Một buổi chiều tình cờ, hai tâm hồn đồng điệu đã tìm thấy nhau giữa dòng đời bận rộn. Từ ánh mắt đầu tiên, chúng mình biết đây là khởi đầu của một câu chuyện đẹp.",
    reversed: false,
  },
  {
    image: coupleImg2,
    title: "Lời cầu hôn",
    date: "Tháng 12, 2025",
    text: "Dưới bầu trời đầy sao, anh đã quỳ gối và nói những lời chân thành nhất. Và em đã gật đầu, mở ra chương mới tuyệt vời nhất của cuộc đời hai đứa.",
    reversed: true,
  },
];

const LoveStorySection = () => (
  <section id="story" className="py-20 md:py-32 bg-background">
    <div className="max-w-5xl mx-auto px-4">
      <ScrollReveal>
        <p className="wedding-script text-3xl md:text-4xl wedding-gold-text text-center mb-2">
          Chuyện tình yêu
        </p>
        <p className="text-center text-muted-foreground wedding-body text-lg mb-16">
          Our Love Story
        </p>
      </ScrollReveal>

      <div className="space-y-20 md:space-y-28">
        {stories.map((s, i) => (
          <ScrollReveal key={i} delay={0.1}>
            <div
              className={`flex flex-col ${
                s.reversed ? "md:flex-row-reverse" : "md:flex-row"
              } gap-8 md:gap-12 items-center`}
            >
              {/* Photo */}
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-sm shadow-xl group">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <span className="text-sm tracking-widest uppercase text-muted-foreground wedding-body">
                  {s.date}
                </span>
                <h3 className="wedding-display text-2xl md:text-3xl font-semibold wedding-burgundy-text mt-2 mb-4">
                  {s.title}
                </h3>
                <p className="wedding-body text-lg text-foreground leading-relaxed">
                  {s.text}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default LoveStorySection;

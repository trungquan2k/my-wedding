import { useState } from "react";
import { Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Wish {
  name: string;
  message: string;
  time: string;
}

const SAMPLE_WISHES: Wish[] = [
  { name: "Nguyễn Thị Hoa", message: "Chúc hai bạn trăm năm hạnh phúc! 💕", time: "Vừa xong" },
  { name: "Trần Văn Minh", message: "Chúc mừng hạnh phúc hai bạn nhé, mãi bên nhau!", time: "5 phút trước" },
];

const WishesSection = () => {
  const [wishes, setWishes] = useState<Wish[]>(SAMPLE_WISHES);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setWishes((prev) => [{ name: name.trim(), message: message.trim(), time: "Vừa xong" }, ...prev]);
    setName("");
    setMessage("");
  };

  return (
    <section id="wishes" className="py-20 md:py-28 bg-background">
      <div className="max-w-2xl mx-auto text-center px-4">
        <ScrollReveal>
          <p className="wedding-script text-3xl md:text-4xl wedding-gold-text mb-2">
            Sổ lưu bút
          </p>
          <p className="text-muted-foreground wedding-body text-lg mb-12">
            Guestbook
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form onSubmit={handleSubmit} className="mb-12 text-left space-y-4">
            <input
              type="text"
              placeholder="Tên của bạn"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-sm bg-background wedding-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
            />
            <textarea
              placeholder="Gửi lời chúc đến cô dâu & chú rể..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 border border-border rounded-sm bg-background wedding-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground wedding-display tracking-wider hover:opacity-90 transition-opacity active:scale-[0.97] rounded-sm"
            >
              <Send className="w-4 h-4" />
              Gửi lời chúc
            </button>
          </form>
        </ScrollReveal>

        <div className="space-y-4">
          {wishes.map((w, i) => (
            <ScrollReveal key={i} delay={0.05 * i}>
              <div className="text-left p-5 bg-wedding-warm rounded-sm border border-border">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-semibold wedding-display text-foreground">{w.name}</span>
                  <span className="text-xs text-muted-foreground">{w.time}</span>
                </div>
                <p className="text-foreground wedding-body">{w.message}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishesSection;

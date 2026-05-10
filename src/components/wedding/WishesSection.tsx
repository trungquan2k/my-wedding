import { useState } from "react";
import { Send, Loader2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { supabase } from "@/lib/supabase";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { formatDistanceToNow } from "date-fns";
import { vi, enUS } from "date-fns/locale";
import FloatingHearts from "./FloatingHearts";
import { useLanguage } from "@/context/LanguageContext";

interface Wish {
  id?: number;
  name: string;
  message: string;
  created_at?: string;
}

const fetchWishes = async () => {
  const { data, error, count } = await supabase
    .from("wishes")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false });
  if (error) throw error;
  return { data: data as Wish[], count: count || 0 };
};

const BAD_WORDS = [
  "đụ", "má", "vãi", "cứt", "loz", "lồn", "buồi", "cặc", "đéo", "chó", "khốn",
  "mẹ kiếp", "đm", "vcl", "cl", "vl", "con mẹ", "thằng chó", "đồ khốn", "đĩ", "điếm"
];

const WishesSection = () => {
  const { t, language } = useLanguage();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const {
    data: wishesData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["wishes"],
    queryFn: fetchWishes,
  });

  const mutation = useMutation({
    mutationFn: async (newWish: Omit<Wish, "id" | "created_at">) => {
      const { data, error } = await supabase
        .from("wishes")
        .insert([newWish])
        .select();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishes"] });
      toast({
        title: language === 'vi' ? "Gửi lời chúc thành công!" : "Wishes sent successfully!",
        description: language === 'vi' ? "Cảm ơn bạn đã gửi lời chúc đến chúng mình." : "Thank you for sending your wishes to us.",
      });
      setName("");
      setMessage("");
    },
    onError: (error) => {
      console.error("Error sending wish:", error);
      toast({
        title: language === 'vi' ? "Có lỗi xảy ra" : "An error occurred",
        description: language === 'vi' ? "Lời chúc của bạn chưa được gửi. Vui lòng thử lại sau." : "Your wish could not be sent. Please try again later.",
        variant: "destructive",
      });
    },
  });

  const validate = (nameValue: string, messageValue: string) => {
    const trimmedName = nameValue.trim();
    const trimmedMessage = messageValue.trim();

    // 1. Mandatory fields
    if (!trimmedName || !trimmedMessage) {
      toast({
        title: language === 'vi' ? "Thông tin không đầy đủ" : "Incomplete information",
        description: language === 'vi' ? "Vui lòng nhập tên và lời chúc của bạn." : "Please enter your name and message.",
        variant: "destructive",
      });
      return false;
    }

    // 2. Word limit (100 words)
    const wordCount = trimmedMessage.split(/\s+/).filter(w => w.length > 0).length;
    if (wordCount > 100) {
      toast({
        title: language === 'vi' ? "Lời chúc quá dài" : "Message too long",
        description: language === 'vi' ? "Vui lòng giữ lời chúc dưới 100 chữ để thiệp được đẹp nhé." : "Please keep your wishes under 100 words.",
        variant: "destructive",
      });
      return false;
    }

    // 3. Bad words filter (Simple contains check)
    const hasBadWords = BAD_WORDS.some(word =>
      trimmedMessage.toLowerCase().includes(word.toLowerCase()) ||
      trimmedName.toLowerCase().includes(word.toLowerCase())
    );

    if (hasBadWords) {
      toast({
        title: language === 'vi' ? "Lời chúc không hợp lệ" : "Invalid message",
        description: language === 'vi' ? "Vui lòng sử dụng ngôn từ lịch sự, phù hợp với thuần phong mỹ tục." : "Please use polite language.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate(name, message)) return;
    mutation.mutate({ name: name.trim(), message: message.trim() });
  };

  const wishes = wishesData?.data || [];
  const totalCount = wishesData?.count || 0;
  const displayedWishes = wishes.slice(0, 5);

  const currentWordCount = message.trim().split(/\s+/).filter(w => w.length > 0).length;

  return (
    <section id="wishes" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative Hearts behind the section */}
      <div className="absolute inset-0 z-0">
        <FloatingHearts />
      </div>

      <div className="max-w-2xl mx-auto text-center px-4 relative z-10">
        <ScrollReveal>
          <p className="wedding-script text-3xl md:text-4xl wedding-gold-text mb-2">
            {t("wishes.title")}
          </p>
          <p className="text-muted-foreground wedding-body text-lg mb-12">
            {t("wishes.subtitle")}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form onSubmit={handleSubmit} className="mb-12 text-left space-y-4 bg-white/40 p-6 rounded-lg backdrop-blur-sm shadow-sm border border-wedding-gold/10">
            <input
              type="text"
              placeholder={t("wishes.form.name")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-sm bg-background/80 wedding-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
              disabled={mutation.isPending}
            />
            <div className="relative">
              <textarea
                placeholder={language === 'vi' ? "Gửi lời chúc đến cô dâu & chú rể..." : "Send your wishes to the bride & groom..."}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className={`w-full px-4 py-3 border border-border rounded-sm bg-background/80 wedding-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 resize-none ${currentWordCount > 100 ? 'border-destructive' : ''}`}
                disabled={mutation.isPending}
              />
              <span className={`absolute bottom-2 right-2 text-[10px] wedding-body ${currentWordCount > 100 ? 'text-destructive font-bold' : 'text-muted-foreground'}`}>
                {currentWordCount}/100 {language === 'vi' ? 'chữ' : 'words'}
              </span>
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground wedding-display tracking-wider hover:opacity-90 transition-opacity active:scale-[0.97] rounded-sm disabled:opacity-50"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              {mutation.isPending ? t("wishes.form.sending") : t("wishes.form.submit")}
            </button>
          </form>
        </ScrollReveal>


        <div className="space-y-4">
          {isLoading ? (
            <div className="flex justify-center py-10">
              <Loader2 className="w-8 h-8 animate-spin text-wedding-gold" />
            </div>
          ) : isError ? (
            <p className="text-muted-foreground">
              {language === 'vi' ? 'Không thể tải lời chúc lúc này.' : 'Could not load wishes at this time.'}
            </p>
          ) : displayedWishes.length > 0 ? (
            <>
              {displayedWishes.map((w, i) => (
                <ScrollReveal key={w.id || i} delay={0.05 * (i % 10)}>
                  <div className="text-left p-5 bg-wedding-warm/60 rounded-sm border border-border transition-all hover:border-wedding-gold/30 backdrop-blur-[2px]">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="font-semibold wedding-display text-foreground">
                        {w.name}
                      </span>
                      <span className="text-xs text-muted-foreground lowercase first-letter:uppercase">
                        {w.created_at
                          ? formatDistanceToNow(new Date(w.created_at), {
                            addSuffix: true,
                            locale: language === 'vi' ? vi : enUS,
                          })
                          : language === 'vi' ? "Vừa xong" : "Just now"}
                      </span>
                    </div>
                    <p className="text-foreground wedding-body leading-relaxed">
                      {w.message}
                    </p>
                  </div>
                </ScrollReveal>
              ))}

              {totalCount > 5 && (
                <ScrollReveal delay={0.2}>
                  <div className="pt-6">
                    <Link
                      to="/wishes"
                      className="inline-flex items-center gap-2 px-6 py-2 border border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-white transition-all rounded-full wedding-body text-sm font-medium tracking-widest group"
                    >
                      {language === 'vi' ? `Xem tất cả lời chúc (${totalCount})` : `View all wishes (${totalCount})`}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </ScrollReveal>
              )}
            </>
          ) : (
            <p className="text-muted-foreground wedding-body italic py-8">
              {language === 'vi' ? 'Chưa có lời chúc nào. Hãy là người đầu tiên gửi lời chúc nhé!' : 'No wishes yet. Be the first to send one!'}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default WishesSection;


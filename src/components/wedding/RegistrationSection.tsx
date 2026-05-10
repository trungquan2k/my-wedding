import { useState } from "react";
import { Loader2, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { supabase } from "@/lib/supabase";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import FloatingHearts from "./FloatingHearts";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import FallingElements from "./FallingElements";

const RegistrationSection = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    attendance: "yes",
    side: "groom",
    phone: "",
    arrival: "arrival1",
    message: "",
  });

  const mutation = useMutation({
    mutationFn: async (data: any) => {
      // Map form data to table schema
      const mappedData = {
        full_name: data.name,
        joined: data.attendance === "yes",
        phone_number: data.phone, // Assuming it's text or int8
        join_date: data.side === 'groom'
          ? (data.arrival === 'arrival1' ? '2026-05-26' : '2026-05-25')
          : (data.arrival === 'arrival1' ? '2026-05-24' : '2026-05-23'),
        side: data.side === "groom" ? "Nhà Nam" : "Nhà Gái"
      };

      const { error } = await supabase
        .from("form-registraion")
        .insert([mappedData]);
      if (error) throw error;
      return true;
    },
    onSuccess: () => {
      toast({
        title: t("registration.form.success"),
        className: "bg-white border-wedding-gold text-wedding-burgundy",
      });
      setFormData({
        name: "",
        attendance: "yes",
        side: "groom",
        phone: "",
        arrival: "arrival1",
        message: "",
      });
    },
    onError: (error) => {
      console.error("Error submitting registration:", error);
      toast({
        title: language === 'vi' ? "Có lỗi xảy ra" : "An error occurred",
        description: language === 'vi' ? "Vui lòng thử lại sau." : "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast({
        title: t("registration.form.error.name"),
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.phone.trim()) {
      toast({
        title: t("registration.form.error.phone"),
        variant: "destructive",
      });
      return;
    }

    mutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="registration" className="py-20 md:py-28 bg-wedding-burgundy relative overflow-hidden">
      {/* Festive Decorations */}
      <div className="absolute inset-0 z-0">
        <FallingElements />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="wedding-script text-white text-3xl md:text-5xl leading-relaxed italic drop-shadow-lg px-4">
              {t("registration.intro")}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-white wedding-body text-sm tracking-wide block">
                {t("registration.form.name")}
              </label>
              <input
                type="text"
                name="name"
                placeholder={t("registration.form.placeholder.name")}
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/20 border border-white/30 rounded-sm text-white wedding-body focus:outline-none focus:border-white/60 transition-all"
                disabled={mutation.isPending}
              />
            </div>

            {/* Attendance */}
            <div className="space-y-2">
              <label className="text-white wedding-body text-xs tracking-wide block opacity-80">
                {t("registration.form.attendance")}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, attendance: "yes" }))}
                  className={cn(
                    "px-3 py-2 rounded-sm border transition-all duration-300 flex items-center justify-center gap-2 group",
                    formData.attendance === "yes"
                      ? "bg-white/20 text-white border-white/60 border shadow-sm scale-[1.01]"
                      : "bg-black/20 text-white/50 border-white/10 border hover:border-white/30 hover:bg-black/30"
                  )}
                >
                  <Heart className={cn("w-3.5 h-3.5", formData.attendance === "yes" ? "fill-wedding-burgundy" : "fill-none")} />
                  <span className="wedding-display text-[10px] tracking-widest uppercase font-medium">{t("registration.option.yes")}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, attendance: "no" }))}
                  className={cn(
                    "px-3 py-2 rounded-sm border transition-all duration-300 flex items-center justify-center gap-2",
                    formData.attendance === "no"
                      ? "bg-white/20 text-white border-white/60 border shadow-sm scale-[1.01]"
                      : "bg-black/20 text-white/50 border-white/10 border hover:border-white/30 hover:bg-black/30"
                  )}
                >
                  <div className="w-3.5 h-3.5 flex items-center justify-center">
                    <span className="text-sm leading-none">×</span>
                  </div>
                  <span className="wedding-display text-[10px] tracking-widest uppercase font-medium">{t("registration.option.no")}</span>
                </button>
              </div>
            </div>

            {/* Side Selection */}
            <div className="space-y-2">
              <label className="text-white wedding-body text-xs tracking-wide block opacity-80">
                {t("registration.form.side")}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, side: "groom" }))}
                  className={cn(
                    "px-3 py-2 rounded-sm border transition-all duration-300 flex items-center justify-center gap-2",
                    formData.side === "groom"
                      ? "bg-white/20 text-white border-white/60 border shadow-sm scale-[1.01]"
                      : "bg-black/20 text-white/50 border-white/10 border hover:border-white/30 hover:bg-black/30"
                  )}
                >
                  <span className="wedding-display text-[10px] tracking-widest uppercase font-medium">{t("registration.option.groomSide")}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, side: "bride" }))}
                  className={cn(
                    "px-3 py-2 rounded-sm border transition-all duration-300 flex items-center justify-center gap-2",
                    formData.side === "bride"
                      ? "bg-white/20 text-white border-white/60 border shadow-sm scale-[1.01]"
                      : "bg-black/20 text-white/50 border-white/10 border hover:border-white/30 hover:bg-black/30"
                  )}
                >
                  <span className="wedding-display text-[10px] tracking-widest uppercase font-medium">{t("registration.option.brideSide")}</span>
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-white wedding-body text-sm tracking-wide block">
                {t("registration.form.phone")}
              </label>
              <input
                type="text"
                name="phone"
                placeholder={t("registration.form.placeholder.phone")}
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/20 border border-white/30 rounded-sm text-white wedding-body focus:outline-none focus:border-white/60 transition-all"
                disabled={mutation.isPending}
              />
            </div>

            {/* Arrival */}
            <div className="space-y-2">
              <label className="text-white wedding-body text-xs tracking-wide block opacity-80">
                {t("registration.form.arrival")}
              </label>
              <div className="grid grid-cols-1 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, arrival: "arrival1" }))}
                  className={cn(
                    "px-3 py-2.5 rounded-sm border transition-all duration-300 flex items-center justify-center gap-3",
                    formData.arrival === "arrival1"
                      ? "bg-white/20 text-white border-white/60 border shadow-sm scale-[1.01]"
                      : "bg-black/20 text-white/50 border-white/10 border hover:border-white/30 hover:bg-black/30"
                  )}
                >
                  <span className="wedding-display text-[10px] tracking-widest uppercase font-medium">
                    {formData.side === 'groom' ? t("registration.option.arrival1.groom") : t("registration.option.arrival1.bride")}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, arrival: "arrival2" }))}
                  className={cn(
                    "px-3 py-2.5 rounded-sm border transition-all duration-300 flex items-center justify-center gap-3",
                    formData.arrival === "arrival2"
                      ? "bg-white/20 text-white border-white/60 border shadow-sm scale-[1.01]"
                      : "bg-black/20 text-white/50 border-white/10 border hover:border-white/30 hover:bg-black/30"
                  )}
                >
                  <span className="wedding-display text-[10px] tracking-widest uppercase font-medium">
                    {formData.side === 'groom' ? t("registration.option.arrival2.groom") : t("registration.option.arrival2.bride")}
                  </span>
                </button>
              </div>
            </div>

            {/* Message / Group Size */}
            <div className="space-y-2">
              <label className="text-white wedding-body text-sm tracking-wide block leading-relaxed">
                {t("registration.form.groupSize")}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 bg-black/20 border border-white/30 rounded-sm text-white wedding-body focus:outline-none focus:border-white/60 transition-all resize-none"
                disabled={mutation.isPending}
              />
            </div>

            {/* Submit */}
            <div className="pt-4 flex">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-10 py-4 bg-white text-wedding-burgundy wedding-display tracking-widest hover:bg-wedding-gold-light hover:text-white transition-all active:scale-[0.97] rounded-sm disabled:opacity-50 shadow-xl"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Heart className="w-5 h-5 fill-current" />
                )}
                {mutation.isPending ? (language === 'vi' ? "Đang gửi..." : "Sending...") : t("registration.form.submit")}
              </button>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RegistrationSection;

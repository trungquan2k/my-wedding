import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CeremonyModalProps {
  isOpen: boolean;
  onClose: () => void;
  ceremony: {
    title: string;
    date: string;
    month: string;
    year: string;
    lunar?: string;
    day: string;
    time: string;
    location: string;
    receptionAddress: string;
    receptionDate: string;
    receptionTime: string;
  };
}

const MiniCalendar = ({ activeDay }: { activeDay: number }) => {
  const { t } = useLanguage();
  const daysInMonth = 31;
  const startDay = 5; // May 1st 2026 is Friday (5)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const weekDays = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

  return (
    <div className="bg-wedding-warm/30 p-6 rounded-xl border border-wedding-gold/10">
      <div className="text-center mb-4">
        <span className="text-lg font-bold text-wedding-gold tracking-widest uppercase">
          {t("profile.month")} {activeDay === 26 || activeDay === 25 ? "05" : "05"} / 2026
        </span>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {weekDays.map((d) => (
          <div key={d} className="text-[10px] text-gray-400 font-bold text-center">
            {d}
          </div>
        ))}
        {Array.from({ length: startDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {days.map((d) => (
          <div
            key={d}
            className={`h-8 w-8 flex items-center justify-center text-sm rounded-full transition-all ${d === activeDay
              ? "bg-wedding-gold text-white font-bold shadow-lg shadow-wedding-gold/30"
              : "text-gray-600"
              }`}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  );
};

const CeremonyModal = ({ isOpen, onClose, ceremony }: CeremonyModalProps) => {
  const { t } = useLanguage();
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto max-h-[90vh] overflow-y-auto"
            >
              <div className="relative p-6 md:p-8">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="text-center mb-8">
                  <h3 className="wedding-script text-4xl text-wedding-gold mb-2">
                    {ceremony.title}
                  </h3>
                  <div className="w-16 h-px bg-wedding-gold/30 mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                  {/* Left: Calendar */}
                  <div className="flex flex-col items-center">
                    <div className="w-full max-w-[320px]">
                      <MiniCalendar activeDay={parseInt(ceremony.date)} />
                    </div>
                  </div>

                  {/* Right: Info */}
                  <div className="space-y-8 text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Clock size={14} /> {t("modal.reception")}
                      </h4>
                      <div className="space-y-3 px-4 md:px-0 md:pl-4 md:border-l-2 border-wedding-gold/20">
                        <p className="text-sm text-gray-700 font-bold">
                          {ceremony.receptionDate}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center justify-center md:justify-start gap-2">
                          <Clock size={14} className="text-wedding-gold" /> {ceremony.receptionTime}
                        </p>
                        <p className="text-xs text-gray-500 leading-relaxed italic">
                          <MapPin size={12} className="inline mr-1" /> {ceremony.receptionAddress}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Clock size={14} /> {t("modal.ceremony")}
                      </h4>
                      <div className="space-y-3 px-4 md:px-0 md:pl-4 md:border-l-2 border-wedding-gold/20">
                        <p className="text-sm text-gray-700 font-bold">
                          {ceremony.day}, {ceremony.date} {t("profile.month")} {ceremony.month}, {ceremony.year}
                        </p>
                        {ceremony.lunar && (
                          <p className="text-[10px] text-gray-500 italic -mt-2">
                            ({t("modal.lunar")}: {ceremony.lunar})
                          </p>
                        )}
                        <p className="text-sm text-gray-600 flex items-center justify-center md:justify-start gap-2">
                          <Clock size={14} className="text-wedding-gold" /> {ceremony.time}
                        </p>
                        <p className="text-xs text-gray-500 leading-relaxed italic">
                          <MapPin size={12} className="inline mr-1" /> {ceremony.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-6 border-t border-gray-100 text-center">
                  <button
                    onClick={onClose}
                    className="px-8 py-2 bg-wedding-gold text-white rounded-full text-sm uppercase tracking-widest hover:bg-wedding-gold-dark transition-colors shadow-lg shadow-wedding-gold/20"
                  >
                    {t("modal.close")}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CeremonyModal;

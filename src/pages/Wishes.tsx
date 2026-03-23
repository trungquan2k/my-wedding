import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Home, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
import FloatingHearts from "@/components/wedding/FloatingHearts";
import ScrollReveal from "@/components/wedding/ScrollReveal";
import NavBar from "@/components/wedding/NavBar";

const PAGE_SIZE = 10;

interface Wish {
  id: number;
  name: string;
  message: string;
  created_at: string;
}

const fetchAllWishes = async (page: number) => {
  const from = page * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const { data, error, count } = await supabase
    .from("wishes")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) throw error;
  return { data: data as Wish[], count: count || 0 };
};

const Wishes = () => {
  const [page, setPage] = useState(0);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["wishes", page],
    queryFn: () => fetchAllWishes(page),
  });

  const totalPages = data ? Math.ceil(data.count / PAGE_SIZE) : 0;

  return (
    <main className="min-h-screen bg-background relative overflow-hidden flex flex-col pt-24">
      <FloatingHearts />
      <NavBar />

      <div className="max-w-4xl mx-auto px-4 w-full relative z-10 flex-1 pb-12">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="wedding-script text-4xl md:text-5xl wedding-gold-text mb-4">
              Tất cả lời chúc
            </p>
            <div className="w-24 h-px bg-wedding-gold/30 mx-auto" />
          </div>
        </ScrollReveal>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-wedding-gold" />
          </div>
        ) : isError ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-6">Không thể tải dữ liệu vào lúc này.</p>
            <Link to="/" className="text-wedding-gold hover:underline">Quay lại trang chủ</Link>
          </div>
        ) : data && data.data.length > 0 ? (
          <div className="space-y-4">
            {data.data.map((w, i) => (
              <ScrollReveal key={w.id} delay={0.05 * (i % 10)}>
                <div className="text-left p-6 bg-wedding-warm/40 backdrop-blur-sm rounded-lg border border-border shadow-sm">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-semibold wedding-display text-lg text-foreground uppercase tracking-wide">
                      {w.name}
                    </span>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {formatDistanceToNow(new Date(w.created_at), { addSuffix: true, locale: vi })}
                    </span>
                  </div>
                  <p className="text-foreground wedding-body text-lg leading-relaxed italic">
                    "{w.message}"
                  </p>
                </div>
              </ScrollReveal>
            ))}

            {/* Pagination UI */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-12 py-6 border-t border-wedding-gold/10">
                <button
                  onClick={() => setPage(p => Math.max(0, p - 1))}
                  disabled={page === 0}
                  className="p-2 border border-border rounded-full disabled:opacity-30 hover:bg-wedding-gold/10 text-wedding-gold transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <span className="wedding-body text-lg text-wedding-burgundy font-medium">
                   {page + 1} / {totalPages}
                </span>

                <button
                  onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                  disabled={page === totalPages - 1}
                  className="p-2 border border-border rounded-full disabled:opacity-30 hover:bg-wedding-gold/10 text-wedding-gold transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-20 italic">Chưa có lời chúc nào.</p>
        )}

        <div className="mt-12 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-secondary-foreground wedding-display tracking-[0.2em] rounded-full shadow-lg hover:shadow-xl hover:opacity-90 transition-all font-semibold uppercase text-sm"
          >
            <Home className="w-4 h-4" /> Quay lại trang chủ
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Wishes;

import { Reveal } from "./Reveal";
import { School, Sparkles } from "lucide-react";

// ============================================================
// ESCOLAS ATENDIDAS — edite esta lista para adicionar/remover.
// ============================================================
const SCHOOLS = [
  "Colégio Quintal Mágico",
  "Colégio Luminus Delphos",
  "Colégio Criarte",
  "Colégio Integração",
  "Colégio Vem Ser",
  "Colégio Passinho Livre",
  "Colégio Objetivo",
  "Colégio Ressurreição",
  "Colégio Anglo Start",
];

const COLORS = ["#F43F5E", "#F97316", "#22C55E", "#14B8A6", "#A855F7", "#1E3A8A"];

export const SchoolsSection = () => (
  <section id="escolas" data-testid="schools-section" className="py-24 lg:py-32 bg-[#F0FBF7] relative overflow-hidden">
    <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#14B8A6]/10 blur-3xl" />
    <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-[#A855F7]/5 blur-3xl" />
    <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="inline-block rounded-full bg-[#E7F8F0] text-[#14B8A6] font-bold text-sm px-4 py-1.5 mb-5">
          Onde estamos
        </span>
        <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-[#1E3A8A]">
          Escolas que <span className="text-[#14B8A6]">já atendemos</span>
        </h2>
        <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
          Todos os dias, nossos kits chegam fresquinhos nessas escolas. A sua escola ainda não está na
          lista? Fale com a gente e leve a Zavanellas Kids para lá!
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SCHOOLS.map((school, i) => {
          const color = COLORS[i % COLORS.length];
          return (
            <Reveal key={school} delay={(i % 3) * 0.1} y={24}>
              <div
                data-testid={`school-card-${i + 1}`}
                className="flex items-center gap-4 bg-white rounded-2xl border border-slate-100 px-6 py-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgb(0,0,0,0.08)]"
              >
                <span
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${color}14` }}
                >
                  <School size={24} strokeWidth={2.5} style={{ color }} />
                </span>
                <p className="font-display font-semibold text-lg text-[#1E3A8A]">{school}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2} className="mt-10 flex justify-center">
        <div
          data-testid="schools-more-badge"
          className="inline-flex items-center gap-2.5 rounded-full bg-[#1E3A8A] text-white font-bold px-7 py-3.5 shadow-lg shadow-blue-900/20"
        >
          <Sparkles size={19} strokeWidth={2.5} className="text-[#FBBF24]" />
          E muitas outras escolas!
        </div>
      </Reveal>
    </div>
  </section>
);

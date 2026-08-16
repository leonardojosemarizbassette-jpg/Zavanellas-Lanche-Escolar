import { Reveal } from "./Reveal";
import { CheckCircle2, CupSoda, Apple, Croissant, CalendarCheck, School, GraduationCap } from "lucide-react";
import { CONTACT } from "../data/menu";

const CHECKS = [
  { icon: CupSoda, label: "Suco natural", color: "#F97316" },
  { icon: Apple, label: "Frutas", color: "#F43F5E" },
  { icon: Croissant, label: "Lanches variados", color: "#A855F7" },
  { icon: CalendarCheck, label: "Cardápio equilibrado", color: "#14B8A6" },
  { icon: School, label: "Entrega diretamente na escola", color: "#22C55E" },
];

export const HealthySection = () => (
  <section data-testid="healthy-section" className="py-24 lg:py-32 bg-[#FFF6E8] relative overflow-hidden">
    <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#F97316]/10 blur-3xl" />
    <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
      <Reveal>
        <span className="inline-block rounded-full bg-[#FFE9ED] text-[#F43F5E] font-bold text-sm px-4 py-1.5 mb-5">
          Qualidade todos os dias
        </span>
        <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-[#1E3A8A]">
          Alimentação saudável <span className="text-[#F97316]">todos os dias</span>
        </h2>
        <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed">
          Nossos cardápios são planejados pensando em variedade, equilíbrio e qualidade, oferecendo
          todos os dias uma combinação de bebida natural, fruta e lanche. Assim, a criança se alimenta
          bem e você acompanha tudo com tranquilidade.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {CHECKS.map((c, i) => (
            <Reveal key={c.label} delay={0.1 + i * 0.08} y={16}>
              <div
                data-testid={`healthy-check-${i}`}
                className="flex items-center gap-2.5 bg-white rounded-full pl-2.5 pr-5 py-2.5 shadow-sm border border-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${c.color}1A` }}>
                  <c.icon size={17} strokeWidth={2.5} style={{ color: c.color }} />
                </span>
                <span className="font-bold text-sm text-slate-700">{c.label}</span>
                <CheckCircle2 size={16} strokeWidth={2.5} className="text-[#22C55E]" />
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="relative">
          <div className="absolute -top-5 -right-5 w-full h-full rounded-[2.5rem] bg-[#22C55E]/15 rotate-2" />
          <div className="relative bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-slate-900/5 border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#E7F8F0] flex items-center justify-center">
                <GraduationCap size={28} strokeWidth={2.5} className="text-[#14B8A6]" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl text-[#1E3A8A]">Acompanhamento profissional</h3>
                <p className="text-sm text-slate-500 font-semibold">Cardápios aprovados por nutricionista</p>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                "Frutas frescas selecionadas todos os dias",
                "Sucos naturais: nunca polpa, nunca caixinha",
                "Bolos simples: sem recheio e sem cobertura",
                "Kits individuais com segurança e qualidade",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 size={22} strokeWidth={2.5} className="text-[#22C55E] mt-0.5 shrink-0" />
                  <span className="text-slate-600 font-semibold">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] px-5 py-4">
              <p className="text-sm font-bold text-[#166534]">Nutricionista responsável</p>
              <p data-testid="nutritionist-info" className="text-sm text-[#166534] mt-0.5">
                {CONTACT.nutritionist} | {CONTACT.nutritionistCrn}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

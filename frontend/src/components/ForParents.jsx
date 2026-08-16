import { Reveal } from "./Reveal";
import { School, CalendarDays, Package, Shuffle, Coffee } from "lucide-react";

const BENEFITS = [
  { icon: School, text: "Os lanches são entregues diretamente na escola", color: "#14B8A6" },
  { icon: CalendarDays, text: "O serviço funciona de segunda a sexta-feira", color: "#F97316" },
  { icon: Package, text: "A criança recebe os 3 itens diariamente", color: "#A855F7" },
  { icon: Shuffle, text: "O cardápio é variado e planejado por nutricionista", color: "#F43F5E" },
  { icon: Coffee, text: "Você não precisa se preocupar em preparar o lanche todos os dias", color: "#22C55E" },
];

const IMG = "/fotos/kit-3.jpg";

export const ForParents = () => (
  <section id="para-os-pais" data-testid="parents-section" className="py-24 lg:py-32 bg-white relative overflow-hidden">
    <div className="absolute top-10 -right-28 w-96 h-96 rounded-full bg-[#FBBF24]/10 blur-3xl" />
    <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
      <Reveal className="order-2 lg:order-1">
        <div className="relative">
          <div className="absolute -bottom-5 -right-5 w-full h-full rounded-[2.5rem] bg-[#14B8A6]/15 rotate-2" />
          <img
            data-testid="parents-image"
            src={IMG}
            alt="Kit Zavanellas Kids com bolo, suco natural e frutas"
            className="relative rounded-[2.5rem] object-cover w-full h-[420px] lg:h-[500px] shadow-2xl shadow-slate-900/10"
          />
          <div className="absolute top-6 -left-2 sm:left-6 bg-white rounded-3xl shadow-xl shadow-slate-900/10 px-5 py-3.5 flex items-center gap-3 rotate-[-2deg]">
            <span className="w-10 h-10 rounded-2xl bg-[#FFE9ED] flex items-center justify-center">
              <Coffee size={20} strokeWidth={2.5} className="text-[#F43F5E]" />
            </span>
            <p className="font-display font-semibold text-[#1E3A8A] text-sm leading-tight">
              Manhãs mais tranquilas
              <br />
              <span className="text-slate-500 font-body font-semibold text-xs">para toda a família</span>
            </p>
          </div>
        </div>
      </Reveal>

      <div className="order-1 lg:order-2">
        <Reveal>
          <span className="inline-block rounded-full bg-[#E7F8F0] text-[#14B8A6] font-bold text-sm px-4 py-1.5 mb-5">
            Para os pais
          </span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-[#1E3A8A]">
            Mais praticidade para você. <span className="text-[#F43F5E]">Mais cuidado para seu filho.</span>
          </h2>
        </Reveal>
        <div className="mt-9 space-y-4">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.text} delay={0.08 + i * 0.08} y={20}>
              <div
                data-testid={`parents-benefit-${i}`}
                className="flex items-center gap-4 bg-[#FFFDF7] border border-[#F1E9DA] rounded-2xl px-5 py-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${b.color}1A` }}>
                  <b.icon size={22} strokeWidth={2.5} style={{ color: b.color }} />
                </span>
                <p className="font-bold text-slate-700">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

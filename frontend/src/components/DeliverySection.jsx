import { Reveal } from "./Reveal";
import { School, ArrowRight, Backpack } from "lucide-react";

export const DeliverySection = () => (
  <section data-testid="delivery-section" className="py-20 lg:py-28 bg-[#FEF3C7] relative overflow-hidden">
    <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#FBBF24]/25 blur-3xl" />
    <div className="max-w-5xl mx-auto px-5 lg:px-8 text-center relative">
      <Reveal>
        <div className="mx-auto w-20 h-20 rounded-3xl bg-white shadow-lg shadow-amber-900/10 flex items-center justify-center rotate-3 mb-8">
          <School size={38} strokeWidth={2.5} className="text-[#F97316]" />
        </div>
        <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-[#1E3A8A]">
          Entrega diretamente <span className="text-[#F97316]">nas escolas</span>
        </h2>
        <p className="mt-5 text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
          Trabalhamos com entrega de lanches escolares diretamente nas escolas, todos os dias, com
          qualidade e comodidade para os pais. O kit individual chega pronto: é só a criança aproveitar.
        </p>
        <a
          data-testid="delivery-school-button"
          href="#contato"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#1E3A8A] hover:bg-[#162C6B] text-white font-bold px-8 py-4 text-base transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 shadow-lg shadow-blue-900/25"
        >
          <Backpack size={20} strokeWidth={2.5} />
          Quero saber se vocês atendem minha escola
          <ArrowRight size={18} strokeWidth={2.5} />
        </a>
      </Reveal>
    </div>
  </section>
);

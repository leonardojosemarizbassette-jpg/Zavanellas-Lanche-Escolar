import { Reveal } from "./Reveal";
import { MapPin, School } from "lucide-react";

export const SchoolsSection = () => (
  <section id="escolas" data-testid="schools-section" className="py-24 lg:py-32 bg-[#F0FBF7] relative overflow-hidden">
    <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#14B8A6]/10 blur-3xl" />
    <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-[#A855F7]/5 blur-3xl" />
    <div className="max-w-4xl mx-auto px-5 lg:px-8 relative text-center">
      <Reveal>
        <span className="inline-block rounded-full bg-[#E7F8F0] text-[#14B8A6] font-bold text-sm px-4 py-1.5 mb-5">
          Onde atendemos
        </span>
        <div className="mx-auto w-20 h-20 rounded-3xl bg-white shadow-lg shadow-teal-900/10 flex items-center justify-center rotate-3 mb-8">
          <MapPin size={38} strokeWidth={2.5} className="text-[#14B8A6]" />
        </div>
        <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-[#1E3A8A]">
          Atendemos <span className="text-[#14B8A6]">todas as escolas particulares</span> de Rio Preto
        </h2>
        <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Se o seu filho estuda em uma escola particular de Rio Preto, nós entregamos lá! O kit chega
          fresquinho todos os dias, direto na escola, sem nenhuma preocupação para você.
        </p>
        <a
          data-testid="schools-contact-button"
          href="#contato"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#14B8A6] hover:bg-[#0D9488] text-white font-bold px-8 py-4 text-base transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 shadow-lg shadow-teal-500/25"
        >
          <School size={20} strokeWidth={2.5} />
          Quero a Zavanellas na escola do meu filho
        </a>
      </Reveal>
    </div>
  </section>
);

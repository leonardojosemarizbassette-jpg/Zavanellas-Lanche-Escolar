import { Reveal } from "./Reveal";
import { Leaf, ArrowRight, Baby } from "lucide-react";

export const ZeroMenuSection = () => (
  <section id="cardapio-zero" data-testid="zero-menu-section" className="py-20 lg:py-28 bg-[#F0FDF4] relative overflow-hidden">
    <div className="absolute -top-20 right-10 w-72 h-72 rounded-full bg-[#22C55E]/10 blur-3xl" />
    <div className="max-w-5xl mx-auto px-5 lg:px-8">
      <Reveal>
        <div className="relative bg-white rounded-[2.5rem] border-2 border-[#BBF7D0] shadow-xl shadow-green-900/5 p-8 md:p-14 overflow-hidden">
          <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-[#22C55E]/10" />
          <div className="relative flex flex-col md:flex-row md:items-center gap-8">
            <div className="shrink-0">
              <div className="w-24 h-24 rounded-full bg-[#22C55E] flex items-center justify-center rotate-[-4deg] shadow-lg shadow-green-500/30">
                <div className="text-center">
                  <p className="font-display font-bold text-white text-2xl leading-none">ZERO</p>
                  <p className="font-display font-semibold text-green-100 text-xs tracking-widest">AÇÚCAR</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#DCFCE7] text-[#166534] font-bold text-xs px-4 py-1.5 mb-4">
                <Leaf size={14} strokeWidth={2.5} />
                Opção especial
              </span>
              <h2 className="font-display font-semibold text-2xl md:text-3xl tracking-tight text-[#1E3A8A]">
                Também temos uma opção especial: <span className="text-[#22C55E]">Cardápio Zero</span>
              </h2>
              <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
                Temos também um cardápio zero açúcar, desenvolvido especialmente para bebês e crianças
                que ainda não consomem açúcar. Consulte nossa opção de cardápio zero e entre em contato
                para saber todos os detalhes.
              </p>
              <a
                data-testid="zero-menu-contact-button"
                href="#contato"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold px-7 py-3.5 transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 shadow-lg shadow-green-500/25"
              >
                <Baby size={19} strokeWidth={2.5} />
                Quero saber mais sobre o Cardápio Zero
                <ArrowRight size={18} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

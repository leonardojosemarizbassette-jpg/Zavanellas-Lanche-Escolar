import { motion } from "framer-motion";
import { Apple, CupSoda, Croissant, ShieldCheck, Heart, ArrowRight, MessageCircle } from "lucide-react";

const HERO_IMG = "/fotos/menina-kit.jpg";

const chips = [
  { icon: CupSoda, label: "Suco natural", color: "#F97316", bg: "#FFF1E4" },
  { icon: Apple, label: "Frutas frescas", color: "#F43F5E", bg: "#FFE9ED" },
  { icon: Croissant, label: "Lanche variado", color: "#A855F7", bg: "#F4EAFE" },
];

export const Hero = () => (
  <section id="inicio" data-testid="hero-section" className="relative pt-[120px] pb-20 lg:pt-[150px] lg:pb-28 overflow-hidden">
    <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#FBBF24]/10 blur-3xl" />
    <div className="absolute top-1/2 -left-32 w-[380px] h-[380px] rounded-full bg-[#22C55E]/10 blur-3xl" />

    <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-10 items-center relative">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full bg-white border border-[#F1E9DA] px-4 py-2 shadow-sm mb-7"
        >
          <Heart size={16} strokeWidth={2.5} className="text-[#F43F5E]" fill="#F43F5E" />
          <span className="text-sm font-bold text-slate-600">Lanches escolares feitos com amor</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          data-testid="hero-title"
          className="font-display font-semibold text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.08] tracking-tight text-[#1E3A8A]"
        >
          Um lanche <span className="text-[#22C55E]">saudável</span>, <span className="text-[#F43F5E]">gostoso</span> e preparado com <span className="text-[#F97316]">carinho</span> para o seu filho.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          data-testid="hero-subtitle"
          className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl"
        >
          De segunda a sexta, entregamos na escola um lanche completo, equilibrado e variado para
          deixar a rotina dos pais mais prática e a alimentação das crianças mais saudável.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <a
            data-testid="hero-menu-button"
            href="#cardapio"
            className="inline-flex items-center gap-2 rounded-full bg-[#F43F5E] hover:bg-[#E11D48] text-white font-bold px-8 py-4 text-base transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 shadow-lg shadow-rose-500/30"
          >
            Conheça nosso cardápio
            <ArrowRight size={20} strokeWidth={2.5} />
          </a>
          <a
            data-testid="hero-contact-button"
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white font-bold px-8 py-4 text-base transition-all duration-200 hover:scale-105 hover:-translate-y-0.5"
          >
            <MessageCircle size={20} strokeWidth={2.5} />
            Entre em contato
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          {chips.map((c) => (
            <div key={c.label} className="flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: c.bg }}>
              <c.icon size={18} strokeWidth={2.5} style={{ color: c.color }} />
              <span className="text-sm font-bold" style={{ color: c.color }}>{c.label}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 rounded-full px-4 py-2 bg-[#E7F8F0]">
            <ShieldCheck size={18} strokeWidth={2.5} className="text-[#14B8A6]" />
            <span className="text-sm font-bold text-[#14B8A6]">Cardápio variado e equilibrado</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute -top-6 -left-6 w-full h-full rounded-[2.5rem] bg-[#FBBF24]/25 rotate-[-3deg]" />
        <img
          data-testid="hero-image"
          src={HERO_IMG}
          alt="Criança feliz comendo um lanche saudável"
          className="relative rounded-[2.5rem] object-cover w-full h-[420px] lg:h-[520px] shadow-2xl shadow-slate-900/10"
        />
        <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white rounded-3xl shadow-xl shadow-slate-900/10 px-6 py-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#E7F8F0] flex items-center justify-center">
            <CupSoda size={24} strokeWidth={2.5} className="text-[#22C55E]" />
          </div>
          <div>
            <p className="font-display font-semibold text-[#1E3A8A]">Kit completo todo dia</p>
            <p className="text-sm text-slate-500 font-semibold">Suco + fruta + lanche do dia</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

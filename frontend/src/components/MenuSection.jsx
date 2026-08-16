import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { CupSoda, Apple, Croissant, Info, Leaf, UtensilsCrossed } from "lucide-react";
import { DAYS, WEEK_COLORS, MENU_NORMAL, MENU_ZERO, MENU_NOTES } from "../data/menu";

const DayCard = ({ day, data, color, testid }) => (
  <div
    data-testid={testid}
    className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.05)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgb(0,0,0,0.09)]"
  >
    <div className="py-3 text-center" style={{ backgroundColor: color }}>
      <span className="font-display font-semibold text-white tracking-wide">{day}</span>
    </div>
    <div className="p-5 space-y-4">
      {[
        { icon: CupSoda, label: "Suco natural", value: data.juice, c: "#F97316" },
        { icon: Croissant, label: "Lanche do dia", value: data.lunch, c: "#A855F7" },
        { icon: Apple, label: "Fruta", value: data.fruit, c: "#F43F5E" },
      ].map((row) => (
        <div key={row.label} className="flex items-start gap-3">
          <span className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${row.c}14` }}>
            <row.icon size={18} strokeWidth={2.5} style={{ color: row.c }} />
          </span>
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">{row.label}</p>
            <p className="text-sm font-bold text-slate-700 leading-snug">{row.value}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const MenuSection = () => {
  const [menuType, setMenuType] = useState("normal");
  const [week, setWeek] = useState(0);

  const menu = menuType === "normal" ? MENU_NORMAL : MENU_ZERO;
  const color = menuType === "zero" ? "#22C55E" : WEEK_COLORS[week];

  return (
    <section id="cardapio" data-testid="menu-section" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-24 -left-24 w-80 h-80 rounded-full bg-[#F43F5E]/5 blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-[#F4EAFE] text-[#A855F7] font-bold text-sm px-4 py-1.5 mb-5">
            Cardápio escolar
          </span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-[#1E3A8A]">
            O que seu filho vai comer <span className="text-[#22C55E]">de segunda a sexta</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
            Escolha o tipo de cardápio e navegue pelas semanas. Transparência total: você acompanha
            diariamente o que a criança está comendo.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <div className="inline-flex bg-[#F6F1E7] rounded-full p-1.5 gap-1">
            <button
              data-testid="menu-tab-normal"
              onClick={() => setMenuType("normal")}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold text-sm transition-all duration-200 ${
                menuType === "normal" ? "bg-[#F43F5E] text-white shadow-md shadow-rose-500/30" : "text-slate-600 hover:text-[#F43F5E]"
              }`}
            >
              <UtensilsCrossed size={17} strokeWidth={2.5} />
              Cardápio Tradicional
            </button>
            <button
              data-testid="menu-tab-zero"
              onClick={() => setMenuType("zero")}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold text-sm transition-all duration-200 ${
                menuType === "zero" ? "bg-[#22C55E] text-white shadow-md shadow-green-500/30" : "text-slate-600 hover:text-[#22C55E]"
              }`}
            >
              <Leaf size={17} strokeWidth={2.5} />
              Cardápio Zero Açúcar
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 flex flex-wrap justify-center gap-3">
          {menu.map((_, i) => {
            const c = menuType === "zero" ? "#22C55E" : WEEK_COLORS[i];
            const active = week === i;
            return (
              <button
                key={i}
                data-testid={`menu-week-${i + 1}`}
                onClick={() => setWeek(i)}
                className="rounded-full px-5 py-2.5 font-bold text-sm border-2 transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: active ? c : "#FFFFFF",
                  borderColor: c,
                  color: active ? "#FFFFFF" : c,
                  boxShadow: active ? `0 8px 20px ${c}40` : "none",
                }}
              >
                {i + 1}ª Semana
              </button>
            );
          })}
        </Reveal>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${menuType}-${week}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              data-testid="menu-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
            >
              {DAYS.map((day, i) => (
                <DayCard key={day} day={day} data={menu[week][i]} color={color} testid={`menu-day-${i + 1}`} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal delay={0.1} className="mt-10 max-w-3xl mx-auto space-y-3">
          {MENU_NOTES.map((note, i) => (
            <div key={i} data-testid={`menu-note-${i}`} className="flex items-start gap-3 bg-[#FFF6E8] border border-[#FDE8C8] rounded-2xl px-5 py-4">
              <Info size={20} strokeWidth={2.5} className="text-[#F97316] mt-0.5 shrink-0" />
              <p className="text-sm font-semibold text-slate-600">{note}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

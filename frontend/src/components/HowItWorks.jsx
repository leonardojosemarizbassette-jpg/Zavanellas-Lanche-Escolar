import { Reveal } from "./Reveal";
import { CupSoda, Apple, Croissant } from "lucide-react";

const ITEMS = [
  {
    icon: CupSoda,
    title: "Suco Natural",
    text: "Suco natural preparado para acompanhar o lanche. Não utilizamos polpa nem suco de caixinha.",
    color: "#F97316",
    bg: "#FFF1E4",
    img: "/fotos/suco.jpg",
    alt: "Garrafinha de suco natural de laranja",
  },
  {
    icon: Apple,
    title: "Porção de Frutas",
    text: "Uma porção de frutas para complementar a alimentação de forma saudável e saborosa.",
    color: "#F43F5E",
    bg: "#FFE9ED",
    img: "/fotos/frutas.jpg",
    alt: "Tigela com frutas frescas e coloridas",
  },
  {
    icon: Croissant,
    title: "Lanche do Dia",
    text: "Um lanche variado, escolhido de acordo com nosso cardápio, sempre buscando equilíbrio e qualidade.",
    color: "#A855F7",
    bg: "#F4EAFE",
    img: "/fotos/lanche.jpg",
    alt: "Sanduíche saudável do lanche do dia",
  },
];

export const HowItWorks = () => (
  <section id="como-funciona" data-testid="how-it-works-section" className="py-24 lg:py-32 bg-white relative overflow-hidden">
    <div className="absolute top-16 right-0 w-72 h-72 rounded-full bg-[#A855F7]/5 blur-3xl" />
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <Reveal className="max-w-2xl">
        <span className="inline-block rounded-full bg-[#E7F8F0] text-[#14B8A6] font-bold text-sm px-4 py-1.5 mb-5">
          Como funciona
        </span>
        <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-[#1E3A8A]">
          Todos os dias, seu filho recebe <span className="text-[#F43F5E]">3 itens</span> na escola
        </h2>
        <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
          De segunda a sexta-feira, entregamos um kit completo e individual. O lanche varia durante a
          semana, podendo incluir pão de queijo, bolinho, esfirra e outras preparações do nosso cardápio.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.12}>
            <div
              data-testid={`how-it-works-card-${i + 1}`}
              className="group bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.05)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute -bottom-6 left-6 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: item.color }}
                >
                  <item.icon size={26} strokeWidth={2.5} className="text-white" />
                </div>
              </div>
              <div className="pt-10 pb-7 px-6">
                <p className="text-xs font-extrabold tracking-widest uppercase" style={{ color: item.color }}>
                  Item {i + 1}
                </p>
                <h3 className="mt-1 font-display font-semibold text-xl md:text-2xl text-[#1E3A8A]">{item.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

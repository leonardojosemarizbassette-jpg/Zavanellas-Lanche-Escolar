import { Reveal } from "./Reveal";
import { Camera } from "lucide-react";

// ============================================================
// GALERIA — para adicionar uma foto, salve o arquivo em
// /public/fotos/ e acrescente um item nesta lista.
// ============================================================
const PHOTOS = [
  { src: "/fotos/kit-1.jpg", alt: "Kit do dia com suco natural, bolinhos e frutas", label: "Kit do dia completo" },
  { src: "/fotos/kit-2.jpg", alt: "Kit com suco natural, manga e mini bolinhos", label: "Suco, frutas e mini bolos" },
  { src: "/fotos/bolinhos.jpg", alt: "Bolinhos assados em formato de coração e estrela", label: "Bolinhos em formatos divertidos" },
  { src: "/fotos/kit-3.jpg", alt: "Kit com bolo, suco natural e frutas com etiqueta Zavanellas Kids", label: "Tudo com a nossa etiqueta" },
  { src: "/fotos/donuts.jpg", alt: "Mini bolinhos embalados individualmente", label: "Produção fresquinha do dia" },
];

export const GallerySection = () => (
  <section id="galeria" data-testid="gallery-section" className="py-24 lg:py-32 bg-[#FFFDF7] relative overflow-hidden">
    <div className="absolute top-20 -right-24 w-80 h-80 rounded-full bg-[#F43F5E]/5 blur-3xl" />
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <Reveal className="max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#FFE9ED] text-[#F43F5E] font-bold text-sm px-4 py-1.5 mb-5">
          <Camera size={15} strokeWidth={2.5} />
          Direto da nossa cozinha
        </span>
        <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-[#1E3A8A]">
          De pertinho: <span className="text-[#F97316]">nossos kits e lanches</span>
        </h2>
        <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
          Nada de foto de banco de imagens: aqui você vê os kits de verdade, preparados e embalados
          com carinho todos os dias para as crianças.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {PHOTOS.map((p, i) => (
          <Reveal key={p.src} delay={(i % 4) * 0.08} y={24} className={i === 0 ? "col-span-2 row-span-2" : ""}>
            <figure
              data-testid={`gallery-photo-${i + 1}`}
              className={`group relative overflow-hidden rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgb(0,0,0,0.12)] ${
                i === 0 ? "h-full min-h-[320px] md:min-h-[520px]" : "h-44 md:h-[250px]"
              }`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1E3A8A]/80 to-transparent px-4 pt-10 pb-3.5">
                <span className="text-white text-sm font-bold">{p.label}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

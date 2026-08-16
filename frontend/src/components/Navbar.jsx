import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { CONTACT, buildWhatsAppLink } from "../data/menu";

const LINKS = [
  { label: "Início", href: "#inicio", id: "nav-inicio" },
  { label: "Como Funciona", href: "#como-funciona", id: "nav-como-funciona" },
  { label: "Cardápio", href: "#cardapio", id: "nav-cardapio" },
  { label: "Para os Pais", href: "#para-os-pais", id: "nav-pais" },
  { label: "Contato", href: "#contato", id: "nav-contato" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-testid="navbar"
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#F1E9DA]"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-[72px] flex items-center justify-between">
        <a href="#inicio" data-testid="nav-logo" className="flex items-center gap-2">
          <span className="w-10 h-10 rounded-2xl bg-[#F43F5E] flex items-center justify-center rotate-3 shadow-md">
            <span className="font-display font-semibold text-white text-lg -rotate-3">Z</span>
          </span>
          <span className="font-display font-semibold text-xl text-[#1E3A8A]">
            Zavanellas <span className="text-[#F43F5E]">Kids</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={l.id}
              className="text-sm font-bold text-slate-600 hover:text-[#F43F5E] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            data-testid="nav-whatsapp-button"
            href={buildWhatsAppLink("Olá! Vim pelo site da Zavanellas Kids e quero saber mais sobre os lanches escolares.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-sm px-5 py-2.5 transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 shadow-md shadow-green-500/25"
          >
            <MessageCircle size={18} strokeWidth={2.5} />
            Fale conosco
          </a>
          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-[#1E3A8A] hover:bg-slate-100 transition-colors duration-200"
            aria-label="Abrir menu"
          >
            {open ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {open && (
        <nav data-testid="nav-mobile-menu" className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#F1E9DA] px-5 py-4 flex flex-col gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`${l.id}-mobile`}
              onClick={() => setOpen(false)}
              className="py-3 px-3 rounded-xl font-bold text-slate-700 hover:bg-[#FFF3E4] hover:text-[#F43F5E] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

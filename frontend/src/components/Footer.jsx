import { Heart, MessageCircle, Instagram, Mail } from "lucide-react";
import { CONTACT, buildWhatsAppLink } from "../data/menu";

const LINKS = [
  { label: "Início", href: "#inicio", id: "footer-inicio" },
  { label: "Como Funciona", href: "#como-funciona", id: "footer-como-funciona" },
  { label: "Cardápio", href: "#cardapio", id: "footer-cardapio" },
  { label: "Contato", href: "#contato", id: "footer-contato" },
];

export const Footer = () => (
  <footer data-testid="footer" className="bg-[#1E3A8A] text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="Logo Zavanellas Kids" className="w-12 h-12 rounded-full shadow-lg object-cover" />
            <span className="font-display font-semibold text-xl">
              Zavanellas <span className="text-[#FBBF24]">Kids</span>
            </span>
          </div>
          <p className="text-blue-200 font-semibold leading-relaxed max-w-xs">
            Alimentação saudável, equilibrada e cheia de carinho para o dia a dia escolar do seu filho.
          </p>
          <p className="mt-4 text-sm text-blue-300 font-semibold">
            Nutricionista responsável: {CONTACT.nutritionist} | {CONTACT.nutritionistCrn}
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Navegação</h4>
          <ul className="space-y-2.5">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  data-testid={l.id}
                  href={l.href}
                  className="text-blue-200 hover:text-[#FBBF24] font-semibold transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Contato</h4>
          <ul className="space-y-3">
            <li>
              <a
                data-testid="footer-whatsapp"
                href={buildWhatsAppLink("Olá! Vim pelo site da Zavanellas Kids e quero mais informações.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-200 hover:text-[#FBBF24] font-semibold transition-colors duration-200"
              >
                <MessageCircle size={19} strokeWidth={2.5} />
                Juliana: {CONTACT.whatsappJuliana}
              </a>
            </li>
            <li>
              <a
                data-testid="footer-instagram"
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-200 hover:text-[#FBBF24] font-semibold transition-colors duration-200"
              >
                <Instagram size={19} strokeWidth={2.5} />
                {CONTACT.instagram}
              </a>
            </li>
            <li>
              <a
                data-testid="footer-email"
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-blue-200 hover:text-[#FBBF24] font-semibold transition-colors duration-200 break-all"
              >
                <Mail size={19} strokeWidth={2.5} className="shrink-0" />
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-blue-300 font-semibold">
          © {new Date().getFullYear()} Zavanellas Kids. Todos os direitos reservados.
        </p>
        <p className="text-sm text-blue-300 font-semibold flex items-center gap-1.5">
          Lanches escolares feitos com
          <Heart size={14} strokeWidth={2.5} className="text-[#F43F5E]" fill="#F43F5E" />
          todos os dias
        </p>
      </div>
    </div>
  </footer>
);

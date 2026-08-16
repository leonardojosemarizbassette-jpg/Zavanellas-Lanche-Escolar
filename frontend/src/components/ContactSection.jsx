import { useState } from "react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { MessageCircle, Instagram, Mail, Phone, Send } from "lucide-react";
import { CONTACT, buildWhatsAppLink } from "../data/menu";

const Field = ({ label, testid, ...props }) => (
  <div>
    <label htmlFor={testid} className="block text-sm font-bold text-slate-700 mb-1.5">
      {label}
    </label>
    <input
      id={testid}
      data-testid={testid}
      {...props}
      className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3.5 text-slate-800 font-semibold placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:border-[#F43F5E] focus:ring-2 focus:ring-[#F43F5E]/20 transition-colors duration-200"
    />
  </div>
);

export const ContactSection = () => {
  const [form, setForm] = useState({ parent: "", child: "", school: "", phone: "", email: "", message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = [
      "Olá! Vim pelo site da Zavanellas Kids e quero mais informações.",
      "",
      `Responsável: ${form.parent}`,
      `Criança: ${form.child}`,
      `Escola: ${form.school}`,
      `Telefone/WhatsApp: ${form.phone}`,
      form.email && `E-mail: ${form.email}`,
      form.message && `Mensagem: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");
    toast.success("Abrindo o WhatsApp com a sua mensagem...");
    window.open(buildWhatsAppLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" data-testid="contact-section" className="py-24 lg:py-32 bg-[#FFF6E8] relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#F43F5E]/5 blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14">
        <Reveal>
          <span className="inline-block rounded-full bg-[#FFE9ED] text-[#F43F5E] font-bold text-sm px-4 py-1.5 mb-5">
            Fale com a gente
          </span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-[#1E3A8A]">
            Vamos cuidar do lanche <span className="text-[#22C55E]">do seu filho?</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-lg">
            Preencha o formulário ao lado e continue a conversa direto no nosso WhatsApp. Ou, se
            preferir, fale conosco por qualquer um dos canais abaixo.
          </p>

          <div className="mt-9 space-y-4 max-w-md">
            <a
              data-testid="contact-whatsapp-juliana"
              href={buildWhatsAppLink("Olá! Vim pelo site da Zavanellas Kids e quero mais informações.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-2xl border border-slate-100 px-5 py-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="w-12 h-12 rounded-2xl bg-[#E7F8F0] flex items-center justify-center">
                <MessageCircle size={24} strokeWidth={2.5} className="text-[#22C55E]" />
              </span>
              <div>
                <p className="font-bold text-[#1E3A8A]">WhatsApp — Juliana</p>
                <p className="text-sm font-semibold text-slate-500">{CONTACT.whatsappJuliana}</p>
              </div>
            </a>
            <a
              data-testid="contact-whatsapp-breno"
              href={`https://wa.me/55${CONTACT.whatsappBreno.replace(/\D/g, "")}?text=${encodeURIComponent("Olá! Vim pelo site da Zavanellas Kids e quero mais informações.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-2xl border border-slate-100 px-5 py-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="w-12 h-12 rounded-2xl bg-[#E7F8F0] flex items-center justify-center">
                <Phone size={24} strokeWidth={2.5} className="text-[#14B8A6]" />
              </span>
              <div>
                <p className="font-bold text-[#1E3A8A]">WhatsApp — Breno</p>
                <p className="text-sm font-semibold text-slate-500">{CONTACT.whatsappBreno}</p>
              </div>
            </a>
            <div className="grid grid-cols-2 gap-4">
              <a
                data-testid="contact-instagram"
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white rounded-2xl border border-slate-100 px-4 py-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="w-10 h-10 rounded-xl bg-[#FFE9ED] flex items-center justify-center shrink-0">
                  <Instagram size={20} strokeWidth={2.5} className="text-[#F43F5E]" />
                </span>
                <p className="font-bold text-xs text-slate-700 break-all leading-snug">{CONTACT.instagram}</p>
              </a>
              <a
                data-testid="contact-email"
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 bg-white rounded-2xl border border-slate-100 px-4 py-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="w-10 h-10 rounded-xl bg-[#F4EAFE] flex items-center justify-center shrink-0">
                  <Mail size={20} strokeWidth={2.5} className="text-[#A855F7]" />
                </span>
                <p className="font-bold text-sm text-slate-700 break-all">E-mail</p>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            data-testid="contact-form"
            onSubmit={handleSubmit}
            className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-900/5 p-7 md:p-9"
          >
            <h3 className="font-display font-semibold text-2xl text-[#1E3A8A] mb-6">Quero mais informações</h3>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Nome do responsável" testid="form-parent-name" required value={form.parent} onChange={set("parent")} placeholder="Seu nome" />
                <Field label="Nome da criança" testid="form-child-name" required value={form.child} onChange={set("child")} placeholder="Nome da criança" />
              </div>
              <Field label="Nome da escola" testid="form-school-name" required value={form.school} onChange={set("school")} placeholder="Escola onde a criança estuda" />
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Telefone/WhatsApp" testid="form-phone" required type="tel" value={form.phone} onChange={set("phone")} placeholder="(17) 99999-9999" />
                <Field label="E-mail" testid="form-email" type="email" value={form.email} onChange={set("email")} placeholder="seuemail@exemplo.com" />
              </div>
              <div>
                <label htmlFor="form-message" className="block text-sm font-bold text-slate-700 mb-1.5">
                  Mensagem
                </label>
                <textarea
                  id="form-message"
                  data-testid="form-message"
                  rows={4}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Conte pra gente como podemos ajudar..."
                  className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3.5 text-slate-800 font-semibold placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:border-[#F43F5E] focus:ring-2 focus:ring-[#F43F5E]/20 transition-colors duration-200 resize-none"
                />
              </div>
              <button
                data-testid="form-submit-button"
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold px-8 py-4 text-base transition-all duration-200 hover:scale-[1.02] hover:-translate-y-0.5 shadow-lg shadow-green-500/25"
              >
                <Send size={19} strokeWidth={2.5} />
                Quero mais informações
              </button>
              <p className="text-center text-xs font-semibold text-slate-400">
                Ao enviar, você será direcionado para o nosso WhatsApp com a mensagem pronta.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

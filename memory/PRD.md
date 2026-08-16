# PRD — Zavanellas Kids (Landing Page)

## Problem statement (original)
Site profissional, moderno, bonito e acolhedor para empresa de lanches escolares saudáveis (Zavanellas Kids), apresentando o serviço para pais: kit diário com suco natural + porção de frutas + lanche do dia, entregue na escola de segunda a sexta. Seções exigidas: Hero, Como Funciona, Alimentação Saudável, Cardápio (seg-sex, editável), Cardápio Zero, Para os Pais, Entrega nas Escolas, Formulário de Contato, Rodapé. Sem inventar preços, endereços ou ingredientes. Visual alegre, claro, responsivo, com animações suaves.

## Arquitetura
- Frontend-only (React + Tailwind + framer-motion + lucide-react). Sem backend/banco: formulário gera link wa.me com mensagem pré-preenchida.
- Dados editáveis centralizados em `/app/frontend/src/data/menu.js` (cardápio tradicional e Zero Açúcar, 5 semanas cada; contatos; nutricionista).
- Componentes em `/app/frontend/src/components/`: Navbar, Hero, HowItWorks, HealthySection, MenuSection, ZeroMenuSection, ForParents, DeliverySection, ContactSection, Footer, Reveal (animação de scroll).
- Design: `/app/design_guidelines.json` (Fredoka + Nunito, fundo creme #FFFDF7, paleta da marca, cores por semana).

## Personas
- Pais/responsáveis buscando praticidade e alimentação saudável para os filhos.
- Pais de bebês/crianças que não consomem açúcar (Cardápio Zero).

## Requisitos principais (estáticos)
- Kit diário: suco natural (nunca polpa/caixinha), porção de frutas, lanche variado.
- Cardápio de segunda a sexta, 5 semanas, versões Tradicional e Zero Açúcar.
- Contato via WhatsApp (Juliana principal), Instagram, e-mail.

## Implementado (Jul/2026)
- Landing page completa em PT-BR com todas as seções pedidas, responsiva e com animações de scroll.
- Cardápio real transcrito dos materiais enviados (5 semanas, Tradicional + Zero Açúcar) com abas e seletor de semana colorido por semana.
- Formulário de contato que abre o WhatsApp da Juliana (5517996124607) com dados preenchidos (verificado via teste automatizado).
- Contatos reais: WhatsApp Juliana (17) 99612-4607, Breno (17) 99635-9706, Instagram @zavanellasanchescolar, e-mail zavanellasgourmet@gmail.com.
- Pedido do cliente (Ago/2026): removidas TODAS as menções à nutricionista (quadro "Nutricionista responsável", selo "Aprovado por nutricionista" do Hero, rodapé e frases relacionadas).
- Logo oficial aplicada no navbar e rodapé (/app/frontend/public/logo.png, recorte circular com fundo transparente a partir da imagem enviada pelo cliente).
- Seção "Onde atendemos" (id #escolas): sem lista nominal — informa que atendem todas as escolas particulares de Rio Preto, com CTA para o formulário. (Pedido do cliente: remover a lista de escolas.)
- Verificado: screenshots desktop + mobile de todas as seções; interações do cardápio; envio do formulário gera link wa.me correto.
- Fotos da própria marca aplicadas (recortadas dos cartazes enviados): Hero usa a foto da menina com o kit (arquivos em /app/frontend/public/fotos/).
- Cards do "Como Funciona" usam recortes das fotos reais enviadas pelo cliente: suco-real.jpg (garrafa do kit), frutas-real.jpg (potinho de frutas), lanche-real.jpg (bolinhos coração/estrela).
- Galeria "De pertinho: nossos kits e lanches" (id #galeria) com 5 fotos reais (kit-1, kit-2, kit-3, bolinhos, donuts) + 2 vídeos reais (/public/videos/video-1.mp4 e video-2.mp4, autoplay mudo em loop com controles).
- Seção "Para os Pais" usa VÍDEO real enviado pelo cliente (/public/videos/video-3.mp4, autoplay mudo em loop) com poster /fotos/kit-3.jpg como capa.
- Nota de verificação: vídeos em H.264 (avc1); o navegador de teste (Chromium sem codec proprietário) não reproduz, mas os arquivos são servidos corretamente (HTTP 200, video/mp4) e tocam em navegadores comuns (Chrome/Safari/Edge).

## Pendente
- Nenhum item visual pendente; futuras fotos reais podem ser adicionadas à galeria salvando em /public/fotos/ e editando a lista PHOTOS em src/components/GallerySection.jsx.

## Backlog priorizado
- P0: nenhum pendente (site funcional).
- P1: mais fotos/vídeos reais para a galeria (cliente envia quando quiser).
- P2: painel administrativo para editar cardápio sem mexer no código.
- P2: seção de planos/preços.
- P2: FAQ e depoimentos de pais.

## Próximas tarefas
- Definir preços/planos para publicar.
- Depoimentos reais de pais.
- Edição de cardápio: hoje via `src/data/menu.js`.

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
- Contatos reais: WhatsApp Juliana (17) 99612-4607, Breno (17) 99635-9706, Instagram @zavanellasanchescolar, e-mail zavanellasgourmet@gmail.com, nutricionista Larissa de Oliveira Romera (CRN 37.484).
- Verificado: screenshots desktop + mobile de todas as seções; interações do cardápio (abas/semanas); envio do formulário gera link wa.me correto.

## Backlog priorizado
- P0: nenhum pendente (site funcional).
- P1: substituir imagens de banco de imagens por fotos reais dos kits/lanches da Zavanellas.
- P1: adicionar logo oficial (arquivo de imagem) no lugar do monograma "Z".
- P2: painel administrativo para editar cardápio sem mexer no código.
- P2: seção de planos/preços e lista de escolas atendidas.
- P2: FAQ e depoimentos de pais.

## Próximas tarefas
- Receber fotos reais e logo do cliente.
- Definir preços/planos para publicar.
- Edição de cardápio: hoje via `src/data/menu.js`.

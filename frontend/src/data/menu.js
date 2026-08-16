// ============================================================
// ZAVANELLAS KIDS — DADOS EDITÁVEIS DO SITE
// Para alterar o cardápio, edite os textos abaixo.
// Cada semana tem 5 dias: Segunda (índice 0) até Sexta (índice 4).
// ============================================================

export const CONTACT = {
  whatsappNumber: "5517996124607", // Juliana (usado nos botões e no formulário)
  whatsappJuliana: "(17) 99612-4607",
  whatsappBreno: "(17) 99635-9706",
  instagram: "@zavanellasanchescolar",
  instagramUrl: "https://instagram.com/zavanellasanchescolar",
  email: "zavanellasgourmet@gmail.com",
  nutritionist: "Larissa de Oliveira Romera",
  nutritionistCrn: "CRN: 37.484",
};

export const DAYS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

export const WEEK_COLORS = ["#F43F5E", "#F97316", "#22C55E", "#14B8A6", "#A855F7"];

// Cada dia: { juice: suco natural, lunch: lanche do dia, fruit: fruta }
export const MENU_NORMAL = [
  // 1ª SEMANA
  [
    { juice: "Suco de Limão", lunch: "Panqueca Tipo Americana (mel opcional)", fruit: "Banana" },
    { juice: "Suco de Laranja", lunch: "Bolo de Baunilha c/ granulado", fruit: "Manga" },
    { juice: "Suco de Maracujá", lunch: "Pãozinho de Batata c/ Requeijão", fruit: "Melancia" },
    { juice: "Suco de Fruta da Época", lunch: "Bolo de Cenoura c/ gotinhas de chocolate", fruit: "Mix de Frutas" },
    { juice: "Suco de Laranja", lunch: "Esfirra de Frango", fruit: "Banana" },
  ],
  // 2ª SEMANA
  [
    { juice: "Suco de Maracujá", lunch: "Pão de Queijo Gourmet", fruit: "Melancia" },
    { juice: "Suco de Laranja", lunch: "CakePop de Baunilha (bolo formato de bolinha)", fruit: "Fruta da Época" },
    { juice: "Suco de Limão", lunch: "Pãozinho de Leite c/ Requeijão", fruit: "Manga" },
    { juice: "Suco de Fruta da Época", lunch: "Bolo de Laranja c/ aveia", fruit: "Mix de Frutas" },
    { juice: "Suco de Laranja", lunch: "Mini Pizza de Mussarela", fruit: "Banana" },
  ],
  // 3ª SEMANA
  [
    { juice: "Suco de Limão", lunch: "Sanduíche de Pão de forma c/ Mussarela", fruit: "Melancia" },
    { juice: "Suco de Maracujá", lunch: "Cup Cake de Iogurte Natural c/ gotinha de chocolate", fruit: "Manga" },
    { juice: "Suco de Laranja", lunch: "Bisnaguinha Artesanal c/ Requeijão", fruit: "Banana" },
    { juice: "Suco de Limão", lunch: "Bolo de Cacau c/ aveia", fruit: "Fruta da Época" },
    { juice: "Suco de Laranja", lunch: "Biscoito de Polvilho", fruit: "Banana" },
  ],
  // 4ª SEMANA
  [
    { juice: "Suco de Limão", lunch: "Palito de Queijo", fruit: "Melancia" },
    { juice: "Suco de Laranja", lunch: "Bolo de Cenoura c/ gotinhas de chocolate", fruit: "Fruta da Época" },
    { juice: "Suco de Maracujá", lunch: "Pãozinho de Batata c/ Requeijão", fruit: "Manga" },
    { juice: "Suco de Limão", lunch: "CakePop de Baunilha (bolo formato de bolinha)", fruit: "Mix de Frutas" },
    { juice: "Suco de Fruta da Época", lunch: "Mini Pizza de Mussarela", fruit: "Banana" },
  ],
  // 5ª SEMANA
  [
    { juice: "Suco de Limão", lunch: "Pão de Queijo Gourmet", fruit: "Melancia" },
    { juice: "Suco de Laranja", lunch: "Cup Cake de Iogurte Natural c/ gotinha de chocolate", fruit: "Melão" },
    { juice: "Suco de Maracujá", lunch: "Pãozinho de Leite c/ Requeijão", fruit: "Banana" },
    { juice: "Suco de Fruta da Época", lunch: "Bolo de Laranja c/ aveia", fruit: "Mix de Frutas" },
    { juice: "Suco de Limão", lunch: "Biscoito de Polvilho", fruit: "Banana" },
  ],
];

export const MENU_ZERO = [
  // 1ª SEMANA
  [
    { juice: "Suco de Limão", lunch: "Panqueca Tipo Americana", fruit: "Banana" },
    { juice: "Suco de Laranja", lunch: "Mini Bolo de Baunilha", fruit: "Manga" },
    { juice: "Suco de Maracujá", lunch: "Pãozinho de Batata c/ Requeijão", fruit: "Melancia" },
    { juice: "Suco de Fruta da Época", lunch: "Bolo de Cenoura c/ Laranja", fruit: "Mix de Frutas" },
    { juice: "Suco de Laranja", lunch: "Muffin de Maçã com Aveia", fruit: "Banana" },
  ],
  // 2ª SEMANA
  [
    { juice: "Suco de Maracujá", lunch: "Tomate Cereja e Queijo Fresco", fruit: "Melancia" },
    { juice: "Suco de Laranja", lunch: "CakePop de Banana (bolo formato de bolinha)", fruit: "Fruta da Época" },
    { juice: "Suco de Limão", lunch: "Pãozinho de Leite c/ Requeijão", fruit: "Manga" },
    { juice: "Suco de Fruta da Época", lunch: "Bolo de Laranja c/ aveia", fruit: "Mix de Frutas" },
    { juice: "Suco de Laranja", lunch: "Muffin Salgado de Queijo", fruit: "Banana" },
  ],
  // 3ª SEMANA
  [
    { juice: "Suco de Limão", lunch: "Palito de Cenoura Cozido e Tomate Cereja", fruit: "Melancia" },
    { juice: "Suco de Maracujá", lunch: "Cup Cake de Banana", fruit: "Manga" },
    { juice: "Suco de Laranja", lunch: "Bisnaguinha Artesanal c/ Requeijão", fruit: "Banana" },
    { juice: "Suco de Limão", lunch: "Mini Bolo de Cacau c/ aveia", fruit: "Fruta da Época" },
    { juice: "Suco de Laranja", lunch: "Pãozinho de Leite com Requeijão", fruit: "Banana" },
  ],
  // 4ª SEMANA
  [
    { juice: "Suco de Limão", lunch: "Ovo Cozido + Palito de Cenoura", fruit: "Melancia" },
    { juice: "Suco de Laranja", lunch: "Mini Bolo de Cenoura com Laranja", fruit: "Fruta da Época" },
    { juice: "Suco de Maracujá", lunch: "Pãozinho de Batata c/ Requeijão", fruit: "Manga" },
    { juice: "Suco de Limão", lunch: "CakePop de Baunilha (bolo formato de bolinha)", fruit: "Mix de Frutas" },
    { juice: "Suco de Fruta da Época", lunch: "Seleta de Legumes", fruit: "Banana" },
  ],
  // 5ª SEMANA
  [
    { juice: "Suco de Limão", lunch: "Tomate Cereja e Queijo Fresco", fruit: "Melancia" },
    { juice: "Suco de Laranja", lunch: "Mini Bolo de Laranja", fruit: "Melão" },
    { juice: "Suco de Maracujá", lunch: "Pãozinho de Leite c/ Requeijão", fruit: "Banana" },
    { juice: "Suco de Fruta da Época", lunch: "Bolo de Laranja c/ aveia", fruit: "Mix de Frutas" },
    { juice: "Suco de Limão", lunch: "Pãozinho de Leite com Requeijão", fruit: "Banana" },
  ],
];

// ============================================================
// ESCOLAS ATENDIDAS
// Para acrescentar uma nova escola, basta adicionar uma linha
// na lista abaixo, entre aspas e com vírgula no final. Exemplo:
//   "Colégio Nova Escola",
// ============================================================
export const SCHOOLS = [
  "Colégio Quintal Mágico",
  "Colégio Luminus Delphos",
  "Colégio Criarte",
  "Colégio Integração",
  "Colégio Vem Ser",
  "Colégio Passinho Livre",
  "Colégio Objetivo",
  "Colégio Ressurreição",
  "Colégio Anglo Start",
];

export const MENU_NOTES = [
  "Os tipos de frutas e sucos poderão ser substituídos devido à sazonalidade, qualidade e escassez.",
  "Todos os nossos bolos são bolos simples: sem recheio e sem cobertura.",
];

export const buildWhatsAppLink = (message) =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DiferencialItem, TestimonialItem, ProjectType, ProjectAddon, FaqItem } from "./types";

export const BRAND_NAME = "LPD Digital";
export const OWNER_NAME = "Lucas Pires Dorneles";
export const LOGO_URL = "https://lh3.googleusercontent.com/d/1GRlPBbSCEjviCKOYuAryOdH1SC5eXA5x";
export const TAGLINE = "Sites que geram credibilidade e vendas";
export const SECTOR = "Criador de conteúdo digital";
export const INSTAGRAM_STATS = {
  username: "lpd.digital.site",
  posts: "+10k",
  followers: "+200k",
};
export const WHATSAPP_NUMBER = "5599038259";

// Format WhatsApp Link
export const getWhatsAppLink = (message?: string) => {
  const base = `https://wa.me/555599038259`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
};

export const DIFERENCIAIS: DiferencialItem[] = [
  {
    id: "design",
    title: "Design Moderno & Profissional",
    description: "Estética sofisticada alinhada ao posicionamento de luxo. Cores, tipografia e espaçamentos desenhados exclusivamente sob medida para o seu público.",
    badge: "Premium"
  },
  {
    id: "responsive",
    title: "100% Responsivo",
    description: "Experiência de navegação impecável em qualquer celular, tablet ou computador. Sites dinâmicos que se adaptam a qualquer tela perfeitamente.",
    badge: "Foco Mobile"
  },
  {
    id: "speed",
    title: "Velocidade de Carregamento Ultra-Rápido",
    description: "Desenvolvidos com código ultra-otimizado e cache avançado. Pontuações de elite no Google Lighthouse para reter usuários e melhorar vendas.",
    badge: "99/100 Speed"
  },
  {
    id: "custom",
    title: "Projeto 100% Personalizado",
    description: "Sem templates prontos ou amadores. Cada pixel é planejado para transmitir alta credibilidade e realçar os diferenciais únicos do seu negócio.",
    badge: "Código Autoral"
  },
  {
    id: "support",
    title: "Atendimento Próximo & Suporte Dedicado",
    description: "Comunicação direta por WhatsApp ou vídeo chamada. Nada de bots. Atendimento humanizado passo a passo, antes, durante e depois da entrega.",
    badge: "Human-First"
  },
  {
    id: "credibility",
    title: "Transmitir Credibilidade de Elite",
    description: "Unimos copy persuasivo com layouts de ponta para transformar visitantes casuais em clientes de alto valor recorrente.",
    badge: "Conversão"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "César Augusto",
    role: "Diretor Comercial",
    company: "Vanguard Imovéis",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    feedback: "O Lucas transformou nossa presença digital. O site novo carrega instantaneamente no celular e os clientes comentam o quão profissional ele parece. Recomendo fortemente a LPD Digital.",
    stars: 5
  },
  {
    id: "2",
    name: "Juliana Mendes",
    role: "Fundadora",
    company: "Mendes Advocacia",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    feedback: "Escolher a LPD Digital foi a melhor decisão para meu negócio. O Lucas entendeu exatamente o tom sóbrio e sério que precisávamos para atrair clientes corporativos de alto padrão. Um trabalho impecável.",
    stars: 5
  },
  {
    id: "3",
    name: "Rodrigo Alencar",
    role: "Proprietário",
    company: "Alencar Consultoria",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    feedback: "Além da entrega pontual, a atenção aos detalhes técnicos, SEO e suporte foi impressionante. Nosso tráfego orgânico cresceu 45% nos primeiros meses após o lançamento do site responsive.",
    stars: 5
  }
];

export const PROJECT_TYPES: ProjectType[] = [
  {
    id: "landing_page",
    name: "Landing Page Premium",
    priceEstimate: "A partir de R$ 1.500",
    description: "Focada em converter tráfego em vendas diretas. Ideal para campanhas de Google Ads, lançamentos e venda de produtos/serviços de alto valor.",
    icon: "Target"
  },
  {
    id: "institutional",
    name: "Site Institucional de Elite",
    priceEstimate: "A partir de R$ 2.500",
    description: "Apresentação completa da sua empresa, valores, equipe e portfolio. Perfeito para estruturar sua autoridade e ser encontrado no Google (SEO).",
    icon: "Monitor"
  },
  {
    id: "ecommerce",
    name: "E-Commerce de Luxo",
    priceEstimate: "A partir de R$ 4.500",
    description: "Loja virtual completa com experiência de checkout fluida, sistema de pagamentos seguro integrado e painel para gerenciamento fácil de estoque.",
    icon: "ShoppingBag"
  },
  {
    id: "custom_app",
    name: "Solução Personalizada",
    priceEstimate: "Sob Consulta",
    description: "Sistemas web customizados, áreas de membros exclusivas, dashboards interativos sob demanda para a operação digital do seu modelo de negócio.",
    icon: "Sparkles"
  }
];

export const PROJECT_ADDONS: ProjectAddon[] = [
  {
    id: "seo_premium",
    name: "SEO Premium & Otimização do Google",
    description: "Configurações de palavras-chave estruturadas e registro no Google Search Console para indexar na primeira página.",
    multiplier: 1.15,
    fixedPrice: 350
  },
  {
    id: "copywriting",
    name: "Copywriting Persuasivo Profissional",
    description: "Escrita focada em persuasão e engajamento comercial, alinhada com as maiores técnicas de conversão do mercado digital.",
    multiplier: 1.10,
    fixedPrice: 400
  },
  {
    id: "zap_integration",
    name: "Automação Integrada com WhatsApp",
    description: "Configuração de chatbot de recepção ou botões dinâmicos de atendimento automatizado, direcionando de forma inteligente os leads.",
    multiplier: 1.05,
    fixedPrice: 200
  },
  {
    id: "speed_boost",
    name: "Otimização de Performance Extrema (Core Web Vitals)",
    description: "Garantia de carregamento abaixo de 1.5s com compactação avassaladora de arquivos e hospedagem de classe mundial.",
    multiplier: 1.08,
    fixedPrice: 250
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq_1",
    question: "Como funciona o processo de criação de um site?",
    answer: "Trabalhamos em 4 etapas claras: 1. Briefing e Alinhamento Comercial: Entendemos seus diferenciais; 2. Design Visual: Apresentamos um protótipo exclusivo para aprovação; 3. Desenvolvimento: Construímos o site focando em velocidade e responsividade; 4. Lançamento e Treinamento: Colocamos o site no ar e ensinamos como gerenciar."
  },
  {
    id: "faq_2",
    question: "O site funcionará perfeitamente no celular?",
    answer: "Sim! Mais de 70% das visitas hoje acontecem pelo smartphone. Por isso, todos os sites da LPD Digital são projetados mobile-first, garantindo legibilidade, botões grandes e carregamento rápido nas redes móveis."
  },
  {
    id: "faq_3",
    question: "E após o site ficar pronto, tenho garantia ou suporte?",
    answer: "A LPD Digital oferece suporte e garantia totalmente ilimitados! Cuidamos de qualquer detalhe técnico, atualizações de segurança e garantimos o perfeito funcionamento do seu site continuamente, sem custos adicionais."
  },
  {
    id: "faq_4",
    question: "Qual o prazo de entrega médio?",
    answer: "Nosso prazo de entrega é de no máximo 24 horas! Garantimos foco total para disponibilizar seu projeto completo no ar com extrema agilidade e sem comprometer nossa qualidade 100% autoral."
  },
  {
    id: "faq_5",
    question: "Preciso pagar mensalidade obrigatória pelo site?",
    answer: "Não! Com a LPD Digital as mensalidades de hospedagem, domínio e suporte técnico recorrente são totalmente por nossa conta. Você realiza apenas o investimento único no projeto e nós cuidamos de toda a estrutura mensal para você."
  }
];

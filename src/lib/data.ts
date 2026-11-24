export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  alt: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  isRealWork?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  text: string;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const BUSINESS_INFO = {
  name: "BRASPORTO",
  legalName: "BRASPORTO — Reparos e Remodelações",
  tagline: "Reparos e Remodelações",
  editorialPunch: "Transformamos espaços. Construímos confiança.",
  description:
    "Estúdio de arquitetura, restauro e remodelações de excelência no Porto. Rigor técnico, materiais nobres e execução chave-na-mão com acompanhamento transparente.",
  phone: "+351 934 053 064",
  phoneRaw: "+351934053064",
  secondaryPhone: "+351 224 916 557",
  secondaryPhoneRaw: "+351224916557",
  email: "reparos@brasporto.com.pt",
  address: {
    street: "R. de Alves Redol 402",
    postalCode: "4050-042",
    city: "Porto",
    country: "Portugal",
    full: "R. de Alves Redol 402, 4050-042 Porto, Portugal",
  },
  geo: {
    latitude: 41.1579,
    longitude: -8.6291,
  },
  rating: 4.9,
  reviewCount: 30,
  googleMapsUrl: "https://maps.google.com/?q=R.+de+Alves+Redol+402,+4050-042+Porto,+Portugal",
  enableWhatsApp: false, // Per instructions: keep disabled until confirmed by business
  whatsAppStatusNote: "Disponível mediante contacto telefónico prévio (sujeito a confirmação)",
};

export const SERVICES: Service[] = [
  {
    id: "remodelacoes",
    number: "01",
    title: "Remodelações",
    description:
      "Transformações integrais de apartamentos e moradias no Porto. Gestão rigorosa de prazos, acabamentos nobres e planeamento arquitetónico chave-na-mão.",
    features: ["Demolições e reconstrução de interiores", "Isolamento térmico e acústico", "Substituição integral de pavimentos", "Acompanhamento técnico permanente"],
    image: "/images/real/obra-4.png",
    alt: "Intervenção de remodelação de sala e zona social com chão de madeira e divisórias arquitetónicas",
  },
  {
    id: "pintura",
    number: "02",
    title: "Pintura",
    description:
      "Preparação milimétrica de superfícies e aplicação de tintas premium de acabamento mate e aveludado, com controlo absoluto de luminosidade e durabilidade.",
    features: ["Tratamento anti-fissuras e humidades", "Acabamentos mate, acetinado e lacagens", "Pintura interior e fachadas exteriores", "Proteção minuciosa de caixilharias"],
    image: "/images/real/obra-2.png",
    alt: "Preparação rigorosa de paredes e pavimento de apartamento para aplicação de pintura de alta qualidade",
  },
  {
    id: "cozinhas",
    number: "03",
    title: "Remodelação de Cozinhas",
    description:
      "Conceção e remodelação completa de cozinhas contemporâneas: marcenaria à medida, bancadas de quartzo e pedra natural, e equipamentos embutidos.",
    features: ["Mobiliário por medida em madeira nobre", "Bancadas em quartzo e pedra natural", "Revestimentos cerâmicos artesanais", "Instalação de equipamentos e iluminação integrada"],
    image: "/images/real/obra-7.png",
    alt: "Cozinha moderna remodelada com bancada de quartzo branca, azulejos artesanais e armários em carvalho",
  },
  {
    id: "canalizacao",
    number: "04",
    title: "Canalização & Pichelaria",
    description:
      "Intervenções especializadas em canalização predial e pichelaria tradicional do Porto. Renovação de redes de água quente, esgotos e louças de design.",
    features: ["Substituição de canalizações antigas", "Instalação de louças suspensas e torneiras", "Sistemas de escoamento e sifões", "Testes de estanquidade sob pressão"],
    image: "/images/real/obra-6.png",
    alt: "Profissional técnico qualificado da Brasporto em intervenção no Porto",
  },
  {
    id: "eletricidade",
    number: "05",
    title: "Eletricidade",
    description:
      "Renovação completa de quadros elétricos, redes estruturadas e iluminação arquitetónica LED linear que valoriza cada plano espacial.",
    features: ["Quadros elétricos em conformidade técnica", "Iluminação arquitetónica indireta e sancas LED", "Aparelhagem moderna e domótica básica", "Certificação e ensaios de segurança"],
    image: "/images/real/obra-3.png",
    alt: "Obras estruturais e infraestruturas técnicas em moradia no Porto",
  },
  {
    id: "telhados-estruturas",
    number: "06",
    title: "Telhados & Carpintaria",
    description:
      "Reabilitação de coberturas tradicionais, substituição de telhas cerâmicas, rufos, chaminés e carpintaria estrutural com madeiras tratadas.",
    features: ["Substituição de telha cerâmica e isolamento", "Recuperação de asnas e travejamento em madeira", "Rufos, algerozes e impermeabilização", "Remoção de infiltrações persistentes"],
    image: "/images/real/obra-1.png",
    alt: "Restauro integral de telhado cerâmico tradicional no Porto com chaminé e condutas renovadas",
  },
];

export const REAL_WORKS: ProjectItem[] = [
  {
    id: "cozinha-contemporanea",
    title: "Cozinha Contemporânea com Detalhes Artesanais",
    category: "Remodelação de Cozinha",
    location: "Porto",
    description:
      "Bancada em quartzo maciço, marcenaria em carvalho natural com móveis inferiores brancos sem puxador, torneira monocomando preta e azulejos artesanais verdes vidrados.",
    image: "/images/real/obra-7.png",
    isRealWork: true,
  },
  {
    id: "sala-divisoria-vidro",
    title: "Zona Social & Divisória Arquitetónica",
    category: "Remodelação de Interiores",
    location: "Porto",
    description:
      "Recuperação de soalho maciço em madeira clara, divisória vertical em vidro fosco estruturado para privacidade elegante da cozinha e acabamentos em branco acetinado.",
    image: "/images/real/obra-4.png",
    isRealWork: true,
  },
  {
    id: "reconstrucao-estrutura-madeira",
    title: "Estrutura de Cobertura e Alvenarias",
    category: "Carpintaria & Estruturas",
    location: "Porto",
    description:
      "Nova armação de cobertura em vigamento maciço de madeira aparelhada sobre paredes mestras tradicionais em pedra de granito, com divisão de compartimentos interiores.",
    image: "/images/real/obra-3.png",
    isRealWork: true,
  },
  {
    id: "cobertura-telhado-porto",
    title: "Restauro de Telhado Cerâmico Tradicional",
    category: "Telhados & Impermeabilização",
    location: "Porto",
    description:
      "Substituição integral da cobertura com telhas cerâmicas de alta densidade, remate estanque de chaminés, caleiras metálicas e condutas de ventilação.",
    image: "/images/real/obra-1.png",
    isRealWork: true,
  },
  {
    id: "preparacao-reabilitacao-interior",
    title: "Preparação e Tratamento de Superfícies",
    category: "Pintura & Restauro",
    location: "Porto",
    description:
      "Proteção meticulosa de pavimentos originais durante processo de regularização de paredes, remoção de imperfeições e preparação para lacagem e pintura premium.",
    image: "/images/real/obra-2.png",
    isRealWork: true,
  },
];

export const BEFORE_AFTER = {
  title: "A diferença está nos detalhes.",
  subtitle: "Transformação de espaço com rigor de acabamentos",
  note: "Registo comparativo demonstrativo de intervenção de remodelação integral",
  before: {
    label: "Antes da Intervenção",
    description: "Espaço desatualizado, iluminação insuficiente e acabamentos degradados pelo tempo.",
    image: "/images/editorial/editorial-12.png",
  },
  after: {
    label: "Após Remodelação",
    description: "Ambiente renovado com luminosidade natural, materiais nobres e harmonia funcional.",
    image: "/images/editorial/editorial-2.png",
  },
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Primeiro Contacto",
    description:
      "Escuta ativa dos seus objetivos, preferências de materiais e necessidades específicas para o espaço a intervir.",
  },
  {
    step: "02",
    title: "Visita Técnica e Orçamento",
    description:
      "Deslocação ao local no Porto para medições rigorosas, diagnóstico estrutural e apresentação de proposta orçamental transparente sem custos ocultos.",
  },
  {
    step: "03",
    title: "Execução com Rigor",
    description:
      "Arranque ordenado dos trabalhos com proteção integral das áreas comuns, limpeza contínua e comunicação regular do estado da obra.",
  },
  {
    step: "04",
    title: "Entrega Chave-na-Mão",
    description:
      "Inspeção final detalhada com o cliente, validação ponto a ponto de todos os acabamentos e garantia de satisfação plena.",
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Kamilla Wild",
    role: "Cliente Google Avaliações",
    rating: 5,
    text: "Excelente trabalho, a entrega foi no prazo e exatamente como o combinado. O preço é justo e o serviço impecável! Super recomendo a Brasporto.",
    date: "Avaliação verificada no Google",
  },
  {
    id: "rev-2",
    author: "Sam Sugo",
    role: "Cliente Google Avaliações",
    rating: 5,
    text: "Extremamente satisfeito com os serviços prestados (pichelaria, electricidade).",
    date: "Avaliação verificada no Google",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-orcamento",
    question: "Como posso pedir um orçamento gratuito?",
    answer:
      "Pode solicitar uma proposta através do formulário nesta página ou ligando diretamente para o +351 934 053 064. Agendamos uma visita ao local no Porto para avaliar os trabalhos necessários e elaborar um orçamento detalhado sem qualquer compromisso.",
  },
  {
    id: "faq-servicos",
    question: "Que tipos de serviços a Brasporto realiza?",
    answer:
      "Realizamos remodelações integrais e parciais de habitações e espaços comerciais: carpintaria, reparação e substituição de telhados, canalização e pichelaria, eletricidade, pintura interior/exterior e reparações gerais.",
  },
  {
    id: "faq-cozinha",
    question: "Fazem remodelações completas de cozinhas e casas de banho?",
    answer:
      "Sim. Executamos projetos chave-na-mão para cozinhas e casas de banho, abrangendo desde a demolição e substituição de redes técnicas (água, esgoto, eletricidade) até à aplicação de bancadas em pedra, azulejos e montagem de mobiliário.",
  },
  {
    id: "faq-prazos",
    question: "Como garantem o cumprimento dos prazos acordados?",
    answer:
      "Definimos um cronograma de trabalhos antes do início da obra e mantemos uma comunicação aberta com o cliente. Trabalhamos com equipas próprias experientes para assegurar que cada fase é concluída na data prevista.",
  },
  {
    id: "faq-localizacao",
    question: "Qual é o raio de atuação da Brasporto?",
    answer:
      "Estamos sediados na Rua de Alves Redol 402, 4050-042 Porto, e atuamos principalmente em toda a cidade do Porto, Matosinhos, Vila Nova de Gaia, Maia e concelhos limítrofes do Grande Porto.",
  },
];

# BRASPORTO — Reparos e Remodelações (Porto)

Website institucional de alto padrão, desenvolvido com arquitetura moderna, design cinematográfico, microinterações e otimização total de desempenho, acessibilidade e SEO técnico.

---

## 🏗️ Visão Geral e Arquitetura

O projeto foi construído tomando como referência visual estrita o design aprovado no **Google Stitch** (Desktop 1440px e Mobile 390px), incorporando adicionalmente as fotos reais dos trabalhos e intervenções em curso pela equipa da **BRASPORTO** no Porto.

### Tecnologias Utilizadas
- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) com tokens semânticos e tipografia fluida (`clamp()`)
- **Animações e Scroll:**
  - [GSAP 3](https://gsap.com/) & [@gsap/react](https://gsap.com/docs/v3/Plugins/React/)
  - [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
  - [Lenis](https://lenis.darkroom.engineering/) (Smooth Scroll sincronizado com o ticker do GSAP sem conflitos de scroll hijacking)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Fontes:** Tipografia Google Fonts auto-hospedada (`Manrope` para títulos display e `Inter` para leitura técnica)

---

## 🧩 Componentes Reutilizáveis

| Componente | Localização | Descrição |
| :--- | :--- | :--- |
| `Header` | `src/components/Header.tsx` | Barra de navegação com transição suave on-scroll e chamada de ação. |
| `MobileMenu` | `src/components/MobileMenu.tsx` | Menu deslizante acessível com trap de foco, tecla Esc e navegação mobile. |
| `Hero` | `src/components/Hero.tsx` | Composição cinematográfica (`min-h-[100svh]`), timeline de entrada GSAP e badge Google. |
| `TrustStrip` | `src/components/TrustStrip.tsx` | Faixa com indicadores de confiança: 4.9/5 estrelas, 30 avaliações e atendimento no Porto. |
| `AboutSection` | `src/components/AboutSection.tsx` | Narrativa editorial da empresa com foto real do mestre de obras uniformizado. |
| `ServicesSection` | `src/components/ServicesSection.tsx` | Apresentação dos 6 serviços core (Remodelações, Pintura, Cozinhas, Canalização, Eletricidade, Telhados). |
| `ServiceCard` | `src/components/ServiceCard.tsx` | Card de serviço com lista de especialidades e link direto para orçamento. |
| `RealWorksGallery` | `src/components/RealWorksGallery.tsx` | Galeria editorial com filtro das fotos reais das obras no terreno. |
| `ProjectsGallery` | `src/components/ProjectsGallery.tsx` | Galeria horizontal pinned com ScrollTrigger no desktop e adaptação suave em mobile. |
| `BeforeAfterSlider` | `src/components/BeforeAfterSlider.tsx` | Comparador interativo de antes/depois com suporte a ponteiro, toque e teclado (`<input type="range">`). |
| `ProcessTimeline` | `src/components/ProcessTimeline.tsx` | Metodologia de trabalho em 4 fases claras (Contacto, Diagnóstico, Execução, Entrega). |
| `Testimonials` | `src/components/Testimonials.tsx` | Testemunhos genuínos verificados do Google (Kamilla Wild e Sam Sugo). |
| `FAQ` | `src/components/FAQ.tsx` | Acordeão de perguntas frequentes acessível com atributos `aria-expanded` e `aria-controls`. |
| `QuoteForm` | `src/components/QuoteForm.tsx` | Formulário de pedido de orçamento com validação em Português de Portugal e modo de demonstração. |
| `ContactSection` | `src/components/ContactSection.tsx` | Detalhes de contacto oficiais, telefones fixo e móvel, morada e cartão institucional. |
| `FloatingContactButton` | `src/components/FloatingContactButton.tsx` | Botão flutuante inteligente que surge após o Hero para contacto imediato. |
| `Footer` | `src/components/Footer.tsx` | Rodapé corporativo completo com mapa de navegação e termos de privacidade. |
| `SmoothScrollProvider` | `src/components/SmoothScrollProvider.tsx` | Inicialização do Lenis sincronizado com o GSAP Ticker. |
| `ScrollProgress` | `src/components/ScrollProgress.tsx` | Barra de progresso de scroll discreta no topo da página. |

---

## 📸 Fotografias Reais Integradas (`fotos/` -> `public/images/real/`)

As fotografias reais disponibilizadas foram limpas, catalogadas e integradas harmoniosamente no design:
1. `obra-1.png`: Restauro e substituição integral de telhado cerâmico tradicional no Porto com chaminé e condutas.
2. `obra-2.png`: Proteção meticulosa de soalho em madeira e preparação de superfícies para pintura premium.
3. `obra-3.png`: Reconstrução e assentamento de vigamento estrutural em madeira maciça sobre paredes mestras de pedra.
4. `obra-4.png`: Conclusão de espaço social amplo com chão de madeira nobre e divisória envidraçada arquitetónica.
5. `obra-5.png`: Cartão de visita institucional oficial da BRASPORTO com todos os dados de contacto.
6. `obra-6.png`: Fotografia do profissional qualificado da BRASPORTO com polo institucional em plena intervenção no Porto.
7. `obra-7.png`: Remodelação de cozinha contemporânea com bancada em quartzo branco, azulejos artesanais verdes e armários em carvalho.

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- Node.js 18+ (recomendado Node 20 ou 22)
- npm 9+

### Passos de Instalação
```bash
# 1. Instalar as dependências
npm install

# 2. Executar em modo de desenvolvimento
npm run dev
# Abrir http://localhost:3000 no navegador

# 3. Compilar para produção
npm run build

# 4. Iniciar o servidor de produção
npm start
```

---

## 🔒 Dados Oficiais Verificados da Empresa

Centralizados em `src/lib/data.ts`:
- **Nome Comercial:** BRASPORTO — Reparos e Remodelações
- **Telefone Móvel / Linha Direta:** `+351 934 053 064`
- **Telefone Fixo:** `+351 224 916 557`
- **Email:** `reparos@brasporto.com.pt`
- **Sede:** Rua de Alves Redol 402, 4050-042 Porto, Portugal
- **Classificação Google:** `4.9 / 5` estrelas (com base em `30 avaliações`)

---

## 📋 Lista de Confirmações Pendentes com o Cliente

1. **Canal WhatsApp:** Conforme as diretrizes, o botão direto de WhatsApp foi mantido desativado por padrão até confirmação explícita de que o número `+351 934 053 064` possui conta comercial ativa para atendimento de clientes via WhatsApp.
2. **Serviço de Envio de Email:** O formulário de contacto possui validação completa e funciona em modo demonstrativo seguro; para produção, deve ser configurada a chave de API de envio (ex.: Resend, Postmark ou SendGrid) numa variável de ambiente `RESEND_API_KEY`.
3. **Imagens de Alta Resolução Adicionais:** À medida que a empresa concluir novas obras, fotos em resolução 2K/4K podem ser adicionadas diretamente na pasta `public/images/real/` e referenciadas em `src/lib/data.ts`.

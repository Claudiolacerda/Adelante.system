# Adelante — Contabilidade Digital Inteligente

Site moderno para a Adelante Contabilidade. Stack: **Next.js 14 + TypeScript + Tailwind CSS**.

---

## 🚀 Como rodar localmente

### Pré-requisitos
- Node.js 18+ instalado ([nodejs.org](https://nodejs.org))
- npm ou yarn

### Instalação

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev
```

Acesse: **http://localhost:3000**

### Build para produção

```bash
npm run build
npm run start
```

---

## ⚙️ Configuração obrigatória

Abra o arquivo **`src/data/content.ts`** e atualize:

```ts
export const WHATSAPP_NUMBER = '5511999999999' // ← SEU NÚMERO (com DDI+DDD)
export const EMAIL = 'contato@adelante.com.br'  // ← SEU E-MAIL
export const INSTAGRAM = 'https://instagram.com/...'
export const LINKEDIN = 'https://linkedin.com/...'
```

---

## 📁 Estrutura do projeto

```
adelante/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx          ← Seção principal
│   │   │   ├── LogosRow.tsx      ← Segmentos atendidos
│   │   │   ├── ValueProps.tsx    ← Proposta de valor
│   │   │   ├── HowItWorks.tsx    ← Como funciona
│   │   │   ├── Technology.tsx    ← Plataforma / tech
│   │   │   ├── Numbers.tsx       ← Números da empresa
│   │   │   ├── Services.tsx      ← Serviços
│   │   │   ├── Testimonials.tsx  ← Depoimentos
│   │   │   └── CTAFinal.tsx      ← CTA final
│   │   ├── DashboardMockup.tsx   ← Dashboard animado
│   │   ├── Footer.tsx
│   │   ├── LeadModal.tsx         ← Formulário de lead
│   │   ├── Navbar.tsx
│   │   ├── Reveal.tsx            ← Animação scroll
│   │   └── Toast.tsx             ← Notificações
│   ├── data/
│   │   └── content.ts            ← ✅ EDITE AQUI
│   ├── hooks/
│   │   ├── useScrollReveal.ts
│   │   └── useToast.ts
│   ├── pages/
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx             ← Página principal
│   └── styles/
│       └── globals.css
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

---

## 🎨 Personalização

### Cores (globals.css)
```css
:root {
  --accent:  #00E5A0;  /* Verde principal */
  --accent2: #0066FF;  /* Azul */
  --bg:      #04060A;  /* Fundo */
}
```

### Conteúdo (src/data/content.ts)
- Todos os textos, serviços, depoimentos, stats estão centralizados neste arquivo
- Fácil de editar sem mexer nos componentes

---

## 🚢 Deploy (Vercel)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Ou conecte o repositório direto em [vercel.com](https://vercel.com).

---

## 📧 Integração de formulário

No arquivo `src/components/LeadModal.tsx`, linha com comentário `// Simulate API call`:

Substitua por uma chamada real à sua API, ex:
```ts
await fetch('/api/leads', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

Sugestões de serviços gratuitos: **Formspree**, **EmailJS**, **Resend**.

// src/data/content.ts

export const WHATSAPP_NUMBER = '5511999999999' // ← Troque pelo número real
export const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Vim pelo site da Adelante e gostaria de fazer um diagnóstico gratuito da minha empresa.'
)
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export const EMAIL = 'contato@adelante.com.br'
export const INSTAGRAM = 'https://instagram.com/adelantecontabilidade'
export const LINKEDIN = 'https://linkedin.com/company/adelante'

export const NAV_LINKS = [
  { label: 'Serviços',      href: '#servicos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Plataforma',    href: '#tecnologia' },
  { label: 'Clientes',      href: '#depoimentos' },
]

export const STATS = [
  { value: '+400', label: 'Empresas ativas' },
  { value: '10+',  label: 'Anos de mercado' },
  { value: '98%',  label: 'Satisfação' },
  { value: '24h',  label: 'Suporte dedicado' },
]

export const VALUE_CARDS = [
  {
    icon: '⚡',
    color: 'rgba(0,229,160,0.1)',
    title: 'Zero burocracia',
    desc: 'Processos digitais, assinatura eletrônica e comunicação direto com seu contador. Sem papel, sem deslocamento.',
  },
  {
    icon: '📊',
    color: 'rgba(0,102,255,0.1)',
    title: 'Visibilidade total',
    desc: 'Dashboard com DRE, balanço, obrigações fiscais e faturamento em tempo real. Sua empresa na palma da mão.',
  },
  {
    icon: '🧠',
    color: 'rgba(124,58,237,0.1)',
    title: 'Contabilidade consultiva',
    desc: 'Não somos apenas um escritório. Somos parceiros estratégicos que ajudam sua empresa a crescer.',
  },
  {
    icon: '🔒',
    color: 'rgba(255,184,0,0.1)',
    title: 'Compliance garantido',
    desc: 'Sua empresa sempre em dia com obrigações fiscais, societárias e trabalhistas — sem multas, sem surpresas.',
  },
]

export const STEPS = [
  {
    num: '01',
    title: 'Diagnóstico gratuito',
    desc: 'Conversamos sobre seu negócio, entendemos suas necessidades e indicamos o melhor enquadramento tributário.',
  },
  {
    num: '02',
    title: 'Abertura digital',
    desc: 'Cuidamos de toda a burocracia de abertura da sua empresa. Contrato social, CNPJ, inscrições estaduais e municipais.',
  },
  {
    num: '03',
    title: 'Acesso à plataforma',
    desc: 'Você recebe acesso ao painel exclusivo com todos os dados contábeis, fiscais e financeiros da sua empresa.',
  },
  {
    num: '04',
    title: 'Crescimento contínuo',
    desc: 'Reuniões de consultoria periódicas para otimizar sua carga tributária e impulsionar o crescimento do seu negócio.',
  },
]

export const TECH_FEATURES = [
  {
    icon: '📁',
    color: 'rgba(0,229,160,0.1)',
    title: 'Documentos centralizados',
    desc: 'Notas fiscais, guias, certidões e relatórios organizados e acessíveis de qualquer dispositivo.',
  },
  {
    icon: '🔔',
    color: 'rgba(0,102,255,0.1)',
    title: 'Alertas de obrigações',
    desc: 'Notificações proativas sobre vencimentos fiscais para você nunca perder um prazo.',
  },
  {
    icon: '💬',
    color: 'rgba(124,58,237,0.1)',
    title: 'Canal direto com seu contador',
    desc: 'Chat dedicado com sua equipe contábil. Respostas rápidas, comunicação eficiente.',
  },
]

export const NUMBERS = [
  { value: '+400', label: 'Empresas sob gestão' },
  { value: '10+',  label: 'Anos de experiência' },
  { value: '98%',  label: 'Clientes satisfeitos' },
  { value: '0',    label: 'Multas por atraso' },
]

export const SERVICES = [
  {
    emoji: '🏢',
    tag: 'Abertura',
    tagColor: 'rgba(0,102,255,0.1)',
    tagBorder: 'rgba(0,102,255,0.2)',
    tagText: '#4D9EFF',
    title: 'Abertura de Empresas',
    desc: 'Do contrato social ao CNPJ ativo. Abertura digital em qualquer regime tributário — MEI, ME, LTDA, SLU — com agilidade e suporte completo.',
    cta: 'Abrir empresa',
    highlight: false,
  },
  {
    emoji: '📋',
    tag: 'Contabilidade',
    tagColor: 'rgba(0,102,255,0.1)',
    tagBorder: 'rgba(0,102,255,0.2)',
    tagText: '#4D9EFF',
    title: 'Contabilidade Consultiva',
    desc: 'Muito além do básico. Análises financeiras, planejamento tributário e reuniões de consultoria para você tomar decisões com dados reais.',
    cta: 'Saiba mais',
    highlight: false,
  },
  {
    emoji: '💰',
    tag: 'BPO',
    tagColor: 'rgba(0,102,255,0.1)',
    tagBorder: 'rgba(0,102,255,0.2)',
    tagText: '#4D9EFF',
    title: 'BPO Financeiro',
    desc: 'Terceirizamos o departamento financeiro da sua empresa. Contas a pagar, receber, conciliação bancária e fluxo de caixa sob controle.',
    cta: 'Ver detalhes',
    highlight: false,
  },
  {
    emoji: '📍',
    tag: 'Fiscal',
    tagColor: 'rgba(0,102,255,0.1)',
    tagBorder: 'rgba(0,102,255,0.2)',
    tagText: '#4D9EFF',
    title: 'Domicílio Fiscal',
    desc: 'Endereço fiscal completo para profissionais digitais, nômades e empresas que operam 100% online sem sede física.',
    cta: 'Solicitar',
    highlight: false,
  },
  {
    emoji: '🔍',
    tag: 'Assessoria',
    tagColor: 'rgba(0,102,255,0.1)',
    tagBorder: 'rgba(0,102,255,0.2)',
    tagText: '#4D9EFF',
    title: 'Assessoria Contábil e Fiscal',
    desc: 'Suporte especializado em obrigações acessórias, ECF, SPED, EFD e DIRF. Sua empresa sempre em conformidade com a legislação.',
    cta: 'Consultar',
    highlight: false,
  },
  {
    emoji: '✨',
    tag: 'Novo',
    tagColor: 'rgba(0,229,160,0.1)',
    tagBorder: 'rgba(0,229,160,0.2)',
    tagText: '#00E5A0',
    title: 'Plataforma Adelante',
    desc: 'Área exclusiva do cliente com dashboard financeiro, documentos, alertas e comunicação direta com seu contador.',
    cta: 'Explorar',
    highlight: true,
  },
]

export const TESTIMONIALS = [
  {
    stars: 5,
    quote: 'Finalmente uma contabilidade que fala a mesma língua que eu. Antes ficava perdido com impostos. Hoje acesso tudo no painel e sei exatamente o que está acontecendo com minha empresa.',
    initials: 'RL',
    name: 'Rafael Lima',
    role: 'Consultor de Marketing Digital',
    gradient: 'linear-gradient(135deg,#00E5A0,#0066FF)',
  },
  {
    stars: 5,
    quote: 'A Adelante identificou uma economia de mais de R$ 2.000/mês na minha carga tributária que eu estava pagando a mais. Esse é o tipo de parceiro estratégico que todo empreendedor precisa.',
    initials: 'AC',
    name: 'Ana Costa',
    role: 'Fundadora, Escola Online',
    gradient: 'linear-gradient(135deg,#7C3AED,#0066FF)',
  },
  {
    stars: 5,
    quote: 'Abri minha empresa em menos de 5 dias e já saí com CNPJ ativo e nota fiscal habilitada. O processo foi completamente digital e sem estresse nenhum.',
    initials: 'PS',
    name: 'Pedro Santos',
    role: 'Desenvolvedor Fullstack Freelancer',
    gradient: 'linear-gradient(135deg,#FF6B35,#FFB800)',
  },
]

export const FOOTER_LINKS = {
  servicos: [
    { label: 'Abertura de Empresas',     href: '#servicos' },
    { label: 'Contabilidade Consultiva', href: '#servicos' },
    { label: 'BPO Financeiro',           href: '#servicos' },
    { label: 'Domicílio Fiscal',         href: '#servicos' },
    { label: 'Assessoria Fiscal',        href: '#servicos' },
  ],
  empresa: [
    { label: 'Sobre nós',    href: '#sobre' },
    { label: 'Nossa equipe', href: '#equipe' },
    { label: 'Blog',         href: '/blog' },
    { label: 'Contato',      href: '#contato' },
  ],
  contato: [
    { label: 'contato@adelante.com.br', href: `mailto:${EMAIL}` },
    { label: 'WhatsApp',                href: WHATSAPP_URL },
    { label: 'Área do cliente',         href: '/cliente' },
  ],
}

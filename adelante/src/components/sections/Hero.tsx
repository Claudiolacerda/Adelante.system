// src/components/sections/Hero.tsx
'use client'
import { STATS, WHATSAPP_URL } from '@/data/content'
import DashboardMockup from '@/components/DashboardMockup'

interface Props {
  onOpenModal: () => void
}

export default function Hero({ onOpenModal }: Props) {
  function scrollTo(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-[120px] pb-20 px-[5%]">
      {/* Backgrounds */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,102,255,0.2) 0%, transparent 70%),
          radial-gradient(ellipse 50% 40% at 80% 60%, rgba(0,229,160,0.1) 0%, transparent 60%),
          radial-gradient(ellipse 40% 30% at 20% 70%, rgba(124,58,237,0.08) 0%, transparent 60%)
        `,
      }}/>
      <div className="absolute inset-0 grid-bg pointer-events-none"/>

      {/* Badge */}
      <div className="animate-fade-up flex items-center gap-2 border rounded-full px-4 py-1.5 text-xs font-semibold mb-8"
        style={{
          background: 'rgba(0,229,160,0.08)',
          borderColor: 'rgba(0,229,160,0.25)',
          color: '#00E5A0',
        }}>
        <span className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] animate-pulse-dot"/>
        Mais de 400 empresas gerenciadas com inteligência
      </div>

      {/* Headline */}
      <h1 className="animate-fade-up-1 font-syne font-extrabold leading-[1.05] tracking-tight text-[#F0F4FF] mb-6"
        style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}>
        Sua empresa financeiramente<br/>
        <span className="gradient-text">inteligente, do zero.</span>
      </h1>

      {/* Sub */}
      <p className="animate-fade-up-2 text-[#A0AECA] max-w-[580px] mb-10 leading-[1.7]"
        style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)' }}>
        Contabilidade consultiva de alto nível com tecnologia de ponta.
        Gestão financeira, fiscal e societária em uma plataforma centralizada —
        sem burocracia, sem complicação.
      </p>

      {/* CTA buttons */}
      <div className="animate-fade-up-3 flex flex-col sm:flex-row items-center gap-4 mb-16 w-full justify-center">
        <button
          onClick={onOpenModal}
          className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-base text-black transition-all hover:-translate-y-0.5 cursor-pointer border-none"
          style={{ background: '#00E5A0', boxShadow: '0 0 32px rgba(0,229,160,0.35)' }}>
          Abrir minha empresa grátis
        </button>
        <button
          onClick={() => scrollTo('#como-funciona')}
          className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 rounded-xl font-medium text-base text-[#F0F4FF] border border-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.04)] transition-all cursor-pointer bg-transparent">
          Ver como funciona
        </button>
      </div>

      {/* Stats */}
      <div className="animate-fade-up-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-20">
        {STATS.map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
            {i > 0 && <div className="hidden sm:block w-px h-10 bg-[rgba(255,255,255,0.12)]"/>}
            <div className="text-center">
              <div className="font-syne font-extrabold text-[1.8rem] leading-none text-[#F0F4FF]">
                {stat.value}
              </div>
              <div className="text-xs text-[#6B7A99] mt-1">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Dashboard */}
      <DashboardMockup />
    </section>
  )
}

// src/components/sections/HowItWorks.tsx
import { STEPS } from '@/data/content'
import Reveal from '@/components/Reveal'

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 px-[5%]">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="text-center max-w-[600px] mx-auto mb-0">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#00E5A0] mb-4 section-line">
              Processo
            </div>
            <h2 className="font-syne font-extrabold leading-[1.1] tracking-tight text-[#F0F4FF] mb-5"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              Do zero à empresa<br/>funcionando em dias.
            </h2>
            <p className="text-[#A0AECA] leading-[1.7] text-base">
              Simplificamos tudo. Da abertura da empresa até a gestão financeira diária —
              em um processo fluido e totalmente digital.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-8 left-[16%] right-[16%] h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), rgba(255,255,255,0.12), transparent)' }}/>

            {STEPS.map((step, i) => (
              <div key={step.num} className="group flex flex-col items-center text-center">
                <div
                  className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center font-syne font-extrabold text-xl mb-6 transition-all duration-300 cursor-default border"
                  style={{
                    background: '#0D1220',
                    borderColor: 'rgba(255,255,255,0.12)',
                    color: '#00E5A0',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = 'rgba(0,229,160,0.1)'
                    el.style.borderColor = '#00E5A0'
                    el.style.boxShadow = '0 0 24px rgba(0,229,160,0.2)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = '#0D1220'
                    el.style.borderColor = 'rgba(255,255,255,0.12)'
                    el.style.boxShadow = 'none'
                  }}>
                  {step.num}
                </div>
                <h3 className="font-syne font-bold text-base text-[#F0F4FF] mb-2.5">{step.title}</h3>
                <p className="text-sm text-[#A0AECA] leading-[1.7]">{step.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

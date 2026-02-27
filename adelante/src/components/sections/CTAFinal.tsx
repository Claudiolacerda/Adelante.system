// src/components/sections/CTAFinal.tsx
'use client'
import { WHATSAPP_URL } from '@/data/content'
import Reveal from '@/components/Reveal'

interface Props {
  onOpenModal: () => void
}

export default function CTAFinal({ onOpenModal }: Props) {
  return (
    <section id="cta" className="py-24 px-[5%]">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="relative rounded-3xl border border-[rgba(255,255,255,0.12)] overflow-hidden text-center px-10 py-20"
            style={{ background: '#0D1220' }}>

            {/* Background glows */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: `
                radial-gradient(ellipse 60% 60% at 50% 0%, rgba(0,102,255,0.15) 0%, transparent 70%),
                radial-gradient(ellipse 40% 40% at 80% 100%, rgba(0,229,160,0.1) 0%, transparent 60%)
              `,
            }}/>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#00E5A0] mb-5 section-line">
                Pronto para começar
              </div>

              <h2 className="font-syne font-extrabold leading-[1.1] tracking-tight text-[#F0F4FF] mb-5"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Leve sua gestão financeira<br/>
                <span style={{
                  background: 'linear-gradient(135deg, #00E5A0, #0066FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  ao próximo nível.
                </span>
              </h2>

              <p className="text-[#A0AECA] text-base leading-[1.7] max-w-[460px] mx-auto mb-9">
                Converse com um consultor Adelante gratuitamente.
                Vamos entender o seu negócio e apresentar o plano ideal.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <button
                  onClick={onOpenModal}
                  className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-black border-none cursor-pointer transition-all hover:-translate-y-0.5"
                  style={{
                    background: '#00E5A0',
                    boxShadow: '0 0 32px rgba(0,229,160,0.3)',
                  }}>
                  💬 Falar com consultor
                </button>
                <button
                  onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-base text-[#F0F4FF] border border-[rgba(255,255,255,0.12)] bg-transparent cursor-pointer hover:border-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.04)] transition-all">
                  Ver todos os serviços
                </button>
              </div>

              <p className="text-xs text-[#6B7A99]">
                ✓ Diagnóstico gratuito &nbsp; ✓ Sem compromisso &nbsp; ✓ Resposta em até 24h
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

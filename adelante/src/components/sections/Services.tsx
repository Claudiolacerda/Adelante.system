// src/components/sections/Services.tsx
'use client'
import { SERVICES, WHATSAPP_NUMBER } from '@/data/content'
import Reveal from '@/components/Reveal'

interface Props {
  onOpenModal: (service?: string) => void
}

export default function Services({ onOpenModal }: Props) {
  function scrollTo(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="servicos" className="py-24 px-[5%]">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="text-center max-w-[600px] mx-auto">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#00E5A0] mb-4 section-line">
              Serviços
            </div>
            <h2 className="font-syne font-extrabold leading-[1.1] tracking-tight text-[#F0F4FF]"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              Tudo que sua empresa<br/>precisa financeiramente.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
            {SERVICES.map((svc) => (
              <div
                key={svc.title}
                className="card-hover group relative flex flex-col p-8 rounded-2xl border overflow-hidden cursor-default"
                style={{
                  background: svc.highlight
                    ? 'linear-gradient(135deg, rgba(0,229,160,0.05), rgba(0,102,255,0.05))'
                    : '#0D1220',
                  borderColor: svc.highlight ? 'rgba(0,229,160,0.2)' : 'rgba(255,255,255,0.07)',
                }}
                onMouseEnter={e => {
                  if (!svc.highlight) (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)'
                }}
                onMouseLeave={e => {
                  if (!svc.highlight) (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'
                }}>

                {/* Top line on hover */}
                {!svc.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(90deg, transparent, #00E5A0, transparent)' }}/>
                )}

                <span className="text-4xl mb-4">{svc.emoji}</span>

                <span className="inline-block text-[10px] font-semibold tracking-[0.08em] uppercase rounded px-2 py-0.5 mb-4 border w-fit"
                  style={{
                    background: svc.tagColor,
                    borderColor: svc.tagBorder,
                    color: svc.tagText,
                  }}>
                  {svc.tag}
                </span>

                <h3 className="font-syne font-bold text-base text-[#F0F4FF] mb-3">{svc.title}</h3>
                <p className="text-sm text-[#A0AECA] leading-[1.7] mb-6 flex-1">{svc.desc}</p>

                <button
                  onClick={() => {
                    if (svc.title === 'Plataforma Adelante') {
                      scrollTo('#tecnologia')
                    } else {
                      onOpenModal(svc.title)
                    }
                  }}
                  className="flex items-center gap-1.5 text-sm font-semibold text-[#00E5A0] bg-transparent border-none cursor-pointer p-0 transition-all hover:gap-3"
                >
                  {svc.cta} →
                </button>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

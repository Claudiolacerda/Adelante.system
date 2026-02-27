// src/components/sections/Testimonials.tsx
import { TESTIMONIALS } from '@/data/content'
import Reveal from '@/components/Reveal'

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 px-[5%] border-t border-b border-[rgba(255,255,255,0.07)]"
      style={{ background: '#080C14' }}>
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="text-center max-w-[600px] mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#00E5A0] mb-4 section-line">
              Depoimentos
            </div>
            <h2 className="font-syne font-extrabold leading-[1.1] tracking-tight text-[#F0F4FF]"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              Quem já levou a gestão<br/>a outro nível.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name}
                className="flex flex-col p-7 rounded-2xl border border-[rgba(255,255,255,0.07)] transition-all duration-300 card-hover"
                style={{ background: '#0D1220' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}>

                <div className="flex gap-1 mb-4 text-[#FFB800] text-sm">
                  {'★'.repeat(t.stars)}
                </div>

                <div className="font-syne font-extrabold text-3xl text-[#00E5A0] leading-none mb-2">"</div>

                <blockquote className="text-sm text-[#A0AECA] leading-[1.8] flex-1 mb-6 not-italic">
                  {t.quote}
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-syne font-bold text-sm text-black"
                    style={{ background: t.gradient }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#F0F4FF]">{t.name}</div>
                    <div className="text-xs text-[#6B7A99]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

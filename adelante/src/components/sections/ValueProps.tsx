// src/components/sections/ValueProps.tsx
import { VALUE_CARDS } from '@/data/content'
import Reveal from '@/components/Reveal'

export default function ValueProps() {
  return (
    <section className="section-pad py-24 border-t border-b border-[rgba(255,255,255,0.07)]"
      style={{ background: 'linear-gradient(180deg, #04060A 0%, #080C14 50%, #04060A 100%)' }}>
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <Reveal>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#00E5A0] mb-4 section-line">
            Por que Adelante
          </div>
          <h2 className="font-syne font-extrabold leading-[1.1] tracking-tight text-[#F0F4FF] mb-5"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Contabilidade que trabalha<br/>tão rápido quanto você.
          </h2>
          <p className="text-[#A0AECA] max-w-[540px] leading-[1.7] text-base">
            Combinamos expertise contábil de mais de 10 anos com tecnologia moderna
            para transformar a gestão financeira da sua empresa.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 mt-14 rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)]"
            style={{ background: 'rgba(255,255,255,0.07)' }}>
            {VALUE_CARDS.map((card, i) => (
              <div key={card.title}
                className="group flex flex-col p-9 transition-all duration-300 cursor-default"
                style={{ background: '#080C14' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#0D1220')}
                onMouseLeave={e => (e.currentTarget.style.background = '#080C14')}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5"
                  style={{ background: card.color }}>
                  {card.icon}
                </div>
                <h3 className="font-syne font-bold text-base text-[#F0F4FF] mb-2.5">{card.title}</h3>
                <p className="text-sm text-[#A0AECA] leading-[1.7]">{card.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

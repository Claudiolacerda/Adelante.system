// src/components/sections/Numbers.tsx
import { NUMBERS } from '@/data/content'
import Reveal from '@/components/Reveal'

export default function Numbers() {
  return (
    <section className="py-24 px-[5%] border-t border-b border-[rgba(255,255,255,0.07)]"
      style={{ background: '#080C14' }}>
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5 rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)]"
            style={{ background: 'rgba(255,255,255,0.07)' }}>
            {NUMBERS.map(n => (
              <div key={n.label} className="flex flex-col items-center justify-center py-10 px-8 text-center"
                style={{ background: '#0D1220' }}>
                <div className="font-syne font-extrabold leading-none mb-2"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                    background: 'linear-gradient(135deg, #F0F4FF 0%, #A0AECA 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                  <span style={{ color: '#00E5A0', WebkitTextFillColor: '#00E5A0' }}>
                    {n.value.replace(/[^+0-9%]/g, '') === n.value.replace(/[+0-9%]/g,'') ? '' : ''}
                  </span>
                  {n.value}
                </div>
                <div className="text-sm text-[#6B7A99]">{n.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

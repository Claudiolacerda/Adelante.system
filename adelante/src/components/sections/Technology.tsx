// src/components/sections/Technology.tsx
import { TECH_FEATURES } from '@/data/content'
import Reveal from '@/components/Reveal'

export default function Technology() {
  return (
    <section id="tecnologia" className="py-24 px-[5%] border-t border-b border-[rgba(255,255,255,0.07)]"
      style={{ background: '#080C14' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <Reveal>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#00E5A0] mb-4 section-line">
              Plataforma
            </div>
            <h2 className="font-syne font-extrabold leading-[1.1] tracking-tight text-[#F0F4FF] mb-5"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              Sua empresa inteira<br/>em um só lugar.
            </h2>
            <p className="text-[#A0AECA] max-w-[480px] leading-[1.7] text-base mb-10">
              Desenvolvemos uma área do cliente exclusiva para que você acompanhe
              tudo em tempo real, sem precisar ligar ou mandar e-mail.
            </p>

            <div className="flex flex-col gap-5">
              {TECH_FEATURES.map(feat => (
                <div key={feat.title}
                  className="flex gap-4 items-start p-5 rounded-xl border border-[rgba(255,255,255,0.07)] transition-all duration-300 cursor-default"
                  style={{ background: '#0D1220' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(0,229,160,0.3)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}>
                  <div className="w-10 h-10 flex-shrink-0 rounded-lg flex items-center justify-center text-lg"
                    style={{ background: feat.color }}>
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="font-syne font-bold text-sm text-[#F0F4FF] mb-1">{feat.title}</h4>
                    <p className="text-xs text-[#A0AECA] leading-[1.6]">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right: Client card mockup */}
          <Reveal delay={0.15}>
            <div className="relative">
              {/* Float badge top right */}
              <div className="absolute -top-5 -right-5 z-10 text-xs text-[#F0F4FF] rounded-xl border border-[rgba(255,255,255,0.12)] px-4 py-2.5 leading-[1.5]"
                style={{ background: '#111827', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
                Guia emitida ✅<br/>
                <strong className="text-[#00E5A0]">DAS Jul — R$ 4.120</strong>
              </div>

              {/* Main card */}
              <div className="rounded-2xl border border-[rgba(255,255,255,0.12)] p-7"
                style={{ background: '#0D1220', boxShadow: '0 24px 60px rgba(0,0,0,0.4)' }}>

                {/* Card header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center font-syne font-bold text-sm text-black"
                    style={{ background: 'linear-gradient(135deg,#00E5A0,#0066FF)' }}>
                    MF
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#F0F4FF]">Marina Ferreira</div>
                    <div className="text-xs text-[#6B7A99]">Consultora Digital · MEI → PJ</div>
                  </div>
                  <div className="ml-auto text-[10px] font-medium rounded-full px-2.5 py-1 border"
                    style={{
                      background: 'rgba(0,229,160,0.08)',
                      borderColor: 'rgba(0,229,160,0.25)',
                      color: '#00E5A0',
                    }}>
                    ● Ativo
                  </div>
                </div>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: 'Regime tributário', val: 'Simples Nacional', accent: true },
                    { label: 'Alíquota efetiva', val: '4,8%', accent: false },
                    { label: 'Certidão Negativa', val: 'Válida ✓', accent: true },
                    { label: 'Próx. vencimento', val: '20/08', accent: false },
                  ].map(m => (
                    <div key={m.label} className="rounded-lg border border-[rgba(255,255,255,0.07)] p-3.5"
                      style={{ background: '#080C14' }}>
                      <div className="text-[10px] text-[#6B7A99]">{m.label}</div>
                      <div className="font-syne font-bold mt-1 text-sm"
                        style={{ color: m.accent ? '#00E5A0' : '#F0F4FF' }}>
                        {m.val}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Notification */}
                <div className="flex items-center gap-3 rounded-lg px-4 py-3 border text-xs text-[#A0AECA]"
                  style={{
                    background: 'rgba(0,229,160,0.04)',
                    borderColor: 'rgba(0,229,160,0.15)',
                  }}>
                  <span>⚡</span>
                  DEFIS 2025 enviada automaticamente pela equipe Adelante.
                </div>
              </div>

              {/* Float badge bottom left */}
              <div className="absolute -bottom-5 -left-5 z-10 text-xs text-[#F0F4FF] rounded-xl border border-[rgba(255,255,255,0.12)] px-4 py-2.5 leading-[1.5]"
                style={{ background: '#111827', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
                Economia tributária identificada<br/>
                <strong className="text-[#00E5A0]">R$ 1.840/mês</strong>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}

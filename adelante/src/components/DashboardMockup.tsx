// src/components/DashboardMockup.tsx
'use client'

const bars = [
  { height: '45%', active: false },
  { height: '58%', active: false },
  { height: '52%', active: false },
  { height: '70%', active: false },
  { height: '65%', active: false },
  { height: '88%', active: true },
]

const navItems = [
  { label: 'Dashboard',       active: true },
  { label: 'DRE & Balanço',   active: false },
  { label: 'Obrigações',      active: false },
  { label: 'Documentos',      active: false },
  { label: 'Suporte',         active: false },
]

export default function DashboardMockup() {
  return (
    <div className="relative w-full max-w-[900px] mx-auto animate-fade-up-5">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,102,255,0.2) 0%, transparent 70%)',
      }}/>

      {/* Window */}
      <div className="relative rounded-[20px] overflow-hidden border border-[rgba(255,255,255,0.12)]"
        style={{
          background: '#0D1220',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(0,102,255,0.1)',
        }}>

        {/* Traffic lights */}
        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[rgba(255,255,255,0.07)]"
          style={{ background: '#111827' }}>
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"/>
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"/>
          <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41]"/>
          <div className="flex-1 flex justify-center">
            <div className="bg-[#0D1220] rounded-md px-4 py-1 text-xs text-[#6B7A99] border border-[rgba(255,255,255,0.07)]">
              app.adelante.com.br/dashboard
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex" style={{ minHeight: 380 }}>
          {/* Sidebar */}
          <div className="hidden md:flex flex-col w-[220px] border-r border-[rgba(255,255,255,0.07)] p-4"
            style={{ background: '#080C14' }}>
            <div className="font-syne font-bold text-sm text-[#F0F4FF] px-2 py-2 mb-4">
              Adelante <span style={{ color: '#00E5A0' }}>✦</span>
            </div>
            {navItems.map(item => (
              <div key={item.label}
                className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs mb-0.5 cursor-default"
                style={{
                  background: item.active ? 'rgba(0,229,160,0.1)' : 'transparent',
                  color: item.active ? '#00E5A0' : '#6B7A99',
                }}>
                <div className="w-3.5 h-3.5 rounded-sm flex-shrink-0"
                  style={{ background: 'currentColor', opacity: 0.6 }}/>
                {item.label}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 p-6 flex flex-col gap-5">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <div className="font-syne font-bold text-sm text-[#F0F4FF]">Visão Geral — Jul 2025</div>
                <div className="text-xs text-[#6B7A99] mt-0.5">Empresa: Acme Digital Ltda.</div>
              </div>
              <div className="text-xs text-[#6B7A99] border border-[rgba(255,255,255,0.07)] rounded-md px-3 py-1.5">
                Este mês ▼
              </div>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Faturamento', value: 'R$ 82.400', badge: '▲ 18%', badgeOk: true },
                { label: 'Impostos estimados', value: 'R$ 4.120', badge: 'Simples Nacional', badgeOk: true },
                { label: 'Próx. obrigação', value: '20/07', badge: 'DAS em dia ✓', badgeOk: true },
              ].map(kpi => (
                <div key={kpi.label} className="rounded-xl border border-[rgba(255,255,255,0.07)] p-3.5"
                  style={{ background: '#080C14' }}>
                  <div className="text-[10px] text-[#6B7A99] mb-1.5">{kpi.label}</div>
                  <div className="font-syne font-bold text-base text-[#F0F4FF]">{kpi.value}</div>
                  <div className="inline-block text-[10px] font-semibold mt-1 px-1.5 py-0.5 rounded"
                    style={{
                      background: 'rgba(0,229,160,0.15)',
                      color: '#00E5A0',
                    }}>
                    {kpi.badge}
                  </div>
                </div>
              ))}
            </div>

            {/* Mini Chart */}
            <div className="rounded-xl border border-[rgba(255,255,255,0.07)] p-4"
              style={{ background: '#080C14' }}>
              <div className="text-[10px] text-[#6B7A99] mb-3">Faturamento — últimos 6 meses</div>
              <div className="flex items-end gap-1.5 h-[60px]">
                {bars.map((bar, i) => (
                  <div key={i} className="flex-1 rounded-t-sm"
                    style={{
                      height: bar.height,
                      background: bar.active
                        ? 'linear-gradient(to top, #0066FF, #00E5A0)'
                        : '#1a2235',
                    }}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

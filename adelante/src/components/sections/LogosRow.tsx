// src/components/sections/LogosRow.tsx
const SEGMENTS = [
  'Consultores', 'Infoprodutores', 'E-commerce',
  'Freelancers', 'SaaS & Startups', 'Prestadores de Serviço',
]

export default function LogosRow() {
  return (
    <div className="max-w-[1200px] mx-auto px-[5%]">
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-10 border-t border-b border-[rgba(255,255,255,0.07)]">
        <span className="text-xs text-[#6B7A99] tracking-widest uppercase mr-2 hidden md:block whitespace-nowrap">
          Atendemos
        </span>
        {SEGMENTS.map(s => (
          <span key={s}
            className="text-[0.8rem] font-semibold tracking-wider uppercase text-[#6B7A99] opacity-50 hover:opacity-90 transition-opacity cursor-default"
            style={{ fontFamily: 'Syne, sans-serif' }}>
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

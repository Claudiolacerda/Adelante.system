// src/components/Footer.tsx
import { FOOTER_LINKS, WHATSAPP_URL, EMAIL, INSTAGRAM, LINKEDIN } from '@/data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[rgba(255,255,255,0.07)] pt-16 pb-10 px-[5%]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 font-syne font-extrabold text-[1.1rem] text-[#F0F4FF] mb-4">
              <div className="w-8 h-8 rounded-[8px] flex items-center justify-center font-extrabold text-sm text-black"
                style={{ background: 'linear-gradient(135deg, #00E5A0, #0066FF)' }}>
                A
              </div>
              Adelante
            </div>
            <p className="text-sm text-[#6B7A99] leading-[1.7] mb-6 max-w-[260px]">
              Contabilidade digital inteligente para empresas modernas.
              Mais de 10 anos transformando a gestão financeira de empreendedores.
            </p>
            <div className="flex gap-3">
              {[
                { label: 'in', href: LINKEDIN },
                { label: 'ig', href: INSTAGRAM },
                { label: '💬', href: WHATSAPP_URL },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-semibold border border-[rgba(255,255,255,0.1)] text-[#6B7A99] hover:text-[#F0F4FF] hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.04)] transition-all no-underline">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-xs font-semibold tracking-[0.08em] uppercase text-[#A0AECA] mb-4">Serviços</h5>
            <ul className="list-none flex flex-col gap-2.5">
              {FOOTER_LINKS.servicos.map(l => (
                <li key={l.label}>
                  <a href={l.href}
                    onClick={e => { e.preventDefault(); document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' }) }}
                    className="text-sm text-[#6B7A99] hover:text-[#F0F4FF] transition-colors cursor-pointer no-underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-xs font-semibold tracking-[0.08em] uppercase text-[#A0AECA] mb-4">Empresa</h5>
            <ul className="list-none flex flex-col gap-2.5">
              {FOOTER_LINKS.empresa.map(l => (
                <li key={l.label}>
                  <a href={l.href}
                    className="text-sm text-[#6B7A99] hover:text-[#F0F4FF] transition-colors no-underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-xs font-semibold tracking-[0.08em] uppercase text-[#A0AECA] mb-4">Contato</h5>
            <ul className="list-none flex flex-col gap-2.5">
              {FOOTER_LINKS.contato.map(l => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-[#6B7A99] hover:text-[#F0F4FF] transition-colors no-underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[rgba(255,255,255,0.07)]">
          <p className="text-xs text-[#6B7A99]">
            © {year} Adelante Contabilidade e Finanças. CNPJ 00.000.000/0001-00. CRC SP.
          </p>
          <div className="flex gap-6">
            {['Privacidade', 'Termos de uso', 'Cookies'].map(label => (
              <a key={label} href="#"
                className="text-xs text-[#6B7A99] hover:text-[#F0F4FF] transition-colors no-underline">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

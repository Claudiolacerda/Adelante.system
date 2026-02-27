// src/components/Navbar.tsx
'use client'
import { useState, useEffect } from 'react'
import { NAV_LINKS, WHATSAPP_URL } from '@/data/content'

interface Props {
  onOpenModal: () => void
}

export default function Navbar({ onOpenModal }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleNavClick(href: string) {
    setMenuOpen(false)
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[5%] transition-all duration-300"
        style={{
          height: 68,
          background: scrolled ? 'rgba(4,6,10,0.92)' : 'rgba(4,6,10,0.7)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {/* Logo */}
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 font-syne font-extrabold text-[1.15rem] text-[#F0F4FF] no-underline">
          <div className="w-8 h-8 rounded-[8px] flex items-center justify-center font-extrabold text-sm text-black"
            style={{ background: 'linear-gradient(135deg, #00E5A0, #0066FF)' }}>
            A
          </div>
          Adelante
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-[#6B7A99] hover:text-[#F0F4FF] text-sm font-medium transition-colors bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#A0AECA] border border-[rgba(255,255,255,0.12)] hover:text-[#F0F4FF] hover:border-[rgba(255,255,255,0.22)] transition-all no-underline">
            💬 WhatsApp
          </a>
          <button
            onClick={onOpenModal}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-black cursor-pointer border-none transition-all hover:-translate-y-px"
            style={{ background: '#00E5A0', boxShadow: '0 0 24px rgba(0,229,160,0.3)' }}>
            Começar agora →
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className="block w-5 h-0.5 bg-[#A0AECA] transition-all" style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : '' }}/>
          <span className="block w-5 h-0.5 bg-[#A0AECA] transition-all" style={{ opacity: menuOpen ? 0 : 1 }}/>
          <span className="block w-5 h-0.5 bg-[#A0AECA] transition-all" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : '' }}/>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="mobile-menu fixed top-[68px] left-0 right-0 z-[90] border-b border-[rgba(255,255,255,0.07)]"
          style={{ background: 'rgba(4,6,10,0.97)', backdropFilter: 'blur(20px)' }}
        >
          <div className="flex flex-col px-6 py-4 gap-1">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-3 text-[#A0AECA] hover:text-[#F0F4FF] text-base font-medium border-b border-[rgba(255,255,255,0.05)] last:border-0 bg-transparent border-none cursor-pointer transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="flex flex-col gap-3 mt-4 pb-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="text-center py-3 rounded-xl text-sm font-medium text-[#F0F4FF] border border-[rgba(255,255,255,0.12)] no-underline">
                💬 WhatsApp
              </a>
              <button onClick={() => { setMenuOpen(false); onOpenModal() }}
                className="py-3 rounded-xl text-sm font-semibold text-black border-none cursor-pointer"
                style={{ background: '#00E5A0' }}>
                Começar agora →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

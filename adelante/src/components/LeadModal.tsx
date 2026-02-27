// src/components/LeadModal.tsx
'use client'
import { useState } from 'react'
import { WHATSAPP_URL, WHATSAPP_NUMBER } from '@/data/content'

interface Props {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  service?: string
}

const SERVICES = [
  'Abertura de Empresa',
  'Contabilidade Consultiva',
  'BPO Financeiro',
  'Domicílio Fiscal',
  'Assessoria Contábil e Fiscal',
  'Plataforma Adelante',
  'Outro',
]

export default function LeadModal({ isOpen, onClose, onSuccess, service }: Props) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: service || '', message: '' })
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState<'form' | 'success'>('form')

  if (!isOpen) return null

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setLoading(true)

    // Simulate API call (replace with real endpoint)
    await new Promise(r => setTimeout(r, 1200))

    setLoading(false)
    setStep('success')
  }

  function handleWhatsApp() {
    const msg = encodeURIComponent(
      `Olá! Me chamo ${form.name || 'Cliente'} e tenho interesse em: ${form.service || 'serviços da Adelante'}. Gostaria de um diagnóstico gratuito!`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
    onSuccess()
    onClose()
  }

  function handleClose() {
    if (step === 'success') onSuccess()
    onClose()
    setTimeout(() => { setStep('form'); setForm({ name:'', email:'', phone:'', company:'', service: service||'', message:'' }) }, 300)
  }

  return (
    <div
      className="modal-backdrop fixed inset-0 z-[900] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
    >
      <div
        className="w-full max-w-lg rounded-2xl border border-[rgba(255,255,255,0.12)] shadow-2xl overflow-hidden"
        style={{ background: '#0D1220', animation: 'modalIn 0.3s ease both' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(255,255,255,0.07)]">
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#00E5A0] mb-1">
              Diagnóstico Gratuito
            </div>
            <h3 className="font-syne font-bold text-lg text-[#F0F4FF]">Fale com um consultor</h3>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-lg border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#6B7A99] hover:text-[#F0F4FF] hover:border-[rgba(255,255,255,0.2)] transition-all"
          >✕</button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="px-6 py-6 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#A0AECA]">Nome *</label>
                <input name="name" value={form.name} onChange={handleChange} required
                  placeholder="Seu nome" className="input-field" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#A0AECA]">WhatsApp *</label>
                <input name="phone" value={form.phone} onChange={handleChange} required
                  placeholder="(11) 99999-9999" className="input-field" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-[#A0AECA]">E-mail</label>
              <input name="email" type="email" value={form.email} onChange={handleChange}
                placeholder="seu@email.com" className="input-field" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-[#A0AECA]">Empresa (opcional)</label>
              <input name="company" value={form.company} onChange={handleChange}
                placeholder="Nome da sua empresa ou CNPJ" className="input-field" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-[#A0AECA]">Interesse</label>
              <select name="service" value={form.service} onChange={handleChange} className="input-field">
                <option value="">Selecione um serviço</option>
                {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-[#A0AECA]">Mensagem (opcional)</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                placeholder="Conte um pouco sobre seu negócio..."
                className="input-field resize-none" />
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <button type="submit" disabled={loading}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-black transition-all"
                style={{ background: '#00E5A0', boxShadow: '0 0 24px rgba(0,229,160,0.25)', opacity: loading ? 0.7 : 1 }}>
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Enviando...
                  </span>
                ) : '→ Solicitar diagnóstico gratuito'}
              </button>

              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]"/>
                <span className="text-xs text-[#6B7A99]">ou</span>
                <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]"/>
              </div>

              <button type="button" onClick={handleWhatsApp}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium text-sm border border-[rgba(255,255,255,0.1)] text-[#F0F4FF] hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.04)] transition-all">
                <span>💬</span> Falar direto no WhatsApp
              </button>
            </div>

            <p className="text-center text-xs text-[#6B7A99]">
              ✓ Sem compromisso &nbsp; ✓ Resposta em até 24h &nbsp; ✓ 100% gratuito
            </p>
          </form>
        ) : (
          <div className="px-6 py-12 flex flex-col items-center text-center gap-4">
            <div className="text-5xl mb-2">🎉</div>
            <h3 className="font-syne font-bold text-xl text-[#F0F4FF]">Mensagem enviada!</h3>
            <p className="text-sm text-[#A0AECA] max-w-xs">
              Nosso time entrará em contato em breve. Fique de olho no seu WhatsApp!
            </p>
            <button onClick={handleWhatsApp}
              className="mt-4 flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-black text-sm"
              style={{ background: '#00E5A0' }}>
              💬 Chamar agora no WhatsApp
            </button>
            <button onClick={handleClose} className="text-sm text-[#6B7A99] hover:text-[#A0AECA] transition-colors">
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

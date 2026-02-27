// src/pages/index.tsx
'use client'
import { useState, useCallback } from 'react'
import Head from 'next/head'

import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import LogosRow from '@/components/sections/LogosRow'
import ValueProps from '@/components/sections/ValueProps'
import HowItWorks from '@/components/sections/HowItWorks'
import Technology from '@/components/sections/Technology'
import Numbers from '@/components/sections/Numbers'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import CTAFinal from '@/components/sections/CTAFinal'
import Footer from '@/components/Footer'
import LeadModal from '@/components/LeadModal'
import ToastContainer from '@/components/Toast'
import { useToast } from '@/hooks/useToast'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalService, setModalService] = useState<string | undefined>()
  const { toasts, addToast, removeToast } = useToast()

  const openModal = useCallback((service?: string) => {
    setModalService(service)
    setModalOpen(true)
  }, [])

  const closeModal = useCallback(() => setModalOpen(false), [])

  const handleSuccess = useCallback(() => {
    addToast('Mensagem enviada! Entraremos em contato em breve. 🎉', 'success')
  }, [addToast])

  return (
    <>
      <Head>
        <title>Adelante — Contabilidade Digital Inteligente</title>
        <meta name="description"
          content="Contabilidade consultiva de alto nível com tecnologia de ponta. Gestão financeira, fiscal e societária para empresas modernas. Mais de 400 empresas atendidas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Adelante — Contabilidade Digital Inteligente" />
        <meta property="og:description"
          content="Abertura de empresas, contabilidade consultiva, BPO financeiro e domicílio fiscal para empreendedores modernos." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar onOpenModal={() => openModal()} />

      <main>
        <Hero onOpenModal={() => openModal()} />
        <LogosRow />
        <ValueProps />
        <HowItWorks />
        <Technology />
        <Numbers />
        <Services onOpenModal={openModal} />
        <Testimonials />
        <CTAFinal onOpenModal={() => openModal()} />
      </main>

      <Footer />

      <LeadModal
        isOpen={modalOpen}
        onClose={closeModal}
        onSuccess={handleSuccess}
        service={modalService}
      />

      <ToastContainer toasts={toasts} remove={removeToast} />
    </>
  )
}

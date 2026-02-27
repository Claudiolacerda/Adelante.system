// src/components/Reveal.tsx
'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { CSSProperties } from 'react'

interface Props {
  children: React.ReactNode
  delay?: number
  className?: string
  style?: CSSProperties
}

export default function Reveal({ children, delay = 0, className = '', style }: Props) {
  const { ref, visible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.65s ${delay}s ease, transform 0.65s ${delay}s ease`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

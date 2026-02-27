// src/components/Toast.tsx
'use client'
import { Toast as ToastType } from '@/hooks/useToast'

interface Props {
  toasts: ToastType[]
  remove: (id: number) => void
}

const icons = { success: '✅', error: '❌', info: 'ℹ️' }
const colors = {
  success: 'border-[rgba(0,229,160,0.3)] bg-[rgba(0,229,160,0.08)]',
  error:   'border-[rgba(255,80,80,0.3)]  bg-[rgba(255,80,80,0.08)]',
  info:    'border-[rgba(0,102,255,0.3)]  bg-[rgba(0,102,255,0.08)]',
}

export default function ToastContainer({ toasts, remove }: Props) {
  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-3 pointer-events-none">
      {toasts.map(t => (
        <div
          key={t.id}
          className={`toast-enter pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium text-[#F0F4FF] shadow-2xl ${colors[t.type]}`}
          style={{ backdropFilter: 'blur(12px)' }}
          onClick={() => remove(t.id)}
        >
          <span>{icons[t.type]}</span>
          <span>{t.message}</span>
        </div>
      ))}
    </div>
  )
}

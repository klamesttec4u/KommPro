import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

export type FeedbackTone = 'success' | 'error' | 'warning' | 'info'

interface FeedbackPanelProps {
  tone: FeedbackTone
  title: string
  children?: ReactNode
}

const toneClasses: Record<FeedbackTone, string> = {
  success:
    'border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200',
  error:
    'border-red-300 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950/50 dark:text-red-200',
  warning:
    'border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-200',
  info: 'border-brand-300 bg-brand-50 text-brand-900 dark:border-brand-800 dark:bg-brand-950/50 dark:text-brand-200',
}

/** Colored callout used for exercise feedback and hints. Announced to assistive tech. */
export function FeedbackPanel({ tone, title, children }: FeedbackPanelProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn('rounded-lg border p-4', toneClasses[tone])}
    >
      <p className="font-semibold">{title}</p>
      {children && <div className="mt-1 text-sm leading-relaxed">{children}</div>}
    </div>
  )
}

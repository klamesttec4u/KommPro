import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

export type FeedbackTone = 'success' | 'error' | 'warning' | 'info'

interface FeedbackPanelProps {
  tone: FeedbackTone
  title: string
  children?: ReactNode
}

// Same left-rule shape as the before/after examples in the theory, so
// "good / critical" always looks the same across the app
const toneClasses: Record<FeedbackTone, { box: string; title: string }> = {
  success: {
    box: 'border-good bg-good-soft dark:border-emerald-500 dark:bg-emerald-950/30',
    title: 'text-good dark:text-emerald-300',
  },
  error: {
    box: 'border-bad bg-bad-soft dark:border-red-400 dark:bg-red-950/30',
    title: 'text-bad dark:text-red-300',
  },
  warning: {
    box: 'border-amber-500 bg-amber-50 dark:border-amber-500 dark:bg-amber-950/30',
    title: 'text-amber-800 dark:text-amber-300',
  },
  info: {
    box: 'border-brand-600 bg-brand-50 dark:border-brand-400 dark:bg-brand-950/40',
    title: 'text-brand-800 dark:text-brand-200',
  },
}

/** Colored callout used for exercise feedback and hints. Announced to assistive tech. */
export function FeedbackPanel({ tone, title, children }: FeedbackPanelProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn('rounded-r-lg border-l-4 px-5 py-4', toneClasses[tone].box)}
    >
      <p className={cn('font-semibold', toneClasses[tone].title)}>{title}</p>
      {children && (
        <div className="mt-1.5 leading-relaxed text-ink dark:text-slate-100">{children}</div>
      )}
    </div>
  )
}

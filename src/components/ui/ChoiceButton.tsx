import type { ButtonHTMLAttributes } from 'react'

import { CheckIcon, MinusIcon, XIcon } from '@/components/ui/icons'
import { cn } from '@/lib/cn'

/**
 * idle: not answered yet. best/ok/bad: revealed rating of this option.
 * muted: answered, but this option is neither picked nor the best one.
 */
export type ChoiceState = 'idle' | 'best' | 'ok' | 'bad' | 'muted'

interface ChoiceButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  state: ChoiceState
  /** The learner picked this option */
  selected?: boolean
}

const stateClasses: Record<ChoiceState, string> = {
  idle: 'cursor-pointer border-slate-300 bg-white hover:border-brand-500 hover:bg-brand-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-brand-400 dark:hover:bg-brand-950/40',
  best: 'border-good bg-good-soft dark:border-emerald-500 dark:bg-emerald-950/30',
  ok: 'border-amber-500 bg-amber-50 dark:border-amber-500 dark:bg-amber-950/30',
  bad: 'border-bad bg-bad-soft dark:border-red-400 dark:bg-red-950/30',
  muted:
    'border-slate-200 bg-white text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400',
}

const markerClasses: Record<ChoiceState, string> = {
  idle: 'border border-slate-300 group-hover:border-brand-500 dark:border-slate-600',
  best: 'bg-good text-white dark:bg-emerald-500 dark:text-slate-950',
  ok: 'bg-amber-500 text-white dark:text-slate-950',
  bad: 'bg-bad text-white dark:bg-red-400 dark:text-slate-950',
  muted: 'border border-slate-200 dark:border-slate-700',
}

const srLabels: Partial<Record<ChoiceState, string>> = {
  best: 'Beste Antwort',
  ok: 'Teilweise richtig',
  bad: 'Ungünstig',
}

/** Full-width answer option used by quiz and scenario exercises. */
export function ChoiceButton({
  state,
  selected = false,
  className,
  children,
  ...props
}: ChoiceButtonProps) {
  const isAnswered = state !== 'idle'
  const srLabel = srLabels[state]
  return (
    <button
      type="button"
      // Once answered, the button stops being interactive but stays focusable for AT
      aria-disabled={isAnswered}
      className={cn(
        'group flex w-full items-start gap-3 rounded-lg border px-4 py-3.5 text-left text-base leading-relaxed transition-colors outline-brand-500 focus-visible:outline-2 focus-visible:outline-offset-2',
        stateClasses[state],
        className,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn(
          'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
          markerClasses[state],
        )}
      >
        {state === 'best' && <CheckIcon className="h-3.5 w-3.5" />}
        {state === 'ok' && <MinusIcon className="h-3.5 w-3.5" />}
        {state === 'bad' && <XIcon className="h-3.5 w-3.5" />}
      </span>
      <span className="flex-1">
        {children}
        {srLabel && (
          <span className="sr-only">
            : {srLabel}
            {selected ? ', deine Wahl' : ''}
          </span>
        )}
      </span>
      {selected && (
        <span className="shrink-0 self-center text-xs font-semibold text-slate-600 dark:text-slate-300">
          Deine Wahl
        </span>
      )}
    </button>
  )
}

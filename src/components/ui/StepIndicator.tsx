import { CheckIcon } from '@/components/ui/icons'
import { cn } from '@/lib/cn'

interface StepIndicatorProps {
  steps: string[]
  /** Index of the step the learner is on */
  current: number
}

/** Numbered step trail for a fixed sequence (e.g. read, practice, wrap up). */
export function StepIndicator({ steps, current }: StepIndicatorProps) {
  return (
    <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
      {steps.map((step, index) => {
        const isDone = index < current
        const isCurrent = index === current
        return (
          <li
            key={step}
            aria-current={isCurrent ? 'step' : undefined}
            className="flex items-center gap-3"
          >
            {index > 0 && (
              <span
                aria-hidden="true"
                className={cn(
                  'h-px w-6 sm:w-10',
                  isDone || isCurrent
                    ? 'bg-brand-600 dark:bg-brand-400'
                    : 'bg-slate-300 dark:bg-slate-700',
                )}
              />
            )}
            <span className="flex items-center gap-2">
              <span
                className={cn(
                  'flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold tabular-nums',
                  isDone && 'bg-brand-600 text-white dark:bg-brand-400 dark:text-brand-950',
                  isCurrent && 'bg-ink text-white dark:bg-white dark:text-ink',
                  !isDone &&
                    !isCurrent &&
                    'border border-slate-300 text-slate-500 dark:border-slate-600 dark:text-slate-400',
                )}
              >
                {isDone ? <CheckIcon className="h-3.5 w-3.5" /> : index + 1}
              </span>
              <span
                className={cn(
                  isCurrent
                    ? 'font-semibold text-ink dark:text-white'
                    : 'text-slate-500 dark:text-slate-400',
                )}
              >
                {step}
              </span>
            </span>
          </li>
        )
      })}
    </ol>
  )
}

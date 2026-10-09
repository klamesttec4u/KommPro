import type { ButtonHTMLAttributes } from 'react'

import { cn } from '@/lib/cn'

interface ChoiceButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Once answered, the button stops being interactive but stays focusable for AT. */
  answered: boolean
}

/** Full-width answer option used by quiz and scenario exercises. */
export function ChoiceButton({ answered, className, ...props }: ChoiceButtonProps) {
  return (
    <button
      type="button"
      aria-disabled={answered}
      className={cn(
        'w-full rounded-lg border px-4 py-3 text-left text-sm transition-colors',
        !answered &&
          'cursor-pointer border-slate-300 hover:border-brand-400 hover:bg-brand-50 dark:border-slate-700 dark:hover:border-brand-600 dark:hover:bg-brand-950/40',
        className,
      )}
      {...props}
    />
  )
}

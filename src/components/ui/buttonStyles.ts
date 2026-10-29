import { cn } from '@/lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'inverse'
export type ButtonSize = 'md' | 'sm'

// Each variant sets its own focus-outline color, so it stays visible on its background
const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-600 text-white outline-brand-500 hover:bg-brand-700 disabled:bg-slate-300 disabled:text-slate-500 dark:bg-brand-400 dark:text-brand-950 dark:hover:bg-brand-300 dark:disabled:bg-slate-700 dark:disabled:text-slate-400',
  secondary:
    'border border-slate-300 bg-white text-slate-700 outline-brand-500 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700',
  ghost:
    'text-slate-600 outline-brand-500 hover:bg-slate-200/70 dark:text-slate-300 dark:hover:bg-slate-800',
  /** For use on petrol surfaces */
  inverse: 'bg-white text-brand-800 outline-white hover:bg-brand-50',
}

const sizeClasses: Record<ButtonSize, string> = {
  md: 'px-4 py-2.5 text-[0.9375rem]',
  sm: 'px-3 py-1.5 text-sm',
}

/** Shared by Button and ButtonLink so links can look identical to buttons. */
export function buttonClasses(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  className?: string,
): string {
  return cn(
    'inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )
}

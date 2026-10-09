import { cn } from '@/lib/cn'

interface ProgressBarProps {
  /** 0..100 */
  percent: number
  className?: string
}

export function ProgressBar({ percent, className }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, percent))
  return (
    <div
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn(
        'h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800',
        className,
      )}
    >
      <div
        className="h-full rounded-full bg-brand-600 transition-[width] duration-500 dark:bg-brand-500"
        style={{ width: `${clamped}%` }}
      />
    </div>
  )
}

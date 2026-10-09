import { cn } from '@/lib/cn'
import { formatTime } from '@/lib/formatTime'

interface TimerDisplayProps {
  remainingSeconds: number
  totalSeconds: number
}

/** Big countdown readout that shifts green -> amber -> red as time runs out. */
export function TimerDisplay({ remainingSeconds, totalSeconds }: TimerDisplayProps) {
  const fraction = totalSeconds === 0 ? 0 : remainingSeconds / totalSeconds
  return (
    <p
      className={cn(
        'text-center font-mono text-6xl font-bold tabular-nums transition-colors sm:text-7xl',
        fraction > 0.5 && 'text-emerald-600 dark:text-emerald-400',
        fraction <= 0.5 && fraction > 0.2 && 'text-amber-600 dark:text-amber-400',
        fraction <= 0.2 && 'text-red-600 dark:text-red-400',
      )}
    >
      {formatTime(remainingSeconds)}
    </p>
  )
}

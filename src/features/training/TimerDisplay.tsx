import { cn } from '@/lib/cn'
import { formatTime } from '@/lib/formatTime'

interface TimerDisplayProps {
  remainingSeconds: number
  totalSeconds: number
}

/** Big countdown readout that shifts petrol -> amber -> red as time runs out. */
export function TimerDisplay({ remainingSeconds, totalSeconds }: TimerDisplayProps) {
  const fraction = totalSeconds === 0 ? 0 : remainingSeconds / totalSeconds
  return (
    <p
      role="timer"
      className={cn(
        'text-center text-7xl font-bold tracking-tight tabular-nums transition-colors sm:text-8xl',
        fraction > 0.5 && 'text-brand-700 dark:text-brand-300',
        fraction <= 0.5 && fraction > 0.2 && 'text-amber-600 dark:text-amber-400',
        fraction <= 0.2 && 'text-bad dark:text-red-400',
      )}
    >
      {formatTime(remainingSeconds)}
    </p>
  )
}

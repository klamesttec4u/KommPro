import { cn } from '@/lib/cn'

interface LessonSegmentsProps {
  /** One entry per lesson in order: true when that lesson is completed */
  completed: boolean[]
  className?: string
}

/** One short bar per lesson, so progress reads as "which lessons", not just "how much". */
export function LessonSegments({ completed, className }: LessonSegmentsProps) {
  const doneCount = completed.filter(Boolean).length
  return (
    <span
      role="img"
      aria-label={`${doneCount} von ${completed.length} Lektionen abgeschlossen`}
      className={cn('flex gap-1', className)}
    >
      {completed.map((isDone, index) => (
        <span
          key={index}
          className={cn(
            'h-1.5 w-5 rounded-full',
            isDone ? 'bg-brand-600 dark:bg-brand-400' : 'bg-slate-200 dark:bg-slate-700',
          )}
        />
      ))}
    </span>
  )
}

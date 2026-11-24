import { Button } from '@/components/ui/Button'
import { CheckCircleIcon, RotateCcwIcon } from '@/components/ui/icons'
import type { InterviewQuestion } from '@/types/content'

import { isSecure } from './interviewSession'

interface InterviewSummaryProps {
  questions: InterviewQuestion[]
  /** Self-assessment per question id from this round (0..1) */
  scores: Record<string, number>
  onRepeat: (questions: InterviewQuestion[]) => void
  onRestart: () => void
}

/** End of a round: what sat, what did not, and a direct way to repeat the weak answers. */
export function InterviewSummary({
  questions,
  scores,
  onRepeat,
  onRestart,
}: InterviewSummaryProps) {
  const weak = questions.filter((question) => !isSecure(scores[question.id]))
  const secureCount = questions.length - weak.length

  return (
    <div className="space-y-5 py-2">
      <div className="text-center">
        <CheckCircleIcon className="mx-auto h-12 w-12 text-good dark:text-emerald-400" />
        <p className="mt-3 text-xl font-bold">
          {secureCount} von {questions.length} Antworten sitzen
        </p>
        <p className="mx-auto mt-1 max-w-[52ch] text-slate-600 dark:text-slate-400">
          {weak.length === 0
            ? 'Starke Runde. Halte den Stand, indem du bis zum Gespräch einmal täglich ein gemischtes Interview machst.'
            : 'Die folgenden Antworten brauchen noch eine Runde. Wiederhole sie gleich, solange du weißt, was gefehlt hat.'}
        </p>
      </div>

      {weak.length > 0 && (
        <ul className="divide-y divide-slate-200 rounded-lg border border-slate-200 dark:divide-slate-700 dark:border-slate-700">
          {weak.map((question) => (
            <li key={question.id} className="flex items-baseline justify-between gap-4 px-4 py-3">
              <span className="font-serif leading-snug">„{question.question}“</span>
              <span className="shrink-0 text-sm text-slate-500 tabular-nums dark:text-slate-400">
                {Math.round((scores[question.id] ?? 0) * 100)} %
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap justify-center gap-3">
        {weak.length > 0 && (
          <Button onClick={() => onRepeat(weak)}>
            <RotateCcwIcon className="h-4 w-4" />
            {weak.length === 1
              ? 'Diese Frage wiederholen'
              : `Diese ${weak.length} Fragen wiederholen`}
          </Button>
        )}
        <Button variant={weak.length > 0 ? 'secondary' : 'primary'} onClick={onRestart}>
          Neue Runde wählen
        </Button>
      </div>
    </div>
  )
}

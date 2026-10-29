import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import { ChecklistItem } from '@/components/ui/ChecklistItem'
import { FeedbackPanel } from '@/components/ui/FeedbackPanel'
import { useProgressStore } from '@/features/progress/store'
import type { Exercise } from '@/types/content'

import type { ExerciseComponentProps } from './types'

type FreetextExerciseContent = Extract<Exercise, { kind: 'freetext' }>

type Phase = 'writing' | 'review' | 'done'

export function FreetextExercise({
  exercise,
  onAnswered,
}: ExerciseComponentProps<FreetextExerciseContent>) {
  const savedAnswer = useProgressStore((state) => state.freetextAnswers[exercise.id])
  const saveFreetextAnswer = useProgressStore((state) => state.saveFreetextAnswer)

  const [phase, setPhase] = useState<Phase>('writing')
  // Prefill with the previously saved answer so learners can refine it over time
  const [answer, setAnswer] = useState(savedAnswer ?? '')
  const [checkedItems, setCheckedItems] = useState<boolean[]>(() =>
    exercise.checklist.map(() => false),
  )

  const startReview = () => {
    saveFreetextAnswer(exercise.id, answer)
    setPhase('review')
  }

  const toggleItem = (index: number) => {
    if (phase === 'done') return
    setCheckedItems((items) => items.map((checked, i) => (i === index ? !checked : checked)))
  }

  const finishReview = () => {
    const checkedCount = checkedItems.filter(Boolean).length
    setPhase('done')
    onAnswered({ selfScore: checkedCount / exercise.checklist.length })
  }

  return (
    <div className="space-y-4">
      <p className="text-lg leading-snug font-semibold whitespace-pre-line">{exercise.task}</p>

      <textarea
        value={answer}
        onChange={(event) => setAnswer(event.target.value)}
        placeholder={exercise.placeholder}
        readOnly={phase !== 'writing'}
        rows={7}
        aria-label="Deine Antwort"
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 font-serif text-[1.0625rem] leading-[1.7] outline-brand-500 placeholder:font-sans placeholder:text-slate-400 focus-visible:outline-2 read-only:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:read-only:bg-slate-800/60"
      />

      {phase === 'writing' && (
        <Button onClick={startReview} disabled={answer.trim().length === 0}>
          Mit Musterlösung vergleichen
        </Button>
      )}

      {phase !== 'writing' && (
        <>
          <FeedbackPanel tone="info" title="Musterlösung">
            <p className="font-serif text-[1.0625rem] leading-[1.7] whitespace-pre-line">
              {exercise.sampleSolution}
            </p>
          </FeedbackPanel>

          <div className="rounded-lg border border-slate-200 p-5 dark:border-slate-700">
            <p className="font-semibold">Was trifft auf deine Antwort zu?</p>
            <p className="mt-0.5 mb-3 text-sm text-slate-600 dark:text-slate-400">
              Hake ehrlich ab, was du schon erfüllt hast.
            </p>
            <ul className="space-y-2">
              {exercise.checklist.map((item, index) => (
                <ChecklistItem
                  key={index}
                  checked={checkedItems[index] ?? false}
                  onToggle={() => toggleItem(index)}
                  disabled={phase === 'done'}
                >
                  {item}
                </ChecklistItem>
              ))}
            </ul>
            {phase === 'review' && (
              <Button onClick={finishReview} className="mt-4" size="sm">
                Bewertung übernehmen
              </Button>
            )}
            {phase === 'done' && (
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                {checkedItems.filter(Boolean).length} von {exercise.checklist.length} Kriterien
                erfüllt. Deine Antwort ist unter „Meine Antworten“ gespeichert, dort kannst du sie
                später mit der Musterlösung vergleichen.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  )
}

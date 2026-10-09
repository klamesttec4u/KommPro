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
      <p className="font-medium whitespace-pre-line">{exercise.task}</p>

      <textarea
        value={answer}
        onChange={(event) => setAnswer(event.target.value)}
        placeholder={exercise.placeholder}
        readOnly={phase !== 'writing'}
        rows={6}
        className="w-full rounded-lg border border-slate-300 bg-white p-3 text-sm leading-relaxed outline-brand-500 focus-visible:outline-2 read-only:opacity-70 dark:border-slate-700 dark:bg-slate-800"
      />

      {phase === 'writing' && (
        <Button onClick={startReview} disabled={answer.trim().length === 0}>
          Mit Musterlösung vergleichen
        </Button>
      )}

      {phase !== 'writing' && (
        <>
          <FeedbackPanel tone="info" title="Musterlösung">
            <p className="whitespace-pre-line">{exercise.sampleSolution}</p>
          </FeedbackPanel>

          <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
            <p className="mb-3 text-sm font-semibold">
              Selbstbewertung: Was trifft auf deine Antwort zu?
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
                erfüllt – gut gemacht, Selbstreflexion ist der wichtigste Schritt! Deine Antwort
                findest du jederzeit unter „Meine Antworten".
              </p>
            )}
          </div>
        </>
      )}
    </div>
  )
}

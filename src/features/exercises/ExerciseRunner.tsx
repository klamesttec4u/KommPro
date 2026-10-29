import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { ArrowRightIcon } from '@/components/ui/icons'
import { useProgressStore, type ExerciseResult } from '@/features/progress/store'
import { assertNever } from '@/lib/assertNever'
import type { Exercise } from '@/types/content'

import { FreetextExercise } from './FreetextExercise'
import { QuizExercise } from './QuizExercise'
import { ScenarioExercise } from './ScenarioExercise'

interface ExerciseRunnerProps {
  exercises: Exercise[]
  /** Called when the learner finishes the last exercise. */
  onFinished: (results: ExerciseResult[]) => void
}

function ExerciseView({
  exercise,
  onAnswered,
}: {
  exercise: Exercise
  onAnswered: (result: ExerciseResult) => void
}) {
  switch (exercise.kind) {
    case 'quiz':
      return <QuizExercise exercise={exercise} onAnswered={onAnswered} />
    case 'scenario':
      return <ScenarioExercise exercise={exercise} onAnswered={onAnswered} />
    case 'freetext':
      return <FreetextExercise exercise={exercise} onAnswered={onAnswered} />
    default:
      return assertNever(exercise)
  }
}

const kindLabels: Record<Exercise['kind'], string> = {
  quiz: 'Wissensfrage',
  scenario: 'Situation',
  freetext: 'Eigene Formulierung',
}

/**
 * Guides the learner through a lesson's exercises one at a time:
 * answer -> feedback (rendered by the exercise component) -> next.
 */
export function ExerciseRunner({ exercises, onFinished }: ExerciseRunnerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [results, setResults] = useState<ExerciseResult[]>([])
  const recordExerciseResult = useProgressStore((state) => state.recordExerciseResult)

  const currentExercise = exercises[currentIndex]
  const isAnswered = results.length > currentIndex
  const isLast = currentIndex === exercises.length - 1

  // Guards against lessons whose content accidentally ships without exercises
  if (!currentExercise) return null

  const handleAnswered = (result: ExerciseResult) => {
    if (isAnswered) return
    setResults((previous) => [...previous, result])
    recordExerciseResult(currentExercise.id, result)
  }

  const handleNext = () => {
    if (isLast) {
      onFinished(results)
    } else {
      setCurrentIndex((index) => index + 1)
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold tabular-nums">
          Übung {currentIndex + 1} von {exercises.length}
        </p>
        <span className="text-sm text-slate-500 dark:text-slate-400">
          {kindLabels[currentExercise.kind]}
        </span>
      </div>
      <ProgressBar percent={(results.length / exercises.length) * 100} />

      <Card className="p-5 sm:p-8">
        {/* key resets the exercise component's local state per exercise */}
        <ExerciseView
          key={currentExercise.id}
          exercise={currentExercise}
          onAnswered={handleAnswered}
        />
      </Card>

      {isAnswered && (
        <div className="flex justify-end">
          <Button onClick={handleNext} className="w-full sm:w-auto">
            {isLast ? 'Lektion abschließen' : 'Nächste Übung'}
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}

import { useState } from 'react'

import { ChoiceButton } from '@/components/ui/ChoiceButton'
import { FeedbackPanel } from '@/components/ui/FeedbackPanel'
import { shuffleArray } from '@/lib/shuffle'
import type { Exercise, QuizOption } from '@/types/content'

import type { ExerciseComponentProps } from './types'

type QuizExerciseContent = Extract<Exercise, { kind: 'quiz' }>

export function QuizExercise({
  exercise,
  onAnswered,
}: ExerciseComponentProps<QuizExerciseContent>) {
  // Shuffled once per mount so the authored position never gives the answer away
  const [options] = useState(() => shuffleArray(exercise.options))
  const [selectedOption, setSelectedOption] = useState<QuizOption | null>(null)
  const isAnswered = selectedOption !== null

  const handleSelect = (option: QuizOption) => {
    if (isAnswered) return
    setSelectedOption(option)
    onAnswered({ correct: option.correct })
  }

  return (
    <div className="space-y-4">
      <p className="font-medium whitespace-pre-line">{exercise.question}</p>
      <div className="space-y-2">
        {options.map((option, index) => {
          const isSelected = selectedOption === option
          return (
            <ChoiceButton
              key={index}
              answered={isAnswered}
              onClick={() => handleSelect(option)}
              className={
                isAnswered
                  ? option.correct
                    ? 'border-emerald-400 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-950/40'
                    : isSelected
                      ? 'border-red-400 bg-red-50 dark:border-red-700 dark:bg-red-950/40'
                      : 'border-slate-200 opacity-60 dark:border-slate-800'
                  : undefined
              }
            >
              {option.text}
            </ChoiceButton>
          )
        })}
      </div>
      {selectedOption && (
        <FeedbackPanel
          tone={selectedOption.correct ? 'success' : 'error'}
          title={selectedOption.correct ? 'Richtig!' : 'Leider nicht richtig.'}
        >
          {selectedOption.explanation}
        </FeedbackPanel>
      )}
    </div>
  )
}

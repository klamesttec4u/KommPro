import { useState } from 'react'

import { ChoiceButton, type ChoiceState } from '@/components/ui/ChoiceButton'
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
      <p className="text-lg leading-snug font-semibold whitespace-pre-line">{exercise.question}</p>
      <div className="space-y-2.5">
        {options.map((option, index) => {
          const isSelected = selectedOption === option
          const state: ChoiceState = !isAnswered
            ? 'idle'
            : option.correct
              ? 'best'
              : isSelected
                ? 'bad'
                : 'muted'
          return (
            <ChoiceButton
              key={index}
              state={state}
              selected={isSelected}
              onClick={() => handleSelect(option)}
            >
              {option.text}
            </ChoiceButton>
          )
        })}
      </div>
      {selectedOption && (
        <FeedbackPanel
          tone={selectedOption.correct ? 'success' : 'error'}
          title={selectedOption.correct ? 'Richtig' : 'Nicht ganz'}
        >
          {selectedOption.explanation}
        </FeedbackPanel>
      )}
    </div>
  )
}

import { useState } from 'react'

import { ChoiceButton, type ChoiceState } from '@/components/ui/ChoiceButton'
import { FeedbackPanel, type FeedbackTone } from '@/components/ui/FeedbackPanel'
import { shuffleArray } from '@/lib/shuffle'
import type { ChoiceQuality, Exercise, ScenarioChoice } from '@/types/content'

import type { ExerciseComponentProps } from './types'

type ScenarioExerciseContent = Extract<Exercise, { kind: 'scenario' }>

const qualityTone: Record<ChoiceQuality, FeedbackTone> = {
  best: 'success',
  ok: 'warning',
  bad: 'error',
}

const qualityTitle: Record<ChoiceQuality, string> = {
  best: 'Die beste Reaktion',
  ok: 'Vertretbar, aber es geht besser',
  bad: 'Ungünstige Reaktion',
}

// After answering, the picked choice and the best one show their rating; the rest fade
function choiceState(
  choice: ScenarioChoice,
  isSelected: boolean,
  isAnswered: boolean,
): ChoiceState {
  if (!isAnswered) return 'idle'
  return isSelected || choice.quality === 'best' ? choice.quality : 'muted'
}

export function ScenarioExercise({
  exercise,
  onAnswered,
}: ExerciseComponentProps<ScenarioExerciseContent>) {
  // Shuffled once per mount so the authored position never gives the answer away
  const [choices] = useState(() => shuffleArray(exercise.choices))
  const [selectedChoice, setSelectedChoice] = useState<ScenarioChoice | null>(null)
  const isAnswered = selectedChoice !== null

  const handleSelect = (choice: ScenarioChoice) => {
    if (isAnswered) return
    setSelectedChoice(choice)
    onAnswered({ correct: choice.quality === 'best' })
  }

  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-slate-100 px-5 py-4 dark:bg-slate-800/60">
        <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Situation</p>
        <p className="mt-1.5 text-[1.0625rem] leading-[1.7] whitespace-pre-line">
          {exercise.situation}
        </p>
      </div>
      <p className="text-lg font-semibold">Wie reagierst du?</p>
      <div className="space-y-2.5">
        {choices.map((choice, index) => {
          const isSelected = selectedChoice === choice
          return (
            <ChoiceButton
              key={index}
              state={choiceState(choice, isSelected, isAnswered)}
              selected={isSelected}
              onClick={() => handleSelect(choice)}
            >
              {choice.text}
            </ChoiceButton>
          )
        })}
      </div>
      {selectedChoice && (
        <FeedbackPanel
          tone={qualityTone[selectedChoice.quality]}
          title={qualityTitle[selectedChoice.quality]}
        >
          {selectedChoice.feedback}
        </FeedbackPanel>
      )}
    </div>
  )
}

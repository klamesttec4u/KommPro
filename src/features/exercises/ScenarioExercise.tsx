import { useState } from 'react'

import { ChoiceButton } from '@/components/ui/ChoiceButton'
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
  best: 'Sehr gut – die beste Reaktion!',
  ok: 'Okay, aber es geht noch besser.',
  bad: 'Das ist ungünstig.',
}

const qualityClasses: Record<ChoiceQuality, string> = {
  best: 'border-emerald-400 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-950/40',
  ok: 'border-amber-400 bg-amber-50 dark:border-amber-700 dark:bg-amber-950/40',
  bad: 'border-red-400 bg-red-50 dark:border-red-700 dark:bg-red-950/40',
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
      <div className="rounded-lg border border-slate-200 bg-slate-100/70 p-4 text-sm leading-relaxed whitespace-pre-line dark:border-slate-700 dark:bg-slate-800/60">
        <p className="mb-1 text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
          Situation
        </p>
        {exercise.situation}
      </div>
      <p className="text-sm font-medium">Wie reagierst du?</p>
      <div className="space-y-2">
        {choices.map((choice, index) => {
          const isSelected = selectedChoice === choice
          return (
            <ChoiceButton
              key={index}
              answered={isAnswered}
              onClick={() => handleSelect(choice)}
              className={
                isAnswered
                  ? isSelected || choice.quality === 'best'
                    ? qualityClasses[choice.quality]
                    : 'border-slate-200 opacity-60 dark:border-slate-800'
                  : undefined
              }
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

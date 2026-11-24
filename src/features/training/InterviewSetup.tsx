import { Button } from '@/components/ui/Button'
import { ChecklistItem } from '@/components/ui/ChecklistItem'
import { ArrowRightIcon } from '@/components/ui/icons'
import { interviewQuestionSets } from '@/data/interview'
import { cn } from '@/lib/cn'
import { shuffleArray } from '@/lib/shuffle'
import type { InterviewQuestion } from '@/types/content'

import { RecordingToggle } from './RecordingControls'
import {
  buildMixedInterview,
  collectWeakQuestions,
  countSecure,
  MIXED_QUESTIONS_PER_SET,
  MIXED_ROUND_ID,
  SECURE_SCORE,
  WEAK_ROUND_ID,
} from './interviewSession'
import { useInterviewTrainingStore } from './interviewStore'

export interface TrainerSettings {
  /** Id of a question set, or one of the composed rounds (mixed, weak) */
  roundId: string
  shuffle: boolean
  followUps: boolean
  record: boolean
}

interface InterviewSetupProps {
  settings: TrainerSettings
  onSettingsChange: (change: Partial<TrainerSettings>) => void
  isRecordingSupported: boolean
  /** `keepsOriginalOrder` is true only for an unshuffled fixed set */
  onStart: (questions: InterviewQuestion[], keepsOriginalOrder: boolean) => void
}

/** Setup phase of the interview trainer: pick a round and the realism options. */
export function InterviewSetup({
  settings,
  onSettingsChange,
  isRecordingSupported,
  onStart,
}: InterviewSetupProps) {
  const ratings = useInterviewTrainingStore((state) => state.ratings)
  const resetRatings = useInterviewTrainingStore((state) => state.resetRatings)

  const weakQuestions = collectWeakQuestions(interviewQuestionSets, ratings)
  const hasRatings = Object.keys(ratings).length > 0
  const selectedSet = interviewQuestionSets.find((set) => set.id === settings.roundId)
  // A stored "weak spots" selection is void once every weak answer has been fixed
  const roundId =
    selectedSet || settings.roundId === MIXED_ROUND_ID
      ? settings.roundId
      : settings.roundId === WEAK_ROUND_ID && weakQuestions.length > 0
        ? WEAK_ROUND_ID
        : (interviewQuestionSets[0]?.id ?? MIXED_ROUND_ID)
  const isFixedSet = interviewQuestionSets.some((set) => set.id === roundId)

  const start = () => {
    if (roundId === MIXED_ROUND_ID) {
      onStart(buildMixedInterview(interviewQuestionSets), false)
    } else if (roundId === WEAK_ROUND_ID) {
      onStart(shuffleArray(weakQuestions), false)
    } else {
      const questions = interviewQuestionSets.find((set) => set.id === roundId)?.questions ?? []
      onStart(settings.shuffle ? shuffleArray(questions) : [...questions], !settings.shuffle)
    }
  }

  const handleResetRatings = () => {
    if (window.confirm('Alle gespeicherten Selbsteinschätzungen im Interview-Trainer löschen?')) {
      resetRatings()
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
          Gezielt ein Thema üben
        </p>
        <div className="space-y-2.5">
          {interviewQuestionSets.map((set) => (
            <RoundOption
              key={set.id}
              title={set.title}
              description={set.description}
              meta={
                hasRatings
                  ? `${countSecure(set.questions, ratings)} von ${set.questions.length} sitzen`
                  : undefined
              }
              selected={set.id === roundId}
              onSelect={() => onSettingsChange({ roundId: set.id })}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
          Wie im echten Gespräch
        </p>
        <div className="space-y-2.5">
          <RoundOption
            title="Gemischtes Interview"
            description={`Vorstellung zum Einstieg, deine Rückfragen zum Schluss – dazwischen je ${MIXED_QUESTIONS_PER_SET} zufällige Fragen aus jedem Set in zufälliger Reihenfolge. Jede Runde ist anders.`}
            selected={roundId === MIXED_ROUND_ID}
            onSelect={() => onSettingsChange({ roundId: MIXED_ROUND_ID })}
          />
          {weakQuestions.length > 0 && (
            <RoundOption
              title="Meine Schwachstellen"
              description={`Die ${weakQuestions.length} Fragen, bei denen du zuletzt weniger als ${Math.round(SECURE_SCORE * 100)} % der Kriterien erfüllt hast – so lange, bis sie sitzen.`}
              selected={roundId === WEAK_ROUND_ID}
              onSelect={() => onSettingsChange({ roundId: WEAK_ROUND_ID })}
            />
          )}
        </div>
      </div>

      <ul className="space-y-1">
        <ChecklistItem
          checked={settings.followUps}
          onToggle={() => onSettingsChange({ followUps: !settings.followUps })}
        >
          <span>
            <span className="font-semibold">Mit Nachfragen</span>
            <span className="block text-sm text-slate-600 dark:text-slate-400">
              Nach deiner Antwort hakt der Interviewer direkt nach – ohne Bedenkzeit, wie im echten
              Gespräch.
            </span>
          </span>
        </ChecklistItem>
        {isFixedSet && (
          <ChecklistItem
            checked={settings.shuffle}
            onToggle={() => onSettingsChange({ shuffle: !settings.shuffle })}
          >
            <span>
              <span className="font-semibold">Reihenfolge mischen</span>
              <span className="block text-sm text-slate-600 dark:text-slate-400">
                Damit du die Antworten kannst und nicht nur ihre Abfolge.
              </span>
            </span>
          </ChecklistItem>
        )}
      </ul>

      <RecordingToggle
        enabled={settings.record}
        onToggle={() => onSettingsChange({ record: !settings.record })}
        isSupported={isRecordingSupported}
      />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button onClick={start}>
          Interview starten
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
        {hasRatings && (
          <Button variant="ghost" size="sm" onClick={handleResetRatings}>
            Selbsteinschätzungen zurücksetzen
          </Button>
        )}
      </div>
    </div>
  )
}

interface RoundOptionProps {
  title: string
  description: string
  /** Short status shown next to the title, e.g. "7 von 13 sitzen" */
  meta?: string
  selected: boolean
  onSelect: () => void
}

function RoundOption({ title, description, meta, selected, onSelect }: RoundOptionProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={cn(
        'w-full cursor-pointer rounded-lg border px-4 py-3.5 text-left transition-colors outline-brand-500 focus-visible:outline-2 focus-visible:outline-offset-2',
        selected
          ? 'border-brand-600 bg-brand-50 ring-1 ring-brand-600 dark:border-brand-400 dark:bg-brand-950/40 dark:ring-brand-400'
          : 'border-slate-300 bg-white hover:border-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-brand-400',
      )}
    >
      <span className="flex flex-wrap items-baseline justify-between gap-x-4">
        <span className="font-semibold">{title}</span>
        {meta && (
          <span className="text-sm text-slate-500 tabular-nums dark:text-slate-400">{meta}</span>
        )}
      </span>
      <span className="mt-0.5 block text-sm text-slate-600 dark:text-slate-400">{description}</span>
    </button>
  )
}

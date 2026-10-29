import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import { ChecklistItem } from '@/components/ui/ChecklistItem'
import { RotateCcwIcon, TimerIcon } from '@/components/ui/icons'
import { pitchDrills } from '@/data/drills'
import { cn } from '@/lib/cn'
import { formatTime } from '@/lib/formatTime'
import type { PitchDrill } from '@/types/content'

import { RecordingIndicator, RecordingPlayback, RecordingToggle } from './RecordingControls'
import { TimerDisplay } from './TimerDisplay'
import { TrainingCard } from './TrainingCard'
import { useAudioRecorder } from './useAudioRecorder'
import { useCountdown } from './useCountdown'

type Phase = 'setup' | 'speaking' | 'reflection'

const FALLBACK_DURATION_SECONDS = 60

export function PitchTimer() {
  const firstDrill = pitchDrills[0]
  if (!firstDrill) return null
  return <PitchTimerInner firstDrill={firstDrill} />
}

function PitchTimerInner({ firstDrill }: { firstDrill: PitchDrill }) {
  const [drillId, setDrillId] = useState(firstDrill.id)
  const [duration, setDuration] = useState(firstDrill.durations[0] ?? FALLBACK_DURATION_SECONDS)
  const [phase, setPhase] = useState<Phase>('setup')
  const [recordEnabled, setRecordEnabled] = useState(false)
  const recorder = useAudioRecorder()
  const countdown = useCountdown(() => {
    recorder.stop()
    setPhase('reflection')
  })

  const drill = pitchDrills.find((candidate) => candidate.id === drillId) ?? firstDrill

  const selectDrill = (id: string) => {
    const nextDrill = pitchDrills.find((candidate) => candidate.id === id)
    if (!nextDrill) return
    setDrillId(id)
    setDuration(nextDrill.durations[0] ?? FALLBACK_DURATION_SECONDS)
  }

  const startSpeaking = () => {
    setPhase('speaking')
    countdown.start(duration)
    if (recordEnabled) void recorder.start()
  }

  const finishEarly = () => {
    countdown.stop()
    recorder.stop()
    setPhase('reflection')
  }

  const resetDrill = () => {
    countdown.reset()
    recorder.reset()
    setPhase('setup')
  }

  return (
    <TrainingCard
      icon={<TimerIcon className="h-5 w-5" />}
      title="Pitch-Timer"
      description="Wähle eine Aufgabe und eine Dauer. Dann sprich laut und frei, bis die Zeit abläuft."
    >
      {phase === 'setup' && (
        <div className="space-y-5">
          <div className="space-y-2.5">
            {pitchDrills.map((candidate) => (
              <button
                key={candidate.id}
                type="button"
                aria-pressed={candidate.id === drillId}
                onClick={() => selectDrill(candidate.id)}
                className={cn(
                  'w-full cursor-pointer rounded-lg border px-4 py-3.5 text-left transition-colors outline-brand-500 focus-visible:outline-2 focus-visible:outline-offset-2',
                  candidate.id === drillId
                    ? 'border-brand-600 bg-brand-50 ring-1 ring-brand-600 dark:border-brand-400 dark:bg-brand-950/40 dark:ring-brand-400'
                    : 'border-slate-300 bg-white hover:border-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-brand-400',
                )}
              >
                <p className="font-semibold">{candidate.title}</p>
                <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">
                  {candidate.description}
                </p>
              </button>
            ))}
          </div>

          <div>
            <p className="mb-2 font-semibold">Dauer</p>
            <div className="flex flex-wrap gap-2">
              {drill.durations.map((seconds) => (
                <Button
                  key={seconds}
                  variant={seconds === duration ? 'primary' : 'secondary'}
                  size="sm"
                  aria-pressed={seconds === duration}
                  onClick={() => setDuration(seconds)}
                >
                  {seconds < 60 ? `${seconds} s` : `${formatTime(seconds)} min`}
                </Button>
              ))}
            </div>
          </div>

          <RecordingToggle
            enabled={recordEnabled}
            onToggle={() => setRecordEnabled((value) => !value)}
            isSupported={recorder.isSupported}
          />

          <Button onClick={startSpeaking}>Timer starten</Button>
        </div>
      )}

      {phase === 'speaking' && (
        <div className="space-y-5 py-4">
          <p className="text-center font-semibold text-slate-600 dark:text-slate-300">
            {drill.title}: Sprich jetzt laut.
          </p>
          <TimerDisplay
            remainingSeconds={countdown.remainingSeconds}
            totalSeconds={countdown.totalSeconds}
          />
          {recorder.isRecording && <RecordingIndicator />}
          <div className="flex justify-center gap-2">
            <Button variant="secondary" onClick={finishEarly}>
              Fertig
            </Button>
            <Button variant="ghost" onClick={resetDrill}>
              Abbrechen
            </Button>
          </div>
        </div>
      )}

      {phase === 'reflection' && (
        <div className="space-y-4">
          <RecordingPlayback audioUrl={recorder.audioUrl} error={recorder.error} />
          <ReflectionChecklist drill={drill} onRestart={resetDrill} />
        </div>
      )}
    </TrainingCard>
  )
}

function ReflectionChecklist({ drill, onRestart }: { drill: PitchDrill; onRestart: () => void }) {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(() =>
    drill.reflectionChecklist.map(() => false),
  )

  const toggleItem = (index: number) =>
    setCheckedItems((items) => items.map((checked, i) => (i === index ? !checked : checked)))

  return (
    <div className="space-y-4">
      <p className="font-semibold">Zeit um. Was ist dir gelungen?</p>
      <ul className="space-y-2">
        {drill.reflectionChecklist.map((item, index) => (
          <ChecklistItem
            key={index}
            checked={checkedItems[index] ?? false}
            onToggle={() => toggleItem(index)}
          >
            {item}
          </ChecklistItem>
        ))}
      </ul>
      <Button onClick={onRestart}>
        <RotateCcwIcon className="h-4 w-4" />
        Neue Runde
      </Button>
    </div>
  )
}

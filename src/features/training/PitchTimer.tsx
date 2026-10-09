import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ChecklistItem } from '@/components/ui/ChecklistItem'
import { RotateCcwIcon, TimerIcon } from '@/components/ui/icons'
import { pitchDrills } from '@/data/drills'
import { cn } from '@/lib/cn'
import { formatTime } from '@/lib/formatTime'
import type { PitchDrill } from '@/types/content'

import { TimerDisplay } from './TimerDisplay'
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
  const countdown = useCountdown(() => setPhase('reflection'))

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
  }

  const finishEarly = () => {
    countdown.stop()
    setPhase('reflection')
  }

  const resetDrill = () => {
    countdown.reset()
    setPhase('setup')
  }

  return (
    <Card className="p-5 sm:p-6">
      <h2 className="mb-1 flex items-center gap-2 text-lg font-semibold">
        <TimerIcon className="h-5 w-5 text-brand-600 dark:text-brand-400" />
        Pitch-Timer
      </h2>
      <p className="mb-5 text-sm text-slate-600 dark:text-slate-400">
        Wähle eine Aufgabe und eine Dauer – dann sprich laut und frei, bis die Zeit abläuft.
      </p>

      {phase === 'setup' && (
        <div className="space-y-5">
          <div className="space-y-2">
            {pitchDrills.map((candidate) => (
              <button
                key={candidate.id}
                type="button"
                aria-pressed={candidate.id === drillId}
                onClick={() => selectDrill(candidate.id)}
                className={cn(
                  'w-full cursor-pointer rounded-lg border px-4 py-3 text-left transition-colors',
                  candidate.id === drillId
                    ? 'border-brand-500 bg-brand-50 dark:border-brand-500 dark:bg-brand-950/40'
                    : 'border-slate-300 hover:border-brand-400 dark:border-slate-700 dark:hover:border-brand-600',
                )}
              >
                <p className="text-sm font-medium">{candidate.title}</p>
                <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">
                  {candidate.description}
                </p>
              </button>
            ))}
          </div>

          <div>
            <p className="mb-2 text-sm font-medium">Dauer</p>
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

          <Button onClick={startSpeaking}>Los geht's!</Button>
        </div>
      )}

      {phase === 'speaking' && (
        <div className="space-y-5 py-4">
          <p className="text-center text-sm font-medium text-slate-600 dark:text-slate-400">
            {drill.title} – sprich jetzt laut!
          </p>
          <TimerDisplay
            remainingSeconds={countdown.remainingSeconds}
            totalSeconds={countdown.totalSeconds}
          />
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

      {phase === 'reflection' && <ReflectionChecklist drill={drill} onRestart={resetDrill} />}
    </Card>
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
      <p className="font-medium">Zeit um! Kurze Selbstreflexion:</p>
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

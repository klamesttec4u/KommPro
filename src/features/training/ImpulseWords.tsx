import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ShuffleIcon } from '@/components/ui/icons'
import { impulseWords } from '@/data/drills'
import { randomItem } from '@/lib/random'

import { TimerDisplay } from './TimerDisplay'
import { useCountdown } from './useCountdown'

const SPEAKING_SECONDS = 60

export function ImpulseWords() {
  const [word, setWord] = useState<string | null>(null)
  const countdown = useCountdown()
  const isTimeUp = word !== null && !countdown.isRunning && countdown.remainingSeconds === 0

  const nextWord = () => {
    setWord(randomItem(impulseWords, word ?? undefined))
    countdown.start(SPEAKING_SECONDS)
  }

  return (
    <Card className="p-5 sm:p-6">
      <h2 className="mb-1 flex items-center gap-2 text-lg font-semibold">
        <ShuffleIcon className="h-5 w-5 text-brand-600 dark:text-brand-400" />
        Impulswörter-Drill
      </h2>
      <p className="mb-5 text-sm text-slate-600 dark:text-slate-400">
        Du bekommst ein zufälliges Business-Stichwort und sprichst 60 Sekunden frei dazu – perfektes
        Training für Spontanrede.
      </p>

      {word === null ? (
        <Button onClick={nextWord}>Erstes Wort ziehen</Button>
      ) : (
        <div className="space-y-5 py-2">
          <p className="text-center text-3xl font-bold tracking-tight text-brand-700 sm:text-4xl dark:text-brand-300">
            {word}
          </p>
          {isTimeUp ? (
            <p className="text-center text-sm font-medium text-emerald-600 dark:text-emerald-400">
              Zeit um – stark durchgehalten!
            </p>
          ) : (
            <TimerDisplay
              remainingSeconds={countdown.remainingSeconds}
              totalSeconds={countdown.totalSeconds}
            />
          )}
          <div className="flex justify-center">
            <Button onClick={nextWord}>
              <ShuffleIcon className="h-4 w-4" />
              Nächstes Wort
            </Button>
          </div>
        </div>
      )}
    </Card>
  )
}

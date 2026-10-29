import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import { ShuffleIcon } from '@/components/ui/icons'
import { impulseWords } from '@/data/drills'
import { randomItem } from '@/lib/random'

import { TimerDisplay } from './TimerDisplay'
import { TrainingCard } from './TrainingCard'
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
    <TrainingCard
      icon={<ShuffleIcon className="h-5 w-5" />}
      title="Impulswörter"
      description="Du bekommst ein zufälliges Business-Stichwort und sprichst 60 Sekunden frei dazu. So trainierst du spontanes Reden."
    >
      {word === null ? (
        <Button onClick={nextWord}>Erstes Wort ziehen</Button>
      ) : (
        <div className="space-y-5 py-2">
          <p className="text-center text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {word}
          </p>
          {isTimeUp ? (
            <p className="text-center font-semibold text-good dark:text-emerald-400">
              Zeit um. 60 Sekunden durchgesprochen.
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
    </TrainingCard>
  )
}

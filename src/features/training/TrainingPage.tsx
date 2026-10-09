import { PageHeader } from '@/components/ui/PageHeader'

import { ImpulseWords } from './ImpulseWords'
import { InterviewTrainer } from './InterviewTrainer'
import { PitchTimer } from './PitchTimer'

export function TrainingPage() {
  return (
    <>
      <PageHeader
        title="Trainingscenter"
        description="Hier übst du das freie Sprechen ganz praktisch – Interview-Simulation, Pitch-Timer und Spontanrede-Drills. Am besten laut und im Stehen!"
      />
      <div className="space-y-6">
        <InterviewTrainer />
        <PitchTimer />
        <ImpulseWords />
      </div>
    </>
  )
}

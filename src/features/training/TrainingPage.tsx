import { PageHeader } from '@/components/ui/PageHeader'

import { ImpulseWords } from './ImpulseWords'
import { PitchTimer } from './PitchTimer'

export function TrainingPage() {
  return (
    <>
      <PageHeader
        title="Trainingscenter"
        description="Hier übst du das freie Sprechen ganz praktisch – mit Timer, Pitch-Aufgaben und Spontanrede-Drills. Am besten laut und im Stehen!"
      />
      <div className="space-y-6">
        <PitchTimer />
        <ImpulseWords />
      </div>
    </>
  )
}

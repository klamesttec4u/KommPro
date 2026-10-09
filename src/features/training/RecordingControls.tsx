import { ChecklistItem } from '@/components/ui/ChecklistItem'

interface RecordingToggleProps {
  enabled: boolean
  onToggle: () => void
  isSupported: boolean
}

/** Opt-in toggle shown in a drill's setup phase. */
export function RecordingToggle({ enabled, onToggle, isSupported }: RecordingToggleProps) {
  if (!isSupported) return null
  return (
    <ul>
      <ChecklistItem checked={enabled} onToggle={onToggle}>
        Aufnahme aktivieren – nimm dich beim Sprechen auf und höre dich danach an. Die Aufnahme
        bleibt lokal in deinem Browser und wird nach der Runde verworfen.
      </ChecklistItem>
    </ul>
  )
}

interface RecordingPlaybackProps {
  audioUrl: string | null
  error: string | null
}

/** Playback element shown in a drill's reflection phase. */
export function RecordingPlayback({ audioUrl, error }: RecordingPlaybackProps) {
  if (error) return <p className="text-sm text-amber-600 dark:text-amber-400">{error}</p>
  if (!audioUrl) return null
  return (
    <div>
      <p className="mb-2 text-sm font-medium">
        Deine Aufnahme – hör besonders auf Füllwörter, Tempo und Pausen:
      </p>
      <audio controls src={audioUrl} className="w-full" />
    </div>
  )
}

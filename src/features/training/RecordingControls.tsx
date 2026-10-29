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
        <span>
          <span className="font-semibold">Aufnahme aktivieren</span>
          <span className="block text-sm text-slate-600 dark:text-slate-400">
            Hör dich danach an. Die Aufnahme bleibt lokal in deinem Browser und wird nach der Runde
            verworfen.
          </span>
        </span>
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
      <p className="mb-2 text-sm font-semibold">
        Deine Aufnahme: Achte auf Füllwörter, Tempo und Pausen.
      </p>
      <audio controls src={audioUrl} className="w-full" />
    </div>
  )
}

/** Live hint while the microphone is recording. */
export function RecordingIndicator() {
  return (
    <p className="flex items-center justify-center gap-2 text-sm font-semibold text-bad dark:text-red-400">
      <span aria-hidden="true" className="h-2.5 w-2.5 animate-pulse rounded-full bg-current" />
      Aufnahme läuft (nur lokal)
    </p>
  )
}

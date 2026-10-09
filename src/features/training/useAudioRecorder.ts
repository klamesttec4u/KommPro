import { useEffect, useRef, useState } from 'react'

/**
 * Local microphone recording for speech drills. Everything stays in the
 * browser: the recording lives in an in-memory blob URL and is discarded
 * on reset or unmount — nothing is uploaded or persisted.
 */
export function useAudioRecorder() {
  const [isRecording, setIsRecording] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const recorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const audioUrlRef = useRef<string | null>(null)

  const isSupported =
    typeof navigator !== 'undefined' &&
    !!navigator.mediaDevices?.getUserMedia &&
    typeof MediaRecorder !== 'undefined'

  const replaceUrl = (nextUrl: string | null) => {
    if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current)
    audioUrlRef.current = nextUrl
    setAudioUrl(nextUrl)
  }

  const start = async () => {
    if (!isSupported || isRecording) return
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const recorder = new MediaRecorder(stream)
      chunksRef.current = []
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunksRef.current.push(event.data)
      }
      recorder.onstop = () => {
        stream.getTracks().forEach((track) => track.stop())
        if (chunksRef.current.length > 0) {
          const blob = new Blob(chunksRef.current, { type: recorder.mimeType })
          replaceUrl(URL.createObjectURL(blob))
        }
      }
      recorderRef.current = recorder
      recorder.start()
      setError(null)
      setIsRecording(true)
    } catch {
      setError('Mikrofon nicht verfügbar – es geht auch ohne Aufnahme weiter.')
      setIsRecording(false)
    }
  }

  const stop = () => {
    const recorder = recorderRef.current
    if (recorder && recorder.state !== 'inactive') recorder.stop()
    setIsRecording(false)
  }

  const reset = () => {
    stop()
    replaceUrl(null)
    setError(null)
  }

  // Release microphone and blob URL on unmount
  useEffect(() => {
    return () => {
      const recorder = recorderRef.current
      if (recorder && recorder.state !== 'inactive') recorder.stop()
      if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current)
    }
  }, [])

  return { isSupported, isRecording, audioUrl, error, start, stop, reset }
}

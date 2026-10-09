import { useEffect, useRef, useState } from 'react'

/**
 * Timestamp-based countdown (no drift from render latency or tab throttling).
 * `onFinished` fires once when it reaches zero. `start` with a non-positive
 * or non-finite duration finishes immediately instead of hanging.
 */
export function useCountdown(onFinished?: () => void) {
  const [remainingSeconds, setRemainingSeconds] = useState(0)
  const [totalSeconds, setTotalSeconds] = useState(0)
  /** Target end timestamp (ms); null while not running. */
  const [endTime, setEndTime] = useState<number | null>(null)
  const onFinishedRef = useRef(onFinished)

  useEffect(() => {
    onFinishedRef.current = onFinished
  })

  useEffect(() => {
    if (endTime === null) return
    const intervalId = window.setInterval(() => {
      const next = Math.max(0, Math.ceil((endTime - Date.now()) / 1000))
      setRemainingSeconds(next)
      if (next <= 0) {
        setEndTime(null)
        onFinishedRef.current?.()
      }
    }, 250)
    return () => window.clearInterval(intervalId)
  }, [endTime])

  const start = (seconds: number) => {
    const safeSeconds = Number.isFinite(seconds) ? Math.floor(seconds) : 0
    if (safeSeconds <= 0) {
      setTotalSeconds(0)
      setRemainingSeconds(0)
      setEndTime(null)
      onFinishedRef.current?.()
      return
    }
    setTotalSeconds(safeSeconds)
    setRemainingSeconds(safeSeconds)
    setEndTime(Date.now() + safeSeconds * 1000)
  }

  const stop = () => setEndTime(null)

  const reset = () => {
    setEndTime(null)
    setRemainingSeconds(0)
    setTotalSeconds(0)
  }

  return { remainingSeconds, totalSeconds, isRunning: endTime !== null, start, stop, reset }
}

interface ProgressRingProps {
  /** 0..100 */
  percent: number
  /** Diameter in px */
  size?: number
}

/** Circular progress indicator with the percentage in its center. */
export function ProgressRing({ percent, size = 112 }: ProgressRingProps) {
  const clamped = Math.min(100, Math.max(0, percent))
  const strokeWidth = 10
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className="stroke-slate-200 dark:stroke-slate-800"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - clamped / 100)}
          className="stroke-brand-600 transition-[stroke-dashoffset] duration-700 dark:stroke-brand-500"
        />
      </svg>
      <span className="absolute text-xl font-bold">{clamped}%</span>
    </div>
  )
}

import type { ReactNode } from 'react'

import { Card } from '@/components/ui/Card'

interface TrainingCardProps {
  icon: ReactNode
  title: string
  description: string
  children: ReactNode
}

/** Shared frame for the speaking drills on the training page. */
export function TrainingCard({ icon, title, description, children }: TrainingCardProps) {
  return (
    <Card className="p-5 sm:p-8">
      <div className="mb-6 flex gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
          {icon}
        </span>
        <div>
          <h2 className="text-xl font-bold tracking-tight">{title}</h2>
          <p className="mt-1 max-w-[60ch] leading-relaxed text-slate-600 dark:text-slate-400">
            {description}
          </p>
        </div>
      </div>
      {children}
    </Card>
  )
}

import type { ReactNode } from 'react'

interface PageHeaderProps {
  title: string
  description?: string
  /** Rendered above the title, e.g. a back link or category badge */
  eyebrow?: ReactNode
}

export function PageHeader({ title, description, eyebrow }: PageHeaderProps) {
  return (
    <header className="mb-8">
      {eyebrow && <div className="mb-2">{eyebrow}</div>}
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
      {description && (
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">{description}</p>
      )}
    </header>
  )
}

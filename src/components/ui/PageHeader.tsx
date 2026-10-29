import type { ReactNode } from 'react'

interface PageHeaderProps {
  title: string
  description?: string
  /** Rendered above the title, e.g. a breadcrumb */
  eyebrow?: ReactNode
  /** Rendered below the description, e.g. lesson meta or a step indicator */
  children?: ReactNode
}

export function PageHeader({ title, description, eyebrow, children }: PageHeaderProps) {
  return (
    <header className="mb-10">
      {eyebrow && <div className="mb-3">{eyebrow}</div>}
      <h1 className="text-[1.75rem] leading-tight font-bold tracking-tight text-balance sm:text-[2.25rem]">
        {title}
      </h1>
      {description && (
        <p className="mt-3 max-w-[60ch] text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}
      {children}
    </header>
  )
}

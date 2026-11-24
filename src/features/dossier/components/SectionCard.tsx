import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { routes } from '@/app/routes'
import { Card } from '@/components/ui/Card'
import { ArrowRightIcon } from '@/components/ui/icons'
import { findLessonRef } from '@/data/modules'
import type { DossierSection } from '@/types/content'

interface SectionCardProps {
  section: Pick<DossierSection, 'title' | 'description' | 'lessonId'>
  children: ReactNode
}

/** Shared frame for every dossier section: heading, purpose, link to the lesson behind it. */
export function SectionCard({ section, children }: SectionCardProps) {
  const lessonRef = section.lessonId ? findLessonRef(section.lessonId) : undefined
  return (
    <Card className="p-5 sm:p-7 print:break-inside-avoid print:border-0 print:p-0 print:shadow-none">
      <h2 className="text-xl font-bold tracking-tight">{section.title}</h2>
      <p className="mt-1 max-w-[62ch] leading-relaxed text-slate-600 dark:text-slate-400 print:hidden">
        {section.description}
      </p>
      {lessonRef && (
        <Link
          to={routes.lesson(lessonRef.module.id, lessonRef.lesson.id)}
          className="mt-1.5 inline-flex items-center gap-1 text-sm font-medium text-brand-700 outline-brand-500 hover:underline focus-visible:outline-2 dark:text-brand-300 print:hidden"
        >
          Methode nachlesen: {lessonRef.lesson.title}
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </Link>
      )}
      <div className="mt-5 space-y-5 print:mt-2 print:space-y-3">{children}</div>
    </Card>
  )
}

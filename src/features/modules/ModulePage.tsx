import { Link, useParams } from 'react-router-dom'

import { routes } from '@/app/routes'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Card } from '@/components/ui/Card'
import { PageHeader } from '@/components/ui/PageHeader'
import { ArrowRightIcon, CheckIcon } from '@/components/ui/icons'
import { findModule, trackLabel } from '@/data/modules'
import { useLessonProgress } from '@/features/progress/hooks'
import { lessonReadingMinutes } from '@/lib/readingTime'
import type { Lesson, Module } from '@/types/content'

function LessonItem({ module, lesson, index }: { module: Module; lesson: Lesson; index: number }) {
  const progress = useLessonProgress(lesson)
  const isStarted = progress.answeredExercises > 0 && !progress.isCompleted

  return (
    <li>
      <Link
        to={routes.lesson(module.id, lesson.id)}
        className="group flex items-center gap-4 px-5 py-4 outline-brand-500 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:-outline-offset-2 dark:hover:bg-slate-800/60"
      >
        {/* Lessons build on each other, so their order is shown */}
        <span
          className={
            progress.isCompleted
              ? 'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white dark:bg-brand-400 dark:text-brand-950'
              : 'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 text-sm font-bold text-slate-600 tabular-nums dark:border-slate-600 dark:text-slate-300'
          }
        >
          {progress.isCompleted ? <CheckIcon className="h-4 w-4" /> : index + 1}
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-semibold group-hover:text-brand-700 dark:group-hover:text-brand-300">
            {lesson.title}
          </p>
          <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
            {progress.isCompleted
              ? 'Abgeschlossen'
              : isStarted
                ? `${progress.answeredExercises} von ${progress.totalExercises} Übungen bearbeitet`
                : `ca. ${lessonReadingMinutes(lesson)} Min. lesen, ${lesson.exercises.length} Übungen`}
          </p>
        </div>
        <ArrowRightIcon className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600" />
      </Link>
    </li>
  )
}

export function ModulePage() {
  const { moduleId } = useParams()
  const module = findModule(moduleId)

  if (!module) {
    return (
      <PageHeader
        title="Modul nicht gefunden"
        eyebrow={<Breadcrumb items={[{ label: 'Übersicht', to: routes.dashboard() }]} />}
        description="Dieses Modul existiert nicht. Wähle links ein Modul aus der Liste."
      />
    )
  }

  return (
    <>
      <PageHeader
        eyebrow={
          <Breadcrumb
            items={[
              { label: 'Übersicht', to: routes.dashboard() },
              { label: trackLabel(module.category) },
            ]}
          />
        }
        title={module.title}
        description={module.description}
      />
      <h2 className="mb-3 text-sm text-slate-500 dark:text-slate-400">
        {module.lessons.length} Lektionen
      </h2>
      <Card>
        <ul className="divide-y divide-slate-200 dark:divide-slate-800">
          {module.lessons.map((lesson, index) => (
            <LessonItem key={lesson.id} module={module} lesson={lesson} index={index} />
          ))}
        </ul>
      </Card>
    </>
  )
}

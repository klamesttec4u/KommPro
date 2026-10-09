import { Link, useParams } from 'react-router-dom'

import { routes } from '@/app/routes'
import { Card } from '@/components/ui/Card'
import { PageHeader } from '@/components/ui/PageHeader'
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon } from '@/components/ui/icons'
import { findModule } from '@/data/modules'
import { useLessonProgress } from '@/features/progress/hooks'
import type { Lesson, Module } from '@/types/content'

const categoryLabels: Record<Module['category'], string> = {
  communication: 'Kommunikation',
  presentation: 'Präsentation',
  consulting: 'IT Consulting',
}

function LessonItem({ module, lesson, index }: { module: Module; lesson: Lesson; index: number }) {
  const progress = useLessonProgress(lesson)
  return (
    <li>
      <Link to={routes.lesson(module.id, lesson.id)}>
        <Card className="flex items-center gap-4 p-4 transition-colors hover:border-brand-400 dark:hover:border-brand-600">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-950 dark:text-brand-300">
            {index + 1}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate font-medium">{lesson.title}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {lesson.exercises.length} Übungen
              {progress.answeredExercises > 0 &&
                !progress.isCompleted &&
                ` · ${progress.answeredExercises} bearbeitet`}
            </p>
          </div>
          {progress.isCompleted ? (
            <CheckCircleIcon className="h-5 w-5 shrink-0 text-emerald-500" />
          ) : (
            <ArrowRightIcon className="h-5 w-5 shrink-0 text-slate-400" />
          )}
        </Card>
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
        eyebrow={<BackToDashboardLink />}
        description="Dieses Modul existiert nicht. Wähle links ein Modul aus der Liste."
      />
    )
  }

  return (
    <>
      <PageHeader
        eyebrow={
          <span className="text-xs font-semibold tracking-wide text-brand-600 uppercase dark:text-brand-400">
            {categoryLabels[module.category]}
          </span>
        }
        title={module.title}
        description={module.description}
      />
      <ul className="space-y-3">
        {module.lessons.map((lesson, index) => (
          <LessonItem key={lesson.id} module={module} lesson={lesson} index={index} />
        ))}
      </ul>
    </>
  )
}

function BackToDashboardLink() {
  return (
    <Link
      to={routes.dashboard()}
      className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:underline dark:text-brand-400"
    >
      <ArrowLeftIcon className="h-4 w-4" />
      Zum Dashboard
    </Link>
  )
}

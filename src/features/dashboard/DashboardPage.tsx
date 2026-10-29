import { Link } from 'react-router-dom'

import { routes } from '@/app/routes'
import { Button } from '@/components/ui/Button'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Card } from '@/components/ui/Card'
import { LessonSegments } from '@/components/ui/LessonSegments'
import { PageHeader } from '@/components/ui/PageHeader'
import { ProgressBar } from '@/components/ui/ProgressBar'
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  MicIcon,
  RotateCcwIcon,
} from '@/components/ui/icons'
import { modules, modulesInTrack, tracks } from '@/data/modules'
import { useNextLesson, useOverallProgress } from '@/features/progress/hooks'
import { useProgressStore } from '@/features/progress/store'
import { lessonReadingMinutes } from '@/lib/readingTime'
import type { Module, ModuleCategory } from '@/types/content'

const trackSummaries: Record<ModuleCategory, string> = {
  communication: 'Gespräche führen, Feedback geben, Meetings leiten, verhandeln.',
  presentation: 'Vom Ziel zur Struktur, von der Geschichte zum Auftritt.',
  consulting: 'Gezielte Vorbereitung auf das Qualifizierungsgespräch.',
}

function ContinuePanel() {
  const next = useNextLesson(modules)
  const totalLessons = modules.reduce((sum, module) => sum + module.lessons.length, 0)

  if (!next) {
    return (
      <section className="rounded-2xl bg-brand-700 p-6 text-white sm:p-8 dark:bg-brand-900">
        <CheckCircleIcon className="h-8 w-8 text-brand-200" />
        <h2 className="mt-3 text-2xl font-bold">Alle {totalLessons} Lektionen abgeschlossen</h2>
        <p className="mt-2 max-w-[52ch] text-brand-100">
          Halte das Gelernte frisch: Im Trainingscenter übst du freies Sprechen mit Timer und
          Interview-Fragen.
        </p>
        <ButtonLink to={routes.training()} variant="inverse" className="mt-6">
          Zum Trainingscenter
        </ButtonLink>
      </section>
    )
  }

  const { module, lesson, hasStarted } = next
  const lessonNumber = module.lessons.indexOf(lesson) + 1

  return (
    <section
      aria-labelledby="continue-heading"
      className="rounded-2xl bg-brand-700 p-6 text-white sm:p-8 dark:bg-brand-900"
    >
      <h2 id="continue-heading" className="text-brand-100">
        {hasStarted ? 'Weitermachen, wo du aufgehört hast' : 'Dein Einstieg'}
      </h2>
      <p className="mt-2 text-2xl leading-tight font-bold text-balance sm:text-[1.75rem]">
        {lesson.title}
      </p>
      <p className="mt-1.5 text-brand-100">
        {module.title}, Lektion {lessonNumber} von {module.lessons.length}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <ButtonLink to={routes.lesson(module.id, lesson.id)} variant="inverse">
          {hasStarted ? 'Lektion fortsetzen' : 'Erste Lektion öffnen'}
        </ButtonLink>
        <span className="flex items-center gap-1.5 text-sm text-brand-100">
          <ClockIcon className="h-4 w-4" />
          ca. {lessonReadingMinutes(lesson)} Min. lesen, {lesson.exercises.length} Übungen
        </span>
      </div>
    </section>
  )
}

function ModuleRow({ module }: { module: Module }) {
  const completedLessons = useProgressStore((state) => state.completedLessons)
  const lessonStates = module.lessons.map((lesson) => completedLessons.includes(lesson.id))
  const doneCount = lessonStates.filter(Boolean).length
  const isDone = doneCount === module.lessons.length

  return (
    <li>
      <Link
        to={routes.module(module.id)}
        className="group flex items-center gap-4 px-5 py-4 outline-brand-500 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:-outline-offset-2 dark:hover:bg-slate-800/60"
      >
        <div className="min-w-0 flex-1">
          <p className="font-semibold group-hover:text-brand-700 dark:group-hover:text-brand-300">
            {module.title}
          </p>
          <p className="mt-0.5 hidden truncate text-sm text-slate-500 sm:block dark:text-slate-400">
            {module.description}
          </p>
        </div>
        {isDone ? (
          <span className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-good dark:text-emerald-400">
            <CheckCircleIcon className="h-4 w-4" />
            Fertig
          </span>
        ) : (
          <span className="flex shrink-0 flex-col items-end gap-1.5">
            <LessonSegments completed={lessonStates} />
            <span className="text-xs text-slate-500 tabular-nums dark:text-slate-400">
              {doneCount} von {module.lessons.length}
            </span>
          </span>
        )}
      </Link>
    </li>
  )
}

function TrackSection({ category, label }: { category: ModuleCategory; label: string }) {
  const completedLessons = useProgressStore((state) => state.completedLessons)
  const trackModules = modulesInTrack(category)
  const lessons = trackModules.flatMap((module) => module.lessons)
  const doneCount = lessons.filter((lesson) => completedLessons.includes(lesson.id)).length
  const headingId = `track-heading-${category}`

  return (
    <section aria-labelledby={headingId} className="mt-12">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-x-4 gap-y-1">
        <div>
          <h2 id={headingId} className="text-xl font-bold tracking-tight">
            {label}
          </h2>
          <p className="mt-1 text-slate-600 dark:text-slate-400">{trackSummaries[category]}</p>
        </div>
        <p className="text-sm text-slate-500 tabular-nums dark:text-slate-400">
          {doneCount} von {lessons.length} Lektionen
        </p>
      </div>
      <Card>
        <ul className="divide-y divide-slate-200 dark:divide-slate-800">
          {trackModules.map((module) => (
            <ModuleRow key={module.id} module={module} />
          ))}
        </ul>
      </Card>
    </section>
  )
}

export function DashboardPage() {
  const overall = useOverallProgress(modules)
  const resetProgress = useProgressStore((state) => state.resetProgress)

  const handleReset = () => {
    if (window.confirm('Gesamten Lernfortschritt wirklich zurücksetzen?')) {
      resetProgress()
    }
  }

  return (
    <>
      <PageHeader
        title="Willkommen bei KommPro"
        description="Business-Kommunikation und Präsentation lernen: kurze Theorie, Beispiele aus dem Arbeitsalltag und Übungen, die du direkt anwenden kannst."
      >
        {overall.completedLessons > 0 && (
          <div className="mt-6 max-w-sm">
            <p className="mb-2 text-sm text-slate-600 tabular-nums dark:text-slate-400">
              {overall.completedLessons} von {overall.totalLessons} Lektionen abgeschlossen
            </p>
            <ProgressBar percent={overall.percent} />
          </div>
        )}
      </PageHeader>

      <ContinuePanel />

      <Link
        to={routes.training()}
        className="group mt-4 flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 outline-brand-500 transition-colors hover:border-brand-300 focus-visible:outline-2 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
          <MicIcon className="h-5 w-5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-semibold">Trainingscenter</span>
          <span className="block text-sm text-slate-600 dark:text-slate-400">
            Frei sprechen üben: Interview-Simulation, Pitch-Timer, Impulswörter
          </span>
        </span>
        <ArrowRightIcon className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600" />
      </Link>

      {tracks.map((track) => (
        <TrackSection key={track.category} category={track.category} label={track.label} />
      ))}

      <div className="mt-14 border-t border-slate-200 pt-6 dark:border-slate-800">
        <Button variant="ghost" size="sm" onClick={handleReset}>
          <RotateCcwIcon className="h-4 w-4" />
          Lernfortschritt zurücksetzen
        </Button>
      </div>
    </>
  )
}

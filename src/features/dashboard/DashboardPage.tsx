import { Link } from 'react-router-dom'

import { routes } from '@/app/routes'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { PageHeader } from '@/components/ui/PageHeader'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { ProgressRing } from '@/components/ui/ProgressRing'
import { ArrowRightIcon, MicIcon, RotateCcwIcon } from '@/components/ui/icons'
import { modules } from '@/data/modules'
import { useModuleProgress, useOverallProgress } from '@/features/progress/hooks'
import { useProgressStore } from '@/features/progress/store'
import type { Module, ModuleCategory } from '@/types/content'

function ModuleCard({ module }: { module: Module }) {
  const progress = useModuleProgress(module)
  return (
    <Link to={routes.module(module.id)}>
      <Card className="flex h-full flex-col p-5 transition-colors hover:border-brand-400 dark:hover:border-brand-600">
        <h3 className="font-semibold">{module.title}</h3>
        <p className="mt-1 mb-4 flex-1 text-sm text-slate-600 dark:text-slate-400">
          {module.description}
        </p>
        <ProgressBar percent={progress.percent} />
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          {progress.completedLessons} von {progress.totalLessons} Lektionen abgeschlossen
        </p>
      </Card>
    </Link>
  )
}

function ModuleSection({ category, title }: { category: ModuleCategory; title: string }) {
  const sectionModules = modules.filter((module) => module.category === category)
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {sectionModules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>
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
        title="Willkommen bei KommPro!"
        description="Lerne Business-Kommunikation und Präsentation – mit fundierter Theorie, konkreten Übungen und Praxis-Drills."
      />

      <Card className="flex flex-col items-center gap-6 p-6 sm:flex-row sm:p-8">
        <ProgressRing percent={overall.percent} />
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-semibold">Dein Lernfortschritt</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            {overall.completedLessons} von {overall.totalLessons} Lektionen abgeschlossen.
            {overall.percent === 0 && ' Leg einfach mit dem ersten Modul los!'}
            {overall.percent === 100 && ' Alle Lektionen geschafft – stark!'}
          </p>
        </div>
      </Card>

      <Link to={routes.training()} className="mt-4 block">
        <Card className="flex items-center gap-4 border-brand-200 bg-brand-50 p-5 transition-colors hover:border-brand-400 dark:border-brand-800 dark:bg-brand-950/40 dark:hover:border-brand-600">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white">
            <MicIcon className="h-5 w-5" />
          </span>
          <div className="flex-1">
            <h3 className="font-semibold text-brand-900 dark:text-brand-200">Trainingscenter</h3>
            <p className="text-sm text-brand-800/80 dark:text-brand-300/80">
              Freies Sprechen üben: Pitch-Timer und Impulswörter-Drill.
            </p>
          </div>
          <ArrowRightIcon className="h-5 w-5 shrink-0 text-brand-600 dark:text-brand-400" />
        </Card>
      </Link>

      <ModuleSection category="communication" title="Teil A – Kommunikation" />
      <ModuleSection category="presentation" title="Teil B – Präsentation" />
      <ModuleSection category="consulting" title="Teil C – IT Consulting" />

      <div className="mt-12 border-t border-slate-200 pt-6 dark:border-slate-800">
        <Button variant="ghost" size="sm" onClick={handleReset}>
          <RotateCcwIcon className="h-4 w-4" />
          Lernfortschritt zurücksetzen
        </Button>
      </div>
    </>
  )
}

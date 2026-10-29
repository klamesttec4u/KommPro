import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { routes } from '@/app/routes'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Button } from '@/components/ui/Button'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Card } from '@/components/ui/Card'
import { PageHeader } from '@/components/ui/PageHeader'
import { StepIndicator } from '@/components/ui/StepIndicator'
import { ClockIcon, ArrowRightIcon, CheckCircleIcon, RotateCcwIcon } from '@/components/ui/icons'
import { findLesson, findModule, trackLabel } from '@/data/modules'
import { ExerciseRunner } from '@/features/exercises/ExerciseRunner'
import { summarizeResults } from '@/features/progress/selectors'
import { useProgressStore, type ExerciseResult } from '@/features/progress/store'
import { lessonReadingMinutes } from '@/lib/readingTime'
import type { Lesson, Module } from '@/types/content'

import { TheoryBlockView } from './components/theory/TheoryBlockView'

type Phase = 'theory' | 'exercises' | 'summary'

export function LessonPage() {
  const { moduleId, lessonId } = useParams()
  const module = findModule(moduleId)
  const lesson = module ? findLesson(module, lessonId) : undefined

  if (!module || !lesson) {
    return (
      <PageHeader
        title="Lektion nicht gefunden"
        description="Diese Lektion existiert nicht. Wähle links ein Modul aus der Liste."
      />
    )
  }

  // key resets all lesson-local state when navigating to another lesson
  return <LessonView key={lesson.id} module={module} lesson={lesson} />
}

function LessonView({ module, lesson }: { module: Module; lesson: Lesson }) {
  const [phase, setPhase] = useState<Phase>('theory')
  const [results, setResults] = useState<ExerciseResult[]>([])
  /** Incremented to remount the runner when the learner repeats the exercises. */
  const [runId, setRunId] = useState(0)
  const markLessonCompleted = useProgressStore((state) => state.markLessonCompleted)

  const lessonIndex = module.lessons.findIndex((candidate) => candidate.id === lesson.id)
  const nextLesson = module.lessons[lessonIndex + 1]

  const steps =
    lesson.exercises.length > 0 ? ['Lesen', 'Üben', 'Abschluss'] : ['Lesen', 'Abschluss']
  const currentStep = phase === 'theory' ? 0 : phase === 'exercises' ? 1 : steps.length - 1

  // Each phase starts at the top, not where the previous one was scrolled to
  const goTo = (next: Phase) => {
    setPhase(next)
    window.scrollTo(0, 0)
  }

  const handleFinished = (runResults: ExerciseResult[]) => {
    // Local state first: even if persisting throws (e.g. storage quota),
    // the learner still reaches the summary
    setResults(runResults)
    goTo('summary')
    markLessonCompleted(lesson.id)
  }

  const repeatExercises = () => {
    setRunId((id) => id + 1)
    goTo('exercises')
  }

  return (
    <>
      <PageHeader
        eyebrow={
          <Breadcrumb
            items={[
              { label: trackLabel(module.category) },
              { label: module.title, to: routes.module(module.id) },
            ]}
          />
        }
        title={lesson.title}
      >
        <div className="mt-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <StepIndicator steps={steps} current={currentStep} />
          <p className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
            <ClockIcon className="h-4 w-4" />
            ca. {lessonReadingMinutes(lesson)} Min. Lesezeit
          </p>
        </div>
      </PageHeader>

      {phase === 'theory' && (
        <div className="space-y-10">
          {lesson.theory.map((block, index) => (
            <TheoryBlockView key={index} block={block} />
          ))}
          {/* Sticky on phones so the next step stays reachable while reading */}
          <div className="sticky bottom-0 -mx-4 border-t border-slate-200 bg-paper/95 px-4 py-4 backdrop-blur sm:static sm:mx-0 sm:bg-transparent sm:px-0 sm:pt-8 sm:backdrop-blur-none dark:border-slate-800 dark:bg-slate-950/95 sm:dark:bg-transparent">
            {lesson.exercises.length > 0 ? (
              <Button onClick={() => goTo('exercises')} className="w-full sm:w-auto">
                Weiter zu den Übungen ({lesson.exercises.length})
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={() => handleFinished([])} className="w-full sm:w-auto">
                Lektion abschließen
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      )}

      {phase === 'exercises' && (
        <ExerciseRunner key={runId} exercises={lesson.exercises} onFinished={handleFinished} />
      )}

      {phase === 'summary' && (
        <LessonSummary
          results={results}
          moduleId={module.id}
          nextLessonId={nextLesson?.id}
          onRepeat={repeatExercises}
        />
      )}
    </>
  )
}

function LessonSummary({
  results,
  moduleId,
  nextLessonId,
  onRepeat,
}: {
  results: ExerciseResult[]
  moduleId: string
  nextLessonId?: string
  onRepeat: () => void
}) {
  const summary = summarizeResults(results)

  return (
    <Card className="p-6 text-center sm:p-8">
      <CheckCircleIcon className="mx-auto mb-4 h-12 w-12 text-good dark:text-emerald-400" />
      <h2 className="text-2xl font-bold tracking-tight">Lektion abgeschlossen</h2>

      {summary.percentCorrect !== null && (
        <p className="mt-3 text-slate-600 dark:text-slate-400">
          {summary.correctCount} von {summary.gradedCount} Wissensfragen richtig beantwortet (
          {summary.percentCorrect} %).
        </p>
      )}
      {summary.freetextCount > 0 && (
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Dazu {summary.freetextCount} Freitext-{summary.freetextCount === 1 ? 'Übung' : 'Übungen'}{' '}
          mit Selbstbewertung bearbeitet.
        </p>
      )}

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {nextLessonId ? (
          <ButtonLink to={routes.lesson(moduleId, nextLessonId)}>
            Nächste Lektion
            <ArrowRightIcon className="h-4 w-4" />
          </ButtonLink>
        ) : (
          <ButtonLink to={routes.module(moduleId)}>Zur Modulübersicht</ButtonLink>
        )}
        {results.length > 0 && (
          <Button variant="secondary" onClick={onRepeat}>
            <RotateCcwIcon className="h-4 w-4" />
            Übungen wiederholen
          </Button>
        )}
      </div>
    </Card>
  )
}

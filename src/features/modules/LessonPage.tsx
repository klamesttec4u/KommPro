import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { routes } from '@/app/routes'
import { Button } from '@/components/ui/Button'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Card } from '@/components/ui/Card'
import { PageHeader } from '@/components/ui/PageHeader'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  RotateCcwIcon,
} from '@/components/ui/icons'
import { findLesson, findModule } from '@/data/modules'
import { ExerciseRunner } from '@/features/exercises/ExerciseRunner'
import { summarizeResults } from '@/features/progress/selectors'
import { useProgressStore, type ExerciseResult } from '@/features/progress/store'
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

  const handleFinished = (runResults: ExerciseResult[]) => {
    // Local state first: even if persisting throws (e.g. storage quota),
    // the learner still reaches the summary
    setResults(runResults)
    setPhase('summary')
    markLessonCompleted(lesson.id)
  }

  const repeatExercises = () => {
    setRunId((id) => id + 1)
    setPhase('exercises')
  }

  return (
    <>
      <PageHeader
        eyebrow={
          <Link
            to={routes.module(module.id)}
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:underline dark:text-brand-400"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            {module.title}
          </Link>
        }
        title={lesson.title}
      />

      {phase === 'theory' && (
        <div className="space-y-6">
          {lesson.theory.map((block, index) => (
            <TheoryBlockView key={index} block={block} />
          ))}
          <div className="border-t border-slate-200 pt-6 dark:border-slate-800">
            {lesson.exercises.length > 0 ? (
              <Button onClick={() => setPhase('exercises')}>
                Übungen starten ({lesson.exercises.length})
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={() => handleFinished([])}>
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
      <CheckCircleIcon className="mx-auto mb-4 h-12 w-12 text-emerald-500" />
      <h2 className="text-xl font-bold">Lektion abgeschlossen!</h2>

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

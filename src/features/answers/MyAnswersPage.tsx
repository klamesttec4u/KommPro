import { useState } from 'react'
import { Link } from 'react-router-dom'

import { routes } from '@/app/routes'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { FeedbackPanel } from '@/components/ui/FeedbackPanel'
import { PageHeader } from '@/components/ui/PageHeader'
import { ArrowRightIcon } from '@/components/ui/icons'
import { modules } from '@/data/modules'
import { useProgressStore } from '@/features/progress/store'
import type { Exercise, Lesson, Module } from '@/types/content'

type FreetextContent = Extract<Exercise, { kind: 'freetext' }>

interface SavedAnswerEntry {
  module: Module
  lesson: Lesson
  exercise: FreetextContent
  answer: string
}

function collectSavedAnswers(freetextAnswers: Record<string, string>): SavedAnswerEntry[] {
  const entries: SavedAnswerEntry[] = []
  for (const module of modules) {
    for (const lesson of module.lessons) {
      for (const exercise of lesson.exercises) {
        if (exercise.kind !== 'freetext') continue
        const answer = freetextAnswers[exercise.id]
        if (answer) entries.push({ module, lesson, exercise, answer })
      }
    }
  }
  return entries
}

function SavedAnswerCard({ entry }: { entry: SavedAnswerEntry }) {
  const [showSolution, setShowSolution] = useState(false)
  return (
    <Card className="p-5">
      <p className="text-xs font-semibold tracking-wide text-brand-600 uppercase dark:text-brand-400">
        {entry.module.title}
      </p>
      <Link
        to={routes.lesson(entry.module.id, entry.lesson.id)}
        className="mt-0.5 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:underline dark:text-slate-400"
      >
        {entry.lesson.title}
        <ArrowRightIcon className="h-3.5 w-3.5" />
      </Link>
      <p className="mt-3 text-sm font-medium whitespace-pre-line">{entry.exercise.task}</p>
      <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed whitespace-pre-line dark:border-slate-700 dark:bg-slate-800/60">
        {entry.answer}
      </div>
      <div className="mt-3">
        {showSolution ? (
          <FeedbackPanel tone="info" title="Musterlösung">
            <p className="whitespace-pre-line">{entry.exercise.sampleSolution}</p>
          </FeedbackPanel>
        ) : (
          <Button variant="secondary" size="sm" onClick={() => setShowSolution(true)}>
            Musterlösung einblenden
          </Button>
        )}
      </div>
    </Card>
  )
}

/** Personal prep dossier: every saved freetext answer, grouped by module. */
export function MyAnswersPage() {
  const freetextAnswers = useProgressStore((state) => state.freetextAnswers)
  const entries = collectSavedAnswers(freetextAnswers)

  return (
    <>
      <PageHeader
        title="Meine Antworten"
        description="Alle deine gespeicherten Freitext-Antworten an einem Ort – dein persönliches Vorbereitungs-Dossier. Zum Überarbeiten öffnest du die Übung einfach erneut: Deine Antwort ist dort vorausgefüllt."
      />
      {entries.length === 0 ? (
        <Card className="p-6 text-center">
          <p className="font-medium">Noch keine gespeicherten Antworten.</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Sobald du in einer Lektion eine Freitext-Übung bearbeitest, erscheint deine Antwort
            automatisch hier.
          </p>
        </Card>
      ) : (
        <div className="space-y-4">
          {entries.map((entry) => (
            <SavedAnswerCard key={entry.exercise.id} entry={entry} />
          ))}
        </div>
      )}
    </>
  )
}

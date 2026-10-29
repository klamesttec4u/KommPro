import { useState } from 'react'

import { routes } from '@/app/routes'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Button } from '@/components/ui/Button'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Card } from '@/components/ui/Card'
import { FeedbackPanel } from '@/components/ui/FeedbackPanel'
import { PageHeader } from '@/components/ui/PageHeader'
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
    <Card className="p-5 sm:p-6">
      <Breadcrumb
        items={[
          { label: entry.module.title },
          { label: entry.lesson.title, to: routes.lesson(entry.module.id, entry.lesson.id) },
        ]}
      />
      <p className="mt-3 text-lg leading-snug font-semibold whitespace-pre-line">
        {entry.exercise.task}
      </p>
      <div className="mt-4 rounded-r-lg border-l-4 border-slate-300 bg-slate-50 px-5 py-4 dark:border-slate-600 dark:bg-slate-800/60">
        <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Deine Antwort</p>
        <p className="mt-1.5 font-serif text-[1.0625rem] leading-[1.7] whitespace-pre-line">
          {entry.answer}
        </p>
      </div>
      <div className="mt-3">
        {showSolution ? (
          <FeedbackPanel tone="info" title="Musterlösung">
            <p className="font-serif text-[1.0625rem] leading-[1.7] whitespace-pre-line">
              {entry.exercise.sampleSolution}
            </p>
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
        description="Alle deine Freitext-Antworten an einem Ort, als persönliches Vorbereitungs-Dossier. Zum Überarbeiten öffnest du die Lektion erneut, deine Antwort ist dort schon eingetragen."
      />
      {entries.length === 0 ? (
        <Card className="p-6 sm:p-8">
          <p className="text-lg font-semibold">Noch keine Antworten gespeichert</p>
          <p className="mt-1 max-w-[56ch] text-slate-600 dark:text-slate-400">
            Viele Lektionen enden mit einer Aufgabe, bei der du selbst formulierst. Deine Antworten
            landen automatisch hier.
          </p>
          <ButtonLink to={routes.dashboard()} className="mt-5">
            Zur Übersicht
          </ButtonLink>
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

import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import { routes } from '@/app/routes'
import { PageHeader } from '@/components/ui/PageHeader'
import { ArrowRightIcon, SearchIcon } from '@/components/ui/icons'
import { glossaryEntries } from '@/data/glossary'
import { findLessonRef } from '@/data/modules'
import type { GlossaryEntry } from '@/types/content'

const sortedEntries = [...glossaryEntries].sort((a, b) =>
  a.term.localeCompare(b.term, 'de', { sensitivity: 'base' }),
)

interface LetterGroup {
  letter: string
  entries: GlossaryEntry[]
}

function groupByLetter(entries: GlossaryEntry[]): LetterGroup[] {
  const groups: LetterGroup[] = []
  for (const entry of entries) {
    const letter = (entry.term[0] ?? '#').toUpperCase()
    const lastGroup = groups[groups.length - 1]
    if (lastGroup && lastGroup.letter === letter) {
      lastGroup.entries.push(entry)
    } else {
      groups.push({ letter, entries: [entry] })
    }
  }
  return groups
}

function GlossaryItem({ entry }: { entry: GlossaryEntry }) {
  const lessonRef = entry.lessonId ? findLessonRef(entry.lessonId) : undefined
  return (
    <div className="py-4">
      <h3 className="font-semibold">{entry.term}</h3>
      <p className="mt-1 leading-relaxed text-slate-600 dark:text-slate-400">{entry.definition}</p>
      {lessonRef && (
        <Link
          to={routes.lesson(lessonRef.module.id, lessonRef.lesson.id)}
          className="mt-1.5 inline-flex items-center gap-1 text-sm font-medium text-brand-700 outline-brand-500 hover:underline focus-visible:outline-2 dark:text-brand-300"
        >
          Nachlesen: {lessonRef.lesson.title}
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  )
}

export function GlossaryPage() {
  const [query, setQuery] = useState('')

  const groups = useMemo(() => {
    const needle = query.trim().toLowerCase()
    const matching =
      needle === ''
        ? sortedEntries
        : sortedEntries.filter(
            (entry) =>
              entry.term.toLowerCase().includes(needle) ||
              entry.definition.toLowerCase().includes(needle),
          )
    return groupByLetter(matching)
  }, [query])

  return (
    <>
      <PageHeader
        title="Glossar"
        description="Alle Methoden und Fachbegriffe aus den Modulen zum Nachschlagen – jeweils mit Sprung in die Lektion, die den Begriff erklärt."
      />

      <label className="relative mb-8 block max-w-md">
        <span className="sr-only">Glossar durchsuchen</span>
        <SearchIcon className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={`Begriff suchen (${glossaryEntries.length} Einträge) …`}
          className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pr-4 pl-10 outline-brand-500 placeholder:text-slate-400 focus-visible:outline-2 dark:border-slate-700 dark:bg-slate-900"
        />
      </label>

      {groups.length === 0 ? (
        <p className="text-slate-500 dark:text-slate-400">
          Kein Begriff gefunden. Versuche es mit einem anderen Suchwort – oder stöbere ohne Filter
          durch alle {glossaryEntries.length} Einträge.
        </p>
      ) : (
        <div className="space-y-8">
          {groups.map((group) => (
            <section key={group.letter}>
              <h2 className="mb-1 border-b border-slate-200 pb-2 text-sm font-bold tracking-widest text-slate-400 uppercase dark:border-slate-800 dark:text-slate-500">
                {group.letter}
              </h2>
              <div className="divide-y divide-slate-100 dark:divide-slate-800/70">
                {group.entries.map((entry) => (
                  <GlossaryItem key={entry.term} entry={entry} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </>
  )
}

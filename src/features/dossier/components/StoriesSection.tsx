import { Button } from '@/components/ui/Button'
import { PlusIcon, TrashIcon } from '@/components/ui/icons'
import type { DossierField, DossierSection } from '@/types/content'

import { type StarStory, type StarStoryPart, useDossierStore } from '../store'

import { DossierTextField } from './DossierTextField'
import { SectionCard } from './SectionCard'

const storyFields: Array<{ part: StarStoryPart; field: Omit<DossierField, 'id'> }> = [
  {
    part: 'title',
    field: {
      label: 'Arbeitstitel',
      placeholder: 'Woran erkennst du die Story wieder?',
      singleLine: true,
    },
  },
  {
    part: 'situation',
    field: {
      label: 'S – Situation',
      placeholder: 'Ausgangslage in ein, zwei Sätzen: Kunde, Problem, Rahmen.',
      rows: 2,
    },
  },
  {
    part: 'task',
    field: {
      label: 'T – Task',
      placeholder: 'Was war deine Aufgabe und deine Rolle im Team?',
      rows: 2,
    },
  },
  {
    part: 'action',
    field: {
      label: 'A – Action',
      placeholder: 'Was hast DU getan? In der Ich-Form, konkret.',
      rows: 3,
    },
  },
  {
    part: 'result',
    field: {
      label: 'R – Result',
      placeholder: 'Messbares Ergebnis – und was du daraus gelernt hast.',
      rows: 2,
    },
  },
]

function isEmptyStory(story: StarStory): boolean {
  return storyFields.every(({ part }) => story[part].trim() === '')
}

/** Repeatable STAR project stories of the profile. */
export function StoriesSection({
  section,
}: {
  section: Extract<DossierSection, { kind: 'stories' }>
}) {
  const stories = useDossierStore((state) => state.stories)
  const addStory = useDossierStore((state) => state.addStory)
  const updateStory = useDossierStore((state) => state.updateStory)
  const removeStory = useDossierStore((state) => state.removeStory)

  const handleRemove = (story: StarStory) => {
    if (isEmptyStory(story) || window.confirm('Diese Story wirklich löschen?')) {
      removeStory(story.id)
    }
  }

  return (
    <SectionCard section={section}>
      {stories.length === 0 && (
        <p className="text-slate-600 dark:text-slate-400 print:hidden">
          Noch keine Story angelegt. Beginne mit dem Projekt, das am besten zu deiner Wunschrolle
          passt.
        </p>
      )}
      {stories.map((story, index) => (
        <section
          key={story.id}
          aria-label={`Story ${index + 1}`}
          className="space-y-4 rounded-lg border border-slate-200 p-4 sm:p-5 dark:border-slate-700 print:break-inside-avoid print:border-0 print:p-0"
        >
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              Story {index + 1}
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleRemove(story)}
              className="print:hidden"
            >
              <TrashIcon className="h-4 w-4" />
              Löschen
            </Button>
          </div>
          {storyFields.map(({ part, field }) => (
            <DossierTextField
              key={part}
              field={field}
              value={story[part]}
              onChange={(value) => updateStory(story.id, part, value)}
              compact
            />
          ))}
        </section>
      ))}
      <Button variant="secondary" onClick={addStory} className="print:hidden">
        <PlusIcon className="h-4 w-4" />
        Story hinzufügen
      </Button>
    </SectionCard>
  )
}

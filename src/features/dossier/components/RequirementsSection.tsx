import { Button } from '@/components/ui/Button'
import { PlusIcon, TrashIcon } from '@/components/ui/icons'
import type { DossierSection } from '@/types/content'

import { type InterviewSheet, useDossierStore } from '../store'

import { DossierTextField } from './DossierTextField'
import { SectionCard } from './SectionCard'

interface RequirementsSectionProps {
  section: Extract<DossierSection, { kind: 'requirements' }>
  sheet: InterviewSheet
}

/** Requirement-to-evidence matrix: one row per line of the job posting. */
export function RequirementsSection({ section, sheet }: RequirementsSectionProps) {
  const addRequirement = useDossierStore((state) => state.addRequirement)
  const updateRequirement = useDossierStore((state) => state.updateRequirement)
  const removeRequirement = useDossierStore((state) => state.removeRequirement)

  return (
    <SectionCard section={section}>
      {sheet.requirements.length === 0 && (
        <p className="text-slate-600 dark:text-slate-400 print:hidden">
          Noch keine Anforderung erfasst. Nimm dir die Ausschreibung und lege für jede Zeile eine
          Anforderung an.
        </p>
      )}
      {sheet.requirements.map((row, index) => (
        <div
          key={row.id}
          className="rounded-lg border border-slate-200 p-4 dark:border-slate-700 print:break-inside-avoid print:border-0 print:p-0"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <DossierTextField
              field={{
                label: `Anforderung ${index + 1}`,
                placeholder: 'Wörtlich oder sinngemäß aus der Ausschreibung',
                rows: 3,
              }}
              value={row.requirement}
              onChange={(value) => updateRequirement(sheet.id, row.id, 'requirement', value)}
              compact
            />
            <DossierTextField
              field={{
                label: 'Mein Beleg',
                placeholder: 'Projekt, Zahl oder Story – oder die ehrliche Einordnung der Lücke',
                rows: 3,
              }}
              value={row.evidence}
              onChange={(value) => updateRequirement(sheet.id, row.id, 'evidence', value)}
              compact
            />
          </div>
          <div className="mt-2 flex justify-end print:hidden">
            <Button variant="ghost" size="sm" onClick={() => removeRequirement(sheet.id, row.id)}>
              <TrashIcon className="h-4 w-4" />
              Zeile entfernen
            </Button>
          </div>
        </div>
      ))}
      <Button variant="secondary" onClick={() => addRequirement(sheet.id)} className="print:hidden">
        <PlusIcon className="h-4 w-4" />
        Anforderung hinzufügen
      </Button>
    </SectionCard>
  )
}

import type { DossierSection } from '@/types/content'

import { DossierTextField } from './DossierTextField'
import { SectionCard } from './SectionCard'

interface FieldsSectionProps {
  section: Extract<DossierSection, { kind: 'fields' }>
  /** Current text per field id */
  values: Readonly<Record<string, string>>
  onChange: (fieldId: string, value: string) => void
}

/** A dossier section made of plain fill-in fields. */
export function FieldsSection({ section, values, onChange }: FieldsSectionProps) {
  return (
    <SectionCard section={section}>
      {section.fields.map((field) => (
        <DossierTextField
          key={field.id}
          field={field}
          value={values[field.id] ?? ''}
          onChange={(value) => onChange(field.id, value)}
        />
      ))}
    </SectionCard>
  )
}

import { ChecklistItem } from '@/components/ui/ChecklistItem'
import type { DossierSection } from '@/types/content'

import { type InterviewSheet, useDossierStore } from '../store'

import { SectionCard } from './SectionCard'

interface ChecklistSectionProps {
  section: Extract<DossierSection, { kind: 'checklist' }>
  sheet: InterviewSheet
}

/** Tick list for the last preparations before one interview. */
export function ChecklistSection({ section, sheet }: ChecklistSectionProps) {
  const toggleSheetCheck = useDossierStore((state) => state.toggleSheetCheck)
  return (
    <SectionCard section={section}>
      <ul className="space-y-1">
        {section.items.map((item) => (
          <ChecklistItem
            key={item.id}
            checked={sheet.checkedItems.includes(item.id)}
            onToggle={() => toggleSheetCheck(sheet.id, item.id)}
          >
            {item.label}
          </ChecklistItem>
        ))}
      </ul>
    </SectionCard>
  )
}

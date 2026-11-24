import { useNavigate, useParams } from 'react-router-dom'

import { routes } from '@/app/routes'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Button } from '@/components/ui/Button'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Card } from '@/components/ui/Card'
import { PageHeader } from '@/components/ui/PageHeader'
import { PrinterIcon, TrashIcon } from '@/components/ui/icons'
import {
  SHEET_CUSTOMER_FIELD,
  SHEET_DATE_FIELD,
  SHEET_ROLE_FIELD,
  sheetSections,
} from '@/data/dossier'
import { assertNever } from '@/lib/assertNever'
import type { DossierSection } from '@/types/content'

import { ChecklistSection } from './components/ChecklistSection'
import { FieldsSection } from './components/FieldsSection'
import { RequirementsSection } from './components/RequirementsSection'
import { type InterviewSheet, useDossierStore } from './store'

/** Preparation sheet for one interview: research, evidence, questions, terms, debrief. */
export function InterviewSheetPage() {
  const { sheetId } = useParams()
  const sheet = useDossierStore((state) => state.sheets.find((item) => item.id === sheetId))
  const removeSheet = useDossierStore((state) => state.removeSheet)
  const navigate = useNavigate()

  if (!sheet) {
    return (
      <>
        <PageHeader title="Gespräch nicht gefunden" />
        <Card className="p-6 sm:p-8">
          <p className="max-w-[56ch] text-slate-600 dark:text-slate-400">
            Dieses Vorbereitungsblatt gibt es in diesem Browser nicht (mehr).
          </p>
          <ButtonLink to={routes.dossierSheets()} className="mt-5">
            Zu meinen Gesprächen
          </ButtonLink>
        </Card>
      </>
    )
  }

  const customer = sheet.fields[SHEET_CUSTOMER_FIELD]?.trim()
  const subtitle = [sheet.fields[SHEET_ROLE_FIELD], sheet.fields[SHEET_DATE_FIELD]]
    .map((value) => value?.trim())
    .filter(Boolean)
    .join(' · ')

  const handleRemove = () => {
    if (window.confirm('Dieses Vorbereitungsblatt mit allen Einträgen wirklich löschen?')) {
      removeSheet(sheet.id)
      navigate(routes.dossierSheets())
    }
  }

  return (
    <>
      <PageHeader
        title={customer || 'Neues Gespräch'}
        description={subtitle || undefined}
        eyebrow={
          <div className="print:hidden">
            <Breadcrumb
              items={[
                { label: 'Gesprächsmappe', to: routes.dossier() },
                { label: 'Meine Gespräche', to: routes.dossierSheets() },
              ]}
            />
          </div>
        }
      >
        <div className="mt-5 flex flex-wrap gap-3 print:hidden">
          <Button variant="secondary" size="sm" onClick={() => window.print()}>
            <PrinterIcon className="h-4 w-4" />
            Blatt drucken
          </Button>
          <Button variant="ghost" size="sm" onClick={handleRemove}>
            <TrashIcon className="h-4 w-4" />
            Blatt löschen
          </Button>
        </div>
      </PageHeader>

      <div className="space-y-6">
        {sheetSections.map((section) => (
          <SheetSection key={section.id} section={section} sheet={sheet} />
        ))}
      </div>
    </>
  )
}

function SheetSection({ section, sheet }: { section: DossierSection; sheet: InterviewSheet }) {
  const setSheetField = useDossierStore((state) => state.setSheetField)

  switch (section.kind) {
    case 'fields':
      return (
        <FieldsSection
          section={section}
          values={sheet.fields}
          onChange={(fieldId, value) => setSheetField(sheet.id, fieldId, value)}
        />
      )
    case 'requirements':
      return <RequirementsSection section={section} sheet={sheet} />
    case 'checklist':
      return <ChecklistSection section={section} sheet={sheet} />
    case 'stories':
      // STAR stories belong to the reusable profile, not to a single interview
      return null
    default:
      return assertNever(section)
  }
}

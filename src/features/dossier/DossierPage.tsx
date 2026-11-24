import { Link, useNavigate, useSearchParams } from 'react-router-dom'

import { routes, SHEETS_VIEW_PARAM, SHEETS_VIEW_VALUE } from '@/app/routes'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { PageHeader } from '@/components/ui/PageHeader'
import { ArrowRightIcon, PlusIcon, PrinterIcon } from '@/components/ui/icons'
import {
  countFields,
  profileSections,
  SHEET_CUSTOMER_FIELD,
  SHEET_DATE_FIELD,
  SHEET_ROLE_FIELD,
  sheetSections,
} from '@/data/dossier'
import { cn } from '@/lib/cn'

import { FieldsSection } from './components/FieldsSection'
import { StoriesSection } from './components/StoriesSection'
import { type InterviewSheet, useDossierStore } from './store'

type View = 'profile' | 'sheets'

const profileFieldCount = countFields(profileSections)
const sheetFieldCount = countFields(sheetSections)

function countFilled(values: Readonly<Record<string, string>>): number {
  return Object.values(values).filter((value) => value.trim() !== '').length
}

/**
 * The learner's own interview material: a reusable profile and one prep sheet
 * per interview. Everything here starts empty and is filled in by the learner.
 */
export function DossierPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const view: View =
    searchParams.get(SHEETS_VIEW_PARAM) === SHEETS_VIEW_VALUE ? 'sheets' : 'profile'
  const sheetCount = useDossierStore((state) => state.sheets.length)

  const selectView = (next: View) =>
    setSearchParams(next === 'sheets' ? { [SHEETS_VIEW_PARAM]: SHEETS_VIEW_VALUE } : {}, {
      replace: true,
    })

  return (
    <>
      <PageHeader
        title="Gesprächsmappe"
        description="Deine eigenen Inhalte fürs Gespräch: einmal dein Profil, dazu pro Kunde ein Vorbereitungsblatt. Die Felder sind leer – du füllst sie mit deinen Projekten, Zahlen und Formulierungen."
      >
        <p className="mt-3 max-w-[60ch] text-sm text-slate-500 dark:text-slate-400 print:hidden">
          Gespeichert wird automatisch und ausschließlich lokal in diesem Browser. Das Zurücksetzen
          des Lernfortschritts lässt die Mappe unberührt.
        </p>
      </PageHeader>

      <div
        role="tablist"
        aria-label="Bereiche der Gesprächsmappe"
        className="mb-8 flex gap-1 border-b border-slate-200 dark:border-slate-800 print:hidden"
      >
        <ViewTab selected={view === 'profile'} onSelect={() => selectView('profile')}>
          Mein Profil
        </ViewTab>
        <ViewTab selected={view === 'sheets'} onSelect={() => selectView('sheets')}>
          Meine Gespräche{sheetCount > 0 && ` (${sheetCount})`}
        </ViewTab>
      </div>

      {view === 'profile' ? <ProfileView /> : <SheetsView />}
    </>
  )
}

function ViewTab({
  selected,
  onSelect,
  children,
}: {
  selected: boolean
  onSelect: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      onClick={onSelect}
      className={cn(
        '-mb-px cursor-pointer border-b-2 px-4 py-2.5 font-semibold outline-brand-500 transition-colors focus-visible:outline-2',
        selected
          ? 'border-brand-600 text-brand-800 dark:border-brand-400 dark:text-brand-200'
          : 'border-transparent text-slate-600 hover:text-ink dark:text-slate-400 dark:hover:text-white',
      )}
    >
      {children}
    </button>
  )
}

function ProfileView() {
  const profile = useDossierStore((state) => state.profile)
  const storyCount = useDossierStore((state) => state.stories.length)
  const setProfileField = useDossierStore((state) => state.setProfileField)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
        <p className="text-sm text-slate-600 tabular-nums dark:text-slate-400">
          {countFilled(profile)} von {profileFieldCount} Feldern ausgefüllt, {storyCount}{' '}
          {storyCount === 1 ? 'Story' : 'Storys'} angelegt
        </p>
        <Button variant="secondary" size="sm" onClick={() => window.print()}>
          <PrinterIcon className="h-4 w-4" />
          Profil drucken
        </Button>
      </div>
      {profileSections.map((section) => {
        if (section.kind === 'fields') {
          return (
            <FieldsSection
              key={section.id}
              section={section}
              values={profile}
              onChange={setProfileField}
            />
          )
        }
        if (section.kind === 'stories') return <StoriesSection key={section.id} section={section} />
        return null
      })}
    </div>
  )
}

function SheetsView() {
  const sheets = useDossierStore((state) => state.sheets)
  const addSheet = useDossierStore((state) => state.addSheet)
  const navigate = useNavigate()

  const handleAdd = () => navigate(routes.interviewSheet(addSheet()))

  return (
    <div className="space-y-4">
      {sheets.length === 0 ? (
        <Card className="p-6 sm:p-8">
          <p className="text-lg font-semibold">Noch kein Gespräch angelegt</p>
          <p className="mt-1 max-w-[58ch] text-slate-600 dark:text-slate-400">
            Für jedes Gespräch legst du ein Blatt an: Recherche zum Kunden, Anforderungen mit deinen
            Belegen, Rückfragen, Konditionen – und danach das Debrief.
          </p>
        </Card>
      ) : (
        <ul className="space-y-3">
          {[...sheets]
            .sort((a, b) => b.createdAt - a.createdAt)
            .map((sheet) => (
              <SheetListItem key={sheet.id} sheet={sheet} />
            ))}
        </ul>
      )}
      <Button onClick={handleAdd}>
        <PlusIcon className="h-4 w-4" />
        Neues Gespräch vorbereiten
      </Button>
    </div>
  )
}

function SheetListItem({ sheet }: { sheet: InterviewSheet }) {
  const customer = sheet.fields[SHEET_CUSTOMER_FIELD]?.trim()
  const details = [sheet.fields[SHEET_ROLE_FIELD], sheet.fields[SHEET_DATE_FIELD]]
    .map((value) => value?.trim())
    .filter(Boolean)
    .join(' · ')

  return (
    <li>
      <Link
        to={routes.interviewSheet(sheet.id)}
        className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 outline-brand-500 transition-colors hover:border-brand-300 focus-visible:outline-2 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700"
      >
        <span className="min-w-0 flex-1">
          <span className="block font-semibold group-hover:text-brand-700 dark:group-hover:text-brand-300">
            {customer || 'Gespräch ohne Namen'}
          </span>
          {details && (
            <span className="block truncate text-sm text-slate-600 dark:text-slate-400">
              {details}
            </span>
          )}
          <span className="mt-0.5 block text-sm text-slate-500 tabular-nums dark:text-slate-400">
            {countFilled(sheet.fields)} von {sheetFieldCount} Feldern, {sheet.requirements.length}{' '}
            {sheet.requirements.length === 1 ? 'Anforderung' : 'Anforderungen'}
          </span>
        </span>
        <ArrowRightIcon className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600" />
      </Link>
    </li>
  )
}

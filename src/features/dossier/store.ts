import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { createId } from '@/lib/createId'

/** One project story in STAR form. */
export interface StarStory {
  id: string
  title: string
  situation: string
  task: string
  action: string
  result: string
}

export type StarStoryPart = Exclude<keyof StarStory, 'id'>

/** One line of a job posting matched with the learner's evidence. */
export interface RequirementRow {
  id: string
  requirement: string
  evidence: string
}

export type RequirementPart = Exclude<keyof RequirementRow, 'id'>

/** Preparation sheet for one specific interview. */
export interface InterviewSheet {
  id: string
  createdAt: number
  /** Text per field id, see `sheetSections` */
  fields: Record<string, string>
  requirements: RequirementRow[]
  /** Ids of ticked prep-checklist items */
  checkedItems: string[]
}

interface DossierState {
  /** Text per field id, see `profileSections` */
  profile: Record<string, string>
  stories: StarStory[]
  sheets: InterviewSheet[]
  setProfileField: (fieldId: string, value: string) => void
  addStory: () => void
  updateStory: (storyId: string, part: StarStoryPart, value: string) => void
  removeStory: (storyId: string) => void
  /** Creates an empty sheet and returns its id */
  addSheet: () => string
  removeSheet: (sheetId: string) => void
  setSheetField: (sheetId: string, fieldId: string, value: string) => void
  addRequirement: (sheetId: string) => void
  updateRequirement: (sheetId: string, rowId: string, part: RequirementPart, value: string) => void
  removeRequirement: (sheetId: string, rowId: string) => void
  toggleSheetCheck: (sheetId: string, itemId: string) => void
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

function asText(value: unknown): string {
  return typeof value === 'string' ? value : ''
}

function sanitizeTextMap(value: unknown): Record<string, string> {
  if (!isRecord(value)) return {}
  const result: Record<string, string> = {}
  for (const [key, text] of Object.entries(value)) {
    if (typeof text === 'string') result[key] = text
  }
  return result
}

function sanitizeStories(value: unknown): StarStory[] {
  if (!Array.isArray(value)) return []
  return value.filter(isRecord).map((story) => ({
    id: asText(story.id) || createId(),
    title: asText(story.title),
    situation: asText(story.situation),
    task: asText(story.task),
    action: asText(story.action),
    result: asText(story.result),
  }))
}

function sanitizeSheets(value: unknown): InterviewSheet[] {
  if (!Array.isArray(value)) return []
  return value.filter(isRecord).map((sheet) => ({
    id: asText(sheet.id) || createId(),
    createdAt: typeof sheet.createdAt === 'number' ? sheet.createdAt : Date.now(),
    fields: sanitizeTextMap(sheet.fields),
    requirements: Array.isArray(sheet.requirements)
      ? sheet.requirements.filter(isRecord).map((row) => ({
          id: asText(row.id) || createId(),
          requirement: asText(row.requirement),
          evidence: asText(row.evidence),
        }))
      : [],
    checkedItems: Array.isArray(sheet.checkedItems)
      ? sheet.checkedItems.filter((id): id is string => typeof id === 'string')
      : [],
  }))
}

/** Applies `change` to the sheet with the given id and leaves all others untouched. */
function mapSheet(
  sheets: InterviewSheet[],
  sheetId: string,
  change: (sheet: InterviewSheet) => InterviewSheet,
): InterviewSheet[] {
  return sheets.map((sheet) => (sheet.id === sheetId ? change(sheet) : sheet))
}

/**
 * The learner's own interview material: a reusable profile plus one prep sheet
 * per interview. Kept apart from the learning progress so that resetting the
 * progress never deletes personal content.
 */
export const useDossierStore = create<DossierState>()(
  persist(
    (set) => ({
      profile: {},
      stories: [],
      sheets: [],
      setProfileField: (fieldId, value) =>
        set((state) => ({ profile: { ...state.profile, [fieldId]: value } })),
      addStory: () =>
        set((state) => ({
          stories: [
            ...state.stories,
            { id: createId(), title: '', situation: '', task: '', action: '', result: '' },
          ],
        })),
      updateStory: (storyId, part, value) =>
        set((state) => ({
          stories: state.stories.map((story) =>
            story.id === storyId ? { ...story, [part]: value } : story,
          ),
        })),
      removeStory: (storyId) =>
        set((state) => ({ stories: state.stories.filter((story) => story.id !== storyId) })),
      addSheet: () => {
        const id = createId()
        set((state) => ({
          sheets: [
            ...state.sheets,
            { id, createdAt: Date.now(), fields: {}, requirements: [], checkedItems: [] },
          ],
        }))
        return id
      },
      removeSheet: (sheetId) =>
        set((state) => ({ sheets: state.sheets.filter((sheet) => sheet.id !== sheetId) })),
      setSheetField: (sheetId, fieldId, value) =>
        set((state) => ({
          sheets: mapSheet(state.sheets, sheetId, (sheet) => ({
            ...sheet,
            fields: { ...sheet.fields, [fieldId]: value },
          })),
        })),
      addRequirement: (sheetId) =>
        set((state) => ({
          sheets: mapSheet(state.sheets, sheetId, (sheet) => ({
            ...sheet,
            requirements: [
              ...sheet.requirements,
              { id: createId(), requirement: '', evidence: '' },
            ],
          })),
        })),
      updateRequirement: (sheetId, rowId, part, value) =>
        set((state) => ({
          sheets: mapSheet(state.sheets, sheetId, (sheet) => ({
            ...sheet,
            requirements: sheet.requirements.map((row) =>
              row.id === rowId ? { ...row, [part]: value } : row,
            ),
          })),
        })),
      removeRequirement: (sheetId, rowId) =>
        set((state) => ({
          sheets: mapSheet(state.sheets, sheetId, (sheet) => ({
            ...sheet,
            requirements: sheet.requirements.filter((row) => row.id !== rowId),
          })),
        })),
      toggleSheetCheck: (sheetId, itemId) =>
        set((state) => ({
          sheets: mapSheet(state.sheets, sheetId, (sheet) => ({
            ...sheet,
            checkedItems: sheet.checkedItems.includes(itemId)
              ? sheet.checkedItems.filter((id) => id !== itemId)
              : [...sheet.checkedItems, itemId],
          })),
        })),
    }),
    {
      name: 'kommpro-dossier',
      version: 1,
      // Validating merge: malformed persisted data falls back to empty values
      // instead of crashing at render time
      merge: (persisted, current) => {
        const candidate = isRecord(persisted) ? persisted : {}
        return {
          ...current,
          profile: sanitizeTextMap(candidate.profile),
          stories: sanitizeStories(candidate.stories),
          sheets: sanitizeSheets(candidate.sheets),
        }
      },
    },
  ),
)

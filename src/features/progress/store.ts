import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface ExerciseResult {
  /** Quiz/scenario: whether the best answer was picked. Unset for freetext. */
  correct?: boolean
  /** Freetext self-assessment: fraction of checklist items ticked (0..1). */
  selfScore?: number
}

interface ProgressState {
  exerciseResults: Record<string, ExerciseResult>
  completedLessons: string[]
  recordExerciseResult: (exerciseId: string, result: ExerciseResult) => void
  markLessonCompleted: (lessonId: string) => void
  resetProgress: () => void
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      exerciseResults: {},
      completedLessons: [],
      recordExerciseResult: (exerciseId, result) =>
        set((state) => ({
          exerciseResults: { ...state.exerciseResults, [exerciseId]: result },
        })),
      markLessonCompleted: (lessonId) =>
        set((state) =>
          state.completedLessons.includes(lessonId)
            ? state
            : { completedLessons: [...state.completedLessons, lessonId] },
        ),
      resetProgress: () => set({ exerciseResults: {}, completedLessons: [] }),
    }),
    {
      name: 'kommpro-progress',
      version: 1,
      // Validating merge: malformed persisted data (e.g. manually edited
      // localStorage) falls back to defaults instead of crashing at render time
      merge: (persisted, current) => {
        const candidate = persisted as Partial<ProgressState> | null | undefined
        const exerciseResults = candidate?.exerciseResults
        const completedLessons = candidate?.completedLessons
        return {
          ...current,
          exerciseResults:
            exerciseResults !== null &&
            typeof exerciseResults === 'object' &&
            !Array.isArray(exerciseResults)
              ? exerciseResults
              : current.exerciseResults,
          completedLessons: Array.isArray(completedLessons)
            ? completedLessons.filter((id): id is string => typeof id === 'string')
            : current.completedLessons,
        }
      },
    },
  ),
)

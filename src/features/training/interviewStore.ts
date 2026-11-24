import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface InterviewTrainingState {
  /** Latest self-assessment per question id: fraction of checklist items ticked (0..1) */
  ratings: Record<string, number>
  recordRating: (questionId: string, score: number) => void
  resetRatings: () => void
}

function sanitizeRatings(value: unknown): Record<string, number> {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) return {}
  const ratings: Record<string, number> = {}
  for (const [questionId, score] of Object.entries(value)) {
    if (typeof score === 'number' && Number.isFinite(score)) {
      ratings[questionId] = Math.min(1, Math.max(0, score))
    }
  }
  return ratings
}

/**
 * Remembers how the learner rated their own interview answers, so the trainer
 * can show progress per question set and offer a "weak spots" round.
 */
export const useInterviewTrainingStore = create<InterviewTrainingState>()(
  persist(
    (set) => ({
      ratings: {},
      recordRating: (questionId, score) =>
        set((state) => ({ ratings: { ...state.ratings, [questionId]: score } })),
      resetRatings: () => set({ ratings: {} }),
    }),
    {
      name: 'kommpro-interview-training',
      version: 1,
      // Malformed persisted data falls back to an empty rating map
      merge: (persisted, current) => ({
        ...current,
        ratings: sanitizeRatings((persisted as Partial<InterviewTrainingState> | null)?.ratings),
      }),
    },
  ),
)

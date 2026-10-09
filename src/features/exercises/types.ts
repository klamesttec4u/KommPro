import type { ExerciseResult } from '@/features/progress/store'

/** Shared contract between the ExerciseRunner and each exercise component. */
export interface ExerciseComponentProps<TExercise> {
  exercise: TExercise
  /** Called exactly once, as soon as the learner has answered. */
  onAnswered: (result: ExerciseResult) => void
}

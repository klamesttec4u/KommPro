import type { Exercise } from '@/types/content'

import { shuffleArray } from './shuffle'

/** How many questions from a lesson's quiz pool appear in a single run. */
export const QUIZZES_PER_RUN = 2

/** True when the lesson has more quiz questions than one run shows. */
export function hasQuizPool(exercises: readonly Exercise[]): boolean {
  return exercises.filter((exercise) => exercise.kind === 'quiz').length > QUIZZES_PER_RUN
}

/**
 * Draws the exercises for one run: a random sample from the quiz pool plus
 * every non-quiz exercise, keeping the authored order of what remains.
 * Repeating a lesson draws again, so the questions vary between runs.
 */
export function drawExerciseRun(exercises: readonly Exercise[]): Exercise[] {
  const quizzes = exercises.filter((exercise) => exercise.kind === 'quiz')
  if (quizzes.length <= QUIZZES_PER_RUN) return [...exercises]

  const drawnIds = new Set(
    shuffleArray(quizzes)
      .slice(0, QUIZZES_PER_RUN)
      .map((quiz) => quiz.id),
  )
  return exercises.filter((exercise) => exercise.kind !== 'quiz' || drawnIds.has(exercise.id))
}

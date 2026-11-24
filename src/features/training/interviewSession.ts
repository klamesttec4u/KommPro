import { CLOSING_QUESTION_ID, OPENING_QUESTION_ID } from '@/data/interview'
import { shuffleArray } from '@/lib/shuffle'
import type { InterviewQuestion, InterviewQuestionSet } from '@/types/content'

/** A self-assessment at or above this fraction counts as "the answer sits". */
export const SECURE_SCORE = 0.75

/** Questions drawn from each set for the mixed interview (plus opener and closer). */
export const MIXED_QUESTIONS_PER_SET = 2

/** Selectable rounds that are composed at start time instead of being a fixed set. */
export const MIXED_ROUND_ID = 'mixed'
export const WEAK_ROUND_ID = 'weak'

export function isSecure(score: number | undefined): boolean {
  return score !== undefined && score >= SECURE_SCORE
}

function isBookend(question: InterviewQuestion): boolean {
  return question.id === OPENING_QUESTION_ID || question.id === CLOSING_QUESTION_ID
}

/**
 * A realistic interview: self-introduction first, the candidate's own questions
 * last, and in between a random draw from every set in random order — so topic
 * and tone change from question to question like in a real conversation.
 */
export function buildMixedInterview(sets: readonly InterviewQuestionSet[]): InterviewQuestion[] {
  const all = sets.flatMap((set) => set.questions)
  const opener = all.find((question) => question.id === OPENING_QUESTION_ID)
  const closer = all.find((question) => question.id === CLOSING_QUESTION_ID)
  const middle = sets.flatMap((set) =>
    shuffleArray(set.questions.filter((question) => !isBookend(question))).slice(
      0,
      MIXED_QUESTIONS_PER_SET,
    ),
  )
  return [...(opener ? [opener] : []), ...shuffleArray(middle), ...(closer ? [closer] : [])]
}

/** Every question the learner has rated below the secure threshold, in catalog order. */
export function collectWeakQuestions(
  sets: readonly InterviewQuestionSet[],
  ratings: Readonly<Record<string, number>>,
): InterviewQuestion[] {
  return sets
    .flatMap((set) => set.questions)
    .filter((question) => {
      const score = ratings[question.id]
      return score !== undefined && !isSecure(score)
    })
}

/** How many of the given questions the learner currently answers securely. */
export function countSecure(
  questions: readonly InterviewQuestion[],
  ratings: Readonly<Record<string, number>>,
): number {
  return questions.filter((question) => isSecure(ratings[question.id])).length
}

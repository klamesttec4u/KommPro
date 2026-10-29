import type { Lesson, Module } from '@/types/content'

import type { ExerciseResult } from './store'

export interface LessonProgress {
  answeredExercises: number
  totalExercises: number
  isCompleted: boolean
}

export interface ModuleProgress {
  completedLessons: number
  totalLessons: number
  /** 0..100, rounded */
  percent: number
}

function toPercent(done: number, total: number): number {
  return total === 0 ? 0 : Math.round((done / total) * 100)
}

export function getLessonProgress(
  lesson: Lesson,
  exerciseResults: Record<string, ExerciseResult>,
  completedLessons: string[],
): LessonProgress {
  const answeredExercises = lesson.exercises.filter(
    (exercise) => exercise.id in exerciseResults,
  ).length
  return {
    answeredExercises,
    totalExercises: lesson.exercises.length,
    isCompleted: completedLessons.includes(lesson.id),
  }
}

export function getModuleProgress(module: Module, completedLessons: string[]): ModuleProgress {
  const done = module.lessons.filter((lesson) => completedLessons.includes(lesson.id)).length
  return {
    completedLessons: done,
    totalLessons: module.lessons.length,
    percent: toPercent(done, module.lessons.length),
  }
}

export interface ResultsSummary {
  gradedCount: number
  correctCount: number
  freetextCount: number
  /** Percentage of correct graded answers, or null if nothing was graded. */
  percentCorrect: number | null
}

/** Summarizes one exercise run (quiz/scenario are graded, freetext is self-assessed). */
export function summarizeResults(results: ExerciseResult[]): ResultsSummary {
  const graded = results.filter((result) => result.correct !== undefined)
  const correctCount = graded.filter((result) => result.correct).length
  return {
    gradedCount: graded.length,
    correctCount,
    freetextCount: results.length - graded.length,
    percentCorrect: graded.length === 0 ? null : Math.round((correctCount / graded.length) * 100),
  }
}

export function getOverallProgress(modules: Module[], completedLessons: string[]): ModuleProgress {
  const allLessons = modules.flatMap((module) => module.lessons)
  const done = allLessons.filter((lesson) => completedLessons.includes(lesson.id)).length
  return {
    completedLessons: done,
    totalLessons: allLessons.length,
    percent: toPercent(done, allLessons.length),
  }
}

export interface NextLesson {
  module: Module
  lesson: Lesson
  /** True once at least one lesson anywhere is completed */
  hasStarted: boolean
}

/** First not-yet-completed lesson in display order, or null when everything is done. */
export function getNextLesson(modules: Module[], completedLessons: string[]): NextLesson | null {
  const hasStarted = completedLessons.length > 0
  for (const module of modules) {
    for (const lesson of module.lessons) {
      if (!completedLessons.includes(lesson.id)) return { module, lesson, hasStarted }
    }
  }
  return null
}

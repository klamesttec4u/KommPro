import { useMemo } from 'react'

import type { Lesson, Module } from '@/types/content'

import {
  getLessonProgress,
  getModuleProgress,
  getNextLesson,
  getOverallProgress,
} from './selectors'
import { useProgressStore } from './store'

export function useLessonProgress(lesson: Lesson) {
  const exerciseResults = useProgressStore((state) => state.exerciseResults)
  const completedLessons = useProgressStore((state) => state.completedLessons)
  return useMemo(
    () => getLessonProgress(lesson, exerciseResults, completedLessons),
    [lesson, exerciseResults, completedLessons],
  )
}

export function useModuleProgress(module: Module) {
  const completedLessons = useProgressStore((state) => state.completedLessons)
  return useMemo(() => getModuleProgress(module, completedLessons), [module, completedLessons])
}

export function useOverallProgress(modules: Module[]) {
  const completedLessons = useProgressStore((state) => state.completedLessons)
  return useMemo(() => getOverallProgress(modules, completedLessons), [modules, completedLessons])
}

export function useNextLesson(modules: Module[]) {
  const completedLessons = useProgressStore((state) => state.completedLessons)
  return useMemo(() => getNextLesson(modules, completedLessons), [modules, completedLessons])
}

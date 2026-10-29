import type { Lesson } from '@/types/content'

// Study reading is slower than skimming
const WORDS_PER_MINUTE = 150

function countWords(text: string): number {
  return text.split(/\s+/).filter(Boolean).length
}

/** Estimated reading time of a lesson's theory part in whole minutes (at least 1). */
export function lessonReadingMinutes(lesson: Lesson): number {
  const words = lesson.theory.reduce((sum, block) => {
    switch (block.kind) {
      case 'text':
        return sum + countWords(`${block.heading ?? ''} ${block.body}`)
      case 'keypoints':
        return sum + countWords([block.title, ...block.points].join(' '))
      case 'example':
        return sum + countWords(`${block.title} ${block.good ?? ''} ${block.bad ?? ''}`)
      case 'table':
        return sum + countWords([...block.headers, ...block.rows.flat()].join(' '))
    }
  }, 0)
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))
}

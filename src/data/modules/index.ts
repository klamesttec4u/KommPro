import type { Lesson, Module, ModuleCategory } from '@/types/content'

import { communicationBasics } from './01-communication-basics'
import { listeningQuestioning } from './02-listening-questioning'
import { feedbackConversations } from './03-feedback-conversations'
import { writtenCommunication } from './04-written-communication'
import { meetingsModeration } from './05-meetings-moderation'
import { conflictCommunication } from './06-conflict-communication'
import { negotiation } from './07-negotiation'
import { presentationStructure } from './08-presentation-structure'
import { storytelling } from './09-storytelling'
import { rhetoricLanguage } from './10-rhetoric-language'
import { bodyLanguage } from './11-body-language'
import { slideDesign } from './12-slide-design'
import { consultantQualification } from './13-consultant-qualification'
import { communicationPitfalls } from './14-communication-pitfalls'

/** All learning modules in display order. */
export const modules: Module[] = [
  communicationBasics,
  listeningQuestioning,
  feedbackConversations,
  writtenCommunication,
  meetingsModeration,
  conflictCommunication,
  negotiation,
  presentationStructure,
  storytelling,
  rhetoricLanguage,
  bodyLanguage,
  slideDesign,
  consultantQualification,
  communicationPitfalls,
]

export function findModule(moduleId: string | undefined): Module | undefined {
  return modules.find((module) => module.id === moduleId)
}

export function findLesson(module: Module, lessonId: string | undefined): Lesson | undefined {
  return module.lessons.find((lesson) => lesson.id === lessonId)
}

export interface Track {
  category: ModuleCategory
  label: string
}

/** The three learning tracks in display order. */
export const tracks: Track[] = [
  { category: 'communication', label: 'Kommunikation' },
  { category: 'presentation', label: 'Präsentation' },
  { category: 'consulting', label: 'IT Consulting' },
]

export function trackLabel(category: ModuleCategory): string {
  return tracks.find((track) => track.category === category)?.label ?? ''
}

export function modulesInTrack(category: ModuleCategory): Module[] {
  return modules.filter((module) => module.category === category)
}

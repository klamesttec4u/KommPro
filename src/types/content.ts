/** Domain types for all learning content. Content strings are German; code stays English. */

export type ModuleCategory = 'communication' | 'presentation' | 'consulting'

export interface Module {
  /** URL-safe slug, e.g. "communication-basics" */
  id: string
  title: string
  description: string
  category: ModuleCategory
  lessons: Lesson[]
}

export interface Lesson {
  /** Globally unique slug, e.g. "sender-receiver" */
  id: string
  title: string
  theory: TheoryBlock[]
  exercises: Exercise[]
}

export type TheoryBlock =
  | { kind: 'text'; heading?: string; body: string }
  /** Highlighted key takeaways box */
  | { kind: 'keypoints'; title: string; points: string[] }
  /** Good/bad side-by-side example */
  | { kind: 'example'; title: string; good?: string; bad?: string }
  | { kind: 'table'; headers: string[]; rows: string[][] }

export interface QuizOption {
  text: string
  correct: boolean
  /** Shown after answering, explains why this option is right/wrong */
  explanation: string
}

export type ChoiceQuality = 'best' | 'ok' | 'bad'

export interface ScenarioChoice {
  text: string
  quality: ChoiceQuality
  feedback: string
}

export type Exercise =
  | {
      kind: 'quiz'
      /** Globally unique, convention: "<lessonId>-q<n>" */
      id: string
      question: string
      options: QuizOption[]
    }
  | {
      kind: 'scenario'
      id: string
      situation: string
      choices: ScenarioChoice[]
    }
  | {
      kind: 'freetext'
      id: string
      task: string
      placeholder: string
      sampleSolution: string
      /** Self-assessment criteria the learner checks off */
      checklist: string[]
    }

export type ExerciseKind = Exercise['kind']

/** Presentation drill: free-speech prompt practiced against a timer. */
export interface PitchDrill {
  id: string
  title: string
  description: string
  /** Allowed durations in seconds */
  durations: number[]
  reflectionChecklist: string[]
}

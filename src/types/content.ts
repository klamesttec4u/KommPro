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

/** One recruiter question for the interview trainer drill. */
export interface InterviewQuestion {
  id: string
  /** Approximate minute in the reference call, for orientation (omitted for generic sets) */
  minute?: number
  /** Who asks, e.g. "Projektleitung" or "Architekt" */
  interviewer: string
  question: string
  /** Probing follow-up the interviewer fires right after the answer; has no model answer */
  followUp?: string
  idealAnswer: string
  /** Self-assessment criteria shown after answering */
  checklist: string[]
}

/** A selectable question set for the interview trainer. */
export interface InterviewQuestionSet {
  id: string
  title: string
  description: string
  questions: InterviewQuestion[]
}

/** One glossary term with its definition and the lesson that teaches it. */
export interface GlossaryEntry {
  term: string
  definition: string
  /** Lesson where the concept is covered; resolved to a deep link if present. */
  lessonId?: string
}

/** One fill-in field of the interview dossier. The learner's text lives in the dossier store. */
export interface DossierField {
  id: string
  label: string
  hint?: string
  placeholder?: string
  /** Render a one-line input instead of a textarea */
  singleLine?: boolean
  /** Textarea height in rows (default 4) */
  rows?: number
}

interface DossierSectionBase {
  id: string
  title: string
  description: string
  /** Lesson that teaches the method behind this section */
  lessonId?: string
}

/** A block of the interview dossier; the kind decides which editor is rendered. */
export type DossierSection =
  | (DossierSectionBase & { kind: 'fields'; fields: DossierField[] })
  /** Repeatable STAR project stories */
  | (DossierSectionBase & { kind: 'stories' })
  /** Requirement-to-evidence matrix for one job posting */
  | (DossierSectionBase & { kind: 'requirements' })
  | (DossierSectionBase & { kind: 'checklist'; items: { id: string; label: string }[] })

/** Presentation drill: free-speech prompt practiced against a timer. */
export interface PitchDrill {
  id: string
  title: string
  description: string
  /** Allowed durations in seconds */
  durations: number[]
  reflectionChecklist: string[]
}

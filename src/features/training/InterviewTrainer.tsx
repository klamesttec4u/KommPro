import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import { ChecklistItem } from '@/components/ui/ChecklistItem'
import { FeedbackPanel } from '@/components/ui/FeedbackPanel'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { ArrowRightIcon, ChatIcon, CheckCircleIcon, RotateCcwIcon } from '@/components/ui/icons'
import { interviewQuestionSets } from '@/data/interview'
import { cn } from '@/lib/cn'
import type { InterviewQuestion, InterviewQuestionSet } from '@/types/content'

import { RecordingIndicator, RecordingPlayback, RecordingToggle } from './RecordingControls'
import { TimerDisplay } from './TimerDisplay'
import { TrainingCard } from './TrainingCard'
import { useAudioRecorder } from './useAudioRecorder'
import { useCountdown } from './useCountdown'

const ANSWER_SECONDS = 90

type Phase = 'intro' | 'question' | 'speaking' | 'reveal' | 'done'

export function InterviewTrainer() {
  const firstSet = interviewQuestionSets[0]
  if (!firstSet) return null
  return <InterviewTrainerInner firstSet={firstSet} />
}

/**
 * Interview simulation: recruiter questions appear one at a time WITHOUT the
 * model answer; the learner answers out loud against a timer, then the ideal
 * answer and a self-check are revealed.
 */
function InterviewTrainerInner({ firstSet }: { firstSet: InterviewQuestionSet }) {
  const [phase, setPhase] = useState<Phase>('intro')
  const [setId, setSetId] = useState(firstSet.id)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [recordEnabled, setRecordEnabled] = useState(false)
  const recorder = useAudioRecorder()
  const countdown = useCountdown(() => {
    recorder.stop()
    setPhase('reveal')
  })

  const questionSet = interviewQuestionSets.find((candidate) => candidate.id === setId) ?? firstSet
  const question = questionSet.questions[questionIndex]
  const isLast = questionIndex === questionSet.questions.length - 1
  if (!question) return null

  const startInterview = () => {
    setQuestionIndex(0)
    setPhase('question')
  }

  const startAnswer = () => {
    setPhase('speaking')
    countdown.start(ANSWER_SECONDS)
    if (recordEnabled) void recorder.start()
  }

  const finishAnswer = () => {
    countdown.stop()
    recorder.stop()
    setPhase('reveal')
  }

  const nextQuestion = () => {
    recorder.reset()
    if (isLast) {
      setPhase('done')
    } else {
      setQuestionIndex((index) => index + 1)
      setPhase('question')
    }
  }

  const restart = () => {
    recorder.reset()
    countdown.reset()
    setQuestionIndex(0)
    setPhase('intro')
  }

  return (
    <TrainingCard
      icon={<ChatIcon className="h-5 w-5" />}
      title="Interview-Trainer"
      description="Wähle ein Frageset. Die Fragen kommen einzeln – du antwortest laut, erst danach siehst du die Musterantwort und bewertest dich selbst."
    >
      {phase === 'intro' && (
        <div className="space-y-5">
          <div className="space-y-2.5">
            {interviewQuestionSets.map((candidate) => (
              <button
                key={candidate.id}
                type="button"
                aria-pressed={candidate.id === setId}
                onClick={() => setSetId(candidate.id)}
                className={cn(
                  'w-full cursor-pointer rounded-lg border px-4 py-3.5 text-left transition-colors outline-brand-500 focus-visible:outline-2 focus-visible:outline-offset-2',
                  candidate.id === setId
                    ? 'border-brand-600 bg-brand-50 ring-1 ring-brand-600 dark:border-brand-400 dark:bg-brand-950/40 dark:ring-brand-400'
                    : 'border-slate-300 bg-white hover:border-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-brand-400',
                )}
              >
                <p className="font-semibold">{candidate.title}</p>
                <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">
                  {candidate.description}
                </p>
              </button>
            ))}
          </div>
          <RecordingToggle
            enabled={recordEnabled}
            onToggle={() => setRecordEnabled((value) => !value)}
            isSupported={recorder.isSupported}
          />
          <Button onClick={startInterview}>
            Interview starten
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      )}

      {phase !== 'intro' && phase !== 'done' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold tabular-nums">
              Frage {questionIndex + 1} von {questionSet.questions.length}
            </p>
            {question.minute !== undefined && (
              <span className="text-sm text-slate-500 dark:text-slate-400">
                im Original etwa Minute {question.minute}
              </span>
            )}
          </div>
          <ProgressBar percent={(questionIndex / questionSet.questions.length) * 100} />

          <figure className="rounded-lg bg-slate-100 px-5 py-4 dark:bg-slate-800/60">
            <figcaption className="text-sm font-semibold text-slate-600 dark:text-slate-300">
              {question.interviewer} fragt
            </figcaption>
            <blockquote className="mt-1.5 font-serif text-xl leading-snug">
              „{question.question}“
            </blockquote>
          </figure>

          {phase === 'question' && (
            <Button onClick={startAnswer}>
              Jetzt laut antworten ({ANSWER_SECONDS} s)
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          )}

          {phase === 'speaking' && (
            <div className="space-y-4 py-2">
              <TimerDisplay
                remainingSeconds={countdown.remainingSeconds}
                totalSeconds={countdown.totalSeconds}
              />
              {recorder.isRecording && <RecordingIndicator />}
              <div className="flex justify-center">
                <Button variant="secondary" onClick={finishAnswer}>
                  Fertig
                </Button>
              </div>
            </div>
          )}

          {phase === 'reveal' && (
            <div className="space-y-4">
              <FeedbackPanel tone="info" title="Musterantwort">
                <p className="font-serif text-[1.0625rem] leading-[1.7] whitespace-pre-line">
                  {question.idealAnswer}
                </p>
              </FeedbackPanel>
              <RecordingPlayback audioUrl={recorder.audioUrl} error={recorder.error} />
              <SelfCheck key={question.id} question={question} />
              <div className="flex justify-end">
                <Button onClick={nextQuestion}>
                  {isLast ? 'Interview abschließen' : 'Nächste Frage'}
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      )}

      {phase === 'done' && (
        <div className="space-y-4 py-4 text-center">
          <CheckCircleIcon className="mx-auto h-12 w-12 text-good dark:text-emerald-400" />
          <p className="text-xl font-bold">
            Alle {questionSet.questions.length} Fragen beantwortet
          </p>
          <p className="mx-auto max-w-[52ch] text-slate-600 dark:text-slate-400">
            Tipp: Wiederhole die Fragen, bei denen du ins Stocken geraten bist, bis die Antworten
            sitzen – am besten einmal pro Tag bis zum Gespräch.
          </p>
          <Button onClick={restart}>
            <RotateCcwIcon className="h-4 w-4" />
            Neue Runde
          </Button>
        </div>
      )}
    </TrainingCard>
  )
}

/** Per-question self-assessment; the key prop resets it for each question. */
function SelfCheck({ question }: { question: InterviewQuestion }) {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(() =>
    question.checklist.map(() => false),
  )

  const toggleItem = (index: number) =>
    setCheckedItems((items) => items.map((checked, i) => (i === index ? !checked : checked)))

  return (
    <div className="rounded-lg border border-slate-200 p-5 dark:border-slate-700">
      <p className="mb-3 font-semibold">Was traf auf deine Antwort zu?</p>
      <ul className="space-y-2">
        {question.checklist.map((item, index) => (
          <ChecklistItem
            key={index}
            checked={checkedItems[index] ?? false}
            onToggle={() => toggleItem(index)}
          >
            {item}
          </ChecklistItem>
        ))}
      </ul>
    </div>
  )
}

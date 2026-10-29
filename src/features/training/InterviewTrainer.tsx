import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import { ChecklistItem } from '@/components/ui/ChecklistItem'
import { FeedbackPanel } from '@/components/ui/FeedbackPanel'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { ArrowRightIcon, ChatIcon, CheckCircleIcon, RotateCcwIcon } from '@/components/ui/icons'
import { interviewQuestions } from '@/data/interview'
import type { InterviewQuestion } from '@/types/content'

import { RecordingIndicator, RecordingPlayback, RecordingToggle } from './RecordingControls'
import { TimerDisplay } from './TimerDisplay'
import { TrainingCard } from './TrainingCard'
import { useAudioRecorder } from './useAudioRecorder'
import { useCountdown } from './useCountdown'

const ANSWER_SECONDS = 90

type Phase = 'intro' | 'question' | 'speaking' | 'reveal' | 'done'

/**
 * Interview simulation: recruiter questions appear one at a time WITHOUT the
 * model answer; the learner answers out loud against a timer, then the ideal
 * answer and a self-check are revealed.
 */
export function InterviewTrainer() {
  const [phase, setPhase] = useState<Phase>('intro')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [recordEnabled, setRecordEnabled] = useState(false)
  const recorder = useAudioRecorder()
  const countdown = useCountdown(() => {
    recorder.stop()
    setPhase('reveal')
  })

  const question = interviewQuestions[questionIndex]
  const isLast = questionIndex === interviewQuestions.length - 1
  if (!question) return null

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
      description={`Die ${interviewQuestions.length} Fragen aus dem Referenzgespräch, eine nach der anderen. Du antwortest laut, erst danach siehst du die Musterantwort und bewertest dich selbst.`}
    >
      {phase === 'intro' && (
        <div className="space-y-5">
          <RecordingToggle
            enabled={recordEnabled}
            onToggle={() => setRecordEnabled((value) => !value)}
            isSupported={recorder.isSupported}
          />
          <Button onClick={() => setPhase('question')}>
            Interview starten
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      )}

      {phase !== 'intro' && phase !== 'done' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold tabular-nums">
              Frage {questionIndex + 1} von {interviewQuestions.length}
            </p>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              im Original etwa Minute {question.minute}
            </span>
          </div>
          <ProgressBar percent={(questionIndex / interviewQuestions.length) * 100} />

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
          <p className="text-xl font-bold">Alle {interviewQuestions.length} Fragen beantwortet</p>
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

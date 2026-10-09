import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ChecklistItem } from '@/components/ui/ChecklistItem'
import { FeedbackPanel } from '@/components/ui/FeedbackPanel'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { ArrowRightIcon, ChatIcon, CheckCircleIcon, RotateCcwIcon } from '@/components/ui/icons'
import { interviewQuestions } from '@/data/interview'
import type { InterviewQuestion } from '@/types/content'

import { RecordingPlayback, RecordingToggle } from './RecordingControls'
import { TimerDisplay } from './TimerDisplay'
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
    <Card className="p-5 sm:p-6">
      <h2 className="mb-1 flex items-center gap-2 text-lg font-semibold">
        <ChatIcon className="h-5 w-5 text-brand-600 dark:text-brand-400" />
        Interview-Trainer
      </h2>
      <p className="mb-5 text-sm text-slate-600 dark:text-slate-400">
        Die {interviewQuestions.length} Recruiter-Fragen aus dem Referenzgespräch – ohne sichtbare
        Muster-Antwort. Antworte laut, erst danach siehst du die Ideal-Antwort und bewertest dich
        selbst.
      </p>

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
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Frage {questionIndex + 1} von {interviewQuestions.length}
            </p>
            <span className="rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              Min. {question.minute} · {question.interviewer}
            </span>
          </div>
          <ProgressBar percent={(questionIndex / interviewQuestions.length) * 100} />

          <div className="rounded-lg border border-slate-200 bg-slate-100/70 p-4 dark:border-slate-700 dark:bg-slate-800/60">
            <p className="mb-1 text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
              {question.interviewer} fragt
            </p>
            <p className="font-medium">„{question.question}"</p>
          </div>

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
              {recorder.isRecording && (
                <p className="text-center text-xs font-medium text-red-600 dark:text-red-400">
                  ● Aufnahme läuft (lokal)
                </p>
              )}
              <div className="flex justify-center">
                <Button variant="secondary" onClick={finishAnswer}>
                  Fertig
                </Button>
              </div>
            </div>
          )}

          {phase === 'reveal' && (
            <div className="space-y-4">
              <FeedbackPanel tone="success" title="Ideale Muster-Antwort">
                <p className="whitespace-pre-line">{question.idealAnswer}</p>
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
          <CheckCircleIcon className="mx-auto h-12 w-12 text-emerald-500" />
          <p className="font-semibold">
            Interview durchgespielt – alle {interviewQuestions.length} Fragen beantwortet!
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Tipp: Wiederhole die Fragen, bei denen du ins Stocken geraten bist, bis die Antworten
            sitzen – am besten einmal pro Tag bis zum Gespräch.
          </p>
          <Button onClick={restart}>
            <RotateCcwIcon className="h-4 w-4" />
            Neue Runde
          </Button>
        </div>
      )}
    </Card>
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
    <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
      <p className="mb-3 text-sm font-semibold">Selbstbewertung: Was traf auf deine Antwort zu?</p>
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

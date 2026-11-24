import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import { ChecklistItem } from '@/components/ui/ChecklistItem'
import { FeedbackPanel } from '@/components/ui/FeedbackPanel'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { ArrowRightIcon, ChatIcon } from '@/components/ui/icons'
import { interviewQuestionSets } from '@/data/interview'
import type { InterviewQuestion } from '@/types/content'

import { InterviewSetup, type TrainerSettings } from './InterviewSetup'
import { InterviewSummary } from './InterviewSummary'
import { RecordingIndicator, RecordingPlayback } from './RecordingControls'
import { TimerDisplay } from './TimerDisplay'
import { TrainingCard } from './TrainingCard'
import { MIXED_ROUND_ID, SECURE_SCORE } from './interviewSession'
import { useInterviewTrainingStore } from './interviewStore'
import { useAudioRecorder } from './useAudioRecorder'
import { useCountdown } from './useCountdown'

const ANSWER_SECONDS = 90
const FOLLOW_UP_SECONDS = 45

/** Extra self-check criterion that is added whenever a follow-up was asked. */
const FOLLOW_UP_CRITERION =
  'Bei der Nachfrage bin ich ruhig geblieben und habe konkret geantwortet, statt mich zu wiederholen.'

type Phase = 'intro' | 'question' | 'speaking' | 'followUp' | 'reveal' | 'done'

/**
 * Interview simulation: recruiter questions appear one at a time WITHOUT the
 * model answer; the learner answers out loud against a timer, may get a
 * probing follow-up, and only then sees the ideal answer and a self-check.
 * The self-assessments are remembered to drive the "weak spots" round.
 */
export function InterviewTrainer() {
  const recordRating = useInterviewTrainingStore((state) => state.recordRating)

  const [phase, setPhase] = useState<Phase>('intro')
  const [settings, setSettings] = useState<TrainerSettings>({
    roundId: interviewQuestionSets[0]?.id ?? MIXED_ROUND_ID,
    shuffle: false,
    followUps: true,
    record: false,
  })
  const [questions, setQuestions] = useState<InterviewQuestion[]>([])
  /** Minute hints only make sense while the reference call runs in its original order */
  const [showMinutes, setShowMinutes] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [followUpAsked, setFollowUpAsked] = useState(false)
  const [checkedItems, setCheckedItems] = useState<boolean[]>([])
  const [roundScores, setRoundScores] = useState<Record<string, number>>({})

  const recorder = useAudioRecorder()
  const countdown = useCountdown(() => {
    if (phase === 'speaking') finishMainAnswer()
    else revealAnswer()
  })

  const question = questions[questionIndex]
  const isLast = questionIndex === questions.length - 1
  const followUp = settings.followUps ? question?.followUp : undefined
  const checklist = question
    ? followUpAsked
      ? [...question.checklist, FOLLOW_UP_CRITERION]
      : question.checklist
    : []

  function startRound(roundQuestions: InterviewQuestion[], keepsOriginalOrder: boolean) {
    if (roundQuestions.length === 0) return
    recorder.reset()
    countdown.reset()
    setQuestions(roundQuestions)
    setShowMinutes(keepsOriginalOrder)
    setRoundScores({})
    showQuestion(0)
  }

  function showQuestion(index: number) {
    setQuestionIndex(index)
    setFollowUpAsked(false)
    setCheckedItems([])
    setPhase('question')
  }

  function startAnswer() {
    setPhase('speaking')
    countdown.start(ANSWER_SECONDS)
    if (settings.record) void recorder.start()
  }

  /** Main answer is over: either the interviewer probes, or the answer is revealed. */
  function finishMainAnswer() {
    if (!followUp) {
      revealAnswer()
      return
    }
    // The recording keeps running so answer and follow-up end up in one take
    setFollowUpAsked(true)
    setPhase('followUp')
    countdown.start(FOLLOW_UP_SECONDS)
  }

  function revealAnswer() {
    countdown.stop()
    recorder.stop()
    setPhase('reveal')
  }

  function toggleCheck(index: number) {
    setCheckedItems((items) => checklist.map((_, i) => (i === index ? !items[i] : !!items[i])))
  }

  function nextQuestion() {
    if (!question) return
    const score =
      checklist.length === 0 ? 0 : checkedItems.filter(Boolean).length / checklist.length
    recordRating(question.id, score)
    setRoundScores((scores) => ({ ...scores, [question.id]: score }))
    recorder.reset()
    if (isLast) setPhase('done')
    else showQuestion(questionIndex + 1)
  }

  function backToSetup() {
    recorder.reset()
    countdown.reset()
    setPhase('intro')
  }

  return (
    <TrainingCard
      icon={<ChatIcon className="h-5 w-5" />}
      title="Interview-Trainer"
      description="Die Fragen kommen einzeln – du antwortest laut, erst danach siehst du die Musterantwort und bewertest dich selbst. Was noch nicht sitzt, merkt sich der Trainer."
    >
      {phase === 'intro' && (
        <InterviewSetup
          settings={settings}
          onSettingsChange={(change) => setSettings((current) => ({ ...current, ...change }))}
          isRecordingSupported={recorder.isSupported}
          onStart={startRound}
        />
      )}

      {phase !== 'intro' && phase !== 'done' && question && (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold tabular-nums">
              Frage {questionIndex + 1} von {questions.length}
              {showMinutes && question.minute !== undefined && (
                <span className="ml-3 font-normal text-slate-500 dark:text-slate-400">
                  im Original etwa Minute {question.minute}
                </span>
              )}
            </p>
            <Button variant="ghost" size="sm" onClick={backToSetup}>
              Runde abbrechen
            </Button>
          </div>
          <ProgressBar percent={(questionIndex / questions.length) * 100} />

          <figure className="rounded-lg bg-slate-100 px-5 py-4 dark:bg-slate-800/60">
            <figcaption className="text-sm font-semibold text-slate-600 dark:text-slate-300">
              {question.interviewer} fragt
            </figcaption>
            <blockquote className="mt-1.5 font-serif text-xl leading-snug">
              „{question.question}“
            </blockquote>
          </figure>

          {followUpAsked && followUp && (
            <figure className="rounded-lg border-l-4 border-amber-500 bg-amber-50 px-5 py-4 dark:bg-amber-950/30">
              <figcaption className="text-sm font-semibold text-amber-800 dark:text-amber-300">
                {question.interviewer} hakt nach
              </figcaption>
              <blockquote className="mt-1.5 font-serif text-xl leading-snug">
                „{followUp}“
              </blockquote>
            </figure>
          )}

          {phase === 'question' && (
            <Button onClick={startAnswer}>
              Jetzt laut antworten ({ANSWER_SECONDS} s)
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          )}

          {(phase === 'speaking' || phase === 'followUp') && (
            <div className="space-y-4 py-2">
              <TimerDisplay
                remainingSeconds={countdown.remainingSeconds}
                totalSeconds={countdown.totalSeconds}
              />
              {recorder.isRecording && <RecordingIndicator />}
              <div className="flex justify-center">
                <Button
                  variant="secondary"
                  onClick={phase === 'speaking' ? finishMainAnswer : revealAnswer}
                >
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
              <div className="rounded-lg border border-slate-200 p-5 dark:border-slate-700">
                <p className="font-semibold">Was traf auf deine Antwort zu?</p>
                <p className="mt-0.5 mb-3 text-sm text-slate-600 dark:text-slate-400">
                  Hake ehrlich ab. Unter {Math.round(SECURE_SCORE * 100)} % landet die Frage in
                  „Meine Schwachstellen“.
                </p>
                <ul className="space-y-2">
                  {checklist.map((item, index) => (
                    <ChecklistItem
                      key={index}
                      checked={checkedItems[index] ?? false}
                      onToggle={() => toggleCheck(index)}
                    >
                      {item}
                    </ChecklistItem>
                  ))}
                </ul>
              </div>
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
        <InterviewSummary
          questions={questions}
          scores={roundScores}
          onRepeat={(weakQuestions) => startRound(weakQuestions, false)}
          onRestart={backToSetup}
        />
      )}
    </TrainingCard>
  )
}

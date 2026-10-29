import { useState } from 'react'
import { NavLink, useMatch } from 'react-router-dom'

import { routePatterns, routes } from '@/app/routes'
import {
  BriefcaseIcon,
  ChatIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  HomeIcon,
  MicIcon,
  NotebookIcon,
  PresentationIcon,
} from '@/components/ui/icons'
import { modulesInTrack, tracks } from '@/data/modules'
import { useModuleProgress } from '@/features/progress/hooks'
import { useProgressStore } from '@/features/progress/store'
import { cn } from '@/lib/cn'
import type { Module, ModuleCategory } from '@/types/content'

interface SidebarProps {
  /** Called after any navigation, used to close the mobile drawer. */
  onNavigate: () => void
}

const trackIcons: Record<ModuleCategory, React.ReactNode> = {
  communication: <ChatIcon className="h-4 w-4" />,
  presentation: <PresentationIcon className="h-4 w-4" />,
  consulting: <BriefcaseIcon className="h-4 w-4" />,
}

// Active state: a petrol bar on the left instead of a filled block, so the
// current page is clear without shouting louder than the content
const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  cn(
    'relative flex items-center gap-3 rounded-md px-3 py-2 text-[0.9375rem] transition-colors outline-brand-500 focus-visible:outline-2',
    isActive
      ? 'bg-brand-50 font-semibold text-brand-800 before:absolute before:inset-y-1.5 before:left-0 before:w-[3px] before:rounded-full before:bg-brand-600 dark:bg-brand-950/60 dark:text-brand-200 dark:before:bg-brand-400'
      : 'text-slate-600 hover:bg-slate-100 hover:text-ink dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white',
  )

function ModuleNavItem({ module, onNavigate }: { module: Module; onNavigate: () => void }) {
  const progress = useModuleProgress(module)
  const isDone = progress.percent === 100
  return (
    <li>
      <NavLink to={routes.module(module.id)} className={navLinkClasses} onClick={onNavigate}>
        <span className="min-w-0 flex-1 leading-snug">{module.title}</span>
        {isDone ? (
          <CheckCircleIcon
            className="h-4 w-4 shrink-0 text-good dark:text-emerald-400"
            role="img"
            aria-hidden={false}
            aria-label="abgeschlossen"
          />
        ) : (
          progress.completedLessons > 0 && (
            <span className="shrink-0 text-xs text-slate-500 tabular-nums dark:text-slate-400">
              {progress.completedLessons}/{progress.totalLessons}
            </span>
          )
        )}
      </NavLink>
    </li>
  )
}

function TrackGroup({
  category,
  label,
  isCurrent,
  onNavigate,
}: {
  category: ModuleCategory
  label: string
  /** The open page belongs to this track: expand it on arrival */
  isCurrent: boolean
  onNavigate: () => void
}) {
  const [isOpen, setIsOpen] = useState(isCurrent)
  const [wasCurrent, setWasCurrent] = useState(isCurrent)
  // Navigating into this track opens it; the learner can still collapse it afterwards
  if (isCurrent !== wasCurrent) {
    setWasCurrent(isCurrent)
    if (isCurrent) setIsOpen(true)
  }
  const completedLessons = useProgressStore((state) => state.completedLessons)
  const trackModules = modulesInTrack(category)
  const lessons = trackModules.flatMap((module) => module.lessons)
  const doneCount = lessons.filter((lesson) => completedLessons.includes(lesson.id)).length
  const listId = `track-${category}`

  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={listId}
        className="flex w-full cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-left text-[0.9375rem] font-semibold text-ink outline-brand-500 hover:bg-slate-100 focus-visible:outline-2 dark:text-slate-100 dark:hover:bg-slate-800"
      >
        <span className="text-slate-500 dark:text-slate-400">{trackIcons[category]}</span>
        <span className="flex-1">{label}</span>
        <span className="text-xs font-normal text-slate-500 tabular-nums dark:text-slate-400">
          {doneCount}/{lessons.length}
        </span>
        <ChevronDownIcon
          className={cn(
            'h-4 w-4 shrink-0 text-slate-400 transition-transform',
            isOpen && 'rotate-180',
          )}
        />
      </button>
      {isOpen && (
        <ul
          id={listId}
          className="mt-1 ml-5 space-y-0.5 border-l border-slate-200 pl-2 dark:border-slate-800"
        >
          {trackModules.map((module) => (
            <ModuleNavItem key={module.id} module={module} onNavigate={onNavigate} />
          ))}
        </ul>
      )}
    </div>
  )
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const moduleId = useMatch({ path: routePatterns.module, end: false })?.params.moduleId
  const currentCategory = tracks.find((track) =>
    modulesInTrack(track.category).some((module) => module.id === moduleId),
  )?.category

  return (
    <nav aria-label="Hauptnavigation" className="flex h-full flex-col overflow-y-auto px-3 py-5">
      <NavLink
        to={routes.dashboard()}
        onClick={onNavigate}
        className="mb-7 flex items-center gap-2.5 rounded-md px-3 text-lg font-bold tracking-tight outline-brand-500 focus-visible:outline-2"
      >
        <img src="/favicon.svg" alt="" className="h-7 w-7" />
        KommPro
      </NavLink>

      <ul className="space-y-0.5">
        <li>
          <NavLink to={routes.dashboard()} end className={navLinkClasses} onClick={onNavigate}>
            <HomeIcon className="h-4 w-4" />
            Übersicht
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.training()} className={navLinkClasses} onClick={onNavigate}>
            <MicIcon className="h-4 w-4" />
            Trainingscenter
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.myAnswers()} className={navLinkClasses} onClick={onNavigate}>
            <NotebookIcon className="h-4 w-4" />
            Meine Antworten
          </NavLink>
        </li>
      </ul>

      <p className="mt-8 mb-1 px-3 text-sm text-slate-500 dark:text-slate-400">Lernpfade</p>
      {tracks.map((track) => (
        <TrackGroup
          key={track.category}
          category={track.category}
          label={track.label}
          isCurrent={track.category === currentCategory}
          onNavigate={onNavigate}
        />
      ))}
    </nav>
  )
}

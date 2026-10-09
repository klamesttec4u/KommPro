import { NavLink } from 'react-router-dom'

import { routes } from '@/app/routes'
import {
  BriefcaseIcon,
  CheckCircleIcon,
  ChatIcon,
  HomeIcon,
  MicIcon,
  PresentationIcon,
} from '@/components/ui/icons'
import { modules } from '@/data/modules'
import { useModuleProgress } from '@/features/progress/hooks'
import { cn } from '@/lib/cn'
import type { Module, ModuleCategory } from '@/types/content'

interface SidebarProps {
  /** Called after any navigation, used to close the mobile drawer. */
  onNavigate: () => void
}

const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  cn(
    'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-brand-600 text-white'
      : 'text-slate-600 hover:bg-slate-200/70 dark:text-slate-300 dark:hover:bg-slate-800',
  )

function ModuleNavItem({ module, onNavigate }: { module: Module; onNavigate: () => void }) {
  const progress = useModuleProgress(module)
  return (
    <li>
      <NavLink to={routes.module(module.id)} className={navLinkClasses} onClick={onNavigate}>
        <span className="flex-1 truncate">{module.title}</span>
        {progress.percent === 100 && (
          <CheckCircleIcon className="h-4 w-4 shrink-0 text-emerald-500" />
        )}
      </NavLink>
    </li>
  )
}

function ModuleGroup({
  category,
  label,
  icon,
  onNavigate,
}: {
  category: ModuleCategory
  label: string
  icon: React.ReactNode
  onNavigate: () => void
}) {
  const groupModules = modules.filter((module) => module.category === category)
  return (
    <div>
      <p className="mt-6 mb-2 flex items-center gap-2 px-3 text-xs font-semibold tracking-wide text-slate-400 uppercase dark:text-slate-500">
        {icon}
        {label}
      </p>
      <ul className="space-y-1">
        {groupModules.map((module) => (
          <ModuleNavItem key={module.id} module={module} onNavigate={onNavigate} />
        ))}
      </ul>
    </div>
  )
}

export function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <nav className="flex h-full flex-col overflow-y-auto px-3 py-4">
      <NavLink
        to={routes.dashboard()}
        onClick={onNavigate}
        className="mb-6 flex items-center gap-2 px-3 text-lg font-bold tracking-tight"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
          K
        </span>
        KommPro
      </NavLink>

      <ul className="space-y-1">
        <li>
          <NavLink to={routes.dashboard()} end className={navLinkClasses} onClick={onNavigate}>
            <HomeIcon className="h-4 w-4" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.training()} className={navLinkClasses} onClick={onNavigate}>
            <MicIcon className="h-4 w-4" />
            Trainingscenter
          </NavLink>
        </li>
      </ul>

      <ModuleGroup
        category="communication"
        label="Kommunikation"
        icon={<ChatIcon className="h-3.5 w-3.5" />}
        onNavigate={onNavigate}
      />
      <ModuleGroup
        category="presentation"
        label="Präsentation"
        icon={<PresentationIcon className="h-3.5 w-3.5" />}
        onNavigate={onNavigate}
      />
      <ModuleGroup
        category="consulting"
        label="IT Consulting"
        icon={<BriefcaseIcon className="h-3.5 w-3.5" />}
        onNavigate={onNavigate}
      />
    </nav>
  )
}

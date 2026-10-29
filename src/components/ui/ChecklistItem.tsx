import type { ReactNode } from 'react'

import { CheckIcon } from '@/components/ui/icons'
import { cn } from '@/lib/cn'

/** Visual tick box used inside checklist items. */
export function CheckboxTick({ checked }: { checked: boolean }) {
  return (
    <span
      className={cn(
        'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2',
        checked
          ? 'border-brand-600 bg-brand-600 text-white'
          : 'border-slate-400 bg-white dark:border-slate-500 dark:bg-slate-900',
      )}
    >
      {checked && <CheckIcon className="h-3.5 w-3.5" />}
    </span>
  )
}

interface ChecklistItemProps {
  checked: boolean
  onToggle: () => void
  disabled?: boolean
  children: ReactNode
}

/** Toggleable checklist row with proper checkbox semantics for assistive tech. */
export function ChecklistItem({
  checked,
  onToggle,
  disabled = false,
  children,
}: ChecklistItemProps) {
  return (
    <li>
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        disabled={disabled}
        onClick={onToggle}
        className={cn(
          'flex w-full items-start gap-3 rounded-lg px-2 py-2 text-left leading-relaxed transition-colors outline-brand-500 focus-visible:outline-2',
          !disabled && 'cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800',
        )}
      >
        <CheckboxTick checked={checked} />
        {children}
      </button>
    </li>
  )
}

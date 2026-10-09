import type { ReactNode } from 'react'

import { CheckIcon } from '@/components/ui/icons'
import { cn } from '@/lib/cn'

/** Visual tick box used inside checklist items. */
export function CheckboxTick({ checked }: { checked: boolean }) {
  return (
    <span
      className={cn(
        'mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border',
        checked
          ? 'border-brand-600 bg-brand-600 text-white'
          : 'border-slate-400 dark:border-slate-600',
      )}
    >
      {checked && <CheckIcon className="h-3 w-3" />}
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
          'flex w-full items-start gap-3 rounded-lg px-2 py-1.5 text-left text-sm transition-colors',
          !disabled && 'cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800',
        )}
      >
        <CheckboxTick checked={checked} />
        {children}
      </button>
    </li>
  )
}

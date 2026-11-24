import { useId } from 'react'

import { cn } from '@/lib/cn'
import type { DossierField } from '@/types/content'

const inputClasses =
  'mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 font-serif text-[1.0625rem] leading-[1.7] outline-brand-500 placeholder:font-sans placeholder:text-base placeholder:text-slate-400 focus-visible:outline-2 dark:border-slate-700 dark:bg-slate-900 print:hidden'

interface DossierTextFieldProps {
  field: Pick<DossierField, 'label' | 'hint' | 'placeholder' | 'singleLine' | 'rows'>
  value: string
  onChange: (value: string) => void
  /** Smaller label for fields nested inside a repeatable entry */
  compact?: boolean
}

/**
 * Labelled fill-in field that saves on every keystroke. On paper the input is
 * swapped for plain text, so a long entry prints in full instead of being
 * clipped to the textarea's box.
 */
export function DossierTextField({
  field,
  value,
  onChange,
  compact = false,
}: DossierTextFieldProps) {
  const inputId = useId()
  const hintId = useId()

  return (
    <div>
      <label htmlFor={inputId} className={cn('block font-semibold', compact && 'text-sm')}>
        {field.label}
      </label>
      {field.hint && (
        <p id={hintId} className="mt-0.5 text-sm text-slate-600 dark:text-slate-400 print:hidden">
          {field.hint}
        </p>
      )}
      {field.singleLine ? (
        <input
          id={inputId}
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={field.placeholder}
          aria-describedby={field.hint ? hintId : undefined}
          className={inputClasses}
        />
      ) : (
        <textarea
          id={inputId}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={field.placeholder}
          rows={field.rows ?? 4}
          aria-describedby={field.hint ? hintId : undefined}
          className={inputClasses}
        />
      )}
      <p className="mt-1 hidden font-serif leading-relaxed whitespace-pre-line print:block">
        {value.trim() === '' ? '–' : value}
      </p>
    </div>
  )
}

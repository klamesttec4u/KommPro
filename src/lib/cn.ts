/** Joins class names, skipping falsy values. Lightweight clsx replacement. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

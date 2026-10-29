import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/cn'

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-xl border border-slate-200 bg-white shadow-[0_1px_2px_rgb(22_33_58/0.05)] dark:border-slate-800 dark:bg-slate-900',
        className,
      )}
      {...props}
    />
  )
}

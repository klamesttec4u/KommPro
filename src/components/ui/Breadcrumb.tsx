import { Fragment } from 'react'
import { Link } from 'react-router-dom'

export interface BreadcrumbItem {
  label: string
  to?: string
}

/** Where-am-I trail above page titles; the last item is the current context. */
export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Brotkrumen">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
        {items.map((item, index) => (
          <Fragment key={index}>
            {index > 0 && (
              <li aria-hidden="true" className="text-slate-300 dark:text-slate-600">
                /
              </li>
            )}
            <li>
              {item.to ? (
                <Link
                  to={item.to}
                  className="rounded font-medium text-brand-700 underline-offset-4 outline-brand-500 hover:underline focus-visible:outline-2 dark:text-brand-300"
                >
                  {item.label}
                </Link>
              ) : (
                item.label
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  )
}

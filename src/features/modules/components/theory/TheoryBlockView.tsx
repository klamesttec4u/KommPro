import { CheckIcon, LightbulbIcon, XIcon } from '@/components/ui/icons'
import { assertNever } from '@/lib/assertNever'
import type { TheoryBlock } from '@/types/content'

function Paragraphs({ text }: { text: string }) {
  return (
    <>
      {text.split('\n\n').map((paragraph, index) => (
        <p
          key={index}
          className="leading-relaxed text-slate-700 not-first:mt-3 dark:text-slate-300"
        >
          {paragraph}
        </p>
      ))}
    </>
  )
}

export function TheoryBlockView({ block }: { block: TheoryBlock }) {
  switch (block.kind) {
    case 'text':
      return (
        <section>
          {block.heading && <h2 className="mb-2 text-lg font-semibold">{block.heading}</h2>}
          <Paragraphs text={block.body} />
        </section>
      )

    case 'keypoints':
      return (
        <section className="rounded-xl border border-brand-200 bg-brand-50 p-5 dark:border-brand-800 dark:bg-brand-950/40">
          <h2 className="mb-3 flex items-center gap-2 font-semibold text-brand-900 dark:text-brand-200">
            <LightbulbIcon className="h-5 w-5 shrink-0" />
            {block.title}
          </h2>
          <ul className="space-y-2">
            {block.points.map((point, index) => (
              <li
                key={index}
                className="flex gap-2 text-sm leading-relaxed text-brand-950 dark:text-brand-100"
              >
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" />
                {point}
              </li>
            ))}
          </ul>
        </section>
      )

    case 'example':
      return (
        <section>
          <h2 className="mb-3 font-semibold">{block.title}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {block.good && (
              <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/40">
                <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold tracking-wide text-emerald-700 uppercase dark:text-emerald-300">
                  <CheckIcon className="h-3.5 w-3.5" /> Gut
                </p>
                <p className="text-sm leading-relaxed whitespace-pre-line text-emerald-950 dark:text-emerald-100">
                  {block.good}
                </p>
              </div>
            )}
            {block.bad && (
              <div className="rounded-lg border border-red-300 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950/40">
                <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold tracking-wide text-red-700 uppercase dark:text-red-300">
                  <XIcon className="h-3.5 w-3.5" /> Schlecht
                </p>
                <p className="text-sm leading-relaxed whitespace-pre-line text-red-950 dark:text-red-100">
                  {block.bad}
                </p>
              </div>
            )}
          </div>
        </section>
      )

    case 'table':
      return (
        <section className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                {block.headers.map((header, index) => (
                  <th
                    key={index}
                    className="border-b-2 border-slate-300 px-3 py-2 text-left font-semibold dark:border-slate-700"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-slate-200 dark:border-slate-800">
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-3 py-2 align-top text-slate-700 dark:text-slate-300"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )

    default:
      return assertNever(block)
  }
}

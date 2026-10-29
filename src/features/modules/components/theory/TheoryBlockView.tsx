import { CheckIcon, HighlighterIcon, XIcon } from '@/components/ui/icons'
import { assertNever } from '@/lib/assertNever'
import type { TheoryBlock } from '@/types/content'

function Paragraphs({ text }: { text: string }) {
  return (
    <>
      {text.split('\n\n').map((paragraph, index) => (
        <p
          key={index}
          className="max-w-[68ch] text-[1.0625rem] leading-[1.7] text-slate-700 not-first:mt-4 dark:text-slate-300"
        >
          {paragraph}
        </p>
      ))}
    </>
  )
}

/** One side of a before/after example. Wording is set in the serif: it is what you would say. */
function ExampleQuote({
  tone,
  label,
  text,
}: {
  tone: 'good' | 'bad'
  label: string
  text: string
}) {
  const isGood = tone === 'good'
  return (
    <div
      className={
        isGood
          ? 'rounded-r-lg border-l-4 border-good bg-good-soft px-5 py-4 dark:border-emerald-500 dark:bg-emerald-950/30'
          : 'rounded-r-lg border-l-4 border-bad bg-bad-soft px-5 py-4 dark:border-red-400 dark:bg-red-950/30'
      }
    >
      <p
        className={
          isGood
            ? 'flex items-center gap-1.5 text-sm font-semibold text-good dark:text-emerald-300'
            : 'flex items-center gap-1.5 text-sm font-semibold text-bad dark:text-red-300'
        }
      >
        {isGood ? <CheckIcon className="h-4 w-4" /> : <XIcon className="h-4 w-4" />}
        {label}
      </p>
      <p className="mt-2 max-w-[68ch] font-serif text-[1.0625rem] leading-[1.7] whitespace-pre-line text-ink dark:text-slate-100">
        {text}
      </p>
    </div>
  )
}

export function TheoryBlockView({ block }: { block: TheoryBlock }) {
  switch (block.kind) {
    case 'text':
      return (
        <section>
          {block.heading && (
            <h2 className="mb-3 text-xl font-bold tracking-tight">{block.heading}</h2>
          )}
          <Paragraphs text={block.body} />
        </section>
      )

    case 'keypoints':
      return (
        <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="flex items-center gap-2 text-lg font-bold">
            <HighlighterIcon className="h-5 w-5 shrink-0 text-slate-500 dark:text-slate-400" />
            {block.title}
          </h2>
          <ul className="mt-4 space-y-3">
            {block.points.map((point, index) => (
              <li key={index} className="flex gap-3 text-[1.0625rem] leading-[1.65]">
                <span
                  aria-hidden="true"
                  className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-ink dark:bg-slate-300"
                />
                <span>
                  <span className="marker">{point}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>
      )

    case 'example':
      // Before -> after: the weak version first, then the better one
      return (
        <section>
          <h2 className="mb-3 text-lg font-bold">{block.title}</h2>
          <div className="space-y-3">
            {block.bad && <ExampleQuote tone="bad" label="So nicht" text={block.bad} />}
            {block.good && (
              <ExampleQuote
                tone="good"
                label={block.bad ? 'So besser' : 'So geht’s'}
                text={block.good}
              />
            )}
          </div>
        </section>
      )

    case 'table':
      return (
        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <table className="w-full border-collapse text-[0.9375rem]">
            <thead className="bg-slate-50 dark:bg-slate-800/60">
              <tr>
                {block.headers.map((header, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="border-b border-slate-200 px-4 py-2.5 text-left font-semibold dark:border-slate-700"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={
                        cellIndex === 0
                          ? 'px-4 py-3 align-top font-medium'
                          : 'px-4 py-3 align-top leading-relaxed text-slate-700 dark:text-slate-300'
                      }
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

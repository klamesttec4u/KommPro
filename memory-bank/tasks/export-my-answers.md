---
slug: export-my-answers
feature: export-my-answers
status: PLANNING_COMPLETE
---

# export-my-answers: Export My Answers

**Complexity**: Level 2 (inherited from export-my-answers)
**Status**: PLANNING_COMPLETE
**Roadmap**: export-my-answers
**Branch**: feature/export-my-answers
**Worktree**: C:/Users/k.lamest/banyan-wt/kommproclone/feature-export-my-answers

## Task Description

Add an export action to the "Meine Antworten" page that downloads all of the learner's saved freetext answers as a nicely structured Markdown/text file — grouped by module and lesson, each entry showing the exercise task and the learner's answer. The file is generated client-side from the persisted progress store (`kommpro-progress` in localStorage), so learners can keep their personal prep dossier outside the browser and survive a storage reset.

**Scope notes (from roadmap feature):**
- Export format: Markdown (readable as plain text); download triggered via a Blob/object-URL, no backend involved
- Source of truth: `useProgressStore` `freetextAnswers`, joined against the content catalog (`src/data/modules`) the same way `MyAnswersPage` already collects entries
- Sample solutions (Musterlösungen) are NOT included — the dossier contains the learner's own answers only
- Empty state: export action is hidden or disabled when no answers are saved

## Specification

**Feature Type**: End-User Feature
**Creative Phase Required**: No
**Primary Persona**: Interview-prepping IT consultant (productBrief.md) — wants to keep the personal prep dossier (SEAT/STAR self-pitch, classic-question answers, day-rate wording) outside the browser, e.g. to read on a phone or print before a qualification interview, and to survive a browser-data clear. Also serves the "Business professional improving communication" persona.
**Creative Exploration Needed**: No — Specification is concrete; proceed to implementation planning. (One planning-time decision, not a design question: how to unit-test the pure Markdown builder, since the repo has no test framework — see Scope Boundaries > Dependencies.)

### Invocation Method
- **Location**: "Meine Antworten" page, `src/features/answers/MyAnswersPage.tsx`, route `/meine-antworten` (`routes.myAnswers()` / sidebar entry "Meine Antworten", already present in `Sidebar.tsx`).
- **Element**: A secondary `Button` (`src/components/ui/Button.tsx`, `variant="secondary"`, `size="md"`) labelled **"Antworten exportieren"**, rendered in the `PageHeader` `children` slot (below the description paragraph, above the card list). Native `<button type="button">`, so it is keyboard-operable and has the shared `focus-visible` outline from `buttonStyles.ts`. No icon (no download icon exists in `components/ui/icons.tsx`; do not add one for this feature).
- **Visibility**: Conditional — rendered only when at least one saved answer is collected (`entries.length > 0`). When there are no saved answers it is NOT rendered (the existing empty-state `Card` "Noch keine Antworten gespeichert" is the only content). Hidden rather than disabled so no unexplained dead control appears.
- **Navigation**: App entry `/` → sidebar "Meine Antworten" → `/meine-antworten` → button is visible under the page description. No new route, no new nav item.
- **Confidence**: HIGH — location, component, and conditional rendering follow the existing page structure (`PageHeader` children slot, `entries.length === 0` branch already exists). Button label wording is MEDIUM (German copy chosen by spec writer; trivially changeable).

### Success Criteria
- **User sees**: The browser downloads a file named `kommpro-meine-antworten-YYYY-MM-DD.md` (local date of export, e.g. `kommpro-meine-antworten-2026-11-02.md`) immediately on click. No dialog, no toast, no page change (the browser's own download UI is the feedback; the page stays on `/meine-antworten` unchanged).
- **Verifiable at**: The downloaded file on disk (open in any text editor); the page itself shows no new state. Content is verifiable at unit level via the pure builder function's return value.
- **Data persisted**: None. Read-only over `useProgressStore.freetextAnswers` (key `kommpro-progress`, `Record<exerciseId, string>`) joined with `modules` from `src/data/modules`. The store is not mutated.
- **Observable within**: Immediate (synchronous string build + Blob + `<a download>` click; no async work, no network).

### Acceptance Criteria

#### AC-ENTRY-1: Learner can find the export action on "Meine Antworten"
**Priority**: MUST
**Given** the learner has at least one saved freetext answer (entry present in `freetextAnswers` whose exercise id exists in the catalog)
**When** they open `/meine-antworten` (via sidebar "Meine Antworten")
**Then** a button labelled "Antworten exportieren" is visible directly below the page description, above the first answer card, and is reachable and activatable with keyboard (Tab to focus, Enter/Space to activate) with the standard focus outline

**Verification**:
- [ ] With >= 1 saved answer, `getByRole('button', { name: 'Antworten exportieren' })` is present on the page
- [ ] Button is a native `<button>` (not a link/div) using the shared `Button` component, `variant="secondary"`
- [ ] Button appears in both light and dark color scheme with the shared variant classes (no new colors)
- [ ] No other page (dashboard, lesson, training) shows the button

#### AC-HAPPY-1: Learner downloads a Markdown dossier of all saved answers
**Priority**: MUST
**Given** the learner has saved answers for `basics-communication-model-f1` and `basics-four-sides-f1` (both in module "Grundlagen der Kommunikation", lessons "Wie Kommunikation funktioniert" and "Die vier Seiten einer Nachricht") and is on `/meine-antworten` on 2026-11-02
**When** they click "Antworten exportieren"
**Then** exactly one file download starts, named `kommpro-meine-antworten-2026-11-02.md`, MIME type `text/markdown;charset=utf-8`, UTF-8 encoded (German umlauts and „…" quotes intact), with this structure:

```markdown
# KommPro – Meine Antworten

_Exportiert am 02.11.2026 · 2 Antworten aus 1 Modul_

## Grundlagen der Kommunikation

### Wie Kommunikation funktioniert

#### Aufgabe

> Formuliere diese unklare Aufgabenübergabe so um, dass sie empfängergerecht ist: „Schau dir bei Gelegenheit mal die Reklamation von Firma Berger an."

**Deine Antwort**

<learner's saved answer text>

### Die vier Seiten einer Nachricht

#### Aufgabe

> Analysiere den Satz eines Projektleiters im Statusmeeting: „Wir liegen zwei Wochen hinter dem Plan." Schreibe zu jeder der vier Seiten (Sache, Selbstkundgabe, Beziehung, Appell) eine mögliche Botschaft.

**Deine Antwort**

<learner's saved answer text>
```

Rules: (a) exactly one `#` title line; (b) one `##` per module that has >= 1 exported answer, using `module.title`; (c) one `###` per lesson with >= 1 exported answer, using `lesson.title`, nested under its module; (d) per answer a `#### Aufgabe` heading, the `exercise.task` as a blockquote (every line prefixed `> `), then a `**Deine Antwort**` line, then the answer; (e) order is catalog order (module → lesson → exercise), identical to the on-screen order of `MyAnswersPage`; (f) file ends with a single trailing newline; line endings `\n`.
**And** a lesson with two saved answers shows one `###` heading followed by two `#### Aufgabe` blocks (not two `###` headings).

**Verification**:
- [ ] Builder unit test: given a fixed `freetextAnswers` map and fixed `now` date, output equals the expected string above (golden/inline-snapshot comparison with real catalog data or an injected catalog)
- [ ] Filename matches `/^kommpro-meine-antworten-\d{4}-\d{2}-\d{2}\.md$/` and uses the LOCAL date, not UTC
- [ ] Blob MIME type is `text/markdown;charset=utf-8`; umlauts/quotes round-trip unchanged
- [ ] Module and lesson headings each appear exactly once per group, in catalog order
- [ ] Manual: click in a real browser (`npm run dev`), open the downloaded file, confirm it matches the structure and reads cleanly as plain text and rendered Markdown

#### AC-HAPPY-2: Multi-line answers and learner text survive without breaking the document structure
**Priority**: MUST
**Given** a saved answer with several lines such as `Sache: Das Projekt ist zwei Wochen im Verzug.\nSelbstkundgabe: Ich bin besorgt.\nBeziehung: …\nAppell: …` (as the "Die vier Seiten einer Nachricht" placeholder encourages), and another answer containing a line that starts with `#` or `>`
**When** the dossier is exported
**Then** every line break of the learner's answer is preserved as a visible line break when the Markdown is rendered (each line ending with two trailing spaces, i.e. a Markdown hard break, except the last line), blank lines in the answer are kept as paragraph breaks, and any answer line beginning with `#` is escaped with a leading backslash (`\#`) so it cannot create a heading that corrupts the module/lesson hierarchy; the answer text is otherwise unmodified (no trimming of inner content, no other escaping, so the file stays readable as plain text)

**Verification**:
- [ ] Builder unit test with a 4-line answer: output contains the four lines in order, lines 1-3 each end with two spaces
- [ ] Builder unit test with an answer line `# Überschrift`: output contains `\# Überschrift` and no extra `#`-level heading beyond the expected structure
- [ ] Answer containing blank lines yields blank lines in output (paragraphs preserved)
- [ ] Task text containing `\n` is rendered as a multi-line blockquote with `> ` on every line (`MyAnswersPage` uses `whitespace-pre-line` for the task, so tasks may be multi-line)

#### AC-HAPPY-3: Export contains only the learner's own data and never leaves the device
**Priority**: MUST
**Given** saved answers exist and the associated exercises have `sampleSolution`, `checklist`, and `placeholder` fields
**When** the learner exports
**Then** the file contains no Musterlösung (`sampleSolution`), no checklist items, no placeholder text, and no `exerciseResults`/progress data; generation uses no `fetch`/XHR (no network request is made); and the temporary object URL created via `URL.createObjectURL` is revoked (`URL.revokeObjectURL`) after the download is triggered, so no blob URL is leaked; the `freetextAnswers` store state is unchanged after export

**Verification**:
- [ ] Builder unit test: for a known exercise, assert the output does NOT contain its `sampleSolution` string, any `checklist` entry, or its `placeholder`
- [ ] Download helper test (jsdom or stubbed `URL`/`document`): `createObjectURL` called once, anchor `download` attribute equals the filename, `click()` called once, `revokeObjectURL` called with the same URL; temporary anchor not left in the DOM
- [ ] Network tab shows no requests on click (manual)
- [ ] `useProgressStore.getState().freetextAnswers` deep-equals its pre-export value

#### AC-HAPPY-4: Header summary reports count and uses correct German plural forms
**Priority**: SHOULD
**Given** exports with 1 answer in 1 module, and with 5 answers across 3 modules
**When** the dossier is generated
**Then** the summary line reads `_Exportiert am DD.MM.YYYY · 1 Antwort aus 1 Modul_` and `_Exportiert am DD.MM.YYYY · 5 Antworten aus 3 Modulen_` respectively (date format `DD.MM.YYYY`, local date, matches the filename date)

**Verification**:
- [ ] Builder unit tests for singular/plural of both "Antwort(en)" and "Modul(e/n)"
- [ ] Builder takes the export date as a parameter (no hidden `new Date()` inside) so output is deterministic in tests

#### AC-ERROR-1: No saved answers — no export action is offered
**Priority**: MUST
**Given** `freetextAnswers` is empty (fresh browser, after "Lernfortschritt zurücksetzen", or storage cleared)
**When** the learner opens `/meine-antworten`
**Then** the existing empty-state card ("Noch keine Antworten gespeichert" with "Zur Übersicht" link) is shown unchanged and NO "Antworten exportieren" button is rendered; the builder/download code path cannot be reached from the UI, and if the builder is called with zero entries anyway it must not trigger a download

**Verification**:
- [ ] Render `MyAnswersPage` with empty store: `queryByRole('button', { name: 'Antworten exportieren' })` is null; empty-state text present
- [ ] Reset flow: save an answer (button visible), call `resetProgress()`, page shows empty state and no button
- [ ] Export handler guards on `entries.length === 0` (early return, no Blob created)

#### AC-ERROR-2: Stale or blank stored answers do not break or pollute the export
**Priority**: MUST
**Given** `freetextAnswers` contains (a) an exercise id that no longer exists in the content catalog (e.g. after a content update or manual localStorage edit), and/or (b) an empty-string value
**When** the learner exports
**Then** the export neither throws nor prints those entries, because it uses the same collection rule as the page (`collectSavedAnswers`: iterate catalog, include only freetext exercises with a truthy saved answer); the counts in the summary line equal the number of entries actually written; the on-screen card count and the exported answer count are identical; if ALL stored ids are stale, the page shows the empty state (AC-ERROR-1) and no button

**Verification**:
- [ ] Builder/collector test with an unknown id + `''` value + one valid entry: output contains exactly one answer block and summary says `1 Antwort`
- [ ] No exception for malformed values; collector and exporter share one implementation (single source of truth, no duplicated join logic)
- [ ] Number of `#### Aufgabe` headings in output equals number of `SavedAnswerCard`s rendered

### Scope Boundaries
- **In scope**:
  - "Antworten exportieren" button on `/meine-antworten`, visible only when answers exist
  - Pure Markdown builder (entries + export date in, string out) producing the structure in AC-HAPPY-1/2/4
  - Small browser download helper (string + filename → Blob → object URL → temporary `<a download>` click → revoke)
  - Reusing/extracting the existing `collectSavedAnswers` + `SavedAnswerEntry` from `MyAnswersPage.tsx` so page and export share one join (suggested home: `src/features/answers/`; builder and helper placement is a planning decision, e.g. `src/features/answers/exportMarkdown.ts` and `src/lib/downloadTextFile.ts`, following one-function-per-file `lib/` and named-export conventions)
  - German UI copy only; code/comments English; strict TS, Prettier, oxlint clean
  - Unit tests for the builder and download helper (see Dependencies)
- **Out of scope**:
  - Import / restore from the exported file (the product brief's "export/import" risk mitigation is only half-addressed here; import is a separate feature)
  - Exporting `exerciseResults`, `completedLessons`, quiz/scenario data, or Musterlösungen; an "include sample solutions" option
  - Other formats (PDF, DOCX, JSON, plain `.txt`), print stylesheet, copy-to-clipboard, share sheet
  - Per-module or per-answer partial export, selection UI, or sorting options
  - Any backend, network call, analytics, or change to `kommpro-progress` schema/version (persist `version` stays 1)
  - Exporting interview-trainer answers (spoken, never stored) or audio recordings
  - New routes, sidebar items, icons, or design tokens
- **Dependencies**:
  - `useProgressStore.freetextAnswers` (`src/features/progress/store.ts`) and `modules` registry (`src/data/modules/index.ts`); types `Module`/`Lesson`/`Exercise` (`src/types/content.ts`)
  - UI primitives `Button`, `PageHeader` (`src/components/ui/`)
  - Browser APIs `Blob`, `URL.createObjectURL`/`revokeObjectURL`, `<a download>` (all evergreen; no new library; `URL.createObjectURL` already used in `src/features/training/useAudioRecorder.ts`, so no productBrief Integration Points change beyond adding the download use)
  - TEST INFRASTRUCTURE GAP: the repo has no test framework (systemPatterns.md "Testing Patterns", techContext.md "Test Strategy"; `package.json` has no `test` script). Unit-testing AC-HAPPY-1..4 and AC-ERROR-1..2 as written requires adding Vitest (and jsdom + @testing-library/react for the component-level checks) as devDependencies plus an `npm test` script, as both memory-bank files already recommend. The planning step must decide: (a) add Vitest (recommended; matches Vite 8; builder is pure so a node environment suffices for most checks) or (b) keep the builder pure and verify via `npm run typecheck`/`lint`/`build` plus the manual checks above. Adding a devDependency is a scope-visible decision for the human reviewer.
- **NFR implications** (from productBrief.md):
  - Privacy/Portability: local-only by design; export is a user-initiated, client-side file save; no outgoing HTTP calls. Answers may contain PII (day rates, CV gaps) and the file is unencrypted plain text — the learner owns the file; no in-app warning is required for MVP (COULD: one-line hint under the button, deferred)
  - Reliability/Backup: directly addresses the documented gap "Backup: none — progress/answers exist only in browser localStorage"; productBrief "Portability: none (no export/import)" and the open question "Should progress/answers ever sync or be exportable?" should be updated by the Documentation agent during build
  - Accessibility: native button, shared focus-visible outline, readable in light/dark; German `lang="de"` page; the exported Markdown reads as plain text for screen-reader users
  - Observability standards (CLAUDE.md): no `console.log`/`console.error` in the production code path; the feature emits no telemetry
  - 12-Factor: no config or env vars needed; filename prefix `kommpro-meine-antworten` is a constant in code, not user-configurable

### Creative Exploration Needed
Specification is concrete — proceed to implementation planning. Confidence summary: Invocation Method HIGH; Success Criteria HIGH; Markdown structure MEDIUM (spec-writer-chosen layout, matches the request "grouped by module and lesson, each entry showing the task and the answer"; heading depth/wording is easy to change); hard-break and `#`-escaping rules MEDIUM (a reasonable minimal-escape policy, flagged for reviewer sign-off); test approach MEDIUM (depends on the Vitest decision above).

## Test Strategy

### Approach
- **Emphasis**: unit (pure Markdown builder + collector) with a thin jsdom component layer for button visibility and the download handler. No E2E framework (out of scope for this repo; manual browser check covers the real download).
- **Target test count**: ~18 total (builder 8, collector 3, download helper 4, page component 3)
- **Test infrastructure (human-approved)**: add **Vitest** + **jsdom** + **@testing-library/react** as devDependencies and a `"test": "vitest run"` script. Default environment `node`; the two DOM-dependent test files opt into jsdom via a `// @vitest-environment jsdom` docblock. No jest-dom, no setup file — plain Vitest assertions keep the dependency surface minimal. Tests import from `'vitest'` explicitly (no globals), so no tsconfig `types` change is needed; add `vitest.config.ts` to `tsconfig.node.json` include.

### File Organization
- **New test files**:
  - `src/features/answers/exportMarkdown.test.ts` — builder: golden output (AC-HAPPY-1 structure), hard breaks + `#` escaping (AC-HAPPY-2), exclusion of sampleSolution/checklist/placeholder (AC-HAPPY-3), German plurals + injected date (AC-HAPPY-4), zero-entry behavior
  - `src/features/answers/collectSavedAnswers.test.ts` — stale ids + blank answers skipped, catalog order, count parity (AC-ERROR-2)
  - `src/lib/downloadTextFile.test.ts` (jsdom) — createObjectURL/revokeObjectURL pairing, anchor `download` attr, single `click()`, anchor removed (AC-HAPPY-3)
  - `src/features/answers/MyAnswersPage.test.tsx` (jsdom) — button present with ≥1 answer, absent with empty store (AC-ENTRY-1, AC-ERROR-1), handler guards zero entries
- **Extend existing**: none (repo has zero test files)

### What NOT to Test
- Browser download UI / real file landing on disk — not reachable from jsdom; covered by the manual AC-HAPPY-1 browser check
- zustand persist/merge behavior — existing store logic, unchanged by this feature
- Visual styling/dark mode of the button — shared `Button` variant classes, covered by convention
- Content catalog integrity — separate concern (noted in systemPatterns as a future suite)

### Per-Phase Test Guidance
- Phase 1: ~15 tests — exportMarkdown, collectSavedAnswers, downloadTextFile (all pure/jsdom unit)
- Phase 2: ~3 tests — MyAnswersPage component (visibility + guard)

## Implementation Roadmap

### New Source Files (pin path + extension)
<!-- Extensions resolved from systemPatterns.md Code Organization: .ts for logic, .tsx for JSX; lib/ = one function per file, camelCase; features/answers logic files are .ts like features/progress -->
- [ ] `vitest.config.ts` — Vitest config (root; default env `node`); also add it to `tsconfig.node.json` include (extend)
- [ ] `src/features/answers/collectSavedAnswers.ts` — `SavedAnswerEntry` + `collectSavedAnswers()` extracted from `MyAnswersPage.tsx` (single source of truth for the join; accepts the catalog as a parameter for testability, defaulting to `modules`)
- [ ] `src/features/answers/exportMarkdown.ts` — pure builder: `buildAnswersMarkdown(entries, exportDate)` → `{ filename, content }` (date injected, never `new Date()` inside)
- [ ] `src/lib/downloadTextFile.ts` — `downloadTextFile(filename, content, mimeType)`: Blob → object URL → temporary `<a download>` click → revoke
- [ ] `src/features/answers/exportMarkdown.test.ts` — builder tests
- [ ] `src/features/answers/collectSavedAnswers.test.ts` — collector tests
- [ ] `src/lib/downloadTextFile.test.ts` — download helper tests (jsdom)
- [ ] `src/features/answers/MyAnswersPage.test.tsx` — component tests (jsdom)
- [ ] `src/features/answers/MyAnswersPage.tsx` — extend: import collector from new file, add "Antworten exportieren" button (PageHeader children slot) + export handler with `entries.length === 0` guard
- [ ] `package.json` / `package-lock.json` — extend: devDeps `vitest`, `jsdom`, `@testing-library/react`; scripts `"test": "vitest run"`, `"test:watch": "vitest"`

### Requirements
- Export all saved freetext answers as one Markdown file, structured per AC-HAPPY-1 (title, summary line, module/lesson/Aufgabe hierarchy)
- Entry point: "Antworten exportieren" secondary button on `/meine-antworten`, rendered only when entries exist (AC-ENTRY-1, AC-ERROR-1)
- Learner data integrity: hard breaks preserved, `#` lines escaped, no Musterlösungen/checklists/placeholders, no network, store untouched (AC-HAPPY-2/3)
- German plurals + `DD.MM.YYYY` date in summary; `kommpro-meine-antworten-YYYY-MM-DD.md` local-date filename (AC-HAPPY-4)
- Stale/blank stored entries skipped via the shared collector (AC-ERROR-2)

### Dependencies
- Phase 2 depends on Phase 1 (builder, collector, download helper, test infra)
- New devDependencies: vitest, jsdom, @testing-library/react (human-approved at spec review)
- No runtime dependencies added; browser APIs only (Blob, URL, anchor download)

### Observability Requirements
- **Applies**: No — client-only feature, no service code, no HTTP handlers, no logging/metrics. No `console.*` in the production path.

### API Requirements
- **REST API**: No
- **GraphQL API**: No

### Phases
- [ ] Phase 1: Test infrastructure + pure export logic — add Vitest/jsdom/@testing-library/react + scripts + `vitest.config.ts`; extract `collectSavedAnswers.ts`; implement `exportMarkdown.ts` and `downloadTextFile.ts`; unit tests (~15) green; `MyAnswersPage.tsx` switched to import the extracted collector (behavior unchanged)
- [ ] Phase 2: UI integration + verification — "Antworten exportieren" button + handler on `MyAnswersPage.tsx`; component tests (~3); full gate `npm test` + `typecheck` + `lint` + `build`; manual browser verification of AC-HAPPY-1 (real download, umlauts, structure); Documentation agent updates `productBrief.md` (Portability/backup gap + open question) and `techContext.md`/`systemPatterns.md` (test framework now exists)

## Creative Phases

(none required — Level 2, no LOW-confidence spec fields; human approved spec without flagging creative)

---

## Execution State

**Build Status**: IDLE
**Current Phase**: BUILD
**Current Step**: N/A — ready for /bmb:build export-my-answers (Phase 1)
**Last Completed**: PLAN (2026-11-02)
**Can Resume**: NO

### Active Sub-Agents
(none)

### Completed Steps
- PLAN: Spec Writer (Sonnet) draft → taxonomy lint CLEAN → human approved (spec + Vitest decision) → Level 2 plan with 2 phases (2026-11-02)

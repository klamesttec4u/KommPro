# System Patterns: KommPro

~66 source files under `src/` (65 TS/TSX + `index.css`); roughly 7.5k of ~10.8k lines are typed content data.

## Guiding Principles

| # | Principle | Evidence |
|---|---|---|
| 1 | **Browser-only app.** No backend, API, `fetch`, axios, or env variables. | README: "no backend required" |
| 2 | **localStorage is the only persistence**, through one zustand `persist` store (key `kommpro-progress`, v1). | `src/features/progress/store.ts` |
| 3 | **Persisted data is never trusted** — a custom `merge` validates shape and falls back to defaults. | `store.ts` merge callback |
| 4 | **Audio stays on the device.** MediaRecorder output lives only as an in-memory blob URL, revoked on reset/unmount, never uploaded. | `src/features/training/useAudioRecorder.ts` |
| 5 | **Content is typed TypeScript data, not fetched JSON.** New module = one file in `src/data/modules/` + register in `index.ts`. | README, `src/data/modules/index.ts` |
| 6 | **Content strings are German; code is English** (identifiers, comments, types). Routes use German slugs. | `src/types/content.ts` header, `src/app/routes.ts` |
| 7 | **SPA routing = `BrowserRouter` + Vercel catch-all rewrite** to `/index.html`. | `vercel.json` |
| 8 | **Route strings defined once**: `routePatterns` feed the router; typed `routes.*()` builders (with `encodeURIComponent`) build links. | `src/app/routes.ts` |
| 9 | **Strict TypeScript**: `strict`, `noUncheckedIndexedAccess`, `noUnused*`, `erasableSyntaxOnly`, `verbatimModuleSyntax`. Discriminated unions checked exhaustively via `assertNever`. | `tsconfig.app.json`, `src/lib/assertNever.ts` |
| 10 | **Design tokens live in `src/index.css` `@theme`** (Tailwind v4). Ink `#16213a` on paper `#f6f7f9`; petrol `brand-50..950` (600 = `#0e6e74`) for anything actionable; marker yellow `#ffe27a` reserved for key takeaways (`.marker`); `good`/`bad` (+`-soft`) tones for feedback. | `src/index.css`, `index.html` theme-color |
| 11 | **Typography rule**: Atkinson Hyperlegible Next (sans) for UI; Source Serif 4 ONLY for example wording (what you'd actually say/write). Self-hosted via @fontsource — no Google Fonts. | `main.tsx`, `@theme` comment |
| 12 | **Dark mode via `dark:` variants** (`prefers-color-scheme`); motion reduced under `prefers-reduced-motion`; focus via `focus-visible` outlines per button variant. | `index.css`, `buttonStyles.ts` |
| 13 | **Few dependencies**: react 19, react-router-dom 7, zustand 5, tailwind 4. Local `cn` instead of clsx; inline SVGs in `icons.tsx`; no test framework. | `package.json` |
| 14 | **Named exports only** — zero `export default` in `src/`. | grep |

## Architecture Overview

- **Bootstrap**: `index.html` (`lang="de"`, `#root`) → `src/main.tsx` imports fonts + `index.css`, renders `<StrictMode><ErrorBoundary><App/></ErrorBoundary></StrictMode>`.
- **Router**: `src/app/App.tsx` sets up `BrowserRouter` with one layout route `<AppLayout/>` holding: `/` → DashboardPage, `/modul/:moduleId` → ModulePage, `/modul/:moduleId/lektion/:lessonId` → LessonPage, `/training` → TrainingPage, `/meine-antworten` → MyAnswersPage, `*` → inline NotFoundPage. No lazy loading, no route loaders.
- **Layout**: `components/layout/AppLayout.tsx` holds the `Outlet`, scrolls to top on route change, runs a mobile drawer (Escape closes, closes on desktop media query, locks body scroll). `Sidebar.tsx` shows collapsible tracks with progress.
- **Data flow**: static content (`src/data/**`) + progress store (`features/progress`) → pure selectors (`selectors.ts`) → memoized hooks (`hooks.ts`) → pages. Pages read URL params with `useParams`, look up content with `findModule`/`findLesson`.
- **API layer: none** — "data fetching" is synchronous imports of typed TS modules.

### Core modules & responsibilities

| Area | Files | Responsibility |
|---|---|---|
| Dashboard | `features/dashboard/DashboardPage.tsx` | "Continue where you left off" (`useNextLesson`), tracks with per-lesson segments |
| Modules/lessons | `features/modules/ModulePage.tsx`, `LessonPage.tsx`, `components/theory/TheoryBlockView.tsx` | Lesson phases `theory → exercises → summary` with StepIndicator, reading time, breadcrumb, prev/next across module boundaries. `key` on `lesson.id` resets local state. |
| Exercises | `features/exercises/ExerciseRunner.tsx`, `QuizExercise`, `ScenarioExercise`, `FreetextExercise`, `types.ts` | Runner steps one exercise at a time, records results, switches on `exercise.kind` with `assertNever`. Shared `ExerciseComponentProps<T>` (`exercise`, `onAnswered` called once). Freetext pre-fills from saved answer, then self-assessment checklist (`selfScore` 0..1). |
| Saved answers | `features/answers/MyAnswersPage.tsx` | "Prep dossier" — saved freetext answers across all modules, sample solution on demand |
| Training center | `features/training/` (InterviewTrainer, PitchTimer, ImpulseWords, RecordingControls, TimerDisplay, TrainingCard, `useAudioRecorder.ts`, `useCountdown.ts`) | Interview simulation (phases `intro → question → speaking → reveal → done`, 90 s timer, question sets, optional local recording, ideal answer + checklist). Pitch timer with reflection checklists; impulse-word drill. `useCountdown` is timestamp-based (no drift). |
| Progress | `features/progress/store.ts`, `selectors.ts`, `hooks.ts` | Store: `exerciseResults`, `completedLessons`, `freetextAnswers`; actions record/mark/save/reset. Pure selectors: lesson/module/overall progress, next lesson, `summarizeResults`. |
| Content | `data/modules/01..14-*.ts`, `data/modules/index.ts`, `data/interview.ts`, `data/drills.ts` | 14 modules in 3 tracks (communication, presentation, consulting). `index.ts`: registry, `findModule`, `findLesson`, `lessonSequence`, `findNextLesson`/`findPreviousLesson`, `tracks`, `trackLabel`, `modulesInTrack`. `interview.ts`: `interviewQuestions`, `classicInterviewQuestions`, `interviewQuestionSets`. |
| Domain types | `types/content.ts` | `Module`, `Lesson`, `TheoryBlock` union (`text`/`keypoints`/`example`/`table`), `Exercise` union (`quiz`/`scenario`/`freetext`), `ChoiceQuality` (`best`/`ok`/`bad`), `InterviewQuestion`, `InterviewQuestionSet`, `PitchDrill`. ID convention: `"<lessonId>-q<n>"`, globally unique. |
| Shared UI | `components/ui/*` | Breadcrumb, Button, ButtonLink (shared `buttonStyles.ts`: variants `primary`/`secondary`/`ghost`/`inverse`, sizes `md`/`sm`), Card, ChecklistItem, ChoiceButton, FeedbackPanel (`tone`), inline SVG `icons.tsx`, LessonSegments, PageHeader, ProgressBar, StepIndicator. `ErrorBoundary.tsx` = class component with reload button. |
| Utilities | `lib/` — assertNever, cn, formatTime (m:ss), random (`randomItem` with exclude), readingTime (150 wpm over theory blocks), shuffle (Fisher-Yates) | Small pure helpers, one function per file |

## Code Organization Patterns

**a. Language**: everything is TypeScript — `.tsx` for anything rendering JSX, `.ts` for logic, hooks, stores, data, types. Styling is inline Tailwind utility classes + one global `src/index.css`.

**b. JS files & type-checking**: zero `.js`/`.jsx` in `src/`; `allowJs` not set — do not add JS files. Type-checking enforced by `npm run build` (`tsc -b && vite build`) and `npm run typecheck`. oxlint: `rules-of-hooks` error, `only-export-components` warning. Prettier: no semis, single quotes, trailing commas, width 100. No pre-commit hooks or CI.

**c. Directory → dominant extension**

| Directory | Dominant ext | Notes |
|---|---|---|
| `src/` (root) | .tsx | `main.tsx` + the only CSS file (`index.css`) |
| `src/app/` | .tsx / .ts | Router `.tsx`; route constants `.ts` |
| `src/types/` | .ts | |
| `src/data/` | .ts | |
| `src/data/modules/` | .ts | `NN-kebab-slug.ts` + `index.ts` registry |
| `src/lib/` | .ts | camelCase, one function per file |
| `src/components/` | .tsx | |
| `src/components/layout/` | .tsx | |
| `src/components/ui/` | .tsx | Shared class builders in a separate `.ts` (`buttonStyles.ts`) to avoid `only-export-components` |
| `src/features/answers|dashboard|exercises|modules/` | .tsx | `modules/` has the only nested `components/theory/` dir |
| `src/features/progress/` | .ts | Logic-only slice (store/selectors/hooks), no UI |
| `src/features/training/` | .tsx | Hooks are colocated `useX.ts` — there is no global `hooks/` dir |

No `src/hooks/`, `src/utils/`, or `src/store/`: those roles are filled by colocated `useX.ts`, `src/lib/`, and `features/progress/store.ts`.

**d. Shape of a new feature**
- Flat folder `src/features/<name>/` with `<Name>Page.tsx` + PascalCase sibling components.
- Colocate `types.ts`, `useX.ts`, `store.ts`/`selectors.ts`/`hooks.ts` only when needed (progress slice shows the layered pattern: store → pure selectors → `useMemo` hook wrappers).
- No barrel `index.ts` files, except `data/modules/index.ts` as the content registry.
- Register the route in `routes.ts` (pattern AND builder) and in `App.tsx`.
- New content: add `data/modules/NN-slug.ts` exporting `const camelName: Module`, add to the `modules` array.

**Naming & conventions**
- Components: PascalCase named-export functions with inline `interface XProps`.
- Variants typed as `Record<Union, string>` maps; phase state machines as `type Phase = '...' | '...'`.
- `key={id}` to reset local state; early-return `null` guards where `noUncheckedIndexedAccess` yields `T | undefined`.
- Zustand read with per-field selectors (`useProgressStore((s) => s.x)`).
- JSDoc `/** */` comments explain *why*; German UI copy written inline in JSX (no i18n layer).
- Imports across folders use `@/`; imports inside a feature use relative `./`.

## Testing Patterns

**There are no tests.** No `*.test.*`/`*.spec.*` files, no test framework or script. Test-to-source ratio 0:65. Quality is held up by strict `tsc`, oxlint, and Prettier only.

When adding tests, prefer Vitest (fits Vite). Priority candidates: `features/progress/selectors.ts`, store `merge` validation, `lib/*`, `data/modules/index.ts` navigation functions, and a content-integrity suite (unique IDs, exactly one correct quiz option). Browser-API hooks need MediaRecorder mocks + fake timers.

## Last Refreshed

2026-11-02 (commit 218f737)

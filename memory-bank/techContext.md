# Tech Context: KommPro

## Technology Stack

KommPro is a client-only React SPA with no backend, no network calls, and no auth. All user data lives in browser `localStorage`; learning content is typed TypeScript data bundled at build time.

### Language

- **TypeScript ~6.0.2** (lockfile resolves 6.0.3), strict mode, ESM (`"type": "module"`).
- `tsconfig.app.json` (covers `src/`): target/lib ES2023 + DOM, `moduleResolution: bundler`, `jsx: react-jsx`, `noEmit`.
- Strictness flags: `strict`, `noUncheckedIndexedAccess`, `verbatimModuleSyntax` (type-only imports must use `import type`), `erasableSyntaxOnly` (no enums/namespaces/parameter properties), `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`.
- Project references: root `tsconfig.json` → `tsconfig.app.json` (src) + `tsconfig.node.json` (only `vite.config.ts`, module `nodenext`).
- Path alias `@/*` → `./src/*`, set in BOTH `tsconfig.app.json` and `vite.config.ts`.
- **Node**: no version pinned (no `.nvmrc`/`engines`). Vite 8 requires Node ^20.19.0 || >=22.12.0. Local environment: Node v22.x, npm 10.x.

### Frameworks & libraries

| Package | Version | Purpose |
|---|---|---|
| react, react-dom | ^19.2.8 | UI framework; `createRoot`, `StrictMode`, custom `ErrorBoundary` |
| react-router-dom | ^7.18.4 | Client routing, declarative mode (`BrowserRouter`, `Routes`, `Route`); central `routePatterns` + typed builders in `src/app/routes.ts` |
| zustand | ^5.0.15 | State; single store `useProgressStore` with `persist` middleware (localStorage key `kommpro-progress`, version 1) |
| tailwindcss + @tailwindcss/vite | ^4.3.3 | Tailwind v4, CSS-first config via `@theme` in `src/index.css` (no `tailwind.config.js`) |
| @fontsource-variable/atkinson-hyperlegible-next | ^5.3.0 | Self-hosted sans font (`--font-sans`), imported in `main.tsx` |
| @fontsource-variable/source-serif-4 | ^5.3.1 | Self-hosted serif (`--font-serif`), used only for example wording |

No other runtime dependencies: no clsx (local `src/lib/cn.ts`), no icon library (inline SVGs in `components/ui/icons.tsx`), no i18n library, no fetch/axios.

Browser APIs used directly: `MediaRecorder` + `getUserMedia` + blob URLs (`src/features/training/useAudioRecorder.ts`), `localStorage` (via zustand persist), `window.confirm` (progress reset).

### Build tooling

- **Package manager: npm** (`package-lock.json` lockfileVersion 3; the only lockfile).
- **Vite ^8.3.0** with `@vitejs/plugin-react` ^6.1.1 and `@tailwindcss/vite`. Vite 8 bundles with Rolldown. Config: `vite.config.ts`. Output: `dist/` (gitignored).
- **oxlint ^1.81.0** (`.oxlintrc.json`): plugins react, typescript, oxc. `react/rules-of-hooks` = error; `react/only-export-components` = warning with `allowConstantExport`. No ESLint.
- **Prettier ^3.9.9** (`.prettierrc.json`): no semicolons, single quotes, trailing commas everywhere, printWidth 100.

### Storage

- Browser `localStorage` only, through zustand `persist`: key `kommpro-progress`, version 1. Stores `exerciseResults` (`Record<id, {correct?, selfScore?}>`), `completedLessons` (`string[]`), `freetextAnswers` (`Record<id, string>`). A custom validating `merge` falls back to defaults on malformed data. `resetProgress()` clears it.
- Audio recordings are never saved — in-memory blob URLs only, revoked on reset/unmount.
- No database, no backend, no network calls, no auth.

## Component Structure

```
src/
  main.tsx, index.css      bootstrap + design tokens (@theme)
  app/                     router (App.tsx) and route builders (routes.ts)
  types/                   domain types (content.ts)
  data/                    typed content: drills.ts, interview.ts, modules/NN-slug.ts + index.ts registry
  features/                feature slices: answers, dashboard, exercises, modules, progress, training
  components/              layout/ (AppLayout, Sidebar), ui/ (12 primitives + buttonStyles.ts), ErrorBoundary.tsx
  lib/                     pure helpers: assertNever, cn, formatTime, random, readingTime, shuffle
public/                    favicon.svg, icons.svg
```

Routes (German slugs): `/` (dashboard), `/modul/:moduleId`, `/modul/:moduleId/lektion/:lessonId`, `/training`, `/meine-antworten`, `*` NotFound.

## Development Commands

| Command | Runs | Purpose |
|---|---|---|
| `npm install` | — | Install dependencies |
| `npm run dev` | `vite` | Dev server with HMR (default http://localhost:5173) |
| `npm run build` | `tsc -b && vite build` | Type-check project references, then production build to `dist/` |
| `npm run preview` | `vite preview` | Serve the built `dist/` locally |
| `npm run lint` | `oxlint` | Lint the whole repo |
| `npm run typecheck` | `tsc -b --noEmit` | TypeScript checks only |
| `npm run format` | `prettier --write "src/**/*.{ts,tsx,css}"` | Format in place (check-only: `npx prettier --check "src/**/*.{ts,tsx,css}"`) |

## Test Strategy

**No test framework is set up** (no vitest/jest/playwright, no `test` script, zero test files). Verification = `npm run typecheck` + `npm run lint` + `npm run build`.

If/when tests are added, **Vitest** fits the existing Vite setup. Best first candidates (pure + deterministic): `features/progress/selectors.ts`, the store's `merge` validation, `lib/*` helpers, `data/modules/index.ts` (`findNextLesson` across module boundaries), and a content-integrity check (unique lesson/exercise IDs; each quiz has exactly one correct option). Browser-API hooks (`useAudioRecorder`, `useCountdown`) need MediaRecorder mocks and fake timers.

## Environment & Setup

- **Environment config: none.** No `.env*` files; nothing uses `import.meta.env`/`VITE_*`. `.gitignore` excludes `*.local`.
- **No CI/CD and no git hooks**: no `.github/`, no husky/lint-staged. Quality gates run manually via npm scripts; Vercel builds on deploy.
- **App language**: content/UI German (`<html lang="de">`); code, comments, and README English.

## Deployment

- **Vercel, static SPA.** `vercel.json` contains only the catch-all rewrite `{"source": "/(.*)", "destination": "/index.html"}` so `BrowserRouter` deep links work. Vercel auto-detects Vite (`npm run build` → `dist/`).

## Last Refreshed

2026-11-02 (commit 218f737)

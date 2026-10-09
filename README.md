# KommPro

A learning app for business communication and presentation skills (German content): solid theory, interactive exercises, and hands-on speaking drills.

## Features

- **14 learning modules** in three tracks: communication (basics, listening, feedback, written communication, meetings, conflict, negotiation), presentation (structure, storytelling, rhetoric, body language, slide design), and IT consulting (qualification-interview preparation for a consultant/Mendix-developer role with pre-sales and workshop duties, plus the biggest interview pitfalls in content, language, and questions)
- **Guided lessons**: readable theory (key-point boxes, good/bad examples, tables) followed by a guided exercise run
- **Three exercise types**: quizzes with explanations, scenario exercises with rated choices, and free-text tasks with sample solutions and self-assessment checklists
- **Training center**: pitch timer with reflection checklists and an impulse-word drill for spontaneous speaking
- **Progress tracking** per exercise, lesson, and module — persisted in `localStorage`, no backend required

## Tech stack

- React 19 + TypeScript (strict), Vite
- Tailwind CSS v4
- react-router-dom, zustand (persist)
- oxlint + Prettier

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Script              | Purpose                          |
| ------------------- | -------------------------------- |
| `npm run dev`       | Start the dev server             |
| `npm run build`     | Type-check and build for prod    |
| `npm run lint`      | Run oxlint                       |
| `npm run typecheck` | Run the TypeScript compiler only |
| `npm run format`    | Format `src/` with Prettier      |

## Project structure

```
src/
  app/        Router and central route builders
  types/      Domain types (modules, lessons, exercises)
  data/       Learning content (pure typed data) and drills
  features/   Feature slices: dashboard, modules, exercises, training, progress
  components/ Shared layout and UI primitives
  lib/        Small utilities
```

Content lives in `src/data/modules/` as typed TypeScript files — adding a module means adding one file and registering it in `src/data/modules/index.ts`.

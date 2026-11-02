# Product Brief: KommPro

## Project Foundation

- **Project Name**: KommPro (npm package `kommpro` v0.0.0; repo folder KommProClone)
- **Objectives**:
  - Deliver a readable, guided learning experience: theory → exercises → summary
  - Offer spoken-practice drills (interview trainer, pitch timer, impulse words)
  - Track progress with no backend
  - Keep content as typed TypeScript data (new module = one file + one registry entry)
  - Quality gates: `tsc -b` (strict), oxlint, Prettier — no test framework yet
- **Scope**:
  - In scope: 14 learning modules across 3 tracks; quiz/scenario/freetext exercises; training center (interview trainer, pitch timer, impulse-word drill); "Meine Antworten" collected-answers page; local progress tracking
  - Out of scope (not in the code): user accounts, server/API, cross-device sync, content-authoring UI, analytics, payments, AI/automatic grading (all grading is self-assessment against checklists)

## Repository Structure
- **Type**: Poly-repo (single Vite SPA)
- **Workspace Tool**: None
- **Workspace Root**: N/A
- **Layout**: `src/app` (router + type-safe route builders), `src/types` (content domain types), `src/data` (modules 01–14, `interview.ts`, `drills.ts`), `src/features` (dashboard, modules/lessons, exercises, training, progress, answers), `src/components` (layout + ui primitives), `src/lib` (small utilities), `public/` (favicon, icons)

## Git Configuration
- **Repository**: Yes
- **Provider**: GitHub
- **CLI Available**: gh (authenticated)
- **Remote URL**: https://github.com/klamesttec4u/KommPro.git
- **Default Branch**: main
- **Metadata Branch**: main
- **Routing Mode**: classic
- **Sync Automation**: none
- **Archive Strategy**: local-merge

- **Key Stakeholders**: single author, Karsten (per git log). No team or ownership files. [To be determined]

## Product Overview
- **Name**: KommPro ("Kommunikation Pro")
- **Value Proposition**: Learn business communication and presentation through short theory, workplace examples, and exercises you can apply right away ("Business-Kommunikation und Präsentation lernen: kurze Theorie, Beispiele aus dem Arbeitsalltag und Übungen, die du direkt anwenden kannst."). Also targeted preparation for IT-consultant client qualification interviews ("Qualifizierungsgespräch"), including speaking out loud against a timer and comparing against model answers.
- **Product Type**: client-only web app (React SPA, e-learning/self-study), static files on Vercel
- **Stage**: MVP / early personal tool (v0.0.0, 5 commits over ~3.5 weeks, no tests/auth/analytics). The consulting track is written for one specific case — a freelance Mendix low-code consultant with pre-sales and workshop duties — suggesting the app began as a personal interview-prep tool and was broadened.

## Key Functionality
- **Learning catalog**: 14 modules, 45 lessons, 179 exercises (89 quiz, 45 scenario, 45 freetext) in 3 tracks ("Lernpfade"):
  - **Kommunikation (7 modules)**: Grundlagen (sender/receiver, Schulz von Thun, iceberg model, Watzlawick); Aktives Zuhören & Fragetechniken; Feedback & Gesprächsführung (incl. Nonviolent Communication); Schriftliche Kommunikation; Meetings & Moderation; Konfliktkommunikation (Glasl escalation, de-escalation); Verhandeln (Harvard concept, BATNA/anchoring/ZOPA)
  - **Präsentation (5 modules)**: Ziel & Struktur (pyramid principle), Storytelling (incl. STAR), Rhetorik & Stimme, Körpersprache & Lampenfieber, Foliendesign & Publikumsfragen
  - **IT Consulting (2 modules)**: "Qualifizierungsgespräch: IT-Consultant" (6 lessons: preparation, Mendix self-pitch, AI use, SEAT/STAR, typical + classic questions with ideal/bad answers, 45-min reference interview); "Die größten Fehler im Gespräch" (4 lessons: content/language mistakes, behavioural no-gos, taboo questions)
- **Lesson structure**: theory blocks (text, key points, good/bad examples, tables) with estimated reading time, then guided exercises with a step indicator (Lesen → Üben → Abschluss). Quiz options each carry an explanation; scenario choices rated best/ok/bad with feedback; freetext tasks have a sample solution + self-assessment checklist.
- **Reading-only flow**: "Nur lesen" skips exercises and advances to the next lesson/module across the whole catalog.
- **Saved freetext answers ("Meine Antworten")**: auto-saved, pre-filled on reopen, collected on one page as a personal prep dossier with sample solutions on demand.
- **Trainingscenter**:
  - **Interview-Trainer**: two question sets — "Referenzgespräch (45 Minuten)" (13 questions in original order, tagged with minute and interviewer role: Projektleitung/Architekt) and "Die Klassiker" (10 standard questions incl. strengths/weaknesses, why freelance, CV gaps, day-rate negotiation; asked by Einkauf or HR). Question shows without its answer; user answers out loud within a 90-second countdown, optionally recording; then model answer + self-check checklist.
  - **Pitch-Timer**: 5 drills (elevator pitch, self-introduction, status update, selling an idea, spontaneous statement), 30/60/90/180 s durations, reflection checklists.
  - **Impulswörter**: random business term as a spontaneous-speaking prompt.
- **Local audio recording**: MediaRecorder, in-memory only (blob URL); nothing uploaded or saved; discarded on reset or page leave.
- **Progress tracking**: per exercise (correct/self-score), lesson (completed), module, and track. Dashboard has "continue where you left off", progress bars, and a reset button with confirmation.

## Markets Serviced
- **Primary Market**: German-speaking professionals building business communication and presentation skills; narrowest segment: IT consultants/freelancers in low-code (Mendix) preparing for client qualification interviews, especially roles combining development with pre-sales and workshops
- **Secondary Markets** (inferred): corporate soft-skills training, interview preparation, consulting-firm onboarding [To be determined]
- **Geographic Focus**: DACH (all content German, informal "du"; `lang="de"`)
- **Market Size**: [To be determined]

## Competitive Landscape
- **Direct Competitors**: [To be determined]
- **Indirect Competitors** (inferred): generic e-learning platforms, soft-skills courses, interview-coaching services [To be determined]
- **Key Differentiators** (inferred from code): deep, specific IT-consultant qualification-interview content (Mendix, pre-sales, presenting AI use); drills requiring speaking out loud before the answer is revealed; fully private local-only data; no signup
- **Competitive Advantages**: [To be determined]

## Key Personas

### Primary Users
| Persona | Role | Goals | Pain Points | Success Metrics |
|---|---|---|---|---|
| Interview-prepping IT consultant | Freelance/employed IT consultant, Mendix low-code developer with pre-sales & workshop duties | Pass a client qualification interview; present self with SEAT and projects with STAR; handle classic questions and day-rate negotiation | Rambling answers, filler words, unclear personal contribution, typical interview mistakes, nerves | Self-check checklist hits; completing question sets; "repeat daily until the interview" |
| Business professional improving communication | Knowledge worker, team member, or project lead | Better feedback, meetings, e-mails, conflict handling, negotiation, presentations | No structured practical training; little practice speaking freely | Lessons completed, quiz accuracy, self-assessment scores |

### Secondary Users
| Persona | Role | Goals |
|---|---|---|
| Presenter | Anyone giving presentations or status updates | Structure, storytelling, voice, body language, slide design; timed pitch practice |
| Learner who only reads | Time-constrained user | Read through the catalog via "Nur lesen" without exercises |

### Administrators/Operators
| Persona | Role | Responsibilities |
|---|---|---|
| Content author / developer | Maintainer (currently the single author) | Writes content as typed TS files in `src/data`, deploys to Vercel; no admin UI |

## User Flows
- **Primary Flow**: Dashboard → continue panel → lesson → read theory → "Weiter zu den Übungen" → quiz/scenario/freetext → summary (correct %, freetext count) → "Nächste Lektion" / "Nächstes Modul starten"
- **Onboarding**: no account, no tutorial; first visit shows "Willkommen bei KommPro" + "Dein Einstieg → Erste Lektion öffnen"
- **Key Workflows**:
  - Interview simulation: /training → choose question set → optional recording → per question "Jetzt laut antworten (90 s)" → speak → model answer, playback, self-check → done screen with daily-repeat tip
  - Pitch/spontaneous speaking: choose drill + duration → timer → reflection checklist; or draw a random impulse word
  - Prep dossier: write freetext answers in lessons → review at /meine-antworten → reopen lessons to revise
  - Reading flow: "Nur lesen: nächste Lektion / nächstes Modul"
  - Navigation: sidebar with Übersicht, Trainingscenter, Meine Antworten, collapsible track groups with per-module progress; mobile drawer
  - Reset: "Lernfortschritt zurücksetzen" with confirmation prompt
- **Routes** (German slugs): `/`, `/modul/:moduleId`, `/modul/:moduleId/lektion/:lessonId`, `/training`, `/meine-antworten`, catch-all 404

## Success Metrics & KPIs
None tracked — no analytics, telemetry, or KPI definitions in the code.
- **Business Metrics**: [To be determined]
- **Product Metrics**: [To be determined] — only device-local learner progress exists (completed lessons, correct %, self-scores), never reported anywhere
- **Technical Metrics**: [To be determined]

## Non-Functional Requirements

### Performance
- **Response Time**: N/A (no backend); all content ships in the JS bundle (~7.5k lines of content data)
- **Page Load**: [To be determined] — no code splitting or lazy loading

### Scalability
- Static CDN hosting scales trivially; user data is a small localStorage object. Growth/peak: [To be determined]

### Security
- **Authentication/Authorization**: none
- **Compliance**: [To be determined]; GDPR relevant only in principle — no personal data leaves the device
- **Data Classification**: freetext answers may hold personal/career details (projects, day rate, CV gaps), stored unencrypted in localStorage
- **Encryption**: HTTPS in transit via Vercel (assumed); nothing encrypted at rest

### Availability & Reliability
- **Uptime/RTO/RPO/DR**: [To be determined]; depends on Vercel static hosting
- **Backup**: none — progress/answers exist only in browser localStorage, lost if browser data is cleared; no export
- **Resilience**: top-level ErrorBoundary; persist `merge` validates stored data; lesson completion survives a storage-quota exception (local state set before persisting)

### Data & Privacy
- **Residency**: the user's own browser
- **Retention**: until in-app reset or browser-storage clear. Audio never kept (in-memory blob URL, revoked; mic tracks stopped)
- **Privacy**: local-only by design; code comment: "nothing is uploaded or persisted"; no outgoing HTTP calls
- **PII**: freetext answers (potential PII) in localStorage key `kommpro-progress`. Mic requested only when recording enabled; graceful fallback if denied ("Mikrofon nicht verfügbar – es geht auch ohne Aufnahme weiter")
- **Portability**: none (no export/import). **Right to deletion**: in-app reset clears everything

### Accessibility
- **Target Compliance**: [To be determined] — no stated WCAG level, but clear a11y intent:
  - Atkinson Hyperlegible Next body font (built for low-vision readers); Source Serif 4 for reading text
  - `prefers-reduced-motion` and `prefers-color-scheme` (dark mode) respected; limited line length
  - [x] Screen reader (partial): ~39 ARIA/role occurrences (`aria-labelledby`, `aria-expanded`, `aria-controls`, `aria-pressed`, `nav aria-label="Hauptnavigation"`)
  - [x] Keyboard navigation (native buttons/links); [x] focus indicators (`focus-visible:outline-2`); [x] alt text (decorative logo `alt=""`)
  - [ ] Color contrast: not verified; [ ] captions/transcription: N/A / none

### Internationalization
- **Languages**: German only (hard-coded, informal "du"); code and comments English; no i18n library. German typographic quotes; RTL not applicable.

### Browser/Platform Support
- Modern evergreen browsers (React 19, Vite 8, Tailwind v4). Recording needs `getUserMedia` + `MediaRecorder`, with fallback. Responsive layout with mobile drawer sidebar and sticky bottom action bar on phones.

## Integration Points

### External Systems
| System | Purpose | Protocol | Direction |
|---|---|---|---|
| Vercel | Static hosting; SPA rewrite to /index.html | HTTPS | Serving |

### APIs Consumed
| API | Provider | Purpose |
|---|---|---|
| MediaDevices.getUserMedia / MediaRecorder | Browser | Local mic recording for speaking drills |
| Web Storage (localStorage) | Browser | Progress + freetext answers (zustand persist) |
| URL.createObjectURL | Browser | In-memory recording playback |
| window.confirm | Browser | Progress-reset confirmation |

No third-party or remote APIs. Fonts self-hosted via @fontsource (no Google Fonts CDN).

### APIs Provided
None.

### Data Sources
| Source | Type | Frequency |
|---|---|---|
| `src/data/modules/*.ts`, `interview.ts`, `drills.ts` | Static typed TS content | Build-time |
| localStorage `kommpro-progress` | Browser storage | Real-time, on user action |

## Constraints & Assumptions

### Business Constraints
- Single author; personal-scale project. Budget/timeline: [To be determined]
- Consulting content tied to one specific role (Mendix consultant, pre-sales/workshops) and one reference interview

### Technical Constraints
- Client-only static SPA: no cross-device sync, sharing, or server-side grading
- Stack: React 19, TypeScript ~6 (strict), Vite 8, Tailwind v4, react-router-dom 7 (BrowserRouter → needs the vercel.json SPA rewrite), zustand 5 + persist, oxlint, Prettier
- Content changes require a code change and redeploy
- Recording depends on browser support and mic permission

### Assumptions
- Learners practise alone and grade themselves honestly against checklists
- Users stay on one browser/device
- Audience reads German

## Risks
None documented in the repo; inferred:

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Progress/dossier lost when browser data cleared or device switched | Medium | Medium | Add export/import or optional sync |
| Sensitive career details (day rates, CV gaps) unencrypted in localStorage | Low | Medium | Document local-only storage; offer clear/export |
| Consulting content too narrow (Mendix-specific) | Medium | Medium | Generalise or add role-specific tracks |
| No automated tests; regressions in progress logic / persist schema (v1, no migration) | Medium | Medium | Unit tests for selectors + store; define persist migrations |
| Recording unsupported or permission denied | Medium | Low | Already handled with graceful fallback |
| German-only content limits reach | High | Low/Medium | Add i18n if expanding beyond DACH |

## Open Questions
- [ ] Personal prep tool or product for wider distribution (internal training, public)?
- [ ] Production URL / Vercel project ownership?
- [ ] Should progress/answers ever sync or be exportable?
- [ ] Target WCAG level?
- [ ] Other languages or consulting roles beyond Mendix?
- [ ] What does "Clone" in the repo folder name refer to?

## Document History
| Date | Author | Changes |
|---|---|---|
| 2026-11-02 | /bmb:init (codebase analysis) | Initial creation from code at commit 218f737 |

## Last Refreshed
2026-11-02

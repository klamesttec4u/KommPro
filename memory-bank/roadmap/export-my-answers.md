---
version: next
status: in_progress
priority: medium
complexity: 2
linked_tasks: [export-my-answers]
created: 2026-11-02
---

# Export My Answers

Add an export action to the "Meine Antworten" page that downloads all of the learner's saved freetext answers as a nicely structured Markdown/text file — grouped by module and lesson, each entry showing the exercise task and the learner's answer. The file is generated client-side from the persisted progress store (`kommpro-progress` in localStorage), so learners can keep their personal prep dossier outside the browser and survive a storage reset.

**Scope notes:**
- Export format: Markdown (readable as plain text); download triggered via a Blob/object-URL, no backend involved
- Source of truth: `useProgressStore` `freetextAnswers`, joined against the content catalog (`src/data/modules`) the same way `MyAnswersPage` already collects entries
- Sample solutions (Musterlösungen) are NOT included — the dossier contains the learner's own answers only
- Empty state: export action is hidden or disabled when no answers are saved

**Complexity rationale**: Decision tree — not a bug fix/config change (Q1 no); slightly more than a trivial 1-file change (export utility + button on `MyAnswersPage` + tests) (Q2 no); simple enhancement with clear requirements and no design decisions — client-side Markdown generation is the obvious solution (Q3 yes) → **Level 2**. Confirmed by user.

# Project Configuration

## Banyan Memory Bank

This section is auto-managed by `/bmb:init`. Do not edit manually.

- **Banyan Version**: 2.2.1
- **Initialized**: 2026-11-02
- **Last Updated**: 2026-11-02

## Git & Branching (v2)

Read by every banyan command for branch routing and protected-branch enforcement (see `context/branch-routing.md`).

```yaml
metadata_branch: main            # where memory-bank truth lives
protected_branches: [main]       # banyan never commits to these — all writes go via PR
pr_target: main                  # banyan PRs target this (normally = metadata_branch)
sync_automation: none            # status record for /bmb:doctor (NOT a mode switch)
archive_strategy: local-merge
worktree_root: ~/banyan-wt/kommproclone/
```

## Agent Backends

Which execution backend drives each configurable **seam** of the workflow. BMB runs on Anthropic
(Claude) by default; a project may route individual content-producing seams to the optional
`codex@openai-codex` plugin instead. **This block is the per-project source of truth — edit it here
to override backends for this project.**

```yaml
backends:
  plan:                  anthropic
  tdd:                   anthropic
  code-review:           anthropic
  creative-architecture: anthropic
  creative-uiux:         anthropic
  creative-algorithm:    anthropic
  creative-user-journey: anthropic
  creative-critique:     codex          # self-enables if Codex is installed later; skips while absent
  auto-final-review:     anthropic
  availability:          auto           # auto = silently fall back to Anthropic if Codex is down
```

Codex was not detected at init — every seam runs on Anthropic (the `creative-critique` pass simply
skips until Codex is installed).

## Team

Maps each contributor's git identity (email) to a friendly first name. Used for owner attribution and human-facing displays.

```yaml
team:
  # <git-email>: <friendly first name>
  # Crowd-sourced and self-populating: every mutating command backfills the
  # current author's entry (from `git config user.email`) before pushing, if
  # it is missing. Keyed by email, so re-adds are idempotent.
  # Safe to edit by hand (fix a name, add a teammate ahead of time).
  karsten.lamest@googlemail.com: Karsten
```

## UAT

Project-wide defaults for `/bmb:uat` (not yet configured — run `/bmb:uat-init` to set up).

- **default_sections**: happy,mobile
- **default_skip_ux_check**: false
- **default_environment**: dev
- **artifact_git_policy**: ignore
- **uat_required_for_archive**: false

## Notes

- Solo project; completed tasks are merged locally into `main` (archive_strategy: local-merge — no push/PR required by banyan).

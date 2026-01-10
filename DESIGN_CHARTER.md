# DESIGN_CHARTER.md  
## Demonstrated Risk, Institutional Inaction, and the Engineering of Truth

This document defines **intent, constraints, and authority** for this repository and its GitHub Pages site.

It is **not** a task list.  
It is **not** a technical deep dive.  
It does **not** prescribe implementation details.

It exists to answer one question only:

> **What must remain true, no matter how the project evolves?**

All execution details are delegated to commits, issues, and tooling.  
All work should be judged against this charter.

## 1. What This Project Is

This is a **text-first publication**.

At its centre is a canonical long-form essay:

> **“Why Demonstrated Risk Is Ignored in Large Organisations — and How to Fix That”**

Everything else exists to support:
- legibility,
- durability,
- citation,
- and faithful distribution across contexts (public, executive, academic).

This repository is a **publishing apparatus** for an argument, not a content farm.

The site is not a portfolio.  
It is not a demo.  
It is not a product.

It is a place where a reader can stay with a difficult observation long enough for it to land.

## 2. What This Project Is Not

This project is not:
- a personal grievance archive
- an exposé of a specific institution
- a whistleblowing dossier
- a brand vehicle
- an interface experiment
- a design showcase

This does not mean emotion is forbidden.  
It means the work must remain **structural**, not vindictive.

The project does not exist to impress.  
It exists to be **true, readable, and useful**.

## 3. Non-Negotiable Principles (The Constitution)

These are constraints.

If an implementation violates any of the following, it is wrong — even if it “works”.

### 3.1 The Essay Is the Centre
The canonical essay must always dominate attention.
Navigation and metadata exist to serve reading, not compete with it.

### 3.2 Canonical Integrity
There is exactly **one source of truth** for the argument:
- `articles/canonical/why-demonstrated-risk-is-ignored__vX.Y.md`

The canonical text may be edited for:
- clarity,
- correctness,
- citation improvements,
- formatting stability.

It may **not** be edited in ways that change meaning without a deliberate version bump and an explicit change note.

Derived versions may be created, but they must:
- be labelled as derived,
- reference the canonical version they came from,
- and never silently replace the canonical.

### 3.3 Public Safety Without Self-Censorship
A public-safe edition may anonymise contexts and remove identifying details.
It must not dilute the core structural claim.

Anonymisation is for **risk management**, not self-erasure.

### 3.4 Calm, Accessible Reading
The site must be comfortable to read for long periods:
- clear typography
- predictable layout
- low cognitive load
- good contrast
- keyboard-friendly navigation

Accessibility overrides cleverness.

### 3.5 Simplicity With Beauty
The site should be visually quiet but not austere:
- generous line-height and comfortable measure
- a calm palette (avoid pure white and pure black)
- a clear typographic hierarchy
- minimal chrome; no “design noise”

Beauty here is **restraint**: polish through spacing, typography, and clarity.

### 3.5 No Spectacle
No animations that announce themselves.
No “hero” visuals.
No engagement hacks.
No dark patterns.

If it looks like marketing, it is wrong.

### 3.6 Determinism Over Novelty
The site should feel stable.
No novelty loops, randomness, or reactive gimmicks.

The work is the motion.

### 3.7 Citability and Durability
The repository must remain easy to cite and reuse:
- `CITATION.cff` kept current
- stable URLs
- clear licensing
- bibliographies in common formats (APA / BibTeX / RIS)

## 4. Architectural Decisions (Final)

These decisions are settled unless the charter is explicitly updated.

- Static site via **GitHub Pages** built with **Astro** (static output)
- Canonical content authored in **Markdown**
- Repository structure separates canonical vs derived artefacts
- No heavy client-side frameworks or runtime app shells
- No third-party tracking or analytics by default
- Keep dependencies minimal; prefer plain Markdown and a small, boring CSS layer

## 5. Versioning and Drift Control

This project treats drift as a real failure mode.

Rules:
- Canonical file is edited directly.
- Derived artefacts are regenerated from canonical.
- Derived artefacts are never edited in isolation without reconciling back to canonical.

Naming convention (recommended):
- `why-demonstrated-risk-is-ignored__vMAJOR.MINOR.md` (canonical)
- `...__public.md`, `...__executive.md`, `...__conference.md` (derived; must declare source version)

When there is conflict:
- Canonical meaning wins.
- Readability wins over aesthetics.
- Calm wins over cleverness.

## 6. UI and Content Boundaries

Rules:
- The site exists to serve reading, not to exhibit UI.
- No client-side state for its own sake.
- No novelty backgrounds or motion. If something moves, it must also get out of
  the way (respect `prefers-reduced-motion`).
- Prefer system fonts. Avoid external font fetches by default.

Practical guidance:
- Keep CSS token-driven and small.
- Keep page chrome minimal (few links; predictable placement).
- Treat the canonical essay as the primary experience; everything else is
  navigation, citation, and context.

## 7. Authority and Delegation

This document defines intent and limits.

Implementation details — layouts, navigation, build config, link structure, CI — are delegated to the repository and its change history.

The relationship is explicit:

- **Commits implement.**
- **This charter governs.**

## 8. How to Use This Document

- Read it before starting work.
- Re-read it when something feels off.
- Use it to decide what not to build.
- Update it only when the project’s intent genuinely changes.

If the site becomes busy, self-conscious, or sales-like,
this document has been ignored.

## 9. Closing

This project does not promise organisational reform.
It does not promise that truth will always win.

It promises only this:

> **the argument will be given enough quiet structure  
> to remain legible, citable, and hard to ignore.**

That is the contract.

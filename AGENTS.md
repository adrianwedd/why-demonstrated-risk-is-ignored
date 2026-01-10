# Repository Guidelines

## Purpose
This repo hosts the canonical article plus public and academic derivatives of “Why Demonstrated Risk Is Ignored in Large Organisations — and How to Fix That”, along with bibliographic sources and a GitHub Pages/Astro site.

## Project Structure
- `src/pages/`: Astro pages and routes (site entry is `src/pages/index.astro`).
- `src/layouts/`, `src/styles/`: shared layout and typography tokens.
- `articles/`
  - `canonical/`: source of truth (versioned filenames like `why-demonstrated-risk-is-ignored__v1.0.md`).
  - `public/`: shortened, low-citation edition.
  - `academic/`: academic derivatives (e.g. `conference-paper.md`).
- `bibliography/`: references in `.bib`, `.ris`, and rendered formats.
- `CITATION.cff`: citation metadata for the project.

## Local Preview (Astro)
- Install deps: `npm ci`
- Dev server: `npm run dev`
- Build once: `npm run build`
- Optional link check (after build): `npm run check:links`

## Content Style & Naming
- Markdown is the primary “source code”; keep edits focused and avoid large reflows.
- Preserve intentional line breaks (many paragraphs use Markdown hard-breaks via trailing spaces).
- Use clear headings, short paragraphs, and consistent terminology across editions.
- When adding a new canonical revision, keep the naming pattern: `articles/canonical/...__vX.Y.md`.
- When adding new citations, update `bibliography/bibliography.bib` (and regenerate other formats if you change the source of truth).

## Testing / QA
There is no automated test suite. Before opening a PR:
- Run `npm run build` and skim the rendered output for formatting regressions.
- Spot-check internal links and reference markers (e.g. `[1][2]`) in touched sections.

## Commits & Pull Requests
- No existing commit history yet; use clear, scoped messages (e.g. `docs: refine canonical section 2`).
- PRs should describe intent, list edited files/editions, and call out any bibliography changes.
- If you change public-facing phrasing, include a short rationale to preserve editorial consistency.

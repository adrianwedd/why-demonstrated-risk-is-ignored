# Why Demonstrated Risk Is Ignored

This repository is a text-first publishing apparatus for the canonical essay:

**Why Demonstrated Risk Is Ignored in Large Organisations — and How to Fix That**

The central claim (developed and cited in the canonical version) is that large
organisations rarely fail because risk is unknown; they fail because **known,
demonstrated risks are structurally difficult to act on**. The work treats this
as a systems problem: incentives, authority, and accountability determine
whether truth moves.

## Read
- Landing page (GitHub Pages): `index.md`
- Canonical (v1.1, source of truth): `articles/canonical/why-demonstrated-risk-is-ignored__v1.1.md`
- Public edition (derived from v1.0): `articles/public/why-demonstrated-risk-is-ignored__public.md`
- Executive brief (derived from v1.0): `articles/academic/executive-brief.md`
- Conference submission draft (derived from v1.0): `articles/academic/conference-paper.md`
- PhD proposal draft (derived from v1.0): `articles/academic/phd-proposal.md`
- Bibliography: `bibliography/bibliography_APA.md`
  (also: `bibliography/bibliography.bib`, `bibliography/bibliography.ris`)

Note: on GitHub Pages, Markdown pages render to the same path with `.html`
(e.g. `articles/canonical/why-demonstrated-risk-is-ignored__v1.1.html`).

For the canonical essay and APA bibliography, this repo keeps the `.md` files as
human-readable source of truth and uses small `.html` wrapper pages (Jekyll +
Minima) to render them on GitHub Pages.

## What’s In The Canonical Essay
The canonical essay is structured as a design analysis:
- The myth that “evidence leads to action”
- Four recurring structural inhibitors (authority, career risk, compliance
  substitution, diffuse accountability)
- Why demonstration can reduce action (liability and incentive effects)
- Why this is not primarily a culture problem
- Interventions that make truth move (mandates, protected discovery, empiricism,
  no-ignore artefacts, explicit risk ownership)
- Moral injury and epistemic harm as predictable outcomes of forced inaction

## Versioning and Derivation Policy
- **Canonical is the only source of truth.** Meaning changes must be deliberate
  and accompanied by a version bump (file name pattern: `__vMAJOR.MINOR`).
- **Derived artefacts are declared.** Each derived document must state the
  canonical version it was derived from (e.g. “Derived from canonical v1.0”).
- **Drift is treated as a failure mode.** If a derived artefact needs a change
  that affects meaning, reconcile it back into canonical first.

## Repository Structure
- `index.md`: calm landing page and navigation.
- `articles/canonical/`: versioned canonical essay (source of truth).
- `articles/public/`: citation-light edition(s) for broad circulation.
- `articles/academic/`: executive and academic drafts.
- `bibliography/`: references in APA Markdown plus `.bib` and `.ris`.
- `CITATION.cff`: citation metadata.
- `DESIGN_CHARTER.md`: publishing constraints (calm, accessible, no spectacle).

## How to cite
Metadata is in `CITATION.cff` (CC BY 4.0; see `LICENSE`). Suggested citation:

> Wedd, Adrian. (v1.1). *Why Demonstrated Risk Is Ignored in Large Organisations*.
> CC BY 4.0.

## Contributing
This repo optimises for readability, stability, and citability.
Contributor guidance lives in `AGENTS.md`.

## Local preview
This site is built with Astro (no heavy client-side framework; text-first pages).

- Install: `npm ci`
- Dev server: `npm run dev`
- Build: `npm run build`
- Optional link check (after build): `npm run check:links`

## GitHub Pages settings
- Settings → Pages → **Build and deployment** → “GitHub Actions”
- The workflow is in `.github/workflows/pages.yml`

# Why Demonstrated Risk Is Ignored

A research portfolio exploring why large organisations fail to act on known, demonstrated risks — and what structural interventions might fix that.

## What This Is

This repository contains:

1. **A canonical essay** articulating the core thesis
2. **A structured research backlog** operationalizing the concepts for empirical work
3. **Documentation of agent-assisted execution** as a meta-artifact

The central claim: large organisations rarely fail because risk is unknown. They fail because **known, demonstrated risks are structurally difficult to act on**. This is a systems problem — incentives, authority, and accountability determine whether truth moves.

## The Essay

The canonical essay is a design analysis structured around:

- The myth that "evidence leads to action"
- Four structural inhibitors: responsibility without authority, risk discovery as career threat, compliance theatre, accountability diffusion
- Why demonstration can paradoxically reduce action (deniability as organisational currency)
- Five intervention patterns: mandatory response triggers, protected discovery, empiricism over assurance, no-ignore artifacts, executive risk ownership
- Moral injury as a predictable outcome of forced inaction

**Read:** [`articles/canonical/why-demonstrated-risk-is-ignored__v1.1.md`](articles/canonical/why-demonstrated-risk-is-ignored__v1.1.md)

## The Research Backlog

The backlog ([`PROJECT_BACKLOG_v2.md`](PROJECT_BACKLOG_v2.md)) operationalizes the essay's concepts into a structured research program. It's designed to be:

- **Dependency-ordered** — explicit graph of what blocks what
- **Tiered by feasibility** — separating desktop-completable work from work requiring field access
- **Portfolio-oriented** — each issue produces a showable artifact
- **Agent-compatible** — structured for human-AI collaboration

### Tiers

| Tier | Description | Issues |
|------|-------------|--------|
| **A: Foundations** | Desktop-completable foundational work | Definitions, codebook, literature map |
| **B: Speculative** | Design artifacts, no field data required | Governance patterns, metrics spec |
| **C: Future** | Requires organizational access | Evaluation designs, benchmark cases |

### Keystone Artifact

**Issue 2.1 — Structural Inhibitor Codebook** is marked as keystone. It bridges theory and measurement; most downstream work depends on having clear, codable inhibitor definitions.

### Issues

The backlog is tracked as GitHub Issues with labels for tier, epic, and status. Start with issues labeled `status:ready`.

## Agent-Assisted Research

Epic 7 documents how this work uses AI assistance — not as a novelty, but as a serious exploration of human-AI research collaboration:

- **7.0** — Execution log documenting what agents did well and where human judgment was required
- **7.1** — Skills library encoding research methods as reusable prompts
- **7.2** — Guardrail checklist for detecting drift and hallucination
- **7.3** — Confidence protocol for attention triage

This produces a meta-artifact: honest documentation of AI's current capabilities and limits in research work.

## Repository Structure

```
articles/
  canonical/          # Versioned canonical essay (source of truth)
  academic/           # Conference paper, PhD proposal, executive brief
  public/             # Citation-light edition for broad circulation
bibliography/         # References (APA markdown, .bib, .ris)
docs/                 # Research artifacts (created as issues complete)
assets/               # Diagrams and visual artifacts
skills/               # Agent skill definitions (inhibitor coding, literature clustering, etc.)
PROJECT_BACKLOG_v2.md # Structured research backlog
DESIGN_CHARTER.md     # Publishing constraints
AGENTS.md             # Contributor guidance
CITATION.cff          # Citation metadata
```

## Versioning

- **Canonical is source of truth.** Changes require version bump (pattern: `__vMAJOR.MINOR`)
- **Derived artifacts declare their source.** Each states which canonical version it derives from
- **Drift is a failure mode.** Meaning changes reconcile back to canonical first

## How to Cite

Metadata is in `CITATION.cff` (CC BY 4.0; see `LICENSE`).

> Wedd, Adrian. (2025). *Why Demonstrated Risk Is Ignored in Large Organisations — and How to Fix That* (v1.1). https://github.com/adrianwedd/why-demonstrated-risk-is-ignored

## Local Development

Built with Astro (text-first, no heavy framework).

```bash
npm ci          # Install dependencies
npm run dev     # Dev server
npm run build   # Production build
```

## What This Demonstrates

For those evaluating this as a portfolio piece, this work shows:

- **Systems thinking** — treating organisational failure as structural, not moral
- **Operationalization** — converting fuzzy concepts into measurable constructs
- **Research methodology** — falsifiable propositions, inter-rater reliability, threats to validity
- **Practical translation** — design patterns implementable without researcher presence
- **Honest AI collaboration** — documenting what works and what doesn't

## License

CC BY 4.0 — see [`LICENSE`](LICENSE)

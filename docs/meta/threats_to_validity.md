# Threats to Validity

**Version:** 1.0
**Issue:** #12
**Status:** Draft (Living Document)

---

## Purpose

This document acknowledges methodological risks upfront. It will be expanded as artifacts are produced and new threats are identified. Each threat has at least one mitigation.

---

## Construct Validity Risks

### CV1: Operationalisation of "Demonstrated Risk"

**Threat:** "Demonstrated risk" may be operationalised too narrowly (excluding valid cases) or too broadly (including speculative risks).

**Manifestation:**
- Too narrow: Requiring reproducibility excludes valid single-occurrence risks
- Too broad: Including any articulated concern dilutes the construct
- Edge cases: Near-misses, risk indicators, and precursor events may not fit cleanly

**Mitigation:**
- Explicit boundary conditions in `/docs/definitions/demonstrated_risk.md`
- Tiered classification: confirmed demonstrated, probable demonstrated, possible demonstrated
- Worked examples showing inclusion/exclusion reasoning
- Inter-rater reliability testing on boundary cases

**Status:** Partially mitigated by existing definition; boundary case examples pending

---

### CV2: Inhibitor Overlap

**Threat:** Inhibitor definitions may overlap in practice, making clean coding difficult.

**Manifestation:**
- Responsibility without authority + Accountability diffusion: both involve unclear ownership
- Compliance theatre + Accountability diffusion: both enable avoidance through process
- Cases may exhibit multiple inhibitors through common root causes

**Mitigation:**
- Differential diagnosis section in inhibitor codebook
- Decision trees that force distinct classification paths
- Coding rules for when multiple inhibitors apply
- Explicit interaction effects documentation

**Status:** Mitigated by codebook structure (Issue #7)

---

### CV3: "Ignored" vs. "Deferred" Distinction

**Threat:** The distinction between "ignored" and "deferred" may be hard to observe without internal organisational access.

**Manifestation:**
- An explicit decision to defer looks like ignoring from outside
- Rational triage (lower priority due to resource constraints) vs. irrational ignoring may be indistinguishable
- Organisations may claim deferral post-hoc to rationalise ignoring

**Mitigation:**
- Operational definition requiring absence of decision record = ignored (not deferred)
- Time-bound threshold: unaddressed beyond X cycles = treated as ignored
- Documentation of artifact-based vs. interview-based evidence
- Acknowledgement that this creates conservative bias (may under-count true ignoring)

**Status:** Operational definition provided in pipeline model; may need refinement based on case application

---

## Selection Bias Risks

### SB1: Author Experience Over-Representation

**Threat:** Examples drawn from author's experience may over-represent certain sectors (government, security).

**Manifestation:**
- Government and regulated industries may have different inhibitor profiles than startups
- Security/compliance domain experience may bias toward certain inhibitor types
- High-profile failures are more memorable than successful risk management

**Mitigation:**
- Explicit boundary conditions for claims (sector, size, maturity)
- Literature integration draws from multiple sectors
- Future empirical work should deliberately sample beyond author experience
- Acknowledgement that current work is theory-building, not representative sampling

**Status:** Boundary conditions documented in contributions and propositions; sector limitations acknowledged

---

### SB2: Publication Bias in Cases

**Threat:** Publicly available cases may systematically differ from typical organisational behaviour.

**Manifestation:**
- Only spectacular failures become public; mundane failures remain hidden
- Successful risk management has no "case" to study (non-events)
- Survivorship bias: we see organisations that failed, not those that addressed risks

**Mitigation:**
- This work uses cases illustratively, not as primary evidence
- Propositions are designed for prospective testing, not retrospective case analysis
- Theory is derived from structural analysis, validated (future) by prospective observation
- Explicit acknowledgement that retrospective cases have survivorship bias

**Status:** Mitigated by design (theory-building from structure, not case induction)

---

### SB3: Memorable vs. Base Rate

**Threat:** Memorable failures may not represent base rates of inhibitor presence or risk ignoring.

**Manifestation:**
- Availability heuristic: dramatic failures are overweighted
- Base rate of "demonstrated risk ignored" vs. "demonstrated risk addressed" is unknown
- This work may describe uncommon edge cases, not modal organisational behaviour

**Mitigation:**
- Explicit acknowledgement that prevalence is unknown
- Propositions designed to measure prevalence (P1, P2, P3 depend on comparing organisations)
- Theory applies to failure cases; generalisation to base rates requires empirical work
- Future work should estimate prevalence, not assume it

**Status:** Acknowledged as limitation; empirical prevalence estimation is Tier C future work

---

## Interpretation Bias Risks

### IB1: Author Proximity

**Threat:** Author proximity to the phenomenon may cause motivated reasoning.

**Manifestation:**
- Confirmation bias: seeing inhibitors where they may not be the primary cause
- Explanation attachment: preferring structural explanations over alternative causes
- Advocacy bias: wanting interventions to work may bias assessment

**Mitigation:**
- Falsifiable propositions with named falsifiers
- Pre-registration of hypotheses before data collection (future work)
- Explicit alternative explanations section in each artifact
- External review of coding decisions

**Status:** Falsifiable propositions documented (Issue #8); alternative explanations pending

---

### IB2: Literature Confirmation Bias

**Threat:** Confirmation bias in literature selection (finding sources that agree).

**Manifestation:**
- Selecting citations that support the model
- Ignoring contradictory findings
- Overgeneralising from supportive studies

**Mitigation:**
- "Tensions between sources" section in literature grounding
- Explicit search for disconfirming literature
- Documentation of what each citation does NOT explain
- Expected negative results section in propositions document

**Status:** Tensions documented in literature grounding (Issue #9); disconfirming literature search ongoing

---

### IB3: Agent Assistance Blind Spots

**Threat:** Agent (AI) assistance may introduce systematic blind spots.

**Manifestation:**
- Agent has training data biases that affect suggestions
- Agent may hallucinate citations or overconfidently state claims
- Agent interaction may create echo chamber (agrees with author framing)
- Agent's knowledge cutoff may miss recent literature

**Mitigation:**
- All citations verified by human
- Agent-generated content marked and reviewed
- Agent challenged to identify weaknesses, not just support claims
- Guardrails require confidence levels and verification steps

**Status:** Agent execution log (Issue #21) documents agent contribution; verification process in place

---

## Mitigations Summary

| Threat Category | Mitigation Type | Implementation |
|-----------------|-----------------|----------------|
| Construct validity | Operational definitions | Codebook, definitions, decision trees |
| Selection bias | Boundary conditions | Explicit scope limitations, future sampling design |
| Interpretation bias | Falsification | Propositions with falsifiers, alternative explanations |
| Agent assistance | Verification | Citation checking, confidence levels, guardrails |

---

## Threats Identified During Execution

*This section will be updated as new threats are identified during artifact production.*

| Date | Threat | Category | Mitigation |
|------|--------|----------|------------|
| 2026-01-18 | Initial threats documented | All | Per-threat mitigations above |

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-01-18 | Initial draft |


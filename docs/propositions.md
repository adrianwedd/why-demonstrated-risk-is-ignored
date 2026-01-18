# Falsifiable Propositions

**Version:** 1.0
**Issue:** #8
**Status:** Draft

---

## Purpose

This document converts the explanatory model into empirically testable claims. Each proposition:

1. References a specific structural inhibitor and pipeline stage
2. Makes a prediction that could be observed
3. Specifies how measurement would work
4. Identifies what observation would falsify the claim

These propositions are designed for future empirical testing. They are not yet validated.

---

## Proposition 1: Responsibility-Authority Separation and Decision Latency

### Statement

> **P1:** Organisations with high responsibility-authority separation in risk functions will exhibit longer time-to-decision for demonstrated risks than organisations where risk owners control remediation resources.

### Components

| Component | Description |
|-----------|-------------|
| **Mechanism** | Inhibitor #1 (Responsibility without authority). When risk owners cannot compel action, demonstrated risks stall at the Escalation stage. Decision-makers have no forcing function to respond. |
| **Pipeline stage** | Escalation → Triage → Decision |
| **Prediction** | Time-to-decision (from risk articulation to explicit decision) will be significantly longer when risk owners lack budget/priority control |
| **Measurement** | Compare matched organisation pairs: (a) risk owner has budget authority vs. (b) risk owner is advisory-only. Measure time from documented risk to decision record. |
| **Falsifier** | No significant difference in time-to-decision, OR advisory-only structures are faster (inverse correlation) |

### Boundary Conditions

This proposition may not hold when:
- Organisations are very small (< 50 people) where informal authority substitutes for formal
- External regulatory pressure creates forcing functions independent of internal authority
- Crisis conditions activate emergency decision pathways

### Operationalisation Notes

- "Responsibility-authority separation" can be scored using RACI analysis + budget control indicators from the inhibitor codebook
- "Time-to-decision" uses the operational definitions from Issue #4 (decision = explicit choice with named owner)
- "Demonstrated risk" uses criteria from Issue #3 (reproducible, severe, communicable)

---

## Proposition 2: Discovery Threat and Articulation Rates

### Statement

> **P2:** Organisations where risk discovery is treated as a career threat will show lower rates of formal risk articulation relative to informal risk awareness, compared to organisations with protected reporting mechanisms.

### Components

| Component | Description |
|-----------|-------------|
| **Mechanism** | Inhibitor #2 (Risk discovery as career threat). When surfacing risk creates personal liability, discoverers self-censor. Risks may be discussed informally but not documented. |
| **Pipeline stage** | Discovery → Articulation |
| **Prediction** | The ratio of documented risks to informally-known risks will be lower in threat environments |
| **Measurement** | Compare (a) count of formally documented risks to (b) risks surfaced in anonymous surveys or exit interviews. Calculate articulation ratio. |
| **Falsifier** | No difference in articulation ratio between threat and protected environments, OR threat environments show higher articulation (inverse) |

### Boundary Conditions

This proposition may not hold when:
- Regulatory requirements mandate documentation regardless of internal culture
- The organisation is so small that informal and formal communication are equivalent
- Anonymous reporting mechanisms are not trusted (so even anonymous data underreports)

### Operationalisation Notes

- "Career threat" environment scored using tells from inhibitor codebook (retaliation history, no safe channel, etc.)
- "Protected reporting" defined as: anonymous channel exists, is used, and no retaliation cases documented
- Articulation ratio = (formally documented risks) / (formally documented + anonymously reported unique risks)

---

## Proposition 3: Compliance Theatre and Verification Gaps

### Statement

> **P3:** Organisations exhibiting high compliance theatre will show larger gaps between documented control effectiveness and empirically tested control effectiveness, compared to organisations with mandatory adversarial testing.

### Components

| Component | Description |
|-----------|-------------|
| **Mechanism** | Inhibitor #3 (Compliance theatre). When assurance artifacts substitute for empirical validation, documented controls may not actually work. The gap between "what we say" and "what is true" widens. |
| **Pipeline stage** | Triage → Decision → Outcome (verification) |
| **Prediction** | Self-assessed control effectiveness will significantly overestimate actual effectiveness in theatre environments |
| **Measurement** | Compare (a) self-assessed/attested control scores to (b) independent adversarial testing results. Calculate gap score. |
| **Falsifier** | No significant gap between self-assessment and testing, OR adversarial testing reveals controls are better than self-assessed (inverse) |

### Boundary Conditions

This proposition may not hold when:
- Self-assessments are conducted by genuinely independent internal teams with testing capability
- Industry-specific regulations require and enforce empirical validation
- The organisation has recently failed a major external audit and is in remediation mode

**Note:** This proposition has the highest risk of confirming bias — the very organisations with theatre may resist allowing adversarial testing. Selection effects must be carefully controlled.

### Operationalisation Notes

- "Compliance theatre" scored using tells from inhibitor codebook (attestation over testing, certificate worship, etc.)
- "Adversarial testing" defined as: red team, penetration test, or equivalent by party with incentive to find problems
- Gap score = (self-assessed effectiveness %) - (adversarial-validated effectiveness %)

---

## Independence of Propositions

These three propositions are designed to be independent:

| | P1 (R-A Separation) | P2 (Discovery Threat) | P3 (Compliance Theatre) |
|---|---|---|---|
| **Inhibitor** | #1 | #2 | #3 |
| **Pipeline stage focus** | Escalation-Decision | Discovery-Articulation | Triage-Outcome |
| **Dependent variable** | Time-to-decision | Articulation ratio | Verification gap |
| **Can be true while others false** | Yes | Yes | Yes |

An organisation could exhibit one inhibitor strongly while managing others well. Each proposition tests a distinct mechanism.

---

## Expected Negative Results

We anticipate that empirical testing may reveal:

### Context Dependence
- Inhibitors may matter more in some industries (e.g., compliance theatre in heavily regulated sectors)
- Organisational size may moderate all effects (small orgs have different dynamics)
- Cultural factors may interact with structural inhibitors

### Potential Backfire Effects
- Mandatory response triggers (intervention for P1) could create gaming behaviours
- Protected reporting (intervention for P2) could be exploited for bad-faith reports
- Adversarial testing requirements (intervention for P3) could become their own theatre

### Effect Size Uncertainty
- Effects may be statistically significant but practically small
- Confounding variables (leadership quality, industry, age of org) may dominate
- Interaction effects between inhibitors may be stronger than main effects

### Value of Negative Results
Documenting where the model fails is as valuable as confirming it:
- Failures reveal boundary conditions
- Failures suggest missing variables or inhibitors
- Failures prevent overgeneralisation

---

## Summary Table

| Proposition | Inhibitor | Stage | DV | Falsifier |
|-------------|-----------|-------|----|-----------|
| P1 | Responsibility without authority | Escalation-Decision | Time-to-decision | No difference or inverse |
| P2 | Risk discovery as career threat | Discovery-Articulation | Articulation ratio | No difference or inverse |
| P3 | Compliance theatre | Triage-Outcome | Verification gap | No gap or inverse |

---

## Next Steps for Empirical Testing

To test these propositions, future work would need:

1. **Access to matched organisation pairs** with varying inhibitor profiles
2. **Operational data** on risk timelines, documentation rates, and control testing
3. **Survey instruments** to measure informal risk awareness
4. **Ethical approval** for research involving organisational participants

This is Tier C (future) work requiring field access.

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-01-16 | Initial draft |

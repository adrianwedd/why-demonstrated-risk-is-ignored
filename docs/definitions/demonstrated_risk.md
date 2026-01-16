# Operational Definition: Demonstrated Risk

**Version:** 1.0
**Issue:** #3
**Status:** Draft

---

## Purpose

This document defines what qualifies as a "demonstrated risk" for the purposes of this research. The goal is to eliminate ambiguity so that:

1. Independent reviewers classify the same case identically
2. The boundary between "demonstrated" and "hypothetical" is explicit and defensible
3. Edge cases are handled systematically, not ad hoc

---

## Core Definition

A **demonstrated risk** is a risk that satisfies all three evidence thresholds:

| Threshold | Definition | Minimum Bar |
|-----------|------------|-------------|
| **Reproducibility** | The risk can be triggered again under similar conditions | At least once successfully reproduced, OR mechanism is deterministic |
| **Severity** | The consequence if exploited is material | Impact affects confidentiality, integrity, availability, safety, or compliance |
| **Communicability** | The risk can be shown to others | Evidence exists that a third party could verify |

A risk that fails any threshold is **not demonstrated** for our purposes, regardless of how serious it might be.

---

## Evidence Thresholds (Detailed)

### 1. Reproducibility

**What it means:** The risk is not a one-time anomaly. It can be triggered again, or the mechanism is understood well enough that recurrence is predictable.

**Passes threshold:**
- Successfully reproduced at least once after initial discovery
- Mechanism is deterministic (e.g., a code path that always executes under condition X)
- Vulnerability exists in source code / configuration and has not been patched

**Fails threshold:**
- One-time occurrence with no identified mechanism
- Conditions for triggering are unknown or unreproducible
- "It happened once but we don't know why"

**Edge case — Partial reproducibility:**
If a risk can be reproduced intermittently (e.g., race condition, timing-dependent), it **passes** if:
- The triggering conditions are understood, even if not perfectly controllable
- Reproduction rate is documented (e.g., "triggers ~30% of attempts under load")

If triggering conditions are unknown and reproduction is sporadic, it **fails**.

---

### 2. Severity

**What it means:** The consequence of exploitation is material — not trivial, not theoretical.

**Severity domains:**

| Domain | Examples of material impact |
|--------|----------------------------|
| **Confidentiality** | Unauthorized access to sensitive data, PII exposure |
| **Integrity** | Data modification, unauthorized transactions, audit log tampering |
| **Availability** | Service disruption, denial of service, resource exhaustion |
| **Safety** | Physical harm, safety system bypass |
| **Compliance** | Regulatory violation, breach of legal obligation |
| **Reputation** | Material reputational damage (not mere embarrassment) |

**Passes threshold:**
- Exploitation would result in impact in at least one domain
- Impact is concrete, not speculative ("this could theoretically lead to...")

**Fails threshold:**
- Impact is purely theoretical or requires attacker omniscience
- "Low" severity by any standard framework (CVSS < 4.0, or equivalent)
- Impact is limited to attacker's own resources

**Edge case — Disputed severity:**
When stakeholders disagree on severity, document both assessments. For classification purposes, use the **higher** severity assessment if:
- The lower assessment depends on assumptions about attacker capability or motivation
- The higher assessment is supported by at least one domain expert

If disagreement is purely political (not technical), note this explicitly.

---

### 3. Communicability

**What it means:** The risk can be shown to someone else. Evidence exists that allows verification.

**Passes threshold:**
- Written proof-of-concept or reproduction steps
- Log files, screenshots, or recordings of exploitation
- Source code / configuration demonstrating the vulnerability
- Third-party verification (e.g., penetration test report)

**Fails threshold:**
- "Trust me, I saw it happen"
- Evidence is lost, deleted, or inaccessible
- Demonstration requires access that cannot be granted to verifiers

**Edge case — Sensitive evidence:**
If evidence exists but cannot be shared due to classification, legal, or privacy constraints, the risk **passes** if:
- Evidence is held by at least one party who can attest to its existence
- A summary or redacted version can be shared
- The evidence custodian is documented

If no one can verify and no attestation exists, it **fails**.

---

## Exclusions

The following are explicitly **not** demonstrated risks under this definition, even if they represent real dangers:

### 1. Speculative / Hypothetical Risks
- "This architecture pattern is generally risky"
- "An attacker could theoretically..."
- Risks identified solely through threat modeling without validation

**Why excluded:** These may warrant attention, but they are not *demonstrated* — they are *anticipated*.

### 2. Risks Requiring Chain of Unlikely Events
- Exploitation requires multiple independent low-probability events
- Attack path depends on conditions that don't currently exist
- "If X and Y and Z all happen, then..."

**Why excluded:** Compound probability makes these speculative. Each link in the chain must be demonstrated independently, or the chain as a whole fails reproducibility.

### 3. Risks Already Mitigated
- Vulnerability exists but compensating control is verified effective
- Risk was present but has been remediated
- Residual risk after mitigation is below severity threshold

**Why excluded:** We are studying risks that are *ignored*, not risks that are *addressed*. Mitigated risks are evidence of the system working.

### 4. Risks Without Organisational Standing
- Researcher has no legitimate access to the system
- Discovery was made through unauthorized means
- Risk exists in a system outside the organisation's control

**Why excluded:** Our focus is on demonstrated risks that organisations *could* act on. External or unauthorized discoveries create different dynamics (disclosure ethics, legal exposure).

---

## Decision Tree

```
                    ┌─────────────────────────────┐
                    │   Has the risk been         │
                    │   reproduced or is the      │
                    │   mechanism deterministic?  │
                    └─────────────┬───────────────┘
                                  │
                    ┌─────────────┴───────────────┐
                    │                             │
                   YES                            NO
                    │                             │
                    ▼                             ▼
        ┌───────────────────┐         ┌───────────────────┐
        │ Is the severity   │         │ NOT DEMONSTRATED  │
        │ material (CIASRC)?│         │ (fails            │
        └─────────┬─────────┘         │ reproducibility)  │
                  │                   └───────────────────┘
        ┌─────────┴─────────┐
        │                   │
       YES                  NO
        │                   │
        ▼                   ▼
┌───────────────────┐  ┌───────────────────┐
│ Does communicable │  │ NOT DEMONSTRATED  │
│ evidence exist?   │  │ (fails severity)  │
└─────────┬─────────┘  └───────────────────┘
          │
┌─────────┴─────────┐
│                   │
YES                 NO
│                   │
▼                   ▼
┌───────────────────┐  ┌───────────────────┐
│ Is it excluded?   │  │ NOT DEMONSTRATED  │
│ (speculative,     │  │ (fails            │
│ mitigated, etc.)  │  │ communicability)  │
└─────────┬─────────┘  └───────────────────┘
          │
┌─────────┴─────────┐
│                   │
NO                 YES
│                   │
▼                   ▼
┌───────────────────┐  ┌───────────────────┐
│   DEMONSTRATED    │  │ NOT DEMONSTRATED  │
│       RISK        │  │ (excluded)        │
└───────────────────┘  └───────────────────┘
```

---

## Classification Examples

| Case | Reproducible? | Severe? | Communicable? | Excluded? | Classification |
|------|---------------|---------|---------------|-----------|----------------|
| SQL injection with working PoC | Yes | Yes (integrity) | Yes (PoC exists) | No | **Demonstrated** |
| "I think there's a race condition" | No | Unknown | No | — | Not demonstrated |
| Pen test finding, patched last week | Yes | Yes | Yes | Yes (mitigated) | Not demonstrated |
| CVSS 9.0 vuln, no access to verify | Yes | Yes | No | — | Not demonstrated |
| Intermittent crash under load, logs available | Yes (partial) | Yes (availability) | Yes | No | **Demonstrated** |
| Theoretical attack requiring nation-state | No (speculative) | Yes | No | Yes (speculative) | Not demonstrated |

---

## Usage Notes

1. **Classification is binary.** A risk is demonstrated or it is not. There is no "partially demonstrated."

2. **Classification is point-in-time.** A risk that was not demonstrated may become demonstrated when evidence improves. A demonstrated risk may become "not demonstrated" if it is mitigated.

3. **Disagreement protocol.** If two reviewers classify a case differently, identify which threshold is disputed. Resolve by examining evidence against the threshold definition, not by averaging opinions.

4. **This definition is narrow by design.** Many important risks will not qualify as "demonstrated." That is intentional — the research question is specifically about risks that *have* been demonstrated and are still ignored.

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-01-16 | Initial draft |

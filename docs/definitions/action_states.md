# Operational Definition: Action States

**Version:** 1.0
**Issue:** #4
**Status:** Draft

---

## Purpose

This document defines the possible response states for a demonstrated risk. The goal is to distinguish:

1. **Action** — the organisation made an explicit decision and acted on it
2. **Non-action** — the organisation did not decide, or decided implicitly by inaction

This distinction matters because "we decided not to fix this" is fundamentally different from "we never decided." The former is governance; the latter is drift.

---

## The Core Distinction

```
┌─────────────────────────────────────────────────────────────────────┐
│                         DEMONSTRATED RISK                           │
└─────────────────────────────────┬───────────────────────────────────┘
                                  │
                    ┌─────────────┴─────────────┐
                    │                           │
              EXPLICIT DECISION            NO DECISION
              (Action States)              (Non-Action States)
                    │                           │
         ┌─────────┼─────────┐        ┌────────┼────────┐
         │         │         │        │        │        │
    Remediated  Compensated  Accepted  Ignored  Deferred  Committee
                                               (no owner)   Loop
```

**Key insight:** The presence of an *explicit, documented decision* with *named accountability* separates action from non-action — not whether the risk was fixed.

---

## Action States

These states represent explicit organisational decisions. Even if the risk remains, the organisation has *acted* by making and documenting a choice.

### 1. Remediated

**Definition:** The root cause has been addressed. The risk no longer exists or has been reduced below the severity threshold.

**Observable indicators:**
| Indicator | What to look for |
|-----------|------------------|
| Fix deployed | Code change, configuration update, or architectural change in production |
| Verification evidence | Test results, scan output, or re-assessment confirming remediation |
| Closure documentation | Ticket/issue marked resolved with remediation details |
| Timeline | Fix shipped within defined SLA or agreed timeline |

**Distinguishing feature:** The vulnerability or exposure no longer exists in the system.

---

### 2. Compensating Control

**Definition:** The root cause remains, but an alternative measure reduces the risk to an acceptable level. The compensating control is documented and monitored.

**Observable indicators:**
| Indicator | What to look for |
|-----------|------------------|
| Control documentation | Written description of the compensating control |
| Residual risk assessment | Analysis showing risk reduction is sufficient |
| Monitoring evidence | Logs, alerts, or dashboards tracking control effectiveness |
| Control owner | Named individual responsible for maintaining the control |
| Review schedule | Defined timeline for reassessing whether root-cause fix is feasible |

**Distinguishing feature:** The risk is managed, not eliminated. The compensating control could fail, and this is acknowledged.

**Example:** A vulnerable legacy system cannot be patched, but network segmentation limits exposure and access logging detects exploitation attempts.

---

### 3. Explicit Acceptance

**Definition:** The organisation has decided to accept the risk without remediation or compensating control. This decision is documented, owned, and time-bound.

**Observable indicators:**
| Indicator | What to look for |
|-----------|------------------|
| Acceptance record | Formal documentation stating the risk is accepted |
| Named owner | Senior individual (typically executive) who approved acceptance |
| Signature/approval | Evidence the owner explicitly approved (not just "didn't object") |
| Expiry date | Defined date when acceptance must be reviewed |
| Review trigger | Conditions that would invalidate the acceptance (e.g., "if exposure increases") |
| Rationale | Written justification for why acceptance is appropriate |

**Distinguishing feature:** Someone with authority has put their name on "we accept this risk" with a defined expiry.

**What this is NOT:**
- "No one objected" → that's Ignored
- "We'll revisit next quarter" with no owner → that's Deferred without accountability
- "The committee agreed to accept" with no individual owner → that's Committee loop

---

## Non-Action States

These states represent the *absence* of explicit decision. The risk persists not because the organisation chose to accept it, but because no one with authority made a choice.

### 4. Ignored

**Definition:** The risk is known but has no owner, no timeline, and no documentation of any decision.

**Observable indicators:**
| Indicator | What to look for |
|-----------|------------------|
| No ticket/record | Risk was raised but not formally tracked |
| No owner | No individual is accountable for the risk |
| No timeline | No commitment to address, review, or accept |
| No decision record | No documentation of any choice made |
| Evidence of awareness | The risk *was* communicated (distinguishes from "unknown") |

**Distinguishing feature:** The organisation knows about the risk but has made no formal response. The risk exists in a documentation void.

**Common patterns:**
- Raised in a meeting, never actioned
- Email sent, no response
- Mentioned in a report that was filed and forgotten
- "We'll look into it" with no follow-up

---

### 5. Deferred Without Accountability

**Definition:** The risk has been acknowledged and nominally scheduled for future attention, but there is no committed owner, no firm timeline, and no mechanism to ensure follow-through.

**Observable indicators:**
| Indicator | What to look for |
|-----------|------------------|
| Vague timeline | "Next quarter," "on the roadmap," "when resources allow" |
| No committed owner | Team or function named, but no individual accountable |
| No review date | No defined point at which deferral is reassessed |
| Repeated deferral | Risk has been "deferred" multiple times |
| No escalation path | No defined trigger for escalating if deferral persists |

**Distinguishing feature:** The organisation has created the *appearance* of a decision ("we're deferring this") without the *substance* of accountability.

**How to distinguish from Explicit Acceptance:**

| Explicit Acceptance | Deferred Without Accountability |
|---------------------|--------------------------------|
| Named individual owner | Team or role, no individual |
| Defined expiry date | Vague or rolling timeline |
| Signed/approved | Implicit agreement or silence |
| Rationale documented | "Other priorities" or no reason |

---

### 6. Committee Loop

**Definition:** The risk has been referred to a group (committee, board, working group) that lacks decision authority, lacks quorum, or perpetually defers to another body.

**Observable indicators:**
| Indicator | What to look for |
|-----------|------------------|
| Referral chain | Risk has been referred between multiple groups |
| No decision authority | The committee can only recommend, not decide |
| Quorum issues | Decisions deferred due to missing stakeholders |
| "Further analysis needed" | Repeated requests for more information without progress |
| Circular referral | Risk bounces between groups (A → B → A) |
| No individual accountability | Group is accountable, but no person is |

**Distinguishing feature:** The organisation has created process activity without producing a decision. Motion without progress.

**Common patterns:**
- "The architecture review board needs to assess this"
- "We need input from legal/security/compliance before deciding"
- "This should go to the steering committee"
- "The working group will form a recommendation"

---

## Summary Classification Table

| State | Decision Made? | Risk Persists? | Owner Named? | Artifacts |
|-------|---------------|----------------|--------------|-----------|
| **Remediated** | Yes | No | N/A (fixed) | Fix deployed, verification evidence |
| **Compensating Control** | Yes | Yes (managed) | Yes | Control docs, monitoring, review schedule |
| **Explicit Acceptance** | Yes | Yes | Yes (executive) | Acceptance record, signature, expiry |
| **Ignored** | No | Yes | No | None (that's the problem) |
| **Deferred w/o Accountability** | Pseudo-decision | Yes | No (team at best) | Vague backlog entry |
| **Committee Loop** | No | Yes | No (group) | Meeting minutes, referral emails |

---

## Definition Box (for paper/presentation)

> **Action** occurs when an organisation makes an explicit, documented decision about a demonstrated risk — whether that decision is to remediate, compensate, or formally accept. Action requires a named owner and creates artifacts.
>
> **Non-action** occurs when no explicit decision is made. The risk persists not by choice but by default. Non-action states include outright ignoring, deferral without accountability, and referral to bodies without decision authority. These states are characterised by the absence of individual ownership and decision documentation.
>
> The critical distinction is not whether the risk is fixed, but whether anyone with authority made a choice they are willing to own.

---

## Usage Notes

1. **States are mutually exclusive.** A risk is in exactly one state at any given time.

2. **States can transition.** An Ignored risk can become Explicitly Accepted if someone eventually owns it. A Compensating Control can become Remediated if root cause is later fixed.

3. **Non-action states are failure modes.** This framework does not judge whether accepting a risk is appropriate — that depends on context. It *does* identify when no decision was made at all.

4. **Artifacts are the evidence.** When classifying, look for documentation. The presence or absence of specific artifacts is more reliable than stakeholder claims about what was "decided."

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-01-16 | Initial draft |

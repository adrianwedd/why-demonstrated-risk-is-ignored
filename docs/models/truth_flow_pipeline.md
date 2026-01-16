# Truth Flow Pipeline Model

**Version:** 1.0
**Issue:** #5
**Status:** Draft

---

## Purpose

This document models how risk information moves through organisations — from initial discovery to final outcome. The pipeline identifies where risk "stalls" (stops moving forward) or "disappears" (exits the pipeline without resolution).

Understanding the pipeline allows us to:
1. Identify which stage a demonstrated risk is stuck at
2. Map structural inhibitors to specific pipeline stages
3. Design interventions that target specific failure points

---

## Pipeline Overview

```
┌──────────┐    ┌─────────────┐    ┌───────────┐    ┌────────┐    ┌──────────┐    ┌─────────┐
│          │    │             │    │           │    │        │    │          │    │         │
│ DISCOVERY├───►│ ARTICULATION├───►│ ESCALATION├───►│ TRIAGE ├───►│ DECISION ├───►│ OUTCOME │
│          │    │             │    │           │    │        │    │          │    │         │
└──────────┘    └─────────────┘    └───────────┘    └────────┘    └──────────┘    └─────────┘
     │                │                  │               │              │              │
     ▼                ▼                  ▼               ▼              ▼              ▼
  Someone          Risk is           Risk reaches    Risk is        Explicit       Action
  becomes          documented        someone with    compared       choice         taken,
  aware            in shareable      authority to    against        is made        results
                   form              act             priorities                    observed
```

**Diagram:** See `/assets/pipeline.svg` for visual representation.

---

## Stage Definitions

### Stage 1: Discovery

**Definition:** The risk becomes known to at least one person in the organisation.

**Entry condition:** Someone observes, identifies, or is informed of the risk.

**Exit condition:** The discoverer acknowledges the risk exists (even if only to themselves).

| Aspect | Description |
|--------|-------------|
| **Stall patterns** | Discoverer doesn't recognise significance; normalisation of deviance; "that's just how it works" |
| **Failure modes** | Discoverer leaves organisation; discoverer forgets; information lost |
| **Observable artifacts** | Personal notes, memory, informal conversation |
| **Inhibitor mapping** | *Risk discovery as career threat* — discoverer may choose not to proceed |

**Key question:** Does the discoverer recognise this as a risk worth pursuing?

---

### Stage 2: Articulation

**Definition:** The risk is documented in a form that can be communicated to others.

**Entry condition:** Discoverer decides to document or share the risk.

**Exit condition:** A communicable artifact exists (written, recorded, demonstrated).

| Aspect | Description |
|--------|-------------|
| **Stall patterns** | Lack of time/skill to document; unclear severity; "I'll write it up later" |
| **Failure modes** | Documentation is too technical; documentation is too vague; wrong audience targeted |
| **Observable artifacts** | Bug report, email, memo, presentation, proof-of-concept |
| **Inhibitor mapping** | *Risk discovery as career threat* — articulation creates a record that can be traced back |

**Key question:** Is the risk documented in a way that someone else can understand and verify?

---

### Stage 3: Escalation

**Definition:** The risk reaches someone with authority to act on it.

**Entry condition:** Articulated risk is transmitted to decision-maker(s).

**Exit condition:** At least one person with remediation authority is aware of the documented risk.

| Aspect | Description |
|--------|-------------|
| **Stall patterns** | No clear escalation path; gatekeepers filter it out; "not my area"; wrong channel used |
| **Failure modes** | Escalation goes to wrong person; message is diluted through chain; active suppression |
| **Observable artifacts** | Escalation email, ticket assignment, meeting agenda item, briefing document |
| **Inhibitor mapping** | *Responsibility without authority* — discoverer can escalate but cannot compel attention; *Accountability diffusion* — unclear who has authority |

**Key question:** Has someone with the power to act actually received and acknowledged this risk?

---

### Stage 4: Triage

**Definition:** The risk is compared against other priorities and resources.

**Entry condition:** Decision-maker has received the risk and is considering it.

**Exit condition:** Risk has been ranked/prioritised relative to other demands.

| Aspect | Description |
|--------|-------------|
| **Stall patterns** | Competing priorities always win; risk is perpetually "next quarter"; analysis paralysis |
| **Failure modes** | Risk is deprioritised and never resurfaces; triage process has no accountability |
| **Observable artifacts** | Backlog ranking, risk register entry, prioritisation meeting minutes |
| **Inhibitor mapping** | *Compliance theatre* — risk doesn't fit existing categories; *Accountability diffusion* — triage is distributed across multiple parties with no clear owner |

**Key question:** Has the risk been explicitly compared to alternatives, or is it sitting in an unordered queue?

---

### Stage 5: Decision

**Definition:** An explicit choice is made about how to respond (remediate, compensate, accept, or reject).

**Entry condition:** Triage has surfaced this risk for decision.

**Exit condition:** A documented decision exists with named ownership.

| Aspect | Description |
|--------|-------------|
| **Stall patterns** | Decision deferred; committee loop; "we need more information"; no one willing to own |
| **Failure modes** | Implicit rejection (no decision = no action); decision made but not documented |
| **Observable artifacts** | Decision record, approval signature, risk acceptance form, ticket status change |
| **Inhibitor mapping** | *Compliance theatre* — checking boxes substitutes for deciding; *Accountability diffusion* — group decision with no individual owner; *Risk discovery as career threat* — deciding creates liability |

**Key question:** Has someone with authority made an explicit, documented choice?

---

### Stage 6: Outcome

**Definition:** The decision is implemented and results are observed.

**Entry condition:** Decision has been made.

**Exit condition:** Action state is achieved (Remediated, Compensating Control, Explicit Acceptance) and verified.

| Aspect | Description |
|--------|-------------|
| **Stall patterns** | Implementation delayed; verification skipped; "we shipped the fix" without confirmation |
| **Failure modes** | Fix doesn't work; control is not maintained; acceptance expires without review |
| **Observable artifacts** | Deployment records, test results, control effectiveness metrics, acceptance review |
| **Inhibitor mapping** | *Responsibility without authority* — implementer can't deploy; *Compliance theatre* — verification is checkbox, not empirical |

**Key question:** Has the decision been implemented and verified effective?

---

## Inhibitor-to-Stage Mapping

Each of the four structural inhibitors from the essay tends to block risk at specific pipeline stages:

| Inhibitor | Primary Stages Affected | Mechanism |
|-----------|------------------------|-----------|
| **Responsibility without authority** | Escalation, Outcome | Discoverer cannot compel attention; implementer cannot deploy |
| **Risk discovery as career threat** | Discovery, Articulation, Decision | Discoverer self-censors; articulation creates traceable record; decision creates liability |
| **Compliance theatre** | Triage, Decision, Outcome | Risk doesn't fit categories; boxes checked without substance; verification is symbolic |
| **Accountability diffusion** | Escalation, Triage, Decision | Unclear who has authority; triage distributed; group decisions without individual owner |

---

## Pipeline Exit Points

Risk can exit the pipeline at any stage without reaching Outcome. These exits represent failure:

| Exit Type | Stage | What Happens |
|-----------|-------|--------------|
| **Forgotten** | Discovery | Discoverer doesn't pursue; information lost |
| **Unarticulated** | Articulation | Risk known but never documented |
| **Blocked** | Escalation | Risk documented but never reaches authority |
| **Deprioritised** | Triage | Risk acknowledged but perpetually outranked |
| **Undecided** | Decision | Risk triaged but no explicit decision made |
| **Unimplemented** | Outcome | Decision made but not executed or verified |

---

## Using This Model

### For Classification

When analysing a demonstrated risk that was ignored, identify:
1. Which stage did the risk reach?
2. Where did it stall or exit?
3. Which inhibitor best explains the failure?

### For Intervention Design

When designing governance improvements, identify:
1. Which stage is most commonly failing?
2. Which inhibitor is operating at that stage?
3. What artifact or process change would address the specific failure mode?

### For Cross-Reference

All subsequent artifacts in this research should reference:
- The pipeline stage(s) they address
- The inhibitor(s) they counteract

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-01-16 | Initial draft |

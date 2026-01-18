# Metrics Specification

**Version:** 1.0
**Issue:** #15
**Status:** Draft

---

## Purpose

This document defines how to measure whether governance interventions work. Each metric is:

1. **Precisely defined** with clear operational criteria
2. **Computable** from organisational artifacts (no privileged system access required)
3. **Gaming-aware** with acknowledged manipulation risks

---

## Outcome Metrics

These measure whether the ultimate goals are achieved.

### O1: Time-to-Decision

**Definition:** The elapsed time from when a demonstrated risk is formally documented to when an explicit decision is recorded.

| Attribute | Specification |
|-----------|---------------|
| **Start event** | Risk documented in official system (risk register, ticket, memo) |
| **End event** | Decision record exists (accept, mitigate, transfer, reject) |
| **Unit** | Calendar days |
| **Calculation** | End date - Start date |

**Data Sources:**
- Risk register timestamps
- Ticket system creation/close dates
- Meeting minutes with decision records
- Email threads with documented decisions

**Tiered Targets:**
| Risk Tier | Target | Concerning | Critical |
|-----------|--------|------------|----------|
| Critical | < 7 days | 14 days | > 30 days |
| High | < 14 days | 30 days | > 60 days |
| Medium | < 30 days | 60 days | > 90 days |
| Low | < 90 days | 180 days | > 365 days |

**Gaming Risks:**

| Risk | Indicator | Mitigation |
|------|-----------|------------|
| Backdating decisions | Decisions recorded retroactively | Require timestamp verification; audit trail |
| Premature closure | Risk closed without real decision | Validate decision includes required elements |
| Classification manipulation | Risks downgraded to avoid targets | Independent classification review |
| Start date manipulation | Documentation delayed until decision likely | Track informal vs. formal documentation |

**Limitations:**
- Does not measure decision quality, only speed
- Requires consistent documentation practices
- May not capture risks that are never formally documented

---

### O2: Time-to-Remediation

**Definition:** The elapsed time from when a decision to mitigate is recorded to when remediation is verified complete.

| Attribute | Specification |
|-----------|---------------|
| **Start event** | Decision record specifies "mitigate" with plan |
| **End event** | Remediation verified (retest, evidence, sign-off) |
| **Unit** | Calendar days |
| **Calculation** | Verification date - Decision date |

**Data Sources:**
- Decision records with mitigation plans
- Ticket/project closure dates
- Retest reports
- Evidence of implementation

**Tiered Targets:**
| Risk Tier | Target | Concerning | Critical |
|-----------|--------|------------|----------|
| Critical | < 30 days | 60 days | > 90 days |
| High | < 60 days | 120 days | > 180 days |
| Medium | < 90 days | 180 days | > 365 days |
| Low | < 180 days | 365 days | > 2 years |

**Gaming Risks:**

| Risk | Indicator | Mitigation |
|------|-----------|------------|
| False verification | Closure without real fix | Independent verification; retest |
| Scope reduction | Fix is partial, not complete | Clear remediation criteria in plan |
| Compensating control claims | Alternative control claimed without validation | Require compensating control testing |

**Limitations:**
- Requires clear remediation plans (may not exist for all decisions)
- Verification quality varies
- Does not measure fix effectiveness, only completion

---

### O3: Explicit Risk Acceptance Rate

**Definition:** The percentage of open risks that have an explicit acceptance decision with a named owner and review date.

| Attribute | Specification |
|-----------|---------------|
| **Numerator** | Risks with acceptance record containing: named owner + risk statement + justification + review date |
| **Denominator** | All risks not yet mitigated or transferred |
| **Unit** | Percentage |
| **Calculation** | (Explicit acceptances / All open risks) × 100 |

**Data Sources:**
- Risk register with acceptance fields
- Acceptance decision records
- Risk owner assignments

**Targets:**
| Maturity Level | Rate |
|----------------|------|
| Basic | > 50% |
| Intermediate | > 80% |
| Advanced | > 95% |

**Gaming Risks:**

| Risk | Indicator | Mitigation |
|------|-----------|------------|
| Rubber-stamp acceptance | All risks accepted by same person | Monitor acceptance concentration |
| Pro forma acceptance | Acceptance without genuine review | Require risk statement in acceptor's words |
| Perpetual acceptance | Acceptances never renewed | Track acceptance age; require renewal |

**Limitations:**
- Does not measure acceptance quality
- Does not verify acceptor actually understands the risk
- May incentivise acceptance over mitigation

---

### O4: Risk Recurrence Rate

**Definition:** The percentage of closed/accepted risks that reappear in subsequent cycles.

| Attribute | Specification |
|-----------|---------------|
| **Numerator** | Previously closed/accepted risks that reappear as new findings |
| **Denominator** | All risks closed/accepted in prior period |
| **Unit** | Percentage |
| **Calculation** | (Recurring risks / Prior period closures) × 100 |

**Data Sources:**
- Risk register history
- Audit findings over multiple cycles
- Security assessment repeat findings

**Targets:**
| Maturity Level | Rate |
|----------------|------|
| Advanced | < 10% |
| Intermediate | < 25% |
| Basic | < 50% |

**Gaming Risks:**

| Risk | Indicator | Mitigation |
|------|-----------|------------|
| Relabeling | Same risk coded as different issue | Fuzzy matching on risk descriptions |
| Scope narrowing | Recurring scope defined very narrowly | Consistent scoping across cycles |
| Assessment avoidance | Areas with recurring risks not reassessed | Mandatory reassessment coverage |

**Limitations:**
- Requires multiple assessment cycles
- Definition of "same risk" is subjective
- Some recurrence may be acceptable (external environment changed)

---

## Process Metrics

These measure whether governance processes are functioning.

### P1: Escalation Completion Rate

**Definition:** The percentage of escalated risks that reach the decision stage (vs. stalling in escalation).

| Attribute | Specification |
|-----------|---------------|
| **Numerator** | Escalated risks with decision record |
| **Denominator** | All risks escalated in period |
| **Unit** | Percentage |
| **Calculation** | (Escalations with decisions / All escalations) × 100 |

**Data Sources:**
- Escalation records (emails, tickets, meeting requests)
- Decision records
- Risk register status

**Targets:**
| Maturity Level | Rate |
|----------------|------|
| Advanced | > 95% |
| Intermediate | > 80% |
| Basic | > 60% |

**Gaming Risks:**

| Risk | Indicator | Mitigation |
|------|-----------|------------|
| False escalation | Escalation recorded but not actually sent | Verify escalation receipt |
| Premature decision | Trivial decision to close escalation | Validate decision quality |
| Escalation avoidance | Risks not escalated to avoid tracking | Audit discovery-to-escalation pipeline |

---

### P2: Evidence Quality Score

**Definition:** The completeness of risk documentation against required elements.

| Attribute | Specification |
|-----------|---------------|
| **Elements** | Reproducibility evidence, severity assessment, communication record |
| **Scoring** | 1 point per element present (0-3) |
| **Unit** | Average score across risks |
| **Calculation** | Sum(element scores) / (Number of risks × 3) × 100 |

**Required Elements:**
| Element | Definition | Score Criteria |
|---------|------------|----------------|
| Reproducibility | Evidence risk can be reproduced | Steps to reproduce documented |
| Severity | Impact assessment | Business impact quantified or categorised |
| Communication | Record of articulation | Documented transmission to decision-maker |

**Data Sources:**
- Risk register fields
- Supporting documentation
- Communication records

**Targets:**
| Maturity Level | Score |
|----------------|-------|
| Advanced | > 90% |
| Intermediate | > 70% |
| Basic | > 50% |

**Gaming Risks:**

| Risk | Indicator | Mitigation |
|------|-----------|------------|
| Template filling | Boilerplate content | Review for specificity |
| Quality vs. completion | High score, low actual quality | Sample audit of documentation |

---

### P3: Psychological Safety Proxy

**Definition:** Indirect indicators of whether risk reporting is perceived as safe.

Since psychological safety cannot be directly measured from artifacts, this metric uses proxy indicators.

**Proxy Indicators:**

| Indicator | What it measures | Data source |
|-----------|------------------|-------------|
| Named vs. anonymous report ratio | Trust in protection | Report channel metadata |
| Risk function turnover | Role attractiveness | HR data |
| Escalation per person | Individual reporting comfort | Risk register reporter field |
| Near-miss reporting rate | Willingness to report lower-severity | Near-miss logs |

**Composite Score:**
| Component | Weight | Scoring |
|-----------|--------|---------|
| Named report % | 30% | Higher = better |
| Risk function turnover | 25% | Lower = better |
| Escalation distribution (Gini) | 25% | Lower concentration = better |
| Near-miss rate | 20% | Higher = better |

**Gaming Risks:**

| Risk | Indicator | Mitigation |
|------|-----------|------------|
| Forced naming | Policy requires named reports | Check for policy change effects |
| Turnover gaming | Moving rather than terminating | Track all departures |
| Artificial distribution | Rotating reporter assignment | Verify organic reporting |

**Limitations:**
- Proxies are indirect; may not reflect actual psychological safety
- Causality unclear (are metrics causes or effects?)
- Requires multiple data sources

---

## Data Collection Requirements

### Minimum Data for Basic Assessment

| Metric | Required Data | Effort Level |
|--------|--------------|--------------|
| Time-to-decision | Risk register with timestamps | Low |
| Time-to-remediation | Remediation tracking | Medium |
| Acceptance rate | Acceptance records | Low |
| Recurrence rate | Multi-cycle risk data | Medium |
| Escalation completion | Escalation tracking | Medium |

### Additional Data for Advanced Assessment

| Metric | Required Data | Effort Level |
|--------|--------------|--------------|
| Evidence quality | Documentation review | High |
| Psychological safety proxy | Multiple systems (HR, reporting channels) | High |

### External Assessment (No Internal Access)

When assessing from outside the organisation:

| Metric | External Proxy |
|--------|----------------|
| Time-to-decision | Public disclosure timelines (for security issues) |
| Acceptance rate | Incident reports mentioning "known issues" |
| Recurrence rate | Repeat audit findings (if public) |
| Escalation health | Whistleblower complaint rates (public records) |

---

## Metric Dashboard

For governance forums, present metrics in dashboard format:

```
┌──────────────────────────────────────────────────────────────┐
│ RISK GOVERNANCE HEALTH DASHBOARD                    [Period] │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  OUTCOME METRICS                                             │
│  ┌─────────────────┬─────────┬─────────┬─────────┐          │
│  │ Metric          │ Current │ Target  │ Trend   │          │
│  ├─────────────────┼─────────┼─────────┼─────────┤          │
│  │ Time-to-Decision│ XX days │ YY days │ ↑↓→     │          │
│  │ Time-to-Remediate│ XX days│ YY days │ ↑↓→     │          │
│  │ Acceptance Rate │ XX%     │ YY%     │ ↑↓→     │          │
│  │ Recurrence Rate │ XX%     │ YY%     │ ↑↓→     │          │
│  └─────────────────┴─────────┴─────────┴─────────┘          │
│                                                              │
│  PROCESS METRICS                                             │
│  ┌─────────────────┬─────────┬─────────┬─────────┐          │
│  │ Escalation Compl│ XX%     │ YY%     │ ↑↓→     │          │
│  │ Evidence Quality│ X.X/3   │ Y.Y/3   │ ↑↓→     │          │
│  │ Psych Safety    │ XX%     │ YY%     │ ↑↓→     │          │
│  └─────────────────┴─────────┴─────────┴─────────┘          │
│                                                              │
│  ALERTS                                                      │
│  • [n] Critical risks > 30 days without decision            │
│  • [n] Acceptances expiring in next 30 days                 │
│  • [n] Escalations pending > 14 days                        │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-01-19 | Initial draft |


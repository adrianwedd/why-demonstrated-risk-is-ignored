# Empirical Validation vs Compliance Theatre

**Version:** 1.0
**Issue:** #14
**Status:** Draft

---

## Purpose

This document explicitly distinguishes real testing from theatre. It provides:

1. A minimum bar for what counts as "empirical validation"
2. An explicit list of what does NOT count
3. A decision tree for "is this validation or theatre?"
4. Self-assessment guidance for organisations

---

## Core Distinction

| Empirical Validation | Compliance Theatre |
|---------------------|-------------------|
| Tests whether controls actually work | Documents that controls exist |
| Produces evidence of effectiveness | Produces artifacts of process |
| Can discover failures | Cannot discover failures (by design) |
| Incentivises finding problems | Incentivises finding compliance |
| Changes behaviour based on results | Changes documentation based on results |

**The test:** Would this activity discover that a control is ineffective?

- If YES → Empirical validation
- If NO → Compliance theatre

---

## Minimum Bar for Empirical Validation

To qualify as empirical validation, an activity must meet ALL of the following:

### 1. Adversarial Intent

The testing must be designed to find problems, not confirm compliance.

| Valid | Invalid |
|-------|---------|
| Tester is incentivised to find issues | Tester is incentivised to pass |
| Test scope includes likely failure modes | Test scope designed around known strengths |
| Tester has independence from control owner | Control owner conducts own validation |
| Results include findings, not just status | Results are pass/fail with no detail |

### 2. Technical Capability

The testing must be technically capable of discovering failures.

| Valid | Invalid |
|-------|---------|
| Automated testing against real systems | Checklist review of documentation |
| Red team with realistic TTPs | Tabletop exercise with hypotheticals |
| Penetration testing with exploitation | Vulnerability scanning without verification |
| Configuration review with evidence | Self-attestation of configuration |

### 3. Realistic Conditions

The testing must reflect real-world conditions.

| Valid | Invalid |
|-------|---------|
| Testing in production or production-equivalent | Testing in isolated lab environment only |
| Unannounced or realistic timing | Pre-scheduled with defensive preparation |
| Testing includes likely attack paths | Testing excludes "out of scope" attack paths |
| Social engineering included where relevant | Social engineering explicitly excluded |

### 4. Actionable Output

The testing must produce results that drive action.

| Valid | Invalid |
|-------|---------|
| Specific findings with remediation guidance | Pass/fail status only |
| Results shared with decision-makers | Results stay in security team |
| Findings tracked to remediation | Findings filed and forgotten |
| Retest after remediation | No verification of fix effectiveness |

---

## What Does NOT Count as Empirical Validation

The following activities, while potentially valuable, do NOT constitute empirical validation of control effectiveness:

### Documentation Review

| Activity | Why It Doesn't Count |
|----------|---------------------|
| Policy review | Policy existence ≠ policy implementation |
| Procedure documentation | Documented procedure ≠ followed procedure |
| Architecture diagram review | Documented architecture ≠ actual architecture |
| Risk register review | Documented risk ≠ managed risk |

**The gap:** Documentation describes intent; empirical validation tests reality.

### Self-Attestation

| Activity | Why It Doesn't Count |
|----------|---------------------|
| Management certification | "I certify this control works" without evidence |
| Control owner sign-off | Owner has incentive to report compliance |
| Questionnaire completion | Answers describe belief, not fact |
| Self-assessment survey | Assessing own effectiveness lacks independence |

**The gap:** Self-attestation measures belief; empirical validation measures reality.

### Checklist Completion

| Activity | Why It Doesn't Count |
|----------|---------------------|
| Compliance checklist | Checking boxes ≠ verifying effectiveness |
| Control matrix completion | Marking "implemented" ≠ testing "works" |
| Evidence collection (documents only) | Documents show existence, not effectiveness |
| Audit preparation binder | Passing audit ≠ being secure |

**The gap:** Checklists verify presence; empirical validation verifies function.

### Training Completion

| Activity | Why It Doesn't Count |
|----------|---------------------|
| Security awareness training | Completing training ≠ behaviour change |
| Certification achievement | Passing exam ≠ applying knowledge |
| Training records | Records show exposure, not competence |
| 100% completion metrics | Completion rate ≠ effectiveness rate |

**The gap:** Training measures exposure; empirical validation measures behaviour.

### External Certification (Alone)

| Activity | Why It Doesn't Count |
|----------|---------------------|
| ISO 27001 certification | Certification verifies process, not effectiveness |
| SOC 2 report | Report verifies controls exist, not that they work |
| PCI-DSS compliance | Compliance is point-in-time, not continuous |
| FedRAMP authorisation | Authorisation is about risk acceptance, not absence |

**The gap:** Certifications verify you have controls; empirical validation verifies controls work.

---

## Decision Tree: Is This Validation or Theatre?

```
START: You have an assurance activity

Q1: Is the activity designed to find problems?
    │
    ├── NO → THEATRE (redesign with adversarial intent)
    │
    └── YES ↓

Q2: Could this activity discover that a control is ineffective?
    │
    ├── NO → THEATRE (add technical testing capability)
    │
    └── YES ↓

Q3: Is the tester independent from the control owner?
    │
    ├── NO → THEATRE RISK (add independence or external testing)
    │
    └── YES ↓

Q4: Are test conditions realistic?
    │
    ├── NO → PARTIAL THEATRE (expand scope or conditions)
    │
    └── YES ↓

Q5: Do results drive action (findings → remediation)?
    │
    ├── NO → THEATRE (results without action is documentation)
    │
    └── YES ↓

Q6: Is remediation verified (retest)?
    │
    ├── NO → INCOMPLETE VALIDATION (add retest)
    │
    └── YES → EMPIRICAL VALIDATION
```

---

## Validation Levels

Not all validation is equal. This hierarchy ranks validation approaches by rigour:

| Level | Description | Example | Assurance Strength |
|-------|-------------|---------|-------------------|
| L5 | Adversarial testing by independent external party | Red team engagement | Highest |
| L4 | Adversarial testing by independent internal party | Internal red team | High |
| L3 | Technical testing by external party | Penetration test | Medium-High |
| L2 | Technical testing by internal party | Internal security testing | Medium |
| L1 | Configuration review with evidence | Automated compliance scanning | Low-Medium |
| L0 | Attestation and documentation only | Self-assessment, checklists | Low |

**Minimum acceptable levels by control criticality:**

| Control Criticality | Minimum Validation Level |
|--------------------|-------------------------|
| Critical | L4-L5 (adversarial) |
| High | L3-L4 (external or independent internal) |
| Medium | L2-L3 (technical testing) |
| Low | L1 (evidence-based review) acceptable |

---

## Self-Assessment: Is Your Organisation Doing Theatre?

### Red Flags

Score each item: 0 = Not true, 1 = Sometimes true, 2 = Often true

| # | Red Flag |
|---|----------|
| 1 | Security assessments consistently find no significant issues |
| 2 | Compliance scores are high but security incidents still occur |
| 3 | Assessment scope is designed around what you know works |
| 4 | Findings from assessments don't result in funded remediation |
| 5 | External certifications are maintained without substantive change |
| 6 | Assessment activities are scheduled, announced, and prepared for |
| 7 | Control owners conduct their own effectiveness assessments |
| 8 | "Compensating controls" are accepted without validation |
| 9 | Assessment results are primarily used for reporting, not action |
| 10 | Demonstrated vulnerabilities coexist with compliance certifications |

**Scoring:**
- 0-5: Low theatre risk
- 6-12: Moderate theatre risk — review assurance approach
- 13-20: High theatre risk — likely significant validation gaps

### Green Flags

These indicate genuine validation:

| # | Green Flag |
|---|------------|
| 1 | Assessments regularly find significant issues |
| 2 | Findings result in funded, tracked remediation |
| 3 | Retesting verifies remediation effectiveness |
| 4 | Assessment scope is driven by threat model, not convenience |
| 5 | External testers are incentivised to find problems |
| 6 | Unannounced testing occurs |
| 7 | Assessment results change behaviour, not just documents |
| 8 | Control failures are reported to executive leadership |
| 9 | Demonstrated risks take precedence over compliance status |
| 10 | Assessment budget scales with risk, not compliance requirements |

---

## Transitioning from Theatre to Validation

### Phase 1: Acknowledge the Gap

- Conduct honest assessment using red flag checklist
- Identify controls where theatre has substituted for validation
- Document the validation gap (no remediation required yet — just acknowledge)

### Phase 2: Prioritise by Risk

- Map controls to demonstrated risks and potential impact
- Identify critical controls currently validated only by L0-L1
- Prioritise validation upgrades based on risk, not compliance requirements

### Phase 3: Introduce Adversarial Elements

- For critical controls: Engage external red team or penetration testers
- For high controls: Create independent internal testing function
- For medium controls: Add technical testing to existing processes

### Phase 4: Close the Remediation Loop

- Ensure findings flow to funded remediation
- Track findings to closure
- Verify remediation through retest

### Phase 5: Institutionalise

- Build validation into control lifecycle (not just annual assessment)
- Create metrics that reward finding problems, not hiding them
- Report validation gap closure to governance forums

---

## Common Objections and Responses

### "We can't afford adversarial testing for everything"

**Response:** You don't need to. Use tiered approach:
- Adversarial testing for critical controls only
- Technical testing for high controls
- Evidence-based review acceptable for low controls

**The question is:** Are you applying appropriate rigour to your most critical controls?

### "Our compliance requirements specify the testing approach"

**Response:** Compliance is a floor, not a ceiling. If compliance-specified testing is insufficient:
- Meet compliance requirements AND
- Supplement with additional validation for critical controls

**The question is:** Does your compliance testing actually verify effectiveness, or just process?

### "We don't have internal red team capability"

**Response:** Options:
- External red team (annual engagement)
- Managed red team service
- Purple team (collaborative) as stepping stone
- At minimum: penetration testing with exploitation, not just scanning

**The question is:** Are you testing whether controls work, or just whether they exist?

### "Adversarial testing is disruptive"

**Response:** Production incidents are more disruptive. Options:
- Test in production-equivalent environment
- Scope testing to avoid critical business periods
- Use "safe" adversarial techniques (exfiltration simulation without actual data)

**The question is:** Which is more disruptive — testing or the incident you could have prevented?

### "We passed our audit"

**Response:** Passing an audit means:
- You have controls
- Controls are documented
- Evidence of control operation exists

It does NOT mean:
- Controls actually work against adversaries
- Controls would prevent a sophisticated attack
- You are secure

**The question is:** Would your audit passing status survive adversarial testing?

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-01-19 | Initial draft |


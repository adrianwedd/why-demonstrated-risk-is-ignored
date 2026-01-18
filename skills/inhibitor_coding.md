# Skill: Inhibitor Coding

**Version:** 1.0
**Purpose:** Given a case description, identify which structural inhibitors are present.

---

## Input Specification

### Required

- **Case description:** Text describing an organisational situation where risk may have been ignored
- **Case context:** Industry, organisation size, time period (if known)

### Optional

- **Available artifacts:** List of documents/evidence available for analysis
- **Focus area:** Specific pipeline stage or inhibitor to prioritise

### Input Format

```
CASE: [Brief description of the situation]

CONTEXT:
- Industry: [sector]
- Organisation size: [approximate]
- Time period: [when this occurred]

AVAILABLE EVIDENCE:
- [List of documents, interviews, or other evidence]

FOCUS: [Optional - specific inhibitor or stage to prioritise]
```

---

## Step-by-Step Instructions

### Step 1: Understand the Case

Read the case description carefully. Identify:
- What risk was discovered?
- Who discovered it?
- What happened after discovery?
- What was the outcome?

**Checkpoint:** Can you state the demonstrated risk in one sentence?

### Step 2: Map to Pipeline

For each pipeline stage, note what evidence exists:

| Stage | Question | Evidence |
|-------|----------|----------|
| Discovery | Was the risk identified? | |
| Articulation | Was it documented/communicated? | |
| Escalation | Was it escalated to decision-makers? | |
| Triage | Was it prioritised against other risks? | |
| Decision | Was an explicit decision made? | |
| Outcome | Was the decision implemented? | |

**Checkpoint:** At which stage did the risk stall?

### Step 3: Check Each Inhibitor

For each inhibitor, apply the decision tree from the codebook:

#### Inhibitor 1: Responsibility Without Authority

```
Is there a designated risk owner?
├── NO → Inhibitor possibly present (check Accountability Diffusion first)
└── YES → Does that owner control budget, priorities, or deployment?
           ├── YES → Inhibitor NOT present
           └── NO → Does escalation have decision-forcing power?
                    ├── YES → Inhibitor NOT present
                    └── NO → Inhibitor PRESENT
```

**Tells to look for:**
- Separated reporting lines
- Advisory-only mandate
- No budget control
- Ticket-based influence only
- Escalation goes nowhere
- "Dotted line" accountability

#### Inhibitor 2: Risk Discovery as Career Threat

```
Have risk reporters faced negative consequences?
├── YES → Inhibitor PRESENT (high confidence)
└── NO/UNKNOWN → Are there protected reporting channels?
                 ├── YES, and used → Inhibitor likely NOT present
                 └── NO, or unused → Are there other tells (≥2)?
                                     ├── YES → Inhibitor PRESENT
                                     └── NO → Inhibitor NOT present
```

**Tells to look for:**
- Messenger association
- No safe reporting channel
- Retaliation history
- "Shoot the messenger" culture
- Career risk for documentation
- Incentives for silence

#### Inhibitor 3: Compliance Theatre

```
Are risk decisions based on empirical evidence (testing, validation)?
├── YES → Inhibitor likely NOT present
└── NO → Are decisions based on documentation/attestation?
         ├── YES → Are documented controls actually effective?
         │        ├── YES (verified) → Inhibitor NOT present
         │        └── NO/UNVERIFIED → Inhibitor PRESENT
         └── NO → Insufficient evidence
```

**Tells to look for:**
- Policy-as-protection
- Attestation over testing
- Audit-driven priorities
- Certificate worship
- Risk register as talisman
- Training completion as control

#### Inhibitor 4: Accountability Diffusion

```
Is there a single individual accountable for this risk decision?
├── YES → Inhibitor NOT present
└── NO → Is accountability assigned to a group/committee?
         ├── YES → Does the group have decision authority and quorum?
         │        ├── YES, and decides → Inhibitor NOT present
         │        └── NO, or defers → Inhibitor PRESENT
         └── NO → Is accountability unassigned?
                  └── YES → Inhibitor PRESENT
```

**Tells to look for:**
- Committee decision-making
- RACI confusion
- Referral chains
- Consensus requirements
- Ownership gaps
- Shared accountability

### Step 4: Assess Confidence

For each inhibitor coded as present:

| Confidence | Criteria |
|------------|----------|
| High | ≥3 tells + ≥2 artifacts |
| Medium | ≥2 tells + ≥1 artifact |
| Low | ≥2 tells, artifacts unclear |

### Step 5: Note Interactions

Check for interaction effects between inhibitors:
- Does Responsibility Without Authority + Accountability Diffusion create authority vacuum?
- Does Risk Discovery as Career Threat + Compliance Theatre make theatre the safe choice?
- Does Accountability Diffusion + Compliance Theatre provide shared cover?

---

## Output Format

```
## Inhibitor Coding Summary

**Case:** [One-sentence description]
**Pipeline stall point:** [Stage where risk stopped moving]

### Inhibitors Present

| Inhibitor | Present | Confidence | Key Evidence |
|-----------|---------|------------|--------------|
| Responsibility without authority | Y/N | H/M/L | [Brief evidence] |
| Risk discovery as career threat | Y/N | H/M/L | [Brief evidence] |
| Compliance theatre | Y/N | H/M/L | [Brief evidence] |
| Accountability diffusion | Y/N | H/M/L | [Brief evidence] |

### Analysis

[2-3 paragraphs explaining:
1. Which inhibitors are most significant
2. How inhibitors interact in this case
3. What this case illustrates about the model]

### Confidence Notes

- [List any evidence gaps]
- [Note where coding required judgment calls]
- [Identify what additional evidence would increase confidence]
```

---

## Quality Checks

Before finalising output, verify:

- [ ] Each inhibitor was checked against its decision tree
- [ ] At least 2 tells identified for each inhibitor coded as present
- [ ] Confidence level justified by evidence
- [ ] Pipeline stage identified where risk stalled
- [ ] Interaction effects considered
- [ ] Evidence gaps acknowledged

---

## Known Failure Modes

| Failure Mode | Description | Mitigation |
|--------------|-------------|------------|
| Over-coding | Seeing inhibitors in every case | Require evidence for each tell; use decision trees strictly |
| Under-coding | Missing inhibitors due to limited evidence | Note evidence gaps; code with low confidence rather than not coding |
| Confirmation bias | Finding inhibitors you expect | Work through all 4 inhibitors for every case |
| Hindsight bias | Coding based on outcome rather than structure | Focus on structural features, not whether outcome was bad |
| Single inhibitor focus | Attributing everything to one inhibitor | Consider interactions; most cases have multiple inhibitors |

---

## Example Application

**Case:** A security team discovered a critical vulnerability in a production system. They documented it in the risk register, escalated it to the IT steering committee, and it was discussed at three consecutive monthly meetings. No remediation was funded. Six months later, the vulnerability was exploited.

**Output:**

| Inhibitor | Present | Confidence | Key Evidence |
|-----------|---------|------------|--------------|
| Responsibility without authority | Y | Medium | Security team could document and escalate but not fund remediation |
| Risk discovery as career threat | N | Low | No evidence of retaliation; security team did escalate |
| Compliance theatre | Y | Medium | Risk register existed; discussion occurred; no action resulted |
| Accountability diffusion | Y | High | Committee discussed but no individual owned the decision |

**Analysis:** This case exhibits a classic pattern where three inhibitors interact. The security team had responsibility to identify and escalate but lacked authority to fund remediation (Inhibitor 1). The IT steering committee provided a forum for discussion that satisfied process requirements without forcing decision (Inhibitor 3 + 4). The combination created a situation where the risk was "handled" (discussed, documented) without being addressed.

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-01-19 | Initial draft |


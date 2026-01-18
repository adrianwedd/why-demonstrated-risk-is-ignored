# Skill: Pattern Card Generation

**Version:** 1.0
**Purpose:** Given an intervention idea, structure it as a governance pattern card.

---

## Input Specification

### Required

- **Intervention idea:** Description of the intervention or mechanism
- **Target problem:** What failure mode does this address?

### Optional

- **Target inhibitor:** Which structural inhibitor does this address?
- **Pipeline stage:** Where in the truth flow pipeline does this operate?
- **Existing implementations:** Examples of organisations using similar approaches

### Input Format

```
INTERVENTION: [Brief description of the intervention]

TARGET PROBLEM: [What failure mode does this address?]

TARGET INHIBITOR (optional): [Inhibitor 1-4]

PIPELINE STAGE (optional): [Discovery/Articulation/Escalation/Triage/Decision/Outcome]

EXISTING IMPLEMENTATIONS (optional):
- [Organisation/context]: [How they implement this]
```

---

## Step-by-Step Instructions

### Step 1: Clarify the Problem

Before structuring the solution, ensure the problem is clear:

- What specific failure mode does this intervention address?
- What observable symptoms indicate this failure mode is present?
- What are the consequences of not addressing this problem?

**Checkpoint:** Can you state the problem in one sentence?

### Step 2: Identify the Context

Define when this pattern is applicable:

- What organisational conditions must be present?
- What prerequisites are needed?
- What situations would make this pattern inappropriate?

**Template:** "Use this pattern when [conditions]. Do NOT use when [contraindications]."

### Step 3: Analyse Forces

Identify the tensions that make this problem difficult:

Forces are competing concerns that the designer must balance. Common forces include:
- Cost vs. thoroughness
- Speed vs. rigour
- Autonomy vs. control
- Simplicity vs. completeness
- Individual accountability vs. collaboration

For each force:
- Name the tension
- Explain why both sides matter
- Note how the intervention addresses or balances the tension

### Step 4: Structure the Solution

Break the intervention into concrete components:

1. **Core mechanism:** What is the essential element that makes this work?
2. **Implementation components:** What specific pieces must be in place?
3. **Integration points:** How does this connect to existing processes?
4. **Success conditions:** What must be true for this to work?

**Guideline:** Be specific enough that a practitioner could implement, but flexible enough to adapt to context.

### Step 5: Map to Inhibitors

Connect the pattern to the structural inhibitor framework:

- Which inhibitor(s) does this address?
- At which pipeline stage(s) does this operate?
- How does the mechanism counteract the inhibitor?

### Step 6: Define Evidence Requirements

Specify how you would know the pattern is working:

- What leading indicators would show early effectiveness?
- What lagging indicators would confirm sustained effectiveness?
- What metrics could be measured without full organisational access?

### Step 7: Anticipate Failure Modes

Identify how the pattern can go wrong:

For each failure mode:
- What behaviour would indicate this failure?
- What causes this failure mode?
- What mitigation reduces the risk?

**Common failure categories:**
- Gaming: Following the letter but not spirit
- Overload: Pattern creates too much overhead
- Circumvention: Pattern is bypassed
- Ossification: Pattern becomes theatre itself
- Backfire: Pattern creates unintended negative consequences

### Step 8: Specify Metrics

Define measurable indicators:

- **Process metrics:** Is the pattern being followed?
- **Outcome metrics:** Is the pattern achieving its goal?
- **Health metrics:** Is the pattern sustainable?

For each metric: name, what it measures, target direction, and gaming risks.

---

## Output Format

```
## Pattern: [Name]

### Problem

[1-2 paragraphs describing the failure mode this addresses]

### Context

**Use this pattern when:**
- [Condition 1]
- [Condition 2]
...

**Do NOT use when:**
- [Contraindication 1]
- [Contraindication 2]
...

### Forces

| Force | Tension |
|-------|---------|
| [Force name] | [Description of the tension] |
...

### Solution

**Core mechanism:** [One sentence describing the essential element]

**Components:**
1. [Component 1]: [Description]
2. [Component 2]: [Description]
...

**Implementation guidance:**
- [Practical tip 1]
- [Practical tip 2]
...

### Inhibitor Mapping

| Inhibitor | How this pattern helps |
|-----------|----------------------|
| [Inhibitor] | [Mechanism by which pattern addresses inhibitor] |
...

**Pipeline stage:** [Where this operates]

### Evidence Requirements

**The pattern is working if:**
- [Indicator 1]
- [Indicator 2]
...

### Failure Modes

| Failure Mode | Indicator | Mitigation |
|--------------|-----------|------------|
| [Mode] | [Observable sign] | [How to prevent/address] |
...

### Metrics

| Metric | What it measures | Target direction | Gaming risk |
|--------|------------------|------------------|-------------|
| [Name] | [Description] | [Increase/Decrease] | [How it could be gamed] |
...

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | [Date] | Initial draft |
```

---

## Quality Checks

Before finalising output, verify:

- [ ] Problem statement is specific and falsifiable
- [ ] Context conditions are clear and actionable
- [ ] Forces represent genuine tensions, not strawmen
- [ ] Solution is specific enough to implement
- [ ] Inhibitor mapping is explicit
- [ ] Failure modes are specific, not generic
- [ ] Metrics are measurable and have identified gaming risks

---

## Known Failure Modes

| Failure Mode | Description | Mitigation |
|--------------|-------------|------------|
| Too abstract | Pattern is a principle, not an implementation | Add specific components and implementation guidance |
| Too specific | Pattern only works in one context | Identify the essential mechanism; allow flexibility in details |
| Missing forces | Pattern doesn't acknowledge trade-offs | Brainstorm what could make someone resist this pattern |
| Optimistic failure modes | Only listing minor failures | Consider: gaming, circumvention, backfire, overload |
| Unmeasurable metrics | Metrics that can't actually be collected | For each metric, specify the data source |
| Inhibitor disconnect | Pattern doesn't clearly address an inhibitor | Verify the mechanism by which this counteracts the inhibitor |

---

## Example Application

**Input:**
```
INTERVENTION: Require that all risk acceptance decisions expire after 12 months and must be renewed.

TARGET PROBLEM: Risk acceptances become permanent by default; no one revisits old decisions.

TARGET INHIBITOR: Compliance theatre (acceptance as checkbox, not genuine decision)

PIPELINE STAGE: Decision, Outcome
```

**Output (abbreviated):**

### Pattern: Expiring Risk Acceptance

**Problem:** Risk acceptance decisions, once made, become permanent by default. Initial "temporary" acceptances persist indefinitely. The organisation accumulates accepted risks without periodic reassessment of whether acceptance remains appropriate.

**Core mechanism:** All risk acceptance decisions include a mandatory expiry date. Before expiry, the acceptance must be explicitly renewed with updated justification, or the risk must be mitigated.

**Inhibitor Mapping:**
| Inhibitor | How this pattern helps |
|-----------|----------------------|
| Compliance theatre | Prevents acceptance from becoming permanent checkbox |
| Accountability diffusion | Renewal requires named individual to re-accept |

**Failure Modes:**
| Failure Mode | Indicator | Mitigation |
|--------------|-----------|------------|
| Rubber-stamp renewal | All acceptances renewed without review | Require updated risk statement and justification |
| Expiry gaming | Acceptances set to maximum duration | Cap maximum duration; shorter for higher risks |
| Administrative burden | Renewal process creates overhead | Automate reminders; streamline low-risk renewals |

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-01-19 | Initial draft |


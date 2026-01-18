# Skill: Proposition Generation

**Version:** 1.0
**Purpose:** Given a claim, structure it as a falsifiable proposition suitable for empirical testing.

---

## Input Specification

### Required

- **Claim:** The statement to be structured as a proposition
- **Mechanism:** The causal mechanism underlying the claim

### Optional

- **Related inhibitor:** Which structural inhibitor this relates to
- **Pipeline stage:** Where in the truth flow pipeline this operates
- **Existing evidence:** What support exists for this claim

### Input Format

```
CLAIM: [The statement to be tested]

MECHANISM: [Why do you believe this is true? What causes this?]

RELATED INHIBITOR (optional): [Inhibitor 1-4]

PIPELINE STAGE (optional): [Discovery/Articulation/Escalation/Triage/Decision/Outcome]

EXISTING EVIDENCE (optional):
- [Study/observation]: [What it found]
```

---

## Step-by-Step Instructions

### Step 1: Clarify the Claim

Ensure the claim is:
- **Specific:** Not vague generalisations
- **Testable:** Could be proven wrong with evidence
- **Causal:** Makes a claim about cause and effect

**Bad claim:** "Organisations that ignore risk have problems."
**Good claim:** "Organisations with advisory-only risk functions exhibit longer time-to-decision than those with authoritative risk functions."

**Checkpoint:** Can you identify the independent and dependent variables?

### Step 2: Identify the Mechanism

Articulate the causal pathway:
- What structural feature (independent variable) causes the outcome?
- Through what process does this causation operate?
- Why would we expect this causal relationship?

**Template:** "[Structural feature] causes [outcome] because [mechanism]."

### Step 3: Specify the Prediction

State what you would observe if the claim is true:
- What would differ between situations where the claim applies vs. doesn't?
- What would you measure to test the prediction?
- What direction would you expect the difference to be?

**Guidelines:**
- Be precise about units and direction
- Identify both the treatment (presence of structural feature) and control (absence)
- State what "significant" difference means

### Step 4: Define Measurement

For each variable, specify:
- **Operational definition:** How would you measure this?
- **Data source:** Where would this data come from?
- **Reliability:** Could two researchers measure this the same way?

**Common challenges:**
- Subjective constructs (e.g., "psychological safety") need proxy measures
- Some variables require organisational access; identify external proxies where possible
- Time-based measures need clear start/end points

### Step 5: Identify the Falsifier

State explicitly what observation would disprove the claim:
- If you observed [X], you would conclude the claim is false
- The falsifier should be observable in principle
- The falsifier should be specific (not just "no relationship")

**Types of falsifiers:**
- **No effect:** No significant difference between treatment and control
- **Reverse effect:** Effect in opposite direction to predicted
- **Confound dominance:** Effect explained entirely by confounding variable

### Step 6: Document Boundary Conditions

Identify when the proposition may not hold:
- What contexts or conditions might moderate the relationship?
- What would you exclude from the test population?
- What confounds might need to be controlled?

**Common boundaries:**
- Organisation size (small orgs may have different dynamics)
- Industry (regulated vs. unregulated)
- Crisis conditions (emergency may override normal processes)
- Cultural context (national/organisational culture)

### Step 7: Acknowledge Limitations

Document:
- What threats to validity exist?
- What alternative explanations are possible?
- What would increase confidence in the claim if supported?

---

## Output Format

```
## Proposition: [Short name]

### Statement

> **P[n]:** [Formal statement of the proposition in precise language]

### Components

| Component | Description |
|-----------|-------------|
| **Mechanism** | [What structural feature causes this and through what process] |
| **Pipeline stage** | [Where in the pipeline this operates] |
| **Prediction** | [What you would observe if true] |
| **Measurement** | [How you would measure the key variables] |
| **Falsifier** | [What observation would disprove this] |

### Operationalisation

**Independent variable:** [Name]
- Definition: [How to measure]
- Data source: [Where this comes from]

**Dependent variable:** [Name]
- Definition: [How to measure]
- Data source: [Where this comes from]

**Control variables:** [List any confounds to control]

### Boundary Conditions

This proposition may not hold when:
- [Condition 1]: [Why it may not apply]
- [Condition 2]: [Why it may not apply]
...

### Expected Negative Results

We anticipate that empirical testing may reveal:
- [Potential finding 1]: [What it would mean]
- [Potential finding 2]: [What it would mean]
...

### Confidence Notes

- [Strength 1 of this proposition]
- [Weakness 1 of this proposition]
- [What would increase confidence]

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | [Date] | Initial draft |
```

---

## Quality Checks

Before finalising output, verify:

- [ ] Claim is specific enough to be tested
- [ ] Mechanism is stated explicitly
- [ ] Independent and dependent variables are identified
- [ ] Measurement approach is specified
- [ ] Falsifier is specific and observable
- [ ] Boundary conditions are documented
- [ ] Alternative explanations are acknowledged

---

## Known Failure Modes

| Failure Mode | Description | Mitigation |
|--------------|-------------|------------|
| Unfalsifiable | Proposition cannot be proven wrong | Ensure falsifier is specific and observable |
| Tautological | Proposition is true by definition | Ensure IV and DV are measured independently |
| Too narrow | Proposition only applies to one case | Generalise while maintaining specificity |
| Too broad | Proposition claims too much | Add boundary conditions; narrow scope |
| Unmeasurable | Key variables cannot be operationalised | Identify proxy measures or acknowledge limitation |
| Confounded | Alternative explanations equally plausible | Identify control variables; acknowledge confounds |

---

## Example Application

**Input:**
```
CLAIM: Organisations with committee-based risk decisions take longer to address demonstrated risks.

MECHANISM: Committee structures diffuse accountability, making no one responsible for forcing a decision. Decisions require consensus that never forms, or are deferred for "more analysis."

RELATED INHIBITOR: Accountability diffusion

PIPELINE STAGE: Escalation, Decision
```

**Output:**

### Proposition: Committee Decision Latency

**Statement:**

> **P4:** Organisations that require committee approval for demonstrated risk decisions will exhibit longer time-to-decision than organisations with single-owner decision authority, controlling for risk severity and organisation size.

### Components

| Component | Description |
|-----------|-------------|
| **Mechanism** | Accountability diffusion (Inhibitor #4). Committee structures spread responsibility such that no individual is accountable for forcing decision. Decisions require consensus that may not form. |
| **Pipeline stage** | Escalation → Decision |
| **Prediction** | Mean time from risk escalation to explicit decision will be significantly longer for committee-based organisations |
| **Measurement** | Compare matched organisation pairs with different governance structures; measure time from documented escalation to decision record |
| **Falsifier** | No significant difference, OR committee structures are faster (inverse) |

### Operationalisation

**Independent variable:** Decision governance structure
- Definition: Committee (requires group approval) vs. Single-owner (individual has authority)
- Data source: Risk governance policy documents, RACI matrices

**Dependent variable:** Time-to-decision
- Definition: Days from documented risk escalation to explicit decision record
- Data source: Risk management system timestamps, meeting minutes

**Control variables:**
- Risk severity (Critical/High/Medium/Low)
- Organisation size (employees, revenue)
- Industry sector

### Boundary Conditions

This proposition may not hold when:
- Committees have strong chair with decision authority (effectively single-owner)
- External regulatory deadlines create forcing functions
- Crisis conditions activate emergency decision pathways
- Organisation is very small (< 50 people)

### Confidence Notes

- **Strength:** Clear mechanism and measurable outcome
- **Weakness:** Correlation may not be causation; organisations may choose governance structures based on risk appetite
- **Increase confidence:** Longitudinal study showing change in decision latency after governance structure change

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-01-19 | Initial draft |


# Confidence & Verification Protocol

**Version:** 1.0
**Issue:** #24
**Status:** Draft

---

## Purpose

This protocol enables efficient attention triage for agent outputs. By requiring structured confidence reporting, humans can:

1. Focus review on low-confidence outputs
2. Accept high-confidence outputs with less scrutiny
3. Efficiently allocate verification effort

---

## Protocol Fields

Every substantive agent output should include these fields:

### Field 1: Confidence Level

**Options:** High / Medium / Low

| Level | Definition | Human Review Required |
|-------|------------|----------------------|
| High | Direct evidence from authoritative source; multiple confirming sources; within agent's training strength | Optional spot-check |
| Medium | Reasonable inference; single source; edge of training knowledge | Recommended review |
| Low | Speculation; limited evidence; outside training knowledge; novel synthesis | Required review |

### Field 2: Rationale

Brief explanation of why this confidence level was assigned.

**Template:** "This confidence level is [High/Medium/Low] because [reason]."

**Good rationales:**
- "High confidence because this directly applies the codebook definition with clear evidence"
- "Medium confidence because this synthesises multiple sources but the integration is my interpretation"
- "Low confidence because this extrapolates beyond the available evidence"

**Bad rationales:**
- "I'm confident" (no reason)
- "This seems right" (subjective)
- "The user will verify" (abdication)

### Field 3: Verification Step

The cheapest action that would increase confidence.

**Template:** "To verify: [specific action]"

**Good verification steps:**
- "To verify: Check the Edmondson (1999) citation against original source"
- "To verify: Review actual risk register entries from the case"
- "To verify: Consult a practitioner who has implemented similar patterns"

**Bad verification steps:**
- "To verify: Think harder" (not actionable)
- "To verify: Read more" (not specific)
- "To verify: Trust me" (no verification)

### Field 4: Time Estimate

Approximate time for the verification step.

| Category | Time Range | Examples |
|----------|------------|----------|
| Quick | < 5 minutes | Check citation, verify definition |
| Moderate | 5-30 minutes | Read original source, review document |
| Substantial | 30+ minutes | Interview expert, conduct analysis |

---

## Protocol Format

For each major output section, include a confidence block:

```
### [Section Title]

[Content...]

**Confidence:** [High/Medium/Low]
**Rationale:** [Why this level]
**Verification:** [Cheapest way to increase confidence]
**Time:** [Quick/Moderate/Substantial]
```

---

## Examples

### Example 1: High Confidence

**Content:** The inhibitor "Responsibility without Authority" is defined as situations where individuals are assigned accountability for risk outcomes but lack the power to control budgets, set priorities, or compel action.

**Confidence:** High
**Rationale:** This directly quotes the inhibitor codebook (Issue #7), which is an authoritative internal source.
**Verification:** Confirm wording matches `/docs/instruments/inhibitor_codebook.md`
**Time:** Quick (< 2 minutes)

---

### Example 2: Medium Confidence

**Content:** Psychological safety research and whistleblowing research are complementary literatures that address different aspects of voice suppression, with psychological safety focusing on team-level dynamics and whistleblowing on individual-organisation relationships.

**Confidence:** Medium
**Rationale:** This synthesis is reasonable based on reading the literatures, but the characterisation of "complementary" vs. "overlapping" is an interpretation.
**Verification:** Review Edmondson (1999) and Miceli & Near (1992) to confirm they address different levels of analysis.
**Time:** Moderate (15-20 minutes to skim both sources)

---

### Example 3: Low Confidence

**Content:** The pattern interaction matrix suggests that implementing Protected Discovery (P2) before Mandatory Response Triggers (P1) would be more effective, because psychological safety must precede decision-forcing mechanisms.

**Confidence:** Low
**Rationale:** This is a logical inference about implementation sequencing, but I have no evidence about actual implementation outcomes. This is speculation based on theory.
**Verification:** Interview 2-3 organisations that have implemented both patterns to understand which sequence worked better.
**Time:** Substantial (several hours of interviews and analysis)

---

## Low-Confidence Flagging

Outputs with low confidence require explicit flagging for human review.

### Flag Format

```
⚠️ LOW CONFIDENCE — HUMAN REVIEW REQUIRED

This section has low confidence because: [reason]

Before relying on this content:
1. [Verification step 1]
2. [Verification step 2]
```

### When to Flag

Flag for human review when:
- Confidence is Low for any major claim
- Output involves novel synthesis not in training data
- Output makes predictions about real-world outcomes
- Output could lead to significant decisions if wrong
- Agent is uncertain about correctness

---

## Confidence Calibration Guidance

To maintain calibrated confidence:

### High Confidence Criteria (all must be true)

- [ ] Claim is directly supported by authoritative source
- [ ] Source is verified to exist
- [ ] Claim is within agent's training knowledge
- [ ] Multiple sources would agree
- [ ] No significant alternative interpretations

### Medium Confidence Criteria (some apply)

- [ ] Claim is reasonable inference from evidence
- [ ] Single source supports the claim
- [ ] Some interpretation required
- [ ] At edge of training knowledge
- [ ] Alternative interpretations are possible but less likely

### Low Confidence Criteria (any apply)

- [ ] Claim involves novel synthesis
- [ ] Limited or no direct evidence
- [ ] Significant extrapolation required
- [ ] Outside training knowledge
- [ ] Multiple plausible alternatives
- [ ] Agent is uncertain

---

## Protocol in Practice

### When Producing Output

1. After each major section, pause to assess confidence
2. Apply calibration criteria honestly
3. If Low, consider whether to include or flag for later
4. Include confidence block with all fields

### When Reviewing Output

1. Sort sections by confidence level
2. Review Low confidence sections first
3. Spot-check High confidence claims
4. Execute verification steps for critical content

### When Flagging Issues

If verification reveals problems:

```
❌ VERIFICATION FAILED

Claim: [What was claimed]
Problem: [What was wrong]
Corrected: [What should be stated instead]
Confidence impact: [How this affects confidence in related claims]
```

---

## Aggregate Confidence Reporting

For documents with multiple sections, provide aggregate summary:

```
## Confidence Summary

| Section | Confidence | Verification Status |
|---------|------------|---------------------|
| [Name] | High | Verified / Unverified |
| [Name] | Medium | Verified / Unverified |
| [Name] | Low | ⚠️ Review Required |

**Overall document confidence:** [High/Medium/Low]
**Human review priority:** [High/Medium/Low]
**Total verification time estimate:** [X minutes/hours]
```

---

## Integration with Guardrail Checklist

This protocol integrates with the guardrail checklist:

| Guardrail Check | Protocol Support |
|-----------------|------------------|
| G2: Confidence Level | Field 1 (Confidence) |
| G4: Verification Step | Field 3 (Verification) |

The protocol provides the structured format; the checklist verifies it was applied correctly.

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-01-19 | Initial draft |


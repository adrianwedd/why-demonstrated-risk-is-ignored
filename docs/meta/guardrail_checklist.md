# Guardrail Checklist for Agent Outputs

**Version:** 1.0
**Issue:** #23
**Status:** Draft

---

## Purpose

This checklist detects drift and hallucination in agent outputs. It can be used:

1. **During execution:** Check outputs as they're produced
2. **After execution:** Review completed artifacts
3. **By human reviewer:** Systematic quality assessment

Each item has clear pass/fail criteria.

---

## Checklist Items

### G1: Source Specificity

**Question:** Does the output reference specific sources rather than vague appeals to authority?

| Pass | Fail |
|------|------|
| "Edmondson (1999) found that psychological safety enables learning" | "Research shows that psychological safety is important" |
| "The risk register entry from March 2024 documented..." | "Evidence suggests this was known" |
| "According to ISO 27001, control A.12.3 requires..." | "Best practices recommend..." |

**Check:**
- [ ] Claims cite specific sources (author, year, document)
- [ ] No vague references like "studies show," "research indicates," "experts agree"
- [ ] Sources are verifiable (could be looked up)

**Common Drift Pattern:** Agent generalises from training data without specific attribution.

---

### G2: Confidence Level

**Question:** Does the output include explicit confidence levels for key claims?

| Pass | Fail |
|------|------|
| "This analysis has medium confidence due to limited artifact access" | Claim stated without confidence indication |
| "High confidence: The definition is directly from the codebook" | Assumed certainty without acknowledgment |
| "Low confidence: This is inferred, not directly stated" | "This is the case" without hedging |

**Check:**
- [ ] Major claims include confidence level (High/Medium/Low)
- [ ] Confidence is justified (what evidence supports this level?)
- [ ] Uncertainty is explicitly acknowledged where present

**Confidence Calibration:**

| Level | Criteria |
|-------|----------|
| High | Direct evidence from authoritative source; multiple confirming sources |
| Medium | Reasonable inference from available evidence; single source |
| Low | Speculation based on patterns; limited or no direct evidence |

**Common Drift Pattern:** Agent expresses high confidence regardless of actual evidence strength.

---

### G3: Falsifier Identification

**Question:** Does the output identify what would disprove the claim?

| Pass | Fail |
|------|------|
| "This proposition would be falsified if no correlation is found" | Claim without falsification criteria |
| "Counter-evidence: If protected channels are used but retaliation still occurs" | "This is definitely true" |
| "This interpretation could be wrong if the policy was not actually followed" | Unfalsifiable assertion |

**Check:**
- [ ] Key claims have named falsifiers
- [ ] Falsifiers are specific and observable
- [ ] Alternative explanations are acknowledged

**Common Drift Pattern:** Agent treats all outputs as definitively true without acknowledging falsifiability.

---

### G4: Next Verification Step

**Question:** Does the output specify the cheapest way to increase confidence?

| Pass | Fail |
|------|------|
| "Verification: Check citation against original source" | No verification path provided |
| "To confirm: Review the actual risk register entries" | "Trust this output" |
| "Next step: Interview 2-3 risk managers to validate" | Assumption that output is final |

**Check:**
- [ ] Verification step is named
- [ ] Verification is actionable (could be done)
- [ ] Verification is proportionate (cheapest effective method)

**Verification Hierarchy (cheapest first):**
1. Check citation/reference
2. Review original document
3. Consult subject matter expert
4. Conduct primary research

**Common Drift Pattern:** Agent produces outputs without acknowledging they need verification.

---

### G5: Scope Check

**Question:** Does the output address the actual question asked?

| Pass | Fail |
|------|------|
| Output directly answers the posed question | Output drifts to related but different topic |
| Scope explicitly bounded: "This addresses X, not Y" | Scope creep without acknowledgment |
| Off-topic material flagged: "Note: This is tangential..." | Unrelated content presented as on-topic |

**Check:**
- [ ] Output addresses the original question
- [ ] Any scope expansion is explicitly noted
- [ ] Tangential content is labeled as such

**Common Drift Pattern:** Agent answers a related question it "wants" to answer rather than the actual question.

---

### G6: Hallucination Detection

**Question:** Are all cited sources verified to exist?

| Pass | Fail |
|------|------|
| Citation verified: author, year, publication match | Citation cannot be verified |
| Internal reference points to actual artifact | Reference to non-existent document |
| Quote matches actual source content | Quote is paraphrased or invented |

**Check:**
- [ ] Each citation can be verified (spot check if many)
- [ ] Internal references point to real documents
- [ ] Quotes are actual quotes, not paraphrases

**High-Risk Hallucination Zones:**
- Specific statistics (percentages, dates, numbers)
- Direct quotes
- Proper names (researchers, organisations)
- Publication details (journal names, years)

**Common Drift Pattern:** Agent generates plausible-sounding citations that don't exist or conflates multiple sources.

---

## Quick Pass Checklist

For rapid assessment, use this abbreviated checklist:

| # | Item | Pass? |
|---|------|-------|
| 1 | Sources are specific (named, dated) | [ ] |
| 2 | Confidence level is stated | [ ] |
| 3 | Falsifier is identified for key claims | [ ] |
| 4 | Verification step is named | [ ] |
| 5 | Output addresses the actual question | [ ] |
| 6 | Citations spot-checked and verified | [ ] |

**Scoring:**
- 6/6: High quality, proceed with confidence
- 4-5/6: Acceptable with noted gaps
- 2-3/6: Needs revision before use
- 0-1/6: Reject, regenerate with explicit guidance

---

## Application by Output Type

### For Literature Reviews

| Extra Check | What to Verify |
|-------------|----------------|
| Citation accuracy | Author names, years, publication venues |
| Claim attribution | What source actually says vs. what's attributed |
| Completeness | Key sources not missing |
| Recency | Literature is current (within knowledge cutoff) |

### For Pattern Cards

| Extra Check | What to Verify |
|-------------|----------------|
| Mechanism validity | Does the pattern actually address the inhibitor? |
| Implementation feasibility | Could this be implemented in practice? |
| Failure mode realism | Are failure modes actually likely? |

### For Case Coding

| Extra Check | What to Verify |
|-------------|----------------|
| Evidence sufficiency | Is there enough evidence for coding? |
| Decision tree adherence | Did agent follow the codebook? |
| Confidence calibration | Is confidence level appropriate to evidence? |

### For Propositions

| Extra Check | What to Verify |
|-------------|----------------|
| Falsifiability | Is the proposition actually testable? |
| Variable operationalisation | Can variables be measured? |
| Mechanism clarity | Is the causal claim clear? |

---

## Checklist Application Protocol

### During Execution

1. After each major output, run quick pass checklist
2. If any item fails, prompt agent to address
3. Document failures for post-execution review

### After Execution

1. Review all major outputs against full checklist
2. Flag items requiring verification
3. Prioritise verification by impact (high-stakes claims first)

### Verification Workflow

```
Output produced
      │
      ▼
Run quick pass checklist
      │
      ├── All pass → Accept (note as "agent-generated, passed checks")
      │
      └── Any fail → Classify failure
                          │
                          ├── Minor (G1, G2) → Note for human review
                          │
                          ├── Moderate (G3, G4, G5) → Revise or flag
                          │
                          └── Major (G6) → Reject, regenerate
```

---

## Guardrail Failure Log

When guardrail checks fail, document:

| Field | What to Record |
|-------|----------------|
| Output ID | Which output failed |
| Failed check(s) | G1-G6 |
| Failure description | What specifically was wrong |
| Resolution | How it was addressed |
| Pattern | Is this a recurring failure? |

**Example Entry:**
```
Output: Literature grounding document
Failed: G6 (Hallucination Detection)
Description: Citation "Smith (2019)" could not be verified
Resolution: Removed citation; marked claim as "plausible but unverified"
Pattern: Third citation accuracy failure this session
```

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-01-19 | Initial draft |


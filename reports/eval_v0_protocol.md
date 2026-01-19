# Human vs Agent Comparison: Evaluation Protocol

**Version:** 1.0
**Issue:** #20
**Status:** Scaffold (Future Work)

---

## Purpose

This document defines the protocol for comparing human and agent-assisted research performance. The actual evaluation requires baseline human performance data that cannot be collected without research participants.

---

## Evaluation Dimensions

### D1: Time-to-Output

**Definition:** Elapsed time from task assignment to completed artifact.

| Metric | Measurement |
|--------|-------------|
| Wall-clock time | Start timestamp to completion timestamp |
| Active time | Time actively working (excluding breaks, interruptions) |
| Iteration count | Number of revision cycles before acceptance |

**Protocol:**
1. Assign identical task to human-only and agent-assisted conditions
2. Record start and completion timestamps
3. Track interruptions and breaks
4. Count revision cycles

### D2: Inter-Rater Agreement

**Definition:** Consistency of outputs across different producers (humans or agent+human pairs).

| Metric | Measurement |
|--------|-------------|
| Cohen's kappa | For categorical outputs (e.g., inhibitor coding) |
| ICC | For continuous outputs (e.g., quality scores) |
| Exact match rate | For structured outputs |

**Protocol:**
1. Multiple producers create outputs for same inputs
2. Blind comparison of outputs
3. Calculate agreement statistics

### D3: Coverage

**Definition:** Completeness of outputs against expected content.

| Metric | Measurement |
|--------|-------------|
| Element coverage | % of expected elements included |
| Depth coverage | Average depth of treatment per element |
| Gap identification | Important omissions noted |

**Protocol:**
1. Define expected elements for each task type
2. Review outputs against expected element list
3. Score coverage and depth
4. Note significant omissions

### D4: Quality

**Definition:** Accuracy and usefulness of outputs.

| Metric | Measurement |
|--------|-------------|
| Factual accuracy | % of verifiable claims that are correct |
| Relevance | Expert rating of output relevance (1-5) |
| Actionability | Expert rating of output usefulness (1-5) |

**Protocol:**
1. Verify factual claims against authoritative sources
2. Expert panel rates relevance and actionability
3. Calculate inter-rater reliability for expert ratings

---

## Evaluation Tasks

### Task 1: Inhibitor Coding

**Input:** Case description (standardised from benchmark set)
**Output:** Coded inhibitors with confidence and evidence

| Dimension | Measurement Approach |
|-----------|---------------------|
| Time | Time to complete coding for one case |
| Agreement | Kappa vs. consensus benchmark coding |
| Coverage | % of tells identified vs. expert identification |
| Quality | Accuracy of coding vs. benchmark |

### Task 2: Literature Review

**Input:** Research question + source list
**Output:** Clustered literature map with gap analysis

| Dimension | Measurement Approach |
|-----------|---------------------|
| Time | Time to complete literature map |
| Agreement | Overlap in cluster assignments |
| Coverage | % of key themes identified |
| Quality | Expert rating of synthesis quality |

### Task 3: Pattern Card Generation

**Input:** Intervention idea
**Output:** Structured pattern card

| Dimension | Measurement Approach |
|-----------|---------------------|
| Time | Time to complete pattern card |
| Agreement | Structural similarity of outputs |
| Coverage | % of required sections completed |
| Quality | Expert rating of practical utility |

---

## Study Design

### Participants

| Condition | Description | n |
|-----------|-------------|---|
| Human-only | Researcher completes task without agent | 5-10 |
| Agent-assisted | Researcher uses agent with human oversight | 5-10 |
| Agent-only | Agent completes task, human reviews only | 5-10 |

### Counterbalancing

- Tasks assigned in randomised order
- Participants do not repeat same task in different conditions
- Order effects controlled through Latin square design

### Controls

- Same instructions provided to all conditions
- Same time limits (or no time limits for time measurement)
- Same access to reference materials
- Same output format requirements

---

## Data Collection

### Per-Task Data

| Data Point | Collection Method |
|------------|-------------------|
| Start time | System timestamp |
| End time | System timestamp |
| Intermediate saves | Version control timestamps |
| Agent interactions | Agent conversation log (agent-assisted only) |
| Self-reported difficulty | Post-task survey |

### Per-Participant Data

| Data Point | Collection Method |
|------------|-------------------|
| Experience level | Pre-study survey |
| Domain expertise | Pre-study survey |
| Agent familiarity | Pre-study survey |
| Condition assignment | Randomisation log |

---

## Analysis Plan

### Primary Analyses

1. **Time comparison:** ANOVA comparing conditions on time-to-output
2. **Agreement comparison:** Chi-square comparing agreement rates
3. **Coverage comparison:** t-test comparing coverage scores
4. **Quality comparison:** Mann-Whitney U for ordinal quality ratings

### Secondary Analyses

1. **Learning effects:** Time trends across tasks
2. **Experience moderators:** Interaction with participant experience
3. **Task difficulty effects:** Variation by task type

### Expected Results

Based on this session's experience:

| Dimension | Human-Only | Agent-Assisted | Agent-Only |
|-----------|------------|----------------|------------|
| Time | Baseline | Faster | Fastest |
| Agreement | Baseline | Similar | Unknown |
| Coverage | Baseline | Higher | Higher |
| Quality | Baseline | Mixed | Lower (needs review) |

---

## Reporting Template

Results will be reported in `/reports/eval_v0.md` with:

1. **Summary statistics:** Time, agreement, coverage, quality by condition
2. **Statistical tests:** Significance tests for condition differences
3. **Effect sizes:** Practical significance indicators
4. **Qualitative observations:** Notable patterns, failure modes
5. **Recommendations:** When to use each approach

---

## Requirements for Execution

- [ ] 10-20 research participants recruited
- [ ] Benchmark cases available for coding tasks
- [ ] Ethics approval for human subjects research
- [ ] Agent interaction logging capability
- [ ] Expert panel for quality ratings (3-5 experts)
- [ ] Statistical analysis tools

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-01-18 | Initial protocol scaffold |


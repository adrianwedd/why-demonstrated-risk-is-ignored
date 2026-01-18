# Skill: Literature Clustering

**Version:** 1.0
**Purpose:** Given a set of papers or sources, group by theme and identify gaps.

---

## Input Specification

### Required

- **Source list:** List of papers, books, or other sources to cluster
- **Research question:** What phenomenon or question is this literature review addressing?

### Optional

- **Pre-defined clusters:** Suggested themes to organise around
- **Focal inhibitor:** Specific inhibitor this literature should relate to
- **Depth:** Quick (3-5 sources/cluster) or Comprehensive (8-12 sources/cluster)

### Input Format

```
RESEARCH QUESTION: [What are you trying to understand?]

SOURCES:
1. [Author(s)] ([Year]). [Title]. [Publication/Publisher]
2. [Author(s)] ([Year]). [Title]. [Publication/Publisher]
...

PRE-DEFINED CLUSTERS (optional):
- [Cluster 1 name]
- [Cluster 2 name]
...

FOCAL INHIBITOR (optional): [Inhibitor this relates to]

DEPTH: [Quick / Comprehensive]
```

---

## Step-by-Step Instructions

### Step 1: First Pass — Identify Themes

Read through the source list and for each source, note:
- Primary topic/phenomenon studied
- Key theoretical framework
- Empirical vs. conceptual vs. review
- Level of analysis (individual, team, organisation, market)

**Checkpoint:** Can you identify 3-5 recurring themes?

### Step 2: Form Clusters

Group sources into thematic clusters. Each cluster should:
- Have a clear, descriptive name
- Contain sources that share theoretical or empirical focus
- Be distinguishable from other clusters

**Guidelines:**
- Aim for 3-6 clusters (too few = too broad; too many = fragmented)
- A source can appear in multiple clusters if it bridges themes
- Create an "Other" cluster for orphans — then examine if they suggest a missing cluster

### Step 3: Analyse Each Cluster

For each cluster, document:

#### Central Claims
What do sources in this cluster agree on? What is the established knowledge?

#### Key Debates
Where do sources in this cluster disagree? What is contested?

#### Methodological Approaches
What methods are commonly used? (Experiments, surveys, case studies, formal models)

#### Explanatory Power
What does this cluster explain well? What phenomena does it illuminate?

#### Gaps
What does this cluster NOT explain? What questions remain unanswered?

### Step 4: Cross-Cluster Analysis

Examine relationships between clusters:

- **Complementary:** Clusters that address different aspects of the same phenomenon
- **Competing:** Clusters that offer alternative explanations
- **Nested:** Clusters at different levels of analysis
- **Bridge sources:** Papers that connect clusters

### Step 5: Identify the Overall Gap

Synthesise cluster-level gaps into a statement of what the combined literature fails to explain. This gap motivates the current work.

**Template:** "While [Cluster A] explains X, [Cluster B] explains Y, and [Cluster C] explains Z, none addresses [the gap]. This work fills that gap by [contribution]."

---

## Output Format

```
## Literature Clustering: [Research Question]

### Cluster Overview

| Cluster | Sources | Central Theme | Level of Analysis |
|---------|---------|---------------|-------------------|
| [Name] | [n] | [Theme] | [Level] |
...

---

### Cluster 1: [Name]

**Key Sources:**
- [Author] ([Year]): [Key contribution in one sentence]
- ...

**Central Claims:**
[What does this cluster establish?]

**Explanatory Power:**
[What does it explain well?]

**Gaps:**
[What doesn't it explain?]

---

### Cluster 2: [Name]
...

---

### Cross-Cluster Analysis

**Complementary Relationships:**
- [Cluster A] and [Cluster B]: [How they complement]

**Tensions:**
- [Cluster A] vs. [Cluster C]: [Where they conflict]

**Bridge Sources:**
- [Source]: Connects [Cluster A] and [Cluster B] by [mechanism]

---

### The Unified Gap

[2-3 paragraph synthesis explaining:
1. What each cluster contributes
2. What remains unexplained
3. How this work addresses the gap]

---

### Confidence Notes

- [Sources that were difficult to cluster]
- [Potential clusters with insufficient sources]
- [Areas where additional literature search would help]
```

---

## Quality Checks

Before finalising output, verify:

- [ ] Each cluster has a clear, descriptive name
- [ ] Central claims are supported by multiple sources
- [ ] Gaps are specific (not just "more research needed")
- [ ] Cross-cluster relationships are analysed
- [ ] The unified gap is specific and motivates the work
- [ ] Confidence notes acknowledge limitations

---

## Known Failure Modes

| Failure Mode | Description | Mitigation |
|--------------|-------------|------------|
| Forcing fit | Assigning sources to clusters they don't belong to | Allow sources to remain unclustered; examine what they suggest |
| Superficial clustering | Grouping by method or field rather than theoretical content | Focus on what each source explains, not where it was published |
| Missing connections | Not seeing how clusters relate | Explicitly analyse cross-cluster relationships |
| Confirmation bias | Clustering to support a pre-determined narrative | Start clustering before reading the "gap" you want to fill |
| Over-generalization | Making gap statements too broad | Gaps should be specific enough to address |
| Citation hallucination | Generating sources that don't exist | Verify all sources are real; acknowledge when working from memory |

---

## Example Application

**Input:**
```
RESEARCH QUESTION: Why do organisations fail to act on safety warnings?

SOURCES:
1. Edmondson (1999). Psychological safety and learning behavior.
2. Vaughan (1996). The Challenger launch decision.
3. Reason (1990). Human error.
4. Weick (1988). Enacted sensemaking in crisis situations.
5. Turner (1978). Man-made disasters.
6. Miceli & Near (1992). Blowing the whistle.
```

**Output (abbreviated):**

| Cluster | Sources | Central Theme |
|---------|---------|---------------|
| Psychological Safety | Edmondson | Team voice dynamics |
| Normalisation of Deviance | Vaughan, Turner, Reason, Weick | Organisational drift |
| Whistleblowing | Miceli & Near | Costs of speaking up |

**The Unified Gap:**
Psychological safety research explains why individuals stay silent at the team level, but doesn't address what happens when they do speak up. Normalisation research explains how warnings are reinterpreted but focuses on latent conditions. Whistleblowing research explains individual costs but focuses on external reporting. None addresses the structural mechanisms by which demonstrated (clear, unambiguous) risk is ignored within organisations.

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-01-19 | Initial draft |


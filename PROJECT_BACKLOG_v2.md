# PROJECT BACKLOG — WHY DEMONSTRATED RISK IS IGNORED (v2)

**Purpose:** Structured research backlog supporting:
- Portfolio development demonstrating systems thinking, operationalization, and research methodology
- Companion artifacts to the canonical essay
- Demonstration of agent-assisted research workflows

**Design principles:**
- Every issue produces a showable artifact
- Dependencies are explicit
- Tiers separate "can do now" from "needs field access"
- Agent assistance is documented, not hidden

---

## DEPENDENCY GRAPH

```
                    ┌─────────────────────────────────────────────────────────┐
                    │                    TIER A: FOUNDATIONS                  │
                    │                  (desktop-completable)                  │
                    └─────────────────────────────────────────────────────────┘

     0.1 Demonstrated Risk Definition ───┬───► 1.1 Contribution Statement
                                         │
     0.2 Action/Ignored Definition ──────┼───► 1.2 Falsifiable Propositions
                                         │
     0.3 Pipeline Model ─────────────────┴───► 2.1 Inhibitor Codebook ⬥ KEYSTONE
                                                        │
                                                        ▼
                                               2.2 Literature Anchoring
                                                        │
                                                        ▼
                                               3.1 Related Work Clusters
                                                        │
                                                        ▼
                                               3.2 Bridge Paragraph

                    ┌─────────────────────────────────────────────────────────┐
                    │                 TIER B: SPECULATIVE DESIGN              │
                    │              (shows thinking, no field data)            │
                    └─────────────────────────────────────────────────────────┘

     4.1 Governance Pattern Cards ◄──── 2.1 Inhibitor Codebook ⬥ KEYSTONE
     4.2 Empirical vs Compliance Pattern
     5.1 Metrics Specification

                    ┌─────────────────────────────────────────────────────────┐
                    │                    TIER C: FUTURE WORK                  │
                    │                  (requires field access)                │
                    └─────────────────────────────────────────────────────────┘

     5.2 Evaluation Designs
     6.1 Research Threat Model
     6.2 Data Handling Architecture
     8.1 Benchmark Case Set
     8.2 Human vs Agent Comparison

                    ┌─────────────────────────────────────────────────────────┐
                    │                  META: AGENT DEMONSTRATION              │
                    │            (runs parallel to Tier A execution)          │
                    └─────────────────────────────────────────────────────────┘

     7.0 Agent Workflow Demonstration ◄──── Any 2-3 Tier A issues
     7.1 Skills Library
     7.2 Guardrail Checklist
     7.3 Confidence Protocol
```

---

## TIER A: FOUNDATIONS (Desktop-Completable)

### Issue 0.1 — Operational Definition: Demonstrated Risk

**Goal:** Eliminate ambiguity in what counts as "demonstrated."

**Depends on:** Nothing (root node)

**Tasks**
- Define evidence thresholds:
  - Reproducibility (can be triggered again)
  - Severity (consequence if exploited)
  - Communicability (can be shown to others)
- Specify exclusions:
  - Speculative/hypothetical risks
  - Risks requiring chain of unlikely events
  - Risks already mitigated by existing controls

**Acceptance Criteria**
- 1–2 page spec with clear decision tree
- Two independent readers classify the same case identically
- Edge cases explicitly handled (partial reproducibility, disputed severity)

**Portfolio Artifact:** `/docs/definitions/demonstrated_risk.md`
Demonstrates: operationalization of fuzzy concepts, measurement thinking

---

### Issue 0.2 — Operational Definition: Action / Ignored / Deferred

**Goal:** Distinguish remediation from avoidance.

**Depends on:** Nothing (root node)

**Tasks**
- Define action states:
  - **Remediated:** Fix shipped, verified effective
  - **Compensating control:** Risk reduced by alternative measure, documented
  - **Explicit acceptance:** Named owner, expiry date, review trigger
- Define non-action states:
  - **Ignored:** No owner, no timeline, no documentation
  - **Deferred without accountability:** "On the roadmap" with no commitment
  - **Committee loop:** Referred to group with no decision authority

**Acceptance Criteria**
- Definition box suitable for verbatim inclusion in paper/presentation
- Each state has observable indicators (what artifacts exist?)
- Distinguishes "we decided not to fix" from "we never decided"

**Portfolio Artifact:** `/docs/definitions/action_states.md`
Demonstrates: precision in organizational analysis, avoiding false equivalences

---

### Issue 0.3 — Truth Flow Pipeline Model

**Goal:** Represent how risk information moves (or stalls) through institutions.

**Depends on:** Nothing (root node)

**Tasks**
- Define pipeline stages:
  1. **Discovery:** Risk becomes known to someone
  2. **Articulation:** Risk is documented in communicable form
  3. **Escalation:** Risk reaches someone with authority
  4. **Triage:** Risk is compared against other priorities
  5. **Decision:** Explicit choice made (fix, accept, defer)
  6. **Outcome:** Action taken, results observed
- For each stage, identify:
  - Stall patterns (what makes risk stop here?)
  - Failure modes (what makes risk disappear here?)
  - Observable artifacts (what evidence exists at this stage?)

**Acceptance Criteria**
- Pipeline diagram (SVG + editable source)
- Every later artifact explicitly references pipeline stage
- Stall patterns map to structural inhibitors from essay

**Portfolio Artifact:** `/docs/models/truth_flow_pipeline.md` + `/assets/pipeline.svg`
Demonstrates: systems modeling, process analysis

---

### Issue 1.1 — Explicit Contribution Statement

**Goal:** Articulate what this work adds beyond description.

**Depends on:** 0.1, 0.2, 0.3

**Tasks**
- Draft 3 contribution claims:
  1. **Explanatory model:** Why organizations ignore demonstrated risk (not just that they do)
  2. **Structural inhibitor taxonomy:** Named, operationalized failure modes
  3. **Intervention patterns:** Actionable governance designs, not just recommendations

**Acceptance Criteria**
- Each claim is quotable without paraphrase
- Each claim distinguishes this work from descriptive case studies
- No claim requires field data to support (grounded in literature + reasoning)

**Portfolio Artifact:** `/docs/contributions.md`
Demonstrates: ability to articulate research value, positioning

---

### Issue 1.2 — Falsifiable Propositions

**Goal:** Convert explanatory model into testable claims.

**Depends on:** 0.1, 0.2, 0.3, 1.1

**Tasks**
- Write 3 propositions, each with:
  - **Mechanism:** What structural feature causes this?
  - **Prediction:** What should we observe if true?
  - **Measurement:** How would we detect this?
  - **Falsifier:** What observation would disprove this?

**Example proposition structure:**
> P1: Organizations with high responsibility-authority separation will show longer time-to-decision for demonstrated risks than organizations with coupled responsibility-authority.
> - Mechanism: Inhibitor #1 (responsibility without authority)
> - Prediction: Time-to-decision correlates with R-A separation score
> - Measurement: Compare matched organizations on time-to-decision metric
> - Falsifier: No correlation, or inverse correlation

**Expected negative results:**
We anticipate that some propositions or patterns will fail under certain conditions. This is not a defect—it is how science works. Specifically:
- Some inhibitors may be context-dependent (e.g., compliance theatre may matter more in regulated industries)
- Some interventions may backfire (e.g., mandatory response triggers could create gaming behaviors)
- Effect sizes may be smaller than expected, or moderated by variables not yet identified

Documenting where the model breaks is as valuable as documenting where it holds.

**Acceptance Criteria**
- Each proposition references pipeline stage + inhibitor
- Each proposition is empirically refutable
- Propositions are independent (not three versions of same claim)
- At least one proposition includes explicit boundary conditions (where it might not hold)

**Portfolio Artifact:** `/docs/propositions.md`
Demonstrates: scientific thinking, falsifiability, operationalization

---

### Issue 2.1 — Structural Inhibitor Codebook ⬥ KEYSTONE ARTIFACT

**Goal:** Enable consistent identification of inhibitors across cases.

**Depends on:** 0.3 (pipeline model)

**Why this is keystone:** This artifact is the bridge between theory and measurement. It operationalizes the essay's core concepts into an instrument others can use. Most downstream work (literature anchoring, pattern cards, metrics) depends on having clear, codable inhibitor definitions. If this artifact is weak, everything built on it inherits that weakness.

**Tasks**
For each of the four inhibitors from the essay:

1. **Responsibility without authority**
2. **Risk discovery as career threat**
3. **Compliance theatre**
4. **Accountability diffusion**

Document:
- **Mechanism:** How does this inhibitor cause risk to stall?
- **Pipeline stage:** Where in the pipeline does this typically block?
- **Organizational tells:** Observable signs this inhibitor is present (≥3)
- **Expected artifacts:** Documents/processes that indicate this inhibitor (≥2)
- **Counterfactual indicators:** What would be different if inhibitor were absent?
- **Interaction effects:** How does this inhibitor combine with others?

**Acceptance Criteria**
- Codebook usable by someone who hasn't read the essay
- Inter-rater reliability achievable (two people code same case similarly)
- Each inhibitor clearly distinguishable from others

**Portfolio Artifact:** `/docs/instruments/inhibitor_codebook.md`
Demonstrates: instrument development, qualitative rigor, operationalization

---

### Issue 2.2 — Literature Anchoring

**Goal:** Ground each inhibitor in established research.

**Depends on:** 2.1 (codebook)

**Tasks**
For each inhibitor:
- Attach 2–4 cornerstone citations
- State what each citation explains
- State what each citation does NOT explain (gap this work fills)
- Note any tensions between sources

**Acceptance Criteria**
- Every inhibitor has explicit evidentiary support
- Citations span multiple disciplines where relevant
- Gap statements are specific, not generic

**Portfolio Artifact:** `/docs/literature/inhibitor_grounding.md`
Demonstrates: literature integration, scholarly rigor

---

### Issue 3.1 — Four-Cluster Related Work Map

**Goal:** Position this work within existing literatures.

**Depends on:** 2.2 (literature anchoring)

**Clusters:**
1. **Psychological safety / voice & silence** (Edmondson, Morrison, Milliken)
2. **Whistleblowing & retaliation** (Near, Miceli, Dozier)
3. **Normalisation of deviance** (Vaughan, Turner, Reason)
4. **Security economics & disclosure incentives** (Anderson, Arora, Schneier)

**Tasks per cluster:**
- Key papers (5-8)
- Central claims
- What this literature explains well
- What it fails to explain (gap)
- How it connects to structural inhibitors

**Acceptance Criteria**
- Each cluster ends with explicit "explains X / fails to explain Y"
- Gaps motivate the unified model
- No cluster is just a reading list

**Portfolio Artifact:** `/docs/literature/related_work_map.md`
Demonstrates: literature synthesis, gap identification

---

### Issue 3.2 — Unifying Bridge Paragraph

**Goal:** Synthesize four literatures into one phenomenon.

**Depends on:** 3.1 (related work map)

**Tasks**
- Write 1-2 paragraphs that:
  - Acknowledge what each literature contributes
  - Identify the common thread (demonstrated risk ignored)
  - Explain why no single literature captures the full phenomenon
  - Motivate the unified socio-technical model

**Acceptance Criteria**
- Paragraph positions immediately before model/framework section
- Reader understands why existing work is insufficient
- No strawmanning of prior literature

**Portfolio Artifact:** `/docs/literature/bridge.md`
Demonstrates: synthesis, argumentation, scholarly positioning

---

### TIER A: Threats to Validity

*Methodological risks acknowledged upfront. This section will be expanded as artifacts are produced.*

**Construct validity risks:**
- "Demonstrated risk" may be operationalized too narrowly (excluding valid cases) or too broadly (including speculative risks)
- Inhibitor definitions may overlap in practice, making clean coding difficult
- "Ignored" vs "deferred" distinction may be hard to observe without internal access

**Selection bias risks:**
- Examples drawn from author's experience may over-represent certain sectors (government, security)
- Publicly available cases may systematically differ from typical organizational behavior
- Memorable failures may not represent base rates

**Interpretation bias risks:**
- Author proximity to the phenomenon may cause motivated reasoning
- Confirmation bias in literature selection (finding sources that agree)
- Agent assistance may introduce systematic blind spots

**Mitigations:**
- Explicit acceptance criteria with inter-rater reliability checks
- Falsifiable propositions with named falsifiers
- Agent guardrails requiring confidence levels and verification steps
- Boundary conditions documented for each claim

**Portfolio Artifact:** `/docs/meta/threats_to_validity.md` (to be expanded)
Demonstrates: methodological self-awareness, scientific humility

---

## TIER B: SPECULATIVE DESIGN (No Field Data Required)

### Issue 4.1 — Governance Pattern Cards

**Goal:** Convert essay recommendations into implementable design patterns.

**Depends on:** 2.1 (inhibitor codebook)

**Tasks**
Create pattern cards for 5-6 interventions (derived from essay's "fixes"):
1. Mandatory response triggers
2. Protected discovery activity
3. Empirical validation requirements
4. No-ignore artifact standards
5. Executive risk acceptance ownership
6. (Optional) Escalation circuit breakers

**Per pattern:**
- **Problem:** What failure mode does this address?
- **Context:** When is this pattern applicable?
- **Forces:** What tensions does the designer face?
- **Solution:** Concrete implementation guidance
- **Evidence requirement:** How do you know it's working?
- **Failure modes:** How can this pattern go wrong?
- **Metrics:** What would you measure?

**Acceptance Criteria**
- Each pattern maps to ≥1 inhibitor
- Patterns are implementable without researcher presence
- Failure modes are specific, not generic

**Portfolio Artifact:** `/docs/patterns/governance_patterns.md`
Demonstrates: design thinking, practical translation of theory

---

### Issue 4.2 — Empirical Validation vs Compliance Pattern

**Goal:** Explicitly distinguish real testing from theatre.

**Depends on:** 4.1

**Tasks**
- Define minimum bar for "empirical validation"
- List what does NOT count (checklist completion, self-attestation, policy existence)
- Provide decision tree for "is this validation or theatre?"

**Acceptance Criteria**
- Explicitly rules out paperwork-only validation
- Usable as organizational self-assessment

**Portfolio Artifact:** `/docs/patterns/empirical_vs_compliance.md`
Demonstrates: precision, anti-theatre stance

---

### Issue 5.1 — Metrics Specification

**Goal:** Define how you'd measure whether interventions work.

**Depends on:** 0.1, 0.2, 4.1

**Outcome Metrics:**
- Time-to-decision (from discovery to explicit decision)
- Time-to-remediation (from decision to verified fix)
- Explicit risk acceptance rate (% of risks with named owner + expiry)
- Risk reoccurrence rate (same risk rediscovered later)

**Process Metrics:**
- Escalation completion rate (% reaching decision stage)
- Evidence quality score (reproducibility + severity + documentation)
- Psychological safety proxy (survey or behavioral indicator)

**Tasks**
- Define each metric precisely
- Specify data sources (what artifacts needed?)
- Note limitations and gaming risks

**Acceptance Criteria**
- Metrics computable from redacted organizational artifacts
- No privileged system access required
- Gaming risks acknowledged

**Portfolio Artifact:** `/docs/evaluation/metrics_spec.md`
Demonstrates: measurement thinking, practical constraints awareness

---

## TIER C: FUTURE WORK (Requires Field Access)

*These issues are scoped but not actionable without organizational access or research participants. Included for completeness and to show research design thinking.*

### Issue 5.2 — Evaluation Designs
**Goal:** Design studies to test propositions.
**Status:** Future work — requires field access
**Sketch:** Pre/post single unit, matched comparison, stepped-wedge rollout

### Issue 6.1 — Research Threat Model
**Goal:** Anticipate risks to participants and researcher.
**Status:** Future work — relevant when field research begins
**Sketch:** Retaliation, legal discovery, reputational harm, accidental disclosure

### Issue 6.2 — Data Handling Architecture
**Goal:** Protect participants without neutering findings.
**Status:** Future work — relevant when collecting data
**Sketch:** Data lifecycle, anonymization strategy, ethics board requirements

### Issue 8.1 — Benchmark Case Set
**Goal:** Establish ground truth for testing instruments.
**Status:** Future work — requires access to real cases
**Sketch:** 10-20 cases with agreed inhibitor labels

### Issue 8.2 — Human vs Agent Comparison
**Goal:** Measure whether agent assistance improves research.
**Status:** Future work — requires baseline human performance data
**Sketch:** Compare time-to-output, inter-rater agreement, coverage

---

## META: AGENT DEMONSTRATION

*This epic runs parallel to Tier A execution. Its purpose is to document how agent assistance was used, creating a meta-artifact that demonstrates human-AI collaboration.*

### Issue 7.0 — Agent Workflow Demonstration

**Goal:** Show that this backlog can be partially executed with agent assistance, documenting what works and what doesn't.

**Depends on:** Any 2-3 Tier A issues being worked

**Tasks**
- Select 2-3 Tier A issues to execute with agent assistance
- For each, document:
  - What prompts/instructions were given
  - What the agent produced
  - Where human judgment was required
  - Failure modes encountered (hallucination, drift, misunderstanding)
  - Final artifact vs. initial agent output
- Produce honest assessment of agent contribution

**Acceptance Criteria**
- Execution log shows real process, not sanitized version
- At least one artifact has clear agent provenance
- Assessment distinguishes "faster" from "better" from "different"

**Portfolio Artifact:** `/docs/meta/agent_execution_log.md`
Demonstrates: practical AI collaboration, honest capability assessment, meta-cognition

---

### Issue 7.1 — Skills Library

**Goal:** Encode research methods as reusable agent prompts.

**Depends on:** 7.0 (lessons from execution)

**Skills to develop:**
- **Inhibitor Coding Skill:** Given a case description, identify which inhibitors are present
- **Literature Clustering Skill:** Given a set of papers, group by theme and identify gaps
- **Pattern Card Generation Skill:** Given an intervention idea, structure as pattern card
- **Proposition Generation Skill:** Given a claim, structure as falsifiable proposition

**Per skill:**
- Input specification
- Step-by-step instructions
- Output format
- Quality checks
- Known failure modes

**Acceptance Criteria**
- `/skills/` contains ≥4 documented skills
- Skills usable by someone else with same agent
- Failure modes derived from actual execution, not speculation

**Portfolio Artifact:** `/skills/*.md`
Demonstrates: method encoding, reproducibility, AI tooling design

---

### Issue 7.2 — Guardrail Checklist

**Goal:** Detect drift and hallucination in agent outputs.

**Depends on:** 7.0, 7.1

**Checklist items:**
- [ ] Output references specific sources (not vague "research shows")
- [ ] Claims include confidence level (high/medium/low)
- [ ] Falsifier identified (what would disprove this?)
- [ ] Next verification step named (cheapest way to check)
- [ ] Scope check passed (output addresses the actual question)
- [ ] No hallucinated citations (sources verified to exist)

**Acceptance Criteria**
- Checklist usable during or after agent execution
- Each item has clear pass/fail criteria

**Portfolio Artifact:** `/docs/meta/guardrail_checklist.md`
Demonstrates: quality control thinking, AI safety mindset

---

### Issue 7.3 — Confidence & Verification Protocol

**Goal:** Enable attention triage for agent outputs.

**Depends on:** 7.2

**Protocol:**
Every agent output includes:
- **Confidence:** High / Medium / Low
- **Rationale:** Why this confidence level?
- **Verification step:** Cheapest way to increase confidence
- **Time estimate:** How long would verification take?

**Acceptance Criteria**
- Protocol documented with examples
- Low-confidence outputs flagged for human review
- Verification steps are actually actionable

**Portfolio Artifact:** `/docs/meta/confidence_protocol.md`
Demonstrates: calibration, efficient human-AI teaming

---

## EXECUTION ORDER (Suggested)

**Phase 1: Foundations**
1. 0.1, 0.2, 0.3 (parallel — no dependencies)
2. 1.1 (needs 0.x)
3. 2.1 (needs 0.3)

**Phase 2: Literature & Propositions**
4. 1.2 (needs 1.1)
5. 2.2 (needs 2.1)
6. 3.1 (needs 2.2)
7. 3.2 (needs 3.1)

**Phase 3: Design Artifacts**
8. 4.1 (needs 2.1)
9. 4.2 (needs 4.1)
10. 5.1 (needs 0.1, 0.2, 4.1)

**Throughout: Agent Documentation**
- 7.0 runs parallel to any Tier A work
- 7.1, 7.2, 7.3 follow from 7.0

---

## AGENT EXECUTION RULES

**All agent outputs MUST include:**
- Scope check: "What issue am I answering?"
- Confidence level: High / Medium / Low
- Falsifier: "What would disprove this?"
- Verification step: "Cheapest way to check"

**Human review required when:**
- Confidence is Low
- Output contradicts prior outputs
- Citations cannot be verified
- Scope drift detected

---

## GITHUB LABELS (for issue import)

```
tier:a-foundations
tier:b-speculative
tier:c-future
epic:definitions
epic:contributions
epic:inhibitors
epic:literature
epic:patterns
epic:evaluation
epic:meta-agent
priority:critical-path
priority:parallel
status:blocked
status:ready
```

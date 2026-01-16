# 📦 PROJECT BACKLOG — WHY DEMONSTRATED RISK IS IGNORED

**Purpose:** Machine-readable, agent-executable research backlog supporting  
(a) conference paper finalisation, and  
(b) PhD-scale empirical program.

**Design principles (from Anthropic research systems):**
- Encode expert method as *skills*, not prose
- Separate tool routing from reasoning
- Require confidence + falsifiability
- Include guardrails against drift
- Evaluate against reality where possible

---

## 🧭 EPIC 0 — CORE CONSTRUCTS & MEASUREMENT SPINE

### Issue 0.1 — Operational Definition: Demonstrated Risk
**Goal:** Eliminate ambiguity in what counts as “demonstrated.”

**Tasks**
- Define evidence thresholds (reproducibility, severity, communicability)
- Specify exclusions (speculative / hypothetical risks)

**Acceptance Criteria**
- 1–2 page spec committed to `/docs/definitions/demonstrated_risk.md`
- Two independent reviewers classify the same case identically

---

### Issue 0.2 — Operational Definition: Action / Ignored / Deferred
**Goal:** Distinguish remediation from avoidance.

**Tasks**
- Define:
  - remediation shipped
  - compensating control
  - explicit risk acceptance (owner + expiry)
- Define ignored states (committee loops, deferral without owner)

**Acceptance Criteria**
- Definition box suitable for verbatim paper inclusion
- Edge cases explicitly handled

---

### Issue 0.3 — Truth Flow Pipeline Model
**Goal:** Represent how risk moves (or stalls) through institutions.

**Tasks**
- Define stages:
  discovery → articulation → escalation → triage → decision → outcome
- Identify stall points and failure modes

**Acceptance Criteria**
- Pipeline diagram (SVG + source)
- Every later artifact references a pipeline stage

---

## 🧠 EPIC 1 — CONTRIBUTIONS & FALSIFIABLE PROPOSITIONS

### Issue 1.1 — Explicit Contribution Statement
**Goal:** Make reviewer understanding effortless.

**Tasks**
- Draft 3 contribution claims:
  1. Explanatory socio-technical model
  2. Structural inhibitor taxonomy
  3. Governance intervention patterns

**Acceptance Criteria**
- Paragraph quotable without paraphrase
- No overlap with purely descriptive prior work

---

### Issue 1.2 — Falsifiable Propositions
**Goal:** Convert insight into testable claims.

**Tasks**
- Write 3 propositions, each with:
  - mechanism
  - observable prediction
  - candidate measurement

**Acceptance Criteria**
- Each proposition references pipeline + inhibitor
- Each proposition is empirically refutable

---

## 🧩 EPIC 2 — STRUCTURAL INHIBITORS AS INSTRUMENT

### Issue 2.1 — Structural Inhibitor Codebook
**Goal:** Enable consistent coding across agents.

**Tasks (per inhibitor)**
- Mechanism description
- Organisational “tells”
- Expected artefacts
- Counterfactual indicators

**Acceptance Criteria**
- ≥3 tells and ≥2 artefacts per inhibitor
- Usable without author intervention

---

### Issue 2.2 — Literature Anchoring
**Goal:** Ground each inhibitor in recognised research.

**Tasks**
- Attach 2–4 cornerstone citations per inhibitor
- State what each explains and what it does not

**Acceptance Criteria**
- Every inhibitor has explicit evidentiary support
- Citations integrated into Related Work outline

---

## 📚 EPIC 3 — RELATED WORK AS MAP

### Issue 3.1 — Four-Cluster Related Work Sections
**Clusters**
1. Psychological safety / voice & silence
2. Whistleblowing & retaliation
3. Normalisation of deviance
4. Security economics & disclosure incentives

**Acceptance Criteria**
- Each cluster ends with: explains X / fails to explain Y
- Each motivates unified model

---

### Issue 3.2 — Unifying Bridge Paragraph
**Goal:** Synthesize literatures into one phenomenon.

**Acceptance Criteria**
- Paragraph motivates socio-technical model
- Positioned immediately before model section

---

## 🛠️ EPIC 4 — GOVERNANCE INTERVENTION PATTERNS

### Issue 4.1 — Governance Pattern Cards
**Goal:** Convert advice into implementable design patterns.

**Tasks (per pattern)**
- Problem, Context, Forces
- Solution
- Evidence requirement
- Failure modes
- Metrics

**Acceptance Criteria**
- 6–10 complete patterns
- Implementable without researcher presence

---

### Issue 4.2 — Empirical Validation vs Compliance Pattern
**Goal:** Prevent compliance theatre.

**Acceptance Criteria**
- Defines minimum empirical testing bar
- Explicitly rules out paperwork-only validation

---

## 📊 EPIC 5 — EVALUATION FRAMEWORK

### Issue 5.1 — Metrics Specification
**Outcome Metrics**
- Time-to-decision
- Time-to-remediation
- Explicit risk acceptance rate

**Process Metrics**
- Escalation closure rate
- Evidence quality score
- Psychological safety proxy

**Acceptance Criteria**
- Metrics computable from redacted artefacts
- No privileged system access required

---

### Issue 5.2 — Evaluation Designs
**Options**
- Pre/post single unit
- Matched units or stepped-wedge rollout

**Acceptance Criteria**
- Threats to validity listed with mitigations
- Ethics risks acknowledged

---

## 🧱 EPIC 6 — ETHICS & RESEARCH SAFETY

### Issue 6.1 — Research Threat Model
**Risks**
- Retaliation
- Legal discovery
- Reputational harm
- Accidental disclosure

**Acceptance Criteria**
- Mitigation for each risk
- Suitable for ethics appendix

---

### Issue 6.2 — Data Handling Architecture
**Goal:** Protect participants without neutering findings.

**Acceptance Criteria**
- Clear data lifecycle documented
- Meets institutional ethics requirements

---

## 🧠 EPIC 7 — AGENTIC RESEARCH SYSTEM (ANTHROPIC-INSPIRED)

### Issue 7.1 — Skills Library
**Goal:** Encode expert method as reusable skills.

**Skills**
- Inhibitor Coding Skill
- Related Work Clustering Skill
- Pattern Card Generation Skill
- Proposition Generation Skill

**Acceptance Criteria**
- `/skills/` contains ≥5 skills
- Each skill defines inputs, steps, outputs, failure modes

---

### Issue 7.2 — Guardrail & QA Checklist
**Goal:** Detect drift and hallucination.

**Acceptance Criteria**
- Checklist enforces:
  - citations
  - confidence level
  - falsifier / next verification step

---

### Issue 7.3 — Confidence & Verification Protocol
**Goal:** Enable attention triage.

**Acceptance Criteria**
- Every agent output includes:
  - confidence (High/Med/Low)
  - rationale
  - cheapest next verification step

---

## 🧪 EPIC 8 — EVALUATION HARNESS (OPTIONAL BUT POWERFUL)

### Issue 8.1 — Benchmark Case Set
**Goal:** Establish ground truth.

**Acceptance Criteria**
- 10–20 cases with agreed labels
- Stored in `/data/benchmark_cases.json`

---

### Issue 8.2 — Human vs Agent Comparison
**Goal:** Measure acceleration and consistency.

**Acceptance Criteria**
- Report comparing:
  - time-to-output
  - coding agreement
- Saved to `/reports/eval_v0.md`

---

## 📦 META — AGENT EXECUTION RULES

**All agent outputs MUST include:**
- Scope check (“what issue am I answering?”)
- Confidence level
- What would falsify this?
- Next cheapest verification step

This backlog is designed to be directly consumable by autonomous or semi-autonomous research agents.

# Governance Intervention Patterns

**Version:** 1.0
**Issue:** #13
**Status:** Draft

---

## Purpose

This document converts essay recommendations into implementable design patterns. Each pattern:

1. **Maps to specific inhibitor(s)** — addresses identified structural failure modes
2. **Is implementable without researcher presence** — concrete enough for practitioners
3. **Includes failure modes** — anticipates how the pattern can go wrong
4. **Has associated metrics** — enables assessment of effectiveness

---

## Pattern 1: Mandatory Response Triggers

### Problem

Demonstrated risks stall at the escalation stage because decision-makers have no forcing function to respond. Risks can be acknowledged, documented, and then indefinitely deferred without explicit rejection.

### Context

Use this pattern when:
- Risk owners can escalate but escalation has no teeth
- Decision forums exist but don't produce decisions
- Risks accumulate in registers without resolution
- Time-to-decision is unbounded

### Forces

| Force | Tension |
|-------|---------|
| Autonomy | Decision-makers want flexibility; triggers constrain autonomy |
| Resource reality | Not all risks can be addressed immediately; some deferral is rational |
| Accountability | Without triggers, accountability is diffuse; with triggers, it's specific |
| Gaming | Too rigid triggers get gamed; too flexible triggers become theatre |

### Solution

**Implement mandatory response triggers with these components:**

1. **Tiered thresholds:** Define risk levels (Critical, High, Medium, Low) with objective criteria
2. **Time-bound response requirement:** Each tier has a maximum time to decision
   - Critical: 24-72 hours
   - High: 1-2 weeks
   - Medium: 1 month
   - Low: Quarterly review
3. **Decision options:** Response must be one of:
   - **Accept:** Explicit acceptance with named owner, risk statement, and review date
   - **Mitigate:** Funded remediation plan with timeline and owner
   - **Transfer:** Risk shifted to third party (insurance, outsourcing) with documentation
   - **Reject:** Challenged classification with evidence (risk is not as stated)
4. **Escalation on non-response:** If no decision within threshold, automatic escalation to next level
5. **Executive ownership:** Critical risks require executive (C-level or board) sign-off on acceptance

**Implementation guidance:**
- Triggers must be tied to existing risk classification systems
- Response clock starts when risk is formally documented (not when discovered)
- "Under investigation" is not a valid response — investigation is mitigation activity
- Acceptance decisions must be renewed periodically (not permanent)

### Inhibitor Mapping

| Inhibitor | How this pattern helps |
|-----------|----------------------|
| Responsibility without authority | Creates forcing function that doesn't depend on risk owner's authority |
| Accountability diffusion | Requires named decision owner, not committee |
| Compliance theatre | Requires substantive response, not just acknowledgement |

### Evidence Requirement

The pattern is working if:
- Time-to-decision metrics decrease
- Backlog of unresolved risks decreases
- Explicit acceptance decisions (with named owners) exist for residual risks
- Escalation events occur (indicating the trigger is being enforced)

### Failure Modes

| Failure Mode | Indicator | Mitigation |
|--------------|-----------|------------|
| Gaming classification | Risks systematically classified below threshold | Independent classification review; calibration exercises |
| Rubber-stamp acceptance | Acceptances issued without genuine review | Acceptance must include risk statement in decision-maker's words |
| Clock manipulation | Response clock reset by trivial actions | Clock only resets on substantive decision, not procedural action |
| Escalation without consequence | Escalation occurs but no action results | Executive sponsor accountability for escalation outcomes |

### Metrics

| Metric | What it measures | Target direction |
|--------|------------------|------------------|
| Mean time to decision (by tier) | Responsiveness | Decrease |
| % risks with named acceptance owner | Accountability clarity | Increase |
| Escalation rate | Trigger enforcement | Moderate (too high = dysfunction; zero = gaming) |
| Acceptance renewal rate | Ongoing attention | Decrease (risks should be mitigated, not perpetually accepted) |

---

## Pattern 2: Protected Discovery Activity

### Problem

Risk discovery is suppressed because discovering and reporting risk creates career liability. Discoverers are associated with the problems they find, and "not knowing" is safer than knowing and documenting.

### Context

Use this pattern when:
- Risk reporters have faced negative consequences
- Verbal risk communication is preferred over documented
- Anonymous reporting channels exist but are unused
- Risk/security/compliance roles have high turnover

### Forces

| Force | Tension |
|-------|---------|
| Accountability | Organisation wants accountability; protection may reduce it |
| Bad faith | Protection mechanisms can be exploited for malicious reports |
| Signal vs. noise | More reports isn't always better; need quality, not just volume |
| Cultural fit | Protection mechanisms feel "bureaucratic" in high-trust cultures |

### Solution

**Implement protected discovery with these components:**

1. **Formal protection policy:**
   - Explicit statement that risk discovery is valued and protected
   - Named individuals cannot be held accountable for outcomes of risks they discover (only for failing to report)
   - Retaliation for good-faith reporting is a terminable offense

2. **Structural separation:**
   - Risk discovery roles report to independent function (not to teams they assess)
   - Performance evaluation excludes "negative" perception from risk findings
   - Career progression paths that value discovery (not just delivery)

3. **Anonymous channel:**
   - Genuinely anonymous reporting mechanism (not just confidential)
   - Regular communication that channel exists and is monitored
   - Published statistics on reports and outcomes (without identifying reporters)

4. **Good-faith standard:**
   - Protection applies to good-faith reports, not malicious ones
   - Good faith = reasonable belief risk is real, regardless of whether it turns out to be
   - Bad faith must be proven, not assumed

5. **Discovery incentives:**
   - Recognition programs for valuable risk discoveries
   - Risk discovery metrics in performance review (positive, not negative)
   - Career examples of people promoted after discovery

**Implementation guidance:**
- Protection must be demonstrated, not just stated (visible support for past reporters)
- Anonymous channel must be technically anonymous (not just policy anonymous)
- Good-faith standard must protect reasonable mistakes
- Incentives must be meaningful, not token

### Inhibitor Mapping

| Inhibitor | How this pattern helps |
|-----------|----------------------|
| Risk discovery as career threat | Directly addresses by removing negative career consequences |
| Responsibility without authority | Discoverers are protected from accountability for outcomes they can't control |

### Evidence Requirement

The pattern is working if:
- Documented risk reports increase (formal articulation)
- Anonymous channel usage is non-zero (suggests it's trusted)
- Turnover in risk roles decreases
- No retaliation incidents (or incidents are visibly addressed)

### Failure Modes

| Failure Mode | Indicator | Mitigation |
|--------------|-----------|------------|
| Weaponised reporting | Reports used to harm individuals, not address risk | Good-faith standard; investigation of bad-faith reports |
| Paper protection | Policy exists but culture remains punitive | Leadership behaviour modelling; retaliation consequences enforced |
| Signal flooding | Volume increases but quality decreases | Triage process; feedback to reporters on quality |
| Protection as excuse | "I reported it" becomes excuse for inaction | Protection covers discovery, not remediation responsibilities |

### Metrics

| Metric | What it measures | Target direction |
|--------|------------------|------------------|
| Documented risk reports per period | Discovery rate | Increase |
| Anonymous vs. named report ratio | Trust in protection | Decrease (more comfort naming) |
| Turnover in risk roles | Role attractiveness | Decrease |
| Retaliation incidents | Culture change | Zero |

---

## Pattern 3: Empirical Validation Requirements

### Problem

Assurance artifacts (policies, attestations, certifications) substitute for empirical verification of actual control effectiveness. The map is mistaken for the territory.

### Context

Use this pattern when:
- "We have a policy" is treated as equivalent to "we are protected"
- Self-attestation is the primary evidence for control effectiveness
- External certifications coexist with known unaddressed risks
- Audit findings recur across cycles without remediation

### Forces

| Force | Tension |
|-------|---------|
| Cost | Empirical testing is expensive; attestation is cheap |
| Expertise | Empirical testing requires skills; attestation requires process |
| Disruption | Testing may disrupt operations; attestation doesn't |
| False confidence | Testing may reveal problems stakeholders don't want to see |

### Solution

**Implement empirical validation with these components:**

1. **Tiered validation requirements:**
   - Critical controls: Annual adversarial testing (red team, penetration test)
   - High controls: Annual technical validation (automated testing, configuration review)
   - Medium controls: Biennial evidence review (artifacts beyond attestation)
   - Low controls: Attestation acceptable with sampling

2. **Independent testing:**
   - Testing conducted by parties with incentive to find problems
   - Internal testing acceptable if function is independent and incentivised
   - External testing for critical controls

3. **Demonstrated risk precedence:**
   - When demonstrated risk contradicts compliance status, demonstrated risk governs
   - "We're certified" is not a valid response to demonstrated vulnerability
   - Demonstrated risks trigger re-validation of related controls

4. **Evidence hierarchy:**
   - Level 1: Adversarial validation (red team found/didn't find)
   - Level 2: Technical validation (automated test passed/failed)
   - Level 3: Evidence review (artifacts demonstrate control)
   - Level 4: Attestation (management states control exists)
   - Critical controls require Level 1-2; attestation alone insufficient

5. **Verification gap tracking:**
   - Track gap between self-assessed and empirically validated control effectiveness
   - Report gap metrics to governance forums
   - Trend analysis of verification gaps over time

**Implementation guidance:**
- Start with critical controls; expand coverage over time
- Testing must be designed to find problems, not confirm compliance
- Testers must have access and authorisation equivalent to threats
- Results must flow to decision-makers, not just compliance functions

### Inhibitor Mapping

| Inhibitor | How this pattern helps |
|-----------|----------------------|
| Compliance theatre | Requires empirical evidence, not just documentation |
| Accountability diffusion | Testing results create clear facts for decision-makers |

### Evidence Requirement

The pattern is working if:
- Testing coverage increases for critical controls
- Verification gap (self-assessed vs. tested) decreases over time
- Demonstrated risks are addressed before compliance artifacts conflict
- Audit findings decrease (problems found in testing, not audit)

### Failure Modes

| Failure Mode | Indicator | Mitigation |
|--------------|-----------|------------|
| Testing theatre | Tests designed to pass, not to find problems | Independent test design; rotating testers |
| Scope limitation | Testing covers narrow scope, leaving gaps | Risk-based scope; coverage metrics |
| Results suppression | Testing results not shared with decision-makers | Mandatory reporting to governance forums |
| Cost avoidance | Testing budgets cut, attestation substituted | Testing budget tied to risk tier, not discretionary |

### Metrics

| Metric | What it measures | Target direction |
|--------|------------------|------------------|
| % critical controls with adversarial testing | Coverage | Increase to 100% |
| Mean verification gap | Accuracy of self-assessment | Decrease |
| Testing findings remediation rate | Responsiveness | Increase |
| Recurrent audit findings | Underlying problem resolution | Decrease |

---

## Pattern 4: No-Ignore Artifact Standards

### Problem

Risk documentation can be created, acknowledged, and then ignored without creating accountability. Risk registers become graveyards; findings reports become shelfware.

### Context

Use this pattern when:
- Risk registers exist but entries persist across cycles
- Assessment reports are produced but not acted upon
- "Accept" is used as a catch-all for "ignore"
- Historical risks resurface after incidents

### Forces

| Force | Tension |
|-------|---------|
| Documentation burden | More artifact requirements create overhead |
| Decision fatigue | Requiring action on every artifact overwhelms decision-makers |
| Flexibility | Some risks should be deferred; rigid standards prevent this |
| Gaming | Any standard can be gamed with sufficient effort |

### Solution

**Implement no-ignore artifact standards with these components:**

1. **Artifact lifecycle requirements:**
   - Every risk artifact has a defined lifecycle: Created → Reviewed → Decided → Closed/Accepted
   - Artifacts cannot be closed without decision record
   - "No decision" after threshold time = escalation (link to Pattern 1)

2. **Decision traceability:**
   - Every risk artifact links to decision record
   - Decision record includes: decision type, rationale, owner, date, review date
   - Rationale must be substantive (not "accepted" without explanation)

3. **Acceptance hygiene:**
   - Risk acceptance requires:
     - Named individual owner (not team or committee)
     - Written risk statement (what could happen)
     - Justification (why acceptance is appropriate)
     - Review date (when acceptance will be reconsidered)
     - Business context (what objective requires accepting this risk)
   - Acceptances expire; perpetual acceptance is not valid

4. **Audit trail:**
   - Artifact state changes are logged
   - Decision records are immutable (append-only)
   - Historical decisions are queryable for pattern analysis

5. **Governance visibility:**
   - Regular reporting on artifact lifecycle metrics
   - Aging analysis of open items
   - Pattern analysis of acceptance decisions

**Implementation guidance:**
- Standards apply to all risk artifacts, not just those in the "official" register
- Integration with existing GRC tooling required
- Automation reduces burden of compliance
- Focus on substantive decisions, not procedural completeness

### Inhibitor Mapping

| Inhibitor | How this pattern helps |
|-----------|----------------------|
| Compliance theatre | Requires substantive decisions, not just documentation |
| Accountability diffusion | Named ownership for every decision |
| Responsibility without authority | Decision-forcing through lifecycle requirements |

### Evidence Requirement

The pattern is working if:
- Artifact aging decreases (items don't persist indefinitely)
- Decision records are substantive (not pro forma)
- Acceptance decisions have named owners
- Recurrence rate decreases (issues stay addressed)

### Failure Modes

| Failure Mode | Indicator | Mitigation |
|--------------|-----------|------------|
| Bureaucratic compliance | Forms completed but decisions still not real | Audit of decision quality, not just presence |
| Acceptance inflation | Everything is "accepted" to clear the queue | Acceptance owner accountability for outcomes |
| Artifact proliferation | More artifacts, same problems | Consolidation and deduplication requirements |
| Lifecycle gaming | Items closed and reopened to reset clock | Artifact continuity tracking |

### Metrics

| Metric | What it measures | Target direction |
|--------|------------------|------------------|
| Mean artifact age | Timeliness of resolution | Decrease |
| % items with substantive decision | Decision quality | Increase |
| Acceptance concentration | Accountability distribution | Disperse (not concentrated in one owner) |
| Recurrence rate | Durability of resolution | Decrease |

---

## Pattern 5: Executive Risk Acceptance Ownership

### Problem

Risk acceptance decisions are made at levels that don't bear the consequences. Junior staff "accept" risks that could harm the enterprise. Accountability for risk acceptance is diffuse or absent.

### Context

Use this pattern when:
- Risk acceptance authority is unclear or delegated too low
- Acceptances are made by process, not by individuals
- Executives are surprised by risks that were "accepted" below them
- No one is accountable when accepted risks materialise

### Forces

| Force | Tension |
|-------|---------|
| Executive bandwidth | Executives can't review every risk; delegation is necessary |
| Speed | Requiring executive approval slows decision-making |
| Accountability | Too much delegation means executives don't know what they own |
| Bureaucracy | Approval chains create process burden |

### Solution

**Implement executive risk acceptance ownership with these components:**

1. **Tiered acceptance authority:**
   - Critical risks: Executive (C-level or board) acceptance required
   - High risks: Senior leadership (VP/Director) acceptance required
   - Medium risks: Department head acceptance acceptable
   - Low risks: Manager-level acceptance acceptable

2. **Named individual requirement:**
   - Acceptance must be by named individual, not committee or team
   - Individual must have authority commensurate with risk level
   - Individual must understand and personally sign acceptance

3. **Acceptance packet:**
   - Risk statement in plain language (what could happen)
   - Likelihood and impact assessment
   - Mitigation options considered and why rejected
   - Business justification for acceptance
   - Review timeline
   - Signature of accepting individual

4. **Accountability linkage:**
   - Accepting individual is accountable if risk materialises
   - Accountability is explicit in the acceptance
   - "I accept this risk and am accountable for this decision"

5. **Reporting to governance:**
   - All critical/high acceptances reported to board/risk committee
   - Acceptance decisions are reviewed for appropriateness
   - Patterns of acceptance are analysed (concentration, frequency)

**Implementation guidance:**
- Acceptance authority matrix must be documented and communicated
- Signatures must be genuine (not delegated or rubber-stamped)
- Accountability is for the decision quality, not the outcome per se
- Reviews should check that acceptors understood what they signed

### Inhibitor Mapping

| Inhibitor | How this pattern helps |
|-----------|----------------------|
| Accountability diffusion | Named individual ownership, not committee |
| Responsibility without authority | Ensures acceptor has authority to accept |
| Compliance theatre | Substantive acceptance process, not just checkbox |

### Evidence Requirement

The pattern is working if:
- Critical/high acceptances have executive signatures
- Acceptors can articulate what they accepted (not just signed)
- No "surprise" materialised risks that were previously accepted without executive knowledge
- Acceptance authority is exercised at appropriate levels

### Failure Modes

| Failure Mode | Indicator | Mitigation |
|--------------|-----------|------------|
| Rubber-stamping | Executive signs without review | Random audit of executive understanding |
| Risk inflation | Risks over-classified to avoid executive review | Classification review; calibration |
| Delegation circumvention | Lower-level acceptance on risks that should escalate | Post-hoc review of acceptance decisions |
| Accountability without authority | Executive asked to accept risks they can't mitigate | Ensure acceptance is genuine choice, not fait accompli |

### Metrics

| Metric | What it measures | Target direction |
|--------|------------------|------------------|
| % critical risks with executive acceptance | Authority alignment | 100% |
| Acceptor recall rate | Decision quality | High (acceptors remember what they signed) |
| Authority level vs. risk level alignment | Process compliance | High correlation |
| Materialised risk attribution | Accountability functioning | Attribution possible |

---

## Pattern 6: Escalation Circuit Breakers

### Problem

Escalation paths exist on paper but don't produce decisions. Risks can be escalated indefinitely without reaching a decision-maker with authority and will to act.

### Context

Use this pattern when:
- Escalation procedures exist but escalated items aren't resolved
- Escalation goes "around the organisation" without landing
- Senior leaders defer to each other; no one makes final call
- Risks return to original level after "escalation"

### Forces

| Force | Tension |
|-------|---------|
| Hierarchy | Escalation respects hierarchy; circuit breakers bypass it |
| Relationships | Bypassing hierarchy damages working relationships |
| False positives | Triggering circuit breaker on non-critical issues creates noise |
| Authority | Circuit breaker target must have genuine authority |

### Solution

**Implement escalation circuit breakers with these components:**

1. **Escalation path with endpoint:**
   - Every escalation path has a defined endpoint (not infinite loop)
   - Endpoint is an individual with authority to make final decision
   - Endpoint is documented and communicated

2. **Time-bound escalation:**
   - Each escalation level has a maximum hold time
   - If not resolved within time, automatic escalation to next level
   - Time bounds decrease as level increases (senior levels decide faster)

3. **Circuit breaker trigger:**
   - If risk has been escalated N times without decision, circuit breaker triggers
   - Circuit breaker goes directly to ultimate decision authority (e.g., CEO, board)
   - Circuit breaker is logged and reported

4. **Decision requirement:**
   - Once circuit breaker triggers, decision is mandatory
   - Decision must be made within defined timeframe (e.g., 72 hours)
   - "Needs more analysis" is not a decision; analysis is time-boxed

5. **Accountability for escalation failure:**
   - If circuit breaker triggers, investigation of why normal escalation failed
   - Repeated escalation failures to same level/role indicate structural problem
   - Escalation failure patterns reported to governance

**Implementation guidance:**
- Circuit breaker should be rare (indicates system failure, not normal operation)
- Circuit breaker target must be unambiguously authorised to decide
- Circuit breaker is not a shortcut for normal escalation
- Triggers should be logged and analysed for process improvement

### Inhibitor Mapping

| Inhibitor | How this pattern helps |
|-----------|----------------------|
| Accountability diffusion | Creates ultimate decision point |
| Responsibility without authority | Bypass path when normal authority is insufficient |

### Evidence Requirement

The pattern is working if:
- Circuit breaker rarely triggers (normal escalation works)
- When triggered, decisions are made within timeframe
- Escalation failures are investigated and addressed
- Risks don't "bounce" indefinitely between levels

### Failure Modes

| Failure Mode | Indicator | Mitigation |
|--------------|-----------|------------|
| Overuse | Circuit breaker triggers frequently | Investigate normal escalation path dysfunction |
| Target bypass | Circuit breaker target delegates decision back down | Target accountability for decision |
| False triggers | Non-critical items trigger circuit breaker | Threshold criteria for trigger eligibility |
| Political retaliation | Those who trigger circuit breaker face consequences | Protection for good-faith escalation |

### Metrics

| Metric | What it measures | Target direction |
|--------|------------------|------------------|
| Circuit breaker trigger rate | Escalation path health | Low (near zero) |
| Time from trigger to decision | Circuit breaker effectiveness | Short |
| Escalation bounce rate | Normal path functionality | Decrease |
| Repeated escalation failures by level | Structural dysfunction | Identify and address |

---

## Pattern Interaction Matrix

Patterns work together. This matrix shows how patterns reinforce each other:

| | P1: Triggers | P2: Protected | P3: Empirical | P4: No-Ignore | P5: Executive | P6: Circuit |
|---|---|---|---|---|---|---|
| **P1: Mandatory Response Triggers** | — | Enables: triggers create safe space for discovery | Enables: triggers force validation decisions | Implements: triggers are artifact lifecycle rules | Enables: triggers escalate to executive | Enables: triggers feed escalation path |
| **P2: Protected Discovery** | Depends: protection is meaningless without response | — | Enables: protection encourages honest validation | Enables: protection encourages substantive documentation | Depends: executive must model protection | Enables: discovery that triggers escalation is protected |
| **P3: Empirical Validation** | Depends: validation without decision forcing is theatre | Enables: validation findings need protection | — | Depends: validation creates artifacts that must not be ignored | Depends: executives must accept validation findings | Enables: validation findings can trigger escalation |
| **P4: No-Ignore Artifacts** | Implements: artifact rules enforce triggers | Depends: documentation needs protection | Implements: validation creates artifacts | — | Depends: acceptances need executive ownership | Implements: artifact lifecycle includes escalation |
| **P5: Executive Ownership** | Implements: executive is trigger endpoint | Models: executive protection of discoverers | Consumes: validation findings for decisions | Consumes: artifacts for acceptance decisions | — | Is: ultimate circuit breaker target |
| **P6: Circuit Breakers** | Implements: circuit breaker is ultimate trigger | Depends: escalation needs protection | Enables: validation failures can trigger circuit | Implements: artifact lifecycle includes circuit breaker | Consumes: executive as ultimate authority | — |

---

## Implementation Sequencing

Recommended implementation order based on dependencies:

1. **Phase 1: Foundation**
   - P2 (Protected Discovery) — enables honest input to the system
   - P4 (No-Ignore Artifacts) — creates the documentation infrastructure

2. **Phase 2: Decision Forcing**
   - P1 (Mandatory Response Triggers) — creates time pressure for decisions
   - P5 (Executive Ownership) — establishes authority for decisions

3. **Phase 3: Verification**
   - P3 (Empirical Validation) — ensures decisions are based on reality
   - P6 (Circuit Breakers) — handles escalation failures

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-01-19 | Initial draft |


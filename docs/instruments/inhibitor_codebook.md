# Structural Inhibitor Codebook

**Version:** 1.0
**Issue:** #7 (Keystone)
**Status:** Draft

---

## Purpose

This codebook enables consistent identification and coding of structural inhibitors across organizational cases. It is designed to be:

1. **Usable without reading the source essay** — definitions are self-contained
2. **Reliable** — two independent coders should classify the same case similarly
3. **Discriminating** — each inhibitor is clearly distinguishable from the others

---

## How to Use This Codebook

When analysing a case where demonstrated risk was not acted upon:

1. Review the evidence (documents, interviews, artifacts)
2. For each inhibitor, check the **organizational tells**
3. If ≥2 tells are present, look for **expected artifacts**
4. If artifacts confirm, code the inhibitor as **present**
5. Note any **interaction effects** with other inhibitors
6. Record confidence level (High/Medium/Low) based on evidence strength

**Multiple inhibitors can be present in the same case.** They often co-occur and reinforce each other.

---

## Inhibitor 1: Responsibility Without Authority

### Definition

Individuals or roles are assigned accountability for risk outcomes (e.g., "security," "compliance," "data governance") but lack the power to:
- Control budgets
- Set priorities
- Approve deployments
- Compel action from other teams
- Escalate with consequences

**Core dynamic:** The person who finds the risk cannot make it get fixed.

### Pipeline Stage

**Primary:** Escalation, Outcome

Risk stalls because the discoverer can escalate, but escalation has no teeth. Or a decision is made, but the implementer cannot actually deploy.

### Organizational Tells

| Tell | What to look for |
|------|------------------|
| **Separated reporting lines** | Risk function reports to different executive than the teams they assess |
| **Advisory-only mandate** | Role is explicitly "advisory" or "consultative" — can recommend, not require |
| **No budget control** | Risk owner cannot allocate funds to remediation |
| **Ticket-based influence only** | The only mechanism for action is raising tickets that others can deprioritise |
| **Escalation goes nowhere** | Escalation path exists on paper but has no decision-forcing mechanism |
| **"Dotted line" accountability** | Risk owner has responsibility on org chart but no direct authority |

**Minimum for coding:** ≥2 tells present

### Expected Artifacts

| Artifact | Description |
|----------|-------------|
| **Backlogs of unactioned findings** | Ticket queues, risk registers, or audit findings that persist across cycles |
| **Escalation records without resolution** | Emails, meeting minutes, or briefings that show escalation but no subsequent action |
| **Role descriptions with responsibility/authority mismatch** | Job descriptions or charters that assign accountability without decision power |
| **Repeated re-raising** | Evidence of the same risk being escalated multiple times |

**Minimum for confirmation:** ≥1 artifact present

### Counterfactual Indicators

If this inhibitor were absent, you would see:
- Risk owners with budget authority for remediation
- Escalation paths with defined SLAs and consequences
- Risk decisions made by the same person/team that found the risk
- Tickets closed by action, not by deprioritisation

### Interaction Effects

| With | Effect |
|------|--------|
| **Accountability diffusion** | Amplifies: unclear who *should* have authority makes the gap invisible |
| **Risk discovery as career threat** | Amplifies: discoverer has responsibility for outcomes they can't control — moral injury |
| **Compliance theatre** | Enables: risk function can tick boxes without power to ensure substance |

### Coding Decision Tree

```
Is there a designated risk owner/function?
    │
    YES
    │
    ▼
Does that owner control budget, priorities, or deployment?
    │
    ├── YES → Inhibitor NOT present
    │
    └── NO → Does escalation have decision-forcing power?
                │
                ├── YES → Inhibitor NOT present
                │
                └── NO → Inhibitor PRESENT
```

---

## Inhibitor 2: Risk Discovery as Career Threat

### Definition

The organizational environment treats discovering and reporting risk as creating liability rather than value. Individuals who surface demonstrated risk are:
- Seen as "negative" or "not team players"
- Associated with the problems they find
- Exposed to retaliation, formal or informal
- Incentivised to not know, not document, not escalate

**Core dynamic:** The safest career move is ignorance.

### Pipeline Stage

**Primary:** Discovery, Articulation, Decision

Risk stalls because:
- Discoverers self-censor (don't pursue what they notice)
- Articulators avoid creating traceable records
- Decision-makers avoid decisions that create documented liability

### Organizational Tells

| Tell | What to look for |
|------|------------------|
| **Messenger association** | People who raised past risks were blamed for delays or costs |
| **No safe reporting channel** | No anonymous or protected way to report concerns |
| **Retaliation history** | Past instances where risk reporters faced negative consequences |
| **"Shoot the messenger" culture** | Expressed or implied norm that bad news reflects poorly on bearer |
| **Career risk for documentation** | Creating written records of risk is seen as "covering your ass" negatively |
| **Incentives for silence** | Performance rewards tied to project success (not risk identification) |

**Minimum for coding:** ≥2 tells present

### Expected Artifacts

| Artifact | Description |
|----------|-------------|
| **Verbal-only risk communication** | Evidence that risks were discussed but not documented |
| **Anonymous reports** | Risk surfaces through anonymous channels (suggests named reporting is unsafe) |
| **Post-hoc blame documentation** | Records showing risk discoverers were held responsible for outcomes |
| **High turnover in risk roles** | Risk/security/compliance functions have unusual attrition |

**Minimum for confirmation:** ≥1 artifact present

### Counterfactual Indicators

If this inhibitor were absent, you would see:
- Named risk reports without fear of attribution
- Reward structures that value early risk identification
- Career advancement for people who surface and resolve risks
- Protected reporting mechanisms that are actually used

### Interaction Effects

| With | Effect |
|------|--------|
| **Responsibility without authority** | Amplifies: being accountable without power means blame without agency |
| **Accountability diffusion** | Enables: in diffuse accountability, messenger is the only clear target |
| **Compliance theatre** | Enables: easier to check boxes than to surface real findings |

### Coding Decision Tree

```
Have risk reporters faced negative consequences?
    │
    ├── YES → Inhibitor PRESENT (high confidence)
    │
    └── NO / UNKNOWN
            │
            ▼
        Are there protected reporting channels?
            │
            ├── YES, and used → Inhibitor likely NOT present
            │
            └── NO, or unused → Are there other tells (≥2)?
                                    │
                                    ├── YES → Inhibitor PRESENT
                                    │
                                    └── NO → Inhibitor NOT present (or insufficient evidence)
```

---

## Inhibitor 3: Compliance Theatre

### Definition

The organization substitutes assurance artifacts (policies, checklists, attestations, certifications) for empirical verification of actual security/risk state. The existence of process documentation is treated as equivalent to effective risk management.

**Core dynamic:** The map is mistaken for the territory.

### Pipeline Stage

**Primary:** Triage, Decision, Outcome

Risk stalls because:
- At triage: risk doesn't fit existing compliance categories, so it's not "real"
- At decision: checking boxes counts as deciding
- At outcome: verification is documentary, not empirical

### Organizational Tells

| Tell | What to look for |
|------|------------------|
| **Policy-as-protection** | "We have a policy for that" is treated as resolution |
| **Attestation over testing** | Self-certification or management attestation substitutes for technical validation |
| **Audit-driven priorities** | Risk priorities determined by audit scope, not actual threat |
| **Certificate worship** | External certifications (ISO, SOC2) treated as proof of security |
| **Risk register as talisman** | Risk register exists but entries don't drive action |
| **Training completion as control** | "100% training completion" cited as evidence of risk mitigation |

**Minimum for coding:** ≥2 tells present

### Expected Artifacts

| Artifact | Description |
|----------|-------------|
| **Policies without enforcement** | Written policies that are not operationally followed |
| **Checkbox assessments** | Risk assessments with yes/no answers and no evidence requirements |
| **Disconnected controls** | Documented controls that don't map to demonstrated vulnerabilities |
| **Audit findings without action** | Audit/assessment findings that recur across cycles |
| **Certification without substance** | External certifications coexisting with known, unaddressed risks |

**Minimum for confirmation:** ≥1 artifact present

### Counterfactual Indicators

If this inhibitor were absent, you would see:
- Controls validated by empirical testing (red team, penetration testing)
- Risk assessments requiring evidence, not attestation
- Audit findings tied to mandatory remediation timelines
- Demonstrated risks taking precedence over compliance categories

### Interaction Effects

| With | Effect |
|------|--------|
| **Responsibility without authority** | Enables: theatre is cheap and doesn't require cross-functional power |
| **Accountability diffusion** | Enables: theatre provides cover for everyone without requiring anyone to decide |
| **Risk discovery as career threat** | Enables: theatre is safer than surfacing real findings |

### Coding Decision Tree

```
Are risk decisions based on empirical evidence (testing, validation)?
    │
    ├── YES → Inhibitor likely NOT present
    │
    └── NO → Are decisions based on documentation/attestation?
                │
                ├── YES → Are documented controls actually effective?
                │           │
                │           ├── YES (verified) → Inhibitor NOT present
                │           │
                │           └── NO / UNVERIFIED → Inhibitor PRESENT
                │
                └── NO → Insufficient evidence
```

---

## Inhibitor 4: Accountability Diffusion

### Definition

Responsibility for risk decisions is spread across multiple parties such that no single individual or role has clear ownership. This creates a situation where:
- Everyone is partially responsible
- No one is fully accountable
- Decisions require consensus that never forms
- Escalation has no clear endpoint

**Core dynamic:** Everybody's problem is nobody's job.

### Pipeline Stage

**Primary:** Escalation, Triage, Decision

Risk stalls because:
- At escalation: unclear who has authority to act
- At triage: prioritisation is distributed, no single owner
- At decision: committee dynamics prevent individual accountability

### Organizational Tells

| Tell | What to look for |
|------|------------------|
| **Committee decision-making** | Risk decisions require board/committee approval with no individual owner |
| **RACI confusion** | Multiple "accountable" parties, or "accountable" is a team not a person |
| **Referral chains** | Risk bounces between teams/groups without landing |
| **Consensus requirements** | Decisions require agreement from parties with different incentives |
| **Ownership gaps** | "That's not my area" is a common response |
| **Shared accountability** | Risk ownership assigned to multiple teams jointly |

**Minimum for coding:** ≥2 tells present

### Expected Artifacts

| Artifact | Description |
|----------|-------------|
| **Meeting minutes without decisions** | Meetings where risk is discussed but no decision is recorded |
| **Referral emails** | Email chains showing risk forwarded between parties |
| **RACI charts with multiple A's** | Accountability matrices with shared accountability |
| **Unowned backlog items** | Tickets assigned to teams or roles, not individuals |
| **Repeated "further analysis needed"** | Decision deferred for more information, repeatedly |

**Minimum for confirmation:** ≥1 artifact present

### Counterfactual Indicators

If this inhibitor were absent, you would see:
- Single-person ownership for risk decisions
- Clear escalation endpoints with decision authority
- RACI with one "A" per risk
- Decision records with individual signatures

### Interaction Effects

| With | Effect |
|------|--------|
| **Responsibility without authority** | Creates: if authority is diffuse, no one has it |
| **Risk discovery as career threat** | Amplifies: diffusion makes messenger the only clear target |
| **Compliance theatre** | Enables: theatre provides shared cover without requiring anyone to own outcomes |

### Coding Decision Tree

```
Is there a single individual accountable for this risk decision?
    │
    ├── YES → Inhibitor NOT present
    │
    └── NO → Is accountability assigned to a group/committee?
                │
                ├── YES → Does the group have decision authority and quorum?
                │           │
                │           ├── YES, and decides → Inhibitor NOT present
                │           │
                │           └── NO, or defers → Inhibitor PRESENT
                │
                └── NO → Is accountability unassigned?
                            │
                            └── YES → Inhibitor PRESENT
```

---

## Differential Diagnosis

When coding is ambiguous, use this table to distinguish between inhibitors:

| Question | If YES, suggests |
|----------|------------------|
| Does someone have accountability but lack power to act? | Responsibility without authority |
| Are there negative consequences for surfacing risk? | Risk discovery as career threat |
| Are assurance artifacts substituting for empirical validation? | Compliance theatre |
| Is accountability spread across multiple parties with no single owner? | Accountability diffusion |

### Common Confusion Pairs

**Responsibility without authority vs. Accountability diffusion:**
- If there IS a designated owner who lacks power → Responsibility without authority
- If there is NO clear designated owner → Accountability diffusion

**Compliance theatre vs. Risk discovery as career threat:**
- If the organization documents risks but doesn't act → Compliance theatre
- If the organization avoids documenting risks → Risk discovery as career threat

---

## Coding Summary Sheet

For each case, record:

| Inhibitor | Present? | Confidence | Key Evidence |
|-----------|----------|------------|--------------|
| 1. Responsibility without authority | Y/N | H/M/L | |
| 2. Risk discovery as career threat | Y/N | H/M/L | |
| 3. Compliance theatre | Y/N | H/M/L | |
| 4. Accountability diffusion | Y/N | H/M/L | |

**Confidence levels:**
- **High:** ≥3 tells + ≥2 artifacts
- **Medium:** ≥2 tells + ≥1 artifact
- **Low:** ≥2 tells, artifacts unclear

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-01-16 | Initial draft |

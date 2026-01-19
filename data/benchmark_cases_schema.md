# Benchmark Case Set Schema

**Version:** 1.0
**Issue:** #19
**Status:** Scaffold (Future Work)

---

## Purpose

This document defines the schema for benchmark cases that will be used to establish ground truth for testing the inhibitor coding instrument. The actual cases require field access and cannot be created without real organisational data.

---

## Schema Definition

### Case Record Structure

```json
{
  "case_id": "string",
  "metadata": {
    "source_type": "enum",
    "collection_date": "date",
    "industry": "string",
    "org_size": "enum",
    "region": "string"
  },
  "case_description": {
    "risk_summary": "string",
    "timeline": "string",
    "outcome": "string",
    "evidence_available": ["string"]
  },
  "coding": {
    "inhibitor_1_rwa": {
      "present": "boolean",
      "confidence": "enum",
      "evidence": "string"
    },
    "inhibitor_2_career_threat": {
      "present": "boolean",
      "confidence": "enum",
      "evidence": "string"
    },
    "inhibitor_3_compliance_theatre": {
      "present": "boolean",
      "confidence": "enum",
      "evidence": "string"
    },
    "inhibitor_4_accountability_diffusion": {
      "present": "boolean",
      "confidence": "enum",
      "evidence": "string"
    },
    "pipeline_stall_stage": "enum",
    "coder_id": "string",
    "coding_date": "date"
  },
  "validation": {
    "consensus_coding": "object",
    "disagreements": ["string"],
    "resolution": "string"
  }
}
```

---

## Field Definitions

### Metadata Fields

| Field | Type | Values | Description |
|-------|------|--------|-------------|
| `source_type` | enum | interview, document, public_report, composite | How case was collected |
| `collection_date` | date | ISO 8601 | When case was collected |
| `industry` | string | Free text | Industry sector (generalised) |
| `org_size` | enum | small, medium, large, enterprise | Organisation size band |
| `region` | string | Free text | Geographic region (generalised) |

### Case Description Fields

| Field | Type | Description |
|-------|------|-------------|
| `risk_summary` | string | One-paragraph description of the demonstrated risk |
| `timeline` | string | Chronology of discovery, escalation, decision, outcome |
| `outcome` | string | What happened (risk addressed, ignored, incident occurred) |
| `evidence_available` | array | List of evidence types available for coding |

### Coding Fields

| Field | Type | Values | Description |
|-------|------|--------|-------------|
| `present` | boolean | true/false | Whether inhibitor is coded as present |
| `confidence` | enum | high, medium, low | Confidence in coding |
| `evidence` | string | Free text | Key evidence supporting coding |
| `pipeline_stall_stage` | enum | discovery, articulation, escalation, triage, decision, outcome | Where risk stalled |
| `coder_id` | string | Anonymised ID | Who coded the case |
| `coding_date` | date | ISO 8601 | When coding was done |

### Validation Fields

| Field | Type | Description |
|-------|------|-------------|
| `consensus_coding` | object | Final agreed coding after discussion |
| `disagreements` | array | List of initial disagreements between coders |
| `resolution` | string | How disagreements were resolved |

---

## Validation Rules

### Required Fields

- `case_id`: Must be unique
- `metadata.source_type`: Must be valid enum value
- `case_description.risk_summary`: Must be non-empty
- `coding.pipeline_stall_stage`: Must be valid enum value

### Business Rules

1. At least one inhibitor must be coded as present (cases without inhibitors are out of scope)
2. Confidence must be justified by evidence field
3. Pipeline stall stage must be consistent with inhibitor coding
4. Consensus coding required for benchmark cases (single-coder cases are draft only)

### Consistency Checks

- If `inhibitor_1_rwa.present` is true, `pipeline_stall_stage` should typically be `escalation` or `outcome`
- If `inhibitor_2_career_threat.present` is true, `pipeline_stall_stage` should typically be `discovery` or `articulation`
- If `inhibitor_4_accountability_diffusion.present` is true, `pipeline_stall_stage` should typically be `decision`

---

## Example Case (Synthetic)

This is a synthetic example for illustration. Real cases require field data.

```json
{
  "case_id": "EXAMPLE-001",
  "metadata": {
    "source_type": "composite",
    "collection_date": "2025-01-19",
    "industry": "Financial Services",
    "org_size": "large",
    "region": "North America"
  },
  "case_description": {
    "risk_summary": "Security team identified a critical authentication bypass vulnerability in the customer-facing portal. The vulnerability was reproducible and documented with proof-of-concept. Risk was escalated to IT steering committee, discussed at three consecutive meetings, but no remediation was funded. Six months later, the vulnerability was exploited.",
    "timeline": "Discovery: Month 1. Documentation: Month 1. Escalation: Month 2. Committee discussion: Months 2, 3, 4. Incident: Month 7.",
    "outcome": "Risk ignored. Vulnerability exploited. Data breach occurred.",
    "evidence_available": ["risk_register_entry", "committee_meeting_minutes", "incident_report"]
  },
  "coding": {
    "inhibitor_1_rwa": {
      "present": true,
      "confidence": "medium",
      "evidence": "Security team could document and escalate but not fund remediation. Advisory-only mandate."
    },
    "inhibitor_2_career_threat": {
      "present": false,
      "confidence": "low",
      "evidence": "No evidence of retaliation. Security team did escalate."
    },
    "inhibitor_3_compliance_theatre": {
      "present": true,
      "confidence": "medium",
      "evidence": "Risk register existed. Committee discussed. No action resulted. Process followed, substance missing."
    },
    "inhibitor_4_accountability_diffusion": {
      "present": true,
      "confidence": "high",
      "evidence": "Committee discussed but no individual owned the decision. Multiple meetings without resolution."
    },
    "pipeline_stall_stage": "decision",
    "coder_id": "CODER-EXAMPLE",
    "coding_date": "2025-01-19"
  },
  "validation": {
    "consensus_coding": null,
    "disagreements": [],
    "resolution": "Example case - no validation required"
  }
}
```

---

## Inter-Rater Reliability Protocol

For benchmark cases to be valid ground truth:

1. **Independent coding:** At least 2 coders code each case independently
2. **Disagreement identification:** Note where coders disagree on any inhibitor
3. **Discussion:** Coders discuss disagreements using codebook definitions
4. **Consensus:** Reach agreement or document persistent disagreement
5. **Reliability calculation:** Cohen's kappa or equivalent for each inhibitor

**Target reliability:** Kappa ≥ 0.7 for each inhibitor

---

## Data Collection Requirements

When field access is available, collect cases with:

- [ ] 10-20 cases minimum for reliable inter-rater testing
- [ ] Mix of industries (at least 3 different sectors)
- [ ] Mix of organisation sizes
- [ ] Mix of outcomes (some ignored, some addressed)
- [ ] Sufficient evidence for confident coding
- [ ] Consent for research use

---

## File Location

When populated, benchmark cases will be stored at:
- Schema: `/data/benchmark_cases_schema.md` (this file)
- Cases: `/data/benchmark_cases.json`

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-01-18 | Initial schema scaffold |


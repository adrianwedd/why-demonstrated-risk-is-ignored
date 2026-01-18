# Data Handling Architecture

**Version:** 1.0
**Issue:** #18
**Status:** Scaffold (Future Work)

---

## Purpose

This document defines the data lifecycle from collection to disposal, protecting participants while preserving research utility. It is designed to meet institutional ethics requirements.

---

## Data Classification

### Tier 1: Identifiable Data (Raw)

**Definition:** Data that identifies or could identify specific individuals or organisations.

**Examples:**
- Participant names, contact information
- Organisation names, locations
- Specific incident details with dates
- Role titles that identify individuals
- Email addresses, system usernames

**Handling:**
- Collected only when necessary
- Stored encrypted, access-controlled
- Destroyed as soon as no longer needed
- Never shared outside research team
- Never included in publications

### Tier 2: De-identified Data (Working)

**Definition:** Data with direct identifiers removed but potentially re-identifiable through combination.

**Examples:**
- Organisation size, industry, region (without name)
- Role types (e.g., "security manager") without names
- Case descriptions with dates generalised
- Metric values with organisation coded

**Handling:**
- Primary working dataset for analysis
- Stored encrypted
- Access limited to research team
- Retained for reproducibility period
- May be shared with collaborators under agreement

### Tier 3: Aggregated Data (Publication)

**Definition:** Data that cannot identify individuals or organisations even through combination.

**Examples:**
- Summary statistics across multiple organisations
- Patterns without individual case details
- Findings reported at group level
- Metric distributions without organisation codes

**Handling:**
- Used for publications and presentations
- May be made publicly available
- Retained indefinitely
- No special access controls needed

---

## Data Lifecycle

```
┌─────────────────────────────────────────────────────────────────┐
│ COLLECTION                                                       │
│ ┌──────────┐                                                    │
│ │ Consent  │ → Participant provides informed consent            │
│ └────┬─────┘                                                    │
│      │                                                          │
│ ┌────▼─────┐                                                    │
│ │ Capture  │ → Data collected via interview, survey, artifact  │
│ └────┬─────┘    review                                          │
│      │                                                          │
│ ┌────▼─────┐                                                    │
│ │ Secure   │ → Raw data encrypted and stored immediately       │
│ └────┬─────┘                                                    │
└──────┼──────────────────────────────────────────────────────────┘
       │
┌──────▼──────────────────────────────────────────────────────────┐
│ PROCESSING                                                       │
│ ┌──────────┐                                                    │
│ │De-identify│ → Remove direct identifiers; assign codes        │
│ └────┬─────┘                                                    │
│      │                                                          │
│ ┌────▼─────┐                                                    │
│ │ Validate │ → Check de-identification; test re-identification │
│ └────┬─────┘                                                    │
│      │                                                          │
│ ┌────▼─────┐                                                    │
│ │ Store    │ → Working dataset stored separately from key      │
│ └────┬─────┘                                                    │
└──────┼──────────────────────────────────────────────────────────┘
       │
┌──────▼──────────────────────────────────────────────────────────┐
│ ANALYSIS                                                         │
│ ┌──────────┐                                                    │
│ │ Analyse  │ → Work with de-identified data only               │
│ └────┬─────┘                                                    │
│      │                                                          │
│ ┌────▼─────┐                                                    │
│ │ Aggregate│ → Produce aggregated findings                      │
│ └────┬─────┘                                                    │
│      │                                                          │
│ ┌────▼─────┐                                                    │
│ │ Review   │ → Check outputs for disclosure risk               │
│ └────┬─────┘                                                    │
└──────┼──────────────────────────────────────────────────────────┘
       │
┌──────▼──────────────────────────────────────────────────────────┐
│ DISSEMINATION                                                    │
│ ┌──────────┐                                                    │
│ │ Member   │ → Share findings with participants for review     │
│ │ Check    │                                                    │
│ └────┬─────┘                                                    │
│      │                                                          │
│ ┌────▼─────┐                                                    │
│ │ Publish  │ → Release aggregated findings only                │
│ └────┬─────┘                                                    │
└──────┼──────────────────────────────────────────────────────────┘
       │
┌──────▼──────────────────────────────────────────────────────────┐
│ DISPOSAL                                                         │
│ ┌──────────┐                                                    │
│ │ Destroy  │ → Destroy identifiable data per schedule          │
│ │ Raw      │                                                    │
│ └────┬─────┘                                                    │
│      │                                                          │
│ ┌────▼─────┐                                                    │
│ │ Retain   │ → Retain de-identified data for reproducibility   │
│ │ Working  │    period                                          │
│ └────┬─────┘                                                    │
│      │                                                          │
│ ┌────▼─────┐                                                    │
│ │ Archive  │ → Archive aggregated data indefinitely            │
│ └──────────┘                                                    │
└─────────────────────────────────────────────────────────────────┘
```

---

## Anonymisation Strategy

### Direct Identifier Removal

| Identifier Type | Removal Method |
|-----------------|----------------|
| Names | Replace with codes (P001, P002) |
| Organisations | Replace with codes (Org-A, Org-B) |
| Locations | Generalise (city → region) |
| Dates | Generalise (March 15 → Q1) |
| Roles | Generalise (CISO → "senior security leader") |

### Quasi-Identifier Control

| Quasi-Identifier | Risk | Control |
|------------------|------|---------|
| Organisation size + industry | May narrow to few orgs | Use ranges, suppress small cells |
| Timeline + events | May identify specific incident | Generalise timeframes |
| Unique characteristics | Single data points identify | Suppress or aggregate |

### Re-identification Testing

Before data is classified as de-identified:
1. Attempt re-identification using public information
2. Check for unique combinations that narrow to single cases
3. Apply k-anonymity (k≥5): each record matches at least 4 others
4. Document re-identification risk assessment

---

## Storage and Security

### Tier 1 (Identifiable) Storage

| Requirement | Implementation |
|-------------|----------------|
| Encryption at rest | AES-256 |
| Encryption in transit | TLS 1.3 |
| Access control | Named individuals only; 2FA required |
| Audit logging | All access logged |
| Physical security | Institutional secure infrastructure |
| Backup | Encrypted backups; tested restoration |

### Tier 2 (De-identified) Storage

| Requirement | Implementation |
|-------------|----------------|
| Encryption at rest | AES-256 |
| Access control | Research team; collaborators under agreement |
| Separation from key | Key stored separately from data |
| Audit logging | Access logged |

### Tier 3 (Aggregated) Storage

| Requirement | Implementation |
|-------------|----------------|
| Integrity | Version control |
| Availability | May be public repository |
| Documentation | Metadata and provenance documented |

---

## Retention Schedule

| Data Type | Retention Period | Destruction Method |
|-----------|------------------|-------------------|
| Tier 1 (Identifiable) | Until de-identification complete + 6 months | Secure deletion (overwrite) |
| Tier 2 (De-identified) | 7 years post-publication (reproducibility) | Secure deletion |
| Tier 3 (Aggregated) | Indefinite | N/A |
| Consent records | 7 years post-study | Secure deletion |
| Audit logs | 7 years | Secure deletion |

---

## Ethics/IRB Requirements Checklist

| Requirement | Status | Notes |
|-------------|--------|-------|
| IRB application submitted | ☐ | |
| IRB approval obtained | ☐ | |
| Consent form approved | ☐ | |
| Data management plan approved | ☐ | |
| Security assessment complete | ☐ | |
| Data sharing agreements in place | ☐ | |
| Destruction protocol documented | ☐ | |

---

## Incident Response

### Data Breach Protocol

1. **Detect:** Identify scope and nature of breach
2. **Contain:** Isolate affected systems; prevent further exposure
3. **Assess:** Determine what data was exposed; identify affected participants
4. **Notify:** Inform affected participants within 72 hours; notify IRB
5. **Report:** Document incident; submit breach report per institutional requirements
6. **Remediate:** Address root cause; update procedures

### Accidental Disclosure Protocol

1. **Identify:** Determine what was disclosed and to whom
2. **Assess:** Evaluate re-identification risk
3. **Notify:** Inform affected participants if risk is significant
4. **Retrieve:** Request deletion of disclosed data where possible
5. **Document:** Record incident and response

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-01-19 | Initial scaffold |


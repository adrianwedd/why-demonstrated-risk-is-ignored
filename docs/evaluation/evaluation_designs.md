# Evaluation Designs

**Version:** 1.0
**Issue:** #16
**Status:** Scaffold (Future Work)

---

## Purpose

This document outlines candidate research designs for testing the propositions. It is a scaffold — the actual studies require field access and research participants.

---

## Design 1: Pre/Post Single Unit

### Overview

Implement governance interventions in a single organisation; measure outcomes before and after.

### Protocol

1. **Baseline:** Collect metrics for 6-12 months before intervention
2. **Implementation:** Deploy governance patterns (P1-P6)
3. **Post-intervention:** Collect same metrics for 6-12 months after
4. **Analysis:** Compare pre/post metrics; test for significant change

### Required Access

- [ ] Organisation willing to implement interventions
- [ ] Access to risk register and decision records
- [ ] Permission to collect metrics over 12-24 month period

### Feasibility Constraints

| Constraint | Impact | Mitigation |
|------------|--------|------------|
| No control group | Cannot attribute change to intervention | Use interrupted time series design |
| Maturation effects | Organisation may change independently | Control for external events |
| History effects | Other changes may confound | Document all concurrent changes |
| Single unit | Cannot generalise | Treat as pilot; plan replication |

### Threats to Validity

| Threat | Category | Mitigation |
|--------|----------|------------|
| Selection | Internal | Organisation self-selects; may differ from typical |
| Maturation | Internal | Long baseline; document maturation separately |
| History | Internal | Log external events; control statistically |
| Generalisation | External | Acknowledge as single case; plan replication |

### Ethics Considerations

- Informed consent from organisation leadership
- Participant anonymity for individuals providing data
- Right to withdraw from study
- Data handling per institutional requirements

---

## Design 2: Matched Comparison

### Overview

Compare organisations with and without governance interventions; match on key characteristics.

### Protocol

1. **Sampling:** Identify organisations with interventions (treatment) and without (control)
2. **Matching:** Match treatment and control on: size, industry, risk maturity
3. **Data collection:** Collect same metrics from both groups at same time
4. **Analysis:** Compare metrics between groups; control for matching variables

### Required Access

- [ ] Multiple organisations willing to share data
- [ ] Sufficient sample size for statistical power
- [ ] Access to comparable metrics across organisations

### Feasibility Constraints

| Constraint | Impact | Mitigation |
|------------|--------|------------|
| Finding matches | Difficult to match on all variables | Use propensity score matching |
| Selection bias | Organisations with interventions may differ | Document selection criteria; acknowledge in limitations |
| Data comparability | Different organisations measure differently | Standardise metrics; collect raw data where possible |

### Threats to Validity

| Threat | Category | Mitigation |
|--------|----------|------------|
| Selection | Internal | Propensity score matching; sensitivity analysis |
| Confounding | Internal | Control for observable confounds; acknowledge unobservable |
| Measurement | Internal | Standardised instruments; inter-rater reliability |
| Generalisation | External | Diverse sample; document population limits |

### Ethics Considerations

- Confidentiality of organisational identity
- No identification of specific failures or individuals
- Equal treatment of participating organisations

---

## Design 3: Stepped-Wedge Rollout

### Overview

Roll out interventions to multiple units sequentially; each unit serves as own control.

### Protocol

1. **Baseline:** All units measured without intervention
2. **Sequential rollout:** Implement intervention in one unit at a time
3. **Continuous measurement:** Collect metrics from all units throughout
4. **Analysis:** Compare units before and after their intervention start; use time-series methods

### Required Access

- [ ] Organisation with multiple comparable units (e.g., departments, regions)
- [ ] Authority to stagger implementation across units
- [ ] Sustained access over rollout period (12-24 months)

### Feasibility Constraints

| Constraint | Impact | Mitigation |
|------------|--------|------------|
| Long timeline | Extended data collection required | Plan for sustained engagement |
| Unit comparability | Units may differ systematically | Match units on key variables |
| Contamination | Control units may learn from treatment | Document cross-unit communication |
| Attrition | Units may drop out | Over-sample; document attrition |

### Threats to Validity

| Threat | Category | Mitigation |
|--------|----------|------------|
| History | Internal | Time-varying controls; document external events |
| Contamination | Internal | Measure exposure to other units; control |
| Attrition | Internal | Intention-to-treat analysis |
| Learning effects | Internal | Randomise rollout order; control for sequence |

### Ethics Considerations

- Fair allocation of intervention timing
- No disadvantage to later-receiving units
- Clear communication of study purpose to all units

---

## Design Comparison

| Design | Strength | Weakness | Best When |
|--------|----------|----------|-----------|
| Pre/Post Single | Feasible with one organisation | No control; attribution unclear | Pilot study; limited access |
| Matched Comparison | Cross-sectional; faster | Selection bias; finding matches | Multiple organisations accessible |
| Stepped-Wedge | Each unit is own control | Long timeline; complex analysis | Single org with multiple units |

---

## Recommended Approach

**Phase 1: Pilot (Pre/Post)**
- Partner with one willing organisation
- Establish baseline, implement, measure
- Learn what works and what doesn't
- Refine instruments and protocols

**Phase 2: Replication (Matched or Stepped-Wedge)**
- Apply learnings from pilot
- Expand to multiple organisations or units
- Strengthen causal inference

---

## Next Steps (When Field Access Available)

1. Identify partner organisation(s)
2. Obtain ethics/IRB approval
3. Finalise protocol and instruments
4. Conduct pilot study
5. Iterate based on findings

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-01-18 | Initial scaffold |


# Minimal Data Model

## Audit beacon

`grc_audit.beacons`

- `id`
- `actor_admin_id`
- `action`
- `reason_code`
- `target_ref`
- `at`

This table is append-only and should be write-restricted to trusted service paths only.

## Suggested operational tables

`admin_sessions`

- hardware key attestation metadata
- device trust state
- session risk score

`trust_score_overrides`

- agent_id
- old_score
- new_score
- reason_code
- evidence_ref
- actor_admin_id
- at

`kill_switch_actions`

- scope_level
- target_ref
- justification
- requester_admin_id
- approver_admin_id
- at

`escrow_dispute_actions`

- escrow_ref
- action
- legal_reference
- reason_code
- actor_admin_id
- at

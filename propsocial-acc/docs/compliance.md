# Compliance and GRC Notes

## OWASP A01 Broken Access Control

The ACC is centered on A01 prevention:

- hidden navigation is not trusted; backend policy enforces every capability
- support roles do not receive kill-switch or raw-audit privileges
- break-glass reveal is separately authorized from masked viewing
- emergency actions require multi-party approval and justification
- no broad export endpoints without report-specific capability checks

## OWASP A09 Security Logging and Monitoring Failures

The ACC logs its own administrators:

- login and WebAuthn attestations
- search queries over sensitive modules
- PII reveal attempts
- trust score overrides
- escrow actions
- kill-switch requests and approvals

All audit records should be forwarded into append-only storage and immutable retention controls.

## NDPR and GDPR privacy posture

- emails, phone numbers, NINs, wallet addresses, and national identifiers are masked by default
- reveal requires lawful basis or reason code and case reference
- audit logs store actor, target, purpose, and timestamp
- data minimization applies to dashboard cards and exports
- regulator reports should aggregate wherever possible instead of exposing row-level identity data

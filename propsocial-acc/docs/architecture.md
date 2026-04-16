# ACC Architecture

## Source alignment

The Admin Command Center is derived from the two source documents:

- `PropSocial App.docx`: defines the eight pillars, Next.js edge strategy, GRC masking, and front-end posture.
- `PropSocial Full System Design.docx`: defines Rust as business authority, PostgreSQL as system memory, Python as decision-support only, blockchain as finality, and append-only audit requirements.

## Design position

The ACC is not a second product backend. It is an internal control plane that proxies and aggregates visibility across the existing PropSocial pillars:

1. Pillar 1 `Secure Core` (Rust/Axum/PostgreSQL)
2. Pillar 2 `Social Feed` (Next.js/MongoDB)
3. Pillar 3 `Intelligence` (Python/FastAPI/PyTorch/Pinecone)
4. Pillar 4 `Trust Ledger` (Polygon L2 smart contracts)
5. Pillar 5 `Payments` (Rust orchestrator + Redis locks)
6. Pillar 6 `GRC/AML` (agentic auditor + WORM storage)
7. Pillar 7 `DevOps` (Prometheus, CI/CD, observability)
8. Pillar 8 `Identity` (Vault + secrets management)

## ACC topology

```text
React ACC UI
    |
    v
Rust ACC Proxy
    |- ABAC policy engine
    |- WebAuthn / hardware key auth gateway
    |- admin self-audit logger
    |- break-glass orchestrator
    |- rate-limited search and aggregation endpoints
    |
    +--> Rust Core APIs / PostgreSQL replicas
    +--> Python AI service
    +--> Blockchain RPC / indexer
    +--> WORM audit schema / report generator
    +--> KYC / AML external providers
```

## Security model

- Default stance: deny by default, explicitly grant capabilities by role and context.
- Authentication: WebAuthn or hardware-backed passkey only.
- Authorization: ABAC over role, reason code, device trust, second approver, legal hold state, and tenant scope.
- Privacy: PII masked by default in API and UI. Reveal requires break-glass justification and immutable beacon logging.
- Auditability: every admin action produces append-only telemetry; WORM browser is read-only.
- Operational resilience: kill-switch commands require quorum and cannot be issued by support roles.

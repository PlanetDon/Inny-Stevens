# PropSocial Admin Command Center

Internal-only Admin Command Center (ACC) for PropSocial.

This workspace contains:

- `backend/`: secure Rust-proxy scaffold for admin APIs, ABAC enforcement, break-glass audit hooks, and operational controls.
- `frontend/`: React-based ACC shell with role-aware navigation and module dashboards.
- `docs/`: architecture, compliance, and data-design notes derived from the source PropSocial documents.

The ACC is designed to sit beside the main PropSocial product and provide God-mode visibility across all eight pillars without violating privacy, least privilege, or append-only audit guarantees.

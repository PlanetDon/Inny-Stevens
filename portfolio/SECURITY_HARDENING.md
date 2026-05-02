# Security Hardening Report

This repository now applies OWASP Top 10 aligned protections across the active Next.js application.

## Vulnerability Scan
- Dependency scan executed with `npm audit --audit-level=moderate`.
- Patched framework dependency from `next@16.2.0` to `next@16.2.4` to remediate known advisories.

## OWASP Top 10 Controls Implemented

### A01: Broken Access Control
- Contact API is constrained to `POST` and `OPTIONS` only.
- Same-origin request validation blocks cross-site form posts.
- In-memory IP-based rate limiting throttles abuse.

### A02: Cryptographic Failures
- Strict transport security enabled through security headers (`Strict-Transport-Security`).
- Sensitive request handling path set to no-cache (`Cache-Control: no-store`).

### A03: Injection (XSS, SQLi, Prompt Injection)
- Server-side normalization and validation for every input field.
- Detection and blocking for XSS, SQL injection, and prompt-injection signatures.
- HTML escaping on user-supplied values before any optional logging path.
- Hidden honeypot field rejects bot traffic.

### A04: Insecure Design
- Security controls centralized in reusable utilities under `lib/security`.
- Explicit payload size limits and content-type enforcement on API route.

### A05: Security Misconfiguration
- Global security headers configured in `next.config.mjs`:
  - CSP
  - X-Frame-Options
  - X-Content-Type-Options
  - Referrer-Policy
  - Permissions-Policy
  - Cross-Origin headers
  - HSTS
- `poweredByHeader` disabled.

### A06: Vulnerable and Outdated Components
- Dependency audit run and patch applied to secure Next.js release.

### A07: Identification and Authentication Failures
- No authentication workflow exists in this portfolio app; no credential stores exposed.

### A08: Software and Data Integrity Failures
- Input guards ensure submitted payloads are normalized before processing.
- Restrictive request handling prevents malformed body processing.

### A09: Security Logging and Monitoring Failures
- Optional structured logging gate (`ENABLE_CONTACT_LOGGING`) in secure API path.
- Logs store escaped values to reduce injection risk in log sinks.

### A10: Server-Side Request Forgery (SSRF)
- Contact API does not accept user-provided external URLs or outbound destinations.
- Outbound calls are fixed and controlled only by server configuration.

## Notes
- There is no SQL database access in the active Next.js path; SQL injection checks are preventive controls for future integrations.
- Prompt injection detection is implemented as a defensive guardrail for any future AI workflow integration.

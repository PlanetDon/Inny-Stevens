import { type ReactNode, useState } from "react";
import { AdminRole, disputes, healthCards, kpis, moduleAccess, onboardingCases, roleLabels } from "./data";

function SectionTitle({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="section-title">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      <span>{body}</span>
    </div>
  );
}

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="card">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export function App() {
  const [role, setRole] = useState<AdminRole>("grc_director");
  const access = moduleAccess[role];

  return (
    <div className="app-shell">
      <aside className="rail">
        <div>
          <p className="eyebrow">PropSocial ACC</p>
          <h1>Admin Command Center</h1>
          <span>Internal-only control plane for oversight across the 8 pillars.</span>
        </div>

        <label className="role-switcher">
          <span>Simulated Admin Role</span>
          <select value={role} onChange={(event) => setRole(event.target.value as AdminRole)}>
            {Object.entries(roleLabels).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <nav className="nav-list">
          <span className={access.includes("kpis") ? "enabled" : "disabled"}>KPI Command Deck</span>
          <span className={access.includes("grc") ? "enabled" : "disabled"}>GRC & Compliance Vault</span>
          <span className={access.includes("forensics") ? "enabled" : "disabled"}>Technical Forensics</span>
          <span className={access.includes("intelligence") ? "enabled" : "disabled"}>Intelligence & Trust</span>
          <span className={access.includes("support") ? "enabled" : "disabled"}>Customer Care & Transactions</span>
        </nav>

        <div className="security-note">
          <strong>Access Guardrails</strong>
          <p>WebAuthn or hardware-key session required. PII masked by default. Every privileged action self-audits the admin actor.</p>
        </div>
      </aside>

      <main className="content">
        <header className="hero">
          <div>
            <p className="eyebrow">Watcher of the watchers</p>
            <h2>God-mode visibility without God-mode permissions</h2>
            <span>The ACC separates awareness from authority using ABAC, break-glass controls, and append-only oversight.</span>
          </div>
          <div className="hero-badge">Role: {roleLabels[role]}</div>
        </header>

        <section className="grid three">
          {kpis.map((kpi) => (
            <Card key={kpi.label} title={kpi.label}>
              <div className="metric">{kpi.value}</div>
              <p>{kpi.note}</p>
            </Card>
          ))}
        </section>

        {access.includes("grc") && (
          <section className="stack">
            <SectionTitle
              eyebrow="GRC Vault"
              title="Privacy-forward operational oversight"
              body="Break-glass reveal requires reason code, case reference, and immutable beacon logging."
            />
            <div className="grid two">
              <Card title="PII Masking Orchestrator">
                <div className="masked-row">
                  <span>email</span>
                  <code>in***@domain.com</code>
                </div>
                <div className="masked-row">
                  <span>phone</span>
                  <code>+234 *** *** 4421</code>
                </div>
                <div className="masked-row">
                  <span>NIN</span>
                  <code>***-***-9042</code>
                </div>
                <button>Break-Glass Reveal</button>
              </Card>
              <Card title="WORM Audit Browser">
                <ul className="log-list">
                  <li>`grc_audit.beacons` append-only schema</li>
                  <li>No edit or delete actions available</li>
                  <li>Regulator-ready export queue for PDF reporting</li>
                </ul>
              </Card>
            </div>
          </section>
        )}

        {access.includes("forensics") && (
          <section className="stack">
            <SectionTitle
              eyebrow="Technical Forensics"
              title="Operate the platform without violating blast-radius boundaries"
              body="Kill-switch actions require quorum approval and are scoped from listing level to global transaction freeze."
            />
            <div className="grid two">
              <Card title="8-Pillar Health Monitor">
                {healthCards.map((card) => (
                  <div key={card.label} className={`health health-${card.tone}`}>
                    <span>{card.label}</span>
                    <strong>{card.value}</strong>
                  </div>
                ))}
              </Card>
              <Card title="Kill-Switch Console">
                <ul className="log-list">
                  <li>Level 1: Pause listing</li>
                  <li>Level 2: Pause agent or landlord</li>
                  <li>Level 3: Global transaction freeze</li>
                </ul>
                <button>Request Multi-Sig Freeze</button>
              </Card>
            </div>
          </section>
        )}

        {access.includes("intelligence") && (
          <section className="stack">
            <SectionTitle
              eyebrow="Intelligence & Trust"
              title="AI outputs stay reviewable, never sovereign"
              body="The Python service informs decisions, but Rust and compliance workflows remain the business authority."
            />
            <div className="grid two">
              <Card title="Structural DNA Dispute Resolver">
                <table>
                  <thead>
                    <tr>
                      <th>Listing</th>
                      <th>Similarity</th>
                      <th>Origin</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {disputes.map((item) => (
                      <tr key={item.listingId}>
                        <td>{item.listingId}</td>
                        <td>{item.similarity}</td>
                        <td>{item.origin}</td>
                        <td>{item.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
              <Card title="Trust Score Override">
                <p>Senior support and compliance can override trust only with evidence reference and reason code.</p>
                <button>Open Override Workflow</button>
              </Card>
            </div>
          </section>
        )}

        {access.includes("support") && (
          <section className="stack">
            <SectionTitle
              eyebrow="Customer Care & Support"
              title="One screen for state, settlement, and compliance"
              body="Dual-rail support links PostgreSQL truth, chain truth, and legal-action workflows."
            />
            <div className="grid two">
              <Card title="Dual-Rail Transaction Tracker">
                <div className="tracker">
                  <span>PostgreSQL</span>
                  <strong>escrow_funded</strong>
                </div>
                <div className="tracker">
                  <span>Polygon</span>
                  <strong>pending_release</strong>
                </div>
                <div className="tracker">
                  <span>Gap</span>
                  <strong>chain confirmation waiting</strong>
                </div>
              </Card>
              <Card title="Agent Onboarding Pipeline">
                <table>
                  <thead>
                    <tr>
                      <th>Case</th>
                      <th>Type</th>
                      <th>KYC</th>
                      <th>AML</th>
                      <th>License</th>
                    </tr>
                  </thead>
                  <tbody>
                    {onboardingCases.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.type}</td>
                        <td>{item.kyc}</td>
                        <td>{item.aml}</td>
                        <td>{item.license}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

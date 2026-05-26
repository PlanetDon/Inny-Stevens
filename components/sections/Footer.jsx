import { NAV_ITEMS } from '../../data/siteContent'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface)] py-10">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--line-strong)] bg-[var(--surface-soft)] text-sm font-bold tracking-[0.18em] text-[var(--accent-soft)]">
              IS
            </span>
            <p className="mt-4 text-sm text-[var(--text-muted)] max-w-xs">
              Cybersecurity governance, AI risk intelligence, and enterprise assurance for regulated markets and mission-critical systems.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)] mb-3">Navigation</p>
            <nav className="grid grid-cols-2 gap-2">
              {NAV_ITEMS.map(item => (
                <a key={item.href} href={item.href} className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)] mb-3">Governance Focus</p>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>Cybersecurity Governance</li>
              <li>AI Governance & Risk</li>
              <li>Enterprise Risk Intelligence</li>
              <li>Fintech Compliance</li>
              <li>Privacy & Data Governance</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-[var(--line)] pt-6 text-sm text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Inny Stevens. Enterprise Cybersecurity Governance Portfolio.</p>
          <p>Lagos, Nigeria · Governance Consulting for Global Markets</p>
        </div>
      </div>
    </footer>
  )
}

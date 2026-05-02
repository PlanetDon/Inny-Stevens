import { NAV_ITEMS } from '../../data/siteContent'
import ButtonLink from '../ui/ButtonLink'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--bg),transparent_18%)]/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-5 py-4 md:px-8">
        <a href="#hero" className="inline-flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--line-strong)] bg-[var(--surface-soft)] text-sm font-bold tracking-[0.18em] text-[var(--accent-soft)]">
            IS
          </span>
          <span className="leading-tight">
            <span className="block font-semibold text-[var(--text-primary)]">Inny Stevens</span>
            <span className="block text-xs tracking-wide text-[var(--text-muted)]">Technology & Risk Architect</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="#final-cta" label="Book Consultation" variant="secondary" />
        </div>
      </div>
    </header>
  )
}

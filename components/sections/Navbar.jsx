'use client'

import { useState } from 'react'
import { NAV_ITEMS } from '../../data/siteContent'
import ButtonLink from '../ui/ButtonLink'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--bg),transparent_18%)]/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-5 py-4 md:px-8">
        <a href="#hero" className="inline-flex items-center gap-2.5 shrink-0">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--line-strong)] bg-[var(--surface-soft)] text-sm font-bold tracking-[0.18em] text-[var(--accent-soft)]">
            IS
          </span>
          <span className="leading-tight">
            <span className="block font-semibold text-[var(--text-primary)]">Inny Stevens</span>
            <span className="block text-[11px] tracking-wide text-[var(--text-muted)]">Technology &amp; Risk Architect</span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block shrink-0">
          <ButtonLink href="#contact" label="Governance Consultation" variant="secondary" />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] lg:hidden"
          aria-label="Toggle navigation"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-[var(--line)] bg-[var(--surface)] px-5 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 pt-2 border-t border-[var(--line)]">
              <ButtonLink href="#contact" label="Governance Consultation" variant="secondary" />
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}

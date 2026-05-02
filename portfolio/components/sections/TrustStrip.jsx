import { motion } from 'framer-motion'

import { TRUST_ORGS } from '../../data/siteContent'

const Motion = motion

export default function TrustStrip() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--surface)] py-5" aria-label="Trust indicators">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Motion.div
          className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {TRUST_ORGS.map(org => (
            <article
              key={org.name}
              className="group rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] p-3 transition hover:border-[var(--line-strong)]"
            >
              <div className="logo-chip flex items-center gap-2 text-sm">
                <span className="grid h-7 w-7 place-items-center rounded-md bg-[var(--surface)] text-[11px] font-bold tracking-[0.1em] text-[var(--text-muted)] transition group-hover:text-[var(--accent-soft)]">
                  {org.acronym}
                </span>
                <span className="text-xs font-medium text-[var(--text-muted)] transition group-hover:text-[var(--text-secondary)]">
                  {org.name}
                </span>
              </div>
            </article>
          ))}
        </Motion.div>
      </div>
    </section>
  )
}



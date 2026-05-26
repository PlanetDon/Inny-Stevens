import { motion } from 'framer-motion'
import { FINAL_CTA } from '../../data/siteContent'
import ButtonLink from '../ui/ButtonLink'
import SecureContactForm from './SecureContactForm'

const Motion = motion

export default function FinalCtaSection() {
  return (
    <section id="contact" className="section-shell">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-[var(--line-strong)] bg-[var(--surface)] p-8 shadow-[0_28px_70px_rgba(2,8,28,.52)] md:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_15%_10%,rgba(0,91,255,.28),transparent_72%),radial-gradient(65%_70%_at_90%_90%,rgba(0,212,255,.2),transparent_74%)]" />
          <div className="relative">
            <p className="inline-flex rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-soft)]">
              Governance Collaboration
            </p>
            <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold text-[var(--text-primary)] md:text-5xl">
              {FINAL_CTA.headline}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
              {FINAL_CTA.subtext}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {FINAL_CTA.actions.map(action => (
                <ButtonLink key={action.label} href={action.href} label={action.label} variant={action.variant} />
              ))}
            </div>

            <div id="contact-form" className="mt-8 grid gap-3 text-sm text-[var(--text-secondary)] md:grid-cols-3">
              <a className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 transition hover:border-[var(--line-strong)]" href="mailto:hello@payledger.io">
                hello@payledger.io
              </a>
              <a className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 transition hover:border-[var(--line-strong)]" href="https://github.com/PlanetDon" target="_blank" rel="noopener noreferrer">
                github.com/PlanetDon
              </a>
              <a className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 transition hover:border-[var(--line-strong)]" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                linkedin.com
              </a>
            </div>

            <SecureContactForm />
          </div>
        </Motion.div>
      </div>
    </section>
  )
}

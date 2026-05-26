import { motion } from 'framer-motion'
import { TRUST_SIGNALS } from '../../data/siteContent'

const Motion = motion

const maturityColors = {
  Advanced: 'text-emerald-300',
  'Lead Implementer': 'text-cyan-300',
  Certified: 'text-blue-300',
  Practitioner: 'text-sky-300',
  Specialist: 'text-violet-300',
  Compliance: 'text-amber-300',
  Research: 'text-slate-300',
}

export default function TrustSignals() {
  return (
    <section className="section-shell-sm border-y border-[var(--line)] bg-[var(--surface)]" aria-label="Framework trust indicators">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px flex-1 bg-[var(--line)]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">Governance Framework Proficiency</span>
          <span className="h-px flex-1 bg-[var(--line)]" />
        </div>
        <Motion.div
          className="grid grid-cols-2 gap-2.5 sm:grid-cols-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {TRUST_SIGNALS.map(signal => (
            <article
              key={signal.framework}
              className="group rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] p-3 transition hover:border-[var(--line-strong)]"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-[var(--text-primary)] transition group-hover:text-[var(--accent-soft)]">
                  {signal.framework}
                </span>
                <span className={`text-[10px] font-semibold uppercase tracking-[0.1em] ${maturityColors[signal.maturity] || 'text-[var(--text-muted)]'}`}>
                  {signal.maturity}
                </span>
              </div>
              <p className="mt-1 text-[11px] text-[var(--text-muted)]">{signal.domain}</p>
            </article>
          ))}
        </Motion.div>
      </div>
    </section>
  )
}

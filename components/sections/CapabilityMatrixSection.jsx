import { motion } from 'framer-motion'
import { CAPABILITY_MATRIX } from '../../data/siteContent'
import SectionHeading from '../ui/SectionHeading'

const Motion = motion

const levelColors = {
  Expert: 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10',
  Specialist: 'text-violet-300 border-violet-500/30 bg-violet-500/10',
  Advanced: 'text-cyan-300 border-cyan-500/30 bg-cyan-500/10',
}

export default function CapabilityMatrixSection() {
  return (
    <section id="capabilities" className="section-shell border-y border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Governance Capabilities"
          title="Governance & Risk Capability Matrix"
          description="Core capability domains aligned to enterprise cybersecurity governance, AI risk management, compliance architecture, and operational resilience."
        />

        <div className="overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface-soft)]">
          {CAPABILITY_MATRIX.map((row, index) => (
            <Motion.div
              key={row.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4 border-b border-[var(--line)] p-6 last:border-b-0 lg:grid-cols-[280px_1fr]"
            >
              <div className="flex items-center gap-3">
                <h3 className="text-base font-semibold text-[var(--text-primary)]">{row.category}</h3>
                {row.level && (
                  <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] ${levelColors[row.level] || 'text-[var(--text-muted)]'}`}>
                    {row.level}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {row.capabilities.map(capability => (
                  <span
                    key={capability}
                    className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-xs font-medium tracking-wide text-[var(--text-secondary)]"
                  >
                    {capability}
                  </span>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

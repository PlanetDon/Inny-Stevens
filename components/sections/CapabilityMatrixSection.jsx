import { motion } from 'framer-motion'

import { CAPABILITY_MATRIX } from '../../data/siteContent'
import SectionHeading from '../ui/SectionHeading'

const Motion = motion

export default function CapabilityMatrixSection() {
  return (
    <section id="capabilities" className="section-shell border-y border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Capability Matrix"
          title="Enterprise Technical Depth"
          description="Core capability domains aligned to enterprise governance, architecture, automation, and executive strategy priorities."
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
              <h3 className="text-base font-semibold text-[var(--text-primary)]">{row.category}</h3>
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



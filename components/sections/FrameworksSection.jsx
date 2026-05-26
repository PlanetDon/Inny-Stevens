'use client'

import { motion } from 'framer-motion'
import { FRAMEWORKS } from '../../data/siteContent'
import SectionHeading from '../ui/SectionHeading'

const Motion = motion

function MaturityBar({ level }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <span
          key={i}
          className={`h-1.5 w-full rounded-sm ${
            i <= level ? 'bg-[var(--accent-soft)]' : 'bg-[var(--line)]'
          }`}
        />
      ))}
    </div>
  )
}

export default function FrameworksSection() {
  const frameworkEntries = Object.values(FRAMEWORKS)

  const maturityColors = {
    Advanced: 'text-emerald-300',
    Specialist: 'text-violet-300',
  }

  return (
    <section id="frameworks" className="section-shell border-y border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Governance Knowledge"
          title="Frameworks & Standards"
          description="Professional governance capability across cybersecurity, AI risk, privacy, and enterprise risk frameworks with demonstrated maturity levels."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {frameworkEntries.map((category, index) => (
            <Motion.div
              key={category.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] p-6"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">{category.title}</h3>
                {category.maturity && (
                  <span className={`text-[10px] font-semibold uppercase tracking-[0.1em] ${maturityColors[category.maturity] || 'text-[var(--text-muted)]'}`}>
                    {category.maturity}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                {category.items.map(item => (
                  <div key={item.name} className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-3.5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="font-medium text-sm text-[var(--text-primary)]">{item.name}</p>
                        <p className="mt-0.5 text-[11px] text-[var(--text-secondary)]">{item.description}</p>
                      </div>
                      {item.level && (
                        <div className="w-20 shrink-0">
                          <MaturityBar level={item.level} />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

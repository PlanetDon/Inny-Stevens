import { motion } from 'framer-motion'
import { LEADERSHIP_ITEMS } from '../../data/siteContent'
import SectionHeading from '../ui/SectionHeading'

const Motion = motion

export default function ExecutiveLeadershipSection() {
  return (
    <section id="experience" className="section-shell border-y border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Professional Journey"
          title="Enterprise Leadership Experience"
          description="Technology leadership with embedded governance intelligence, security architecture oversight, and operational risk management across regulated markets."
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-3 top-2 hidden h-[calc(100%-24px)] w-px bg-gradient-to-b from-[var(--accent-soft)] via-[var(--line-strong)] to-transparent md:block" />
          <div className="space-y-5">
            {LEADERSHIP_ITEMS.map((item, index) => (
              <Motion.article
                key={item.company}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl border border-[var(--line)] bg-[var(--surface-soft)] p-6 shadow-[0_24px_48px_rgba(0,7,24,.32)] transition hover:border-[var(--line-strong)]"
              >
                <span className="absolute left-2 top-7 hidden h-3.5 w-3.5 rounded-full border border-[var(--line-strong)] bg-[var(--accent-soft)] md:block" />
                <div className="flex flex-wrap items-start justify-between gap-4 md:pl-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-soft)]">{item.period}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">{item.company}</h3>
                    <p className="mt-1 text-base font-medium text-[var(--text-secondary)]">{item.role}</p>
                  </div>
                  <span className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                    Governance Focus
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] md:pl-6">{item.description}</p>
                {item.governanceFocus && (
                  <div className="mt-4 flex flex-wrap gap-1.5 md:pl-6">
                    {item.governanceFocus.map(focus => (
                      <span key={focus} className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-2.5 py-0.5 text-[10px] text-[var(--text-muted)]">
                        {focus}
                      </span>
                    ))}
                  </div>
                )}
              </Motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

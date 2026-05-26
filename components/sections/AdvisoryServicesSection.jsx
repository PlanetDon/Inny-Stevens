import { motion } from 'framer-motion'
import { SERVICES } from '../../data/siteContent'
import SectionHeading from '../ui/SectionHeading'

const Motion = motion

export default function AdvisoryServicesSection() {
  return (
    <section id="advisory" className="section-shell">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Strategic Advisory"
          title="Governance & Risk Advisory"
          description="Trusted governance advisory for organizations navigating cybersecurity compliance, AI accountability, and enterprise risk management."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group flex h-full flex-col justify-between rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_22px_42px_rgba(4,9,28,.3)] transition hover:border-[var(--line-strong)]"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">{service.title}</h3>
                  <span className="shrink-0 rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)]">
                    {service.engagement}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{service.description}</p>
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent-soft)] transition hover:border-[var(--line-strong)]"
              >
                Inquiry <span aria-hidden="true">→</span>
              </a>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

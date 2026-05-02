import { motion } from 'framer-motion'

import { CERTIFICATIONS } from '../../data/siteContent'
import SectionHeading from '../ui/SectionHeading'

const Motion = motion

export default function CertificationsSection() {
  return (
    <section id="credentials" className="section-shell border-y border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Credentials"
          title="Selected Certifications & Executive Education"
          description="Curated to highlight practical depth across AI, cybersecurity, automation, and foundational computer science."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {CERTIFICATIONS.map((group, index) => (
            <Motion.article
              key={group.group}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] p-6 shadow-[0_18px_34px_rgba(4,9,28,.28)]"
            >
              <h3 className="text-base font-semibold text-[var(--text-primary)]">{group.group}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.map(item => (
                  <li key={item} className="rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--text-secondary)]">
                    {item}
                  </li>
                ))}
              </ul>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}



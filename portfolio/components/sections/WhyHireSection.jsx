import { motion } from 'framer-motion'

import { WHY_HIRE_ITEMS } from '../../data/siteContent'
import IconGlyph from '../IconGlyph'
import SectionHeading from '../ui/SectionHeading'

const Motion = motion

export default function WhyHireSection() {
  return (
    <section id="why-hire" className="section-shell">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Strategic Value"
          title="Why Organizations Trust Me"
          description="Technical depth, governance rigor, and founder-level execution brought together for enterprise-critical outcomes."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {WHY_HIRE_ITEMS.map((item, index) => (
            <Motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 shadow-[0_18px_34px_rgba(4,9,28,.35)] transition hover:border-[var(--line-strong)]"
            >
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface-soft)] text-[var(--accent-soft)]">
                <IconGlyph name={item.icon} />
              </span>
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{item.description}</p>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}



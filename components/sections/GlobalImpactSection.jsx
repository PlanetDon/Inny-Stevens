import { motion } from 'framer-motion'

import { GLOBAL_IMPACT_INTRO, GLOBAL_IMPACT_ITEMS } from '../../data/siteContent'
import SectionHeading from '../ui/SectionHeading'

const Motion = motion

function MapAccent() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-16 -z-0 opacity-45">
      <svg viewBox="0 0 1200 320" className="h-auto w-full">
        <g fill="none" stroke="rgba(0,212,255,0.2)" strokeWidth="1.5">
          <path d="M45 175c55-65 130-70 210-52 24 5 45 18 63 36 14 13 31 21 49 21 25 0 46-14 64-31 30-30 66-40 107-37 48 3 85 29 111 66 14 20 35 33 59 36 23 3 45-4 64-18 25-18 53-31 84-33 38-3 71 11 97 39 24 26 53 39 87 38 28 0 55-10 78-26 22-14 46-26 72-29 32-4 61 4 86 24" />
          <path d="M168 92c40-19 87-14 128 4 34 16 63 39 96 57 31 16 69 25 104 15 36-10 63-36 95-56 38-24 86-35 130-25 40 9 71 36 101 64" />
          <path d="M702 146c42-27 92-41 142-38 44 3 85 19 122 42 36 22 73 42 115 50" />
        </g>
        <g fill="none" stroke="rgba(0,212,255,0.5)" strokeWidth="1.2" strokeDasharray="8 8">
          <path className="gi-route" d="M140 206C270 112 418 88 566 132" />
          <path className="gi-route" d="M546 135C684 200 806 204 944 136" />
          <path className="gi-route" d="M250 110C380 62 536 58 694 98" />
          <path className="gi-route" d="M720 95C840 120 930 160 1080 210" />
        </g>
      </svg>
    </div>
  )
}

export default function GlobalImpactSection() {
  return (
    <section id="global-impact" className="section-shell relative overflow-hidden">
      <MapAccent />
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Cross-Border Governance"
          title="Global Impact"
          description={GLOBAL_IMPACT_INTRO}
        />

        <div className="relative z-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {GLOBAL_IMPACT_ITEMS.map((item, index) => (
            <Motion.article
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 shadow-[0_22px_42px_rgba(4,9,28,.3)] transition hover:border-[var(--line-strong)]"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg border border-[var(--line)] bg-[var(--surface-soft)] text-xs font-bold tracking-[0.12em] text-[var(--text-primary)]">
                  {item.initials}
                </span>
                <span className="rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--accent-soft)]">
                  {item.region}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{item.impact}</p>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
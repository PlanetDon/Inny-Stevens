'use client'

import { motion } from 'framer-motion'
import { RESEARCH_INSIGHTS } from '../../data/siteContent'
import SectionHeading from '../ui/SectionHeading'

const Motion = motion

export default function ResearchInsightsSection() {
  return (
    <section id="research-insights" className="section-shell">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Thought Leadership"
          title="Research & Insights"
          description="Human perspectives on cybersecurity governance, AI risk, and operational resilience for enterprise systems."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {RESEARCH_INSIGHTS.map((insight, index) => (
            <Motion.article
              key={insight.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group flex h-full flex-col rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_18px_34px_rgba(4,9,28,.3)] transition hover:border-[var(--line-strong)]"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--accent-soft)]">
                  {insight.category}
                </span>
                <div className="flex items-center gap-2 text-[11px] text-[var(--text-muted)]">
                  <span>{insight.date}</span>
                  <span className="h-1 w-1 rounded-full bg-[var(--text-muted)]" />
                  <span>{insight.readingTime}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">{insight.title}</h3>
              <p className="mt-3 flex-grow text-sm leading-relaxed text-[var(--text-secondary)]">{insight.excerpt}</p>
              <p className="mt-4 text-[13px] leading-relaxed text-[var(--text-muted)] line-clamp-2">{insight.content}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--accent-soft)] transition group-hover:gap-2"
              >
                Read Full Article <span aria-hidden="true">→</span>
              </a>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

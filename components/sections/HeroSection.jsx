import Image from 'next/image'
import { motion } from 'framer-motion'

import { HERO_CONTENT } from '../../data/siteContent'
import ButtonLink from '../ui/ButtonLink'

const Motion = motion

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-[var(--line)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(62%_55%_at_18%_14%,rgba(0,91,255,.32),transparent_72%),radial-gradient(58%_60%_at_88%_22%,rgba(0,212,255,.16),transparent_75%)]" />
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 pb-20 pt-14 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:pb-24 lg:pt-20">
        <Motion.div className="relative z-10" variants={container} initial="hidden" animate="visible">
          <Motion.p
            variants={item}
            className="mb-6 inline-flex rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-soft)]"
          >
            Enterprise Cybersecurity Governance
          </Motion.p>
          <Motion.h1
            variants={item}
            className="text-balance text-4xl font-semibold leading-tight text-[var(--text-primary)] md:text-6xl"
          >
            {HERO_CONTENT.headline}
          </Motion.h1>
          <Motion.p
            variants={item}
            className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-[var(--accent-soft)] md:text-lg"
          >
            {HERO_CONTENT.positioning}
          </Motion.p>
          <Motion.p
            variants={item}
            className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--text-secondary)] md:text-xl"
          >
            {HERO_CONTENT.subheadline}
          </Motion.p>

          <Motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            {HERO_CONTENT.ctas.map(cta => (
              <ButtonLink key={cta.label} href={cta.href} label={cta.label} variant={cta.variant} />
            ))}
          </Motion.div>

          <Motion.div variants={item} className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {HERO_CONTENT.metrics.map(metric => (
              <div key={metric.label} className="text-center">
                <p className="text-3xl font-bold text-[var(--accent-soft)]">{metric.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-[var(--text-muted)]">{metric.label}</p>
              </div>
            ))}
          </Motion.div>
        </Motion.div>

        <Motion.aside
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 overflow-hidden rounded-3xl border border-[var(--line-strong)] bg-[var(--surface)] p-6 shadow-[0_30px_70px_rgba(2,8,28,.55)]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(0,212,255,.1),transparent_36%,rgba(0,91,255,.18))]" />
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-[var(--line)]">
              <Image
                src="/assets/inny-s.jpg"
                width={820}
                height={980}
                alt="Inny Stevens executive profile"
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="mt-5 rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-soft)]">Specialization</p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--text-secondary)]">
                {HERO_CONTENT.specializations.map(s => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-soft)]" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Motion.aside>
      </div>
    </section>
  )
}

import Reveal from '../motion/Reveal'

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-4xl text-center">
      <Reveal>
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-soft)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-soft)]" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.07}>
        <h2 className="text-balance text-3xl font-semibold text-[var(--text-primary)] md:text-5xl">{title}</h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.12}>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}

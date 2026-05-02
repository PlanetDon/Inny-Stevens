const styles = {
  primary:
    'bg-[var(--accent-strong)] text-white shadow-[0_0_30px_rgba(0,91,255,0.35)] hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(0,212,255,0.35)]',
  secondary:
    'border border-[var(--line-strong)] bg-[var(--surface-soft)] text-[var(--text-primary)] hover:-translate-y-0.5 hover:border-[var(--accent-soft)]',
  ghost:
    'border border-[var(--line)] text-[var(--text-secondary)] hover:-translate-y-0.5 hover:border-[var(--line-strong)] hover:text-[var(--text-primary)]',
}

export default function ButtonLink({ href, label, variant = 'primary' }) {
  return (
    <a
      href={href}
      className={`inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold tracking-wide transition ${styles[variant]}`}
    >
      {label}
    </a>
  )
}

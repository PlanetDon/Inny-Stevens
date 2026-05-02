export default function IconGlyph({ name }) {
  const base = 'h-5 w-5'

  if (name === 'Crown') {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 18h18l-2-11-6 5-4-7-4 7-4-5-2 11Z" />
      </svg>
    )
  }

  if (name === 'Shield') {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3 4 6v6c0 5 3.5 8.8 8 10 4.5-1.2 8-5 8-10V6l-8-3Z" />
        <path d="m9.4 12.2 2 2 3.2-3.4" />
      </svg>
    )
  }

  if (name === 'Sparkles') {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m12 3 1.6 4.3L18 9l-4.4 1.7L12 15l-1.6-4.3L6 9l4.4-1.7L12 3Z" />
        <path d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" />
      </svg>
    )
  }

  if (name === 'Workflow') {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="7" height="6" rx="1.5" />
        <rect x="14" y="4" width="7" height="6" rx="1.5" />
        <rect x="8.5" y="14" width="7" height="6" rx="1.5" />
        <path d="M10 7h4M12 10v4" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m4 13 6-8 4 5 6-2-5 11-4-5-7 3Z" />
    </svg>
  )
}

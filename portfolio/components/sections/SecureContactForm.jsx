'use client'

import { useMemo, useState } from 'react'
import { normalizeText } from '../../lib/security/inputGuards'

const initialState = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
  website: '',
}

function validateForm(form) {
  if (!form.fullName.trim()) {
    return 'Full name is required.'
  }

  if (!form.email.trim()) {
    return 'Email is required.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    return 'Please provide a valid email address.'
  }

  if (!form.message.trim() || form.message.trim().length < 10) {
    return 'Message must be at least 10 characters.'
  }

  return null
}

export default function SecureContactForm() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const isSubmitting = useMemo(() => status === 'loading', [status])

  const updateField = (field) => (event) => {
    setForm(current => ({ ...current, [field]: event.target.value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setFeedback('')

    const validationError = validateForm(form)
    if (validationError) {
      setStatus('error')
      setFeedback(validationError)
      return
    }

    setStatus('loading')

    const payload = {
      fullName: normalizeText(form.fullName, { maxLength: 80 }),
      email: normalizeText(form.email, { maxLength: 254 }),
      subject: normalizeText(form.subject, { maxLength: 140 }),
      message: normalizeText(form.message, { maxLength: 3000, multiline: true }),
      website: form.website,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result?.error || 'Unable to submit message securely.')
      }

      setStatus('success')
      setFeedback(result?.message || 'Message sent.')
      setForm(initialState)
    } catch (error) {
      setStatus('error')
      setFeedback(error?.message || 'Submission failed.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-[var(--text-secondary)]">
          Full Name
          <input
            className="h-11 rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--line-strong)]"
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={updateField('fullName')}
            maxLength={80}
            autoComplete="name"
            required
          />
        </label>

        <label className="grid gap-2 text-sm text-[var(--text-secondary)]">
          Email
          <input
            className="h-11 rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--line-strong)]"
            type="email"
            name="email"
            value={form.email}
            onChange={updateField('email')}
            maxLength={254}
            autoComplete="email"
            required
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm text-[var(--text-secondary)]">
        Subject
        <input
          className="h-11 rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--line-strong)]"
          type="text"
          name="subject"
          value={form.subject}
          onChange={updateField('subject')}
          maxLength={140}
        />
      </label>

      <label className="grid gap-2 text-sm text-[var(--text-secondary)]">
        Message
        <textarea
          className="min-h-36 rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-3 py-2 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--line-strong)]"
          name="message"
          value={form.message}
          onChange={updateField('message')}
          maxLength={3000}
          required
        />
      </label>

      <label className="hidden" aria-hidden="true">
        Website
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={updateField('website')}
          tabIndex={-1}
          autoComplete="off"
        />
      </label>

      {feedback ? (
        <p className={`text-sm ${status === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}>
          {feedback}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-11 w-fit items-center justify-center rounded-full bg-[var(--accent-strong)] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Securely'}
      </button>
    </form>
  )
}

import { useEffect, useState } from 'react'

const initialState = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
}

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const sanitizeInput = (value) =>
  String(value || '')
    .trim()
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const loadRecaptcha = (siteKey) =>
  new Promise((resolve, reject) => {
    if (!siteKey) return reject(new Error('No reCAPTCHA site key provided.'))
    if (typeof window === 'undefined') return reject(new Error('Window is not available.'))

    if (window.grecaptcha) {
      resolve(window.grecaptcha)
      return
    }

    const existing = document.querySelector('script[src*="recaptcha/api.js"]')
    if (existing) {
      existing.addEventListener('load', () => {
        if (window.grecaptcha) resolve(window.grecaptcha)
        else reject(new Error('Failed to load reCAPTCHA.'))
      })
      return
    }

    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
    script.async = true
    script.defer = true
    script.onload = () => {
      if (window.grecaptcha) resolve(window.grecaptcha)
      else reject(new Error('Failed to initialize reCAPTCHA.'))
    }
    script.onerror = () => reject(new Error('Failed to load reCAPTCHA script.'))
    document.body.appendChild(script)
  })

const executeRecaptcha = async (siteKey) => {
  if (!siteKey || typeof window === 'undefined') return null
  const grecaptcha = await loadRecaptcha(siteKey)
  return grecaptcha.execute(siteKey, { action: 'contact_form' })
}

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || ''

  useEffect(() => {
    if (!siteKey) return
    loadRecaptcha(siteKey).catch(() => {})
  }, [siteKey])

  const setField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
  }

  const getValidationError = () => {
    if (!form.fullName.trim()) return 'Please enter your full name.'
    if (!form.email.trim()) return 'Please enter your email address.'
    if (!validateEmail(form.email.trim())) return 'Please enter a valid email address.'
    if (!form.message.trim()) return 'Please enter a message.'
    return null
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setFeedback('')
    const errorMessage = getValidationError()
    if (errorMessage) {
      setStatus('error')
      setFeedback(errorMessage)
      return
    }

    setIsSubmitting(true)
    setStatus('loading')
    const payload = {
      fullName: sanitizeInput(form.fullName),
      email: sanitizeInput(form.email),
      subject: sanitizeInput(form.subject),
      message: sanitizeInput(form.message),
    }

    try {
      const token = siteKey ? await executeRecaptcha(siteKey) : null
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, recaptchaToken: token }),
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result?.error || 'Unable to send message, please try again.')
      }

      setStatus('success')
      setFeedback('Message sent successfully. I will be in touch soon.')
      setForm(initialState)
    } catch (error) {
      setStatus('error')
      setFeedback(error?.message || 'Submission failed. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const fieldStyle = {
    width: '100%',
    minHeight: '52px',
    borderRadius: '18px',
    border: '1px solid rgba(148, 163, 184, 0.18)',
    background: 'rgba(15, 23, 42, 0.92)',
    color: '#f8fafc',
    padding: '14px 18px',
    fontSize: '0.97rem',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  }

  const labelStyle = {
    display: 'grid',
    gap: '8px',
    color: '#cbd5e1',
    fontSize: '0.95rem',
  }

  const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '52px',
    padding: '0 24px',
    borderRadius: '999px',
    border: 'none',
    background: 'linear-gradient(135deg, #22d3ee, #0ea5e9)',
    color: '#0f172a',
    fontWeight: 700,
    cursor: isSubmitting ? 'not-allowed' : 'pointer',
    opacity: isSubmitting ? 0.8 : 1,
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  }

  return (
    <section style={{ padding: '48px 24px', background: 'rgba(7, 8, 15, 0.93)' }} id="contact">
      <div className="wrap" style={{ maxWidth: '720px' }}>
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <span style={{ color: '#22d3ee', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.78rem', display: 'inline-block', marginBottom: '12px' }}>
            Contact
          </span>
          <h2 style={{ margin: 0, fontSize: '2.15rem', lineHeight: 1.05, color: '#f8fafc' }}>
            Let&apos;s start a productive conversation.
          </h2>
          <p style={{ color: '#94a3b8', marginTop: '14px', maxWidth: '620px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.75 }}>
            Share your project details or request and I&apos;ll reply promptly with a focused response.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '18px' }} noValidate>
          <label style={labelStyle}>
            Full Name <span style={{ color: '#38bdf8' }}>*</span>
            <input
              type="text"
              value={form.fullName}
              onChange={setField('fullName')}
              style={fieldStyle}
              placeholder="Your full name"
              autoComplete="name"
              required
            />
          </label>

          <label style={labelStyle}>
            Email Address <span style={{ color: '#38bdf8' }}>*</span>
            <input
              type="email"
              value={form.email}
              onChange={setField('email')}
              style={fieldStyle}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </label>

          <label style={labelStyle}>
            Subject
            <input
              type="text"
              value={form.subject}
              onChange={setField('subject')}
              style={fieldStyle}
              placeholder="Brief subject (optional)"
              autoComplete="off"
            />
          </label>

          <label style={labelStyle}>
            Message <span style={{ color: '#38bdf8' }}>*</span>
            <textarea
              value={form.message}
              onChange={setField('message')}
              style={{ ...fieldStyle, minHeight: '170px', resize: 'vertical' }}
              placeholder="Tell me about your challenge, timeline, and goals."
              required
            />
          </label>

          {feedback ? (
            <p
              style={{
                margin: 0,
                color: status === 'success' ? '#4ade80' : '#f87171',
                fontWeight: 600,
              }}
            >
              {feedback}
            </p>
          ) : null}

          <button type="submit" disabled={isSubmitting} style={buttonStyle}>
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {!siteKey ? (
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', margin: 0 }}>
              Tip: add a VITE_RECAPTCHA_SITE_KEY to your environment for spam protection.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}

/* eslint-env node */

function sanitize(value) {
  return String(value || '')
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

async function verifyRecaptcha(token, secretKey) {
  if (!secretKey) return true
  if (!token) return false

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret: secretKey, response: token }),
    })

    if (!response.ok) return false
    const data = await response.json()
    return (
      data.success === true &&
      (typeof data.score !== 'number' || data.score >= 0.3) &&
      (!data.action || data.action === 'contact_form')
    )
  } catch (error) {
    console.error('recaptcha-verify-error', error)
    return false
  }
}

async function sendEmail(payload, apiKey, fromEmail, toEmail) {
  const body = {
    personalizations: [
      {
        to: [{ email: toEmail }],
        subject: `New Contact Form Submission from ${payload.fullName}`,
      },
    ],
    from: { email: fromEmail, name: 'Portfolio Contact Form' },
    reply_to: { email: payload.email, name: payload.fullName },
    content: [
      { type: 'text/plain', value: `Name: ${payload.fullName}\nEmail: ${payload.email}\nSubject: ${payload.subject || '(none)'}\n\nMessage:\n${payload.message}` },
      {
        type: 'text/html',
        value: `<!DOCTYPE html><html><body><h2>New Contact Form Submission</h2><p><strong>Name:</strong> ${payload.fullName}</p><p><strong>Email:</strong> ${payload.email}</p><p><strong>Subject:</strong> ${payload.subject || '(none)'}</p><p><strong>Message:</strong></p><p>${payload.message.replace(/\n/g, '<br/>')}</p></body></html>`,
      },
    ],
  }

  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`SendGrid error ${response.status}: ${text}`)
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed. Use POST.' })
  }

  let payload
  try {
    payload = typeof req.body === 'object' ? req.body : JSON.parse(req.body)
  } catch (error) {
    return res.status(400).json({ error: 'Invalid JSON payload.' })
  }

  const fullName = sanitize(payload.fullName)
  const email = sanitize(payload.email)
  const subject = sanitize(payload.subject || '')
  const message = sanitize(payload.message)
  const recaptchaToken = String(payload.recaptchaToken || '')

  if (!fullName) return res.status(400).json({ error: 'Full name is required.' })
  if (!email || !isValidEmail(email)) return res.status(400).json({ error: 'A valid email address is required.' })
  if (!message) return res.status(400).json({ error: 'Message is required.' })

  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY || ''
  const recaptchaValid = await verifyRecaptcha(recaptchaToken, recaptchaSecret)
  if (!recaptchaValid) {
    return res.status(400).json({ error: 'reCAPTCHA validation failed.' })
  }

  const sendgridKey = process.env.SENDGRID_API_KEY || ''
  const fromEmail = process.env.SENDGRID_FROM_EMAIL || ''
  const toEmail = process.env.CONTACT_EMAIL || ''
  const enableLogging = process.env.ENABLE_CONTACT_LOGGING === 'true'

  if (!sendgridKey || !fromEmail || !toEmail) {
    return res.status(500).json({
      error: 'Email service is not configured. Please set SENDGRID_API_KEY, SENDGRID_FROM_EMAIL, and CONTACT_EMAIL.',
    })
  }

  if (enableLogging) {
    console.info('contact-request', {
      fullName,
      email,
      subject,
      message,
      recaptchaValid,
    })
  }

  try {
    await sendEmail({ fullName, email, subject, message }, sendgridKey, fromEmail, toEmail)
    if (enableLogging) {
      console.info('contact-send-success', { fullName, email, subject })
    }
    return res.status(200).json({ success: true, message: 'Message sent successfully.' })
  } catch (error) {
    console.error('contact-send-error', error)
    return res.status(500).json({ error: 'Failed to send message. Please try again later.' })
  }
}

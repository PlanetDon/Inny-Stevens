const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const XSS_PATTERNS = [
  /<\s*script/iu,
  /javascript:/iu,
  /on\w+\s*=/iu,
  /<\s*(?:iframe|img|svg|math|object|embed)/iu,
  /data:text\/html/iu,
]

const SQLI_PATTERNS = [
  /(?:')\s*(?:or|and)\s+\d+=\d+/iu,
  /\bunion\b\s+\bselect\b/iu,
  /\b(?:drop|truncate|alter)\b\s+\b(?:table|database)\b/iu,
  /\bexec\b\s*\(/iu,
  /--|#|\/\*|\*\//u,
]

const PROMPT_INJECTION_PATTERNS = [
  /ignore\s+(?:all\s+)?(?:previous|prior|above)\s+instructions/iu,
  /reveal\s+(?:the\s+)?system\s+prompt/iu,
  /developer\s+message/iu,
  /jailbreak/iu,
  /do\s+anything\s+now/iu,
]

function normalizeWhitespace(value, multiline) {
  if (multiline) {
    return value
      .replace(/\r\n?/g, '\n')
      .replace(/[\t ]+/g, ' ')
      .replace(/\n{3,}/g, '\n\n')
      .trim()
  }

  return value.replace(/\s+/g, ' ').trim()
}

export function normalizeText(value, { maxLength = 512, multiline = false } = {}) {
  const raw = String(value ?? '').normalize('NFKC')

  const controlCharRegex = multiline
    ? /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g
    : /[\u0000-\u001F\u007F]/g

  const cleaned = normalizeWhitespace(raw.replace(controlCharRegex, ''), multiline)
  return cleaned.slice(0, maxLength)
}

export function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function detectInjectionSignals(values) {
  const joined = values.filter(Boolean).join(' ')

  return {
    xss: XSS_PATTERNS.some(pattern => pattern.test(joined)),
    sqli: SQLI_PATTERNS.some(pattern => pattern.test(joined)),
    promptInjection: PROMPT_INJECTION_PATTERNS.some(pattern => pattern.test(joined)),
  }
}

function isLikelyHumanName(value) {
  return /^[\p{L}\p{N} .,'-]{2,80}$/u.test(value)
}

export function validateContactPayload(rawPayload) {
  const fullName = normalizeText(rawPayload?.fullName, { maxLength: 80 })
  const email = normalizeText(rawPayload?.email, { maxLength: 254 })
  const subject = normalizeText(rawPayload?.subject, { maxLength: 140 })
  const message = normalizeText(rawPayload?.message, { maxLength: 3000, multiline: true })
  const honeypot = normalizeText(rawPayload?.website, { maxLength: 200 })

  const errors = []

  if (!fullName || !isLikelyHumanName(fullName)) {
    errors.push('Full name must be 2-80 valid characters.')
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    errors.push('A valid email address is required.')
  }

  if (subject.length > 140) {
    errors.push('Subject exceeds maximum length.')
  }

  if (!message || message.length < 10) {
    errors.push('Message must be at least 10 characters long.')
  }

  if (honeypot) {
    errors.push('Spam validation failed.')
  }

  const signals = detectInjectionSignals([fullName, email, subject, message])

  if (signals.xss) {
    errors.push('Potential XSS payload detected.')
  }

  if (signals.sqli) {
    errors.push('Potential SQL injection payload detected.')
  }

  if (signals.promptInjection) {
    errors.push('Potential prompt injection payload detected.')
  }

  return {
    ok: errors.length === 0,
    errors,
    data: {
      fullName,
      email,
      subject,
      message,
    },
    signals,
  }
}

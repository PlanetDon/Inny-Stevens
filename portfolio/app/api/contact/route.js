import { NextResponse } from 'next/server'
import { checkRateLimit } from '../../../lib/security/rateLimiter'
import { escapeHtml, validateContactPayload } from '../../../lib/security/inputGuards'

export const dynamic = 'force-dynamic'

const MAX_BODY_BYTES = 16 * 1024

function jsonResponse(body, status = 200, extraHeaders = {}) {
  return NextResponse.json(body, {
    status,
    headers: {
      'Cache-Control': 'no-store',
      ...extraHeaders,
    },
  })
}

function getClientIp(request) {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }

  return request.headers.get('x-real-ip') || 'unknown'
}

function isSameOrigin(request) {
  const origin = request.headers.get('origin')
  if (!origin) {
    return true
  }

  const host = request.headers.get('host')
  const forwardedProto = request.headers.get('x-forwarded-proto') || 'https'
  const expectedOrigin = `${forwardedProto}://${host}`

  return origin === expectedOrigin
}

export async function POST(request) {
  if (!isSameOrigin(request)) {
    return jsonResponse({ error: 'Invalid request origin.' }, 403)
  }

  const contentType = request.headers.get('content-type') || ''
  if (!contentType.toLowerCase().includes('application/json')) {
    return jsonResponse({ error: 'Unsupported content type.' }, 415)
  }

  const contentLength = Number(request.headers.get('content-length') || 0)
  if (contentLength && contentLength > MAX_BODY_BYTES) {
    return jsonResponse({ error: 'Request payload too large.' }, 413)
  }

  const ipAddress = getClientIp(request)
  const limitResult = checkRateLimit(`contact:${ipAddress}`, {
    windowMs: 60_000,
    limit: 6,
  })

  if (!limitResult.allowed) {
    return jsonResponse(
      { error: 'Too many requests. Please retry shortly.' },
      429,
      {
        'Retry-After': String(limitResult.retryAfterSeconds || 60),
      },
    )
  }

  let payload
  try {
    payload = await request.json()
  } catch {
    return jsonResponse({ error: 'Invalid JSON payload.' }, 400)
  }

  const validation = validateContactPayload(payload)

  if (!validation.ok) {
    return jsonResponse(
      {
        error: validation.errors[0] || 'Payload validation failed.',
      },
      422,
    )
  }

  const safePayload = {
    fullName: escapeHtml(validation.data.fullName),
    email: escapeHtml(validation.data.email),
    subject: escapeHtml(validation.data.subject),
    message: escapeHtml(validation.data.message),
  }

  if (process.env.ENABLE_CONTACT_LOGGING === 'true') {
    console.info('secure-contact-request', {
      ipAddress,
      ...safePayload,
      signals: validation.signals,
    })
  }

  return jsonResponse({
    success: true,
    message: 'Message received securely. We will reach out shortly.',
  })
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      Allow: 'POST, OPTIONS',
      'Cache-Control': 'no-store',
    },
  })
}

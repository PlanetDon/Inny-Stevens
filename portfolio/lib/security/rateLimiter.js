const rateBuckets = new Map()

function now() {
  return Date.now()
}

export function checkRateLimit(key, { windowMs = 60_000, limit = 8 } = {}) {
  const entry = rateBuckets.get(key)
  const currentTime = now()

  if (!entry || currentTime - entry.windowStart >= windowMs) {
    rateBuckets.set(key, { count: 1, windowStart: currentTime })
    return { allowed: true, remaining: limit - 1 }
  }

  if (entry.count >= limit) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.ceil((windowMs - (currentTime - entry.windowStart)) / 1000),
    }
  }

  entry.count += 1
  rateBuckets.set(key, entry)

  return { allowed: true, remaining: limit - entry.count }
}

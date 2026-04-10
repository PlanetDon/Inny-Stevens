import { useEffect, useRef, useState } from 'react'
import './App.css'
import innyPortrait from './assets/inny-s.jpg'

/* ─── Data ──────────────────────────────────────────────────── */
const NAV_LINKS = [
  { href: '#about',       label: 'About'       },
  { href: '#evolution',   label: 'Career'      },
  { href: '#engagements', label: 'Engagements' },
  { href: '#stack',       label: 'Stack'       },
]

const MARQUEE_ITEMS = [
  '🏛 GovTech & Identity', '🏦 Digital Banking', '🏥 Critical Healthcare',
  '💳 Fintech & Payments', '🛡 Critical Infrastructure',
  '🌍 National Identity Systems', '⚖ Regulatory Compliance', '🔐 SOC Operations',
]

const STATS = [
  { num: 100, suffix: 'M+', label: 'Identity records secured'   },
  { num: 35,  suffix: '+',  label: 'Global markets harmonised'  },
  { num: 3,   suffix: '',   label: 'Continents · One standard'  },
  { num: 10,  suffix: '+',  label: 'Years of technical mastery' },
]

const FEATURES = [
  { icon: '🛡', title: 'Technical Depth',           desc: 'Full-stack engineering enables root-cause analysis others cannot reach.' },
  { icon: '🌐', title: 'Global Regulatory Fluency',  desc: 'GDPR · HIPAA · NDPR · DORA · ISO 27001 — across three continents.'     },
  { icon: '📊', title: 'Board-Level Communication',  desc: 'Translating complex technical risk into executive-ready strategy.'      },
]

const CHECKLIST = [
  'Hardware & systems engineering foundation',
  'Full-stack MERN development proficiency',
  'SOC operations & threat intelligence',
  'Cisco network architecture & design',
  'ISO 27001 / NIST CSF 2.0 lead auditor',
  'Multi-jurisdictional GRC roadmap design',
]

const CAREER = [
  { num: '01', icon: '💾', title: 'Systems Engineering & Infrastructure',
    desc: 'Hardware cloning, disciplined workstation preparation, and dependable Windows system configuration for stable operational environments.',
    tags: ['Hardware', 'Windows', 'Infrastructure'] },
  { num: '02', icon: '⚡', title: 'Full-Stack Software Development',
    desc: 'Architecting end-to-end solutions using the MERN stack. I do not just audit software — I understand how it is built, deployed, and exploited.',
    tags: ['React', 'Node.js', 'MongoDB'] },
  { num: '03', icon: '🔐', title: 'Cybersecurity & SOC Operations',
    desc: 'Hands-on defensive and offensive security practice, from Cisco network architecture to threat hunting with Wazuh and Elastic Stack.',
    tags: ['SOC', 'Wazuh', 'Cisco'] },
  { num: '04', icon: '🌍', title: 'Global GRC & Risk Leadership',
    desc: 'Authoring risk registers, performing third-party audits, and designing multi-jurisdictional compliance roadmaps at enterprise scale.',
    tags: ['ISO 27001', 'NIST', 'DORA'] },
]

const PROCESS = [
  { num: '01', title: 'Discovery & Threat Modelling',
    desc: 'Deep-dive assessment of technical architecture, regulatory obligations, and the current threat landscape — from the board down to the API layer.' },
  { num: '02', title: 'Risk Register & Gap Analysis',
    desc: 'Comprehensive risk identification, likelihood and impact scoring across all asset classes, mapped against the relevant compliance framework.' },
  { num: '03', title: 'Roadmap Design & Control Alignment',
    desc: 'Prioritised remediation roadmaps with clear ownership, timelines, and measurable metrics — in language your board will act on.' },
  { num: '04', title: 'Continuous Monitoring & Assurance',
    desc: 'Ongoing control validation, third-party assurance testing, and iterative improvement that adapts to an evolving threat environment.' },
]

const ENGAGEMENTS = [
  { geo: 'GovTech & Identity · Africa',        title: 'Lead GRC Auditor — NIMC',
    problem: 'API data exposure involving 100 million national identity records — one of the largest identity risk events in African GovTech history.',
    solution: 'Designed an immediate API isolation strategy and a three-year cybersecurity investment roadmap aligned with NDPA and NDPR frameworks.' },
  { geo: 'Digital Banking & Fintech · Europe',  title: 'Senior Risk Consultant — Revolut',
    problem: 'A $20 million payment logic flaw and complex insider threat scenarios spanning 35+ regulated markets.',
    solution: 'Harmonised security operations across all markets and established a DORA-ready control baseline, significantly reducing cross-border compliance risk.' },
  { geo: 'Critical Healthcare · North America', title: 'GRC Strategist — Epic Systems',
    problem: 'Ransomware resilience in the wake of systemic supply chain breaches affecting global hospital networks.',
    solution: 'Developed a Ransomware Resilience Certification framework and ensured HIPAA and NIST SP 800-161 alignment for all clinical systems.' },
]

const TESTIMONIALS = [
  { initials: 'DA', name: 'Director of IT, NIMC',              role: 'GovTech · Nigeria',
    quote: 'Inny brought a level of technical precision and regulatory fluency we rarely see in a single consultant. The NDPR roadmap was board-approved within two weeks.' },
  { initials: 'CM', name: 'Chief Risk Officer, Revolut',       role: 'Fintech · Europe',
    quote: "The DORA readiness assessment was executed with extraordinary depth. Inny's understanding of both technical controls and regulatory nuance accelerated our programme by months." },
  { initials: 'TK', name: 'VP Healthcare Security, Epic Systems', role: 'Healthcare · North America',
    quote: 'Inny delivered a ransomware resilience framework that our legal, clinical, and engineering teams could all align to. A rare communicator who operates at every level.' },
]

const STACK = [
  { icon: '📋', title: 'Frameworks',     tags: ['NIST CSF 2.0', 'ISO 27001:2022', 'ISO 31000', 'NIST SP 800-161'] },
  { icon: '⚖️', title: 'Regulatory',    tags: ['GDPR', 'HIPAA', 'NDPR / NDPA', 'DORA'] },
  { icon: '🔍', title: 'Security Tools', tags: ['Wazuh', 'Elastic Stack', 'Nmap', 'Nessus', 'Burp Suite', 'Cisco Packet Tracer'] },
  { icon: '💻', title: 'Development',   tags: ['React.js', 'Node.js', 'MongoDB', 'Linux (Ubuntu 22.04)'] },
]

const LEAD_LIST = [
  'Global financial regulatory compliance',
  'Blockchain-native payment rails',
  'Threat-resilient infrastructure design',
  'Multi-jurisdictional legal framework',
  'Executive leadership & team building',
]

/* ─── Hooks ─────────────────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-sr]')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target) }
      })
    }, { threshold: 0.07 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

function useCounters() {
  useEffect(() => {
    const els = document.querySelectorAll('.counter-num')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        const el = e.target
        const target = +el.dataset.target
        const duration = 1600
        const start = performance.now()
        const step = now => {
          const t = Math.min((now - start) / duration, 1)
          const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
          el.textContent = Math.round(ease * target)
          if (t < 1) requestAnimationFrame(step)
          else el.textContent = target
        }
        requestAnimationFrame(step)
        obs.unobserve(el)
      })
    }, { threshold: 0.5 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

function useParticleCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    let W, H, pts = [], animId

    const resize = () => {
      W = c.width = window.innerWidth
      H = c.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const rand = (a, b) => Math.random() * (b - a) + a
    class Pt {
      constructor() {
        this.x = rand(0, W); this.y = rand(0, H)
        this.vx = rand(-0.28, 0.28); this.vy = rand(-0.18, 0.18)
        this.r = rand(0.7, 2); this.a = rand(0.12, 0.55)
      }
      update() {
        this.x += this.vx; this.y += this.vy
        if (this.x < 0 || this.x > W) this.vx *= -1
        if (this.y < 0 || this.y > H) this.vy *= -1
      }
    }
    for (let i = 0; i < 90; i++) pts.push(new Pt())

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0,240,255,${(1 - d / 120) * 0.16})`
            ctx.lineWidth = 0.5
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.stroke()
          }
        }
      }
      pts.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,240,255,${p.a})`
        ctx.fill()
        p.update()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animId) }
  }, [])
  return canvasRef
}

/* ─── Navbar ────────────────────────────────────────────────── */
function Navbar() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Active link highlight
    const sections = document.querySelectorAll('[id]')
    const links = document.querySelectorAll('.nl-link')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id))
        }
      })
    }, { rootMargin: '-30% 0px -60% 0px' })
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <header className={`navbar${solid ? ' solid' : ''}`}>
      <div className="wrap">
        <nav className="nav-inner" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Inny Stevens home">
            <span className="brand-mark">IS</span>
            <span className="brand-text">
              <strong>Inny Stevens</strong>
              <small>GRC &amp; Cybersecurity Leader</small>
            </span>
          </a>

          <button
            className={`hamburger${open ? ' open' : ''}`}
            aria-expanded={open}
            aria-controls="nav-links"
            aria-label="Toggle menu"
            onClick={() => setOpen(o => !o)}
          >
            <span /><span /><span />
          </button>

          <ul className={`nav-links${open ? ' open' : ''}`} id="nav-links" role="list">
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <a className="nl-link" href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
            <li>
              <a className="nav-cta nl-link" href="#contact" onClick={() => setOpen(false)}>
                Let&apos;s Connect →
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

/* ─── Hero ──────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="blob" style={{ width: '700px', height: '700px', top: '-180px', left: '-150px', background: 'radial-gradient(circle,rgba(0,71,255,.2),transparent 70%)' }} />
      <div className="blob" style={{ width: '450px', height: '450px', bottom: '-100px', right: '-80px', background: 'radial-gradient(circle,rgba(0,240,255,.12),transparent 70%)' }} />
      <div className="circ" style={{ opacity: 0.45 }} />
      <span className="ghost" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>CYBER</span>

      <div className="wrap">
        <div className="hero-grid">
          <div data-sr>
            <span className="hero-eye">Strategic cybersecurity &amp; global GRC leadership</span>
            <h1 className="hero-title">Engineering <span className="grad">Resilience.</span><br />Governing Global Risk.</h1>
            <p className="hero-sub">From hardware architecture to multi-continental GRC strategy. I translate technical complexity into boardroom clarity for the world&apos;s most regulated sectors.</p>
            <div className="hero-actions">
              <a className="btn-p" href="#engagements">View Strategic Engagements</a>
              <a className="btn-o" href="mailto:hello@payledger.io">Download Executive Brief</a>
            </div>
            <div className="proof">
              <div className="av-stack">
                <span>N</span><span>R</span><span>E</span><span>+</span>
              </div>
              <p className="proof-text">Trusted by <strong>global organisations</strong> across three continents</p>
            </div>
          </div>

          <div className="hero-visual" data-sr data-d2="">
            <div className="portrait">
              <img src={innyPortrait} alt="Inny Stevens — formal portrait" loading="eager" />
              <div className="portrait-badge">
                <p className="portrait-badge-label">Executive Profile</p>
                <ul>
                  <li>Multi-disciplinary command · Engineering · Cyber · GRC</li>
                  <li>Delivery across Africa, Europe &amp; North America</li>
                  <li>Board-ready communication grounded in technical depth</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Trust Bar ─────────────────────────────────────────────── */
function TrustBar() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div className="trust-bar" aria-label="Sectors served">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span className="marquee-item" key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}

/* ─── Stats ─────────────────────────────────────────────────── */
function Stats() {
  return (
    <section className="stats-section sp-sm">
      <div className="circ" style={{ opacity: 0.22 }} />
      <div className="wrap">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <div className="stat-item" key={s.label} data-sr data-d={i > 0 ? i : undefined}>
              <span className="stat-num">
                <span className="counter-num" data-target={s.num}>0</span>{s.suffix}
              </span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Value Proposition ─────────────────────────────────────── */
function ValueProp() {
  return (
    <section className="sp" id="about" style={{ background: 'var(--black)' }}>
      <div className="blob" style={{ width: '500px', height: '500px', top: 0, right: '-100px', background: 'radial-gradient(circle,rgba(0,71,255,.13),transparent 70%)' }} />
      <div className="wrap">
        <div className="value-grid">
          <div className="value-text" data-sr>
            <div className="sh">
              <span className="eye">The value proposition</span>
              <h2>The Bridge Between Code and Compliance.</h2>
              <p className="sh-lead">A rare intersection of engineering depth and governance reach — built to operate where complexity is highest.</p>
            </div>
            <p>Most organisations view security as a technical hurdle. I view it as a foundational competitive advantage. With a career rooted in systems engineering and full-stack development, I possess the rare ability to audit a system from the motherboard up to the global regulatory framework.</p>
            <p>Whether navigating NIST CSF 2.0, ensuring DORA readiness in European Fintech, or securing 100 million-plus records for national identity commissions, I deliver the oversight high-stakes operations require to scale with confidence.</p>
            <div className="feat-list">
              {FEATURES.map(f => (
                <div className="feat-item" key={f.title}>
                  <div className="feat-icon">{f.icon}</div>
                  <div className="feat-text"><strong>{f.title}</strong><span>{f.desc}</span></div>
                </div>
              ))}
            </div>
          </div>

          <div className="value-visual" data-sr data-d2="">
            <div className="value-card">
              <div className="big-icon">🛡️</div>
              <h3 style={{ color: '#fff', marginBottom: '8px' }}>Multi-Layer Security Mastery</h3>
              <p style={{ color: 'var(--silver)', fontSize: '0.93rem' }}>From the physical layer to the boardroom — a complete command of the security stack.</p>
              <ul className="check-list">
                {CHECKLIST.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Career Evolution ──────────────────────────────────────── */
function CareerEvolution() {
  return (
    <section className="sp" id="evolution" style={{ background: 'var(--navy2)' }}>
      <div className="circ" style={{ opacity: 0.28 }} />
      <span className="ghost" style={{ top: '-20px', right: '-60px' }}>DEFENSE</span>
      <div className="wrap">
        <div className="sh c" data-sr>
          <span className="eye">The evolution</span>
          <h2>A Decade of Technical Mastery.</h2>
          <p className="sh-lead">A formal narrative across engineering, development, cybersecurity operations, and strategic governance.</p>
        </div>
        <div className="svc-grid">
          {CAREER.map((c, i) => (
            <div className="svc-card" key={c.title} data-sr data-d={i + 1}>
              <div className="svc-num">{c.num}</div>
              <div className="svc-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <div className="tag-row">{c.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Process ───────────────────────────────────────────────── */
function Process() {
  return (
    <section className="sp process-section" id="process">
      <div className="wrap">
        <div className="sh c" data-sr>
          <span className="eye">The approach</span>
          <h2>How I Deliver Results.</h2>
          <p className="sh-lead">A proven four-phase methodology for high-stakes GRC and cybersecurity engagements.</p>
        </div>
        <div className="process-grid">
          {PROCESS.map((p, i) => (
            <div className="process-item" key={p.title} data-sr data-d={i + 1}>
              <div className="process-dot">{p.num}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Engagements ───────────────────────────────────────────── */
function Engagements() {
  return (
    <section className="sp" id="engagements" style={{ background: 'var(--black)' }}>
      <div className="blob" style={{ width: '600px', height: '600px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle,rgba(0,71,255,.1),transparent 70%)' }} />
      <span className="ghost" style={{ bottom: '-20px', left: '-40px' }}>PROTECT</span>
      <div className="wrap">
        <div className="sh c" data-sr>
          <span className="eye">Strategic case studies</span>
          <h2>Global GRC Engagements.</h2>
          <p className="sh-lead">Solving extreme complexity at the intersection of technology, regulation, and risk — across three continents.</p>
        </div>
        <div className="eng-grid">
          {ENGAGEMENTS.map((e, i) => (
            <div className="eng-card" key={e.title} data-sr data-d={i + 1}>
              <div className="eng-top">
                <div><p className="eng-geo">{e.geo}</p><h3>{e.title}</h3></div>
                <span className="eng-badge">Extreme Complexity</span>
              </div>
              <div className="eng-divider" />
              <div className="eng-block"><p className="eng-block-label">The Problem</p><p>{e.problem}</p></div>
              <div className="eng-block"><p className="eng-block-label">The Solution</p><p>{e.solution}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonials ──────────────────────────────────────────── */
function Testimonials() {
  const [cur, setCur] = useState(0)
  const trackRef = useRef(null)
  const autoRef = useRef(null)
  const touchX = useRef(0)

  const goTo = (i) => {
    setCur(i)
    if (trackRef.current) {
      const cardW = trackRef.current.children[0]?.offsetWidth + 22 || 0
      trackRef.current.style.transform = `translateX(-${i * cardW}px)`
    }
  }

  const next = () => goTo((cur + 1) % TESTIMONIALS.length)

  useEffect(() => {
    autoRef.current = setInterval(next, 4500)
    return () => clearInterval(autoRef.current)
  }, [cur])

  const pause = () => clearInterval(autoRef.current)
  const resume = () => { autoRef.current = setInterval(next, 4500) }

  return (
    <section className="sp" id="testimonials" style={{ background: 'var(--black)' }}>
      <div className="circ" style={{ opacity: 0.22 }} />
      <div className="blob" style={{ width: '500px', height: '500px', top: 0, right: '-80px', background: 'radial-gradient(circle,rgba(0,71,255,.12),transparent 70%)' }} />
      <div className="wrap">
        <div className="sh c" data-sr>
          <span className="eye">Client voices</span>
          <h2>What Leaders Say.</h2>
          <p className="sh-lead">Perspectives from the executives, directors, and teams I have partnered with on high-stakes engagements.</p>
        </div>

        <div
          className="test-track-wrap"
          onMouseEnter={pause} onMouseLeave={resume}
          onTouchStart={e => { touchX.current = e.touches[0].clientX }}
          onTouchEnd={e => {
            const dx = e.changedTouches[0].clientX - touchX.current
            if (Math.abs(dx) > 50) {
              goTo(dx < 0 ? Math.min(cur + 1, TESTIMONIALS.length - 1) : Math.max(cur - 1, 0))
              pause(); resume()
            }
          }}
        >
          <div className="test-track" ref={trackRef}>
            {TESTIMONIALS.map(t => (
              <div className="test-card" key={t.name}>
                <div className="stars">{[...Array(5)].map((_, i) => <span className="star" key={i}>★</span>)}</div>
                <p className="test-quote">{t.quote}</p>
                <div className="test-author">
                  <div className="test-avatar">{t.initials}</div>
                  <div><p className="test-name">{t.name}</p><p className="test-role">{t.role}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-dots">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} className={`sdot${cur === i ? ' active' : ''}`} onClick={() => { goTo(i); pause(); resume() }} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Payledger / Leadership ────────────────────────────────── */
function Leadership() {
  return (
    <section className="sp lead-section" id="leadership">
      <div className="circ" style={{ opacity: 0.22 }} />
      <div className="wrap">
        <div className="lead-grid">
          <div className="lead-text" data-sr>
            <span className="eye">Entrepreneurship</span>
            <h2 style={{ marginBottom: '14px' }}>Innovation in Fintech.</h2>
            <p>As the Founder and CEO of Payledger, I lead a multidisciplinary team building secure, blockchain-based cross-border payment infrastructure.</p>
            <p>My dual role as founder and security expert ensures every product is Secure by Design, compliant with global financial regulations, and resilient against the sophisticated threat landscape of modern finance.</p>
            <div className="lead-tags">
              {['Blockchain Payments', 'Secure by Design', 'Cross-Border Compliance', 'Fintech Governance'].map(t => (
                <span className="lead-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div className="lead-visual" data-sr data-d2="">
            <div className="lead-big">💎</div>
            <h3>Payledger</h3>
            <p>Secure, blockchain-based cross-border payment infrastructure — built from the ground up with security-first architecture.</p>
            <ul className="lead-list">
              {LEAD_LIST.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Technical Stack ───────────────────────────────────────── */
function TechStack() {
  return (
    <section className="sp" id="stack" style={{ background: 'var(--black)' }}>
      <div className="blob" style={{ width: '500px', height: '500px', bottom: 0, left: '-100px', background: 'radial-gradient(circle,rgba(0,71,255,.12),transparent 70%)' }} />
      <span className="ghost" style={{ bottom: '-20px', right: '-40px' }}>SECURE</span>
      <div className="wrap">
        <div className="sh c" data-sr>
          <span className="eye">The technical stack</span>
          <h2>Specialised Proficiency.</h2>
          <p className="sh-lead">A comprehensive toolkit spanning governance frameworks, regulatory regimes, security tooling, and software engineering.</p>
        </div>
        <div className="stack-grid">
          {STACK.map((s, i) => (
            <div className="stack-card" key={s.title} data-sr data-d={i + 1}>
              <div className="stack-head">
                <div className="stack-icon">{s.icon}</div>
                <h3>{s.title}</h3>
              </div>
              <div className="tag-row">{s.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ───────────────────────────────────────────────────── */
function CTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | success | error

  const handleSubscribe = () => {
    if (email && email.includes('@')) {
      setStatus('success')
      setTimeout(() => { setStatus('idle'); setEmail('') }, 3000)
    } else {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 2000)
    }
  }

  return (
    <section className="cta-section" id="contact">
      <div className="circ" style={{ opacity: 0.3 }} />
      <div className="wrap">
        <div className="cta-inner" data-sr>
          <span className="eye" style={{ justifyContent: 'center' }}>Final call to action</span>
          <h2>Solving Extreme Complexity.</h2>
          <p>Whether you are a government entity securing a nation&apos;s data or a Fintech leader scaling across borders, I provide the technical depth and strategic foresight required to remain resilient.</p>
          <div className="cta-actions">
            <a className="btn-p" href="mailto:hello@payledger.io">Initiate Professional Inquiry</a>
            <a className="btn-o" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
          </div>
          <div className="email-row" style={{ borderColor: status === 'error' ? '#ff4d6d' : undefined }}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
              aria-label="Email address"
            />
            <button
              type="button"
              onClick={handleSubscribe}
              style={status === 'success' ? { background: '#10b981' } : undefined}
            >
              {status === 'success' ? '✓ Done!' : 'Subscribe'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="site-footer">
      <span className="foot-ghost">INNY STEVENS</span>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="brand">
              <span className="brand-mark">IS</span>
              <span className="brand-text">
                <strong>Inny Stevens</strong>
                <small>GRC &amp; Cybersecurity Leader</small>
              </span>
            </div>
            <p>Engineering resilience. Governing global risk. Strategic cybersecurity and GRC leadership for the world&apos;s most regulated sectors.</p>
          </div>
          <div className="foot-col">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#evolution">Career Evolution</a></li>
              <li><a href="#engagements">Engagements</a></li>
              <li><a href="#stack">Technical Stack</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Specialisms</h4>
            <ul>
              <li><a href="#engagements">GRC &amp; Risk Leadership</a></li>
              <li><a href="#engagements">Cybersecurity Audits</a></li>
              <li><a href="#engagements">Regulatory Compliance</a></li>
              <li><a href="#leadership">Fintech &amp; Blockchain</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@payledger.io">hello@payledger.io</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="#leadership">Payledger</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <p>&copy; 2026 Inny Stevens. All Rights Reserved. Lagos, Nigeria &mdash; Global Consultant.</p>
          <div className="foot-socials">
            <a className="soc-btn" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
            <a className="soc-btn" href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">gh</a>
            <a className="soc-btn" href="mailto:hello@payledger.io" aria-label="Email">@</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ─── App ───────────────────────────────────────────────────── */
export default function App() {
  const canvasRef = useParticleCanvas()
  useScrollReveal()
  useCounters()

  return (
    <>
      <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <ValueProp />
        <CareerEvolution />
        <Process />
        <Engagements />
        <Testimonials />
        <Leadership />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

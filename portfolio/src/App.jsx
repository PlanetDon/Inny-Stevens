import { useState } from 'react'
import './App.css'
import CareerEvolution from './components/CareerEvolution.jsx'
import innyPortrait from './assets/inny-s.jpg'

const navigationItems = [
  { href: '#evolution', label: 'The Evolution' },
  { href: '#labs', label: 'Technical Labs' },
  { href: '#grc', label: 'Strategic GRC Engagements' },
  { href: '#entrepreneurship', label: 'Entrepreneurship' },
]

const capabilityCards = [
  {
    title: 'Threat-Led Technical Labs',
    description:
      'Immersive blue team, red team, and incident response labs that translate technical depth into operational readiness.',
    tags: ['SOC Analytics', 'Threat Hunting', 'Adversary Simulation'],
  },
  {
    title: 'Operational Research',
    description:
      'Security research, workflow design, and platform hardening focused on measurable resilience and executive visibility.',
    tags: ['Detection Engineering', 'Forensics', 'Security Architecture'],
  },
  {
    title: 'Strategic Transformation',
    description:
      'Governance, risk, and compliance programs aligned to global operating environments, board priorities, and regulatory maturity.',
    tags: ['Policy Design', 'Control Mapping', 'Risk Governance'],
  },
]

const defenseLabCards = [
  {
    title: 'Network Engineering',
    description:
      'Designed resilient network architectures in Cisco Packet Tracer to model segmentation, routing stability, and dependable security-aware connectivity.',
    tools: 'Cisco Packet Tracer',
  },
  {
    title: 'SOC Operations',
    description:
      'Used Wazuh and Elastic Stack to strengthen threat detection, correlate telemetry, and improve visibility across monitored environments.',
    tools: 'Wazuh and Elastic Stack',
  },
  {
    title: 'Vulnerability Management',
    description:
      'Performed infrastructure auditing with Nmap and Nessus to identify exposure points, validate services, and prioritize remediation activity.',
    tools: 'Nmap and Nessus',
  },
  {
    title: 'Web Security',
    description:
      'Applied Burp Suite to capture and analyze malicious traffic, inspect web application behavior, and support practical testing workflows.',
    tools: 'Burp Suite',
  },
]

const grcCaseStudies = [
  {
    organization: 'NIMC',
    region: 'Africa',
    role: 'Identity Risk Auditor',
    challenge:
      'Conducted diagnostic assessments across an identity environment containing more than 100 million records following API exposure, balancing public-sector sensitivity, scale, and remediation urgency.',
    outcome: 'Produced a three-year investment roadmap for structured risk reduction, resilience improvement, and control modernization.',
  },
  {
    organization: 'Revolut',
    region: 'Europe',
    role: 'Senior Fintech Risk Consultant',
    challenge:
      'Analyzed payment logic flaws valued at 20 million dollars while assessing DORA readiness across a high-velocity fintech environment operating across multiple jurisdictions.',
    outcome: 'Delivered a unified cross-region control baseline to improve consistency, governance clarity, and operational readiness.',
  },
  {
    organization: 'Epic Systems',
    region: 'North America',
    role: 'Healthcare GRC Strategist',
    challenge:
      'Evaluated ransomware resilience and HIPAA compliance within a healthcare context where operational continuity, regulatory confidence, and security assurance had to be addressed simultaneously.',
    outcome: 'Developed a Ransomware Resilience Certification framework to formalize preparedness expectations and strengthen strategic assurance.',
  },
]

const payledgerPillars = [
  {
    title: 'The Mission',
    description:
      'Building a blockchain-based cross-border payment infrastructure designed to improve trust, settlement confidence, and global transaction accessibility.',
  },
  {
    title: 'Founder & CEO',
    description:
      'Inny Stevens leads Payledger with a strategic blend of product vision, regulatory discipline, and security-first execution.',
  },
  {
    title: 'The Security Link',
    description:
      'GRC and cybersecurity expertise shape Payledger to be secure by design, with controls, assurance logic, and compliance planning aligned to global financial regulations from the outset.',
  },
]

const academicCredentials = [
  'University of the People (Computer Science)',
  'TS Academy (Cybersecurity)',
  'Inegben Academy (GRC Program)',
]

const initialFormState = {
  name: '',
  email: '',
  summary: '',
}

function App() {
  const [formData, setFormData] = useState(initialFormState)
  const [formErrors, setFormErrors] = useState({})
  const [submitMessage, setSubmitMessage] = useState('')

  function handleInputChange(event) {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))

    setFormErrors((current) => {
      if (!current[name]) {
        return current
      }

      const nextErrors = { ...current }
      delete nextErrors[name]
      return nextErrors
    })
  }

  function validateForm(values) {
    const errors = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!values.name.trim()) {
      errors.name = 'Please provide your name.'
    }

    if (!values.email.trim()) {
      errors.email = 'Please provide your email address.'
    } else if (!emailPattern.test(values.email.trim())) {
      errors.email = 'Please provide a valid email address.'
    }

    if (!values.summary.trim()) {
      errors.summary = 'Please describe the engagement objective.'
    } else if (values.summary.trim().length < 20) {
      errors.summary = 'Please provide a more detailed engagement summary.'
    }

    return errors
  }

  function handleSubmit(event) {
    event.preventDefault()

    const errors = validateForm(formData)
    setFormErrors(errors)

    if (Object.keys(errors).length > 0) {
      setSubmitMessage('Please correct the highlighted fields before submitting.')
      return
    }

    setSubmitMessage('Validation complete. This inquiry form is ready for secure backend integration.')
    setFormData(initialFormState)
  }

  return (
    <div className="app-shell">
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-mark">DF</span>
          <span>
            <strong>Digital Frontier Security</strong>
            <small>Premium cybersecurity portfolio template</small>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero-panel">
          <div className="hero-copy">
            <p className="eyebrow">Cybersecurity strategy, engineering, and trust</p>
            <h1>Security leadership presented with technical depth and executive polish.</h1>
            <p className="hero-text">
              Digital Frontier Security is a dark-mode portfolio experience for Inny Stevens,
              designed to showcase technical evolution, operational credibility, and
              governance maturity in one decisive narrative.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Request a Security Consultation
              </a>
              <a className="button button-secondary" href="#evolution">
                Explore the Career Evolution
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-portrait-frame">
              <img
                className="hero-portrait"
                src={innyPortrait}
                alt="Inny Stevens in a formal portrait"
              />
            </div>

            <div className="hero-card">
              <span className="card-label">Core positioning</span>
              <ul>
                <li>Security-first messaging for SOC, offensive security, and forensics</li>
                <li>Case-study structure for labs, research, and notable outcomes</li>
                <li>Executive-ready framing for consulting and full-time opportunities</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Signature strengths</p>
            <h2>Built for serious cybersecurity storytelling.</h2>
          </div>

          <div className="card-grid">
            {capabilityCards.map((card) => (
              <article key={card.title} className="info-card">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="tag-row">
                  {card.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <CareerEvolution />

        <section id="labs" className="section">
          <div className="section-heading">
            <p className="eyebrow">Technical Defense Lab</p>
            <h2>Hands-on security experience presented through focused operational domains.</h2>
          </div>

          <div className="defense-lab-grid">
            {defenseLabCards.map((card) => (
              <article key={card.title} className="defense-card" tabIndex="0">
                <div className="defense-card-top">
                  <span className="tag">Technical Proficiency</span>
                  <p className="defense-tools">{card.tools}</p>
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="grc" className="section grc-section">
          <div className="section-heading">
            <p className="eyebrow">Global GRC Strategic Engagements</p>
            <h2>Executive case studies shaped in environments defined by extreme complexity.</h2>
            <p className="section-intro">
              These engagements demonstrate the ability of Inny Stevens to lead strategic
              risk thinking across public-sector identity, fintech regulation, and
              healthcare resilience where operational scale, regulatory pressure, and
              stakeholder consequence intersect.
            </p>
          </div>

          <div className="grc-grid">
            {grcCaseStudies.map((study) => (
              <article key={study.organization} className="grc-card">
                <div className="grc-card-header">
                  <div>
                    <p className="grc-region">
                      {study.organization} ({study.region})
                    </p>
                    <h3>{study.role}</h3>
                  </div>
                  <span className="tag">Extreme Complexity</span>
                </div>

                <div className="grc-content">
                  <div>
                    <p className="grc-label">Mandate</p>
                    <p>{study.challenge}</p>
                  </div>
                  <div>
                    <p className="grc-label">Outcome</p>
                    <p>{study.outcome}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="entrepreneurship" className="section section-split">
          <div className="section-heading">
            <p className="eyebrow">Entrepreneurship</p>
            <h2>Payledger</h2>
            <p className="section-intro">
              Payledger is the venture expression of a founder operating at the
              intersection of financial innovation, security architecture, and global
              governance discipline.
            </p>
          </div>

          <div className="payledger-panel">
            <div className="payledger-intro">
              <p className="payledger-label">Founder &amp; CEO</p>
              <h3>Secure financial infrastructure built for cross-border trust.</h3>
              <p>
                As Founder and CEO, Inny Stevens is building Payledger as a
                blockchain-based cross-border payment infrastructure with security,
                resilience, and regulatory readiness embedded into the business model.
              </p>
            </div>

            <div className="payledger-grid">
              {payledgerPillars.map((pillar) => (
                <article key={pillar.title} className="payledger-card">
                  <p className="payledger-label">{pillar.title}</p>
                  <h3>{pillar.title === 'Founder & CEO' ? 'Leadership and execution' : pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Open a conversation for consulting, audits, or strategic collaboration.</h2>
          </div>

          <form className="contact-form" noValidate onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                value={formData.name}
                onChange={handleInputChange}
                aria-invalid={Boolean(formErrors.name)}
                aria-describedby={formErrors.name ? 'name-error' : undefined}
              />
              {formErrors.name ? (
                <small id="name-error" className="field-error">
                  {formErrors.name}
                </small>
              ) : null}
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                autoComplete="email"
                inputMode="email"
                value={formData.email}
                onChange={handleInputChange}
                aria-invalid={Boolean(formErrors.email)}
                aria-describedby={formErrors.email ? 'email-error' : undefined}
              />
              {formErrors.email ? (
                <small id="email-error" className="field-error">
                  {formErrors.email}
                </small>
              ) : null}
            </label>
            <label className="full-width">
              <span>Engagement summary</span>
              <textarea
                name="summary"
                rows="5"
                placeholder="Describe the security objective, current environment, and desired outcome."
                value={formData.summary}
                onChange={handleInputChange}
                aria-invalid={Boolean(formErrors.summary)}
                aria-describedby={formErrors.summary ? 'summary-error' : undefined}
              />
              {formErrors.summary ? (
                <small id="summary-error" className="field-error">
                  {formErrors.summary}
                </small>
              ) : null}
            </label>
            <button type="submit" className="button button-primary">
              Submit Inquiry
            </button>
            {submitMessage ? <p className="form-status">{submitMessage}</p> : null}
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <p className="eyebrow">Academic credentials</p>
          <h2>Formal academic foundation</h2>
        </div>

        <div className="credential-row">
          {academicCredentials.map((credential) => (
            <span key={credential} className="credential-badge">
              {credential}
            </span>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default App

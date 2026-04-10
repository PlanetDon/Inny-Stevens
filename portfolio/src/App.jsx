import './App.css'
import innyPortrait from './assets/inny-s.jpg'

const navigationItems = [
  { href: '#value', label: 'Value Proposition' },
  { href: '#evolution', label: 'Career Evolution' },
  { href: '#engagements', label: 'Strategic Engagements' },
  { href: '#stack', label: 'Technical Stack' },
]

const evolutionStages = [
  {
    title: 'Systems Engineering & Infrastructure',
    description:
      'The foundation of my journey, centered on cloning hardware, configuring Windows environments, and mastering the physical layer of technology.',
  },
  {
    title: 'Full-Stack Software Development',
    description:
      'Architecting end-to-end solutions using the MERN stack. I do not just audit software; I understand how it is built, deployed, and exploited.',
  },
  {
    title: 'Cybersecurity & SOC Operations',
    description:
      'Hands-on defensive and offensive security practice, from Cisco network architecture to threat hunting with Wazuh and Elastic Stack.',
  },
  {
    title: 'Global GRC & Risk Leadership',
    description:
      'The pinnacle of my practice, focused on authoring risk registers, performing third-party audits, and designing multi-jurisdictional compliance roadmaps.',
  },
]

const caseStudies = [
  {
    category: 'GovTech & Identity',
    geography: 'Africa',
    focus: 'Lead GRC Auditor for the NIMC',
    problem: 'API data exposure involving 100 million national identity records.',
    solution:
      'Designed an immediate API isolation strategy and a three-year cybersecurity investment roadmap aligned with NDPA and NDPR frameworks.',
  },
  {
    category: 'Digital Banking & Fintech',
    geography: 'Europe',
    focus: 'Senior Risk Consultant for Revolut',
    problem: 'A 20 million dollar payment logic flaw and complex insider threat scenarios.',
    solution:
      'Harmonized security operations across more than 35 global markets and established a DORA-ready control baseline.',
  },
  {
    category: 'Critical Healthcare Infrastructure',
    geography: 'North America',
    focus: 'Healthcare GRC Strategist for Epic Systems',
    problem: 'Ransomware resilience in the wake of systemic supply chain breaches.',
    solution:
      'Developed a Ransomware Resilience Certification framework and ensured HIPAA and NIST SP 800-161 alignment for global hospital clients.',
  },
]

const stackGroups = [
  {
    title: 'Frameworks',
    items: ['NIST CSF 2.0', 'ISO 27001:2022', 'ISO 31000', 'NIST SP 800-161'],
  },
  {
    title: 'Regulatory',
    items: ['GDPR', 'HIPAA', 'NDPR/NDPA', 'DORA'],
  },
  {
    title: 'Security Tools',
    items: ['Wazuh', 'Elastic Stack', 'Nmap', 'Nessus', 'Burp Suite', 'Cisco Packet Tracer'],
  },
  {
    title: 'Development',
    items: ['React.js', 'Node.js', 'MongoDB', 'Linux (Ubuntu 22.04)'],
  },
]

const footerLinks = [
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'Payledger', href: '#leadership' },
]

function App() {

  return (
    <div className="app-shell">
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-mark">IS</span>
          <span>
            <strong>Inny Stevens</strong>
            <small>Engineering resilience. Governing global risk.</small>
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
            <p className="eyebrow">Strategic cybersecurity and global governance leadership</p>
            <h1>Engineering Resilience. Governing Global Risk.</h1>
            <p className="hero-text">
              From hardware architecture to multi-continental GRC strategy. I translate
              technical complexity into boardroom clarity for the world&apos;s most
              regulated sectors.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#engagements">
                View Strategic Engagements
              </a>
              <a className="button button-secondary" href="#leadership">
                Download Executive Brief
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
              <span className="card-label">Executive profile</span>
              <ul>
                <li>Multi-disciplinary command across engineering, cyber operations, and GRC</li>
                <li>Strategic delivery for regulated sectors spanning Africa, Europe, and North America</li>
                <li>Board-ready communication grounded in technical depth and operational realism</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="value" className="section value-section">
          <div className="section-heading">
            <p className="eyebrow">The value proposition</p>
            <h2>The Bridge Between Code and Compliance.</h2>
          </div>

          <div className="value-panel">
            <p>
              Most organizations view security as a technical hurdle. I view it as a
              foundational competitive advantage. With a career rooted in systems
              engineering and full-stack development, I possess the rare ability to audit a
              system from the motherboard up to the global regulatory framework.
            </p>
            <p>
              Whether it is navigating the intricacies of the NIST CSF 2.0, ensuring DORA
              readiness in European Fintech, or securing 100 million plus records for
              national identity commissions, I provide the oversight necessary for
              high-stakes operations to scale with confidence.
            </p>
          </div>
        </section>

        <section id="evolution" className="section evolution-section">
          <div className="section-heading">
            <p className="eyebrow">The career evolution</p>
            <h2>A Decade of Technical Mastery.</h2>
          </div>

          <div className="timeline">
            {evolutionStages.map((stage, index) => (
              <article key={stage.title} className="timeline-item">
                <div className="timeline-marker" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="timeline-content">
                  <p className="timeline-era">{stage.title}</p>
                  <p>{stage.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="engagements" className="section grc-section">
          <div className="section-heading">
            <p className="eyebrow">Strategic case studies</p>
            <h2>Global GRC Engagements.</h2>
          </div>

          <div className="grc-grid">
            {caseStudies.map((study) => (
              <article key={study.focus} className="grc-card">
                <div className="grc-card-header">
                  <div>
                    <p className="grc-region">
                      {study.category} ({study.geography})
                    </p>
                    <h3>{study.focus}</h3>
                  </div>
                  <span className="tag">Extreme Complexity</span>
                </div>

                <div className="grc-content">
                  <div>
                    <p className="grc-label">The Problem</p>
                    <p>{study.problem}</p>
                  </div>
                  <div>
                    <p className="grc-label">The Solution</p>
                    <p>{study.solution}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="leadership" className="section leadership-section">
          <div className="section-heading">
            <p className="eyebrow">Entrepreneurship</p>
            <h2>Innovation in Fintech.</h2>
          </div>

          <div className="leadership-panel">
            <p>
              As the Founder and CEO of Payledger, I lead a multidisciplinary team in
              building secure, blockchain-based cross-border payment infrastructure.
            </p>
            <p>
              My dual role as a founder and a security expert ensures that every product we
              build is Secure by Design, compliant with global financial regulations, and
              resilient against the sophisticated threat landscape of modern finance.
            </p>
          </div>
        </section>

        <section id="stack" className="section stack-section">
          <div className="section-heading">
            <p className="eyebrow">The technical stack</p>
            <h2>Specialized Proficiency.</h2>
          </div>

          <div className="stack-grid">
            {stackGroups.map((group) => (
              <article key={group.title} className="stack-card">
                <h3>{group.title}</h3>
                <div className="tag-row">
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section cta-section">
          <div className="section-heading">
            <p className="eyebrow">Final call to action</p>
            <h2>Solving Extreme Complexity.</h2>
          </div>

          <div className="cta-panel">
            <p>
              Whether you are a government entity securing a nation&apos;s data or a Fintech
              leader scaling across borders, I provide the technical depth and strategic
              foresight required to remain resilient. Let us discuss how I can fortify your
              GRC posture.
            </p>
            <a className="button button-primary" href="mailto:hello@payledger.io">
              Initiate Professional Inquiry
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Inny Stevens. All Rights Reserved.</p>
        <p>Lagos, Nigeria | Global Consultant.</p>
        <div className="footer-links">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default App

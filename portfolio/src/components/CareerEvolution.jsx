const journeyStages = [
  {
    era: 'Systems Engineering Era',
    summary:
      'This foundational chapter centered on hardware cloning, disciplined workstation preparation, and dependable Windows system configurations for stable operational use.',
    focus: ['Hardware cloning', 'Windows system configuration', 'Operational troubleshooting'],
  },
  {
    era: 'Full-Stack Era',
    summary:
      'The transition into software engineering expanded the craft into front-end and application development through HTML, CSS, JavaScript, Node.js, React, and the broader MERN stack.',
    focus: ['HTML, CSS, and JavaScript', 'Node.js and React', 'MERN stack delivery'],
  },
  {
    era: 'Cybersecurity Era',
    summary:
      'The security discipline matured through SOC operations, defensive and offensive security practice, and Cisco networking work that strengthened both visibility and response capability.',
    focus: ['SOC operations', 'Defensive and offensive security', 'Cisco networking'],
  },
  {
    era: 'Strategic GRC Era',
    summary:
      'The current emphasis is on global risk transformation, control alignment, and multi-continental governance programs that connect cyber resilience to enterprise strategy.',
    focus: ['Global risk transformation', 'Control alignment', 'Multi-continental governance'],
  },
]

function CareerEvolution() {
  return (
    <section id="evolution" className="section timeline-section">
      <div className="section-heading">
        <p className="eyebrow">The Evolution</p>
        <h2>Career Evolution</h2>
        <p className="section-intro">
          A formal narrative of the professional journey of Inny Stevens across
          engineering, development, cybersecurity operations, and strategic governance.
        </p>
      </div>

      <div className="timeline" aria-label="Career evolution timeline">
        {journeyStages.map((stage, index) => (
          <article key={stage.era} className="timeline-item">
            <div className="timeline-marker" aria-hidden="true">
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>

            <div className="timeline-content">
              <p className="timeline-era">{stage.era}</p>
              <p>{stage.summary}</p>
              <div className="tag-row">
                {stage.focus.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CareerEvolution

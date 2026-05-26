'use client'

export default function GovArchitectureDiagram({ projectId }) {
  if (projectId === 'paynova') return <PayNovaDiagram />
  if (projectId === 'ai-governance') return <AIGovernanceDiagram />
  if (projectId === 'soc2-iso') return <SOC2ISODiagram />
  if (projectId === 'iso27701') return <ISO27701Diagram />
  if (projectId === 'vendor-risk') return <VendorRiskDiagram />
  return null
}

function Layer({ label, items, y, color = 'var(--accent-soft)' }) {
  return (
    <g>
      <rect x="40" y={y} width="720" height="44" rx="6" fill="var(--surface)" stroke="var(--line)" strokeWidth="1" />
      <text x="52" y={y + 18} fill={color} fontSize="10" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase">
        {label}
      </text>
      {items.map((item, i) => (
        <text key={item} x={52 + i * 180} y={y + 34} fill="var(--text-secondary)" fontSize="11">
          {item}
        </text>
      ))}
    </g>
  )
}

function ConnectionLine({ y1, y2 }) {
  return (
    <line x1="400" y1={y1} x2="400" y2={y2} stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="4 3" />
  )
}

function PayNovaDiagram() {
  const h = 320
  return (
    <svg viewBox={`0 0 800 ${h}`} className="w-full h-auto" role="img" aria-label="PayNova ERM architecture diagram">
      <rect x="0" y="0" width="800" height={h} fill="var(--bg)" rx="8" />
      <Layer label="Risk Intelligence Layer" y={30} color="var(--risk-high)" items={['Cyber Risk Engine', 'Operational Risk', 'Vendor Risk Scoring', 'Regulatory Mapping']} />
      <ConnectionLine y1={74} y2={100} />
      <Layer label="Control Framework" y={100} color="var(--accent-soft)" items={['Three Lines of Defense', 'Automated Testing', 'Control Library', 'Remediation']} />
      <ConnectionLine y1={144} y2={170} />
      <Layer label="Monitoring & Dashboard" y={170} color="var(--accent-mid)" items={['Real-Time Risk Pane', 'Board Reporting', 'Threshold Alerts', 'Trend Analytics']} />
      <ConnectionLine y1={214} y2={240} />
      <Layer label="Regulatory Alignment" y={240} color="var(--accent-warm)" items={['CBN Compliance', 'FCA Alignment', 'SEC Reporting', 'PSD2 Controls']} />
    </svg>
  )
}

function AIGovernanceDiagram() {
  const h = 320
  return (
    <svg viewBox={`0 0 800 ${h}`} className="w-full h-auto" role="img" aria-label="AI Governance architecture diagram">
      <rect x="0" y="0" width="800" height={h} fill="var(--bg)" rx="8" />
      <Layer label="Zero Trust AI Boundary" y={30} color="var(--risk-high)" items={['Identity Verification', 'Continuous Validation', 'Least Privilege', 'Blast Radius Limits']} />
      <ConnectionLine y1={74} y2={100} />
      <Layer label="Guardrail Engine" y={100} color="var(--accent-soft)" items={['Decision Validation', 'Policy Enforcement', 'Context Analysis', 'Real-Time Scoring']} />
      <ConnectionLine y1={144} y2={170} />
      <Layer label="Lineage & Audit" y={170} color="var(--accent-mid)" items={['Decision Tracing', 'Explainability', 'Audit Trails', 'Incident Logging']} />
      <ConnectionLine y1={214} y2={240} />
      <Layer label="Oversight & Response" y={240} color="var(--accent-warm)" items={['Human-in-the-Loop', 'Automated Escalation', 'Incident Response', 'Governance Review']} />
    </svg>
  )
}

function SOC2ISODiagram() {
  const h = 320
  return (
    <svg viewBox={`0 0 800 ${h}`} className="w-full h-auto" role="img" aria-label="SOC 2 and ISO 27001 compliance architecture diagram">
      <rect x="0" y="0" width="800" height={h} fill="var(--bg)" rx="8" />
      <Layer label="Evidence Pipeline" y={30} color="var(--accent-soft)" items={['Automated Collection', 'System Integration', 'Continuous Feed', 'Tamper-Proof Logs']} />
      <ConnectionLine y1={74} y2={100} />
      <Layer label="Control Monitoring" y={100} color="var(--accent-mid)" items={['Real-Time Status', 'Effectiveness Tests', 'Gap Detection', 'Control Mapping']} />
      <ConnectionLine y1={144} y2={170} />
      <Layer label="Audit Management" y={170} color="var(--risk-high)" items={['Evidence Packaging', 'Workflow Tracking', 'Remediation', 'Readiness Scoring']} />
      <ConnectionLine y1={214} y2={240} />
      <Layer label="Continuous Assurance" y={240} color="var(--accent-warm)" items={['Always-On Compliance', 'Automated Reporting', 'Stakeholder Views', 'Certification Tracking']} />
    </svg>
  )
}

function ISO27701Diagram() {
  const h = 320
  return (
    <svg viewBox={`0 0 800 ${h}`} className="w-full h-auto" role="img" aria-label="ISO 27701 privacy management architecture diagram">
      <rect x="0" y="0" width="800" height={h} fill="var(--bg)" rx="8" />
      <Layer label="Privacy Impact Assessment" y={30} color="var(--accent-soft)" items={['Automated PIA Triggers', 'Risk Scoring', 'Mitigation Tracking', 'Approval Workflows']} />
      <ConnectionLine y1={74} y2={100} />
      <Layer label="ROPA Management" y={100} color="var(--accent-mid)" items={['Centralized Registry', 'Automated Updates', 'Data Flow Mapping', 'Retention Policies']} />
      <ConnectionLine y1={144} y2={170} />
      <Layer label="DSR & Breach" y={170} color="var(--risk-high)" items={['Request Automation', 'Identity Verification', 'Breach Notification', 'Regulatory Reporting']} />
      <ConnectionLine y1={214} y2={240} />
      <Layer label="Privacy by Design" y={240} color="var(--accent-warm)" items={['Embedded Controls', 'Default Protections', 'Vendor Privacy Scoring', 'Cross-Border Transfer']} />
    </svg>
  )
}

function VendorRiskDiagram() {
  const h = 320
  return (
    <svg viewBox={`0 0 800 ${h}`} className="w-full h-auto" role="img" aria-label="Vendor risk management architecture diagram">
      <rect x="0" y="0" width="800" height={h} fill="var(--bg)" rx="8" />
      <Layer label="Vendor Discovery" y={30} color="var(--accent-mid)" items={['Ecosystem Mapping', 'Tier Categorization', 'Critical Path Analysis', 'Dependency Graph']} />
      <ConnectionLine y1={74} y2={100} />
      <Layer label="Assessment Engine" y={100} color="var(--accent-soft)" items={['Automated Questionnaires', 'Evidence Review', 'Risk Scoring', 'Compliance Verification']} />
      <ConnectionLine y1={144} y2={170} />
      <Layer label="Continuous Monitoring" y={170} color="var(--risk-high)" items={['Real-Time Alerts', 'Dark Web Monitoring', 'Control Validation', 'Incident Feed']} />
      <ConnectionLine y1={214} y2={240} />
      <Layer label="Governance Reporting" y={240} color="var(--accent-warm)" items={['Board Dashboards', 'Regulatory Filing', 'Trend Analysis', 'Risk Appetite Tracking']} />
    </svg>
  )
}

export const NAV_ITEMS = [
  { href: '#hero', label: 'Home' },
  { href: '#governance-projects', label: 'Governance Projects' },
  { href: '#research-insights', label: 'Research & Insights' },
  { href: '#frameworks', label: 'Frameworks' },
  { href: '#visual-intelligence', label: 'Risk Intelligence' },
  { href: '#experience', label: 'Experience' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#advisory', label: 'Advisory' },
  { href: '#contact', label: 'Contact' },
]

export const HERO_CONTENT = {
  headline: 'Inny Stevens | Technology & Risk Architect',
  positioning: 'Cybersecurity Governance, AI Risk Intelligence & Enterprise Assurance',
  subheadline:
    'Enterprise cybersecurity governance strategist and AI governance professional specializing in risk intelligence, compliance architecture, and operational resilience for fintech and regulated markets. Building governance systems that transform regulatory complexity into strategic advantage.',
  metrics: [
    { value: '5+', label: 'Governance Systems' },
    { value: '12+', label: 'Frameworks Operationalized' },
    { value: '3', label: 'Cross-Border Markets' },
    { value: '100%', label: 'Governance Architecture Focus' },
  ],
  specializations: [
    'Cybersecurity Governance & Risk Intelligence',
    'AI Governance & Zero Trust Oversight',
    'Fintech Compliance & Cross-Border Risk',
    'Enterprise Operational Resilience',
  ],
  ctas: [
    { label: 'View Governance Projects', href: '#governance-projects', variant: 'primary' },
    { label: 'Book Governance Consultation', href: '#contact', variant: 'secondary' },
    { label: 'Download Executive CV', href: '#', variant: 'ghost' },
  ],
}

export const TRUST_SIGNALS = [
  { framework: 'NIST CSF 2.0', domain: 'Cybersecurity', maturity: 'Advanced' },
  { framework: 'ISO 27001', domain: 'Information Security', maturity: 'Lead Implementer' },
  { framework: 'SOC 2', domain: 'Trust Services', maturity: 'Certified' },
  { framework: 'COSO ERM', domain: 'Enterprise Risk', maturity: 'Practitioner' },
  { framework: 'NIST AI RMF', domain: 'AI Governance', maturity: 'Specialist' },
  { framework: 'ISO 27701', domain: 'Privacy Governance', maturity: 'Practitioner' },
  { framework: 'GDPR', domain: 'Data Protection', maturity: 'Compliance' },
  { framework: 'ISO 42001', domain: 'AI Management', maturity: 'Research' },
]

export const WHY_HIRE_ITEMS = [
  {
    icon: 'Shield',
    title: 'Enterprise Risk Intelligence',
    description:
      'Systematic risk assessment and governance frameworks that transform organizational exposure into strategic advantage across cyber, operational, and regulatory domains.',
  },
  {
    icon: 'Workflow',
    title: 'Compliance Operations',
    description:
      'Operationalized compliance systems that maintain continuous audit readiness while enabling business velocity and regulatory confidence.',
  },
  {
    icon: 'Sparkles',
    title: 'AI Governance Systems',
    description:
      'Zero Trust AI oversight, accountability frameworks, and operational guardrails for autonomous systems and intelligent decision-making pipelines.',
  },
  {
    icon: 'Crown',
    title: 'Cross-Border Governance',
    description:
      'Regulatory navigation across UK, EU, and US markets with focus on fintech compliance, vendor risk, and multi-jurisdictional assurance.',
  },
  {
    icon: 'Workflow',
    title: 'Governance Engineering',
    description:
      'Built-in governance controls from architecture to deployment, reducing risk before it compounds through automated controls and continuous monitoring.',
  },
]

export const GOVERNANCE_PROJECTS = [
  {
    id: 'paynova',
    title: 'PayNova Enterprise Risk Management Platform',
    category: 'Enterprise Risk Management',
    summary: 'Comprehensive ERM system for Nigerian fintech expansion across UK, EU, and USA markets with integrated cyber, vendor, and regulatory risk management.',
    executiveSummary: 'Designed and implemented a consolidated enterprise risk management platform for a Nigerian fintech scaling operations across three major regulatory jurisdictions. The platform unified operational risk, cyber risk, vendor risk, and regulatory exposure into a single governance pane with board-level reporting capabilities.',
    businessContext: 'Nigerian fintech scaling operations across three major regulatory jurisdictions while maintaining continuous compliance with CBN, FCA, and SEC requirements.',
    governanceChallenge: 'Cross-border compliance harmonization, vendor risk aggregation, board-level risk visibility across multiple regulatory regimes, and real-time risk appetite monitoring.',
    riskExposure: 'Operational risk in payment processing, cyber risk in cross-border transactions, vendor risk in partner ecosystems, and regulatory exposure in multiple jurisdictions.',
    frameworksApplied: ['ISO 31000', 'COSO ERM', 'NIST CSF 2.0', 'PSD2', 'GDPR', 'CCPA'],
    operationalDesign: 'Integrated risk registry with automated control testing, continuous monitoring dashboards, executive reporting suites, and risk appetite threshold alerts.',
    governanceArchitecture: 'Three-line-of-defense model with automated control testing, real-time risk dashboards, board-level risk appetite reporting, and regulatory filing automation.',
    keyFindings: 'Implemented risk appetite framework aligned with business objectives, reduced vendor risk by 60% through automated assessment workflows, achieved 95% control test coverage.',
    lessonsLearned: 'Early integration of compliance controls significantly reduces remediation costs during expansion phases. Proactive regulatory engagement accelerates market entry timelines.',
    strategicRecommendations: 'Establish continuous regulatory monitoring function, implement tiered vendor assessment program, deploy automated compliance controls across all payment processing pipelines.',
    riskMatrix: { likelihood: 3, impact: 4, residual: 2 },
    metrics: { riskReduction: '60%', controlCoverage: '95%', assessmentTime: '70%' },
  },
  {
    id: 'ai-governance',
    title: 'AI Governance & Autonomous Agent Risk Platform',
    category: 'AI Governance',
    summary: 'Zero Trust AI governance framework for autonomous agent oversight, accountability, and operational guardrails.',
    executiveSummary: 'Architected a comprehensive AI governance platform incorporating Zero Trust principles for autonomous agent oversight. The system provides real-time guardrails, decision lineage tracking, and incident governance workflows for enterprise AI deployments.',
    businessContext: 'Enterprise deployment of autonomous AI agents requiring explainability, auditability, and controlled decision-making capabilities across multiple operational domains.',
    governanceChallenge: 'Establishing trust boundaries for autonomous systems, implementing least privilege for AI decisions, ensuring accountability chains, and maintaining human oversight.',
    riskExposure: 'Model drift risk, adversarial input risk, explainability gaps, AI incident escalation without human oversight, and regulatory non-compliance exposure.',
    frameworksApplied: ['NIST AI RMF', 'ISO 42001', 'EU AI Act Research', 'Zero Trust AI Principles'],
    operationalDesign: 'Real-time guardrails engine, decision lineage tracking, incident governance workflows, explainability dashboards, and automated AI audit trails.',
    governanceArchitecture: 'Zero Trust AI architecture with identity-based access controls, continuous validation, decision logging, and automated incident response workflows.',
    keyFindings: 'Zero Trust principles effectively limit AI blast radius by 80%, decision lineage enables sub-minute incident response, and explainability dashboards improve auditor confidence.',
    lessonsLearned: 'AI governance must be architected before deployment, not retroactively implemented. Human-in-the-loop controls reduce autonomous decision risk by 70%.',
    strategicRecommendations: 'Implement staged AI deployment with governance checkpoints, maintain human-in-the-loop for critical decisions, deploy continuous AI monitoring and validation.',
    riskMatrix: { likelihood: 4, impact: 5, residual: 2 },
    metrics: { blastRadiusReduction: '80%', incidentResponse: '<1min', humanOversight: '70%' },
  },
  {
    id: 'soc2-iso',
    title: 'SOC 2 & ISO 27001 Compliance Operations Platform',
    category: 'Compliance Automation',
    summary: 'Evidence management and continuous compliance system for SOC 2 Type II and ISO 27001 certification programs.',
    executiveSummary: 'Designed and deployed a continuous compliance operations platform for a fintech organization pursuing dual SOC 2 Type II and ISO 27001 certification. The system automated evidence collection, control monitoring, and audit readiness workflows.',
    businessContext: 'Fintech organization pursuing dual certification while maintaining rapid development velocity and continuous feature delivery across multiple product lines.',
    governanceChallenge: 'Maintaining audit readiness without slowing development, automating evidence collection across distributed systems, and ensuring control effectiveness.',
    riskExposure: 'Control deficiency risk, audit failure risk, evidence gaps, and compliance drift during rapid iteration cycles and feature deployments.',
    frameworksApplied: ['SOC 2', 'ISO 27001', 'NIST CSF 2.0', 'CCM'],
    operationalDesign: 'Automated control monitoring, evidence repository, audit workflow management, continuous compliance dashboards, and remediation tracking.',
    governanceArchitecture: 'Continuous compliance framework with automated evidence pipelines, real-time control status monitoring, and integrated remediation workflows.',
    keyFindings: 'Automation reduced evidence collection time by 75%, continuous monitoring caught 90% of control gaps before audit, audit preparation time reduced from 8 weeks to 2 weeks.',
    lessonsLearned: 'Integrated compliance tooling pays dividends in reduced audit preparation time. Treating compliance as code enables continuous assurance rather than point-in-time audits.',
    strategicRecommendations: 'Treat compliance as code, integrate controls into CI/CD pipelines, maintain continuous audit readiness through automated evidence collection and monitoring.',
    riskMatrix: { likelihood: 2, impact: 4, residual: 1 },
    metrics: { evidenceTime: '75%', controlGaps: '90%', auditPrep: '75%' },
  },
  {
    id: 'iso27701',
    title: 'ISO 27701 Privacy Information Management System',
    category: 'Privacy Governance',
    summary: 'Operationalized privacy management system for PII processing, ROPA automation, and cross-border data transfer governance.',
    executiveSummary: 'Developed and implemented an operationalized privacy information management system covering PII processing at scale, automated ROPA management, and cross-border data transfer governance.',
    businessContext: 'Enterprise expanding data processing operations across multiple jurisdictions while maintaining strict privacy compliance under GDPR, NDPR, and other regulatory regimes.',
    governanceChallenge: 'Privacy impact assessment at scale, ROPA automation, vendor transfer risk management, and privacy control implementation across distributed systems.',
    riskExposure: 'Privacy breach risk, regulatory penalty risk, data subject right fulfillment gaps, and cross-border transfer violations.',
    frameworksApplied: ['ISO 27701', 'GDPR', 'NDPR', 'Privacy by Design'],
    operationalDesign: 'PIA automation workflows, ROPA database, vendor risk scoring, privacy control libraries, DSR management system, and breach notification workflows.',
    governanceArchitecture: 'Privacy governance framework with automated PIA triggers, centralized ROPA repository, vendor privacy risk scoring, and continuous control monitoring.',
    keyFindings: 'Automated PIA process reduced privacy assessment time from weeks to days, privacy control library improved consistency by 85%, DSR fulfillment time reduced by 60%.',
    lessonsLearned: 'Privacy governance requires embedded processes across the entire data lifecycle, not just policy documents. Automation is essential for privacy at scale.',
    strategicRecommendations: 'Implement privacy-by-default controls across all data processing, automate DSR workflows, maintain cross-border transfer records, deploy continuous privacy monitoring.',
    riskMatrix: { likelihood: 3, impact: 4, residual: 2 },
    metrics: { piaTime: '85%', consistency: '85%', dsrFulfillment: '60%' },
  },
  {
    id: 'vendor-risk',
    title: 'Vendor Risk & Third Party Governance Platform',
    category: 'Third Party Risk',
    summary: 'Fintech vendor governance system for cross-border vendor assessment, risk scoring, and compliance verification.',
    executiveSummary: 'Architected a comprehensive vendor risk management platform for a rapidly scaling fintech, providing continuous vendor oversight across payments, cloud infrastructure, and data processing partners.',
    businessContext: 'Rapidly scaling fintech requiring continuous vendor oversight across payments, cloud, and data processing partners operating in multiple regulatory jurisdictions.',
    governanceChallenge: 'Supplier risk aggregation, compliance verification at scale, operational dependency mapping, and continuous monitoring across distributed vendor ecosystem.',
    riskExposure: 'Vendor security risk, compliance chain vulnerabilities, operational dependency risk, and third-party data breach exposure.',
    frameworksApplied: ['ISO 27001', 'NIST CSF 2.0', 'SOC 2', 'Third Party Risk Management'],
    operationalDesign: 'Supplier risk scoring engine, compliance verification workflows, dependency mapping dashboard, continuous monitoring, and automated assessment workflows.',
    governanceArchitecture: 'Tiered vendor governance framework with risk-based categorization, automated assessment workflows, real-time dependency mapping, and continuous monitoring dashboards.',
    keyFindings: 'Risk-based vendor categorization reduced assessment overhead by 40%, risk detection coverage improved by 55%, and third-party incident response time reduced by 65%.',
    lessonsLearned: 'Vendor risk must be continuously monitored, not assessed annually. Automated verification workflows significantly reduce operational overhead.',
    strategicRecommendations: 'Implement tiered vendor assessment program, automate compliance verification, maintain real-time dependency visibility, deploy continuous vendor monitoring.',
    riskMatrix: { likelihood: 3, impact: 3, residual: 1 },
    metrics: { assessmentOverhead: '40%', riskDetection: '55%', incidentResponse: '65%' },
  },
]

export const PROJECT_WORKFLOWS = {
  paynova: {
    stages: [
      { phase: 'Risk Identification', status: 'complete', description: 'Operational, cyber, vendor, regulatory risk mapping across three jurisdictions' },
      { phase: 'Control Design', status: 'complete', description: 'Three-line-of-defense model with automated testing controls' },
      { phase: 'Dashboard Implementation', status: 'complete', description: 'Real-time risk dashboards with board-level reporting' },
      { phase: 'Regulatory Alignment', status: 'complete', description: 'CBN, FCA, SEC compliance requirements mapped to controls' },
      { phase: 'Continuous Monitoring', status: 'active', description: 'Automated control testing and risk appetite threshold alerts' },
    ],
  },
  'ai-governance': {
    stages: [
      { phase: 'Trust Boundary Definition', status: 'complete', description: 'AI decision scope, authority levels, and oversight requirements' },
      { phase: 'Guardrail Engine', status: 'complete', description: 'Real-time AI decision validation and boundary enforcement' },
      { phase: 'Lineage Tracking', status: 'complete', description: 'End-to-end AI decision traceability and audit trails' },
      { phase: 'Incident Workflows', status: 'active', description: 'Automated AI incident detection, escalation, and response' },
      { phase: 'Explainability Layer', status: 'active', description: 'Model decision explanations and auditor-facing dashboards' },
    ],
  },
  'soc2-iso': {
    stages: [
      { phase: 'Control Framework Mapping', status: 'complete', description: 'SOC 2 and ISO 27001 control mapping to organizational systems' },
      { phase: 'Evidence Pipeline', status: 'complete', description: 'Automated evidence collection from distributed systems' },
      { phase: 'Monitoring Deployment', status: 'complete', description: 'Real-time control status monitoring and alerting' },
      { phase: 'Audit Workflows', status: 'complete', description: 'Audit preparation, evidence packaging, and remediation tracking' },
      { phase: 'Continuous Assurance', status: 'active', description: 'Ongoing control effectiveness validation and reporting' },
    ],
  },
  iso27701: {
    stages: [
      { phase: 'PIA Automation', status: 'complete', description: 'Automated privacy impact assessment triggers and workflows' },
      { phase: 'ROPA Implementation', status: 'complete', description: 'Centralized record of processing activities with automated updates' },
      { phase: 'Vendor Privacy Scoring', status: 'complete', description: 'Privacy risk scoring for data processing vendors' },
      { phase: 'DSR Management', status: 'complete', description: 'Automated data subject request fulfillment workflows' },
      { phase: 'Continuous Monitoring', status: 'active', description: 'Ongoing privacy control effectiveness validation' },
    ],
  },
  'vendor-risk': {
    stages: [
      { phase: 'Vendor Discovery', status: 'complete', description: 'Comprehensive vendor ecosystem mapping and categorization' },
      { phase: 'Tiered Assessment', status: 'complete', description: 'Risk-based vendor assessment framework deployment' },
      { phase: 'Scoring Engine', status: 'complete', description: 'Automated supplier risk scoring and compliance verification' },
      { phase: 'Dependency Mapping', status: 'complete', description: 'Operational dependency visualization and critical path analysis' },
      { phase: 'Continuous Monitoring', status: 'active', description: 'Real-time vendor risk monitoring and alerting' },
    ],
  },
}

export const RESEARCH_INSIGHTS = [
  {
    title: 'Good AI vs Rogue AI: The Governance Chasm',
    excerpt: 'Exploring the critical governance divide between beneficial autonomous systems and uncontrolled AI agents, and why accountability frameworks determine the outcome.',
    date: '2024',
    category: 'AI Governance',
    readingTime: '5 min',
    content: 'The line between beneficial AI and rogue AI is not technical, it is governance. When autonomous systems operate without accountability frameworks, transparency requirements, and human oversight mechanisms, they drift from controlled tools to uncontrolled agents. This piece explores the governance architecture that keeps AI aligned with organizational intent and regulatory requirements.',
  },
  {
    title: 'Why Zero Trust Matters for Autonomous AI',
    excerpt: 'Applying Zero Trust principles to AI decision-making creates accountable, auditable, and resilient autonomous systems.',
    date: '2024',
    category: 'Security Architecture',
    readingTime: '6 min',
    content: 'Zero Trust is not just for network security. When applied to AI systems, Zero Trust principles create boundaries that limit blast radius, ensure every decision is verified, and maintain continuous validation of AI behavior. This reframes AI governance from a compliance exercise to an architectural discipline.',
  },
  {
    title: 'Operationalizing ISO 27701: Beyond Documentation',
    excerpt: 'Practical approaches to privacy governance that move beyond policy documents into embedded, operational privacy controls.',
    date: '2024',
    category: 'Privacy Governance',
    readingTime: '4 min',
    content: 'Most privacy programs stop at documentation. True privacy governance operationalizes controls across the data lifecycle. This piece covers practical approaches to PIA automation, ROPA management, and privacy-by-default controls that work at enterprise scale.',
  },
  {
    title: 'Governance Beyond Documentation',
    excerpt: 'Moving from checkbox compliance to lived governance systems that respond to real operational risk in real time.',
    date: '2024',
    category: 'Governance Strategy',
    readingTime: '5 min',
    content: 'Checkbox compliance creates a false sense of security. Real governance is operational, continuous, and embedded. This piece explores how organizations can transition from documentation-driven compliance to systems that actively manage risk and respond to changing conditions.',
  },
  {
    title: 'Risk Appetite in Fintech Expansion',
    excerpt: 'Balancing growth velocity with risk tolerance during cross-border market entry and regulatory navigation.',
    date: '2024',
    category: 'Risk Management',
    readingTime: '7 min',
    content: 'Fintech expansion across regulatory jurisdictions requires a nuanced understanding of risk appetite. This piece explores how organizations can balance growth velocity with risk tolerance, maintain regulatory compliance, and build governance systems that scale with market presence.',
  },
  {
    title: 'Continuous Assurance vs Traditional Compliance',
    excerpt: 'The paradigm shift from point-in-time audits to always-on compliance monitoring and real-time reporting.',
    date: '2024',
    category: 'Compliance Innovation',
    readingTime: '5 min',
    content: 'Traditional compliance is reactive and periodic. Continuous assurance transforms compliance into a real-time operational capability. This piece examines the technologies, processes, and governance models that enable always-on compliance monitoring.',
  },
  {
    title: 'AI Governance and Enterprise Accountability',
    excerpt: 'Building accountability chains for AI decision-making in enterprise environments with regulatory scrutiny.',
    date: '2024',
    category: 'AI Governance',
    readingTime: '6 min',
    content: 'Enterprise AI deployments demand clear accountability chains. Who is responsible when an AI system makes a poor decision? This piece explores accountability frameworks, decision lineage requirements, and governance structures that maintain human responsibility for AI outcomes.',
  },
  {
    title: 'Cybersecurity Governance Beyond Technical Controls',
    excerpt: 'Why effective cybersecurity governance requires organizational design, risk culture, and operational maturity, not just technical tools.',
    date: '2024',
    category: 'Governance Strategy',
    readingTime: '4 min',
    content: 'Technical controls are necessary but insufficient for cybersecurity governance. Organizational design, risk culture, board engagement, and operational maturity determine whether security governance is effective or ornamental.',
  },
]

export const FRAMEWORKS = {
  governanceRisk: {
    title: 'Governance & Enterprise Risk',
    maturity: 'Advanced',
    items: [
      { name: 'COSO ERM', description: 'Enterprise risk management framework for integrated risk governance', level: 4 },
      { name: 'FAIR', description: 'Factor analysis of information risk for quantitative risk analysis', level: 3 },
      { name: 'ISO 31000', description: 'Risk management principles and guidelines for enterprise risk architecture', level: 4 },
    ],
  },
  cybersecurity: {
    title: 'Cybersecurity & Compliance',
    maturity: 'Advanced',
    items: [
      { name: 'ISO 27001', description: 'Information security management systems standard (Lead Implementer Track)', level: 4 },
      { name: 'ISO 27701', description: 'Privacy information management extension to ISO 27001', level: 3 },
      { name: 'NIST CSF 2.0', description: 'Cybersecurity framework for critical infrastructure and enterprise security', level: 4 },
      { name: 'SOC 2', description: 'Trust services criteria for service organization controls', level: 4 },
    ],
  },
  aiGovernance: {
    title: 'AI Governance',
    maturity: 'Specialist',
    items: [
      { name: 'NIST AI RMF', description: 'AI risk management framework for trustworthy AI systems', level: 4 },
      { name: 'ISO 42001', description: 'AI management system standard for AI governance programs', level: 3 },
      { name: 'EU AI Act Research', description: 'Regulatory compliance analysis for EU AI Act requirements', level: 3 },
    ],
  },
  privacy: {
    title: 'Privacy & Data Governance',
    maturity: 'Advanced',
    items: [
      { name: 'GDPR', description: 'EU data protection regulation compliance and operationalization', level: 4 },
      { name: 'NDPR', description: 'Nigeria Data Protection Regulation implementation', level: 4 },
      { name: 'Cross Border Privacy', description: 'International data transfer governance and cross-border compliance', level: 3 },
    ],
  },
}

export const RISK_INTELLIGENCE_DATA = {
  riskHeatMap: {
    title: 'Enterprise Risk Landscape',
    description: 'Current risk exposure assessment across key governance domains',
    domains: [
      { name: 'Cyber Risk', likelihood: 3, impact: 4, residual: 2, trend: 'stable' },
      { name: 'Operational Risk', likelihood: 3, impact: 3, residual: 2, trend: 'improving' },
      { name: 'Regulatory Risk', likelihood: 4, impact: 4, residual: 2, trend: 'stable' },
      { name: 'Vendor Risk', likelihood: 3, impact: 3, residual: 1, trend: 'improving' },
      { name: 'AI Risk', likelihood: 4, impact: 5, residual: 2, trend: 'monitoring' },
      { name: 'Privacy Risk', likelihood: 3, impact: 4, residual: 2, trend: 'stable' },
      { name: 'Compliance Risk', likelihood: 2, impact: 4, residual: 1, trend: 'improving' },
      { name: 'Strategic Risk', likelihood: 3, impact: 3, residual: 2, trend: 'stable' },
    ],
  },
  controlEffectiveness: {
    title: 'Control Effectiveness Metrics',
    categories: [
      { name: 'Detective Controls', rate: 92, status: 'effective' },
      { name: 'Preventive Controls', rate: 88, status: 'effective' },
      { name: 'Corrective Controls', rate: 85, status: 'effective' },
      { name: 'Directive Controls', rate: 90, status: 'effective' },
      { name: 'Compensating Controls', rate: 78, status: 'adequate' },
    ],
  },
  maturityLevels: {
    title: 'Governance Maturity Assessment',
    domains: [
      { name: 'Risk Management', level: 4, target: 5 },
      { name: 'Compliance Operations', level: 4, target: 5 },
      { name: 'AI Governance', level: 3, target: 4 },
      { name: 'Privacy Governance', level: 4, target: 5 },
      { name: 'Vendor Governance', level: 3, target: 4 },
      { name: 'Security Architecture', level: 4, target: 5 },
    ],
  },
}

export const GOVERNANCE_ARCHITECTURE = {
  systems: [
    {
      domain: 'Governance & Risk',
      components: ['Risk Registry', 'Control Library', 'Policy Management', 'Issue Tracking'],
      integration: 'Centralized risk data platform with API-first architecture',
    },
    {
      domain: 'Compliance Operations',
      components: ['Evidence Collection', 'Audit Workflows', 'Control Monitoring', 'Remediation'],
      integration: 'Continuous compliance pipeline with automated evidence gathering',
    },
    {
      domain: 'AI Governance',
      components: ['Guardrail Engine', 'Decision Lineage', 'Explainability', 'Incident Response'],
      integration: 'Zero Trust AI architecture with real-time validation',
    },
    {
      domain: 'Privacy Management',
      components: ['PIA Automation', 'ROPA Database', 'DSR Workflows', 'Breach Notification'],
      integration: 'Privacy-by-design controls embedded across data lifecycle',
    },
    {
      domain: 'Vendor Governance',
      components: ['Risk Scoring', 'Assessment Engine', 'Dependency Mapping', 'Monitoring'],
      integration: 'Tiered vendor governance with continuous risk monitoring',
    },
  ],
}

export const LEADERSHIP_ITEMS = [
  {
    company: 'GLI International',
    role: 'CTO / CIO',
    period: '2023 - 2024',
    description:
      'Directed digital transformation with cybersecurity governance oversight, infrastructure compliance, and cross-border operational resilience. Established governance frameworks for security architecture, risk management, and regulatory alignment across international operations.',
    governanceFocus: ['Cybersecurity Governance', 'Infrastructure Compliance', 'Operational Resilience', 'Risk Management'],
  },
  {
    company: 'Payledger',
    role: 'Founder & CEO',
    period: '2025 - Present',
    description:
      'Architecting blockchain-native financial infrastructure with embedded compliance controls, risk governance frameworks, and cross-border regulatory alignment. Leading governance-by-design approach for fintech infrastructure serving regulated markets.',
    governanceFocus: ['Fintech Compliance', 'Blockchain Governance', 'Risk Architecture', 'Regulatory Strategy'],
  },
  {
    company: 'PropSocial',
    role: 'Architect & Builder',
    period: '2026 - Present',
    description:
      'Leading architecture of AI-driven distributed marketplace with governance-first design, privacy-preserving controls, and operational accountability frameworks. Implementing AI governance systems for autonomous platform operations.',
    governanceFocus: ['AI Governance', 'Privacy Architecture', 'Platform Governance', 'Operational Controls'],
  },
]

export const GLOBAL_IMPACT_INTRO =
  'Governance and risk systems delivered across international markets, supporting enterprise initiatives and mission-critical infrastructure with governance-first engineering approaches.'

export const GLOBAL_IMPACT_ITEMS = [
  {
    initials: 'GR',
    name: 'GlobalReach Leadership Institute',
    region: 'Virginia, USA',
    impact:
      'Architected enterprise-grade digital infrastructure with compliance-ready data governance, cross-border operational controls, and security governance frameworks.',
  },
  {
    initials: '1H',
    name: '1Hope4Haiti.org',
    region: 'USA',
    impact:
      'Deployed secure web infrastructure with privacy-by-design principles, incident response governance protocols, and operational resilience frameworks.',
  },
  {
    initials: 'SH',
    name: 'Saint Hermanguild Foundation',
    region: 'Nigeria / Australia',
    impact:
      'Engineered cross-border digital governance systems with data protection controls, stakeholder compliance workflows, and continuous assurance monitoring.',
  },
  {
    initials: 'LL',
    name: 'Love & Life Ministry',
    region: 'Nigeria',
    impact:
      'Implemented scalable platforms with cybersecurity governance frameworks, operational resilience protocols, and risk management controls.',
  },
  {
    initials: 'PT',
    name: 'Dr. Pat Tamakloe',
    region: 'Executive Platform',
    impact:
      'Designed executive digital presence with risk-aligned technology strategy, governance assurance controls, and operational accountability frameworks.',
  },
]

export const CAPABILITY_MATRIX = [
  {
    category: 'Cybersecurity Governance',
    level: 'Expert',
    capabilities: ['NIST CSF 2.0 Implementation', 'ISO 27001 Lead Track', 'SOC 2 Certification', 'GRC Architecture & Design', 'Enterprise Risk Management', 'Security Control Design & Testing'],
  },
  {
    category: 'AI Governance & Risk',
    level: 'Specialist',
    capabilities: ['NIST AI RMF Implementation', 'ISO 42001 AI Management', 'Zero Trust AI Architecture', 'Explainable AI Frameworks', 'AI Incident Governance', 'Autonomous Agent Oversight'],
  },
  {
    category: 'Privacy & Data Governance',
    level: 'Advanced',
    capabilities: ['ISO 27701 PIMS', 'GDPR Compliance Operations', 'NDPR Implementation', 'ROPA Automation', 'PIA Management', 'DSR Fulfillment Systems'],
  },
  {
    category: 'Fintech Risk Intelligence',
    level: 'Specialist',
    capabilities: ['Cross-Border Compliance', 'Vendor Risk Management', 'Operational Resilience', 'Regulatory Reporting', 'Payment Security Governance', 'Financial Crime Compliance'],
  },
  {
    category: 'Enterprise Governance Systems',
    level: 'Expert',
    capabilities: ['Governance Architecture', 'Continuous Assurance', 'Control Automation', 'Risk Analytics', 'Compliance Engineering', 'Board-Level Reporting'],
  },
]

export const SERVICES = [
  {
    title: 'Cybersecurity Governance Advisory',
    description:
      'Framework-aligned governance systems improving resilience, compliance confidence, and executive risk visibility. Specializing in NIST CSF, ISO 27001, and SOC 2 governance programs.',
    engagement: 'Strategic Advisory',
  },
  {
    title: 'AI Governance Strategy',
    description:
      'Zero Trust AI oversight, accountability frameworks, and operational guardrails for autonomous systems. NIST AI RMF and ISO 42001 aligned governance architecture.',
    engagement: 'Program Design',
  },
  {
    title: 'Enterprise Risk Intelligence',
    description:
      'Risk architecture and continuous assurance systems for regulated markets and cross-border operations. COSO ERM and ISO 31000 aligned risk frameworks.',
    engagement: 'Platform Implementation',
  },
  {
    title: 'Compliance Operations',
    description:
      'Operationalized compliance tracking, audit readiness, and continuous governance monitoring systems for fintech and enterprise environments.',
    engagement: 'Operations',
  },
  {
    title: 'GRC Systems Architecture',
    description:
      'Built-in governance controls from architecture to deployment, reducing risk before it compounds. API-first GRC platform design and implementation.',
    engagement: 'Architecture & Engineering',
  },
  {
    title: 'Fintech Governance Consulting',
    description:
      'Regulatory navigation, vendor risk management, and cross-border compliance strategies for financial services operating in UK, EU, and US markets.',
    engagement: 'Advisory',
  },
]

export const CERTIFICATIONS = [
  {
    group: 'Governance & Risk',
    items: ['ISO 27001 Learning Track (Lead Implementer Path)', 'NIST CSF 2.0 Practitioner Training', 'COSO ERM Fundamentals Certified', 'FAIR Risk Analysis Foundation'],
  },
  {
    group: 'AI Governance',
    items: ['AWS AI & ML Scholars Program', 'Google AI Essentials Certified', 'Google AI Studio Completion', 'NIST AI RMF Training'],
  },
  {
    group: 'Cybersecurity',
    items: [
      'Cybersecurity Certified Graduate',
      'Google Cybersecurity Professional Certificate',
      'Google Professional Automation with Python',
      'Security Architecture & Engineering Track',
    ],
  },
  {
    group: 'Academic & Professional',
    items: ['B.S. Computer Science (In Progress)', 'Executive Governance Education', 'Cross-Border Compliance Training'],
  },
]

export const FINAL_CTA = {
  headline: 'Governance Collaboration for Enterprise Risk.',
  subtext:
    'Available for cybersecurity governance advisory, AI governance strategy, enterprise risk intelligence, and compliance consulting initiatives. Open to board advisory, fractional governance leadership, and enterprise consulting engagements.',
  actions: [
    { label: 'Book Governance Consultation', href: '#contact', variant: 'primary' },
    { label: 'Download Executive CV', href: '#', variant: 'secondary' },
    { label: 'Contact for Advisory', href: '#contact', variant: 'ghost' },
  ],
}

import innyPortrait from '../assets/inny-s.jpg'
import insight1 from '../assets/insight-1.png'
import insight2 from '../assets/insight-2.png'
import insight3 from '../assets/insight-3.png'

export const NAV_LINKS = [
  { href: '#about',       label: 'About'       },
  { href: '#evolution',   label: 'Career'      },
  { href: '#engagements', label: 'Engagements' },
  { href: '#insights',    label: 'Insights'    },
  { href: '#stack',       label: 'Stack'       },
]

export const MARQUEE_ITEMS = [
  '🏛 GovTech & Identity', '🏦 Digital Banking', '🏥 Critical Healthcare',
  '💳 Fintech & Payments', '🛡 Critical Infrastructure',
  '🌍 National Identity Systems', '⚖ Regulatory Compliance', '🔐 SOC Operations',
]

export const STATS = [
  { num: 100, suffix: 'M+', label: 'Identity records secured'   },
  { num: 35,  suffix: '+',  label: 'Global markets harmonised'  },
  { num: 3,   suffix: '',   label: 'Continents · One standard'  },
  { num: 10,  suffix: '+',  label: 'Years of technical mastery' },
]

export const FEATURES = [
  { icon: '🛡', title: 'Technical Depth',           desc: 'Full-stack engineering enables root-cause analysis others cannot reach.' },
  { icon: '🌐', title: 'Global Regulatory Fluency',  desc: 'GDPR · HIPAA · NDPR · DORA · ISO 27001 — across three continents.'     },
  { icon: '📊', title: 'Board-Level Communication',  desc: 'Translating complex technical risk into executive-ready strategy.'      },
]

export const CHECKLIST = [
  'Hardware & systems engineering foundation',
  'Full-stack MERN development proficiency',
  'SOC operations & threat intelligence',
  'Cisco network architecture & design',
  'ISO 27001 / NIST CSF 2.0 lead auditor',
  'Multi-jurisdictional GRC roadmap design',
]

export const CAREER = [
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

export const PROCESS = [
  { num: '01', title: 'Discovery & Threat Modelling',
    desc: 'Deep-dive assessment of technical architecture, regulatory obligations, and the current threat landscape — from the board down to the API layer.' },
  { num: '02', title: 'Risk Register & Gap Analysis',
    desc: 'Comprehensive risk identification, likelihood and impact scoring across all asset classes, mapped against the relevant compliance framework.' },
  { num: '03', title: 'Roadmap Design & Control Alignment',
    desc: 'Prioritised remediation roadmaps with clear ownership, timelines, and measurable metrics — in language your board will act on.' },
  { num: '04', title: 'Continuous Monitoring & Assurance',
    desc: 'Ongoing control validation, third-party assurance testing, and iterative improvement that adapts to an evolving threat environment.' },
]

export const ENGAGEMENTS = [
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

export const TESTIMONIALS = [
  { initials: 'DA', name: 'Director of IT, NIMC',              role: 'GovTech · Nigeria',
    quote: 'Inny brought a level of technical precision and regulatory fluency we rarely see in a single consultant. The NDPR roadmap was board-approved within two weeks.' },
  { initials: 'CM', name: 'Chief Risk Officer, Revolut',       role: 'Fintech · Europe',
    quote: "The DORA readiness assessment was executed with extraordinary depth. Inny's understanding of both technical controls and regulatory nuance accelerated our programme by months." },
  { initials: 'TK', name: 'VP Healthcare Security, Epic Systems', role: 'Healthcare · North America',
    quote: 'Inny delivered a ransomware resilience framework that our legal, clinical, and engineering teams could all align to. A rare communicator who operates at every level.' },
]

export const STACK = [
  { icon: '📋', title: 'Frameworks',     tags: ['NIST CSF 2.0', 'ISO 27001:2022', 'ISO 31000', 'NIST SP 800-161'] },
  { icon: '⚖️', title: 'Regulatory',    tags: ['GDPR', 'HIPAA', 'NDPR / NDPA', 'DORA'] },
  { icon: '🔍', title: 'Security Tools', tags: ['Wazuh', 'Elastic Stack', 'Nmap', 'Nessus', 'Burp Suite', 'Cisco Packet Tracer'] },
  { icon: '💻', title: 'Development',   tags: ['React.js', 'Node.js', 'MongoDB', 'Linux (Ubuntu 22.04)'] },
]

export const ENGAGEMENT_MODELS = [
  {
    title: 'Strategic Audit & Advisory',
    price: 'Custom', period: 'Engagement',
    tag: 'Roadmap Focus',
    features: [
      'Comprehensive gap analysis & risk register',
      'NIST CSF 2.0 / ISO 27001 readiness',
      'Regulatory compliance mapping (GDPR/DORA)',
      'Executive remediation strategy'
    ]
  },
  {
    title: 'Fractional CISO & Governance',
    price: 'Flexible', period: 'Retainer',
    tag: 'Continuous Assurance',
    popular: true,
    features: [
      'Ongoing board-level technical advisory',
      'Security Operations (SOC) oversight',
      'Third-party risk management (TPRM)',
      'Incident response & recovery leadership'
    ]
  }
]

export const TECH_INSIGHTS = [
  {
    img: insight1,
    cat: 'Regulatory Compliance',
    title: 'The Future of DORA: Harmonising Digital Resilience in EU Fintech',
    date: 'April 2026'
  },
  {
    img: insight2,
    cat: 'Identity Security',
    title: 'Identity Risk at Scale: Lessons from National ID Commission Breaches',
    date: 'March 2026'
  },
  {
    img: insight3,
    cat: 'Strategic GRC',
    title: 'Engineering Governance: Moving from Reactive to Resilient Compliance',
    date: 'February 2026'
  }
]

export const LEAD_LIST = [
  'Global financial regulatory compliance',
  'Blockchain-native payment rails',
  'Threat-resilient infrastructure design',
  'Multi-jurisdictional legal framework',
  'Executive leadership & team building',
]

export const PORTRAIT = innyPortrait

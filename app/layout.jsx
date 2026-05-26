import './globals.css'

export const metadata = {
  title: 'Inny Stevens | Cybersecurity Governance, AI Risk & Enterprise Assurance',
  description:
    'Enterprise cybersecurity governance, AI governance, and operational risk intelligence portfolio. Specializing in GRC architecture, compliance operations, and enterprise risk management for fintech and regulated markets.',
  keywords: [
    'Cybersecurity Governance',
    'GRC Analyst',
    'AI Governance',
    'Enterprise Risk Management',
    'Fintech Compliance',
    'NIST CSF',
    'ISO 27001',
    'SOC 2',
    'Risk Intelligence',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

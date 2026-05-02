import './globals.css'

export const metadata = {
  title: 'Inny Stevens | Technology & Risk Architect',
  description:
    'Executive portfolio of Inny Stevens, Founder, CTO, and Technology Risk Architect focused on secure, intelligent, and scalable digital systems.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

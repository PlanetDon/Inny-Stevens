'use client'

import Navbar from './sections/Navbar'
import HeroSection from './sections/HeroSection'
import TrustStrip from './sections/TrustStrip'
import WhyHireSection from './sections/WhyHireSection'
import ExecutiveLeadershipSection from './sections/ExecutiveLeadershipSection'
import GlobalImpactSection from './sections/GlobalImpactSection'
import CapabilityMatrixSection from './sections/CapabilityMatrixSection'
import AdvisoryServicesSection from './sections/AdvisoryServicesSection'
import CertificationsSection from './sections/CertificationsSection'
import FinalCtaSection from './sections/FinalCtaSection'
import Footer from './sections/Footer'

export default function ExecutivePortfolioPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-secondary)]">
      <Navbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <WhyHireSection />
        <ExecutiveLeadershipSection />
        <GlobalImpactSection />
        <CapabilityMatrixSection />
        <AdvisoryServicesSection />
        <CertificationsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  )
}

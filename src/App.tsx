import { useState, useEffect } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { StatsCounter } from './components/stats/StatsCounter';
import { CompanyStorySection } from './components/story/CompanyStorySection';
import { ServicesSection } from './components/services/ServicesSection';
import { IndustriesSection } from './components/industries/IndustriesSection';
import { WhyChooseUsSection } from './components/why/WhyChooseUsSection';
import { ProcessSection } from './components/process/ProcessSection';
import { PortfolioSection } from './components/portfolio/PortfolioSection';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';
import { RequestQuoteModal } from './components/contact/RequestQuoteModal';

export function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Ensure clean corporate styling theme permanently
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark');
    root.classList.add('light');
  }, []);

  return (
    <div className="bg-[#F6F7F8] text-[#1E293B] min-h-screen selection:bg-[#0F2744] selection:text-white font-sans antialiased">
      {/* Sticky Corporate Header Navigation */}
      <Navbar onRequestQuote={() => setIsQuoteModalOpen(true)} />

      {/* Main Corporate Hero Section */}
      <main>
        <HeroSection onRequestQuote={() => setIsQuoteModalOpen(true)} />

        {/* Corporate Metrics & Compliance Banner */}
        <StatsCounter />

        {/* Company Overview & Philosophy */}
        <CompanyStorySection />

        {/* Core Structural Steel Services & Capabilities */}
        <ServicesSection onRequestQuote={() => setIsQuoteModalOpen(true)} />

        {/* Sectors & Industries Served */}
        <IndustriesSection onRequestQuote={() => setIsQuoteModalOpen(true)} />

        {/* Why Choose CALDIM / Technical Precision Commitment */}
        <WhyChooseUsSection />

        {/* 6-Step Technical Quality Assurance Workflow */}
        <ProcessSection />

        {/* Portfolio & Case Studies Showcase */}
        <PortfolioSection onRequestQuote={() => setIsQuoteModalOpen(true)} />

        {/* Client Endorsements & Reviews */}
        <TestimonialsSection />

        {/* Direct Contact & Inquiry Form */}
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Instant Estimation & Proposal Modal Drawer */}
      <RequestQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}

export default App;

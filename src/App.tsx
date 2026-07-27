import { useState, useEffect } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { StatsCounter } from './components/stats/StatsCounter';
import { WhatWeDoSection } from './components/whatwedo/WhatWeDoSection';
import { ServicesSection } from './components/services/ServicesSection';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
import { GlobalPresenceSection } from './components/global/GlobalPresenceSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';
import { RequestQuoteModal } from './components/contact/RequestQuoteModal';

export function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Force Light Theme permanently across the site
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark');
    root.classList.add('light');
    localStorage.setItem('apex_theme', 'light');
  }, []);

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen selection:bg-[#0084FF] selection:text-white transition-colors duration-300">
      {/* Floating Glass Navbar Header */}
      <Navbar
        onRequestQuote={() => setIsQuoteModalOpen(true)}
      />

      {/* Hero Section */}
      <HeroSection onRequestQuote={() => setIsQuoteModalOpen(true)} />

      {/* Animated Statistics Banner */}
      <StatsCounter />

      {/* WHAT WE DO 4-Card Section (Business sectors, Products, Expertise, Projects) */}
      <WhatWeDoSection onRequestQuote={() => setIsQuoteModalOpen(true)} />

      {/* OUR SERVICES 4-Card Section (Reference 1st Image) */}
      <ServicesSection onRequestQuote={() => setIsQuoteModalOpen(true)} />

      {/* Empty Projects / Story Division Anchor */}
      <section id="story" className="w-full" />

      {/* Client Testimonials */}
      <TestimonialsSection />

      {/* 3D Global Offices Globe */}
      <GlobalPresenceSection />

      {/* Blueprint Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Request Quote Global Modal Drawer */}
      <RequestQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}

export default App;

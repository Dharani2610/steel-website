import React, { useState, useEffect } from 'react';
import { Phone, Mail, ChevronRight, Menu, X, ShieldCheck, ArrowRight } from 'lucide-react';
import { CaldimLogo } from '../common/CaldimLogo';

interface NavbarProps {
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>('#');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#' },
    { label: 'Company Story', href: '#story' },
    { label: 'Services', href: '#services', hasDropdown: true },
    { label: 'Industries', href: '#industries' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'QA Process', href: '#process' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setActiveHash(href);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar - Clean, spacious corporate alignment */}
      <div className="hidden lg:block bg-[#0A192F] text-slate-300 text-xs border-b border-slate-800/80 py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Compliance Badge */}
          <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-amber-500 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
              AISC Quality & PE/SE Registered Engineers
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Tekla Structures & SDS2 Certified Partner</span>
          </div>

          {/* Right Contact Details */}
          <div className="flex items-center gap-6 text-[11px] sm:text-xs font-medium">
            <a href="tel:+18005552253" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#3A6C8C]" />
              <span>+1 (800) 555-CALD</span>
            </a>
            <a href="mailto:inquiry@caldimengineering.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#3A6C8C]" />
              <span>inquiry@caldimengineering.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Header */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0F2744]/95 backdrop-blur-md shadow-xl border-b border-slate-700/60 py-3'
            : 'bg-[#0F2744] border-b border-slate-800 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveHash('#');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group shrink-0"
          >
            <div className="w-10 h-10 rounded-sm bg-[#3A6C8C]/30 border border-[#3A6C8C]/50 flex items-center justify-center group-hover:border-amber-500 transition-colors">
              <CaldimLogo className="w-7 h-7 text-white group-hover:text-amber-500 transition-colors" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-sans font-bold text-xl tracking-wider text-white uppercase leading-none">
                CALDIM
              </span>
              <span className="text-[10px] tracking-[0.2em] font-medium text-slate-400 uppercase mt-0.5">
                Engineering Services
              </span>
            </div>
          </a>

          {/* Center Nav Items */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => {
              const isActive = activeHash === link.href;

              if (link.hasDropdown) {
                return (
                  <div key={link.label} className="relative group">
                    <button
                      onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                      className={`text-xs font-semibold tracking-wider uppercase py-2 transition-colors flex items-center gap-1 cursor-pointer ${
                        isActive || isServicesDropdownOpen ? 'text-amber-500' : 'text-slate-200 hover:text-white'
                      }`}
                    >
                      {link.label}
                      <ChevronRight className="w-3.5 h-3.5 rotate-90 text-slate-400 group-hover:text-amber-500 transition-transform" />
                    </button>

                    {/* Desktop Services Mega Dropdown */}
                    <div className="absolute top-full left-0 w-80 bg-[#0A192F] border border-slate-700 shadow-2xl rounded-sm py-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 translate-y-2 group-hover:translate-y-0 text-left">
                      <div className="px-4 py-2 border-b border-slate-800 text-[11px] font-semibold text-amber-500 uppercase tracking-wider">
                        Core Capabilities
                      </div>
                      <a
                        href="#services"
                        onClick={(e) => handleNavClick(e, '#services')}
                        className="block px-4 py-2.5 text-xs text-slate-200 hover:bg-[#0F2744] hover:text-white transition-colors"
                      >
                        Structural Steel Detailing
                      </a>
                      <a
                        href="#services"
                        onClick={(e) => handleNavClick(e, '#services')}
                        className="block px-4 py-2.5 text-xs text-slate-200 hover:bg-[#0F2744] hover:text-white transition-colors"
                      >
                        PE/SE Connection Engineering
                      </a>
                      <a
                        href="#services"
                        onClick={(e) => handleNavClick(e, '#services')}
                        className="block px-4 py-2.5 text-xs text-slate-200 hover:bg-[#0F2744] hover:text-white transition-colors"
                      >
                        Tekla Structures BIM Detailing
                      </a>
                      <a
                        href="#services"
                        onClick={(e) => handleNavClick(e, '#services')}
                        className="block px-4 py-2.5 text-xs text-slate-200 hover:bg-[#0F2744] hover:text-white transition-colors"
                      >
                        SDS2 3D Steel Modeling
                      </a>
                      <a
                        href="#services"
                        onClick={(e) => handleNavClick(e, '#services')}
                        className="block px-4 py-2.5 text-xs text-slate-200 hover:bg-[#0F2744] hover:text-white transition-colors"
                      >
                        3D Rebar Detailing & BBS
                      </a>
                      <a
                        href="#services"
                        onClick={(e) => handleNavClick(e, '#services')}
                        className="block px-4 py-2.5 text-xs text-slate-200 hover:bg-[#0F2744] hover:text-white transition-colors"
                      >
                        Miscellaneous & Architectural Metals
                      </a>
                      <a
                        href="#services"
                        onClick={(e) => handleNavClick(e, '#services')}
                        className="block px-4 py-2.5 text-xs text-slate-200 hover:bg-[#0F2744] hover:text-white transition-colors"
                      >
                        BIM Coordination & Clash Detection
                      </a>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-semibold tracking-wider uppercase py-2 transition-colors relative whitespace-nowrap ${
                    isActive ? 'text-amber-500' : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500" />}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={onRequestQuote}
              className="px-4 sm:px-5 py-2.5 rounded-sm bg-[#D97706] hover:bg-[#B45309] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Request Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-sm bg-[#0A192F] text-white border border-slate-700"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0A192F] text-white border-b border-slate-800 px-6 py-6 space-y-3 shadow-2xl text-left">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block text-xs font-semibold uppercase tracking-wider py-2.5 border-b border-slate-800 transition-colors ${
                activeHash === link.href ? 'text-amber-500' : 'text-slate-200 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full py-3 rounded-sm bg-[#D97706] hover:bg-[#B45309] text-white font-semibold text-xs uppercase tracking-wider text-center"
            >
              Request Engineering Proposal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState, useEffect } from 'react';
import { PhoneCall, ChevronRight, Menu, X } from 'lucide-react';
import { CaldimLogo } from '../common/CaldimLogo';

interface NavbarProps {
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onRequestQuote
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'WHAT WE DO', href: '#services' },
    { label: 'PROJECTS', href: '#story' },
    { label: 'ABOUT', href: '#global' },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [localActiveLink, setLocalActiveLink] = useState<string>('#');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    setLocalActiveLink(href);
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
    <header
      className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl w-[calc(100%-2rem)] bg-transparent"
    >
      {/* Top Navbar Row */}
      <div 
        className="w-full bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-slate-200/80 px-6 py-3 flex items-center justify-between rounded-full"
      >
        {/* Brand Logo & Name */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setLocalActiveLink('#');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group"
        >
          <div className="relative p-1 rounded-xl bg-gradient-to-br from-[#0084FF]/20 to-[#4F46E5]/20 border border-[#0084FF]/40 flex items-center justify-center group-hover:border-[#0084FF] group-hover:shadow-[0_0_20px_rgba(0,132,255,0.6)] transition-all">
            <CaldimLogo className="w-9 h-7 text-[#0084FF]" />
          </div>
          <span className="font-heading font-black text-2xl tracking-wider text-black">
            CALDIM
          </span>
        </a>

        {/* Center Nav Items */}
        <nav className="hidden lg:flex items-center gap-6 px-4 py-1 transition-colors">
          {navLinks.map((link) => {
            const isActive = localActiveLink === link.href;
            if (link.label === 'WHAT WE DO') {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsDropdownOpen(!isDropdownOpen);
                    setLocalActiveLink(link.href);
                  }}
                  className={`px-1 py-1.5 text-xs font-body tracking-wider transition-all border-b-2 cursor-pointer ${
                    isActive || isDropdownOpen
                      ? 'text-[#0084FF] border-[#0084FF] font-bold'
                      : 'text-slate-600 border-transparent hover:text-[#0084FF] hover:border-slate-300'
                  }`}
                >
                  {link.label}
                </a>
              );
            }
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-1 py-1.5 text-xs font-body tracking-wider transition-all border-b-2 ${
                  isActive
                    ? 'text-[#0084FF] border-[#0084FF] font-bold'
                    : 'text-slate-600 border-transparent hover:text-[#0084FF] hover:border-slate-300'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Buttons */}
        <div className="hidden sm:flex items-center gap-3">

          <button
            onClick={onRequestQuote}
            className="relative group px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0084FF] to-[#4F46E5] text-white font-heading font-bold text-xs uppercase tracking-wider overflow-hidden shadow-[0_0_20px_rgba(0,132,255,0.4)] hover:shadow-[0_0_30px_rgba(0,132,255,0.7)] transition-all transform hover:-translate-y-0.5"
          >
            <span className="relative z-10 flex items-center gap-2">
              Request Quote
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-800"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mega Dropdown Panel (WHAT WE DO) */}
      {isDropdownOpen && (
        <div 
          className="hidden lg:block w-full bg-black text-white p-8 mt-2 rounded-3xl relative border border-slate-800 shadow-2xl animate-dropdown-in"
        >
          {/* Close button top left */}
          <button
            onClick={() => setIsDropdownOpen(false)}
            className="absolute -top-2.5 -left-2.5 w-7 h-7 rounded-full bg-[#0084FF] border-2 border-white flex items-center justify-center text-white font-black text-xs hover:bg-[#0066CC] transition-all shadow-lg cursor-pointer z-20"
            title="Close Menu"
          >
            ✕
          </button>

          <div className="grid grid-cols-4 gap-8 pt-2 pl-4">
            {/* Column 1: Structural & Design */}
            <div>
              <h4 className="font-heading font-black text-sm text-[#0084FF] tracking-wider uppercase mb-4">
                Structural & Design
              </h4>
              <ul className="space-y-2.5 font-body text-xs text-slate-300">
                <li 
                  onClick={(e) => handleNavClick(e as any, '#services')}
                  className="hover:text-[#0084FF] cursor-pointer transition-colors"
                >
                  Structural Steel Detailing
                </li>
                <li 
                  onClick={(e) => handleNavClick(e as any, '#services')}
                  className="hover:text-[#0084FF] cursor-pointer transition-colors"
                >
                  Connection Design
                </li>
                <li 
                  onClick={(e) => handleNavClick(e as any, '#services')}
                  className="hover:text-[#0084FF] cursor-pointer transition-colors"
                >
                  Precast Detailing & Design
                </li>
              </ul>
            </div>

            {/* Column 2: BIM & Coordination */}
            <div>
              <h4 className="font-heading font-black text-sm text-[#0084FF] tracking-wider uppercase mb-4">
                BIM & Coordination
              </h4>
              <ul className="space-y-2.5 font-body text-xs text-slate-300">
                <li 
                  onClick={(e) => handleNavClick(e as any, '#services')}
                  className="hover:text-[#0084FF] cursor-pointer transition-colors"
                >
                  BIM Services & Coordination
                </li>
                <li 
                  onClick={(e) => handleNavClick(e as any, '#services')}
                  className="hover:text-[#0084FF] cursor-pointer transition-colors"
                >
                  Rebar Detailing
                </li>
                <li 
                  onClick={(e) => handleNavClick(e as any, '#services')}
                  className="hover:text-[#0084FF] cursor-pointer transition-colors"
                >
                  MEP Coordination
                </li>
              </ul>
            </div>

            {/* Column 3: Specialized Detailing */}
            <div>
              <h4 className="font-heading font-black text-sm text-[#0084FF] tracking-wider uppercase mb-4">
                Specialized Detailing
              </h4>
              <ul className="space-y-2.5 font-body text-xs text-slate-300">
                <li 
                  onClick={(e) => handleNavClick(e as any, '#services')}
                  className="hover:text-[#0084FF] cursor-pointer transition-colors"
                >
                  Architectural Detailing
                </li>
                <li 
                  onClick={(e) => handleNavClick(e as any, '#services')}
                  className="hover:text-[#0084FF] cursor-pointer transition-colors"
                >
                  Shop & Erection Drawings
                </li>
                <li 
                  onClick={(e) => handleNavClick(e as any, '#services')}
                  className="hover:text-[#0084FF] cursor-pointer transition-colors"
                >
                  Tekla & SDS2 3D Detailing
                </li>
              </ul>
            </div>

            {/* Column 4: Image Showcase Card */}
            <div className="relative group/card overflow-hidden rounded-2xl border border-slate-800 shadow-inner flex items-end p-4 min-h-[160px] bg-slate-900">
              <img
                src="/hero-bg.png"
                alt="CALDIM Steel Construction Expertise"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/card:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10 flex items-center justify-between w-full">
                <span className="font-heading font-bold text-sm text-white">Expertise</span>
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#0084FF] shadow-md group-hover/card:bg-[#0084FF] group-hover/card:text-white transition-all">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden backdrop-blur-xl border border-slate-200/80 px-6 py-6 space-y-3 animate-fadeIn rounded-3xl bg-white/95 text-slate-900 shadow-xl mt-2 w-full">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block text-sm font-heading font-semibold py-2.5 border-b border-slate-100 transition-colors ${
                localActiveLink === link.href ? 'text-[#0084FF]' : 'text-slate-800 hover:text-[#0084FF]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#0084FF] to-[#4F46E5] text-white font-heading font-bold text-xs uppercase tracking-wider text-center"
            >
              Request Engineering Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

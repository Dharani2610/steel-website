import React from 'react';
import { CaldimLogo } from '../common/CaldimLogo';
import { ArrowUp, Send, Mail, Phone, MapPin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[#0084FF]/20 transition-colors duration-300 relative overflow-hidden text-current">
      <div className="w-full h-1 bg-gradient-to-r from-[#0084FF] via-[#4F46E5] to-[#EAB308] animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="p-1 rounded-xl bg-[#0084FF]/20 border border-[#0084FF]/40 flex items-center justify-center">
                <CaldimLogo className="w-9 h-7 text-[#0084FF]" />
              </div>
              <span className="font-heading font-black text-2xl tracking-wider text-current">
                CALDIM<span className="text-[#0084FF]">ENGINEERING</span>
              </span>
            </a>
            <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed max-w-sm">
              CALDIM Products & Engineering provides world-class structural steel detailing, PE/SE stamped connection design, 3D Tekla BIM modeling, and fabrication drawings for projects worldwide.
            </p>
            <div className="font-numbers text-[10px] text-[#0084FF] uppercase tracking-widest">
              AISC 360-22 • AWS D1.1 • NISD CERTIFIED
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-current mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 font-body text-xs text-[var(--text-muted)]">
              <li><a href="#story" className="hover:text-[#0084FF] transition-colors">3D Construction Story</a></li>
              <li><a href="#services" className="hover:text-[#0084FF] transition-colors">Engineering Services</a></li>
              <li><a href="#inspector" className="hover:text-[#0084FF] transition-colors">3D Connection Inspector</a></li>
              <li><a href="#bim-tool" className="hover:text-[#0084FF] transition-colors">BIM Clash Simulator</a></li>
              <li><a href="#technology" className="hover:text-[#0084FF] transition-colors">Software Capabilities</a></li>
            </ul>
          </div>

          {/* CALDIM Contact Info */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-current mb-4">
              Contact Details
            </h4>
            <ul className="space-y-3 font-body text-xs text-[var(--text-muted)]">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0084FF] shrink-0" />
                <a href="mailto:salesandsupport@caldimengg.com" className="hover:text-[#0084FF] transition-colors break-all">
                  salesandsupport@caldimengg.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0084FF] shrink-0" />
                <a href="tel:+919952968294" className="hover:text-[#0084FF] transition-colors font-numbers">
                  +91 99529 68294
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#EAB308] shrink-0" />
                <a href="https://www.caldimproducts.com" target="_blank" rel="noreferrer" className="hover:text-[#0084FF] transition-colors">
                  www.caldimproducts.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0084FF] shrink-0 mt-0.5" />
                <span>Hosur, Chennai, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-current mb-4">
              CALDIM Dispatch
            </h4>
            <p className="font-body text-xs text-[var(--text-muted)] mb-3">
              Subscribe to CALDIM structural steel & product releases.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="engineer@company.com"
                className="w-full px-3 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[#8C99A5]/30 text-xs font-body text-current focus:border-[#0084FF] focus:outline-none"
              />
              <button className="p-2 rounded-lg bg-[#0084FF] text-white hover:bg-white hover:text-black transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#8C99A5]/15 flex flex-wrap items-center justify-between gap-4 font-numbers text-xs text-[var(--text-muted)]">
          <div>
            © {new Date().getFullYear()} CALDIM PRODUCTS & ENGINEERING INC. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-secondary)] border border-[#8C99A5]/30 hover:border-[#0084FF] hover:text-[#0084FF] transition-all"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

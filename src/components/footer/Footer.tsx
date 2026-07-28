import React from 'react';
import { CaldimLogo } from '../common/CaldimLogo';
import { ArrowUp, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A192F] text-slate-300 border-t border-slate-800 font-sans">
      {/* Top Thin Orange Line */}
      <div className="w-full h-1 bg-[#D97706]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12 text-left">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#3A6C8C]/20 border border-[#3A6C8C]/40 flex items-center justify-center">
                <CaldimLogo className="w-6 h-6 text-[#0099FF]" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-wider text-white uppercase leading-none">
                  CALDIM
                </span>
                <span className="text-[10px] tracking-[0.2em] font-medium text-slate-400 uppercase mt-0.5">
                  Engineering Services
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              CALDIM Engineering is an international engineering firm delivering 3D structural steel detailing, PE/SE stamped connection calculations, Tekla BIM modeling, and fabrication shop drawings.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F2744] border border-slate-700 text-amber-500 text-[11px] font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              AISC 360 • NISD CERTIFIED • AWS D1.1 COMPLIANT
            </div>
          </div>

          {/* Core Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Core Engineering Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Structural Steel Detailing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">PE/SE Connection Engineering</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Tekla Structures 3D BIM</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">SDS2 Steel Detailing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">3D Rebar Detailing & BBS</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Miscellaneous Metals & Stairs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">BIM Coordination & Clash Resolution</a></li>
            </ul>
          </div>

          {/* Company & Sitemap (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Sitemap & Overview
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Executive Overview</a></li>
              <li><a href="#story" className="hover:text-white transition-colors">Company Story & Philosophy</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers & Openings</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Industries Served</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Quality Commitment</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">6-Step QA Workflow</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Featured Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Headquarters</a></li>
            </ul>
          </div>

          {/* Transmittals & Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Headquarters & Transmittals
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#3A6C8C] flex-shrink-0 mt-0.5" />
                <span>Caldim Tech Services LLC<br />8668 John Hickman Pkwy, Suite 903<br />Frisco, Texas 75034</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#3A6C8C] flex-shrink-0" />
                <a href="tel:+12484553855" className="hover:text-white font-technical-num">+1 (248) 455-3855</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#3A6C8C] flex-shrink-0" />
                <a href="mailto:bala@caldimengg.com" className="hover:text-white">bala@caldimengg.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 font-technical-num">
          <div>
            © {new Date().getFullYear()} CALDIM ENGINEERING SERVICES INC. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Transmittal</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0F2744] border border-slate-700 text-white hover:bg-amber-600 transition-colors font-sans text-xs uppercase tracking-wider"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, FileText, Cpu } from 'lucide-react';

interface HeroSectionProps {
  onRequestQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestQuote }) => {
  return (
    <section className="relative w-full bg-[#0F2744] text-white pt-36 sm:pt-40 lg:pt-44 pb-20 lg:pb-28 overflow-hidden blueprint-grid-dark">
      {/* Subtle Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/95 via-[#0F2744]/85 to-[#0F2744] pointer-events-none" />

      {/* Decorative Technical CAD Blueprint Accent Lines */}
      <div className="absolute top-24 right-10 w-96 h-96 border border-slate-700/30 rounded-full pointer-events-none hidden lg:block" />
      <div className="absolute top-44 right-28 w-64 h-64 border border-slate-700/20 rounded-full pointer-events-none hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Corporate Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#3A6C8C]/20 border border-[#3A6C8C]/40 text-slate-200 text-xs font-semibold uppercase tracking-widest mb-6">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>AISC & PE/SE Certified Engineering Firm</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
              Precision Structural Steel <br />
              <span className="text-[#3A6C8C]">Detailing & Engineering</span>
            </h1>

            {/* Sub-headline Paragraph */}
            <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              CALDIM provides high-accuracy 3D Tekla BIM modeling, PE/SE sealed connection design, and CNC-integrated fabrication shop drawings for industrial plants, commercial towers, and infrastructure megastructures worldwide.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={onRequestQuote}
                className="px-7 py-3.5 rounded-sm bg-[#D97706] hover:bg-[#B45309] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl flex items-center gap-2.5"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="px-6 py-3.5 rounded-sm bg-[#0A192F] hover:bg-[#1E293B] text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <span>Engineering Capabilities</span>
                <FileText className="w-4 h-4 text-[#3A6C8C]" />
              </a>
            </div>

            {/* Trust Bullet Items */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 w-full text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>99.8% Fit-Up Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>PE/SE Sealed Calculations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>NC/DSTV Automated Export</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Card - Guaranteed Local 3D Structural Steel Detailing & Erection Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-slate-700/80 shadow-2xl bg-[#0A192F] group">
              <img
                src="/hero-bg.png"
                alt="CALDIM 3D Structural Steel Detailing & Erection Framework"
                className="w-full h-80 sm:h-[420px] object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/20 to-transparent" />

              {/* Technical Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-[#0F2744]/95 border border-slate-700/80 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-sm bg-[#3A6C8C]/20 border border-[#3A6C8C]/40 text-amber-500">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">
                      Tekla Structures & SDS2 3D Modeling
                    </div>
                    <div className="text-[11px] text-slate-300 font-technical-num mt-0.5">
                      Multi-User BIM Execution | AISC 360 Compliant
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

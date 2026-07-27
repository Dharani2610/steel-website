import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onRequestQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestQuote }) => {
  return (
    <section className="w-full bg-[#F8FAFC] pt-24 pb-4 px-3 sm:px-5 lg:px-6 transition-colors duration-300">
      {/* Hero Background Card with 1cm White Border Frame & Curved Corners */}
      <div className="relative min-h-[calc(100vh-7.5rem)] flex flex-col justify-center items-center text-center px-4 py-20 overflow-hidden rounded-[2.5rem] bg-[#05070B] text-white shadow-2xl border border-slate-200/50">
        {/* 3D Generated Architectural Structural Steel Background Image */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem]">
          <img
            src="/hero-bg.png"
            alt="CALDIM Structural Steel Detailing Engineering Background"
            className="w-full h-full object-cover object-center opacity-85 transition-all duration-500 scale-105 filter saturate-[1.85] contrast-[1.15] brightness-[0.96] sepia-[6%]"
          />
          {/* Soft Center Vignette & Radial Contrast Mask for Ultra-Readable Text */}
          <div className="absolute inset-0 bg-radial from-[#05070B]/75 via-[#05070B]/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05070B]/80 via-transparent to-[#05070B]" />
          {/* Sunset Warm Orange Light Leak & Blend Enhancement */}
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-orange-500/15 to-transparent mix-blend-multiply pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          {/* Main Hero Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            CALDIM Engineering <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#0084FF] via-[#38BDF8] to-[#EAB308] bg-clip-text text-transparent glow-text-cyan">
              Every Connection With Precision
            </span>
          </h1>

          {/* Subtitle Paragraph */}
          <p className="max-w-3xl font-body text-base sm:text-xl text-slate-300 leading-relaxed mb-10">
            Delivering Structural Steel Detailing, PE/SE Connection Design, 3D BIM Modeling, Shop Drawings and Engineering Products for Construction Projects Worldwide.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
            <button
              onClick={onRequestQuote}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#0084FF] to-[#4F46E5] text-white font-heading font-bold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(0,132,255,0.5)] hover:shadow-[0_0_45px_rgba(0,132,255,0.8)] hover:scale-105 transition-all flex items-center gap-3"
            >
              <span>Request CALDIM Quote</span>
              <ChevronRight className="w-5 h-5" />
            </button>

            <a
              href="#services"
              className="px-7 py-4 rounded-xl bg-[#0B1118]/80 border border-[#8C99A5]/30 text-white font-heading font-semibold text-sm hover:border-[#0084FF] hover:text-[#0084FF] transition-all backdrop-blur-md shadow-md"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

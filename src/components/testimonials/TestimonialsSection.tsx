import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const industryLogos = [
  {
    name: 'Airbus',
    component: (
      <div className="flex items-center gap-3 px-3 py-1 cursor-pointer transition-transform hover:scale-105">
        <svg className="w-8 h-8 text-[#00205B]" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2.4" />
          <path d="M12 4a8 8 0 0 1 8 8h-4a4 4 0 0 0-4-4V4z" />
          <path d="M12 20a8 8 0 0 1-8-8h4a4 4 0 0 0 4 4v4z" />
        </svg>
        <span className="font-extrabold text-[#00205B] tracking-wider text-base font-sans">AIRBUS</span>
      </div>
    ),
  },
  {
    name: 'Ascent Aerospace',
    component: (
      <div className="flex items-center gap-3 px-3 py-1 cursor-pointer transition-transform hover:scale-105">
        <svg className="w-8 h-5 text-[#E31B23]" viewBox="0 0 40 20" fill="currentColor">
          <path d="M0 10 L28 2 L20 10 L40 10 L20 10 L28 18 Z" />
        </svg>
        <div className="flex flex-col text-left leading-tight">
          <span className="font-bold text-[#0F172A] text-sm tracking-wider font-sans">ASCENT</span>
          <span className="text-[9px] tracking-widest text-[#E31B23] font-bold font-sans">AEROSPACE</span>
        </div>
      </div>
    ),
  },
  {
    name: 'Broetje Automation',
    component: (
      <div className="flex flex-col items-center px-3 py-1 cursor-pointer transition-transform hover:scale-105">
        <div className="w-full h-1.5 bg-[#CC0000] mb-0.5 rounded-full"></div>
        <span className="font-black text-[#003366] text-base tracking-tight font-sans">BROETJE</span>
        <span className="text-[9px] tracking-widest text-[#CC0000] font-extrabold leading-none font-sans">AUTOMATION</span>
      </div>
    ),
  },
  {
    name: 'Davidson',
    component: (
      <div className="flex items-center gap-2.5 px-3 py-1 cursor-pointer transition-transform hover:scale-105">
        <svg className="w-7 h-7 text-[#00A88F]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12 C8 4 2 8 6 14 C10 20 12 14 12 12 Z M12 12 C16 4 22 8 18 14 C14 20 12 14 12 12 Z" />
        </svg>
        <div className="flex flex-col text-left leading-none">
          <span className="font-extrabold text-[#1E293B] text-sm tracking-wider font-sans">DAVIDSON</span>
          <span className="text-[8px] tracking-widest text-[#00A88F] font-extrabold mt-0.5 font-sans">CONSULTING</span>
        </div>
      </div>
    ),
  },
  {
    name: 'Groupe eXtent',
    component: (
      <div className="flex items-center px-3 py-1 cursor-pointer transition-transform hover:scale-105">
        <div className="flex flex-col items-start leading-none">
          <span className="text-[9px] text-[#475569] tracking-wider font-sans font-semibold">GROUPE</span>
          <div className="flex items-baseline">
            <span className="text-base italic font-serif text-[#E65100] font-bold">e</span>
            <span className="text-lg font-black text-[#0055A5] font-sans tracking-tight">Xtent</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: 'Jackson',
    component: (
      <div className="flex items-center px-3 py-1 cursor-pointer transition-transform hover:scale-105">
        <span className="font-serif font-black text-[#0F172A] text-base tracking-widest flex items-center">
          JAC<span className="text-[#0084FF] mx-0.5 text-xl font-sans">X</span>SON
        </span>
      </div>
    ),
  },
  {
    name: 'PMTL Nexeya',
    component: (
      <div className="flex items-center px-3 py-1 cursor-pointer transition-transform hover:scale-105">
        <div className="flex flex-col items-center leading-none">
          <span className="font-black text-[#0A2540] text-base tracking-widest font-sans">PMTL</span>
          <span className="text-[8px] bg-[#00A3E0] text-white font-extrabold px-2.5 py-0.5 rounded-full tracking-wider mt-0.5 font-sans">NEXEYA</span>
        </div>
      </div>
    ),
  },
  {
    name: 'Surfetud',
    component: (
      <div className="flex items-center px-3 py-1 cursor-pointer transition-transform hover:scale-105">
        <span className="font-serif italic text-[#0F2C59] text-base tracking-wide border-b-2 border-[#00A3E0] pb-0.5 font-semibold">surfetud</span>
      </div>
    ),
  },
];

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: '1',
      name: 'Marcus Vance',
      role: 'VP of Structural Operations',
      company: 'Skanska USA Building',
      quote: 'APEX STEEL delivered flawless 3D Tekla models for our 72-floor skyscraper diagrid connections. Their accuracy saved us over 12 weeks of shop fabrication time.',
      rating: 5,
      projectRef: 'The Lumina Skyscraper, NYC'
    },
    {
      id: '2',
      name: 'Sarah Jenkins',
      role: 'Project Director',
      company: 'Multiplex Engineering',
      quote: 'The accuracy of APEX STEEL on the 180-meter long-span roof trusses was exceptional. Every single pin connection fit perfectly on the first crane lift.',
      rating: 5,
      projectRef: 'Titan Sports Arena, Melbourne'
    },
    {
      id: '3',
      name: 'Dr. Aris Thorne',
      role: 'Chief Technical Officer',
      company: 'Fluor Europe',
      quote: 'BIM coordination and clash detection were crucial for this hydrogen plant. APEX detected 1,200+ clashes before fabrication began, eliminating site rework.',
      rating: 5,
      projectRef: 'Hyperion Energy Plant, Rotterdam'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[currentIndex];

  return (
    <section className="pt-0 pb-20 bg-[var(--bg-primary)] transition-colors duration-300 relative overflow-hidden">
      {/* 100% FULL-WIDTH TRUSTED BY INDUSTRY LEADERS MARQUEE BANNER */}
      <div className="w-full bg-[#DDE2E6] dark:bg-slate-800/90 py-12 sm:py-14 border-y border-slate-300 dark:border-slate-700 shadow-md overflow-hidden relative mb-16">
        <h3 className="text-xs sm:text-sm font-bold tracking-[0.3em] text-slate-600 dark:text-slate-300 uppercase text-center mb-8 font-sans">
          TRUSTED BY INDUSTRY LEADERS
        </h3>

        <div className="relative w-full overflow-hidden">
          {/* Fade masks on left & right edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#DDE2E6] dark:from-slate-800/90 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#DDE2E6] dark:from-slate-800/90 to-transparent pointer-events-none z-10" />

          {/* Seamless Infinite Scroll Wrapper */}
          <div className="flex items-center gap-12 sm:gap-16 animate-marquee py-2">
            {/* 4 Identical sets to guarantee 100% gapless continuous infinite loop across all screens */}
            {[...industryLogos, ...industryLogos, ...industryLogos, ...industryLogos].map((logo, idx) => (
              <div key={`logo-marquee-${idx}`} className="shrink-0">
                {logo.component}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] font-numbers text-xs uppercase tracking-wider mb-4">
          CLIENT ENDORSEMENTS
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-current tracking-tight mb-12">
          Trusted By Global Fabricators <br />
          <span className="text-[#00D4FF] glow-text-cyan">& EPC Contractors</span>
        </h2>

        {/* Testimonials Card */}
        <div className="max-w-5xl mx-auto glass-panel p-8 md:p-12 rounded-3xl border border-[#00D4FF]/30 relative text-left shadow-2xl">
          <Quote className="w-12 h-12 text-[#00D4FF]/20 absolute top-6 right-8 pointer-events-none" />

          <div className="flex items-center gap-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FF8C00] text-[#FF8C00]" />
            ))}
            <span className="ml-2 font-numbers text-xs text-[#00D4FF] font-bold">5.0 VERIFIED RATING</span>
          </div>

          <p className="font-body text-base md:text-xl text-current leading-relaxed italic mb-8">
            "{current.quote}"
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#8C99A5]/20">
            <div>
              <h4 className="font-heading text-lg font-bold text-current flex items-center gap-2">
                {current.name}
                <CheckCircle2 className="w-4 h-4 text-[#00D4FF]" />
              </h4>
              <p className="font-body text-xs text-[var(--text-muted)]">
                {current.role} – <span className="text-current font-semibold">{current.company}</span>
              </p>
              <span className="font-numbers text-[10px] text-[#00D4FF] block mt-1">
                PROJECT: {current.projectRef}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-3 rounded-full bg-[var(--bg-secondary)] border border-[#8C99A5]/30 text-current hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
                className="p-3 rounded-full bg-[var(--bg-secondary)] border border-[#8C99A5]/30 text-current hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};




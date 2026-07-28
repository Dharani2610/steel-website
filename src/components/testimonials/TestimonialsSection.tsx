import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: '1',
      name: 'Marcus Vance',
      role: 'VP of Structural Operations',
      company: 'Gulf Coast Heavy Steel Inc.',
      quote: 'CALDIM delivered 18,400 tons of flawless structural steel drawings for our Houston refinery expansion. Their PE/SE connection design packages saved us weeks during permit approval.',
      rating: 5,
      projectRef: 'Apex Petrochemical Refinery, USA'
    },
    {
      id: '2',
      name: 'David Sterling',
      role: 'Project Executive',
      company: 'Midwest General Erectors',
      quote: 'The accuracy of CALDIM’s 3D erection drawings allowed our riggers to set steel seamlessly in downtown Chicago. Zero field re-cuts across 28,900 structural members.',
      rating: 5,
      projectRef: 'Meridian Commercial Tower, Chicago'
    },
    {
      id: '3',
      name: 'Dr. Aris Thorne',
      role: 'Chief Technical Officer',
      company: 'Fluor Engineering Europe',
      quote: 'Multi-disciplinary BIM clash coordination was crucial for our facility. CALDIM detected and resolved 420+ spatial clashes before fabrication shop packs were issued.',
      rating: 5,
      projectRef: 'Titan Hyper-Scale Facility, Ashburn'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-[#F6F7F8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#3A6C8C]/10 border border-[#3A6C8C]/30 text-[#3A6C8C] text-xs font-semibold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Client Trust & Performance Audit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2744] tracking-tight leading-tight mb-4">
            Endorsed by Global Fabricators & Erectors
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Read what general contractors, steel fabricators, and project directors say about CALDIM’s precision detailing and connection calculations.
          </p>
        </div>

        {/* Testimonials Card */}
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-sm border border-slate-200 shadow-sm relative text-left">
          <Quote className="w-12 h-12 text-[#3A6C8C]/15 absolute top-6 right-8 pointer-events-none" />

          {/* Rating */}
          <div className="flex items-center gap-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
            ))}
            <span className="ml-2 text-xs font-technical-num font-bold text-[#0F2744]">
              5.0 VERIFIED PERFORMANCE
            </span>
          </div>

          {/* Quote Body */}
          <p className="text-base sm:text-xl text-[#0F2744] leading-relaxed italic mb-8 font-sans">
            "{current.quote}"
          </p>

          {/* Footer Info */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200">
            <div>
              <h4 className="text-base font-bold text-[#0F2744] flex items-center gap-2">
                {current.name}
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </h4>
              <p className="text-xs text-slate-500">
                {current.role} – <span className="text-[#0F2744] font-semibold">{current.company}</span>
              </p>
              <span className="text-[11px] text-[#3A6C8C] font-semibold uppercase tracking-wider block mt-1">
                PROJECT: {current.projectRef}
              </span>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-2.5 rounded-sm bg-[#F6F7F8] border border-slate-200 text-[#0F2744] hover:bg-[#0F2744] hover:text-white transition-colors"
                title="Previous Endorsement"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
                className="p-2.5 rounded-sm bg-[#F6F7F8] border border-slate-200 text-[#0F2744] hover:bg-[#0F2744] hover:text-white transition-colors"
                title="Next Endorsement"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

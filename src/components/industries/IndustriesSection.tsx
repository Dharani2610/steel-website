import React from 'react';
import { Factory, Building2, Milestone, Zap, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { industriesData } from '../../data/industriesData';

interface IndustriesSectionProps {
  onRequestQuote: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onRequestQuote }) => {
  const iconMap: Record<string, any> = {
    Factory,
    Building2,
    Milestone,
    Zap
  };

  return (
    <section id="industries" className="py-20 bg-[#F6F7F8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#3A6C8C]/10 border border-[#3A6C8C]/30 text-[#3A6C8C] text-xs font-semibold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Sectors & Market Segments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2744] tracking-tight leading-tight mb-4">
            Industries Served Globally
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            CALDIM delivers high-precision structural detailing across demanding industrial, commercial, civil, and energy sectors.
          </p>
        </div>

        {/* 4 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industriesData.map((ind) => {
            const IconComponent = iconMap[ind.iconName] || Factory;
            return (
              <div
                key={ind.id}
                className="bg-white rounded-sm border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row group"
              >
                {/* Industry Image */}
                <div className="md:w-5/12 relative min-h-[220px] bg-slate-900 overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 p-2.5 rounded-sm bg-[#0F2744]/90 border border-slate-700 text-amber-500">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="absolute bottom-4 left-4 px-2.5 py-1 rounded-xs bg-[#0F2744]/90 text-white font-technical-num text-[11px] font-bold border border-slate-700">
                    {ind.featuredStat}
                  </div>
                </div>

                {/* Industry Details */}
                <div className="md:w-7/12 p-6 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F2744] group-hover:text-[#3A6C8C] transition-colors mb-1">
                      {ind.title}
                    </h3>
                    <div className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-3">
                      {ind.tagline}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {ind.description}
                    </p>
                  </div>

                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Specialized Solutions
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {ind.keyServices.map((ks, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                          <span>{ks}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onRequestQuote}
            className="px-6 py-3 rounded-sm bg-[#0F2744] hover:bg-[#3A6C8C] text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
          >
            <span>Discuss Sector Requirements</span>
            <ArrowRight className="w-4 h-4 text-amber-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

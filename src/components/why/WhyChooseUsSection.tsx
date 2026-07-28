import React from 'react';
import { ShieldCheck, Target, Cpu, CheckCircle2, Clock, Scale } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: '99.8% Fit-Up Accuracy Guarantee',
      description: 'Our multi-stage independent checking process ensures member lengths, bolt clearances, and assembly piece marks match design specs perfectly, preventing expensive field cutting.'
    },
    {
      icon: Scale,
      title: 'PE/SE Licensed Engineering Seals',
      description: 'Registered Professional Engineers (PE/SE) across US states and global code bodies deliver signed and sealed connection calculations backed by Finite Element Analysis (FEA).'
    },
    {
      icon: Cpu,
      title: 'Direct CNC Machine Interoperability',
      description: 'We generate validated NC/DSTV data, DXF plate cutting files, and Kiss/FabTrol export formats to feed automated steel fabrication lines seamlessly.'
    },
    {
      icon: ShieldCheck,
      title: 'Multi-Discipline BIM Clash Audit',
      description: 'Federated 3D models inside Navisworks Manage detect spatial conflicts between structural steel, MEP piping, and concrete cores prior to drawing sign-off.'
    },
    {
      icon: Clock,
      title: 'Rapid Turnaround & Multi-User Capacity',
      description: 'Leveraging Tekla Model Sharing, our teams scale capacity instantly for fast-track megastructures while maintaining rigid revision control.'
    },
    {
      icon: CheckCircle2,
      title: 'Global Code Compliance (AISC/Eurocode)',
      description: 'Adhering to AISC 360, AISC 341 Seismic, NISD, AWS D1.1, BS EN 1090, and AS/NZS specifications tailored to your regional site authority.'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-[#FFFFFF] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#3A6C8C]/10 border border-[#3A6C8C]/30 text-[#3A6C8C] text-xs font-semibold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Why Leading Fabricators Choose CALDIM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2744] tracking-tight leading-tight mb-4">
            Technical Precision. Zero Site Rework.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            We operate as an extension of your structural engineering and shop detailing department, guaranteeing code compliance, fabrication speed, and field fitment.
          </p>
        </div>

        {/* 6 Quality Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#F6F7F8] p-6 rounded-sm border border-slate-200 text-left hover:border-[#3A6C8C] transition-all group"
              >
                <div className="w-10 h-10 rounded-sm bg-white border border-slate-200 flex items-center justify-center text-[#3A6C8C] group-hover:bg-[#0F2744] group-hover:text-amber-500 transition-colors mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0F2744] mb-2 group-hover:text-[#3A6C8C] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

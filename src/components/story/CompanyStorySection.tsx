import React from 'react';
import { ShieldCheck, Award, Layers, Compass, CheckSquare } from 'lucide-react';

export const CompanyStorySection: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-[#F6F7F8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#3A6C8C]/10 border border-[#3A6C8C]/30 text-[#3A6C8C] text-xs font-semibold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Company Overview & Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2744] tracking-tight leading-tight mb-4">
            Engineering Precision Without Compromise
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            CALDIM Engineering is a premier global engineering firm specializing in structural steel detailing, PE/SE connection design, and 3D BIM coordination for complex industrial, commercial, and infrastructure megastructures.
          </p>
        </div>

        {/* Editorial Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image & CAD Blueprint Detail */}
          <div className="lg:col-span-6">
            <div className="relative rounded-sm overflow-hidden border border-slate-300 shadow-md bg-white">
              <img
                src="/business-sectors.png"
                alt="CALDIM Senior Engineering Team & Technical Inspection"
                className="w-full h-[400px] object-cover"
              />
              <div className="p-6 bg-[#0F2744] text-white">
                <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-4">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-amber-500 font-bold">
                      Established Quality Standard
                    </div>
                    <div className="text-sm font-semibold text-slate-200">
                      AISC & NISD Compliant Detailing Execution
                    </div>
                  </div>
                  <ShieldCheck className="w-8 h-8 text-amber-500 flex-shrink-0" />
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our engineering workflows connect structural design intent directly to shop floor CNC automation, eliminating field rework and accelerating steel erection sequences across North America, Europe, and Asia.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars & Philosophy */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <h3 className="text-xl font-bold text-[#0F2744] mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#3A6C8C]" />
                Technical Competence & FEA Rigor
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We believe that every connection detail impacts structural integrity and project profitability. Our registered Professional Engineers (PE/SE) employ Finite Element Analysis (FEA) to engineer optimized moment, shear, and seismic brace joints.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0F2744] mb-2 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#3A6C8C]" />
                Single Source 3D BIM Interoperability
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                By maintaining master Tekla Structures and SDS2 3D models, CALDIM delivers direct NC/DSTV data files, DXF plate contours, and CIS/2 datasets directly formatted for automated steel fabrication machinery.
              </p>
            </div>

            {/* Quality Commitment Bullet Points */}
            <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-sm space-y-3">
              <div className="text-xs font-bold text-[#0F2744] uppercase tracking-wider mb-2">
                Core Engineering Commitments
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckSquare className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span><strong>Independent 100% Checking</strong> by dedicated senior checker auditors prior to transmittal.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckSquare className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span><strong>Multi-Disciplinary Clash Resolution</strong> using Navisworks Manage before shop cutting.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckSquare className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span><strong>PE/SE Stamped Calculations</strong> covering all 50 US states and international building codes.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

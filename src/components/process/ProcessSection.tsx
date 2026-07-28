import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, FileText, Cpu } from 'lucide-react';
import { processData } from '../../data/processData';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = processData[activeStepIndex];

  return (
    <section id="process" className="py-20 bg-[#F6F7F8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#3A6C8C]/10 border border-[#3A6C8C]/30 text-[#3A6C8C] text-xs font-semibold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Quality Control Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2744] tracking-tight leading-tight mb-4">
            Our 6-Step Technical Execution Workflow
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Every drawing set undergoes multi-disciplinary audits from initial input review through connection FEA, 3D modeling, independent checker verification, and CNC transmittal.
          </p>
        </div>

        {/* Horizontal Step Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {processData.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3.5 rounded-sm border text-left transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0F2744] text-white border-[#0F2744] shadow-md'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-[#3A6C8C]'
                }`}
              >
                <div className={`font-technical-num font-extrabold text-sm mb-1 ${isActive ? 'text-amber-500' : 'text-[#3A6C8C]'}`}>
                  STEP {step.stepNumber}
                </div>
                <div className="text-xs font-bold truncate">
                  {step.title.split('&')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed View Card */}
        <div className="bg-white p-6 sm:p-8 rounded-sm border border-slate-200 shadow-sm text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step Main Info */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs bg-[#3A6C8C]/10 text-[#3A6C8C] text-xs font-technical-num font-bold">
              WORKFLOW PHASE {activeStep.stepNumber} OF 06
            </div>

            <h3 className="text-2xl font-bold text-[#0F2744]">
              {activeStep.title}
            </h3>

            <div className="text-xs font-semibold uppercase tracking-wider text-amber-600">
              {activeStep.subtitle}
            </div>

            <p className="text-sm text-slate-700 leading-relaxed font-sans">
              {activeStep.description}
            </p>

            {/* Deliverables */}
            <div className="pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold text-[#0F2744] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#3A6C8C]" />
                Key Deliverables
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {activeStep.deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quality Audit Checks */}
          <div className="lg:col-span-5 bg-[#F6F7F8] p-6 rounded-sm border border-slate-200">
            <h4 className="text-xs font-bold text-[#0F2744] uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-[#3A6C8C]" />
              Mandatory Quality Gate Audits
            </h4>
            <div className="space-y-3">
              {activeStep.qualityChecks.map((qc, i) => (
                <div key={i} className="p-3 bg-white rounded-xs border border-slate-200 text-xs text-slate-700 font-sans flex items-start gap-2.5">
                  <span className="font-technical-num font-bold text-[#3A6C8C]">0{i + 1}.</span>
                  <span>{qc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

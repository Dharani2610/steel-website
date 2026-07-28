import React, { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle2, FileText, Cpu, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { processData } from '../../data/processData';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);

  const activeStep = processData[activeStepIndex];

  // Auto-play interval for smooth step walkthrough (10s duration)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % processData.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setActiveStepIndex((prev) => (prev + 1) % processData.length);
  };

  const handlePrev = () => {
    setActiveStepIndex((prev) => (prev - 1 + processData.length) % processData.length);
  };

  const progressPercentage = ((activeStepIndex + 1) / processData.length) * 100;

  return (
    <section id="process" className="py-20 bg-[#F6F7F8] border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3A6C8C]/10 border border-[#3A6C8C]/30 text-[#3A6C8C] text-xs font-semibold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Quality Control Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2744] tracking-tight leading-tight mb-3">
            Our 6-Step Technical Execution Workflow
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Every drawing set undergoes multi-disciplinary audits from initial input review through connection FEA, 3D modeling, independent checker verification, and CNC transmittal.
          </p>
        </div>

        {/* Workflow Master Progress Line */}
        <div className="mb-6 bg-slate-200 h-1.5 w-full rounded-full overflow-hidden relative">
          <div
            className="bg-gradient-to-r from-[#0F2744] via-[#3A6C8C] to-[#D97706] h-full transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Horizontal Step Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {processData.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer relative group overflow-hidden ${
                  isActive
                    ? 'bg-[#0F2744] text-white border-[#0F2744] shadow-lg scale-[1.02] ring-2 ring-[#D97706]/50'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-[#3A6C8C] hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                {/* Active Indicator Top Line */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#D97706] animate-pulse" />
                )}

                <div className={`font-technical-num font-extrabold text-xs mb-1 flex items-center justify-between ${
                  isActive ? 'text-amber-400' : 'text-[#3A6C8C]'
                }`}>
                  <span>STEP {step.stepNumber}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />}
                </div>

                <div className="text-xs font-bold truncate leading-snug">
                  {step.title.split('&')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed View Card with Smooth Keyed Animation */}
        <div
          key={activeStepIndex}
          className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-md text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-step-transition relative"
        >
          {/* Step Main Info */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F2744] text-amber-400 text-xs font-technical-num font-bold">
                WORKFLOW PHASE {activeStep.stepNumber} OF 06
              </span>
              <span className="text-xs text-slate-400 font-technical-num font-semibold">
                {Math.round(progressPercentage)}% COMPLETED
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F2744] leading-snug mb-1">
                {activeStep.title}
              </h3>
              <div className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                {activeStep.subtitle}
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed font-sans">
              {activeStep.description}
            </p>

            {/* Deliverables */}
            <div className="pt-5 border-t border-slate-100">
              <h4 className="text-xs font-bold text-[#0F2744] uppercase tracking-wider mb-3.5 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#3A6C8C]" />
                <span>Key Deliverables</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                {activeStep.deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-2 bg-[#F8FAFC] p-2.5 rounded-xl border border-slate-200/60">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-800">{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quality Audit Checks */}
          <div className="lg:col-span-5 bg-[#F8FAFC] p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-inner space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <h4 className="text-xs font-bold text-[#0F2744] uppercase tracking-wider flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#3A6C8C]" />
                <span>Mandatory Quality Gate Audits</span>
              </h4>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                100% Verified
              </span>
            </div>

            <div className="space-y-3">
              {activeStep.qualityChecks.map((qc, i) => (
                <div
                  key={i}
                  className="p-3.5 bg-white rounded-xl border border-slate-200/90 text-xs text-slate-800 font-sans flex items-start gap-3 shadow-xs hover:border-[#3A6C8C] transition-colors group"
                >
                  <span className="w-6 h-6 rounded-lg bg-[#3A6C8C]/10 text-[#3A6C8C] font-technical-num font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-[#0F2744] group-hover:text-white transition-colors">
                    0{i + 1}
                  </span>
                  <span className="font-medium leading-relaxed mt-0.5">{qc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Interactive Step Navigation Bar */}
          <div className="lg:col-span-12 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Step</span>
              </button>

              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-xl bg-[#0F2744] text-white hover:bg-[#3A6C8C] text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
              >
                <span>Next Step</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Auto Play Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-3.5 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-all border cursor-pointer ${
                isAutoPlaying
                  ? 'bg-amber-500/10 border-amber-500/40 text-amber-700'
                  : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {isAutoPlaying ? <Pause className="w-3.5 h-3.5 text-amber-600" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isAutoPlaying ? 'Auto-Advancing Workflow' : 'Enable Auto-Play Walkthrough'}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

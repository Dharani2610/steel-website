import React from 'react';
import { X, CheckCircle2, Cpu, FileText, ArrowRight, HelpCircle, Layers, ShieldCheck } from 'lucide-react';
import type { ServiceItem } from '../../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestQuote
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0A192F]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white border border-slate-300 shadow-2xl rounded-sm overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Top Header */}
        <div className="bg-[#0F2744] text-white p-6 sm:p-8 flex items-start justify-between border-b border-slate-700 relative">
          <div className="pr-8">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#3A6C8C]/30 text-amber-500 text-[11px] font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Engineering Service Specification</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {service.title}
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              {service.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-sm bg-[#0A192F] hover:bg-amber-500 text-slate-300 hover:text-white transition-colors"
            title="Close Drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 text-left text-slate-800">
          
          {/* Executive Overview */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#3A6C8C] mb-2">
              Executive Overview
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
              {service.fullDescription || service.description}
            </p>
          </div>

          {/* Capabilities & Applications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Capabilities */}
            {service.capabilities && service.capabilities.length > 0 && (
              <div className="bg-[#F6F7F8] p-5 rounded-sm border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2744] mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#3A6C8C]" />
                  Technical Capabilities
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {service.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Applications */}
            {service.applications && service.applications.length > 0 && (
              <div className="bg-[#F6F7F8] p-5 rounded-sm border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2744] mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#3A6C8C]" />
                  Industry Applications
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {service.applications.map((app, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* Deliverables & Software Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Deliverables */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2744] mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#3A6C8C]" />
                Primary Deliverables
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {service.deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Software Platforms */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2744] mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#3A6C8C]" />
                Engineered Software Platforms
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.software.map((sw, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-sm bg-[#0F2744] text-white text-xs font-medium font-technical-num"
                  >
                    {sw}
                  </span>
                ))}
              </div>

              {/* Benefits */}
              <div className="mt-4 pt-4 border-t border-slate-200">
                <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Guaranteed Performance Outcomes
                </h5>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* FAQs Section */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="border-t border-slate-200 pt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2744] mb-4 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#3A6C8C]" />
                Frequently Asked Technical Questions
              </h4>
              <div className="space-y-4">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-[#F6F7F8] p-4 rounded-sm border border-slate-200">
                    <div className="text-xs font-bold text-[#0F2744] mb-1">
                      Q: {faq.question}
                    </div>
                    <div className="text-xs text-slate-600 leading-relaxed font-sans">
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer CTA */}
        <div className="bg-[#F6F7F8] border-t border-slate-200 p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-600">
            Need customized connection engineering or Tekla model sharing for this service?
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-sm border border-slate-300 text-slate-700 text-xs font-semibold uppercase tracking-wider hover:bg-slate-100"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote();
              }}
              className="px-5 py-2 rounded-sm bg-[#D97706] hover:bg-[#B45309] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-sm"
            >
              <span>Request Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

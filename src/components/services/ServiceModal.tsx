import React from 'react';
import type { ServiceItem } from '../../types';
import { X, CheckCircle2, Cpu, ArrowRight, FileText } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onRequestQuote }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl animate-fadeIn">
      <div className="glass-panel w-full max-w-3xl rounded-3xl border border-[#00D4FF]/30 p-6 md:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-[var(--bg-secondary)] border border-[#8C99A5]/30 text-[var(--text-muted)] hover:text-current hover:border-[#00D4FF] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center border"
            style={{
              backgroundColor: `${service.color}15`,
              borderColor: `${service.color}50`
            }}
          >
            <Cpu className="w-6 h-6" style={{ color: service.color }} />
          </div>
          <div>
            <span className="font-numbers text-xs uppercase tracking-widest text-[#00D4FF]">
              ENGINEERING SERVICE
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-current">
              {service.title}
            </h2>
          </div>
        </div>

        <p className="font-body text-[var(--text-muted)] text-sm md:text-base leading-relaxed mb-6">
          {service.description}
        </p>

        <div className="mb-6">
          <h3 className="font-heading text-lg font-bold text-current mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#00D4FF]" />
            Key Project Deliverables
          </h3>
          <div className="space-y-2">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-xl bg-[var(--bg-secondary)] border border-[#8C99A5]/15"
              >
                <CheckCircle2 className="w-5 h-5 text-[#00D4FF] shrink-0 mt-0.5" />
                <span className="font-body text-sm text-current">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[#4F46E5]/30">
            <span className="font-numbers text-xs text-[#4F46E5] uppercase tracking-wider block mb-1">
              ENGINEERING SOFTWARE USED
            </span>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {service.software.map((sw, i) => (
                <span key={i} className="px-2.5 py-1 rounded bg-[#4F46E5]/20 text-current font-numbers text-xs">
                  {sw}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[#FF8C00]/30">
            <span className="font-numbers text-xs text-[#FF8C00] uppercase tracking-wider block mb-1">
              CORE CLIENT BENEFITS
            </span>
            <ul className="text-xs font-body text-current space-y-1 list-disc list-inside mt-1">
              {service.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#8C99A5]/20">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[#8C99A5]/30 text-current font-heading font-semibold text-xs hover:border-current transition-all"
          >
            Close Window
          </button>
          <button
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#4F46E5] text-black font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_#00D4FF] hover:scale-105 transition-all flex items-center gap-2"
          >
            Request Quote for {service.title}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

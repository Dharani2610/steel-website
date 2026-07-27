import React, { useState } from 'react';
import { X, Send, Upload, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RequestQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RequestQuoteModal: React.FC<RequestQuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Commercial High-Rise',
    standard: 'AISC 360-22 (USA)',
    estimatedTonnage: '1,000 - 5,000 Tons',
    urgency: 'Immediate (Within 1 Month)',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00D4FF', '#FF8C00', '#4F46E5', '#FFFFFF']
      });
    } catch (err) {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl animate-fadeIn">
      <div className="glass-panel w-full max-w-3xl rounded-3xl border border-[#00D4FF]/40 p-6 md:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-[var(--bg-secondary)] border border-[#8C99A5]/30 text-[var(--text-muted)] hover:text-current hover:border-[#00D4FF] transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#00D4FF]/20 border-2 border-[#00D4FF] text-[#00D4FF] flex items-center justify-center mx-auto shadow-[0_0_30px_#00D4FF]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="font-heading text-3xl font-extrabold text-current">
              Engineering Quote Request Received!
            </h2>
            <p className="font-body text-[var(--text-muted)] text-sm max-w-md mx-auto">
              Our Senior Principal Steel Engineer will review your project parameters and contact you within 4 business hours with a formal proposal.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-6 py-3 rounded-xl bg-[#00D4FF] text-black font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_#00D4FF]"
              >
                Return to Website
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#00D4FF]/20 border border-[#00D4FF]/40 flex items-center justify-center text-[#00D4FF]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-numbers text-xs uppercase text-[#00D4FF] tracking-widest block">
                  INSTANT PROJECT ESTIMATION
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-current">
                  Request Detailed Engineering Quote
                </h2>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-numbers text-xs text-[var(--text-muted)] mb-1">FULL NAME *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[#8C99A5]/30 text-current font-body text-xs focus:border-[#00D4FF] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-numbers text-xs text-[var(--text-muted)] mb-1">COMPANY NAME *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Construction LLC"
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[#8C99A5]/30 text-current font-body text-xs focus:border-[#00D4FF] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-numbers text-xs text-[var(--text-muted)] mb-1">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="johndoe@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[#8C99A5]/30 text-current font-body text-xs focus:border-[#00D4FF] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-numbers text-xs text-[var(--text-muted)] mb-1">PHONE NUMBER</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (713) 000-0000"
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[#8C99A5]/30 text-current font-body text-xs focus:border-[#00D4FF] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-numbers text-xs text-[var(--text-muted)] mb-1">PROJECT TYPE</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[#8C99A5]/30 text-current font-body text-xs focus:border-[#00D4FF] focus:outline-none"
                  >
                    <option>Commercial High-Rise</option>
                    <option>Heavy Industrial Refinery</option>
                    <option>Sports Dome Arena</option>
                    <option>Bridge Infrastructure</option>
                    <option>Misc Steel & Stairs</option>
                  </select>
                </div>

                <div>
                  <label className="block font-numbers text-xs text-[var(--text-muted)] mb-1">CODE STANDARD</label>
                  <select
                    value={formData.standard}
                    onChange={(e) => setFormData({ ...formData, standard: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[#8C99A5]/30 text-current font-body text-xs focus:border-[#00D4FF] focus:outline-none"
                  >
                    <option>AISC 360-22 (USA)</option>
                    <option>BS EN 1993 Eurocode</option>
                    <option>AS/NZS 4100 (Australia)</option>
                    <option>CISC S16 (Canada)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-numbers text-xs text-[var(--text-muted)] mb-1">ESTIMATED TONNAGE</label>
                  <select
                    value={formData.estimatedTonnage}
                    onChange={(e) => setFormData({ ...formData, estimatedTonnage: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[#8C99A5]/30 text-current font-body text-xs focus:border-[#00D4FF] focus:outline-none"
                  >
                    <option>Under 500 Tons</option>
                    <option>500 - 1,500 Tons</option>
                    <option>1,500 - 5,000 Tons</option>
                    <option>5,000+ Tons</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-numbers text-xs text-[var(--text-muted)] mb-1">ATTACH DRAWINGS / IFC / TEKLA FILES</label>
                <div className="border-2 border-dashed border-[#00D4FF]/30 rounded-xl p-4 text-center bg-[var(--bg-secondary)]/60 hover:border-[#00D4FF] transition-all cursor-pointer">
                  <Upload className="w-6 h-6 text-[#00D4FF] mx-auto mb-1" />
                  <span className="font-body text-xs text-current block">
                    Drag and drop your .dwg, .ifc, .pdf, or .zip files here
                  </span>
                  <span className="font-numbers text-[10px] text-[var(--text-muted)]">Maximum size: 50MB</span>
                </div>
              </div>

              <div>
                <label className="block font-numbers text-xs text-[var(--text-muted)] mb-1">PROJECT SPECIFICATIONS / SCOPE</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your detailing scope, target delivery dates, or connection design requirements..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[#8C99A5]/30 text-current font-body text-xs focus:border-[#00D4FF] focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#4F46E5] text-black font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_#00D4FF] hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Engineering Request For Proposal
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

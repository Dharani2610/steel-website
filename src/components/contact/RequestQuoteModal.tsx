import React, { useState } from 'react';
import { X, Send, Upload, CheckCircle2, ShieldCheck } from 'lucide-react';

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
    serviceType: 'Structural Steel Detailing',
    codeStandard: 'AISC 360 (USA)',
    estimatedTonnage: '1,000 - 5,000 Tons',
    targetDelivery: 'Standard (2 - 4 Weeks)',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0A192F]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white border border-slate-300 shadow-2xl rounded-sm overflow-hidden my-8 max-h-[90vh] flex flex-col text-left font-sans">
        
        {/* Modal Top Header */}
        <div className="bg-[#0F2744] text-white p-6 sm:p-8 flex items-start justify-between border-b border-slate-700 relative">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#3A6C8C]/30 text-amber-500 text-[11px] font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Technical Bid & Estimating Transmittal</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Request Project Proposal
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              Submit contract drawings or RFP criteria to receive a PE/SE stamped estimation within 24 hours.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-sm bg-[#0A192F] hover:bg-amber-500 text-slate-300 hover:text-white transition-colors"
            title="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-800">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-2xl font-bold text-[#0F2744]">Proposal Request Submitted</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Thank you for sending your project parameters to CALDIM Engineering. Our estimating principal will contact you within 24 business hours.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-sm bg-[#0F2744] text-white text-xs font-semibold uppercase tracking-wider mt-4"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0F2744] mb-1">FULL NAME *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Robert Vance"
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#F6F7F8] border border-slate-300 text-xs text-slate-900 focus:border-[#3A6C8C] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0F2744] mb-1">COMPANY NAME *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Steel Fabricator & Erectors Corp"
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#F6F7F8] border border-slate-300 text-xs text-slate-900 focus:border-[#3A6C8C] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0F2744] mb-1">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="robert@steelfabricator.com"
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#F6F7F8] border border-slate-300 text-xs text-slate-900 focus:border-[#3A6C8C] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0F2744] mb-1">PHONE NUMBER</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 019-2834"
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#F6F7F8] border border-slate-300 text-xs text-slate-900 focus:border-[#3A6C8C] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0F2744] mb-1">PRIMARY SERVICE</label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-sm bg-[#F6F7F8] border border-slate-300 text-xs text-slate-900 focus:border-[#3A6C8C] focus:outline-none"
                  >
                    <option>Structural Steel Detailing</option>
                    <option>PE/SE Connection Design</option>
                    <option>Tekla 3D BIM Detailing</option>
                    <option>SDS2 Steel Modeling</option>
                    <option>3D Rebar Detailing & BBS</option>
                    <option>Miscellaneous Metals</option>
                    <option>BIM Clash Coordination</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F2744] mb-1">DESIGN CODE</label>
                  <select
                    value={formData.codeStandard}
                    onChange={(e) => setFormData({ ...formData, codeStandard: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-sm bg-[#F6F7F8] border border-slate-300 text-xs text-slate-900 focus:border-[#3A6C8C] focus:outline-none"
                  >
                    <option>AISC 360 / 341 (USA)</option>
                    <option>BS EN 1993 Eurocode</option>
                    <option>AS/NZS 4100 (Australia)</option>
                    <option>CISC S16 (Canada)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F2744] mb-1">ESTIMATED TONNAGE</label>
                  <select
                    value={formData.estimatedTonnage}
                    onChange={(e) => setFormData({ ...formData, estimatedTonnage: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-sm bg-[#F6F7F8] border border-slate-300 text-xs text-slate-900 focus:border-[#3A6C8C] focus:outline-none"
                  >
                    <option>Under 500 Tons</option>
                    <option>500 - 1,500 Tons</option>
                    <option>1,500 - 5,000 Tons</option>
                    <option>5,000+ Tons</option>
                  </select>
                </div>
              </div>

              {/* Upload Dropzone */}
              <div>
                <label className="block text-xs font-bold text-[#0F2744] mb-1">ATTACH CONTRACT DRAWINGS / IFC / SPEC FILES</label>
                <div className="border-2 border-dashed border-slate-300 rounded-sm p-4 text-center bg-[#F6F7F8] hover:border-[#3A6C8C] transition-all cursor-pointer">
                  <Upload className="w-5 h-5 text-[#3A6C8C] mx-auto mb-1" />
                  <span className="text-xs font-semibold text-[#0F2744] block">
                    Drop .DWG, .IFC, .PDF, or .ZIP files here for estimation
                  </span>
                  <span className="text-[11px] text-slate-500 font-technical-num">Maximum transmittal package: 100MB</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0F2744] mb-1">PROJECT NOTES & DELIVERABLE DATES</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Specify target drawing transmittal dates, shop preferences, or connection design constraints..."
                  className="w-full px-3.5 py-2.5 rounded-sm bg-[#F6F7F8] border border-slate-300 text-xs text-slate-900 focus:border-[#3A6C8C] focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-sm bg-[#D97706] hover:bg-[#B45309] text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Engineering Proposal Transmittal
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

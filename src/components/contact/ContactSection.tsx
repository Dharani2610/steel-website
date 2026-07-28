import React, { useState } from 'react';
import { Send, ShieldCheck, MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#FFFFFF] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#3A6C8C]/10 border border-[#3A6C8C]/30 text-[#3A6C8C] text-xs font-semibold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Direct Commercial & Technical Transmittal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2744] tracking-tight leading-tight mb-4">
            Contact CALDIM Engineering Headquarters
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Reach our structural detailing project directors and licensed PE connection engineers for project bids, transmittals, and technical consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column: Office Details & Business Information */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Global Offices Box */}
            <div className="bg-[#F6F7F8] p-6 rounded-sm border border-slate-200">
              <h3 className="text-base font-bold text-[#0F2744] mb-4 uppercase tracking-wider">
                Corporate Office & Engineering Center
              </h3>

              <div className="space-y-4 text-xs text-slate-700 font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#3A6C8C] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0F2744] block">CALDIM Engineering Headquarters</span>
                    <span>100 Industrial Parkway, Suite 400<br />Houston, Texas 77002, USA</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#3A6C8C] flex-shrink-0" />
                  <div>
                    <span className="font-bold text-[#0F2744] block">Direct Toll-Free</span>
                    <a href="tel:+18005552253" className="hover:text-[#3A6C8C] font-technical-num">+1 (800) 555-CALD</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#3A6C8C] flex-shrink-0" />
                  <div>
                    <span className="font-bold text-[#0F2744] block">Technical Transmittals & RFQs</span>
                    <a href="mailto:inquiry@caldimengineering.com" className="hover:text-[#3A6C8C]">inquiry@caldimengineering.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-200">
                  <Clock className="w-4 h-4 text-[#3A6C8C] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0F2744] block">Engineering Hours</span>
                    <span className="font-technical-num">Monday – Friday: 07:00 – 19:00 CST</span><br />
                    <span>24/7 Field Erection Support Line Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Turnaround Guarantee */}
            <div className="p-6 rounded-sm bg-[#0F2744] text-white">
              <div className="text-xs uppercase tracking-wider text-amber-500 font-bold mb-2">
                24-Hour Bid Response Guarantee
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Submit your architectural / structural drawings or design criteria, and our estimation team will issue a complete bid proposal within 24 hours.
              </p>
            </div>

          </div>

          {/* Right Column: Corporate Contact Form */}
          <div className="lg:col-span-7 bg-[#F6F7F8] p-8 rounded-sm border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-bold text-[#0F2744]">Proposal Inquiry Transmitted</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you for contacting CALDIM Engineering. A senior project manager will review your transmittal and contact you within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <h3 className="text-xl font-bold text-[#0F2744] mb-2">
                  Request Project Engineering Proposal
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0F2744] mb-1">FULL NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Robert Vance"
                      className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-xs text-slate-900 focus:border-[#3A6C8C] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0F2744] mb-1">COMPANY NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Steel Fabrication & Erectors Corp"
                      className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-xs text-slate-900 focus:border-[#3A6C8C] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0F2744] mb-1">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      placeholder="robert@steelfabricator.com"
                      className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-xs text-slate-900 focus:border-[#3A6C8C] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0F2744] mb-1">PHONE NUMBER</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 019-2834"
                      className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-xs text-slate-900 focus:border-[#3A6C8C] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0F2744] mb-1">SERVICE REQUIRED *</label>
                    <select className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-xs text-slate-900 focus:border-[#3A6C8C] focus:outline-none">
                      <option>Structural Steel Detailing</option>
                      <option>PE/SE Connection Design</option>
                      <option>Tekla 3D BIM Modeling</option>
                      <option>SDS2 Steel Modeling</option>
                      <option>3D Rebar Detailing & BBS</option>
                      <option>Miscellaneous Metals Detailing</option>
                      <option>BIM Clash Coordination</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0F2744] mb-1">ESTIMATED STEEL TONNAGE</label>
                    <input
                      type="text"
                      placeholder="e.g. 2,500 Tons"
                      className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-xs text-slate-900 focus:border-[#3A6C8C] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F2744] mb-1">PROJECT SCOPE & TIMELINE DETAILS</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your structural steel scope, connection types, drawing submission deadlines, and fabrication shop requirements..."
                    className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-xs text-slate-900 focus:border-[#3A6C8C] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-sm bg-[#D97706] hover:bg-[#B45309] text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Technical Proposal Request
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

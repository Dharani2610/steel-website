import React, { useState } from 'react';
import { Send, ShieldCheck, MapPin, Phone, Mail, CheckCircle2, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2744] tracking-tight leading-tight mb-3">
            Get in Touch
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Our team is available to discuss your project needs and provide detailed information about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-start">
          
          {/* Left Column: Office Details & Business Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* USA Office */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-[#0F2744] mb-4">USA Office</h3>
              <div className="space-y-3.5 text-sm text-slate-700 font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Caldim Tech Services LLC</span>
                    <span>8668 John Hickman Pkwy, Suite 903</span><br />
                    <span>Frisco, Texas 75034</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-slate-500 shrink-0" />
                  <a href="tel:+12484553855" className="hover:text-[#3A6C8C] font-technical-num font-medium text-slate-800">
                    +1 (248) 455-3855
                  </a>
                </div>
              </div>
            </div>

            {/* India Office - Chennai */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-[#0F2744] mb-4">India Office - Chennai</h3>
              <div className="space-y-3.5 text-sm text-slate-700 font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Caldim Engineering Pvt. Ltd.</span>
                    <span>Plot #14, First Cross Street</span><br />
                    <span>Michael Gardens, Ramapuram</span><br />
                    <span>Chennai — 600089</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-slate-500 shrink-0" />
                  <a href="tel:+919790968074" className="hover:text-[#3A6C8C] font-technical-num font-medium text-slate-800">
                    +91-9790968074
                  </a>
                </div>
              </div>
            </div>

            {/* India Office - Hosur */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-[#0F2744] mb-4">India Office - Hosur</h3>
              <div className="space-y-3.5 text-sm text-slate-700 font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <span>2nd floor, plot No.23,24,&25,</span><br />
                    <span>Near Check Post, N.H-207,</span><br />
                    <span>Bagalur Road, Nallur Panchayat,</span><br />
                    <span>Hosur — 635103</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Contacts */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-[#0F2744] mb-4">Email Contacts</h3>
              <div className="space-y-4 text-sm font-sans">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <a href="mailto:bala@caldimengg.com" className="font-semibold text-slate-900 hover:text-[#3A6C8C] block">
                      bala@caldimengg.com
                    </a>
                    <span className="text-xs text-slate-500">Mr. G. Bala (President)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <a href="mailto:uvaraj@caldimengg.com" className="font-semibold text-slate-900 hover:text-[#3A6C8C] block">
                      uvaraj@caldimengg.com
                    </a>
                    <span className="text-xs text-slate-500">Mr. K. Uvaraj (Vice President)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <a href="mailto:swami@caldimengg.com" className="font-semibold text-slate-900 hover:text-[#3A6C8C] block">
                      swami@caldimengg.com
                    </a>
                    <span className="text-xs text-slate-500">Mr. R. Swami (Technical Advisor)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operations */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-[#0F2744] mb-3">Operations</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Two-shift operations for improved turnaround and continuous project progress.
              </p>
            </div>

          </div>

          {/* Right Column: Corporate Contact / Proposal Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3A6C8C]/10 border border-[#3A6C8C]/30 text-[#3A6C8C] text-xs font-semibold uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Direct Project Transmittal</span>
            </div>
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-bold text-[#0F2744]">Proposal Inquiry Transmitted</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you for contacting CALDIM Engineering. Our engineering leadership will review your transmittal and contact you within 24 business hours.
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
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-300 text-xs text-slate-900 focus:border-[#3A6C8C] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0F2744] mb-1">COMPANY NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Steel Fabrication & Erectors Corp"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-300 text-xs text-slate-900 focus:border-[#3A6C8C] focus:bg-white focus:outline-none transition-colors"
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
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-300 text-xs text-slate-900 focus:border-[#3A6C8C] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0F2744] mb-1">PHONE NUMBER</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 019-2834"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-300 text-xs text-slate-900 focus:border-[#3A6C8C] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0F2744] mb-1">SERVICE REQUIRED *</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-300 text-xs text-slate-900 focus:border-[#3A6C8C] focus:bg-white focus:outline-none transition-colors">
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
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-300 text-xs text-slate-900 focus:border-[#3A6C8C] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F2744] mb-1">PROJECT SCOPE & TIMELINE DETAILS</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your structural steel scope, connection types, drawing submission deadlines, and fabrication shop requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-300 text-xs text-slate-900 focus:border-[#3A6C8C] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Technical Proposal Request
                </button>

                <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>Guaranteed response within 24 business hours</span>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};


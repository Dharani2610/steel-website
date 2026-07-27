import React, { useState } from 'react';
import { Send, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } catch (err) {}
  };

  return (
    <section id="contact" className="py-24 px-4 bg-[var(--bg-primary)] transition-colors duration-300 relative overflow-hidden blueprint-grid">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0084FF]/10 border border-[#0084FF]/30 text-[#0084FF] font-numbers text-xs uppercase tracking-wider mb-4">
            GET IN TOUCH WITH CALDIM
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-current tracking-tight">
            Contact CALDIM Engineering & <br />
            <span className="text-[#0084FF] glow-text-cyan">Structural Steel Products</span>
          </h2>
          <p className="font-body text-[var(--text-muted)] text-base mt-4">
            Connect with our engineering team in Hosur & Chennai for structural detailing, connection design, and product inquiries.
          </p>
        </div>

        {/* Project Inquiry Form */}
        <div className="glass-panel p-8 rounded-3xl border border-[#0084FF]/30 shadow-2xl relative max-w-4xl mx-auto">
          {submitted ? (
            <div className="py-16 text-center space-y-4">
              <ShieldCheck className="w-16 h-16 text-[#0084FF] mx-auto animate-bounce" />
              <h3 className="font-heading text-2xl font-bold text-current">Inquiry Sent to CALDIM Support!</h3>
              <p className="font-body text-xs text-[var(--text-muted)]">
                Our sales and support engineering team at salesandsupport@caldimengg.com will review your request and reply shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-heading text-2xl font-bold text-current mb-2">
                Send Direct Project Inquiry
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-numbers text-xs text-[var(--text-muted)] mb-1">YOUR NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Robert Vance"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[#8C99A5]/30 text-current font-body text-xs focus:border-[#0084FF] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-numbers text-xs text-[var(--text-muted)] mb-1">COMPANY *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Infrastructure EPC Corp"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[#8C99A5]/30 text-current font-body text-xs focus:border-[#0084FF] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-numbers text-xs text-[var(--text-muted)] mb-1">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    placeholder="robert@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[#8C99A5]/30 text-current font-body text-xs focus:border-[#0084FF] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-numbers text-xs text-[var(--text-muted)] mb-1">PHONE NUMBER</label>
                  <input
                    type="tel"
                    placeholder="+91 99529 68294"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[#8C99A5]/30 text-current font-body text-xs focus:border-[#0084FF] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-numbers text-xs text-[var(--text-muted)] mb-1">PROJECT SPECIFICATIONS / INQUIRY</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell CALDIM about your structural steel detailing, product requirements, tonnage, or delivery timelines..."
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[#8C99A5]/30 text-current font-body text-xs focus:border-[#0084FF] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0084FF] to-[#4F46E5] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_#0084FF] hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit CALDIM Engineering Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

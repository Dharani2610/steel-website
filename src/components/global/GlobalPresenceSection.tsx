import React, { useState } from 'react';
import { officesData } from '../../data/officesData';
import type { OfficeLocation } from '../../types';
import { InteractiveGlobe3D } from '../3d/InteractiveGlobe3D';
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';

interface GlobalPresenceSectionProps {
  theme?: 'dark' | 'light';
}

export const GlobalPresenceSection: React.FC<GlobalPresenceSectionProps> = () => {
  const [selectedOffice, setSelectedOffice] = useState<OfficeLocation>(officesData[0]);

  return (
    <section id="global" className="py-24 px-4 bg-[var(--bg-secondary)] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] font-numbers text-xs uppercase tracking-wider mb-4">
            <Globe className="w-4 h-4" />
            GLOBAL ENGINEERING FOOTPRINT
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-current tracking-tight">
            24/7 Follow-the-Sun <br />
            <span className="text-[#00D4FF] glow-text-cyan">Global Delivery Hubs</span>
          </h2>
          <p className="font-body text-[var(--text-muted)] text-base mt-4">
            With engineering offices strategically positioned across time zones, we provide seamless 24-hour turnaround on RFIs and shop drawing releases.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 glass-panel rounded-3xl border border-[#00D4FF]/30 p-4 shadow-2xl relative">
            <InteractiveGlobe3D
              selectedOffice={selectedOffice}
              onSelectOffice={setSelectedOffice}
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-wrap gap-2">
              {officesData.map((office) => (
                <button
                  key={office.id}
                  onClick={() => setSelectedOffice(office)}
                  className={`px-3.5 py-2 rounded-xl font-numbers text-xs uppercase tracking-wider transition-all ${
                    selectedOffice.id === office.id
                      ? 'bg-[#00D4FF] text-black font-bold shadow-[0_0_15px_#00D4FF]'
                      : 'bg-[var(--bg-primary)] text-[var(--text-muted)] border border-[#8C99A5]/20 hover:text-current'
                  }`}
                >
                  {office.city}
                </button>
              ))}
            </div>

            <div className="glass-panel p-6 md:p-8 rounded-3xl border border-[#00D4FF]/40 space-y-5 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-numbers text-xs text-[#00D4FF] uppercase tracking-widest block">
                    {selectedOffice.country}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-current">
                    {selectedOffice.city}
                  </h3>
                </div>
                {selectedOffice.isHeadquarters && (
                  <span className="px-3 py-1 rounded bg-[#FF8C00]/20 border border-[#FF8C00]/40 text-[#FF8C00] font-numbers text-[10px] uppercase font-bold">
                    GLOBAL HQ
                  </span>
                )}
              </div>

              <div className="space-y-3 font-body text-xs text-current">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[var(--bg-primary)] border border-[#8C99A5]/15">
                  <MapPin className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                  <span>{selectedOffice.address}</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-primary)] border border-[#8C99A5]/15">
                  <Phone className="w-4 h-4 text-[#00D4FF] shrink-0" />
                  <span>{selectedOffice.phone}</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-primary)] border border-[#8C99A5]/15">
                  <Mail className="w-4 h-4 text-[#00D4FF] shrink-0" />
                  <span>{selectedOffice.email}</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-primary)] border border-[#8C99A5]/15">
                  <Clock className="w-4 h-4 text-[#FF8C00] shrink-0" />
                  <span>LOCAL TIMEZONE: <strong className="text-current font-numbers">{selectedOffice.timezone}</strong></span>
                </div>
              </div>

              <a
                href={`mailto:${selectedOffice.email}`}
                className="w-full py-3.5 rounded-xl bg-[#00D4FF] text-black font-heading font-bold text-xs uppercase tracking-wider block text-center shadow-[0_0_15px_#00D4FF] hover:bg-white transition-colors"
              >
                Contact Regional Lead Engineer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Calculator, Scale, FileText, Calendar, ArrowRight } from 'lucide-react';

interface SteelWeightEstimatorProps {
  onRequestQuote: () => void;
}

export const SteelWeightEstimator: React.FC<SteelWeightEstimatorProps> = ({ onRequestQuote }) => {
  const [areaSqFt, setAreaSqFt] = useState<number>(150000);
  const [floors, setFloors] = useState<number>(12);
  const [framingType, setFramingType] = useState<'commercial' | 'industrial' | 'diagrid'>('commercial');

  const multiplier = framingType === 'commercial' ? 12 : framingType === 'industrial' ? 18 : 24;
  const totalTonnage = Math.round((areaSqFt * multiplier) / 2000);
  const totalDrawings = Math.round(totalTonnage * 0.45);
  const scheduleWeeks = Math.max(3, Math.round(totalTonnage / 450));

  return (
    <section className="py-24 px-4 bg-[var(--bg-primary)] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel rounded-3xl border border-[#00D4FF]/30 p-6 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] font-numbers text-xs uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                PROJECT ESTIMATION CALCULATOR
              </div>

              <h2 className="font-heading text-3xl font-extrabold text-current">
                Estimate Tonnage & <br />
                <span className="text-[#00D4FF]">Detailing Timeframe</span>
              </h2>

              <div>
                <div className="flex justify-between font-numbers text-xs text-[var(--text-muted)] mb-2">
                  <span>TOTAL BUILDING AREA</span>
                  <span className="text-[#00D4FF] font-bold">{areaSqFt.toLocaleString()} SQ. FT.</span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="1000000"
                  step="10000"
                  value={areaSqFt}
                  onChange={(e) => setAreaSqFt(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--bg-secondary)] rounded-lg appearance-none cursor-pointer accent-[#00D4FF]"
                />
              </div>

              <div>
                <div className="flex justify-between font-numbers text-xs text-[var(--text-muted)] mb-2">
                  <span>NUMBER OF FLOORS / LEVELS</span>
                  <span className="text-[#00D4FF] font-bold">{floors} FLOORS</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="80"
                  value={floors}
                  onChange={(e) => setFloors(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--bg-secondary)] rounded-lg appearance-none cursor-pointer accent-[#00D4FF]"
                />
              </div>

              <div>
                <span className="block font-numbers text-xs text-[var(--text-muted)] mb-2">
                  STRUCTURAL FRAMING COMPLEXITY
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setFramingType('commercial')}
                    className={`py-2 px-3 rounded-lg font-numbers text-xs transition-all ${
                      framingType === 'commercial'
                        ? 'bg-[#00D4FF] text-black font-bold'
                        : 'bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[#8C99A5]/20'
                    }`}
                  >
                    Commercial
                  </button>
                  <button
                    onClick={() => setFramingType('industrial')}
                    className={`py-2 px-3 rounded-lg font-numbers text-xs transition-all ${
                      framingType === 'industrial'
                        ? 'bg-[#00D4FF] text-black font-bold'
                        : 'bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[#8C99A5]/20'
                    }`}
                  >
                    Heavy Industrial
                  </button>
                  <button
                    onClick={() => setFramingType('diagrid')}
                    className={`py-2 px-3 rounded-lg font-numbers text-xs transition-all ${
                      framingType === 'diagrid'
                        ? 'bg-[#00D4FF] text-black font-bold'
                        : 'bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[#8C99A5]/20'
                    }`}
                  >
                    Diagrid / Arena
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[var(--bg-primary)] rounded-2xl border border-[#00D4FF]/40 p-6 md:p-8 space-y-6">
              <span className="font-numbers text-xs text-[#00D4FF] uppercase tracking-wider block">
                PROJECT ESTIMATION RESULTS
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[#8C99A5]/20">
                  <Scale className="w-5 h-5 text-[#00D4FF] mb-1" />
                  <span className="block text-[10px] font-numbers text-[var(--text-muted)]">STEEL TONNAGE</span>
                  <span className="font-numbers text-xl font-bold text-current">
                    {totalTonnage.toLocaleString()} <span className="text-xs text-[#00D4FF]">Tons</span>
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[#8C99A5]/20">
                  <FileText className="w-5 h-5 text-[#FF8C00] mb-1" />
                  <span className="block text-[10px] font-numbers text-[var(--text-muted)]">SHOP DRAWINGS</span>
                  <span className="font-numbers text-xl font-bold text-current">
                    {totalDrawings.toLocaleString()} <span className="text-xs text-[#FF8C00]">Sheets</span>
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[#8C99A5]/20">
                  <Calendar className="w-5 h-5 text-[#4F46E5] mb-1" />
                  <span className="block text-[10px] font-numbers text-[var(--text-muted)]">SCHEDULE</span>
                  <span className="font-numbers text-xl font-bold text-current">
                    {scheduleWeeks} <span className="text-xs text-[#4F46E5]">Weeks</span>
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onRequestQuote}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#4F46E5] text-black font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_#00D4FF] hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <span>Lock In This Detailing Schedule</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

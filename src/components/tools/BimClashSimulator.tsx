import React, { useState } from 'react';
import { ShieldAlert, CheckCircle2, RefreshCw } from 'lucide-react';

export const BimClashSimulator: React.FC = () => {
  const [activeLayers, setActiveLayers] = useState({
    structuralSteel: true,
    mepDuctwork: true,
    plumbingPipes: true,
    concreteCore: true
  });

  const [isScanning, setIsScanning] = useState(false);
  const [clashesFound, setClashesFound] = useState(3);
  const [clashesResolved, setClashesResolved] = useState(false);

  const toggleLayer = (layer: keyof typeof activeLayers) => {
    setActiveLayers(prev => ({ ...prev, [layer]: !prev[layer] }));
    setClashesResolved(false);
  };

  const handleRunScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setClashesFound(activeLayers.mepDuctwork && activeLayers.structuralSteel ? 3 : 0);
    }, 1200);
  };

  const handleResolveClashes = () => {
    setClashesResolved(true);
    setClashesFound(0);
  };

  return (
    <section id="bim-tool" className="py-24 px-4 bg-[var(--bg-secondary)] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] font-numbers text-xs uppercase tracking-wider mb-4">
            <ShieldAlert className="w-4 h-4" />
            LIVE BIM CLASH RESOLUTION TOOL
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-current tracking-tight">
            Simulate Spatial Clash Detection <br />
            <span className="text-[#00D4FF] glow-text-cyan">Before Fabrication Begins</span>
          </h2>
          <p className="font-body text-[var(--text-muted)] text-base mt-4">
            Toggle multi-trade BIM layers, run simulated Navisworks matrix clash scans, and see how APEX STEEL resolves interferences prior to shop cutting.
          </p>
        </div>

        <div className="glass-panel rounded-3xl border border-[#00D4FF]/30 p-6 md:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-6">
              <h3 className="font-heading text-xl font-bold text-current mb-4">
                Federated Trade Layers
              </h3>

              <div className="space-y-3">
                <button
                  onClick={() => toggleLayer('structuralSteel')}
                  className={`w-full p-3.5 rounded-xl border font-numbers text-xs flex items-center justify-between transition-all ${
                    activeLayers.structuralSteel
                      ? 'bg-[#00D4FF]/15 border-[#00D4FF] text-[#00D4FF] glow-box-cyan'
                      : 'bg-[var(--bg-primary)] border-[#8C99A5]/20 text-[var(--text-muted)]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#00D4FF]" />
                    STRUCTURAL STEEL FRAMEWORK
                  </span>
                  <span>{activeLayers.structuralSteel ? 'ACTIVE' : 'OFF'}</span>
                </button>

                <button
                  onClick={() => toggleLayer('mepDuctwork')}
                  className={`w-full p-3.5 rounded-xl border font-numbers text-xs flex items-center justify-between transition-all ${
                    activeLayers.mepDuctwork
                      ? 'bg-[#FF8C00]/15 border-[#FF8C00] text-[#FF8C00] glow-box-orange'
                      : 'bg-[var(--bg-primary)] border-[#8C99A5]/20 text-[var(--text-muted)]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF8C00]" />
                    HVAC MECH DUCTWORK
                  </span>
                  <span>{activeLayers.mepDuctwork ? 'ACTIVE' : 'OFF'}</span>
                </button>

                <button
                  onClick={() => toggleLayer('plumbingPipes')}
                  className={`w-full p-3.5 rounded-xl border font-numbers text-xs flex items-center justify-between transition-all ${
                    activeLayers.plumbingPipes
                      ? 'bg-[#4F46E5]/15 border-[#4F46E5] text-[#4F46E5]'
                      : 'bg-[var(--bg-primary)] border-[#8C99A5]/20 text-[var(--text-muted)]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#4F46E5]" />
                    PLUMBING & FIRE PIPING
                  </span>
                  <span>{activeLayers.plumbingPipes ? 'ACTIVE' : 'OFF'}</span>
                </button>
              </div>

              <div className="pt-4 space-y-3">
                <button
                  onClick={handleRunScan}
                  disabled={isScanning}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#4F46E5] text-black font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_#00D4FF] hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCw className={`w-4 h-4 ${isScanning ? 'animate-spin' : ''}`} />
                  {isScanning ? 'Scanning BIM Model Matrix...' : 'Run Navisworks Clash Scan'}
                </button>

                {clashesFound > 0 && !clashesResolved && (
                  <button
                    onClick={handleResolveClashes}
                    className="w-full py-3 rounded-xl bg-[#FF8C00] text-black font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_#FF8C00] hover:bg-white transition-all flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Auto-Reroute Steel Framing (Resolve Clashes)
                  </button>
                )}
              </div>
            </div>

            <div className="lg:col-span-8 bg-[var(--bg-primary)] rounded-2xl border border-[#8C99A5]/20 p-6 relative h-[380px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 blueprint-grid opacity-50" />

              {activeLayers.structuralSteel && (
                <div className="absolute inset-x-12 inset-y-8 border-2 border-[#00D4FF] rounded flex justify-between items-center px-12">
                  <div className="w-8 h-full bg-[#00D4FF]/20 border-x border-[#00D4FF]" />
                  <div className="w-8 h-full bg-[#00D4FF]/20 border-x border-[#00D4FF]" />
                </div>
              )}

              {activeLayers.mepDuctwork && (
                <div
                  className={`absolute h-12 transition-all duration-700 rounded border-2 flex items-center justify-center font-numbers text-xs ${
                    clashesResolved
                      ? 'top-12 inset-x-4 border-[#00D4FF] bg-[#00D4FF]/20 text-[#00D4FF]'
                      : 'top-1/2 -translate-y-1/2 inset-x-4 border-[#FF8C00] bg-[#FF8C00]/30 text-[#FF8C00] glow-box-orange'
                  }`}
                >
                  HVAC DUCT MAIN PIPELINE (TRADE 2)
                </div>
              )}

              {clashesFound > 0 && !clashesResolved && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-[#ef4444] text-white font-numbers text-xs px-4 py-2 rounded-full shadow-[0_0_20px_#ef4444] animate-bounce flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4" />
                  3 HARD CLASHES DETECTED AT GIRDER B204
                </div>
              )}

              {clashesResolved && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-[#10b981] text-white font-numbers text-xs px-4 py-2 rounded-full shadow-[0_0_20px_#10b981] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  ALL CLASHES RESOLVED – ZERO SITE REWORK
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

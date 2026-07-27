import React, { useState } from 'react';
import { Layers, RotateCcw, Cpu } from 'lucide-react';

export const ConnectionInspector3D: React.FC = () => {
  const [isExploded, setIsExploded] = useState(false);
  const [activeComponent, setActiveComponent] = useState<string | null>(null);
  const [rotation, setRotation] = useState({ x: -15, y: 25 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;
    setRotation(prev => ({
      x: prev.x + deltaY * 0.4,
      y: prev.y + deltaX * 0.4
    }));
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => setIsDragging(false);

  const explodeOffset = isExploded ? 60 : 0;

  return (
    <section id="inspector" className="py-24 px-4 bg-[var(--bg-primary)] transition-colors duration-300 relative overflow-hidden blueprint-grid">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] font-numbers text-xs uppercase tracking-wider mb-4">
            <Cpu className="w-4 h-4" />
            INTERACTIVE 3D CONNECTION INSPECTOR
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-current tracking-tight">
            Examine Heavy Steel Connections <br />
            <span className="text-[#00D4FF] glow-text-cyan">In 360° Exploded Detail</span>
          </h2>
          <p className="font-body text-[var(--text-muted)] text-base mt-4">
            Click and drag to rotate the moment connection. Toggle the exploded view to inspect individual high-strength bolts, gusset plates, stiffeners, and AWS weld beads.
          </p>
        </div>

        {/* 3D Inspector Viewport Card */}
        <div className="glass-panel rounded-3xl border border-[#00D4FF]/30 overflow-hidden shadow-2xl relative">
          {/* Top Controls Toolbar */}
          <div className="flex flex-wrap items-center justify-between p-4 bg-[var(--bg-secondary)] border-b border-[#8C99A5]/20 gap-4">
            <div className="flex items-center gap-3">
              <span className="font-numbers text-xs text-[#00D4FF] font-semibold">
                ASSEMBLY: MOMENT CONNECTION #MC-804
              </span>
              <span className="px-2.5 py-0.5 rounded bg-[#FF8C00]/20 text-[#FF8C00] font-numbers text-[10px]">
                AISC 360-22 STAMPED
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsExploded(!isExploded)}
                className={`px-4 py-2 rounded-lg font-heading text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2 ${
                  isExploded
                    ? 'bg-[#FF8C00] text-black shadow-[0_0_15px_#FF8C00]'
                    : 'bg-[#00D4FF]/20 border border-[#00D4FF]/50 text-[#00D4FF] hover:bg-[#00D4FF] hover:text-black'
                }`}
              >
                <Layers className="w-4 h-4" />
                {isExploded ? 'Assemble View' : 'Explode Assembly'}
              </button>

              <button
                onClick={() => setRotation({ x: -15, y: 25 })}
                className="p-2 rounded-lg bg-[var(--bg-primary)] border border-[#8C99A5]/30 text-[#8C99A5] hover:text-current hover:border-[#00D4FF]"
                title="Reset View"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive 3D Canvas Area */}
          <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="w-full h-[520px] bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] relative cursor-grab active:cursor-grabbing flex items-center justify-center select-none overflow-hidden"
          >
            {/* Interactive Simulated 3D Steel Assembly */}
            <div
              className="relative transition-transform duration-150 ease-out"
              style={{
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Column (Center Stub) */}
              <div
                onMouseEnter={() => setActiveComponent('Column W14x132 (A992 Steel)')}
                onMouseLeave={() => setActiveComponent(null)}
                className="w-24 h-80 bg-gradient-to-r from-[#475569] via-[#334155] to-[#1e293b] border-2 border-[#00D4FF] shadow-[0_0_20px_rgba(0,212,255,0.3)] rounded flex items-center justify-center"
              >
                <span className="font-numbers text-xs text-white font-bold rotate-90 tracking-widest">
                  COLUMN W14x132
                </span>
              </div>

              {/* Moment End Plate (Exploding outward) */}
              <div
                onMouseEnter={() => setActiveComponent('Moment End Plate 25mm (A36)')}
                onMouseLeave={() => setActiveComponent(null)}
                className="absolute top-20 left-24 w-6 h-40 bg-[#FF8C00] border border-white transition-all duration-500 rounded"
                style={{
                  transform: `translateX(${explodeOffset}px)`
                }}
              />

              {/* Beam Girder (Exploding outward) */}
              <div
                onMouseEnter={() => setActiveComponent('Main Girder W24x68 (A992)')}
                onMouseLeave={() => setActiveComponent(null)}
                className="absolute top-24 left-30 w-56 h-32 bg-gradient-to-b from-[#64748b] to-[#334155] border-2 border-[#00D4FF] transition-all duration-500 rounded flex items-center justify-center"
                style={{
                  transform: `translateX(${explodeOffset * 1.8}px)`
                }}
              >
                <span className="font-numbers text-xs text-white font-bold tracking-widest">
                  BEAM W24x68
                </span>
              </div>

              {/* High-Strength Bolt Assemblies */}
              {[30, 60, 90, 120].map((top, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveComponent('ASTM A325 Heavy Hex Bolts (Ø 24mm)')}
                  onMouseLeave={() => setActiveComponent(null)}
                  className="absolute left-20 w-4 h-4 rounded-full bg-[#00D4FF] border border-white shadow-[0_0_10px_#00D4FF] transition-all duration-500"
                  style={{
                    top: `${top + 80}px`,
                    transform: `translateX(${-explodeOffset * 0.8}px)`
                  }}
                />
              ))}
            </div>

            {/* Hover Tooltip Annotation HUD */}
            <div className="absolute bottom-6 left-6 glass-panel p-4 rounded-xl border border-[#00D4FF]/40 max-w-sm pointer-events-none">
              <span className="font-numbers text-[10px] text-[#00D4FF] uppercase tracking-wider block mb-1">
                COMPONENT INSPECTION
              </span>
              <p className="font-heading text-sm font-bold text-current">
                {activeComponent || 'Hover over any steel element or click Explode Assembly'}
              </p>
            </div>

            {/* Rotation Hint Overlay */}
            <div className="absolute top-6 right-6 font-numbers text-xs text-[var(--text-muted)] bg-[var(--bg-primary)]/80 px-3 py-1.5 rounded-full border border-current/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
              DRAG TO ROTATE 360°
            </div>
          </div>

          {/* Component Engineering Matrix Footer */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-6 bg-[var(--bg-secondary)] border-t border-[#8C99A5]/20">
            <div>
              <span className="block font-numbers text-xs text-[var(--text-muted)]">BOLT SPECIFICATION</span>
              <span className="font-heading text-sm font-bold text-current">ASTM A325 Heavy Hex</span>
            </div>
            <div>
              <span className="block font-numbers text-xs text-[var(--text-muted)]">WELD PROTOCOL</span>
              <span className="font-heading text-sm font-bold text-current">AWS D1.1 Full Penetration</span>
            </div>
            <div>
              <span className="block font-numbers text-xs text-[var(--text-muted)]">MOMENT CAPACITY</span>
              <span className="font-heading text-sm font-bold text-[#00D4FF]">850 kN·m</span>
            </div>
            <div>
              <span className="block font-numbers text-xs text-[var(--text-muted)]">FEA STRESS RATIO</span>
              <span className="font-heading text-sm font-bold text-[#FF8C00]">0.74 (Safe)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

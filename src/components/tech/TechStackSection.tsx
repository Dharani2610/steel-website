import React from 'react';
import { techStackData } from '../../data/techStackData';
import { Cpu, CheckCircle2 } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  return (
    <section id="technology" className="py-24 px-4 bg-[var(--bg-primary)] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] font-numbers text-xs uppercase tracking-wider mb-4">
            <Cpu className="w-4 h-4" />
            ENTERPRISE ENGINEERING SOFTWARE STACK
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-current tracking-tight">
            Powered By Industry-Leading <br />
            <span className="text-[#00D4FF] glow-text-cyan">3D BIM & Detailing Platforms</span>
          </h2>
          <p className="font-body text-[var(--text-muted)] text-base mt-4">
            We leverage official licensed enterprise suites with custom automation macros to deliver error-free fabrication packages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStackData.map((tech) => (
            <div
              key={tech.id}
              className="glass-card p-6 rounded-2xl group hover:-translate-y-2 transition-all relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="px-3 py-1 rounded font-numbers text-[10px] uppercase font-bold tracking-wider"
                    style={{
                      backgroundColor: `${tech.badgeColor}20`,
                      color: tech.badgeColor,
                      border: `1px solid ${tech.badgeColor}40`
                    }}
                  >
                    {tech.category}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#00D4FF] animate-ping" />
                </div>

                <h3 className="font-heading text-2xl font-bold text-current group-hover:text-[#00D4FF] transition-colors mb-2">
                  {tech.name}
                </h3>
                <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                  {tech.description}
                </p>

                <div className="space-y-2 mb-4">
                  {tech.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-body text-current">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00D4FF] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#8C99A5]/15 flex items-center justify-between font-numbers text-[10px] text-[var(--text-muted)]">
                <span>LICENSED ENTERPRISE SUITE</span>
                <span className="text-[#00D4FF]">100% COMPLIANT</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

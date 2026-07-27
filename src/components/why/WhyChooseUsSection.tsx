import React from 'react';
import { ShieldCheck, Zap, Users, Cpu, CheckCircle, DollarSign } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: 'Global Code Standards',
      desc: 'Full compliance with AISC, NISD, BS, Eurocode, and AS/NZS codes with certified PE/SE engineering seals.',
      color: '#00D4FF'
    },
    {
      icon: Zap,
      title: 'Fast Turnaround Delivery',
      desc: 'Round-the-clock 24/7 global delivery workflow reducing shop drawing turnaround by up to 40%.',
      color: '#FF8C00'
    },
    {
      icon: Users,
      title: 'Experienced Steel Engineers',
      desc: 'Team of 150+ licensed structural engineers, Tekla masters, and senior steel detailers with 15+ years experience.',
      color: '#4F46E5'
    },
    {
      icon: Cpu,
      title: 'Advanced 3D Automation',
      desc: 'Custom Tekla Open API plugins and automated CNC DSTV data pipelines guaranteeing zero shop fit-up errors.',
      color: '#00D4FF'
    },
    {
      icon: CheckCircle,
      title: '3-Tier QA/QC Process',
      desc: 'Rigorous 3-level quality check (Detailer -> Checker -> Lead Engineer) before any drawing package release.',
      color: '#FF8C00'
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective Engineering',
      desc: 'Optimized steel weight through connection value engineering, saving tons of steel on major erections.',
      color: '#4F46E5'
    }
  ];

  return (
    <section className="py-24 px-4 bg-[var(--bg-secondary)] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] font-numbers text-xs uppercase tracking-wider mb-4">
            WHY CHOOSE APEX STEEL
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-current tracking-tight">
            Built On Uncompromising <br />
            <span className="text-[#00D4FF] glow-text-cyan">Accuracy & Reliability</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-[#8C99A5]/20 hover:border-[#00D4FF]/50 transition-all group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center border mb-4 group-hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: `${item.color}15`,
                    borderColor: `${item.color}40`
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h3 className="font-heading text-lg font-bold text-current mb-2 group-hover:text-[#00D4FF] transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

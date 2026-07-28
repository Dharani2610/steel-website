import React from 'react';
import { Award, ShieldCheck, Layers, FileCheck } from 'lucide-react';

export const StatsCounter: React.FC = () => {
  const stats = [
    {
      icon: Award,
      value: '350+',
      label: 'Mega Projects Detailed',
      description: 'Heavy industrial, commercial & infrastructure'
    },
    {
      icon: ShieldCheck,
      value: '99.8%',
      label: 'Fit-Up Accuracy Rate',
      description: 'Zero shop re-cuts & zero site fitment delays'
    },
    {
      icon: Layers,
      value: '100%',
      label: 'AISC & Eurocode Compliant',
      description: 'Strict adherence to global detailing codes'
    },
    {
      icon: FileCheck,
      value: '50 States',
      label: 'PE/SE Engineering Seals',
      description: 'Registered Professional Engineers'
    }
  ];

  return (
    <section className="bg-[#FFFFFF] border-b border-slate-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center px-4 pt-4 sm:pt-0">
                <div className="p-3 rounded-sm bg-[#F6F7F8] border border-slate-200 text-[#3A6C8C] mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-sans text-3xl font-extrabold text-[#0F2744] font-technical-num mb-1">
                  {stat.value}
                </div>
                <div className="font-sans font-bold text-xs uppercase tracking-wider text-slate-800 mb-1">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-500 max-w-xs">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

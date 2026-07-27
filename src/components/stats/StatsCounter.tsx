import React from 'react';
import { FileText, Database, Cpu, Shield } from 'lucide-react';

export const StatsCounter: React.FC = () => {
  const items = [
    {
      icon: FileText,
      title: 'Deliverables',
      sub: 'Shop, Erection, Anchor Bolt Plans',
    },
    {
      icon: Database,
      title: 'CNC Data',
      sub: 'DSTV, DXF, IFC, SDNF, CIS/2',
    },
    {
      icon: Cpu,
      title: 'Software',
      sub: 'SDS/2, Tekla, Bluebeam',
    },
    {
      icon: Shield,
      title: 'Standards',
      sub: 'Pertaining to AISC, AWS, IBC, OSHA',
    },
  ];

  return (
    <section className="bg-[#E3E8ED] py-8 px-6 border-y border-slate-300/60 w-full transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center justify-center p-2 group">
                <div className="p-2.5 rounded-xl text-[#475569] group-hover:text-[#0084FF] group-hover:scale-110 transition-all duration-300 mb-2">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-sm sm:text-base text-slate-800 tracking-tight">
                  {item.title}
                </h4>
                <p className="font-body text-xs text-slate-500 mt-1">
                  {item.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

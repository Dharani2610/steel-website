import React, { useState } from 'react';
import { Box, Cpu, Layers, Workflow, Grid, Maximize, ShieldAlert, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import type { ServiceItem } from '../../types';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onRequestQuote: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onRequestQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const iconMap: Record<string, any> = {
    Box,
    Cpu,
    Layers,
    Workflow,
    Grid,
    Maximize,
    ShieldAlert,
    FileText
  };

  return (
    <section id="services" className="py-20 bg-[#FFFFFF] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#3A6C8C]/10 border border-[#3A6C8C]/30 text-[#3A6C8C] text-xs font-semibold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Engineering Capabilities & Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2744] tracking-tight leading-tight mb-4">
            Core Structural Steel Capabilities
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            From 3D Tekla BIM modeling and PE/SE sealed connection design to bar bending schedules and shop assembly packs, we deliver end-to-end structural engineering solutions.
          </p>
        </div>

        {/* 8 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Box;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="corporate-card p-6 rounded-sm flex flex-col justify-between cursor-pointer group hover:border-[#3A6C8C] transition-all"
              >
                <div>
                  {/* Top Icon Badge */}
                  <div className="w-12 h-12 rounded-sm bg-[#F6F7F8] border border-slate-200 flex items-center justify-center mb-5 text-[#3A6C8C] group-hover:bg-[#0F2744] group-hover:text-amber-500 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0F2744] group-hover:text-[#3A6C8C] transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-500 mb-4 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div>
                  {/* Software Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 mb-4">
                    {service.software.slice(0, 2).map((sw, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-xs bg-[#F6F7F8] border border-slate-200 text-[10px] font-medium text-slate-600 font-technical-num"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>

                  {/* Explore Capability Link */}
                  <div className="flex items-center text-xs font-bold text-[#3A6C8C] group-hover:text-amber-600 uppercase tracking-wider">
                    <span>Explore Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom CTA Banner */}
        <div className="bg-[#F6F7F8] p-6 sm:p-8 rounded-sm border border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-[#0F2744]">
              Require Custom Connection Calculations or Dedicated Tekla Teams?
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              We configure dedicated multi-user detailing teams tailored for your project timelines and shop standards.
            </p>
          </div>
          <button
            onClick={onRequestQuote}
            className="px-6 py-3 rounded-sm bg-[#D97706] hover:bg-[#B45309] text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-all flex items-center gap-2"
          >
            <span>Request Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Detail Specification Drawer */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={onRequestQuote}
      />
    </section>
  );
};

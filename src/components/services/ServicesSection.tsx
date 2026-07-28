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
  const [activeCategory, setActiveCategory] = useState<string>('All Services');

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

  const categories = [
    'All Services',
    'Steel Detailing',
    'Connection Engineering',
    '3D BIM & Modeling',
    'Rebar & Metals'
  ];

  const filteredServices = servicesData.filter((service) => {
    if (activeCategory === 'All Services') return true;
    if (activeCategory === 'Steel Detailing') {
      return service.title.includes('Detailing') || service.title.includes('Transmittal');
    }
    if (activeCategory === 'Connection Engineering') {
      return service.title.includes('Connection') || service.title.includes('Engineering');
    }
    if (activeCategory === '3D BIM & Modeling') {
      return service.title.includes('BIM') || service.title.includes('SDS2') || service.title.includes('Clash');
    }
    if (activeCategory === 'Rebar & Metals') {
      return service.title.includes('Rebar') || service.title.includes('Metals');
    }
    return true;
  });

  return (
    <section id="services" className="py-20 bg-[#FFFFFF] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#3A6C8C]/10 border border-[#3A6C8C]/30 text-[#3A6C8C] text-xs font-semibold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Engineering Capabilities & Services</span>
          </div>
          
          {/* Main Title with Orange Underline */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2744] tracking-tight leading-tight mb-4">
            <span className="relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#D97706] after:rounded-full">
              Core Structural Steel Capabilities
            </span>
          </h2>
          
          <p className="text-slate-600 text-base leading-relaxed mt-2">
            From 3D Tekla BIM modeling and PE/SE sealed connection design to bar bending schedules and shop assembly packs, we deliver end-to-end structural engineering solutions.
          </p>
        </div>

        {/* Category Filter Tabs with Orange Line Under Words */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 mb-10 border-b border-slate-200 pb-1 text-left">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-xs sm:text-sm font-bold uppercase tracking-wider pb-3 transition-all relative cursor-pointer text-[#0F2744]`}
              >
                <span>{category}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D97706] rounded-full transition-all duration-300" />
                )}
              </button>
            );
          })}
        </div>

        {/* Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-left">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Box;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="corporate-card p-5 rounded-2xl flex flex-col justify-between cursor-pointer group hover:border-[#D97706] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Professional Image Banner Header */}
                  {service.image && (
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/80 bg-slate-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/80 via-black/20 to-transparent" />
                      
                      {/* Floating Icon Badge */}
                      <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 flex items-center justify-center text-[#0F2744] shadow-md group-hover:bg-[#0F2744] group-hover:text-amber-500 transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      {/* Primary Software Tag Overlay */}
                      <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-[#0F2744]/85 backdrop-blur-sm text-amber-400 text-[10px] font-bold uppercase tracking-wider border border-white/20">
                        {service.software[0]}
                      </span>
                    </div>
                  )}

                  {/* Service Title with Orange Underline */}
                  <div className="mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-[#0F2744] pb-1 inline-block border-b-2 border-[#D97706] group-hover:text-[#3A6C8C] transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 mb-4 line-clamp-3 leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>

                <div>
                  {/* Software Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 mb-3">
                    {service.software.slice(0, 3).map((sw, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-[#F6F7F8] border border-slate-200 text-[10px] font-medium text-slate-600 font-technical-num"
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
        <div className="bg-[#F6F7F8] p-6 sm:p-8 rounded-2xl border border-slate-200 flex flex-wrap items-center justify-between gap-4 text-left shadow-sm">
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
            className="px-6 py-3 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-all flex items-center gap-2"
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


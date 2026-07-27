import React, { useState } from 'react';
import { Building2, Ruler, Box, Network } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import type { ServiceItem } from '../../types';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  onRequestQuote: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onRequestQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const mainServices = [
    {
      id: 'structural-detailing',
      icon: Building2,
      title: 'Structural Steel Detailing',
      description: 'Comprehensive main and miscellaneous steel detailing for commercial and industrial projects.',
      data: servicesData[0]
    },
    {
      id: 'connection-design',
      icon: Ruler,
      title: 'Connection Design',
      description: 'Signed and sealed calculations with shop ready detailing deliverables.',
      data: servicesData[1]
    },
    {
      id: 'precast-detailing',
      icon: Box,
      title: 'Precast Detailing & Design',
      description: 'Complete precast concrete detailing with coordination and shop drawings.',
      data: servicesData[2] || servicesData[0]
    },
    {
      id: 'bim-services',
      icon: Network,
      title: 'BIM Services',
      description: 'Advanced BIM modeling and coordination for multi-discipline projects.',
      data: servicesData[3] || servicesData[0]
    }
  ];

  return (
    <section id="our-services" className="bg-white py-20 px-6 sm:px-12 md:px-16 w-full relative border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto text-center">
        {/* Section Title */}
        <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#0F172A] mb-3 tracking-tight">
          Our Services
        </h2>
        <p className="font-body text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-12">
          Comprehensive steel detailing solutions from concept to fabrication
        </p>

        {/* 4 Service Cards Grid matching Image 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10 text-left">
          {mainServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service.data)}
                className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Blue Icon Container Box */}
                  <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] border border-[#B9E6FE] flex items-center justify-center mb-6 group-hover:bg-[#0084FF] transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6 text-[#0084FF] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#0F172A] mb-3 group-hover:text-[#0084FF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-body text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services Center Button */}
        <div className="flex justify-center">
          <button
            onClick={onRequestQuote}
            className="px-6 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-700 font-heading font-semibold text-xs sm:text-sm hover:bg-[#0084FF] hover:text-white hover:border-[#0084FF] transition-all shadow-sm"
          >
            View All Services
          </button>
        </div>
      </div>

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={onRequestQuote}
      />
    </section>
  );
};

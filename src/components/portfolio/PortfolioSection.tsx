import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import type { ProjectItem } from '../../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ShieldCheck, MapPin, Scale, ArrowRight } from 'lucide-react';

interface PortfolioSectionProps {
  onRequestQuote: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onRequestQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Industrial', 'Commercial', 'Bridges & Heavy Civil', 'Mission Critical'];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioData
    : portfolioData.filter(p => p.projectType.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="projects" className="py-20 bg-[#FFFFFF] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#3A6C8C]/10 border border-[#3A6C8C]/30 text-[#3A6C8C] text-xs font-semibold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Featured Case Studies & Engineering Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2744] tracking-tight leading-tight mb-4">
            Global Projects Executed with Precision
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Explore landmark industrial complexes, high-rise office towers, fracture-critical bridges, and hyper-scale data centers detailed by CALDIM.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 text-left">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0F2744] text-white border border-[#0F2744] shadow-sm'
                  : 'bg-[#F6F7F8] text-slate-700 border border-slate-200 hover:border-[#3A6C8C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="corporate-card rounded-sm overflow-hidden cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Hero Image */}
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <img
                    src={project.heroImage}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded-xs bg-[#0F2744]/90 text-amber-500 font-technical-num text-xs font-bold border border-slate-700">
                    {project.completionYear}
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-white bg-[#0F2744]/80 px-2.5 py-1 rounded-xs backdrop-blur-sm">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    {project.location}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-left">
                  <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">
                    {project.projectType}
                  </div>
                  <h3 className="text-xl font-bold text-[#0F2744] group-hover:text-[#3A6C8C] transition-colors mb-2">
                    {project.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4 font-sans">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Bar */}
              <div className="px-6 py-3.5 bg-[#F6F7F8] border-t border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F2744] font-technical-num">
                  <Scale className="w-4 h-4 text-[#3A6C8C]" />
                  {project.steelWeight}
                </div>

                <div className="flex items-center text-xs font-bold text-[#3A6C8C] group-hover:text-amber-600 uppercase tracking-wider">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onRequestQuote={onRequestQuote}
      />
    </section>
  );
};

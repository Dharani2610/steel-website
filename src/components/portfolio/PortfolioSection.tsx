import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import type { ProjectItem } from '../../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { Sparkles, MapPin, Scale, ArrowRight } from 'lucide-react';

interface PortfolioSectionProps {
  onRequestQuote: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onRequestQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'High-Rise', 'Industrial', 'Infrastructure', 'Sports & Entertainment'];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioData
    : portfolioData.filter(p => p.projectType.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="portfolio" className="py-24 px-4 bg-[var(--bg-primary)] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] font-numbers text-xs uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            WORLDWIDE PROJECT PORTFOLIO
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-current tracking-tight">
            Iconic Global Structural <br />
            <span className="text-[#00D4FF] glow-text-cyan">Steel Projects Detailed</span>
          </h2>
          <p className="font-body text-[var(--text-muted)] text-base mt-4">
            Explore complex 3D steel detailing projects executed across North America, Europe, Australia, Middle East, and Asia.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-numbers text-xs uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-[#00D4FF] text-black font-bold shadow-[0_0_15px_#00D4FF]'
                  : 'bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[#8C99A5]/20 hover:text-current hover:border-[#00D4FF]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer group hover:-translate-y-2 relative flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.heroImage}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent" />

                  <span className="absolute top-4 left-4 px-3 py-1 rounded bg-[var(--bg-primary)]/80 backdrop-blur-md border border-[#00D4FF]/30 font-numbers text-[10px] text-[#00D4FF] font-bold uppercase">
                    {project.completionYear}
                  </span>

                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs font-numbers text-[var(--text-muted)]">
                    <MapPin className="w-3.5 h-3.5 text-[#00D4FF]" />
                    {project.location}
                  </div>
                </div>

                <div className="p-6">
                  <span className="font-numbers text-xs text-[#FF8C00] uppercase tracking-wider block mb-1">
                    {project.projectType}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-current group-hover:text-[#00D4FF] transition-colors mb-2">
                    {project.name}
                  </h3>
                  <p className="font-body text-xs text-[var(--text-muted)] line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 bg-[var(--bg-secondary)] border-t border-[#8C99A5]/15 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-numbers font-bold text-current">
                  <Scale className="w-4 h-4 text-[#00D4FF]" />
                  {project.steelWeight}
                </div>

                <span className="font-numbers text-xs text-[#00D4FF] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  View 3D Specs
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onRequestQuote={onRequestQuote}
      />
    </section>
  );
};

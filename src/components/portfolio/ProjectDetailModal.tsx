import React from 'react';
import type { ProjectItem } from '../../types';
import { X, MapPin, Scale, Calendar, FileText, CheckCircle2, Quote, ArrowRight } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onRequestQuote
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl animate-fadeIn">
      <div className="glass-panel w-full max-w-4xl rounded-3xl border border-[#00D4FF]/30 p-6 md:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-[var(--bg-secondary)] border border-[#8C99A5]/30 text-[var(--text-muted)] hover:text-current hover:border-[#00D4FF] transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6 border border-[#8C99A5]/20">
          <img
            src={project.heroImage}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/40 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="px-3 py-1 rounded bg-[#00D4FF] text-black font-numbers text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                {project.projectType}
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-current">
                {project.name}
              </h2>
            </div>
            <div className="flex items-center gap-2 bg-[var(--bg-primary)]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#8C99A5]/30 text-xs font-numbers text-[#00D4FF]">
              <MapPin className="w-4 h-4" />
              {project.location}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[#8C99A5]/20">
            <div className="flex items-center gap-2 text-xs font-numbers text-[var(--text-muted)] mb-1">
              <Scale className="w-4 h-4 text-[#00D4FF]" />
              STEEL WEIGHT
            </div>
            <span className="font-numbers text-lg font-bold text-current">{project.steelWeight}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[#8C99A5]/20">
            <div className="flex items-center gap-2 text-xs font-numbers text-[var(--text-muted)] mb-1">
              <FileText className="w-4 h-4 text-[#FF8C00]" />
              DRAWING COUNT
            </div>
            <span className="font-numbers text-lg font-bold text-current">{project.drawingCount}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[#8C99A5]/20">
            <div className="flex items-center gap-2 text-xs font-numbers text-[var(--text-muted)] mb-1">
              <CheckCircle2 className="w-4 h-4 text-[#4F46E5]" />
              STEEL MEMBERS
            </div>
            <span className="font-numbers text-lg font-bold text-current">{project.memberCount}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[#8C99A5]/20">
            <div className="flex items-center gap-2 text-xs font-numbers text-[var(--text-muted)] mb-1">
              <Calendar className="w-4 h-4 text-[#00D4FF]" />
              COMPLETION YEAR
            </div>
            <span className="font-numbers text-lg font-bold text-current">{project.completionYear}</span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-heading text-lg font-bold text-current mb-2">Engineering Scope & Challenges</h3>
          <p className="font-body text-sm text-[var(--text-muted)] leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="mb-6">
          <span className="font-numbers text-xs text-[#00D4FF] uppercase tracking-wider block mb-2">
            SOFTWARE & CAD PLATFORMS USED
          </span>
          <div className="flex flex-wrap gap-2">
            {project.software.map((sw, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] border border-[#00D4FF]/30 text-current font-numbers text-xs"
              >
                {sw}
              </span>
            ))}
          </div>
        </div>

        {project.testimonial && (
          <div className="p-5 rounded-2xl bg-[var(--bg-secondary)]/80 border border-[#00D4FF]/30 relative mb-6">
            <Quote className="w-8 h-8 text-[#00D4FF]/30 absolute top-4 right-4" />
            <p className="font-body text-sm text-current italic mb-3">
              "{project.testimonial.quote}"
            </p>
            <div className="font-numbers text-xs">
              <span className="text-current font-bold block">{project.testimonial.author}</span>
              <span className="text-[var(--text-muted)]">{project.testimonial.role} – {project.testimonial.company}</span>
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#8C99A5]/20">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[#8C99A5]/30 text-current font-heading font-semibold text-xs hover:border-current transition-all"
          >
            Close Window
          </button>
          <button
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#4F46E5] text-black font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_#00D4FF] hover:scale-105 transition-all flex items-center gap-2"
          >
            Request Similar Project Detailing
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

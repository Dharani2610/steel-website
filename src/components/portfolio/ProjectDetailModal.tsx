import React from 'react';
import type { ProjectItem } from '../../types';
import { X, MapPin, Scale, Calendar, FileText, CheckCircle2, Quote, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0A192F]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white border border-slate-300 shadow-2xl rounded-sm overflow-hidden my-8 max-h-[90vh] flex flex-col text-left">
        
        {/* Modal Top Header */}
        <div className="bg-[#0F2744] text-white p-6 sm:p-8 flex items-start justify-between border-b border-slate-700 relative">
          <div className="pr-8">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#3A6C8C]/30 text-amber-500 text-[11px] font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Case Study Specification</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.name}
            </h2>
            <div className="flex items-center gap-2 text-xs text-slate-300 mt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>{project.location}</span>
              <span className="text-slate-500">•</span>
              <span className="text-amber-400 font-semibold">{project.projectType}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-sm bg-[#0A192F] hover:bg-amber-500 text-slate-300 hover:text-white transition-colors"
            title="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 text-slate-800 font-sans">
          
          {/* Main Visual Image Banner */}
          <div className="relative h-64 sm:h-80 rounded-sm overflow-hidden border border-slate-200 bg-slate-900">
            <img
              src={project.heroImage}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 px-3 py-1 bg-[#0F2744]/90 border border-slate-700 text-white font-technical-num text-xs font-bold rounded-xs">
              Completed Year {project.completionYear}
            </div>
          </div>

          {/* Technical Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-sm bg-[#F6F7F8] border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 uppercase tracking-wider mb-1 font-bold">
                <Scale className="w-4 h-4 text-[#3A6C8C]" />
                Steel Weight
              </div>
              <span className="text-lg font-bold text-[#0F2744] font-technical-num">{project.steelWeight}</span>
            </div>

            <div className="p-4 rounded-sm bg-[#F6F7F8] border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 uppercase tracking-wider mb-1 font-bold">
                <FileText className="w-4 h-4 text-[#3A6C8C]" />
                Shop Drawings
              </div>
              <span className="text-lg font-bold text-[#0F2744] font-technical-num">{project.drawingCount}</span>
            </div>

            <div className="p-4 rounded-sm bg-[#F6F7F8] border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 uppercase tracking-wider mb-1 font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#3A6C8C]" />
                Members Detailed
              </div>
              <span className="text-lg font-bold text-[#0F2744] font-technical-num">{project.memberCount}</span>
            </div>

            <div className="p-4 rounded-sm bg-[#F6F7F8] border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 uppercase tracking-wider mb-1 font-bold">
                <Calendar className="w-4 h-4 text-[#3A6C8C]" />
                Year Delivered
              </div>
              <span className="text-lg font-bold text-[#0F2744] font-technical-num">{project.completionYear}</span>
            </div>
          </div>

          {/* Project Goals, Challenges, Solutions, Outcomes */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#3A6C8C] mb-2">
                Project Scope Overview
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.challenge && (
              <div className="bg-[#F6F7F8] p-4 rounded-sm border-l-4 border-amber-500 border-y border-r border-slate-200">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0F2744] mb-1">
                  Engineering Challenge
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="bg-[#F6F7F8] p-4 rounded-sm border-l-4 border-[#3A6C8C] border-y border-r border-slate-200">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0F2744] mb-1">
                  Technical Solution & Strategy
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}

            {project.outcome && (
              <div className="bg-emerald-50/50 p-4 rounded-sm border-l-4 border-emerald-600 border-y border-r border-emerald-200">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                  Measured Project Outcome
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed font-semibold">
                  {project.outcome}
                </p>
              </div>
            )}
          </div>

          {/* Software Platforms */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2744] mb-3 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-[#3A6C8C]" />
              Software & CAD Platforms Employed
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.software.map((sw, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-sm bg-[#0F2744] text-white font-technical-num text-xs"
                >
                  {sw}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial Quote if present */}
          {project.testimonial && (
            <div className="p-5 rounded-sm bg-[#F6F7F8] border border-slate-200 relative">
              <Quote className="w-8 h-8 text-[#3A6C8C]/20 absolute top-4 right-4" />
              <p className="text-xs sm:text-sm text-slate-800 italic mb-3 pr-8">
                "{project.testimonial.quote}"
              </p>
              <div className="text-xs">
                <span className="text-[#0F2744] font-bold block">{project.testimonial.author}</span>
                <span className="text-slate-500">{project.testimonial.role} – {project.testimonial.company}</span>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer CTA */}
        <div className="bg-[#F6F7F8] border-t border-slate-200 p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-600">
            Have a similar structural detailing or connection design requirement?
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-sm border border-slate-300 text-slate-700 text-xs font-semibold uppercase tracking-wider hover:bg-slate-100"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote();
              }}
              className="px-5 py-2 rounded-sm bg-[#D97706] hover:bg-[#B45309] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-sm"
            >
              <span>Request Similar Project Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

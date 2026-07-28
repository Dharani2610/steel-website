import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Award, Users, Rocket, Send, X, Check } from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  skills: string[];
}

const JOB_POSITIONS: JobPosition[] = [
  {
    id: 'tekla-sr-detailer',
    title: 'Senior Tekla Structural Steel Detailer',
    department: 'Steel Detailing',
    location: 'Remote / Hybrid (Frisco, TX)',
    type: 'Full-Time',
    experience: '5+ Years',
    description: 'Lead 3D BIM modeling and fabrication shop drawing generation for complex commercial & industrial steel megastructures using Tekla Structures 2024.',
    skills: ['Tekla Structures', 'AISC Standards', 'NISD Detailing', 'NC/DSTV Export']
  },
  {
    id: 'pe-connection-engineer',
    title: 'PE/SE Connection Design Engineer',
    department: 'Structural Engineering',
    location: 'Frisco, TX / Remote',
    type: 'Full-Time',
    experience: '6+ Years (PE/SE Licensed)',
    description: 'Perform Finite Element Analysis (FEA) and design stamped moment, shear, and seismic connections covering AISC 360-22 and international codes.',
    skills: ['PE / SE License', 'FEA Analysis', 'RAM Connection', 'AISC 360']
  },
  {
    id: 'bim-clash-specialist',
    title: 'BIM Coordination & Clash Detection Specialist',
    department: 'BIM Coordination',
    location: 'Remote',
    type: 'Full-Time',
    experience: '3+ Years',
    description: 'Execute multi-disciplinary spatial clash resolution using Navisworks Manage and BIM Track prior to shop steel cutting.',
    skills: ['Navisworks Manage', 'BIM 360', 'Clash Resolution', 'IFC Workflows']
  },
  {
    id: 'sds2-steel-modeler',
    title: 'SDS2 3D Steel Modeler',
    department: 'Steel Detailing',
    location: 'Remote / Hybrid',
    type: 'Full-Time',
    experience: '4+ Years',
    description: 'Create high-precision 3D SDS2 models, framing erection plans, and bill of materials (BOM) for heavy industrial plants.',
    skills: ['SDS2', 'Industrial Steel', 'Shop Erection Plans', 'BOM Export']
  },
  {
    id: 'qa-structural-checker',
    title: 'Senior Structural Checker & QA Auditor',
    department: 'Quality Assurance',
    location: 'Frisco, TX / Hybrid',
    type: 'Full-Time',
    experience: '8+ Years',
    description: 'Conduct 100% independent shop drawing audit checks against architectural/structural IFC models before client transmittals.',
    skills: ['100% Checking Audit', 'AISC & AWS D1.1', 'Fabrication Checking', 'Quality Management']
  }
];

export const CareersSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [coverNote, setCoverNote] = useState('');

  const categories = ['All', 'Steel Detailing', 'Structural Engineering', 'BIM Coordination', 'Quality Assurance'];

  const filteredJobs = activeCategory === 'All'
    ? JOB_POSITIONS
    : JOB_POSITIONS.filter(j => j.department === activeCategory);

  const handleOpenApply = (job: JobPosition) => {
    setSelectedJob(job);
    setIsApplyModalOpen(true);
    setIsSubmitted(false);
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsApplyModalOpen(false);
      setIsSubmitted(false);
      setApplicantName('');
      setApplicantEmail('');
      setApplicantPhone('');
      setPortfolioUrl('');
      setCoverNote('');
    }, 2500);
  };

  return (
    <section id="careers" className="py-24 bg-[#0A192F] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Blueprint Grid & Accent Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F2744] via-[#0A192F] to-[#0A192F] opacity-90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Badge & Title */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#3A6C8C]/20 border border-[#3A6C8C]/40 text-[#0099FF] text-xs font-semibold uppercase tracking-widest mb-4">
            <Briefcase className="w-4 h-4 text-amber-500" />
            <span>JOIN CALDIM ENGINEERING // GLOBAL CAREERS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Build The Future Of <br />
            <span className="text-[#0099FF]">Global Infrastructure With Us</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Join an elite engineering team of Tekla BIM Modelers, PE/SE Connection Engineers, and Structural Detailers delivering world-class industrial, commercial, and infrastructure megastructures.
          </p>
        </div>

        {/* Core Perks & Company Culture Banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#0F2744]/80 p-6 rounded-xl border border-slate-700/80 backdrop-blur-md">
            <div className="w-12 h-12 rounded-lg bg-[#3A6C8C]/20 border border-[#3A6C8C]/40 flex items-center justify-center mb-4 text-amber-500">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">High-Impact Projects</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Work on AISC & NISD compliant commercial skyscrapers, airports, and heavy industrial facilities worldwide.
            </p>
          </div>

          <div className="bg-[#0F2744]/80 p-6 rounded-xl border border-slate-700/80 backdrop-blur-md">
            <div className="w-12 h-12 rounded-lg bg-[#3A6C8C]/20 border border-[#3A6C8C]/40 flex items-center justify-center mb-4 text-[#0099FF]">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">PE/SE Mentorship</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Accelerate your engineering licensure with direct mentorship from licensed Professional & Structural Engineers.
            </p>
          </div>

          <div className="bg-[#0F2744]/80 p-6 rounded-xl border border-slate-700/80 backdrop-blur-md">
            <div className="w-12 h-12 rounded-lg bg-[#3A6C8C]/20 border border-[#3A6C8C]/40 flex items-center justify-center mb-4 text-emerald-400">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Flexible Work Models</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Enjoy remote, hybrid, or headquarters options (Frisco, TX) with competitive salaries and performance bonuses.
            </p>
          </div>

          <div className="bg-[#0F2744]/80 p-6 rounded-xl border border-slate-700/80 backdrop-blur-md">
            <div className="w-12 h-12 rounded-lg bg-[#3A6C8C]/20 border border-[#3A6C8C]/40 flex items-center justify-center mb-4 text-amber-500">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Next-Gen Tools</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Master state-of-the-art Tekla Structures 2024, SDS2, Navisworks Manage, and automated FEA solvers.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-slate-800 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-[#0F2744] text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Job Openings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-[#0F2744] p-8 rounded-2xl border border-slate-700/80 shadow-xl hover:border-amber-500/60 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 rounded-sm bg-[#3A6C8C]/20 border border-[#3A6C8C]/40 text-[#0099FF] text-[11px] font-bold uppercase tracking-wider">
                    {job.department}
                  </span>
                  <span className="text-xs font-semibold text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {job.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {job.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-6 font-medium">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#0099FF]" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span>{job.experience}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {job.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-[#0A192F] border border-slate-700/60 text-[11px] text-slate-300 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleOpenApply(job)}
                className="w-full py-3.5 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Apply For This Position</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Application Modal Drawer */}
      {isApplyModalOpen && selectedJob && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-[#0F2744] border border-slate-700 rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl text-left overflow-y-auto max-h-[90vh]">
            
            <button
              onClick={() => setIsApplyModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mb-6 animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
                <p className="text-sm text-slate-300 max-w-md">
                  Thank you for applying for <strong>{selectedJob.title}</strong>. Our engineering HR team will review your application and contact you shortly.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs uppercase font-bold text-amber-500 tracking-wider">
                    CALDIM Careers Transmittal
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-1">
                    Apply: {selectedJob.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    {selectedJob.department} • {selectedJob.location}
                  </p>
                </div>

                <form onSubmit={handleSubmitApplication} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="e.g. John Doe, PE"
                      className="w-full px-4 py-3 rounded-lg bg-[#0A192F] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#0A192F] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1 uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-lg bg-[#0A192F] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1 uppercase tracking-wider">
                      Portfolio / LinkedIn / Resume Link
                    </label>
                    <input
                      type="url"
                      value={portfolioUrl}
                      onChange={(e) => setPortfolioUrl(e.target.value)}
                      placeholder="https://linkedin.com/in/yourprofile or Google Drive link"
                      className="w-full px-4 py-3 rounded-lg bg-[#0A192F] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1 uppercase tracking-wider">
                      Cover Note / Engineering Experience Summary
                    </label>
                    <textarea
                      rows={3}
                      value={coverNote}
                      onChange={(e) => setCoverNote(e.target.value)}
                      placeholder="Briefly describe your experience with Tekla, SDS2, AISC standards, or PE/SE licensure..."
                      className="w-full px-4 py-3 rounded-lg bg-[#0A192F] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Application</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
};

import React, { useRef, useState, useEffect } from 'react';
import { ShieldCheck, Award, Layers, Compass, CheckSquare, Globe, Shield, CheckCircle2, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface CompanyStorySectionProps {
  playVideoSignal?: number;
}

export const CompanyStorySection: React.FC<CompanyStorySectionProps> = ({ playVideoSignal }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Default: without music

  // Smooth scroll to full-width video player when About Us is clicked
  useEffect(() => {
    if (playVideoSignal) {
      const videoElement = document.getElementById('about-video-player');
      if (videoElement) {
        videoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        const section = document.getElementById('story');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [playVideoSignal]);

  // Ensure video autoplays muted and loops infinitely
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.loop = true;
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [isMuted]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log('Video play error:', err));
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
  };

  return (
    <section id="story" className="py-20 bg-[#F6F7F8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#3A6C8C]/10 border border-[#3A6C8C]/30 text-[#3A6C8C] text-xs font-semibold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Company Overview & Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2744] tracking-tight leading-tight mb-4">
            Engineering Precision Without Compromise
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            CALDIM Engineering is a premier global engineering firm specializing in structural steel detailing, PE/SE connection design, and 3D BIM coordination for complex industrial, commercial, and infrastructure megastructures.
          </p>
        </div>

        {/* Vision, Mission & Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Vision Card */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-start">
            <div className="w-14 h-14 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center mb-6 text-[#0F2744]">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F2744] mb-4">
              Vision
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To be a pioneering global engineering solutions organization, driving innovation and excellence in construction, manufacturing and automotive industries.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-start">
            <div className="w-14 h-14 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center mb-6 text-[#0F2744]">
              <Globe className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F2744] mb-4">
              Mission
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To be the premium partner of choice, delivering innovative and reliable engineering solutions that empower all industries to achieve excellence.
            </p>
          </div>

          {/* Core Values Card */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-start">
            <div className="w-14 h-14 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center mb-6 text-[#0F2744]">
              <Shield className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F2744] mb-6 text-center">
              Core Values
            </h3>
            <ul className="space-y-3 text-slate-700 text-sm sm:text-base font-medium inline-block text-left">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Integrity</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Quality</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Trust</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Teamwork</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Excellence</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Full-Width Cinema Video Showcase Block */}
        <div id="about-video-player" className="w-full mb-16">
          <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-2xl bg-[#0F2744] group">
            <div className="relative w-full h-[380px] sm:h-[480px] md:h-[580px] bg-black">
              <video
                ref={videoRef}
                src="/videos/caldim-video.mp4"
                poster="/business-sectors.png"
                playsInline
                muted
                loop
                autoPlay
                controls={false}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover cursor-pointer"
                onClick={togglePlay}
              />

              {/* Big Center Play Overlay Button when paused */}
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-amber-500/90 text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-amber-500 transition-all duration-300 z-10 cursor-pointer"
                  aria-label="Play CALDIM Corporate Video"
                >
                  <Play className="w-10 h-10 fill-white translate-x-0.5" />
                </button>
              )}

              {/* Top Video Header Overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F2744]/80 backdrop-blur-md border border-slate-700 text-white text-xs font-bold uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>CALDIM Corporate Overview Video</span>
                </div>
                <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-400 text-xs font-semibold uppercase tracking-wider">
                  <span>Looping • No Music</span>
                </div>
              </div>

              {/* Custom Bottom Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between z-10">
                <div className="flex items-center gap-4">
                  <button
                    onClick={togglePlay}
                    className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    title={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 translate-x-0.5" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer flex items-center gap-2 text-xs font-semibold"
                    title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="w-4 h-4 text-amber-400" />
                        <span>Muted (No Music)</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4 text-emerald-400" />
                        <span>Audio On</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Video Bottom Banner */}
            <div className="p-6 bg-[#0F2744] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-slate-800">
              <div className="text-left">
                <div className="text-xs uppercase tracking-wider text-amber-500 font-bold mb-1">
                  Established Quality Standard
                </div>
                <div className="text-base font-bold text-slate-100">
                  AISC & NISD Compliant Detailing Execution
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-1 max-w-3xl">
                  Our engineering workflows connect structural design intent directly to shop floor CNC automation, eliminating field rework and accelerating steel erection sequences across North America, Europe, and Asia.
                </p>
              </div>
              <ShieldCheck className="w-10 h-10 text-amber-500 flex-shrink-0 hidden md:block" />
            </div>
          </div>
        </div>

        {/* Key Pillars & Technical Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-left mb-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-[#0F2744] mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#3A6C8C]" />
              Technical Competence & FEA Rigor
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We believe that every connection detail impacts structural integrity and project profitability. Our registered Professional Engineers (PE/SE) employ Finite Element Analysis (FEA) to engineer optimized moment, shear, and seismic brace joints.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-[#0F2744] mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#3A6C8C]" />
              Single Source 3D BIM Interoperability
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              By maintaining master Tekla Structures and SDS2 3D models, CALDIM delivers direct NC/DSTV data files, DXF plate contours, and CIS/2 datasets directly formatted for automated steel fabrication machinery.
            </p>
          </div>
        </div>

        {/* Quality Commitment Bullet Points */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-left">
          <div className="text-xs font-bold text-[#0F2744] uppercase tracking-wider mb-2">
            Core Engineering Commitments
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3 text-xs text-slate-700">
              <CheckSquare className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <span><strong>Independent 100% Checking</strong> by dedicated senior checker auditors prior to transmittal.</span>
            </div>
            <div className="flex items-start gap-3 text-xs text-slate-700">
              <CheckSquare className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <span><strong>Multi-Disciplinary Clash Resolution</strong> using Navisworks Manage before shop cutting.</span>
            </div>
            <div className="flex items-start gap-3 text-xs text-slate-700">
              <CheckSquare className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <span><strong>PE/SE Stamped Calculations</strong> covering all 50 US states and international building codes.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};





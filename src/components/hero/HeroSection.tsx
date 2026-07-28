import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, FileText, Volume2, VolumeX } from 'lucide-react';

interface HeroSectionProps {
  onRequestQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestQuote }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.loop = true;
      videoRef.current.play().catch((err) => console.log('Hero video play:', err));
    }
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#0F2744] text-white pt-36 sm:pt-40 lg:pt-44 pb-20 lg:pb-28 overflow-hidden">
      {/* Full-Screen Live Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="/videos/caldim-video.mp4"
          poster="/hero-bg.png"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        />
        {/* Dark Cinematic Gradient Overlay for Maximum Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/95 via-[#0F2744]/85 to-[#0A192F]/70 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl flex flex-col items-start text-left">
          {/* Top Corporate Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#3A6C8C]/30 border border-[#3A6C8C]/50 text-slate-200 text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            <span>AISC & PE/SE Certified Engineering Firm</span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 drop-shadow-md">
            Precision Structural Steel <br />
            <span className="text-[#0099FF]">Detailing & Engineering</span>
          </h1>

          {/* Sub-headline Paragraph */}
          <p className="font-sans text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl drop-shadow">
            CALDIM provides high-accuracy 3D Tekla BIM modeling, PE/SE sealed connection design, and CNC-integrated fabrication shop drawings for industrial plants, commercial towers, and infrastructure megastructures worldwide.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button
              onClick={onRequestQuote}
              className="px-7 py-3.5 rounded-sm bg-[#D97706] hover:bg-[#B45309] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl flex items-center gap-2.5 cursor-pointer"
            >
              <span>Request Project Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#services"
              className="px-6 py-3.5 rounded-sm bg-[#0A192F]/90 hover:bg-[#1E293B] text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2 backdrop-blur-md"
            >
              <span>Engineering Capabilities</span>
              <FileText className="w-4 h-4 text-[#0099FF]" />
            </a>

            <button
              onClick={toggleMute}
              className="px-4 py-3 rounded-sm bg-black/40 hover:bg-black/60 text-slate-200 border border-slate-700/80 font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 backdrop-blur-md cursor-pointer"
              title={isMuted ? 'Unmute Background Music/Audio' : 'Mute Background Audio'}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline">Background Video Muted</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                  <span className="hidden sm:inline">Audio Playing</span>
                </>
              )}
            </button>
          </div>

          {/* Trust Bullet Items */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-700/60 w-full text-xs text-slate-200 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span>99.8% Fit-Up Accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span>PE/SE Sealed Calculations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span>NC/DSTV Automated Export</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


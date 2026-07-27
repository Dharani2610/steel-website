import React, { useEffect, useState } from 'react';
import { CaldimLogo } from '../common/CaldimLogo';
import { gsap } from 'gsap';

interface CinematicLoaderProps {
  onComplete: () => void;
}

export const CinematicLoader: React.FC<CinematicLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stageText, setStageText] = useState('CALDIM ENGINEERING SYSTEM INITIALIZING...');

  // Smooth cinematic progress animation using GSAP (approx 10s duration)
  useEffect(() => {
    const obj = { value: 0 };
    const tween = gsap.to(obj, {
      value: 100,
      duration: 10.0,
      ease: 'power1.inOut',
      onUpdate: () => {
        setProgress(obj.value);
      },
      onComplete: () => {
        setTimeout(onComplete, 400);
      }
    });

    return () => {
      tween.kill();
    };
  }, [onComplete]);

  // Update loading stage text based on progress
  useEffect(() => {
    if (progress > 25 && progress <= 50) {
      setStageText('LOADING 3D TEKLA STRUCTURAL MATRIX...');
    } else if (progress > 50 && progress <= 75) {
      setStageText('INITIALIZING FEA CONNECTION SOLVERS...');
    } else if (progress > 75 && progress <= 95) {
      setStageText('SYNCHRONIZING CALDIM GLOBAL HUBS...');
    } else if (progress > 95) {
      setStageText('CALDIM ENGINEERING ENVIRONMENT READY');
    }
  }, [progress]);

  return (
    <div className="fixed inset-0 z-50 bg-[#05070B] flex flex-col items-center justify-between py-12 px-4 text-white overflow-hidden">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

      {/* Top Header Logo & Brand */}
      <div className="relative z-10 flex flex-col items-center text-center pt-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-2xl bg-[#0084FF]/20 border border-[#0084FF]/40 shadow-[0_0_20px_rgba(0,132,255,0.4)]">
            <CaldimLogo className="w-10 h-8 text-[#0084FF]" />
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-5xl tracking-wider">
            CALDIM<span className="text-[#0084FF]">ENGINEERING</span>
          </h1>
        </div>
        <p className="font-numbers text-xs text-[#8C99A5] tracking-widest uppercase">
          Structural Steel Detailing & Products Private Limited
        </p>
      </div>

      {/* Center Stage: Full Webpage Width Moving Lorry Highway Track */}
      <div className="w-full relative my-auto py-16 flex items-center justify-center min-h-[320px]">
        
        {/* Glowing Laser Road Highway Track */}
        <div className="w-full h-8 bg-[#080B10] border-y border-[#0084FF]/40 relative shadow-[0_0_35px_rgba(0,132,255,0.25)] flex items-center">
          {/* Active progress road surface */}
          <div
            className="h-full bg-gradient-to-r from-[#0084FF]/60 via-[#4F46E5]/40 to-[#00D4FF]/80 transition-all duration-[70ms] ease-linear shadow-[0_0_25px_rgba(0,212,255,0.6)]"
            style={{ width: `${progress}%` }}
          />
          
          {/* Glowing Center Dashes */}
          <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none opacity-40">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-6 h-1 bg-white rounded-full shadow-[0_0_8px_#FFF]" />
            ))}
          </div>
        </div>

        {/* Lorry Truck Container (Moves horizontally across the screen) */}
        <div
          className="absolute top-1/2 transform -translate-x-1/2 -translate-y-[62.8%] z-20 pointer-events-none w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px]"
          style={{ left: `calc(${progress}% * 1.9 - 45%)` }}
        >
          {/* Casts a realistic moving shadow */}
          <div
            className="animate-shadow-breathe"
            style={{
              position: 'absolute',
              left: '12%',
              right: '8%',
              bottom: '31%',
              height: '24px',
              background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 75%)',
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 10,
            }}
          />

          {/* Soft blue light reflections underneath the truck (Underglow) */}
          <div
            style={{
              position: 'absolute',
              left: '20%',
              right: '18%',
              bottom: '31.5%',
              height: '16px',
              background: 'radial-gradient(ellipse at center, rgba(0, 132, 255, 0.7) 0%, rgba(0, 132, 255, 0) 70%)',
              pointerEvents: 'none',
              zIndex: 11,
              filter: 'blur(4px)',
              mixBlendMode: 'screen',
            }}
          />

          {/* Truck suspension wrapper (Slow vertical bounce) */}
          <div className="w-full h-full animate-suspension-bounce" style={{ zIndex: 20 }}>
            {/* Truck engine wrapper (High frequency vibration) */}
            <div className="w-full h-full animate-engine-vibrate relative">
              {/* Lorry Body Image */}
              <img
                src="/real-lorry-steel-transparent.png"
                alt="Caldim Engineering Lorry"
                className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,132,255,0.25)] blur-[0.3px]"
              />

              {/* Headlights emit soft white light with subtle bloom */}
              <div
                style={{
                  position: 'absolute',
                  left: '91.8%',
                  top: '59.5%',
                  width: '12px',
                  height: '12px',
                  transform: 'translate(-50%, -50%)',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 0 15px 6px rgba(255, 255, 255, 0.9), 0 0 35px 15px rgba(0, 132, 255, 0.5)',
                  zIndex: 25,
                  pointerEvents: 'none',
                }}
              />
              
              {/* Light Projection Cone */}
              <div
                style={{
                  position: 'absolute',
                  left: '91.8%',
                  top: '59.5%',
                  width: '350px',
                  height: '180px',
                  transform: 'translateY(-50%)',
                  background: 'radial-gradient(ellipse at left, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 45%, rgba(0, 132, 255, 0) 70%)',
                  clipPath: 'polygon(0% 45%, 100% 0%, 100% 100%, 0% 55%)',
                  pointerEvents: 'none',
                  zIndex: 24,
                  opacity: 0.85,
                  filter: 'blur(3px)',
                }}
              />
            </div>
          </div>

          {/* Spinning Wheel Overlay 1: Rear-Left wheel */}
          <div
            style={{
              position: 'absolute',
              left: '26.56%',
              top: '62.7%',
              width: '5.6%',
              height: '5.6%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              zIndex: 30,
            }}
          >
            <WheelSvg isPaused={progress >= 100} />
          </div>

          {/* Spinning Wheel Overlay 2: Rear-Right wheel */}
          <div
            style={{
              position: 'absolute',
              left: '39.26%',
              top: '62.6%',
              width: '5.7%',
              height: '5.7%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              zIndex: 30,
            }}
          >
            <WheelSvg isPaused={progress >= 100} />
          </div>

          {/* Spinning Wheel Overlay 3: Front wheel */}
          <div
            style={{
              position: 'absolute',
              left: '81.25%',
              top: '62.89%',
              width: '6.2%',
              height: '6.2%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              zIndex: 30,
            }}
          >
            <WheelSvg isPaused={progress >= 100} />
          </div>
        </div>
      </div>

      {/* Bottom Progress Status & Percentage */}
      <div className="w-full max-w-4xl px-6 flex flex-wrap items-center justify-between gap-4 font-numbers text-xs sm:text-sm text-[#8C99A5] relative z-10">
        <div className="flex items-center gap-3 bg-[#0B1118]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-[#0084FF]/30">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0084FF] animate-ping" />
          <span>{stageText}</span>
        </div>

        <div className="bg-[#0B1118]/80 backdrop-blur-md px-5 py-2 rounded-xl border border-[#0084FF]/40 text-[#0084FF] font-extrabold text-base sm:text-lg shadow-[0_0_15px_rgba(0,132,255,0.4)]">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};

interface WheelSvgProps {
  isPaused: boolean;
}

// Realistic Wheel Hub Rim & Tire SVG Component
const WheelSvg: React.FC<WheelSvgProps> = ({ isPaused }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full animate-wheel-spin"
      style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
    >
      {/* Tire (Dark Outer Ring) */}
      <circle cx="50" cy="50" r="48" fill="#111317" stroke="#1F232B" strokeWidth="3" />
      
      {/* Rim Outer Border */}
      <circle cx="50" cy="50" r="32" fill="#374151" stroke="#9CA3AF" strokeWidth="2.5" />
      
      {/* Hub/Brake Disc Inner */}
      <circle cx="50" cy="50" r="25" fill="#1F2937" />
      
      {/* Detailed Spokes */}
      <line x1="50" y1="18" x2="50" y2="82" stroke="#9CA3AF" strokeWidth="2.5" />
      <line x1="18" y1="50" x2="82" y2="50" stroke="#9CA3AF" strokeWidth="2.5" />
      <line x1="27" y1="27" x2="73" y2="73" stroke="#6B7280" strokeWidth="2" />
      <line x1="27" y1="73" x2="73" y2="27" stroke="#6B7280" strokeWidth="2" />
      
      {/* Center Cap with Chrome Outline */}
      <circle cx="50" cy="50" r="10" fill="#4B5563" stroke="#D1D5DB" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="5" fill="#0F172A" />
      
      {/* Hub Bolts */}
      <circle cx="50" cy="38" r="1.5" fill="#E5E7EB" />
      <circle cx="50" cy="62" r="1.5" fill="#E5E7EB" />
      <circle cx="38" cy="50" r="1.5" fill="#E5E7EB" />
      <circle cx="62" cy="50" r="1.5" fill="#E5E7EB" />
      <circle cx="41" cy="41" r="1.2" fill="#E5E7EB" />
      <circle cx="59" cy="59" r="1.2" fill="#E5E7EB" />
      <circle cx="41" cy="59" r="1.2" fill="#E5E7EB" />
      <circle cx="59" cy="41" r="1.2" fill="#E5E7EB" />
    </svg>
  );
};

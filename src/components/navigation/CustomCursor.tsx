import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('interactive-hover')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Outer Cyan Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-transform duration-100 ease-out ${
          isHovered ? 'w-12 h-12 border-2 border-[#00D4FF] bg-[#00D4FF]/10 scale-125 glow-box-cyan' : 'w-8 h-8 border border-[#00D4FF]/60'
        } ${isClicked ? 'scale-90 bg-[#00D4FF]/30' : ''}`}
        style={{
          transform: `translate3d(${position.x - (isHovered ? 24 : 16)}px, ${position.y - (isHovered ? 24 : 16)}px, 0)`
        }}
      />
      {/* Center Laser Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-50 rounded-full bg-[#00D4FF] shadow-[0_0_10px_#00D4FF]"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`
        }}
      />
    </>
  );
};

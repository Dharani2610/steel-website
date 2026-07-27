import React from 'react';

interface CaldimLogoProps {
  className?: string;
  size?: number;
}

export const CaldimLogo: React.FC<CaldimLogoProps> = ({ className = 'w-10 h-10', size }) => {
  return (
    <svg
      viewBox="0 0 500 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size * 0.6 } : undefined}
    >
      {/* Left 'C' Roof Section */}
      <path
        d="M 235 65 
           L 90 125 
           C 50 145, 35 185, 35 220 
           C 35 255, 65 265, 105 265 
           L 235 240 
           L 235 190 
           L 105 205 
           C 85 205, 80 190, 80 175 
           C 80 160, 95 145, 115 138 
           L 235 90 
           Z"
        fill="#0084FF"
      />
      {/* Right 'D' Roof Section */}
      <path
        d="M 265 65 
           L 410 125 
           C 450 145, 465 185, 465 220 
           C 465 255, 435 265, 395 265 
           L 265 240 
           L 265 90 
           Z 
           M 315 115 
           L 315 215 
           L 385 205 
           C 405 205, 415 190, 415 175 
           C 415 160, 400 145, 380 138 
           Z"
        fill="#0084FF"
        fillRule="evenodd"
      />
    </svg>
  );
};

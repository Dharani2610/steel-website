import React from 'react';

interface CaldimLogoProps {
  className?: string;
  size?: number;
  color?: string;
}

export const CaldimLogo: React.FC<CaldimLogoProps> = ({ className = 'w-10 h-10 text-[#0099FF]', size, color }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      {/* Left 'C' Shape forming left roof and wall */}
      <path
        d="M 47 8 
           L 7 33.5 
           L 7 71 
           C 7 83, 16 92, 28 92 
           L 47 92 
           L 47 74 
           L 28 74 
           C 21 74, 18 69, 18 61 
           L 18 45 
           C 18 37, 22 34, 28 34 
           L 47 22 
           Z"
        fill={color || "currentColor"}
      />
      {/* Right 'D' Shape forming right roof, stem, and outer curve */}
      <path
        d="M 53 8 
           L 93 33.5 
           L 93 71 
           C 93 83, 84 92, 72 92 
           L 53 92 
           Z 
           M 65 32 
           L 65 74 
           L 72 74 
           C 77 74, 81 70, 81 61 
           L 81 45 
           C 81 37, 77 34, 72 34 
           Z"
        fill={color || "currentColor"}
        fillRule="evenodd"
      />
    </svg>
  );
};

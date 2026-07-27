import React from 'react';

interface CaldimLorryTruckProps {
  className?: string;
  size?: number;
}

export const CaldimLorryTruck: React.FC<CaldimLorryTruckProps> = ({ className = 'w-96 h-36', size }) => {
  return (
    <svg
      viewBox="0 0 540 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size * 0.296 } : undefined}
    >
      {/* Structural Steel Payload Layers */}
      <rect x="20" y="32" width="340" height="12" rx="3" fill="#0084FF" />
      <rect x="30" y="18" width="320" height="12" rx="3" fill="#38BDF8" />
      <rect x="40" y="4" width="300" height="12" rx="3" fill="#0284C7" />

      {/* Payload Straps */}
      <rect x="80" y="2" width="6" height="44" fill="#0F172A" />
      <rect x="180" y="2" width="6" height="44" fill="#0F172A" />
      <rect x="280" y="2" width="6" height="44" fill="#0F172A" />

      {/* Flatbed Trailer Body Frame */}
      <rect x="10" y="44" width="365" height="46" rx="6" fill="#0F172A" stroke="#0084FF" strokeWidth="2.5" />
      <rect x="16" y="48" width="353" height="38" rx="4" fill="#1E293B" />
      
      {/* "CALDIM ENGINEERING PRIVATE LIMITED" Text on Trailer */}
      <text
        x="192"
        y="72"
        fill="#0084FF"
        fontSize="14"
        fontWeight="900"
        fontFamily="'Space Grotesk', 'Inter', sans-serif"
        textAnchor="middle"
        letterSpacing="1.2"
      >
        CALDIM ENGINEERING PRIVATE LIMITED
      </text>

      {/* Front Heavy Duty Truck Cab */}
      <path
        d="M 370 24 
           L 440 24 
           C 465 24, 485 45, 495 70 
           L 505 105 
           C 505 112, 498 116, 490 116 
           L 370 116 
           Z"
        fill="#F8FAFC"
        stroke="#0084FF"
        strokeWidth="3.5"
      />

      {/* Cab Dark Underchassis */}
      <rect x="370" y="90" width="130" height="26" fill="#0F172A" />

      {/* Front Windshield */}
      <path
        d="M 435 28 
           L 462 28 
           C 475 48, 482 60, 488 74 
           L 435 74 
           Z"
        fill="#38BDF8"
        opacity="0.95"
      />

      {/* Driver Side Door & Window */}
      <rect x="382" y="32" width="42" height="40" rx="3" fill="#0F172A" stroke="#38BDF8" strokeWidth="1" />
      <rect x="386" y="36" width="34" height="20" rx="2" fill="#38BDF8" opacity="0.9" />

      {/* Front Bumper & Grill */}
      <rect x="495" y="78" width="16" height="28" rx="3" fill="#0084FF" />
      <rect x="488" y="104" width="22" height="12" rx="2" fill="#64748B" />

      {/* Bright Headlight */}
      <circle cx="502" cy="88" r="5" fill="#EAB308" />
      <circle cx="502" cy="88" r="8" fill="#EAB308" opacity="0.3" />

      {/* Side Marker Lights */}
      <circle cx="20" cy="85" r="2.5" fill="#EF4444" />
      <circle cx="365" cy="85" r="2.5" fill="#EAB308" />

      {/* Heavy Duty Wheels - Trailer Rear Triple Axle */}
      <g>
        <circle cx="65" cy="116" r="20" fill="#0F172A" stroke="#475569" strokeWidth="4" />
        <circle cx="65" cy="116" r="8" fill="#94A3B8" />

        <circle cx="120" cy="116" r="20" fill="#0F172A" stroke="#475569" strokeWidth="4" />
        <circle cx="120" cy="116" r="8" fill="#94A3B8" />

        <circle cx="175" cy="116" r="20" fill="#0F172A" stroke="#475569" strokeWidth="4" />
        <circle cx="175" cy="116" r="8" fill="#94A3B8" />
      </g>

      {/* Heavy Duty Wheels - Cab Dual Axle */}
      <g>
        <circle cx="400" cy="116" r="20" fill="#0F172A" stroke="#0084FF" strokeWidth="4" />
        <circle cx="400" cy="116" r="8" fill="#94A3B8" />

        <circle cx="465" cy="116" r="20" fill="#0F172A" stroke="#0084FF" strokeWidth="4" />
        <circle cx="465" cy="116" r="8" fill="#94A3B8" />
      </g>
    </svg>
  );
};

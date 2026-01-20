import React from 'react';

interface MbsysLogoProps {
  className?: string;
}

const MbsysLogo: React.FC<MbsysLogoProps> = ({ className = "h-10" }) => (
  <svg viewBox="0 0 240 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="MBSYS Logo">
    {/* Dots Pattern - Left Column */}
    <circle cx="12" cy="18" r="5" className="fill-primary animate-[pulse_3s_ease-in-out_infinite]" />
    <circle cx="12" cy="38" r="6" className="fill-primary animate-[pulse_3s_ease-in-out_infinite] delay-100" />
    <circle cx="12" cy="62" r="7" className="fill-primary animate-[pulse_3s_ease-in-out_infinite] delay-200" />
    
    {/* Dots Pattern - Middle Column */}
    <circle cx="32" cy="18" r="6" className="fill-primary animate-[pulse_3s_ease-in-out_infinite] delay-150" />
    <circle cx="32" cy="38" r="8" className="fill-primary animate-[pulse_3s_ease-in-out_infinite] delay-300" />
    <circle cx="32" cy="62" r="10" className="fill-primary animate-[pulse_3s_ease-in-out_infinite] delay-500" />
    
    {/* Dots Pattern - Right Column */}
    <circle cx="56" cy="18" r="7" className="fill-primary animate-[pulse_3s_ease-in-out_infinite] delay-300" />
    <circle cx="56" cy="38" r="10" className="fill-primary animate-[pulse_3s_ease-in-out_infinite] delay-500" />
    <circle cx="56" cy="62" r="12" className="fill-primary animate-[pulse_3s_ease-in-out_infinite] delay-700" />

    {/* Text MBSyS - Using a classic serif look */}
    <text x="80" y="58" className="fill-slate-900 dark:fill-white font-serif font-bold text-5xl tracking-wide drop-shadow-lg">
      MBSyS
    </text>
    
    {/* Slogan */}
    <text x="84" y="76" className="fill-secondary font-sans text-[10px] font-bold tracking-[0.28em] uppercase">
      Connecting Dots
    </text>
  </svg>
);

export default MbsysLogo;

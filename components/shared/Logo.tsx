import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8", showText = true, light = false }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className} transition-opacity hover:opacity-90`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        <defs>
          <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" /> {/* Sky 400 */}
            <stop offset="100%" stopColor="#2563eb" /> {/* Blue 600 */}
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="24" fill={light ? "rgba(255,255,255,0.1)" : "#020617"} />
        <path 
          d="M30 52L45 67L72 35" 
          stroke="url(#logo-grad)" 
          strokeWidth="10" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <circle cx="75" cy="25" r="6" fill="#38bdf8" className="animate-pulse" />
      </svg>

      {showText && (
        <div className="flex flex-col -space-y-1">
          <span className={`text-xl font-black tracking-tighter ${light ? 'text-white' : 'text-slate-950'}`}>
            Ziek<span className="text-blue-500">Melder</span>
          </span>
          <span className={`text-[8px] uppercase tracking-[0.3em] font-black ${light ? 'text-blue-300' : 'text-slate-400'}`}>
            Enterprise
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
import React from 'react';
import { Language } from '../types';

interface LanguageSwitcherProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  compact?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, setLang, compact = false }) => {
  const languages: { code: Language; label: string; flag: string; nativeName: string }[] = [
    { code: 'nl', label: 'Dutch', flag: '🇳🇱', nativeName: 'NL' },
    { code: 'en', label: 'English', flag: '🇬🇧', nativeName: 'EN' },
    { code: 'pl', label: 'Polish', flag: '🇵🇱', nativeName: 'PL' },
    { code: 'uk', label: 'Ukrainian', flag: '🇺🇦', nativeName: 'UA' },
  ];
  
  return (
    <div className={`flex items-center gap-1 p-1 bg-slate-50 rounded-xl border border-slate-200 shadow-inner`}>
      {languages.map((lang) => (
        <button 
          key={lang.code}
          onClick={() => setLang(lang.code)}
          className={`group relative flex items-center gap-1.5 px-2 py-1.5 rounded-lg transition-all duration-300 ${
            currentLang === lang.code 
              ? 'bg-white text-teal-600 shadow-sm scale-105 z-10 border border-slate-200' 
              : 'bg-transparent text-slate-400 hover:text-slate-600 hover:bg-white/50'
          }`}
          aria-pressed={currentLang === lang.code}
          aria-label={`Switch to ${lang.label}`}
        >
          <span className="text-base leading-none transform transition-transform group-hover:scale-110">{lang.flag}</span>
          {!compact && (
            <span className={`text-[10px] font-black tracking-tighter ${currentLang === lang.code ? 'text-slate-900' : 'text-slate-400'}`}>
              {lang.nativeName}
            </span>
          )}
          {/* Tooltip */}
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-xl">
            {lang.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
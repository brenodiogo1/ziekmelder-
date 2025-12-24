import React, { useState } from 'react';
import { Texts, Language } from '../types';
import Logo from './shared/Logo';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
    texts: Texts;
    currentLang: Language;
    setLang: (lang: Language) => void;
    onGoToHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ texts, currentLang, setLang, onGoToHome }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-[100] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex justify-between items-center">
        {/* Logo Section */}
        <button 
          onClick={() => { onGoToHome(); setIsMobileMenuOpen(false); }} 
          className="group flex items-center gap-2 focus:outline-none transition-transform active:scale-95" 
          aria-label="Homepage"
        >
          <Logo className="h-8 sm:h-9 md:h-10" />
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <a href="#" className="text-sm font-bold text-slate-950 hover:text-blue-600 transition-colors relative group/link">
            Oplossingen
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover/link:w-full"></span>
          </a>
          <a href="#" className="text-sm font-bold text-slate-500 hover:text-slate-950 transition-colors">Prijzen</a>
          <a href="#" className="text-sm font-bold text-slate-500 hover:text-slate-950 transition-colors">Over ons</a>
          <a href="#" className="text-sm font-bold text-slate-500 hover:text-slate-950 transition-colors">Contact</a>
        </nav>
        
        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-6">
          <div className="hidden sm:flex items-center gap-4">
            <LanguageSwitcher currentLang={currentLang} setLang={setLang} compact />
            <div className="h-6 w-px bg-slate-200"></div>
            <button className="bg-slate-950 text-white text-[11px] font-black px-6 py-2.5 rounded-full hover:bg-blue-600 transition-all shadow-lg shadow-blue-900/10 active:scale-95">
              Demo aanvragen
            </button>
          </div>

          {/* Hamburger Icon */}
          <button 
            className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 top-[64px] sm:top-[80px] bg-white z-[90] transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
        <div className="p-6 flex flex-col h-full bg-slate-50/50">
          <div className="space-y-4 mb-10">
            <a href="#" className="block py-4 px-4 text-lg font-black text-slate-900 bg-white border border-slate-200 rounded-2xl shadow-sm">Oplossingen</a>
            <a href="#" className="block py-4 px-4 text-lg font-black text-slate-900 bg-white border border-slate-200 rounded-2xl shadow-sm">Prijzen</a>
            <a href="#" className="block py-4 px-4 text-lg font-black text-slate-900 bg-white border border-slate-200 rounded-2xl shadow-sm">Over ons</a>
            <a href="#" className="block py-4 px-4 text-lg font-black text-slate-900 bg-white border border-slate-200 rounded-2xl shadow-sm">Contact</a>
          </div>
          
          <div className="mt-auto pt-8 border-t border-slate-200 space-y-6">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 px-2">Selecteer Taal</p>
              <LanguageSwitcher currentLang={currentLang} setLang={setLang} />
            </div>
            <button className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-blue-500/20">
              Gratis proberen
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
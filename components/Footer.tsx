import React from 'react';
import Logo from './shared/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-slate-950 text-white py-16 sm:py-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16">
        <div className="col-span-1 sm:col-span-2">
          <Logo light className="h-10 mb-8" />
          <p className="text-slate-400 max-w-sm mb-8 text-sm sm:text-base leading-relaxed">
            Automatiseer ziekmeldingen in Nederland met volledige AVG-compliance e directe HR-integraties. De slimme keuze voor modern personeelsbeheer.
          </p>
          <div className="flex gap-4">
             {/* Social mock placeholders */}
             <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
               <span className="text-xs font-bold">In</span>
             </div>
             <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
               <span className="text-xs font-bold">Tw</span>
             </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-white/50">Product</h4>
          <ul className="text-slate-400 space-y-3 text-sm font-medium">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Integraties</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Beveiliging</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">API Docs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-white/50">Juridisch</h4>
          <ul className="text-slate-400 space-y-3 text-sm font-medium">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Gebruiksvoorwaarden</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">AVG / GDPR Compliance</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Cookiebeleid</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/5 mt-16 sm:mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <p className="text-xs font-medium text-slate-500">
          &copy; {currentYear} Ziek Melder B.V. • Amsterdam, NL • Alle rechten voorbehouden.
        </p>
        <div className="flex items-center gap-6 text-slate-500 text-xs font-bold uppercase tracking-widest">
          <span className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Systems Operational</span>
          <span className="opacity-50">v2.4.0</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
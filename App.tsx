import React, { useState, useCallback } from 'react';
import { SickLeaveFormData, Language, UserRole } from './types';
import { TEXTS } from './constants';
import Header from './components/Header';
import SickLeaveForm from './components/SickLeaveForm';
import ConfirmationScreen from './components/ConfirmationScreen';
import Footer from './components/Footer';
import Home from './components/Home';
import AdminView from './components/AdminView';
import CompanyView from './components/CompanyView';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('nl');
  const [currentView, setCurrentView] = useState<'home' | 'form' | 'dashboard'>('home');
  const [userRole, setUserRole] = useState<UserRole>('employee');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submissionData, setSubmissionData] = useState<SickLeaveFormData | null>(null);

  const handleFormSubmit = useCallback((data: SickLeaveFormData) => {
    setSubmissionData(data);
    setIsSubmitted(true);
  }, []);

  const handleReset = useCallback(() => {
    setIsSubmitted(false);
    setSubmissionData(null);
    setCurrentView('form');
  }, []);

  const handleGoToForm = useCallback(() => setCurrentView('form'), []);
  
  const handleLogin = useCallback((role: UserRole) => {
    setUserRole(role);
    setCurrentView('dashboard');
  }, []);

  const handleGoToHome = useCallback(() => {
    setCurrentView('home');
    setIsSubmitted(false);
    setSubmissionData(null);
  }, []);

  const texts = TEXTS[language];

  const renderContent = () => {
    if (currentView === 'home') {
      return <Home onGoToForm={handleGoToForm} onLogin={handleLogin} texts={texts} />;
    }

    if (currentView === 'dashboard') {
        if (userRole === 'admin') return <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mt-4 border border-slate-100"><AdminView texts={texts} /></div>;
        if (userRole === 'company') return <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mt-4 border border-slate-100"><CompanyView texts={texts} /></div>;
        return <Home onGoToForm={handleGoToForm} onLogin={handleLogin} texts={texts} />;
    }

    if (currentView === 'form') {
      return (
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden mt-4 max-w-lg mx-auto w-full border border-slate-100 sm:my-8">
          {isSubmitted && submissionData ? (
            <ConfirmationScreen 
              submissionData={submissionData} 
              texts={texts}
              onReset={handleReset} 
            />
          ) : (
            <SickLeaveForm onSubmit={handleFormSubmit} texts={texts} />
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-white selection:bg-blue-100 selection:text-blue-900">
      <Header 
        texts={texts} 
        currentLang={language} 
        setLang={setLanguage} 
        onGoToHome={handleGoToHome} 
      />
      
      <main className="flex-grow w-full relative pb-10">
        {/* Role Switcher - Modern Floating Segmented Control */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[80] w-[calc(100%-32px)] sm:w-auto">
            <div className="bg-slate-950/90 backdrop-blur-xl p-1 rounded-2xl border border-white/10 flex justify-around text-[10px] font-black uppercase tracking-widest shadow-[0_20px_50px_rgba(0,0,0,0.3)] min-w-[300px]">
                <button 
                  onClick={() => setUserRole('employee')} 
                  className={`flex-1 py-3 px-6 rounded-xl transition-all duration-300 ${userRole === 'employee' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  User
                </button>
                <button 
                  onClick={() => setUserRole('company')} 
                  className={`flex-1 py-3 px-6 rounded-xl transition-all duration-300 ${userRole === 'company' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  Company
                </button>
                <button 
                  onClick={() => setUserRole('admin')} 
                  className={`flex-1 py-3 px-6 rounded-xl transition-all duration-300 ${userRole === 'admin' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  Admin
                </button>
            </div>
        </div>
        
        <div className={`w-full ${currentView === 'home' ? '' : 'max-w-7xl px-4 sm:px-6'} mx-auto transition-all duration-500`}>
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
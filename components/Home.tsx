import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Texts, UserRole } from '../types';

interface HomeProps {
  onGoToForm: () => void;
  onLogin: (role: UserRole) => void;
  texts: Texts;
}

const Home: React.FC<HomeProps> = ({ onGoToForm, onLogin, texts }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderIntervalRef = useRef<number | null>(null);

  const slides = [
    {
      badge: 'PREMIUM AUTOMATION',
      title: texts.slide1Title,
      desc: texts.slide1Desc,
      img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200',
    },
    {
      badge: 'SECURITY FIRST',
      title: texts.slide2Title,
      desc: texts.slide2Desc,
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    },
    {
      badge: 'ENTERPRISE READY',
      title: texts.slide3Title,
      desc: texts.slide3Desc,
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    }
  ];

  const startSlider = useCallback(() => {
    if (sliderIntervalRef.current) clearInterval(sliderIntervalRef.current);
    sliderIntervalRef.current = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
  }, [slides.length]);

  const stopSlider = useCallback(() => {
    if (sliderIntervalRef.current) {
      clearInterval(sliderIntervalRef.current);
      sliderIntervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isPaused) startSlider();
    else stopSlider();
    return () => stopSlider();
  }, [isPaused, startSlider, stopSlider]);

  return (
    <div className="flex flex-col bg-white overflow-x-hidden">
      {/* Immersive Hero Slider */}
      <section 
        className="relative h-[650px] sm:h-[750px] md:h-[850px] overflow-hidden bg-slate-950"
        aria-roledescription="carousel"
        aria-label={texts.heroSliderLabel}
        role="region"
        onMouseEnter={stopSlider}
        onMouseLeave={() => !isPaused && startSlider()}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2500ms] ease-out ${index === activeSlide ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-110 z-10'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent z-10" />
            <img 
              src={slide.img} 
              alt="" 
              className="w-full h-full object-cover grayscale-[0.3] opacity-40 transform transition-transform duration-[10000ms] ease-linear"
              style={{ transform: index === activeSlide ? 'scale(1.1)' : 'scale(1)' }}
            />
            
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-10 md:px-20 max-w-5xl">
              <div className="flex items-center gap-3 mb-6 animate-fade-in">
                 <div className="h-0.5 w-8 sm:w-12 bg-blue-500"></div>
                 <span className="text-blue-400 text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase">{slide.badge}</span>
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-[1.05] sm:leading-[0.95] mb-6 tracking-tighter">
                {slide.title}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-2xl font-medium mb-10 md:mb-12 leading-relaxed">
                {slide.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                   onClick={onGoToForm}
                   className="bg-blue-600 hover:bg-blue-500 text-white font-black px-8 md:px-10 py-4 md:py-5 rounded-full transition-all shadow-2xl shadow-blue-600/30 active:scale-95 text-sm md:text-base"
                >
                  {texts.homeEmployeeCTA}
                </button>
                <button 
                  onClick={() => onLogin('company')}
                  className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-black px-8 md:px-10 py-4 md:py-5 rounded-full transition-all text-sm md:text-base"
                >
                  {texts.loginCompany}
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Progress Bar Indicators */}
        <div className="absolute bottom-10 left-6 right-6 sm:left-auto sm:right-20 z-30 flex items-center justify-center sm:justify-end gap-3 sm:gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`h-1.5 transition-all duration-1000 rounded-full ${i === activeSlide ? 'w-12 sm:w-20 bg-blue-500' : 'w-4 bg-white/30'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Integration Bar - Smoother Scrolling */}
      <div className="bg-slate-950 border-y border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-x-12 gap-y-10 opacity-30 grayscale hover:opacity-100 transition-opacity duration-500">
            <span className="w-full text-center lg:w-auto text-slate-500 font-black text-[10px] tracking-widest uppercase mb-2 lg:mb-0">Partnerships:</span>
            <span className="text-xl sm:text-2xl font-black text-white tracking-tighter">AFAS</span>
            <span className="text-xl sm:text-2xl font-black text-white tracking-tighter">SAP</span>
            <span className="text-xl sm:text-2xl font-black text-white tracking-tighter">Workday</span>
            <span className="text-xl sm:text-2xl font-black text-white tracking-tighter">Visma</span>
            <span className="text-xl sm:text-2xl font-black text-white tracking-tighter">BambooHR</span>
          </div>
        </div>
      </div>

      {/* How it Works - Vertical on Mobile */}
      <section className="py-24 sm:py-32 px-6 bg-slate-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">{texts.howItWorksTitle}</h2>
              <p className="text-slate-500 text-lg sm:text-xl font-medium">Reporting made effortless for the distributed workforce.</p>
            </div>
            <div className="hidden lg:block h-px flex-1 bg-slate-200 mx-10 mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {[
              { num: '01', title: 'Submit', text: texts.howItWorksStep1, icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' },
              { num: '02', title: 'Route', text: texts.howItWorksStep2, icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
              { num: '03', title: 'Confirm', text: texts.howItWorksStep3, icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' }
            ].map((step, idx) => (
              <div key={idx} className="group p-8 lg:p-10 rounded-[2rem] bg-white border border-slate-100 hover:bg-slate-950 hover:border-slate-900 transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-500/20 group-hover:rotate-6 transition-transform">
                  <svg className="h-7 w-7 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={step.icon} />
                  </svg>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-blue-500 font-black text-[11px] tracking-[0.2em]">{step.num}</span>
                  <div className="h-px w-6 bg-slate-200 group-hover:bg-slate-800"></div>
                </div>
                <h4 className="text-2xl font-black text-slate-950 group-hover:text-white mb-3">{step.title}</h4>
                <p className="text-slate-500 group-hover:text-slate-400 font-medium leading-relaxed text-sm sm:text-base">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
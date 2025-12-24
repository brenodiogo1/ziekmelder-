import React, { useState, useMemo } from 'react';
import { SickLeaveFormData, SickLeaveType, Texts } from '../types';

interface SickLeaveFormProps {
  onSubmit: (data: SickLeaveFormData) => void;
  texts: Texts;
}

const SickLeaveForm: React.FC<SickLeaveFormProps> = ({ onSubmit, texts }) => {
  const [fullName, setFullName] = useState('');
  const [employer, setEmployer] = useState('');
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [type, setType] = useState<SickLeaveType>(SickLeaveType.SELF);
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName.trim()) newErrors.fullName = texts.requiredField;
    if (!employer.trim()) newErrors.employer = texts.requiredField;
    if (!reason.trim()) newErrors.reason = texts.requiredField;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      onSubmit({ fullName, employer, startDate, type, reason });
      setIsSubmitting(false);
    }, 1500);
  };
  
  const isFormValid = useMemo(() => 
    fullName.trim() && employer.trim() && reason.trim(), 
  [fullName, employer, reason]);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-black text-slate-950 mb-8 tracking-tight">{texts.formTitle}</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="space-y-6">
          <div className="group">
            <label htmlFor="fullName" className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 group-focus-within:text-blue-600 transition-colors">{texts.fullNameLabel}</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder={texts.fullNamePlaceholder}
              className={`w-full px-5 py-3 bg-slate-50 border-2 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all ${errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-slate-100 focus:border-blue-600 focus:bg-white'}`}
              required
            />
            {errors.fullName && <p className="text-red-500 text-[10px] font-bold mt-2 uppercase tracking-wide">{errors.fullName}</p>}
          </div>
          <div>
            <label htmlFor="employer" className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">{texts.employerLabel}</label>
            <input
              type="text"
              id="employer"
              value={employer}
              onChange={(e) => setEmployer(e.target.value)}
              placeholder={texts.employerPlaceholder}
              className={`w-full px-5 py-3 bg-slate-50 border-2 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all ${errors.employer ? 'border-red-500 focus:border-red-500' : 'border-slate-100 focus:border-blue-600 focus:bg-white'}`}
              required
            />
             {errors.employer && <p className="text-red-500 text-[10px] font-bold mt-2 uppercase tracking-wide">{errors.employer}</p>}
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="startDate" className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">{texts.startDateLabel}</label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-5 py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3">{texts.sickLeaveTypeLabel}</label>
            <div className="grid grid-cols-2 gap-3">
                <button type="button" onClick={() => setType(SickLeaveType.SELF)} className={`p-4 border-2 rounded-2xl font-bold transition-all ${type === SickLeaveType.SELF ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-lg shadow-blue-500/10' : 'border-slate-100 text-slate-400 hover:border-slate-300'}`}>
                  {texts.typeSelfLabel}
                </button>
                <button type="button" onClick={() => setType(SickLeaveType.CHILD)} className={`p-4 border-2 rounded-2xl font-bold transition-all ${type === SickLeaveType.CHILD ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-lg shadow-blue-500/10' : 'border-slate-100 text-slate-400 hover:border-slate-300'}`}>
                  {texts.typeChildLabel}
                </button>
            </div>
          </div>
          <div>
            <label htmlFor="reason" className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">{texts.reasonLabel}</label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder={texts.reasonPlaceholder}
              rows={3}
              className={`w-full px-5 py-3 bg-slate-50 border-2 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all resize-none ${errors.reason ? 'border-red-500 focus:border-red-500' : 'border-slate-100 focus:border-blue-600 focus:bg-white'}`}
              required
            />
            <p className="text-[10px] text-slate-400 mt-2 italic font-medium">{texts.privacyNote}</p>
            {errors.reason && <p className="text-red-500 text-[10px] font-bold mt-2 uppercase tracking-wide">{errors.reason}</p>}
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting || !isFormValid}
          className="mt-10 w-full bg-slate-950 text-white font-black py-4 px-4 rounded-2xl hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500/20 disabled:bg-slate-200 disabled:text-slate-400 transition-all duration-300 flex items-center justify-center shadow-xl shadow-slate-950/10"
        >
          {isSubmitting ? (
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : texts.submitButton}
        </button>
      </form>
    </div>
  );
};

export default SickLeaveForm;
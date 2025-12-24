import React from 'react';
import { SickLeaveFormData, SickLeaveType, Texts } from '../types';

interface ConfirmationScreenProps {
  submissionData: SickLeaveFormData;
  texts: Texts;
  onReset: () => void;
}

const CheckmarkIcon = () => (
    <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const ConfirmationScreen: React.FC<ConfirmationScreenProps> = ({ submissionData, texts, onReset }) => {
  const timestamp = new Date().toLocaleString(navigator.language || 'en-US', {
    dateStyle: 'full',
    timeStyle: 'medium'
  });

  const getLeaveTypeLabel = (type: SickLeaveType) => {
    return type === SickLeaveType.SELF ? texts.typeSelfLabel : texts.typeChildLabel;
  }

  return (
    <div className="p-6 sm:p-8 text-center">
        <div className="w-24 h-24 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-4">
            <CheckmarkIcon />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">{texts.confirmationTitle}</h2>
        <p className="mt-2 text-slate-600">{texts.confirmationMessage}</p>

        <div className="mt-8 text-left bg-slate-50 rounded-lg p-4 border border-slate-200 shadow-inner">
            <h3 className="font-bold text-slate-700 mb-3">{texts.confirmationDetailsTitle}</h3>
            <div className="space-y-2 text-sm">
                <div className="flex justify-between items-start">
                    <span className="text-slate-500 shrink-0">{texts.fullNameLabel}:</span>
                    <span className="font-medium text-slate-800 ml-2">{submissionData.fullName}</span>
                </div>
                <div className="flex justify-between items-start">
                    <span className="text-slate-500 shrink-0">{texts.employerLabel}:</span>
                    <span className="font-medium text-slate-800 ml-2">{submissionData.employer}</span>
                </div>
                <div className="flex justify-between items-start">
                    <span className="text-slate-500 shrink-0">{texts.startDateLabel}:</span>
                    <span className="font-medium text-slate-800 ml-2">{new Date(submissionData.startDate + 'T00:00:00').toLocaleDateString(navigator.language || 'en-US', { dateStyle: 'long'})}</span>
                </div>
                 <div className="flex justify-between items-start">
                    <span className="text-slate-500 shrink-0">{texts.sickLeaveTypeLabel}:</span>
                    <span className="font-medium text-slate-800 ml-2">{getLeaveTypeLabel(submissionData.type)}</span>
                </div>
                <div className="border-t border-slate-200 pt-2 mt-2">
                    <p className="text-slate-500 mb-1">{texts.reasonLabel}:</p>
                    <p className="font-medium text-slate-800 italic">"{submissionData.reason}"</p>
                </div>
            </div>
            <p className="text-xs text-slate-500 mt-4 pt-4 border-t border-slate-200">
                {texts.confirmationProof} {timestamp}
            </p>
        </div>
        
        <button
            onClick={onReset}
            className="mt-8 w-full bg-slate-900 text-white font-bold py-4 px-4 rounded-xl hover:bg-teal-600 transition-all shadow-xl active:scale-95"
        >
            {texts.reportAnotherButton}
        </button>
    </div>
  );
};

export default ConfirmationScreen;
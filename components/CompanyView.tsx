import React from 'react';
import { Texts } from '../types';
import { MOCK_SICK_LEAVE_RECORDS, MOCK_COMPANIES } from '../mockData';
import DashboardCard from './shared/DashboardCard';
import Table from './shared/Table';

interface CompanyViewProps {
  texts: Texts;
}

const CompanyView: React.FC<CompanyViewProps> = ({ texts }) => {
  const company = MOCK_COMPANIES[0]; // Simulate logged-in company

  const columns = [
    { header: texts.employeeName, accessor: 'employeeName' },
    { 
      header: texts.startDateLabel, 
      accessor: 'startDate',
      render: (date: string) => <span className="text-slate-400 font-bold">{new Date(date).toLocaleDateString('nl-NL')}</span>
    },
    { 
      header: texts.leaveType, 
      accessor: 'type',
      render: (type: string) => (
        <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md ${type === 'self' ? 'bg-slate-100 text-slate-600' : 'bg-indigo-50 text-indigo-600'}`}>
          {type === 'self' ? texts.typeSelfLabel : texts.typeChildLabel}
        </span>
      )
    },
    { 
      header: texts.status, 
      accessor: 'status',
      render: (status: string) => (
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${status === 'ACTIVE' ? 'bg-blue-600 animate-pulse' : 'bg-slate-300'}`}></div>
          <span className={`text-xs font-bold ${status === 'ACTIVE' ? 'text-blue-600' : 'text-slate-400'}`}>
            {status}
          </span>
        </div>
      )
    },
     { 
      header: '', 
      accessor: 'id',
      render: () => (
        <button className="bg-slate-950 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl hover:bg-blue-600 transition-all active:scale-95">
          {texts.viewDetails}
        </button>
      )
    },
  ];

  return (
    <div className="p-6 sm:p-10 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
        <div>
            <h2 className="text-4xl font-black text-slate-950 tracking-tight">{texts.companyDashboardTitle}</h2>
            <p className="text-slate-500 font-medium mt-1">{texts.welcomeMessage}, <span className="text-blue-600 font-bold">{company.name}</span></p>
        </div>
        <div className="flex items-center gap-3">
            <button className="bg-white border-2 border-slate-100 text-slate-950 font-black py-3 px-6 rounded-2xl hover:bg-slate-50 transition-all text-sm">{texts.manageEmployees}</button>
            <button className="bg-slate-950 text-white font-black py-3 px-6 rounded-2xl hover:bg-blue-600 transition-all text-sm shadow-xl shadow-slate-950/10">{texts.settings}</button>
        </div>
      </div>
      
      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <DashboardCard 
          title={texts.yourEmployees} 
          value={company.employees.toString()} 
          trend={{ value: '2', isUp: true }}
        />
        <DashboardCard 
          title={texts.activeSickReports} 
          value={company.activeReports.toString()} 
          trend={{ value: '1', isUp: false }}
        />
        <DashboardCard 
          title="Notification Success" 
          value="99.8%" 
          trend={{ value: '0.2%', isUp: true }}
        />
        <DashboardCard 
          title="Avg. Response" 
          value="12m" 
          trend={{ value: '2m', isUp: true }}
        />
      </div>

      {/* Sick Leave Reports Table */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-black text-slate-950 tracking-tight">{texts.sickReportsFor} {company.name}</h3>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Search employee..." 
            className="bg-slate-50 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 w-48 sm:w-64"
          />
        </div>
      </div>
      <Table columns={columns} data={MOCK_SICK_LEAVE_RECORDS} />
    </div>
  );
};

export default CompanyView;
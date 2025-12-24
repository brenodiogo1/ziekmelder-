import React from 'react';
import { Texts } from '../types';
import { MOCK_COMPANIES } from '../mockData';
import DashboardCard from './shared/DashboardCard';
import Table from './shared/Table';

interface AdminViewProps {
  texts: Texts;
}

const AdminView: React.FC<AdminViewProps> = ({ texts }) => {
    const totalEmployees = MOCK_COMPANIES.reduce((sum, company) => sum + company.employees, 0);
    const totalActiveReports = MOCK_COMPANIES.reduce((sum, company) => sum + company.activeReports, 0);

    const columns = [
        { header: texts.companyName, accessor: 'name' },
        { header: texts.contactPerson, accessor: 'contactPerson' },
        { header: texts.employeeCount, accessor: 'employees' },
        { 
          header: texts.activeSickReports, 
          accessor: 'activeReports',
          render: (val: number) => (
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${val > 5 ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
              {val} active
            </span>
          )
        },
    ];

  return (
    <div className="p-6 sm:p-10 max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-4xl font-black text-slate-950 tracking-tight">{texts.adminDashboardTitle}</h2>
            <p className="text-slate-500 font-medium mt-1">Platform-wide overview and company management.</p>
          </div>
          <button className="bg-blue-600 text-white font-black px-6 py-3 rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 active:scale-95">
            + Add Company
          </button>
        </header>
        
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <DashboardCard 
              title={texts.totalCompanies} 
              value={MOCK_COMPANIES.length.toString()} 
              trend={{ value: '12%', isUp: true }}
            />
            <DashboardCard 
              title={texts.totalEmployees} 
              value={totalEmployees.toString()} 
              trend={{ value: '4%', isUp: true }}
            />
            <DashboardCard 
              title={texts.activeSickReports} 
              value={totalActiveReports.toString()} 
              trend={{ value: '2%', isUp: false }}
            />
        </div>

        {/* Registered Companies Table */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-black text-slate-950 tracking-tight">{texts.registeredCompanies}</h3>
          <button className="text-blue-600 text-xs font-black uppercase tracking-widest hover:text-blue-700 transition-colors">Export CSV</button>
        </div>
        <Table columns={columns} data={MOCK_COMPANIES} />
    </div>
  );
};

export default AdminView;
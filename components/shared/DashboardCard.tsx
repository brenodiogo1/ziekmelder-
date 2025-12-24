import React from 'react';

interface DashboardCardProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
  trend?: {
    value: string;
    isUp: boolean;
  };
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon, trend }) => {
  return (
    <div className="relative overflow-hidden bg-white p-6 rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-125 transition-transform duration-700"></div>
      
      <div className="flex justify-between items-start mb-4">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{title}</span>
        {icon && (
          <div className="p-2 bg-slate-50 rounded-xl text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            {icon}
          </div>
        )}
      </div>
      
      <div className="flex items-end gap-3">
        <p className="text-4xl font-black text-slate-950 tracking-tighter">{value}</p>
        {trend && (
          <div className={`flex items-center text-[10px] font-black mb-1.5 px-2 py-0.5 rounded-full ${trend.isUp ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
            {trend.isUp ? '↑' : '↓'} {trend.value}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
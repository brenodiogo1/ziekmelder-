import React from 'react';

interface Column {
  header: string;
  accessor: string;
  render?: (value: any, row?: any) => React.ReactNode;
}

interface TableProps {
  columns: Column[];
  data: any[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-hidden bg-white rounded-2xl border border-slate-100 shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0">
          <thead className="bg-slate-50/50">
            <tr>
              {columns.map((col, idx) => (
                <th 
                  key={col.accessor} 
                  scope="col" 
                  className={`px-6 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] border-b border-slate-100 ${idx === 0 ? 'rounded-tl-2xl' : ''} ${idx === columns.length - 1 ? 'rounded-tr-2xl' : ''}`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr key={rowIndex} className="group hover:bg-slate-50/50 transition-colors duration-200">
                  {columns.map((col, colIdx) => (
                    <td 
                      key={col.accessor} 
                      className={`px-6 py-4 text-sm text-slate-600 font-medium ${colIdx === 0 ? 'text-slate-900 font-bold' : ''}`}
                    >
                      {col.render ? col.render(row[col.accessor], row) : row[col.accessor]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="px-6 py-12 text-center text-slate-400 text-sm font-medium">
                  Geen gegevens gevonden.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
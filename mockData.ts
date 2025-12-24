import { Company, SickLeaveRecord, SickLeaveType } from './types';

export const MOCK_COMPANIES: Company[] = [
  { id: '1', name: 'Innovatech B.V.', contactPerson: 'Jan Jansen', employees: 150, activeReports: 8 },
  { id: '2', name: 'Dutch Designs Co.', contactPerson: 'Piet Pietersen', employees: 75, activeReports: 3 },
  { id: '3', name: 'Gouda Goods', contactPerson: 'Klaas de Vries', employees: 220, activeReports: 12 },
  { id: '4', name: 'Amsterdam Analytics', contactPerson: 'Marieke van Dijk', employees: 45, activeReports: 2 },
];

export const MOCK_SICK_LEAVE_RECORDS: SickLeaveRecord[] = [
    { id: 'rec1', employeeName: 'Anna Bakker', startDate: '2024-05-20', type: SickLeaveType.SELF, status: 'ACTIVE'},
    { id: 'rec2', employeeName: 'Ben de Groot', startDate: '2024-05-18', type: SickLeaveType.CHILD, status: 'ACTIVE'},
    { id: 'rec3', employeeName: 'Carla Visser', startDate: '2024-04-10', endDate: '2024-04-15', type: SickLeaveType.SELF, status: 'RESOLVED'},
    { id: 'rec4', employeeName: 'Dirk Meijer', startDate: '2024-05-21', type: SickLeaveType.SELF, status: 'ACTIVE'},
    { id: 'rec5', employeeName: 'Eva Smit', startDate: '2024-03-01', endDate: '2024-03-05', type: SickLeaveType.CHILD, status: 'RESOLVED'},
];

export type Language = 'en' | 'nl' | 'pl' | 'uk';

export type UserRole = 'employee' | 'company' | 'admin';

export enum SickLeaveType {
  SELF = 'self',
  CHILD = 'child'
}

export interface SickLeaveFormData {
  fullName: string;
  employer: string;
  startDate: string;
  type: SickLeaveType;
  reason: string;
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface Company {
    id: string;
    name:string;
    contactPerson: string;
    employees: number;
    activeReports: number;
}

export interface SickLeaveRecord {
    id: string;
    employeeName: string;
    startDate: string;
    endDate?: string;
    type: SickLeaveType;
    status: 'ACTIVE' | 'RESOLVED';
    reason?: string;
}


export interface Texts {
  headerTitle: string;
  formTitle: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  employerLabel: string;
  employerPlaceholder: string;
  startDateLabel: string;
  sickLeaveTypeLabel: string;
  typeSelfLabel: string;
  typeChildLabel: string;
  reasonLabel: string;
  reasonPlaceholder: string;
  privacyNote: string;
  submitButton: string;
  submittingButton: string;
  confirmationTitle: string;
  confirmationMessage: string;
  confirmationDetailsTitle: string;
  confirmationProof: string;
  reportAnotherButton: string;
  requiredField: string;
  // Home page
  homeHeroTitle: string;
  homeHeroSubtitle: string;
  homeEmployeeCTA: string;
  homeForCompanies: string;
  homeCompanyTitle: string;
  homeCompanyDescription: string;
  homeCompanyCTA: string;
  loginEmployee: string;
  loginCompany: string;
  demoLoginTitle: string;
  // Slider & More Features
  slide1Title: string;
  slide1Desc: string;
  slide2Title: string;
  slide2Desc: string;
  slide3Title: string;
  slide3Desc: string;
  howItWorksTitle: string;
  howItWorksStep1: string;
  howItWorksStep2: string;
  howItWorksStep3: string;
  // Accessibility
  pauseSlider: string;
  playSlider: string;
  goToSlide: string;
  heroSliderLabel: string;
  // Admin Dashboard
  adminDashboardTitle: string;
  totalCompanies: string;
  totalEmployees: string;
  activeSickReports: string;
  registeredCompanies: string;
  companyName: string;
  contactPerson: string;
  employeeCount: string;
  // Company Dashboard
  companyDashboardTitle: string;
  welcomeMessage: string;
  yourEmployees: string;
  sickReportsFor: string;
  employeeName: string;
  leaveType: string;
  status: string;
  viewDetails: string;
  manageEmployees: string;
  settings: string;
}
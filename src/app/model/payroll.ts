
export class PayDetails {
    payMonthYear: string;
    payYear: string;
    payMonth: string;
    type: string;
    payPeriodStatus: string;
    status: string;
    categoryWiseProcessing: string;
    isCategory: boolean;
    isProcess: boolean;
    isOpen: boolean;
    isViewDetail: boolean;
}

export class PayrollEmployee {
    srNo: string;
    employeeNo: string;
    employeeName: string;
    employeeOfficeName: string;
    employeeClass: string;
    designation: string;
    payLevel: string;
    cellId: string;
    sevenThPayCpcBasic: string;
    payBandValue: string;
    gradePay: string;
    sixthBasicPay: string;
    employeeStatus: string;
    dateOfJoining: string;
    dateOfRetirement: string;
    include: string;
    fixBasicPay: string;
    payBand: string;
    class: string;
    employeeCategory: string;
}

export class PayrollProcess {
    select: string;
    employeeCategory: string;
    includeCount: string;
    excludeCount: string;
    total: string;
    finalCount: string;
    payrollStatus: string;
    statusDetails: string;
    processIndividual: string;
    downloadPayrollData: string;
    isPayrollStatus: boolean;
    isProcess: boolean;
}
export class IndividualEmployeeSearch {
    employeeNumber: string;
    employeeName: string;
    designation: string;
    status: string;
    statusDetails: string;
    isProcess: boolean;
}

export class ClassWiseRegularSalaryView {
    srNo: string;
    employeeNumber: string;
    employeeName: string;
    designation: string;
    basicPay: string;
    gradePay: string;
    daArrear: string;
    totalEarnings: string;
    nps: string;
    totalDeductions: string;
    netSalary: string;
}

export class IndividualEmployeeEarning {
    earning: string;
    amount: string;
}
export class IndividualEmployeeEarningSplit {
    earning: string;
    amount: string;
    fromDate: string;
    toDate: string;
}
export class IndividualEmployeeDeductions {
    deductions: string;
    amount: string;
}
export class IndividualEmployeeDeductionsSplit {
    deductions: string;
    amount: string;
    fromDate: string;
    toDate: string;
}
export class ListView {
    value: string;
    viewValue: string;
}

export interface LoanDetails {
    type: string;
    payhead: string;
    description: string;
    enable: boolean;
    showInPayslip: string;
    displayOrder: string;
    isSubmitted: boolean;
}

export interface EmployeePayConfiguration {
    id: number;
    name: string;
    class: string;
    designation: string;
    transport: string;
    availed: string;
    component: string;
    amount: number;
    fromDate: string;
    toDate: string;
    category: string;
    office: string;
    leaveSalary: string;
    otherAllowance: string;
    medicalAllowance: string;
    compensatoryLocalAllowance: string;
    dangAllowance: string;
    tribalAllowance: string;
    washingAllowance: string;
    nursingAllowance: string;
    suspensionOfPay: string;
    nonPrivatePracticeAllowance: string;
    personalPay: string;
    pernamanentTravelAllowance: string;
    interimRelief: string;
    specialAdditionalPay: string;
    specialAllowance: string;
    sumptuaryAllowance: string;
    petrolDieselAllowance: string;
    bookAllowance: string;
    stipendAllowance: string;
}

export interface EmployeeSubscription {
    id: number;
    name: string;
    class: string;
    designation: string;
    componentHead: string;
    transport: string;
    availed: string;
    component: string;
    amount: string;
    fromDate: string;
    toDate: string;
    category: string;
}
export interface EmpLoanDetail {
    employeeId: string;
    employeeName: string;
    employeeClass: string;
    designation: string;
    // emiFromDate: string;
    // emiToDate: string;
    emiStatus: string;
    emiType: string;
    emiAmount: string;
    includeInPayroll: boolean;
    loanAccNo: string;
    loanType: string;
    emiNo: string;
    emiDueDate: string;
    emiProcessDueDate: string;
    emiRecoveryDate: string;
    reasonForExcl: string;
}

export interface DDoOfficeList {
    value: any | '';
    viewValue: any | '';
}
export interface DDoNoList {
    value: any | '';
    viewValue: any | '';
}
export interface CardexList {
    value: any | '';
    viewValue: any | '';
}
export interface NextFinYear {
    value: any | '';
    viewValue: any | '';
}
export interface PayrollType {
    value: any | '';
    viewValue: any | '';
}
export interface PayMonth {
    value: any | '';
    viewValue: any | '';
}
export interface LeaveList {
    value: any | '';
    viewValue: any | '';
}
export interface EmpType {
    value: any | '';
    viewValue: any | '';
}
export interface DesigList {
    value: any | '';
    viewValue: any | '';
}
export interface ReceiptElement {
    srNo: number;
    id: number;
    name: string;
    class: string;
    designation: string;
    PreLeaveDate: any;
    PreLeaveTworomDate: any;
    leaveType: string;
    TodalLeave: number;
    isSubmitted: boolean;
}

export interface SalaryComponents {
    salaryComponent: string;
    amount: string;
    action: string;
}

export interface PeriodicElement {
    srno: string;
    id: number;
    name: string;
    class: string;
    designation: string;
    allocatedto: string;
    isInSameHQ: string;
    quartertype: string;
    quarterrent: string;
    rentamount: string;
    fd: string;
    tod: string;
    category: string;
    basicPay: string;
    district: string;
    address: string;
}

export interface SocietyRecovery {
    employeeNo: string;
    employeeName: string;
    employeeClass: string;
    designation: string;
    societyName: string;
    recoveryAmount: string;
    month: string;
    // fromDate: string;
    // toDate: string;
}
export interface AdhocSubscription {
    employeeNo: string;
    employeeName: string;
    employeeClass: string;
    designation: string;
    basicSalary: string;
    grossSalary: string;
    adhocType: string;
    adhocName: string;
    fromDate: Date;
    toDate: Date;
    amt: string;
    per: string;
}
export interface BudgetHeadMapping {
    srNo: string;
    employeeNo: string;
    employeeName: string;
    designation: string;
    employeeClass: string;
    employeeCat: string;
    demand: string;
    majorHead: string;
    subMajorHead: string;
    minorHead: string;
    subHead: string;
    detailHead: string;
    objectClass: string;
    isSubmitted: boolean;
}

export interface BudgetHeadMappingTwo {
    srNo: string;
    employeeNo: string;
    employeeName: string;
    designation: string;
    employeeClass: string;
    employeeCat: string;
    budgetHead: string;
    isSubmitted: boolean;
}

export interface AdhocMaster {
    type: string;
    name: string;
    rowStatus: boolean;
    isSubmitted: boolean;
    demand: string;
    majorHead: string;
    subMajorHead: string;
    minorHead: string;
    subHead: string;
    detailHead: string;
    objectClass: string;
    budgetHead: string;
}


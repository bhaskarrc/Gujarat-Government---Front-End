export class AgDataList {
    agOfficeNameData: string;
    yearData: string;
    monthData: string;
    receiptInsuranceAmountData: number;
    expenditureInsuranceAmountData: number;
    receiptSavingAmountData: number;
    expenditureSavingAmountData: number;
}

export class DailyInputSheetList {
    district: string;
    office: string;
    majorHead: string;
    insuranceFund: string;
    savingFund: string;
    workflowStatus: string;
    status: string;

}

export class AisEmployeeScheduleEntry {
    empNo: string;
    name: string;
    ddoName: string;
    designation: string;
    description: string;
    majorHead: string;
    edpCode: string;
    insuranceFund: string;
    savindFund: string;
    total: string;
    chequeNo: string;
    chequeDate: Date;
    amt: string;
    subsDDNo: string;
    subsDDDate: Date;
    subsAmt: string;
}

export class AisEmployeeScheduleListing {
    refNo: string;
    month: string;
    year: string;
    aisCadre: string;
    insuranceFund: string;
    savindFund: string;
    total: string;
    chequeNo: string;
    chequeDate: Date;
    amt: string;
    subsDDNo: string;
    subsDDDate: Date;
    subsAmt: string;
    workflowStatus: string;
    status: string;
}

export class AcceptAccountFromTreasury {
    select: string;
    majorHead: string;
    accountType: string;
    noOfDocuments: string;
    amount: string;
    tcAmount: string;
    grossAmount: string;
}

export class AgDataListing {
    employeeNumber: string;
    employeeName: string;
    cadre: string;
    ddoOfficeName: string;
    monthOfDeduction: string;
    amountOfDeduction: string;
    dateOfSuspension: string;
}

export class ExpenditureSavingData {
    grp: string;
    insFnd: string;
    savFnd: string;
}

export class ExpenditureInsuranceData {
    grp: string;
    expEmp: string;
    retEmp: string;
}

export class ExpenditureOfSavingData {
    grp: string;
    savFnd: string;
}

export class DeathRetirementDate {
    group: string;
    death: string;
    retirement: string;
}

export class EmployeeData {
    employeeNumber: string;
    employeeName: string;
    phoneNo: number;
    designation: string;
    fromMonth: string;
    toMonth: string;
    insurancefundAmount: number;
    savingFundAmount: number;
}

export class GiChallanEntryAisListing {
    challanNo: string;
    challanDate: string;
    district: string;
    ddoName: string;
    treasuryOffice: string;
    employeeNumber: string;
    employeeName: string;
    headChargable: string;
    year: string;
    month: string;
    insuranceFund: string;
    savingFund: string;
}

export class GiChallanListing {
    district: string;
    treasuryOffice: string;
    ddoName: string;
    year: string;
    month: string;
    employeeNumber: string;
    employeeName: string;
    headChargable: string;
    insuranceFund: string;
    savingFund: string;
    challanNo: string;
    challanDate: string;
    total: string;
}

export class DescriptionData {
    description: string;
    accountCloseCode: string;
    case: number;
    tc: number;
}

export class SuspenseData {
    position: string;
    majorHead: string;
    edpCode: string;
    desc: string;
    ddoName: string;
    empNo: string;
    empName: string;
    design: string;
    tc: string;
    vcNo: string;
    vcDate: string;
    insFnd: string;
    savFnd: string;
    total: string;
}

export class GiDailyInputSheetAis {
    description: string;
    accountCloseCode: string;
    case: number;
    tc: number;
}

export class TreasuryOfficeName {
    subHead: string;
    openingBalance: number;
    receivedBalance: number;
    totalBalance: number;
    paidAmount: number;
    adjustment: number;
    closingBalance: number;
}

export class GiEmployeeLedger {
    year: string;
    month: string;
    amountOfDeduction: string;
    interestFundAmount: string;
    savingFundAmount: string;
    tcCash: string;
    voucherNoChallanNo: string;
    voucherChallanDate: string;
    total: string;
}

export class GiEmployeeLedgerAis {

    year1: string;
    month1: string;
    amountOfDeduction1: string;
    interestFundAmount1: string;
    savingFundAmount1: string;
    tcCash1: string;
    voucherChallanNo1: string;
    voucherChallanDate1: string;
    total1: string;
    ddoNo1: string;
    date1: string;
    rs1: string;
}

export class GiEmployeeLedgerAisListing {

    designation: string;
    officeName: string;
    monthOfDeduction: string;
    amountOfDeduction: string;
    majorHead: string;
    challanNo: string;
    challanDate: string;
    creaditHead: string;
    ddNo: string;
    date: string;
    amount: string;
}

export class GiEmployeeLedgerLising {

    year: string;
    month: string;
    group: string;
    amountOfDeduction: string;
    modeOfDeduction: string;
    challanNo: string;
    challanDate: string;
}

export class GroupDetails {

    groupChangeDate: Date;
    group: string;
    payScale: string;
}

export class GiEmployeeMaster {

    district: string;
    treasuryOffice: string;
    employeeNumber: string;
    employeeName: string;
    schemeJoinDate: Date;
    schemeJoinGroup: string;
    groupChangeDate: Date;
    currentGroup: string;
    isNominatedIas: string;
    continueInStateScheme: string;
}

export class GiEmployeeMasterListing {
    district: string;
    treasuryOffice: string;
    employeeNumber: string;
    employeeName: string;
    schemeJoinDate: Date;
    schemeJoinGroup: string;
    groupChangeDate: Date;
    currentGroup: string;
    isNominatedIas: string;
    continueInStateScheme: string;
    workflowStatus: string;
    status: string;
}

export class EmployeeSchedule {
    group: string;
    subscriptionToInsuranceFund: string;
    subscriptionToSavingFund: string;
    contributionTowardsInsuranceFund: string;
    contributionTowardsSavingFund: string;
    totalContribution: string;
}

export class EmployeeScheduleListing {

    employeeNo: string;
    employeeName: string;
    designation: string;
    group: string;
    subscriptionToInsuranceFund: string;
    subscriptionToSavingFund: string;
    contributionTowardsInsuranceFund: string;
    contributionTowardsSavingFund: string;
    totalContribution: string;
    subscription: string;
}

export class GiEnrollEmployeeAis {
    employeeNumber: string;
    employeeName: string;
    designation: string;
    class: string;
    district: string;
    officeName: string;
    group: string;
    groupInsuranceAmount: string;
    dateOfEnrollmentNo: Date;
    enrollmentNo: string;
    emailId: string;
}

export class GiEnrollEmployeeAisListing {
    employeeNumber: string;
    employeeName: string;
    designation: string;
    class: string;
    district: string;
    officeName: string;
    group: string;
    groupInsuranceAmount: string;
    dateOfEnrollmentNo: Date;
    enrollmentNo: string;
    emailId: string;
    workflowStatus: string;
    status: string;
}

export class GiExpenditureStatement {
    date: string;
    employeeNo: string;
    employeeName: string;
    ddoName: string;
    expiredInsuranceA: string;
    expiredInsuranceB: string;
    expiredInsuranceC: string;
    expiredInsuranceD: string;
    expiredSavingA: string;
    expiredSavingB: string;
    expiredSavingC: string;
    expiredSavingD: string;
    retrivedSavingA: string;
    retrivedSavingB: string;
    retrivedSavingC: string;
    retrivedSavingD: string;
    total: string;
}

export class InterestRate {
    month: string;
    openingBalance: string;
    interestAmount: string;
    savingFund: string;
    interest: string;
    interestRate: string;
    closingBalance: string;
}

export class InterestRateListing {

    financialYear: string;
    month: string;
    openingBalance: string;
    interestAmount: string;
    savingFundAmount: string;
    closingBalance: string;
    rateOfInterest: string;
    statement1: string;
    statement2: string;
    statement3: string;
    workflowStatus: string;
    status: string;
    interest: string;
}

export class PlusMinusStatement {
    headOfAccount: string;
    openingBalance: string;
    receivedAmount: string;
    total: string;
    payment: string;
    adjustment: string;
    closingBalance: string;
}

export class EmployeeDetailsData {
    empNo: string;
    empName: string;
    designation: string;
    ddoOffice: string;
    class: string;
    group: string;
    tcCash: string;
    voucherChallanNo: string;
    voucherChallanDate: string;
    insuranceFund: string;
    savingFund: string;
    totalDeduction: string;
}

export class ReceiptData {
    totalNumberOfEmployee: string;
    a: string;
    b: string;
    c: string;
    d: string;
}

export class ExpenditureData {
    totalNumberOfEmployee: string;
    group: string;
    insuranceFund: string;
    savingFund: string;
    total: string;
}

export class GiPlusMinusStatementListing {
    year: string;
    month: string;
    district: string;
    treasuryOffice: string;
    openingBalance: string;
    receivedAmount: string;
    totalBalance: string;
    paidAmount: string;
    adjustment: string;
    closingBalance: string;
    workflowStatus: string;
    status: string;
}

export class Statement {
    year: string;
    aprData: string;
    mayData: string;
    juneData: string;

}

export class GiResolutionMaster {
    resolutionDate: string;
    applicableDate: string;
    groupA: string;
    groupB: string;
    groupC: string;
    groupD: string;

}

export class SearchEmployee {
    employeeNumber: number;
    employeeName: string;
    district: string;
    treasuryOffice: string;
    class: string;
    schemeJoinDate: Date;
    group: string;
    groupChangeDate: Date;
    currentGroup: string;
    amount: string;
}

export class TreasuryOfficeReportData {
    date: string;
    vhNo: string;
    majorHead: string;
    name: string;
    type: string;
    city: string;
    amount: number;
}

export class GiSubscriptionRequestLetterListing {
    employeeNumber: string;
    employeeName: string;
    designation: string;
    officeName: string;
    pendingDeductionMonth: string;
    pendingDeductionAmount: string;
    emailID: string;
    ddNo: string;
    date: string;
    amount: string;
    status?: string;
}

export class GroupDetailsListing {
    group: string;
    fromDate: Date;
    endDate: Date;
    groupUnit: string;
    savingFund: string;
    insuranceFund: string;
    total: string;
}

export class FormElevenEntryListing {
    employeeNo: string;
    employeeName: string;
    schemeJoinDate: string;
    retiredResignationDate: string;
    deathDate: string;
    savingFund: string;
    insuranceFund: string;
    total: string;
}

export class FormElevenListing {
    district: string;
    employeeNo: string;
    employeeName: string;
    schemeJoinDate: string;
    retiredResignationDate: string;
    deathDate: string;
    savingFund: string;
    insuranceFund: string;
    total: string;
}

export class EmployeeDetails {
    description: string;
    headStructure: string;
    total: string;
}

export class Attachment {
    name: undefined;
    file: undefined;
    uploadedBy: string;
}

export class AcpRegisterReport {
    auditorName: string;
    noOfAuditors: string;
    toDistrict: string;
    fromDistrict: string;
    officeName: string;
    startDate: string;
    endDate: string;
    totalManDaysAssigned: string;
    remarks: string;
    attachment: string;
}

export class AdditionalMandaysRegister {
    district: string;
    auditYear: string;
    month: string;
    instituteType: string;
    instituteName: string;
    auditType: string;
    auditorName: string;
    auditStartDate: Date;
    sanctionedMandays: string;
    requestedAdditionalMandays: string;
    reason: string;
    status?: string;
}
export class AnnualAdministrativeReport {
    instituteType: string;
    instituteName: string;
    instIncome: string;
    auditYear: string;
    auditCompDate: string;
    instExp: string;
    total: string;
    marginMemo: string;
    halfMarginMemo: string;
    objectedAmt: string;
    recoveredAmt: string;
    para: string;
}

export class AuditFeesDetailsRegister {
    district: string;
    id: number;
    instituteType: string;
    instituteName: string;
    auditYear: string;
    recoverableAmountFee: number;
    actualReceivedAuditFee: number;
    auditFeeReceivedDate: Date;
    pendingRecovery?: number;
    remarks: string;
}

export class AuditFileReport {
    instituteType: string;
    instituteName: string;
    district: string;
    auditYear: string;
    issueDate: string;
    auditorName: string;
    financialYear: string;
}

export class EstablishmentDistrictOffice {
    district: string;
    officeName: string;
    employeeGroup: string;
    employeeName: string;
    category: string;
    employeeNumber: string;
    postDetail: string;
}

export class EstablishmentForCorporation {
    district: string;
    subDivision: string;
    officeName: string;
    employeeGroup: string;
    employeeName: string;
    category: string;
    employeeNumber: string;
    postDetail: string;
}
export class EstablishmentHq {
    officeName: string;
    employeeGroup: string;
    employeeName: string;
    category: string;
    employeeNumber: string;
    postDetail: string;
}

export class EstablishmentReportListing {
    district: string;
    subDivision: string;
    officeName: string;
    employeeGroup: string;
    employeeName: string;
    category: string;
}

export class EstablishmentReport {
    officeName: string;
    sanctionedPost: string;
    filledPost: string;
    vacantPost: string;
}

export class InstituteMasterListing {
    district: string;
    taluka: string;
    instituteCode: string;
    instituteName: string;
    instituteType: string;
    sanctionedMandays: number;
    additionalMandays: number;
    totalMandays: number;
    auditChargableOrNot: string;
    status: string;
}

export class MajorHeadMaster {
    departmentName: string;
    majorHead: string;
    majorHeadDescription: string;
    status: string;

}

export class PendingInstitute {
    financialYear: string;
    districtName: string;
    instituteName: string;
    instituteType: string;
    sanctionedManDays: number;
    additionalManDays: number;
    totalManDays: number;
}

export interface AuditParaRegister {
    district: string;
    instituteName: string;
    instituteType: string;
    auditYear: string;
    auditReportIssueDate: Date;
    paraNo: number;
    auditParaSubject: string;
    paraDescription: string;
    administrativeDepartment: string;
    majorHead: string;
    objectAmount: number;
    recoverableAmount: number;
    receivedAmount: number;
    pendingAmount: number;
    clearanceDate: Date;
    clearanceDetails: string;
    clearedBy: string;
    remarks: string;

}

export interface AuditParaRegisterListing {
    paraNo: string;
    auditParaSubject: string;
    paraDescription: string;
    administrativeDepartment: string;
    majorHead: string;
    objectAmount: number;
    recoverableAmount: number;
    receivedAmount: number;
    pendingAmount: number;
    clearanceDate: Date;
    clearanceDetails: string;
    clearedThrough: string;
    remarks: string;
    status: string;

}

export interface AuditParaDetailRegisterSvo {
    financialYear: string;
    district: string;
    taluka: string;
    instituteName: string;
    sanctionedMandays: number;
    auditStartDate: Date;
    auditEndDate: Date;
    auditReportIssueDate: Date;
    paraNo: string;
    paraDescription: string;
    objectAmount: number;
    recoverableAmount: number;
    receivedAmount: number;
    pendingAmount: number;
    clearanceDate: Date;
    clearanceDetails: string;
    status: string;
    remarks: string;
}

// District Audit planning
export interface DistrictAudit {
    auditYear: string;
    district: string;
    instituteType: string;
    instituteName: string;
    sanctionedManDays: number;
    auditStartDate: Date;
    auditEndDate: Date;
    workingDays: number;
    noOfAuditor: number;

}

export interface EstablishmentDetail {
    employeeType: string;
    noOfOfficers: number;
    workingDays: number;
    availableManDays: number;
}

export interface AuditPlanning {
    instituteType: string;
    instituteName: string;
    noOfUnit: number;
    sanctionedManDays: number;
}

export interface DistrictAuditPlanningListing {
    month: string;
    auditYear: string;
    instituteType: string;
    instituteName: string;
    villagePanchayatUnit: string;
    sanctionedMandays: number;
    auditStartDate: Date;
    auditEndDate: Date;
    workingDays: number;
    allocatedNoAuditor: number;
    status: string;
}

export interface VillagePanchayatAudit {
    month: string;
    auditYear: string;
    villagePanchayatUnit: number;
    sanctionedMandays: number;
    auditStartDate: string;
    auditEndDate: string;
    workingDays: number;
    allocatedNoAuditor: number;

}

export interface FinancialYearAuditPlanning {
    instituteType: string;
    auditUnit: number;
    proposedAuditUnit: number;
    suggestedAuditUnit: number;
}
export interface HodAuditReport {
    instituteType: string;
    auditReportSubmitToAssembly: string;
}

export interface AuditProcessRegister {
    district: string;
    instituteType: string;
    instituteName: string;
    auditYear: string;
    auditorName: string;
    auditStartDate: Date;
    auditEndDate: Date;
    discussionDate: string | Date;
    probableIssuingReportDate: string | Date;
    auditorSubmitDate: string | Date;
    returnToAuditorDate: string | Date;
    resubmissionByAuditorDate: string | Date;
    submissionToHqDate: string | Date;
    sanctionedDate: string | Date;
    typingSubmissionDate: string | Date;
    returnFromTypingDate: string | Date;
    reportIssueDate: string | Date;
    firstComplianceDate: string | Date;
    instituteReplyDate: string | Date;
    auditFeeReceived: string;
    instituteIncome: string;
    instituteExpense: string;
    auditReportCopy: string;
    remarks: string;
    status: string;
}

export interface AuditProgressRegisterSvo {
    financialYear: string;
    district: string;
    taluka: string;
    instituteName: string;
    auditType: string;
    intimationDate: Date;
    sanctionedMandays: number;
    auditStartDate: Date;
    auditEndDate: Date;
    auditReportIssueDate: Date;
    remarks: string;
}

export interface AuditSupervisionRegister {
    district: string;
    id: string;
    instituteType: string;
    instituteName: string;
    auditorName: string;
    auditYear: string;
    dateOfSupervision: Date;
    isIntimated: string;
    isAuditorAvailable: string;
    auditDescription: string;
    detailsIfNotIntimated: string;
}

export class ConsolidatedDiaryReport {
    monthYear: string;
    weekCompleteDate: string;
    weeklyLeave: string;
    place: string;
    instituteType: string;
    instituteName: string;
    timeOfAudit: string;
    approvedTimeForAudit: string;
    noOfAuditor: string;
    noOfDeputyAuditor: string;
    noOfSubAuditor: string;
    total: string;
}

export interface DisposalOfPendingAuditPara {
    id: string;
    district: string;
    instituteType: string;
    instituteName: string;
    auditYear: string;
    amount: string;
    treasuryVoucherNo: string;
    treasuryVoucherDate: Date;
    primaryReason: string;
    reason: string;
    remarks: string;
}

export class DistrictMahekamRegister {
    id: string;
    district: string;
    instituteName: string;
    instituteType: string;
    posName: string;
    perPos: string;
    contrPos: string;
    totPos: string;
    filledPos: string;
    vacantPos: string;
    vacantDate: string;
    vacPosReason: string;
    vacEmpName: string;
    retEmpName: string;
    appointDate: string;
    retDate: string;
    pensionDet: string;
    remarks: string;
}

export class DistrictOfficeImportantParaRegister {
    id: string;
    distName: string;
    positivePara: string;
    negativePara: string;
    officeRelated: string;
}

export interface DocumentRepository {
    grNo: string;
    date: string;
    subject: string;
    file: string;
}

export class FieldVisitRegister {
    id: string;
    district: string;
    instituteName: string;
    instituteType: string;
    auditYear: string;
    auditDate: string;
    sancManDays: string;
    auditName: string;
    desig: string;
    auditSal: string;
    visitFromDate: string;
    visitToDate: string;
    failReason: string;
    reportDate: string;
    auditPenAmt: string;
    recAmt: string;
    amtRecDate: string;
    remarks: string;
}

export interface GpfInterestEightThreeThreeSixRegister {
    id: string;
    instituteType: string;
    instituteName: string;
    openingBalanceOfTreasury: number;
    openingBalanceOfAe: number;
    reciptByTreasury: number;
    reciptByAe: number;
    receiptDateByAe: Date;
    paidAmountByTreasury: number;
    gpfAmount: number;
    interestRate: number;
    remarks: string;
    interestAmount: number;
    closingBalance: number;
}
export interface DistrictPanchayatCreator {
    financialYear: string;
    district: string;
    taluka: string;
    id: number;
    instituteType: string;
    instituteName: string;
    majorHead: string;
    totalOpeningBalance: number;
    totalGrantReceived: number;
    totalActualExpenditure: number;
    totalGrantRefund: number;
    totalClosingBalance: number;
    totalGrantSaved: number;
    totalOverExpenses: number;
}

export interface GrantAnnexureOneListing {
    financialYear: string;
    district: string;
    taluka: string;
    id: string;
    instituteType: string;
    instituteName: string;
    majorHead: string;
    totalOpeningBalance: number;
    totalGrantReceived: number;
    totalActualExpenditure: number;
    totalGrantRefund: number;
    totalClosingBalance: number;
    totalGrantSaved: number;
    totalOverExpenses: number;
    remarks: string;
    status: string;
}

export interface GrantAnnexureOneRegisterSearchCriteria {
    financialYear: string;
    district: string;
    taluka: string;
    id: string;
    instituteType: string;
    instituteName: string;
    majorHead: string;
    openingBalanceCapital: number;
    openingBalanceRevenue: number;
    totalOpeningBalance: number;
    grantReceivedCapital: number;
    grantReceivedRevenue: number;
    totalGrantReceived: number;
    expenseCapital: number;
    expenseRevenue: number;
    totalActualExpenditure: number;
    talukaCapital: number;
    talukaRevenue: number;
    totalTalukaTransfer: number;
    grantCapital: number;
    grantRevenue: number;
    totalGrantRefund: number;
    closingBalanceCapital: number;
    closingBalanceRevenue: number;
    totalClosingBalance: number;
    grantSavedCapital: number;
    grantSavedRevenue: number;
    totalGrantSaved: number;
    overExpensesCapital: number;
    overExpensesRevenue: number;
    totalOverExpenses: number;
    remarksCapital: string;
    remarksRevenue: string;
}

export interface InwardRegisterEntryList {

    letterType: string;
    inwardDate: string;
    inwardNo: string;
    branchName: string;
    letterReceivedFrom: string;
    letterNo: string;
    letterDate: string;
    status: string;
    branchWorksheetNo: string;
    receivedDateAtBranch: string;
    tableWorksheetNo: string;
    receivedDateAtTable: string;
    employeeName: string;
    remarks: string;
}

export interface InwardRegisterReportList {
    letterType: string;
    inwardDate: string;
    inwardNo: string;
    branchName: string;
    letterReceivedFrom: string;
    letterNo: string;
    letterDate: string;
    status: string;
    branchWorksheetNo: string;
    receivedDateAtBranch: string;
    tableWorksheetNo: string;
    receivedDateAtTable: string;
    employeeName: string;
    remarks: string;
}

export interface LrParaEntry {
    district: string;
    instituteName: string;
    instituteType: string;
    auditYear: string;
    auditReportIssueDate: Date;
    paraNo: string;
    auditParaSubject: string;
    paraDescription: string;
    administrativeDepartment: string;
    majorHead: string;
    clearedBy: string;
    remarks: string;

}

export interface LrParaListing {
    district: string;
    id: number;
    instituteName: string;
    instituteType: string;
    auditYear: string;
    paraNo: string;
    auditParaSubject: string;
    administrativeDepartment: string;
    majorHead: string;
    remarks: string;
    status: string;

}

export interface LrParaRegister {
    district: string;
    id: number;
    instituteName: string;
    instituteType: string;
    auditYear: string;
    paraNo: string;
    auditParaSubject: string;
    administrativeDepartment: string;
    majorHead: string;
    lrParaByDistrictCreator: number;
    lrParaByHQCreator: number;
    lrParaByHQVerifier: number;
    lrParaByHQApprover: number;
    finalPara: number;
    remarks: string;
}

export class LrParaVerificationRegister {
    id: string;
    district: string;
    instituteType: string;
    instituteName: string;
    auditYear: string;
    auditReportIssueDate: Date;
    paraNo: string;
    dateOfLetter: Date;
    isAllRecordProvided: string;
    dateOfInform: Date;
    dateOfReportRec: Date;
    dateOfReportSend: Date;
    isPendingMore: string;
    planingIfPending: string;
    isProvidedRecord: string;
    actionByAssistantExaminer: string;
    remarks: string;
    edit: boolean;
}

export class ModelParaRegister {
    id: string;
    instituteName: string;
    instituteType: string;
    auditYear: string;
    auditName: string;
    desig: string;
    reason: string;
}

export class MprForwardingLetterDetails {
    id: string;
    auditYear: string;
    instituteType: string;
    district: string;
    instituteName: string;
    fromAddress: string;
    forwardingLetterDate: Date;
    toAddress: string;
    forwardingLetterSubject: string;
    forwardingLetterBody: string;
    districtOfficerName: string;
    districtOfficerDesignation: string;
    districtOfficerPhoneNo: string;
    lfOfficeOfficerName: string;
    lfOfficeOfficerDesignation: string;
    lfOfficeOfficerDutyJoinDate: Date;
    lfOfficeOfficerPhoneNo: string;
    signatureDetails: string;
    edit: boolean;
}

export interface CircleWiseOnAuditDutyOfficerDetails {
    district: string;
    id: string;
    instituteType: string;
    instituteName: string;
    circleNo: string;
    employeeName: string;
    designation: string;
    isAcp: string;
    acpDetails: string;
    remarks: string;

}

export interface OfficeStaffWorkAllocationDetails {
    district: string;
    id: string;
    instituteType: string;
    instituteName: string;
    employeeName: string;
    designation: string;
    workDetails: string;
    remarks: string;

}

export interface DairyDetail {
    auditorName: string;
    date: string;
    days: string;
    activity: string;
    instituteType: string;
    instituteName: string;
    yearOfAudit: string;
    detailsofAudit: string;
    status: string;
}

export interface DairyCalculation {
    auditorProgress: string;
    instituteType: string;
    instituteName: string;
    auditYear: string;
    auditStartDate: string;
    auditEndDate: string;
    sanctionedMandays: number;
    additionalMandays: number;
    totalMandays: number;
    usedMandays: number;
    additionalMandays1: number;
    remarks: number;
    halfMarginIssued: number;
    answersReceived: number;
    receivedAmount: number;
    workingAuditorNumber: number;
    weeklyWorkingDaysNumber: number;
    actualWorkingDays: number;
    lostDaysWithReason: string;
    status: string;
}

export class OutOfControlAuditRegisterEntry {
    instituteType: string;
    instituteName: string;
    district: string;
    taluka: string;
    auditYear: string;
    units: string;
    manDays: string;
    reason: string;
    remarks: string;
}

export interface OutwardRegisterEntryList {
    letterType: string;
    outwardDate: string;
    outwardNo: string;
    inwardLetterNo: string;
    whomToSend: string;
    outwardMode: string;
    amt: string;
    remark: string;
}

export interface PendingAuditMasterForSvo {
    financialYear: string;
    district: string;
    taluka: string;
    instituteName: string;
    auditType: string;
    sanctionedMandays: string;
}

export class PendingCasesForRemovalAtHqRegister {
    id: string;
    instituteType: string;
    instituteName: string;
    outwardNo: string;
    outwardDate: Date | string;
    subject: string;
    replyFromHQ: string;
    remark: string;
    edit: boolean;
}

export interface PendingParaRegister {
    district: string;
    auditYear: string;
    instituteType: string;
    instituteName: string;
    paraNo: number;
    droppedPara: number;
    pendingPara: number;
}
export interface NoOfParaListing {
    paraNo: string;
    auditParaSubject: string;
    paraDescription: string;
    administrativeDepartment: string;
    majorHead: string;
    objectAmount: number;
    recoverableAmount: number;
    receivedAmount: number;
    pendingAmount: number;
    clearanceDate: Date;
    clearanceDetails: string;
    clearedThrough: string;
    remarks: string;
    status: string;

}
export interface NoOfDroppedParaListing {
    serialNo: string;
    paraNo: string;
    auditParaSubject: string;
    paraDescription: string;
    administrativeDepartment: string;
    majorHead: string;
    objectAmount: number;
    recoverableAmount: number;
    receivedAmount: number;
    pendingAmount: number;
    clearanceDate: Date;
    clearanceDetails: string;
    clearedThrough: string;
    remarks: string;
    status: string;

}

export interface PensionPreAuditCasesRegisterDetails {
    id: string;
    district: string;
    inwardNumber: string;
    inwardDate: Date;
    pensionerName: string;
    designation: string;
    pensionOfficeName: string;
    ppoNumber: string;
    retirementDate: Date;
    isApprovedOrQuery: string;
    dcrg: string;
    cvp: string;
    ae: string;
    outwardNo: string;
    outwardDate: string;
    remarks: string;
}

export interface GpfWiseDetail {
    dora: string;
    finalClaimAmt: string;
    amtInWords: string;
    approvedAmt: string;
    nominee: string;
    monthOfCalculationInterest: string;
}

export interface YearWiseGpfDetail {
    year: string;
    openingBalance: string;
    yearWiseDepositedAmt: string;
    interestRate: string;
    amtOfInterest: string;
    totalAmt: string;
    yearWIseWithdrawAmt: string;
    withdrawRate: string;
    closingBalance: string;
    finalAmountAfterAudit: string;
}

export interface PreAuditGpfListing {
    district: string;
    instituteType: string;
    instituteName: string;
    employeeNo: string;
    employeeName: string;
    designation: string;
    accNo: string;
    doj: string;
    dor: string;
    retirementType: string;
    status: string;
    finalClaimAmt?: string;
    approvedClaimAmt?: string;
}

export interface GeneralDetail {
    district: string;
    instituteType: string;
    instituteName: string;
    employeeNo: string;
    employeeName: string;
    designation: string;
    accNo: string;
    doj: string;
    dor: String;
    retirementType: string;
}
export interface GpfDetail {
    year: string;
    monthYear: string;
    gpfDeductionAmt: string;
    dod: string;
    withdrawAmt: string;
    withdrawDate: string;
    remarks: string;
}


export interface QuarterlyRemovalPendingPara {
    id: string;
    district: string;
    instituteType: string;
    instituteName: string;
    auditYear: string;
    dateOfNotesReceivedFromAg: string;
    totalNoOfPara: string;
    paraNo: string;
    paraSubject: string;
    reasonForNotClose: string;
    remarks: string;
}

export class RtiAppealRegister {
    appealNo: string;
    appealDate: Date;
    nameOfAppellantAddress: string;
    dateOfReceipt: Date;
    nameDesignationOfPio: string;
    decisionByFirst: string;
    whetherSecond: string;
    anyOtherInformation: string;
    edit: boolean;
}

export interface RtiRegisterEntryList {
    applicationNo: string;
    applicantNameAndAddress: string;
    applicationDate: string;
    nameAndAddressOfPio: string;
    dateOfReceiptByApio: string;
    transferDate: string;
    applicantCategory: string;
    briefDescriptionOfRequestForInformation: string;
    involvingThirdPartyInformationOrNot: string;
    amountForApplicationFeesPaid: string;
    chargesCollectedForFurnishingInformation: string;
    totalAmountCollected: string;
    informationFurnished: string;
    rejectionDate: string;
    underWhichSectionApplicationRejected: string;
    deemedRefusal: string;
    appealMadeAgainstDecision: string;
    applicationTransferred: string;
    remarks: string;
    status?: string;
}

export class RtiReportRegister {
    nameAddressPIO: string;
    nameAddressApplicant: string;
    categoryOfApplicantBPLOther: string;
    briefDescriptionOfRequestForInformation: string;
    dateOfReceiptOfApplication: string;
    informationFurnished: string;
    applicationTransferred: string;
    dateOfTransferApplication: string;
    dateOfRejection: string;
    underWhichSectionApplicationRejected: string;
    applicationPending: string;
    amountForApplication: string;
    chargesCollected: string;
    totalAmountCollected: string;
    anyOtherInformation: string;
}

export interface ScheduleFive {
    financialYear: string;
    district: string;
    majorHead: string;
    openingBalance: string;
    income: string;
    totalIncome: number;
    amountDeposited: number;
    closingBalance: string;
    remarks: string;
}

export interface ScheduleFiveListing {
    financialYear: string;
    district: string;
    majorHead: string;
    openingBalance: string;
    income: string;
    totalIncome: string;
    amountDeposited: string;
    closingBalance: string;
    remarks: string;
    status: string;
}

export interface ScheduleFiveReport {
    financialYear;
    district;
    majorHead;
    openingBalance;
    income;
    totalIncome;
    amountDeposited;
    closingBalance;
    remarks;
}

export interface ScheduleFour {
    district: string;
    financialYear: string;
    majorHead: string;
    officeName: string;
    openingBalance: number;
    loanReceived: number;
    refundedLoan: number;
    recoveryLoan: number;
    totalLoanIncome: number;
    total: number;
    districtPanchayatExpenditure: number;
    talukaRefund: number;
    refund: number;
    totalExpense: number;
    closingBalance: number;
    remarks: string;
    status: string;

}

export interface ScheduleFourLoanReceived {
    district: string;
    financialYear: string;
    majorHead: string;
    officeName: string;
    openingBalance: number;
    loanReceived: number;
    refundedLoan: number;
    recoveryLoan: number;
    totalLoanIncome: number;
    total: number;
    districtPanchayatExpenditure: number;
    talukaRefund: number;
    refund: number;
    totalExpense: number;
    closingBalance: number;
    remarks: string;
}

export interface ScheduleSix {
    financialYear: string;
    district: string;
    majorHead: string;
    paraNo: string;
    objectedAmount: string;
}

export interface ScheduleThree {
    district: string;
    financialYear: string;
    typesOfGrant: string;
    panchayatSectionOrderNo: string;
    legislativeGrant: string;
    receivedStatutaryGrant: string;
    remarks: string;
    status?: string;

}

export interface ScheduleTwo {
    district: string;
    financialYear: string;
    department: string;
    majorHead: string;
    recoverableAmount: number;
    receivedAmount: number;
    pendingAmount: number;
}

export interface ScheduleTwoPointOne {
    auditYear: string;
    district: string;
    recoveryYear: string;
    recoverableAmount: number;
    receivedAmount: number;
    pendingAmount: number;
}

export class SearchEmployee {
    employeeNumber: number;
    employeeName: string;
    designation: string;
    class: string;
    group: string;
    employeeType: string;
    panNumber: string;
    officeName: string;
}

export interface StampRegisterListing {
    date: string;
    openingBalance: string;
    amtOfReceivedTickets: string;
    totalAmtOfTickets: string;
    utilizationAmountOfTickets: string;
    closingBalance: string;
    remarks: string;
}

export interface StampRegisterReportListing {
    date: string;
    openingBalance: string;
    amtOfReceivedTickets: string;
    totalAmtOfTickets: string;
    utilizationAmountOfTickets: string;
    closingBalance: string;
    remarks: string;
    status: string;
}

export class WorkflowRegisterReport {
    instituteName: string;
    sanctionMandays: string;
    auditYear: string;
    additionalMandays: string;
    totalMondays: string;
    utilizedMondays: string;
    savedMondays: string;
    auditorName: string;
    auditStartDate: string;
    auditEndDate: string;
    reportSubmittedDate: string;
    reportIssueDate: string;
    para: string;
}

export class AuditParaRegisterDetailsListing {

    auditYear: string;
    instituteName: string;
    instituteType: string;
    district: string;
    taluka: string;
    auditReportIssueDate: Date;
}

export class CountWiseData {
    nameAddressPIO: string;
    totalApplicationsPendingEnd: string;
    totalApplicationsReceived: string;
    total: string;
    totalApplicationsDisposed: string;
    totalApplicationsPending: string;
    OutDisposedInformation: string;
    outDisposedDeemed: string;
    outDisposedrejected: string;
    amountOfTotalApplication: string;
    anyOtherInformation: string;
}

export class QuaterlyStatementOfRtiData {
    nameAddressPIO: string;
    totalApplicationsPendingEnd: string;
    totalApplicationsReceived: string;
    total: string;
    totalApplicationsFullyFurnished: string;
    totalApplicationsFullyTransferred: string;
    totalApplicationPartlyTransferred: string;
    totalApplicationFullyRejected: string;
    totalApplicationPartlyRejected: string;
    totalApplicationDisposed: string;
    ApplicationRejectedSection: string;
    totalApplicationPendingEndQuarter: string;
    totalAmountApplicationReceived: string;
    totalAmountChargesCollected: string;
    totalAmount: string;
}

export class QuarterlyStatementOfRtiAppealData {

    nameAddressAppellantAuthority: string;
    totalAppealPending: string;
    totalAppealsReceived: string;
    total: string;
    totalAppealsApprovedDuringQuarter: string;
    totalAppealsFullyRejected: string;
    totalAppealsPartlyRejected: string;
    totalAppealsDisposed: string;
    appealsRejected: string;
}

export class TalukaList {
    value: string;
    districtName: string;
    viewValue: string;
}

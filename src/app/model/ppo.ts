
export interface ListOfCheque {
    paymentType: string;
    partyName: string;
    address: string;
    accountNo: string;
    micrCode: string;
    chequeAmount: string;
}


export interface DppfTable {
    ppoNo: string;
    pensionerFName: string;
    pensionerLname: string;
    pensionerMname: string;
    caseType: string;
}

export interface PensionerDetails {
    ppoNo: string;
    pensionerName: string;
    accountNo: string;
    bankBranch: string;
}

export interface SeenTable {
    branchCode: string;
    ppoNo: string;
    AccountNo: string;
    seenDate: Date;
    wayOfSeen: string;
    seenFlag: string;
    name: string;
    namePhotoandSignature: string;
    aadhaar: string;
    panNo: string;
    mobNo: string;
    ledgerNo: string;
    pageNo: string;
    reEmployeement: string;
    reEmploymentFrom: string;
    reEmployeementTo: string;
    reMarriage: string;
    maritalCertificateDate: string;
    reMarriageDate: string;
}
export interface ListOfCheque {
    paymentType: string;
    partyName: string;
    address: string;
    accountNo: string;
    micrCode: string;
    chequeAmount: string;
}
export interface ReceiptSecondTableList {
    deductionA: string;
    deductionB: string;
    expenditure: string;
    amount: string;
}
export interface Expenditure {
    budgetCode: string;
    description: string;
    edpCode: string;
    amount: any;
}

export interface Expenditure {
    budgetCode: string;
    description: string;
    edpCode: string;
    amount: any;
}

export interface ListOfCheque {
    paymentType: string;
    partyName: string;
    address: string;
    accountNo: string;
    micrCode: string;
    chequeAmount: string;
}
export interface AuditCases {
    ppoNo: string;
    name: string;
    pensionCaseType: string;
    inwardDate: Date;
    commencementDate: Date;
    caseStatus: string;
    auditorName: string;
    ledgerNo: string;
    pageNo: string;
}
export interface ApproveRejectPensionBill {
    billRefNo: string;
    tokenNo: string;
    majorHead: string;
    ppoNo: string;
    partyName: string;
    billType: string;
    netAmount: string;
    billDate: string;
    billCategory: string;
    auditorName: string;
    status: string;
}

export interface RecoveryDetails {
    recoveryThrough: string;
    chequeChallanNo: string;
    chequeChallanDate: string;
    EDPCode: string;
    majorHead: string;
    subMajorHead: string;
    minorHead: string;
    subHead: string;
    deductType: string;
    amount: string;
}

export interface PpoAutoFill {
    ppoNo: string;
    fName: string;
    mName: string;
    lName: string;
    bankAndBranch: string;
    accountNo: string;
    totalAmtToBeRecovered: string;
    amtRecovered: string;
    balAmtToBeRecovered: string;
}

export interface PpnoListInterface {
    ppoNo: string;
}

export interface FormField {
    formCtrlName: string;
    placeholder: string;
}

export interface PensionBasicDetail {
    revisedType: string;
    oldBasic: string;
    effectiveFromOld: string;
    effectiveToOld: string;
    newBasic: string;
    effectiveFromNew: string;
    effectiveToNew: string;
    daDp: string;
    maOld: string;
    maNew: string;
    irOld: string;
    irNew: string;
}

export interface CommonStructureForRevisedArrear {
    old: string;
    effectiveFromOld: string;
    effectiveToOld: string;
    new: string;
    effectiveFromNew: string;
    effectiveToNew: string;
}

export interface ReemployedDetails {
    effectiveFromOld: string;
    effectiveToOld: string;
    effectiveFromNew: string;
    effectiveToNew: string;
}

export interface CalculationTable {
    daPercentageOld: string;
    dcrgAmountOld: string;
    daPercentageNew: string;
    dcrgAmountNew: string;
    total: string;
}

export interface CalculationTableOther {
    oldAmount: string;
    revisedAmount: string;
    total: string;
}

export interface DeductionTable {
    recoveryType: string;
    edpCode: string;
    majorHead: string;
    submajorHead: string;
    minorHead: string;
    subHead: string;
    deductionType: string;
    amount: string;
}

export interface AuditMRTable {
    inwardNo: string;
    refNo: string;
    inwardDate: Date;
    ppoNo: string;
    pensionerName: string;
    reimbursementAmount: string;
    auditorName: string;
    grantedAmount: string;
}
export interface AuditMRRequestTable {
    inwardNo: string;
    inwardDate: Date;
    ppoNo: string;
    pensionerName: string;
    reimbursementAmount: string;
    auditorName: string;
    grantedAmount: string;
}

export class AuditPension {
    tokenNo: string;
    billControlNo: string;
    majorHead: string;
    ppoNo: string;
    partyName: string;
    billType: string;
    netAmount: string;
    billDate: string;
    auditorName: string;
    status: string;
}

export interface MedDetailTable {
    patientName: string;
    relation: string;
    age: string;
    hospitalName: string;
    treatmentFrom: Date;
    treatmentTo: Date;
    disease: string;
    headHearingDevice: string;
    kneeReplacement: string;
    reimbursementAmt: string;
    indoorPatient: string;
    deductionOnAmt: string;
    grantedAmt: string;
}

export interface ObjectionTable {
    objectionCode: string;
    objectionDesc: string;
}

export interface RevisedArrearTable {
    revisedType: string;
    oldBasic: string;
    effectiveFromOld: string;
    effectiveToOld: string;
    newBasic: string;
    effectiveFromNew: string;
    effectiveToNew: string;
    daDp: string;
    maOld: string;
    maNew: string;
    irOld: string;
    irNew: string;
}

export interface RevisionAuthTable {
    ppoNo: string;
    fName: string;
    mName: string;
    lName: string;
    dateFromRevision: Date;
    accNo: string;
    auditorName: string;
}

export interface EmployeeAutoFillTable {
    employeeNumber: string;
    employeeName: string;
    designation: string;
    class: string;
    panNo: string;
    officeName: string;
}

export interface SavedSupplementaryRequestTable {
    ppoNo: string;
    partyName: string;
    billType: string;
    grossAmount: string;
    recoveryAmount: string;
    netAmount: string;
}

export interface DistributePensionCaseTable {
    ppoNo: string;
    scheme: string;
    bankBranchCode: string;
    bank: string;
    branch: string;
    accountNo: string;
}

export class RangeAllocation {
    counterName: string;
    startRange: number;
    endRange: number;
    lastToken: number;
    action: number | string;
}

export class RangeAllocationnew {

    newCounterName: string;
    newStartRange: number;
    newEndRange: number;
    newLastToken: number;
    newAction: number | string;
}

export class ApprovedFpCases {
    ppoNo: string;
    name: string;
    caseType: string;
    inwardDate: string;
    commenecementDate: string;
}

export class ApprovedRejectedMRRequests {
    auditorName: string;
    grantedAmount: string;
    inwardDate: string;
    ppoNo: string;
    inwardNo: string;
    namePensioner: string;
    refNo: string;
    reimbursementAmount: string;
    requestStatus: string;
}

export class BankList {
    value: number;
    viewValue: string;
    completed: boolean;
}

export class SavedPension {
    ppoNo: string;
    name: string;
    pensionCaseType: string;
    inwardDate: string;
    commencementDate: string;
}

export class DaDifference {
    ppoNo: string;
    name: string;
    commencementDate: string;
    bank: string;
    paidAmount: string;
    status: string;
}

export class DistributeCase {
    ppoNo: string;
    name: string;
    schemeType: string;
    branchCode: string;
    bank: string;
    branch: string;
    accountNo: string;
    auditor: string;
}

export class DistributePension {
    startDate: any;
    endDate: Date;
    headCode: string;
    amount: string;
}


export class Deduction {
    decuctionA: string;
    decuctionB: string;
    expenditure: string;
    recovery: string;
}
export class GenerateLTA {
    chequeType: string;
    partyName: string;
    accountNo: number;
    ifscCode: string;
    chequeAmount: number;
}

export class GrievanceData {
    registrationNo: string;
    ppoNo: string;
    pensionerName: string;
    mobile: string;
    reminder: string;
    feedback: string;
    status: string;
    remarks: string;
}

export class GrievenceData {
    registrationNo: string;
    pensionerName: string;
    dateOfReceipt: string;
    officerName: string;
    emailID: string;
    currentStatus: string;
    remarks: string;
}

export class InwardMrData {
    inwardNo: string;
    reimbursementAmount: string;
    grantedAmount: string;
    inwardDate: string;
    status: string;
}

export class InwardPensionBill {
    billRefNo: string;
    tokenNo: string;
    majorHead: string;
    ppoNO: string;
    partyName: string;
    billType: string;
    netAmount: string;
    billdate: string;
    authorName: string;
}

export class PensionerSeen {
    pramanId: string;
    date: string;
    name: string;
    seenDate: string;
    ppoNo: string;
    seenFlag: string;
    accountNo: string;
    branchCode: string;
    auditorName: string;
    remarks: string;
    reEmployeementStatus: string;
    reMerit: string;
}


export class PensionerTransferData {
    ppoNo: string;
    name: string;
    accountNo: string;
    state: string;
    oldTreasury: string;
}

export class PensionerDetail {
    refNo: string;
    refDate: string;
    ppoNo: string;
    name: string;
    accNo: string;
    retirementDate: string;
}
export class MedicalAllowance {
    startDate: Date;
    endDate: Date;
    headCode: string;
    amount: string;
    enterBy: string;
}

export class Reimbursement {
    permisibleAmt: string;
    deductionAmt: string;
    grantedAmt: string;
}

export class MonthlyPension {
    chequeType: string;
    partyName: string;
    accountNo: number;
    ifscCode: string;
    chequeAmount: number;
}

export class MonthlyPensionDetails {
    headCode: string;
    ppoNo: string;
    nameOfPensioner: string;
    acNo: string;
    allocationBefore01_01_1956: string;
    allocationAfter01_01_1956: string;
    allocationAfter01_01_1960: string;
    basicPanesion: string;
    dpAmount: string;
    adpAmount: string;
    tiAmount: string;
    maAmount: string;
    cvpMonthly: string;
    tiArears: string;
    otherArear: string;
    itCut: string;
    specialCut: string;
    otherBenefits: string;
    reliefBill: string;
    recoveryAmount: string;
    pensionCut: string;
    personalPension: string;
    irAmount: string;
    moCommission: string;
    netAmount: string;
}

export class HeadCode {
    headcode: string;
    description: string;
    grossAmount: string;
    deductionA: string;
    deducitonB: string;
    netAmount: string;
}

export interface Expenditure {
    budgetCode: string;
    description: string;
    edpCode: string;
    amount: any;
}

export class PensionCaseBankTransfer {
    ppoNo: string;
    name: string;
    accountNo: string;
}

export class ArriarData {
    amount: string;
    fromMonth: string;
    toYear: string;
    remarks: string;
}
export class RevisionData {
    revisionDate: string;
    pension: string;
    cvp: string;
    cvpMonthly: string;
    fpDate: string;
    fp: string;
    fpTwoDate: string;
    fpTwo: string;
    dcrg: string;
    remarks: string;
}
export class CvpData {
    orderNo: string;
    cvpAmount: string;
    cvpPaidDate: string;
    effectFromDate: string;
    restorationDate: string;
    paidMode: string;
    restored: string;
    basic: string;
    cvpMonthlyAmt: string;
}
export class DcrgData {
    orderNo: string;
    dcrgAmount: string;
    dcrgPaidDate: string;
    withheldAmount: string;
    da: string;
    paidMode: string;
}
export class OtherCut {
    fromYear: string;
    fromMonth: string;
    toYear: string;
    toManth: string;
    amount: string;
    remarks: string;
}

export class WithheldAmt {
    totalDcrg: string;
    withheldDcrg: string;
    dcrgAmtToBePaid: string;
    paymentMode: string;
}

export class Family {
    name: string;
    relation: string;
    percentage: string;
    dateBirth: string;
    minor: boolean;
    married: boolean;
    marrieDadte: string;
    salary: number;
    physicallyHandi: string;
    gardinName: string;
    deathDate: string;
    accountNo: string;
    pan: string;
    ifscCode: string;
    adharCard: string;
    mobileNo: string;
}

export class ReceivePension {
    ppoNo: string;
    pensionerName: string;
    oldTreasury: string;
    branch: string;
    bank: string;
    bankBranch: string;
    accountNo: string;
}

export class RecoveryDetail {
    ppoNo: string;
    pensionerName: string;
    dateOfRetirement: string;
    deathDate: string;
    recoveryAmount: string;
    deathDateOfFiled: string;
}

export class Calculation {
    totalArrearAmt: string;
    total: string;
}

export class SavedSupplementary {
    ppoNo: string;
    partyName: string;
    billType: string;
    paymentMode: string;
    totalDifferenceAmount: string;
    grossAmount: string;
    deductionAmount: string;
    netAmount: string;
    status: string;
}

export class Update {
    duration: string;
    fromMonth: string;
    fromYear: string;
    toMonth: string;
    toYear: string;
    amount: string;
}

export class HeaderJson {
    label: string;
    value: string;
}

export class SavedPensionData {
    ppoNo: string;
    name: string;
    pensionCaseType: string;
    inwardDate: string;
    commencementDate: string;
}
export interface AuditCasesTbl {
    ppoNo: string;
    name: string;
    pensionCaseType: string;
    inwardDate: Date;
    commencementDate: Date;
    caseStatus: string;
    auditorName: string;
    approvalAuthority: string;
    ledgerNo: string;
    pageNo: string;
}

export class Grievance {
    reminderNo: string;
    remarks: string;
}

export class UpdateComponentListing {
    refNo: string;
    refdate: string;
    ppoNo: string;
    pensionerName: string;
    effectiveDate: string;
    payComponent: string;

}

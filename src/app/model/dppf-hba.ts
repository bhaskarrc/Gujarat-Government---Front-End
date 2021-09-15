// accept-account-screen
export interface AcceptAccountInterface {
    select: string;
    majorHead: string;
    creditDebit: string;
    noOfDocuments: string;
    amount: string;
    tcAmount: string;
    grossAmount: string;
}

export interface AcceptAccountHeadData {
    select: string;
    majorHead: string;
    creditDebit: string;
    noOfDocuments: string;
    amount: string;
    tcAmount: string;
    grossAmount: string;
}

// account-details
export interface AccountDetailsWithdrawlDetails {
    amount: string;
    date: string;
    district: string;
    cardexNo: string;
    noOfRecoveryInstallments: string;
    recoveryInstallmentAmount: string;
    Reason: string;
}
export interface AccountDetailsLoanDetails {
    month: string;
    year: string;
    loanSanctionAmount: string;
    creditDebit: string;
    noOfRecoveryInstallments: string;
    recoveryInstallmentAmount: string;
    Reason: string;
}

export interface AccountDetailsInstallmentData {
    mileStone: string;
    installment: string;
}


// account-details-listing
export class AccountDetailsListingInwardScreen {
    srno: string;
    inwardNo: string;
    inwardDate: string;
    name: string;
    employeeClass: string;
    employeeType: string;
    dob: string;
    doj: string;
    status: string;
    lyingWith: string;
}

export interface AccountDetailsListingHeadData {
    srno: string;
    inwardNo: string;
    inwardDate: string;
    name: string;
    employeeClass: string;
    employeeType: string;
    dob: string;
    doj: string;
    status: string;
    lyingWith: string;
}
// AccountEntryWise
export interface AccountEntryWiseChallanDetails {
    hbaMca: string;
    name: string;
    installmentNo: string;
    forMonth: string;
    forYear: string;
    type: string;
    remarks: string;
    principlerecoveryAmount: string;
    remaningPrincipleAmount: string;
    interstrecoveryAmount: string;
    remaningInterstAmount: string;
    upNo: string;
}

// Account-transfer-hba
export interface AccountTransferHbaAccountWiseDetails {
    inwardNo: string;
    head: string;
    voucher: string;
    principleRecoveryAmount: string;
    interestRecoveryAmount: string;
}
export interface TransferHistory {
    inwardNo: string;
    head: string;
    voucher: string;
    transferredAmount: string;
    accountHolderName: string;
    toAccountNo: string;
}

// Account-transfer-hba-listing
export interface AccountTransferHbaListingInwardScreen {
    srno: string;
    inwardNo: string;
    name: string;
    month: string;
    year: string;
    status: string;
    creditDebit: string;
    hbaNo: string;
}

export interface AccountTransferHbaHeadData {
    srno: string;
    inwardNo: string;
    inwardDate: string;
    month: string;
    year: string;
    agcaAgac: string;
    creditDebit: string;
    hbaNo: string;
}

// AccountWiseHbaListingComponent

export class AccountWiseHbaListingVoucherScreen {
    srno: string;
    inwardNo: string;
    dateInward: string;
    treasuryPao: string;
    year: string;
    month: string;
    paymentType: string;
    inwardType: string;
}

export interface AccountWiseHbaListingHeadData {
    srno: string;
    inwardNo: string;
    dateInward: string;
    treasuryPao: string;
    year: string;
    month: string;
    paymentType: string;
}

// AdjustmentAccount
export interface AdjustmentAccount {
    upNo: string;
    correction: string;
    hbaMca: string;
    name: string;
    principlerecoveryAmount: string;
    interstrecoveryAmount: string;
    forMonth: string;
    forYear: string;
    remarks: string;
}
export interface AdjustmentAccountViewUpDetails {
    forYear: string;
    forMonth: string;
    creditDebit: string;
    head: string;
    voucherNo: string;
    upNo: string;
    type: string;
    hbaMca: string;
    name: string;
    shortName: string;
    amount: string;
    clearedAmount: string;
    remarks: string;
}
// AdjustmentAccountListing
export class AccountAdjustmentList {
    srno: string;
    hbaNo: string;
    district: string;
    month: string;
    year: string;
    treasuryPao: string;
    listingAmount: string;

}

export interface AccountAdjustmentListHeadData {
    srno: string;
    gpfNo: string;
    district: string;
    month: string;
    year: string;
    treasuryPao: string;
    listingAmount: string;
}

// AgcaDetailsHba

export interface AgcaDetailsHbaTreasuryDetails {
    code: string;
    trasury: string;
    agcaAamount: string;
    agacAamount: string;
    remarks: string;
}

// AgcaDetailsHbaListing

export interface AgcaDetailsHbaListingListingInwardScreen {
    srno: string;
    inwardNo: string;
    inwardDate: string;
    month: string;
    year: string;
    agcaAgac: string;
    creditDebit: string;
    hbaMca: string;
}

// CashBookEntry

export interface CashBookEntryChequesRecieved {
    hbaMca: string;
    name: string;
    recoveryType: string;
    interstrecoveryAmount: string;
    forMonth: string;
    forYear: string;
    installNo: string;
}

// Cheques Recieved Listing
export interface ChequesRecievedListing {
    inwardNo: string;
    inwardDate: string;
    chequeNo: string;
    chequeAmount: string;
    ddo: string;
    challanNo: string;
    clearanceDate: string;
    challanDate: string;
    remarks: string;
    action: string;
}

// DemandForNdc
export interface DemandForNdcStatus {
    statusOf: string;
    asPerDepartment: string;
    asPerDppf: string;
    missingPlusMinus: string;
    remarks: string;
    difference: string;
}

// InterestDialog

export interface InterestDialog {
    month: string;
    year: string;
    emiAmount: string;
    loan: string;
    type: string;
    status: string;
    voucherNo: string;
    penaltyInterest: string;
    additionalInterest: string;
    recoveredDate: Date | String;
    isStatus: boolean;
}
// CurrentBalanceDialogComponent
export interface CurrentBalanceDialog {
    year: string;
    apr: string;
    may: string;
    june: string;
    july: string;
    aug: string;
    sep: string;
    oct: string;
    nov: string;
    dec: string;
    jan: string;
    feb: string;
    mar: string;
}

// EmployeeDialog
export interface EmployeeDialog {
    employeeNumber: string;
    employeeName: string;
    designation: string;
    class: string;
    panNo: string;
    officeName: string;
}

// FieldCase

export interface FieldCase {
    position: string;
    inwardNo: string;
    inwardDate: string;
    inwardType: string;
    hbaMcaAccount: string;
    name: string;
    status: string;
    from: string;
    nothing: string;
}

// FreezeUnfreezeScreen

export class FreezeUnfreezeScreen {
    srno: string;
    requestNo: string;
    scheduleNo: string;
    district: string;
    year: string;
    month: string;
    employeeClass: string;
    lockedUnlocked: string;
}

// HbaDialog
export class HbaDialog {
    statusName: string;
    asPerDepartment: string;
    asPerDppf: string;
    missingPlusMinus: string;
    remarks: string;
    difference: string;
}

// HbaMcaNoDialogComponent
export class HbaMcaNoDialog {
    hbaMcaAccNo: string;
    fName: string;
    mName: string;
    lName: string;
    sName: string;
    gpfNo: string;
    majorHead: string;
    hbaMca: string;
    district: string;
}

// InterestConformationCaseListing
export class InterestConformationCaseListing {
    employeeNo: string;
    hbaNo: string;
    name: string;
    districtName: string;
    ddo: string;
    cardex: string;
    interestAmount: string;
    officeName: string;
    status: string;
    workFlowStatus: string;
}

// InterestNdcDetailsHba
export class InterestNdcDetailsHba {
    hbaMca: string;
    name: string;
    interest: string;
    accountCloseDate: string;
}

// attachment
export class Attachment {
    attachmentType: string;
    fileName: string;
    browse: string;
    uploadedFileName: string;
    uploadedBy: string;
}

//  CardexNoDialog
export class CardexNoDialog {
    ddoNo: string;
    cardexNo: string;
    ddoName: string;
}

// InwardDetailsListing
export class InwardDetailsListing {
    srno: string;
    inwardNo: string;
    dateInward: string;
    treasuryPao: string;
    empNo: string;
    empName: string;
    year: string;
    month: string;
    paymentType: string;
    inwardType: string;
    district: string;
}

// Outward Details & TopScheduleEntryForm

export class HeadAmount {
    head: string;
    amount: string;
}

// Outward Cases
export class OutwardCasesSavedCasesInterface {
    inwardNO: string;
    inwardDate: string;
    inwardType: string;
    hbamcaNo: string;
    name: string;
    outwardNo: string;
    outwardDate: string;
    status: string;
    workflowStatus: string;
}


export class OutwardCasesAccountGenerationDialog {
    inwardNo: string;
    inwardDate: string;
    typeOfInward: string;
    district: string;
    treasuryPao: string;
    year: string;
    month: string;
}

// NdcRequestListing
export class NdcRequestListing {
    accNo: string;
    name: string;
    empNo: string;
    empClass: string;
    doj: string;
    loanAmt: string;
    district: string;
    status: string;
    workFlowStatus: string;
}

// OutwardDetailsList
export class OutwardDetailsList {
    srno: string;
    inwardNo: string;
    inwardDate: string;
    letterNo: string;
    letterDate: string;
    deliveryMode: string;
    outwardTo: string;
    state: string;
}

// RefundGenerationHba
export class RefundGenerationHba {
    amountDesc: string;
    actual: string;
    recoverd: string;
    refund: string;
}

// SavedCases
export class SaveCases {
    position: string;
    inwardNo: string;
    empNo: string;
    inwardDate: string;
    inwardType: string;
    hbaMcaAccount: string;
    name: string;
    status: string;
    wfStatus: string;
    from: string;
    nothing: string;
}

// SavedCasesDdoSide
export class SavedCasesDdoSide {
    month: string;
    year: string;
    loanSanctionAmount: string;
    creditDebit: string;
    noOfRecoveryInstallments: string;
    recoveryInstallmentAmount: string;
    Reason: string;
}
export class SavedCasesDdoSideInstallment {
    mileStone: string;
    installment: string;
}

// SavedprocessListing
export class SavedprocessListing {
    employeId: string;
    name: string;
    hbaMcaNo: string;
    districtName: string;
    ddo: string;
    cardex: string;
    loanFor: string;
    loanAmount: string;
    status: string;
    workFlowStatus: string;
}

// ScheduleEntryHba
export class ScheduleEntryHba {
    hbaMca: string;
    name: string;
    principlerecoveryAmount: string;
    interstrecoveryAmount: string;
    installmentNo: string;
    forMonth: string;
    forYear: string;
    remarks: string;
}

// ScheduleEntryHba
export class ScheduleEntryHbaListing {
    hbaMca: string;
    date: string;
    scheduleNo: string;
    district: string;
    year: string;
    month: string;
    majorHead: string;
    majorHeadAmount: string;
    head: string;
    headAmount: string;
}

// SentCase
export class SentCase {
    position: string;
    inwardNo: string;
    inwardDate: string;
    inwardType: string;
    hbaMcaAccount: string;
    name: string;
    status: string;
    from: string;
    nothing: string;
}

// TopScheduleListing
export class TopScheduleListingVoucherScreen {
    srno: string;
    inwardNo: string;
    dateInward: string;
    treasuryPao: string;
    year: string;
    month: string;
    paymentType: string;
    inwardType: string;
}


// Voucher Entry
export class VoucherDetails {
    voucherNo: string;
    cardexNo: string;
    ddo: string;
    amount: string;
}

export class ChallanDetails {
    voucherNo: string;
    challanNo: string;
    challanAmount: string;
    remainingAmount: string;
    amount: string;
}

// InwardDetailsDialog

export class InwardDetailsDialog {
    ddoNo: string;
    cardexNo: string;
    ddoName: string;
}

// Voucher entry lsiting

export class VoucherScreen {
    srno: string;
    inwardNo: string;
    dateInward: string;
    treasuryPao: string;
    year: string;
    month: string;
    paymentType: string;
    inwardType: string;
}

// WaiveOfferDetailsHbaDetails
export class WaiveOfferDetailsHbaDetails {
    hbaMcaNo: string;
    name: string;
    deathDate: string;
    gpfNo: string;
    deathDetails: string;
    remarks: string;
}

// FreezeUnfreezScheduleHba
export class FreezeUnfreezScheduleHba {
    inwardNo: string;
    inwardDate: string;
    treasuryName: string;
    scheduleAmount: string;
    accountWiseEntryAmount: string;
    difference: string;
    lockedUnlocked: string;
}
export class ScheduleNo {
    scheduleNo: string;
    year: string;
    month: string;
    head: string;
}


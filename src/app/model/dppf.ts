export class FamilyDetails {
    name: string;
    relation: string;
    married: string;
    dateOfBirth: Date;
    age: string;
    majorMinor: string;
    disability: string;
    disabilityType: string;
    gaurdianName: string;
    percentOfPf: string;
    isNominee: string;
    percentOfNominee: string;
}

export class ServiceBreakDetail {
    serviceBreakType: string;
    breakFromDate: Date;
    breakToDate: Date;
    breakofParticularPeriod: string;
}

export class ServiceOtherDetail {
    checkList: string;
    status: string;
}

export class AnnualIncrement {
    incrementDate: Date;
    incrementAmount: string;
    basic: string;
    gradePay: string;
    payType: string;
}

export class PensionDetails {
    pensionFromDate: Date;
    pensionToDate: Date;
    pensionNoOfMonths: string;
    pensionNoOfDays: string;
    basic: string;
    daAmount: string;
    npaAmount: string;
    gradePay: string;
    total: string;
}

export class RecoveryDetail {
    recoveryType: string;
    accountNumber: string;
    majorHead: string;
    amount: string;
    recoveryFrom: string;
    amountOfRecovery: string;
}

export class PensionCut {
    cutType: string;
    amountToBeCut: string;
    numberOfYears: string;
    numberOfMonths: string;
    orderNumber: string;
    orderDate: Date;
}


export interface SavedCases {
    inwardNumber: string;
    inwardDate: string;
    inwardType: string;
    ppoNoScNo: string;
    name: string;
    retirementDate: string;
    pensionType: string;
    documentCount: string;
    revisionNumber: string;
    branchName: string;
    status: string;
    workflow: string;
    from: string;
    branchInwardDate: string;
    remarks: string;
}

export interface HeadData {
    fundType: string;
    voted: string;
    stateCss: string;
    bSubHeadSt: string;
    subHeadDes: string;
    expenditure: string;
    itemName: string;
    schemeNo: string;
}

export interface InwardCase {
    frmDate: string;
    toDate: string;
    serPlace: string;
    serType: string;
    recoveryIf: string;
}


export interface FamilyMember {
    memberName: string;
    dateOfBirth: Date;
    relation: string;
    remarks: string;
}


export class ListingPension {
    inwardNo: string;
    inwardDate: string;
    inwardType: string;
    name: string;
    letterNo: number;
    letterDate: string;
    receivedFrom: string;
    branch: string;
    status: string;
    wfStatus: string;
}

export class ListingPension2 {
    inwardNo: string;
    inwardDate: string;
    inwardType: string;
    name: string;
    letterNo: number;
    letterDate: string;
    receivedFrom: string;
    branch: string;
}

export interface RecievedCasesJrClerk {
    checkbox: boolean;
    inwardNo: string;
    inwardDate: string;
    inwType: string;
    ppoNo_scNo: string;
    employeeID: number;
    name: string;
    retDate: string;
    forwardTo: string[];
    pnsnType: string;
    docCount: number;
    revNo: number;
    branchName: string;
    status: string;
    from: string;
    branchInwardDate: string;
    noting: string;
}

export interface OutwardCases {
    checkbox: boolean;
    inwardNo: string;
    inwardDate: string;
    inwType: string;
    ppoNo_scNo: string;
    employeeID: number;
    name: string;
    retDate: string;
    pnsnType: string;
    docCount: number;
    revNo: number;
    branchName: string;
    status: string;
    workflow: string;
    from: string;

}

export interface OutwardedCases {

    outwardNo: string;
    outwardDate: string;
    inwardNo: string;
    inwardDate: string;
    inwType: string;
    ppoNo_scNo: string;
    employeeID: number;
    name: string;
    retDate: string;
    pnsnType: string;
    docCount: number;
    revNo: number;
    branchName: string;

}

export interface RecievedOtherStatePensionCase {
    inwardNumber: string;
    inwardDate: string;
    inwardType: string;
    employeeId: string;
    ppoNoScNo: string;
    name: string;
    retirementDate: string;
    pensionType: string;
    docCount: string;
    revNo: string;
    branchName: string;
    status: string;
    from: string;
    branchInwardDate: string;
    noting: string;
    remarks: string;
}
export interface ReceivedOnlinePensioncase {
    checkbox: boolean;
    referenceNo: string;
    referenceDate: string;
    inwardNo: number;
    inwardDate: string;
    inwType: string;
    ppoNo_scNo: string;
    employeeID: number;
    name: string;
    retDate: string;
    pnsnType: string;
    docCount: number;
    revNo: number;
    branchName: string;
    status: string;
    workflow: string;
    from: string;
    branchInwardDate: string;
}

export interface ReceivedOtherStatePension {
    inwardNumber: string;
    inwardDate: string;
    inwardType: string;
    ppoNoScNo: string;
    name: string;
    retirementDate: string;
    pensionType: string;
    status: string;
    remarks: string;
}

export interface SentCases {
    inwardNo: string;
    inwardDate: string;
    inwType: string;
    ppoNo_scNo: string;
    employeeID: number;
    name: string;
    retDate: string;
    pnsnType: string;
    docCount: number;
    revNo: number;
    branchName: string;
    to: string;
    status: string;

}


export interface SentPensionCase {

    inwardNo: string;
    inwardDate: string;
    inwType: string;
    ppoNo_scNo: string;
    employeeID: number;
    name: string;
    retDate: string;
    forwardTo: string[];
    pnsnType: string;
    docCount: number;
    revNo: number;
    branchName: string;
    status: string;
    workflow: string;
    from: string;
    branchInwardDate: string;
    noting: string;
}

export interface SavedCase {
    radioStatus: Boolean;
    inwardNumber: string;
    inwardDate: string;
    ppoNoScNo: string;
    status: string;
    workflow: string;
    name: string;
    retirementDate: string;
}


export interface PensionToFromDate {
    fromDate: Date;
    toDate: Date;
    period: string;
}
export interface FamilyDetail {
    isMarried: string;
    memberName: string;
    dateOfBirth: Date;
    relation: string;
    remarks: string;
}
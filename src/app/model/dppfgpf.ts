
export class NomineeData {
    relationship: string | '';
    nomineeName: string | '';
    nomineeAddress: string | '';
    nomineeDOB: string | '';
    nomineeShare: number | '';
    photoOfNominee: string | '';
    genNomiForm: string | '';
    npsNomiForm: string | '';
    fileBrowseNpsForm: Boolean;
    fileBrowseGenForm: Boolean;
    fileBrowseNomi: Boolean;
}

export class AccountGenerationDialog {
    inwardNo: string;
    inwardDate: string;
    typeOfInward: string;
    district: string;
    treasuryPao: string;
    year: string;
    month: string;
}


export interface AcceptAccountInterface {
    select: string;
    majorHead: string;
    accountType: string;
    noOfDocuments: string;
    amount: string;
    tcAmount: string;
    grossAmount: string;

}

export interface HeadData {
    select: string;
    majorHead: string;
    noOfDocuments: string;
    amount: string;
    tcAmount: string;
    grossAmount: string;

}
export class AccountGenerationData {
    gpfNo: string;
    firstName: string;
    middleName: string;
    lastName: string;

}

export class AddRow {
    upNo: string;
    gpfNo: string;
    name: string;
    subAmount: string;
    loanAmount: string;
    other: string;
    da: string;
    total: string;
    forMonth: string;
    forYear: string;
    remarks: string;

}
export class AccountWiseEntryList {
    srno: string;
    gpfNo: string;
    district: string;
    month: string;
    year: string;
    treasuryPao: string;
    listingAmount: string;

}
export class ListingInwardScreen {
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

export class AccountTransferData {
    gpfNo: string;
    firstName: string;
    middleName: string;
    lastName: string;

}

export class AddRowAccountTransfer {
    gpfNo: string;
    name: string;
    subAmount: string;
    loanAmount: string;
    other: string;
    da: string;
    total: string;
    forMonth: string;
    forYear: string;
    type: string;
    upNo: string;
    remarks: string;

}

export class AccountWiseEntryDialog1 {
    gpfNo: string;
    firstName: string;
    middleName: string;
    lastName: string;
}

export class AddRowAccountWiseEntry {
    gpfNo: string;
    name: string;
    subAmount: string;
    loanAmount: string;
    other: string;
    da: string;
    total: string;
    forMonth: string;
    forYear: string;
    type: string;
    upNo: string;
    remarks: string;
}
export class AccountWiseEntryListing {
    srno: string;
    requestNo: string;
    inwardNo: string;
    dateInward: string;
    treasuryPao: string;
    creditDebit: string;
    majorHead: string;
    voucherNo: string;
    voucherAmount: string;
}
export class AddRowAgca {
    codeNo: string;
    treasuryName: string;
    amount: string;
    agacAmount: string;
    remarks: string;

}
export interface ListingInwardScreenListing {
    srno: string;
    inwardNo: string;
    inwardDate: string;
    month: string;
    year: string;
    agcaAgac: string;
    creditDebit: string;

}

export interface HeadDataAgcaListing {
    srno: string;
    inwardNo: string;
    inwardDate: string;
    month: string;
    year: string;
    agcaAgac: string;
    creditDebit: string;
}
export interface TabelElement {
    attachment: string;
    name: undefined;
    file: undefined;
}

export class SavedCasesInterface {
    inwardNo: string;
    inwardDate: string;
    inwardType: string;
    gpfNo: string;
    status: string;
    from: string;
    noting: string;
}

export interface HeadDataCaseMoved {
    inwardNo: string;
    inwardDate: string;
    inwardType: string;
    gpfNo: string;
    status: string;
    from: string;
    noting: string;
}

export class GpfYearEndProcess {
    employeeGpfNo: string;
    year: string;
    employeeName: string;
    employeeNumber: string;
    employeeClass: string;
}

export interface HeadDataDeleteGpfYearEndProcess1 {
    employeeGpfNo: string;
    year: string;
    employeeName: string;
}

export class HeadDataDeleteGpfYearEndProcess {
    gpfNo: string;
    firstName: string;
    middleName: string;
    lastName: string;
}

export class DeputyDirectorListingInward {
    inwardNo: string;
    inwardDate: string;
    gpfAccountNo: string;
    name: string;
    employeeClass: string;
    employeeType: string;
    dob: string;
    doj: string;
    status: string;
    lyingWith: string;
}

export interface HeadDataListingInwardScreen {
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

export class FreezeUnfreezeProcess {

    inwardNo: string;
    inwardDate: string;
    treasuryName: string;
    schedule: string;
    accWiseEntryAmount: string;
    difference: string;
    lockedUnlocked: string;
}

export interface HeadDataFreezeUnfreezeProcess {
    inwardNo: string;
    inwardDate: string;
    treasuryName: string;
    schedule: string;
    accWiseEntryAmount: string;
    difference: string;
    lockedUnlocked: string;
}

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

export class AddRowMissingAccountWiseEntry {
    month: string;
    year: string;
    creditDebit: string;
    subAmount: string;
    loanAmount: string;
    other: string;
    da: string;
    total: string;
    forMonth: string;
    forYear: string;
}


export interface HeadDataFreezeUnfreeze {
    srno: string;
    requestNo: string;
    scheduleNo: string;
    district: string;
    year: string;
    month: string;
    employeeClass: string;
    lockedUnlocked: string;
}

export class ListingInward {
    srno: string;
    inwardNo: string;
    inwardDate: string;
    inwardType: string;
    district: string;
    treasuryPaoName: string;
    CardexNo: number;
    status: string;
    lyingWith: string;
}

export interface MissingAccountWiseEntryListing {
    srno: string;
    requestId: string;
    gpfNo: string;
    name: string;
    creditDebit: string;
    amount: string;
}

export class SavedOutwardCasesInterface {
    inwardNo: string;
    inwardDate: string;
    inwardType: string;
    gpfNo: string;
    status: string;
    from: string;
}

export interface HeadDataOutwardCases {
    outwardNo: string;
    outwardDate: string;
    inwardNo: string;
    inwardDate: string;
    inwardType: string;
    gpfNo: string;
    status: string;
}

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

export class PrepareOnlineFinalPaymentListing {
    srno: string;
    requestNo: string;
    employeeNo: string;
    gpfNo: string;
    name: string;
    disrict: string;
    reason: string;
    status: string;
    lyingWith: string;
}


export class AddRowVoucherEntry {
    voucherNo: string;
    cardexNo: string;
    ddo: string;
    amount: string;
}

export class AddRowChallan {
    voucherNo: string;
    challanNo: string;
    challanAmount: string;
    remainingAmount: string;
    amount: string;
}

export interface YearEndProcess {
    district: string;
    totalCases: string;
    processedCases: string;
    difference: string;
}

export class VoucherScreen {
    srno: string;
    inwardNo: string;
    dateInward: string;
    treasuryPao: string;
    year: string;
    month: string;
    paymentType: string;

}

export class VoucherScreenListing {
    srno: string;
    requestNo: string;
    inwardNo: string;
    inwardDate: string;
    creditDebit: string;
    majorHeadAmount: string;
}

export class AddRowTopScheduleEntry {
    head: string;
    amount: string;
}

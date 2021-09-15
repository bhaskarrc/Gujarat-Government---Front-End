// AcceptAccount
export interface AcceptAccountInterface {
    majorHead: string;
    creditDebit: string;
    noOfDocuments: string;
    amount: string;
    tcAmount: string;
    grossAmount: string;
}



// attachment
export class Attachment {
    attachmentType: string;
    name: string;
    file: string;
    uploadedBy: string;
}
// FamilyDetails
export class FamilyDetails {
    name: string;
    dateOfBirth: string;
    age: string;
    percentage: string;
    relation: string;
}
// ForwardedAnnexureOne
export class ForwardedAnnexureOne {
    payFixationEmployeeId: string;
    ragNumber: string;
    ppanNo: string;
    employeeName: string;
    designation: string;
    joiningDate: string;
    dateOfRetirement: string;
    status: string;
}

// ForwardedAnnexureTwo
export class ForwardedAnnexureTwo {
    payFixationEmployeeId: string;
    employeeName: string;
    designation: string;
    joiningDate: string;
    dateOfRetirement: string;
    status: string;
}
// TransactionIDMapping
export class TransactionIDMapping {
    batchId: string;
    transactionId: string;
}


// AccountWiseEntryList
export class AccountWiseEntryList {
    srno: string;
    gpfNo: string;
    district: string;
    month: string;
    year: string;
    treasuryPao: string;
    listingAmount: number;
}

// Used in NpsAccountGenerationDetailsListingComponent
export class ListingInwardScreen {
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

export class NpsAccountTransfer {
    typeNo: string;
    ppaNo: string;
    pranNo: string;
    transactionID: string;
    mappingType: string;
    name: string;
    basic: string;
    gradePay: string;
    dp: string;
    da: string;
    amount: string;
    up: string;
    forMonth: string;
    transferId: string;
    forYear: string;
    upType: string;
    remarks: string;
}

//  NpsAccountWiseEntryListing
export class NpsAccountWiseEntryListing {
    srno: string;
    requestNo: string;
    inwardNo: string;
    dateInward: string;
    treasuryPao: string;
    creditDebit: string;
    majorHead: string;
    voucherNo: string;
    voucherAmount: number;
}

// InwardDetailsListing
export class InwardDetailsListing {
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

// used in NpsMissingAccountWiseEntryListingComponent
export interface MissingAccountWiseEntryListing {
    srno: string;
    requestId: string;
    gpfNo: string;
    name: string;
    creditDebit: string;
    amount: number;
}

export class SavedCasesInterface {
    outwardNo: string;
    outwardDate: string;
    inwardNo: string;
    inwardDate: string;
    inwardType: string;
    gpfNo: string;
    status: string;
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
export class OutwardDetails {
    inwardNo: string;
    inwardType: string;
    inwardDate: string;
    department: string;
    whichBranch: string;
    branchUser: string;
    outwardRemark: string;
}
export class ReceivedTwoKListing {
    payFixationEmployeeId: string;
    employeeName: string;
    designation: string;
    departmentBranchOfficeName: string;
    dateOfBirth: string;
    joiningDate: string;
    ppan: string;
    status: string;
    workFlowStatus: string;
}
export class ReceivedWithdrawalCasesAccoutOfficer {
    employeeId: string;
    ppanNo: string;
    pranNo: string;
    name: string;
    claimId: string;
    officeName: string;
    nsdlAck: string;
    ddoRegistrationNo: string;
    status: string;
}
export class ReceivedWithdrawalCasesSubAccoutant {
    employeeId: string;
    ppanNo: string;
    pranNo: string;
    name: string;
    withdrawal: string;
    officeName: string;
    nsdlAck: string;
    ddoRegistrationNo: string;
    status: string;
    workflowStatus: string;
}
export class SavedWithdrawalCases {
    employeeId: string;
    ppanNo: string;
    pranNo: string;
    name: string;
    withdrawal: string;
    officeName: string;
    nsdlAck: string;
    ddoRegistrationNo: string;
    status: string;
    workflowStatus: string;
}
export class SentWithdrawalCasesSubAccoutant {
    employeeId: string;
    ppanNo: string;
    pranNo: string;
    name: string;
    claimId: string;
    officeName: string;
    nsdlAck: string;
    ddoRegistrationNo: string;
    status: string;
}


export class TopScheduleEntryListing {
    srno: string;
    inwardNo: string;
    dateInward: string;
    treasuryPao: string;
    year: string;
    month: string;
    paymentType: string;
}

export class TransactionIdMapping {
    transactionId: string;
    batchId: string;
}
export class VoucherEntry {
    voucherNo: string;
    cardexNo: string;
    ddo: string;
    amount: string;
}
export class YearEndProcess {
    ppanNo: string;
    year: string;
}
export class ReceivedAnnexureTwoK {
    payFixationEmployeeId: string;
    ragNumber: string;
    employeeName: string;
    designation: string;
    departmentBranchOfficeName: string;
    dateOfBirth: string;
    joiningDate: string;
    status: string;
}
export class SavedAnnexureOne {
    payFixationEmployeeId: string;
    ragNumber: string;
    employeeName: string;
    designation: string;
    joiningDate: string;
    dateOfRetirement: string;
    status: string;
}
export class SavedAnnexureTwo {
    payFixationEmployeeId: string;
    ragNo: string;
    employeeName: string;
    designation: string;
    departmentBranchOfficeName: string;
    joiningDate: string;
    status: string;
}
export class SavedAnnexureTwoK {
    payFixationEmployeeId: string;
    ragNo: string;
    employeeName: string;
    designation: string;
    departmentBranchOfficeName: string;
    joiningDate: string;
    ppan: string;
    status: string;
}
export class SearchEmployeeDppfNps {
    employeeNumber: number;
    employeeName: string;
    firstName: string;
    middleName: string;
    lastName: string;
    designation: string;
    class: string;
    employeeType: string;
    panNumber: string;
    officeName: string;
}
export class SearchInwardNoDppfNps {
    inwardNo: number;
    inwardDate: number;
    typeOfInward: string;
    district: string;
    treasury: string;
}
export class SearchPpaDppfNps {
    ppaNo: number;
    firstName: string;
    middleName: string;
    lastName: string;
    shortName: string;
    district: string;
}

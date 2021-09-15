export interface BranchCreation {
    branchName: string;
    branchType: string;
    isEdit: boolean;
}
export interface BranchCreationLisiting {
    referenceNumber: string;
    referenceDate: Date;
    district: string;
    ddoNo: string;
    cardexNo: string;
    officeName: string;
    branchName: string;
    branchType: string;
    transactionStatus: string;
    lyingWith: string;
}

export interface BranchMappingAndTransferListing {
    referenceNumber: string;
    referenceDate: Date;
    district: string;
    ddoNo: string;
    cardexNo: string;
    officeName: string;
    requestType: string;
    fromEmployeeNumber: string;
    fromPostName: string;
    toEmployeeNumber: string;
    toPostName: string;
    lyingWith: string;
    transactionStatus: string;
}
export interface BranchMappingTransfer {
    employeeNo: string;
    employeeName: string;
    postName: string;
    branch: string;
    mappedBranch: string;
    toBeTrasnferred: string;
}
export interface BranchMappingTo {
    employeeNo: string;
    employeeName: string;
    postName: string;
    branch: string[];
}

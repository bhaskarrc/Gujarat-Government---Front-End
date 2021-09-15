
export class ListValue {
    value: string;
    viewValue: string;
}
export class BrwoseData {
    name: string;
    file: string;
    uploadedBy: string;
}

export interface LcAdviceCardexVerification {
    virtualTokenNo: string;
    virtualTokenDate: string;
    adviceNo: string;
    adviceDate: string;
    divisionCode: string;
    divisionName: string;
    cardexNo: string;
    ddoNO: string;
    adviceAmount: string;
    totalDeduction: string;
    adviceNetAmount: string;
    lcBranchUser: string;
    ddoApproverName: string;
    signVerify: string;
}

export interface NotActivateInLC {
    issueDate: string;
    startingChequeSeries: string;
    endingChequeSeries: string;
}

export interface NotActivateInLCTO {
    issueDate: string;
    startingChequeSeries: string;
    endingChequeSeries: string;
    chequeRequestReceivedDate: string;
}

export interface ActivatedChequeInLC {
    activatedDate: string;
    startingChequeSeries: string;
    endingChequeSeries: string;
}

export interface InactivatedChequeInLC {
    activatedDate: string;
    inactivateDate: string;
    startingChequeSeries: string;
    endingChequeSeries: string;
}

export interface ChequebookDetails {
    referenceNumber: string;
    referenceDate: string;
    typeOfRequest: string;
    startingChequeSeries: string;
    endingChequeSeries: string;
    receivedFrom: string;
    receivedDate: string;
    sentTo: string;
    sentDate: string;
    lyingWith: string;
    workFlowStatus: string;
    status: string;
}

export interface ChequebookDetailsTO {
    referenceNumber: string;
    referenceDate: string;
    divisionCode: string;
    divisionName: string;
    typeOfRequest: string;
    startingChequeSeries: string;
    endingChequeSeries: string;
    receivedFrom: string;
    receivedDate: string;
    sentTo: string;
    sentDate: string;
    lyingWith: string;
    status: string;
    workFlowStatus: string;
}

export interface ChequeCancellation {
    fund: string;
    classOfExpenditure: string;
    budgetType: string;
    demandNo: string;
    majorHead: string;
    subMajorHead: string;
    minorHead: string;
    subHead: string;
    detailHead: string;
    typeOfEstimate: string;
    itemName: string;
    objectHead: string;
    schemeNo: string;
    expenditureAmount: string;
    headwiseCancelChequeAmount: string;
}

export interface chequeCancellationDivision {
    referenceNo: string;
    referenceDate: string;
    chequeNo: string;
    chequeDate: string;
    chequeAmount: string;
    receivedFrom: string;
    receivedDate: string;
    sentTo: string;
    sentDate: string;
    lyingWith: string;
    status: string;
}

export interface chequeCancellationTO {
    fund: string;
    classOfExpenditure: string;
    budgetType: string;
    schemeNo: string;
    demandNo: string;
    majorHead: string;
    subMajorHead: string;
    minorHead: string;
    subHead: string;
    detailHead: string;
    objectHead: string;
    expenditureAmount: string;
    headwiseCancelChequeAmount: string;
}

export interface chequeCancellationTOListing {
    referenceNo: string;
    referenceDate: string;
    divisionCode: string;
    divisionName: string;
    cardexNo: string;
    ddoNo: string;
    chequeNo: string;
    chequeDate: string;
    chequeAmount: string;
    receivedFrom: string;
    receivedDate: string;
    sentTo: string;
    sentDate: string;
    lyingWith: string;
    status: string;
}

export interface ChequeToChequeEffect {
    chequeDate: string;
    chequeNumber: string;
    chequeAmount: string;
    partyName: string;
}

export interface InwardOnlineAdvice {
    adviceNo: string;
    referenceNo: string;
    adviceDate: string;
    divisionCode: string;
    divisionName: string;
    cardexNo: string;
    ddoNO: string;
    virtualTokenNo: string;
    virtualTokenDate: string;
    adviceAmount: string;
    totalDeduction: string;
    adviceNetAmount: string;
    lcBranchUser: string;
}

export interface AdviceReceipt {
    chequeDate: Date;
    chequeNo: string;
    chequeAmount: string;
    partyName: string;
    isGenerateChequeNo: boolean;
}
export interface AdviceReceiptAuth {
    chequeDate: Date;
    chequeNo: string;
    chequeAmount: string;
    partyName: string;
}

export interface LcAdviceReceiptEPayment {
    partyName: string;
    bankAccountNumber: string;
    IFSCCode: string;
    epaymentAmount: string;
}

export interface DetailPosting {
    classOfExpenditure: string;
    fund: string;
    budgetType: string;
    schemeNo: string;
    demandNo: string;
    majorHead: string;
    subMajorHead: string;
    minorHead: string;
    subHead: string;
    detailClass: string;
    typeOfEstimation: string;
    itemName: string;
    objectClass: string;
    mapEpayment: string;
    expenditureAmount: string;
    headwiseAvailableAmount: string;
    lcNumber: string;
    search: string;
}

export interface DeductionLCAdvice {
    professionlTax: string;
    laborClass: string;
    forAllMH: string;
    incomeTax: string;
    surcharge: string;
    gpfClassIV: string;
    cpf: string;
    rentOfBldg: string;
    govtInsuranceFund: string;
    insuranceFund: string;
    securityDeposit: string;
    establishmentCharges: string;
    machinaryCharges: string;
}
export interface Deduction {
    professionlTax: string;
    laborClass: string;
    forAllMH: string;
    incomeTax: string;
    surcharge: string;
    gpfClassIV: string;
    rentOfBldg: string;
    govtInsuranceFund: string;
    insuranceFund: string;
    securityDeposit: string;
    establishmentCharges: string;
    machinaryCharges: string;
}

export interface DetailPostingAuthorize {
    fund: string;
    classOfExpenditure: string;
    typeOfExpenditure: string;
    budgetType: string;
    schemeNo: string;
    demandNo: string;
    majorHead: string;
    subMajorHead: string;
    minorHead: string;
    subHead: string;
    detailClass: string;
    typeOfEstimation: string;
    itemName: string;
    objectClass: string;
    expenditureAmount: string;
    headwiseAvailableAmount: string;
}

export interface LcAdviceVerification {
    virtualTokenNo: string;
    virtualTokenDate: string;
    adviceNo: string;
    adviceDate: string;
    divisionCode: string;
    divisionName: string;
    ddoApproverName: string;
    adviceGrossAmount: string;
    totalDeduction: string;
    adviceNetAmount: string;
    receivedFrom: string;
    receivedDate: string;
    sentTo: string;
    sentDate: string;
    lyingWith: string;
    status: string;
    workflowStatus: string;
    AuthorizedReturnedDate: string;
    total: string;
}

export interface LcSavedAdvice {
    refNo: string;
    virtualTokenNo: string;
    virtualTokenDate: string;
    referenceNo: string;
    referenceDate: string;
    adviceNo: string;
    adviceDate: string;
    adviceAmount: string;
    totalDeduction: string;
    adviceNetAmount: string;
    receivedFrom: string;
    receivedDate: string;
    sentTo: string;
    sentDate: string;
    lyingWith: string;
    status: string;
    workflowStatus: string;
    authorizedDate: string;
    printDetails: string;
}

export interface LCRequest {
    requestNo: string;
    ddoCode: string;
    divisionName: string;
    status: string;
}

export interface LCDistribution {
    referenceNo: string;
    referenceDate: string;
    divisionCode: string;
    divisionName: string;
    lcNo: string;
    entryType: string;
    lcAmount: string;
    lcIssueDate: string;
    receivedFrom: string;
    receivedDate: string;
    sentTo: string;
    sentDate: string;
    lyingWith: string;
    status: string;
    authorizedDate: string;
}

export interface LcdistributionInput {
    classOfExpenditure: string;
    fundType: string;
    budgetType: string;
    demandNo: string;
    majorHead: string;
    subMajorHead: string;
    minorHead: string;
    subHead: string;
    detailHead: string;
    TypeOfEstimate: string;
    itemName: string;
    objectHead: string;
    schemeNo: string;
    amount: number;
}

export interface LcVerification {
    divisionCode: string;
    divisionName: string;
    lcNo: string;
    entryType: string;
    lcAmount: string;
    lcIssueDate: string;
    status: string;
    authorizedDate: string;
}

export interface Treasury {
    employeeNumber: string;
    employeeName: string;
}

export interface LcOpeningRequest {
    referenceNo: string;
    referenceDate: Date;
    divisionName: string;
    officeName: string;
    cardexNo: string;
    ddoCode: string;
    ddoName: string;
    circleName: string;
    receivedFrom: string;
    receivedDate: Date;
    sentTo: string;
    sentDate: Date;
    lyingWith: string;
    status: string;
    workflowStatus: string;
}



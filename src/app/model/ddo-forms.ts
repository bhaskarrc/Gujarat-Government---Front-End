export class EdpDetails {
    budgetCode: string;
    description: string;
    edpCode: string;
    amount?: string;
}

export class RecoveryDetails {
    budgetCode: string;
    description: string;
    edpCode: string;
    amount?: string;
}

export class ReceiptDetails {
    edpCode: string;
    description: string;
    dedType: string;
    majorHead: string;
    subMajorHead: string;
    minerHead: string;
    subHead: string;
    amount: string | number;
}

export class ReceiptDataSummary {
    edpCode: string;
    challanDate: string;
    pdAccount: string;
    party: string;
    amount: string;
}

export class ReceiptSummaryDeduction {
    decuctionA: string;
    decuctionB: string;
    expenditure: string;
    recovery: string;
}

export class EPaymentDetails {
    payeeName: string;
    accountNo: number;
    ifscCode: string;
    amount: string | number;
}

export class ChequeDetails {
    partyName: string;
    chequeType?: string;
    address: string;
    chequeAmount?: string;
    accountNo: string;
    checkType?: string;
    checkAmount?: string;
}

// gtr-62-a (gtr-62A details tab)
export class GrantAddBillNo {
    gpfAcno: string;
    amt: string;
}

// ddo grant head for gtr-cfr
export class HeadData {
    fundType: string;
    voted: string;
    stateCss: string;
    bSubHeadSt: string;
    subHeadDes: string;
    expenditure: string;
    itemName: string;
    schemeNo: string;
}

// ddo grant head for gtr-44,45,48
export class HeadDataDetails {
    fundType: string;
    voted: string;
    stateCss: string;
    bSubHeadSt: string;
    subHeadDes: string;
    expenditure: string;
    itemName: string;
    schemeNo: string;
    grantRecievedTillDate: string;
    GrantUsedBills: string;
    Balance: string;
    GrantUsedSaved: string;
    MoreGrant: string;
}

export class Heading {
    head1: string;
    head2: any;
}

// vendor-list
export class VendorList {

    accountNo: number;
    bankVerficationDate: string;
    bankVerficationFlag: string;
    chequeType: string;
    ifscCode: string;
    panNumber: string;
    partyName: string;
    partyAddress: string;
    status: string;
    forwardedTo: string;
    mobileNumber: string;
    emailId: string;
    tanNumber: string;
}

// GRP-30-detals-inner tabel
export class GrpDetailsInner {
    position: number;
    EmpNo: string;
    EmpName: string;
    Designation: string;
    payScale: string;
    ph: string;
    empGrp: string;
    basiPay: string;
    ficPay: string;
    da: string;
    hRa: string;
    cLa: string;
    mealAllow: string;
    washAllow: string;
    transAllow: string;
    specialPay: string;
    grossPay: string;
    slo: string;
}
// GRP-30-detals-inner tabel end


// GRP-30-detals-inner tabel
export class GrpDetailsDeduction {
    position: number;
    EmpNo: string;
    EmpName: string;
    Designation: string;
    incomeTax: string;
    proTax: string;
    hrDeal: string;
    hraIntesrt: string;
    gpfReg: string;
    gpfIv: string;
    gpfAdv: string;
    govFund: string;
    totalDEdiction: string;
    netPay: string;

}

// cancel-cheque-new component
export class ChequeInfo {
    chequeAmount: string;
    accountNo: number | string;
    inFavourof: string;
    chequeNo: string;
    chequeType: string;
}

// cheque for correction new
export class ChequeForCorrectionNew {
    chequeAmount: string;
    accountNo: number;
    inFavourof: string;
    chequeNo: string;
    chequeType: string;
    reasonName: string;
    reasonOfcacelation: string;
}

// create new bill
export class Section {
    Value: string;
}

//  gtr-61
export class GrantAddbillNo {
    gpfAcno: string;
    amt: string;
}

export class GrantAddBillNoDetails {
    gpfAcno: string;
    amt?: string;
    grantInAdd: string;
}
// form gtr-29
export class PatientDetails {
    namePAtiont: string;
    agePationts: string;
    relation: string;
    incument: string;
    trestmentFrom: string;
    trestmentTo: string;
    claimAmt: string;
    disName: string;
    docName: string;
    remarks: string;
}

// form sr-onlinebill
export class Gross {
    grossTotal: string;
    recovery: string;
    deduA: string;
    deduB: string;
    netTotal: string;
    amntRs: string;
    apropriFor: string;
    expThisBill: string;
    bal: string;
}

export class HeadDataSr {
    fundType: string;
    voted: string;
    stateCss: string;
    bSubHeadSt: string;
    subHeadDes: string;
    schemeNo: string;
}

export class TravelDetails {

    mJorney?: string;
    station: string;
    depaDate: string;
    hour: string;
    stationArrival: string;
    ariaDate: string;
    hourTwo: string;
    tyJorn: string;
    fareCls: string;
    noFares: string;
    ordFares: string;
    otherFare: string;
    dailAllwn: string;
    noDays: string;
    travelTptal: string;
    remarks: string;
    place?: string;
    hourslast?: string;
    fareAmount: string;
}

// Travel Details
export class TravelDetailsThirtyFive {

    mJorney: string;
    station: string;
    depaDate: string;
    hour: string;
    place: string;
    stationArrival: string;
    ariaDate: string;
    hourslast: string;
    placeLast: string;
    typeOfJourney: string;
    purposeOfJourney: string;
    trainType: string;
    fareClass: string;
    Vehicle: string;
    owner: string;
    noOfFares: string;
    fareAmount: string;
    kilometer?: string;
}

export class EmployeeList {
    employeeName: string;
    designation: string;
    accountNo: number;
    ifscCode: string;
    employeeType: string;
    gpfCpfPpaNo: string;
    bankVerficationFlag: string;
    bankVerficationDate: string;
    mobileNumber: string;
    emailId: string;
    panNumber: string;
    aadhaarNumber: string;
    forwardedTo: string;
    status: string;
}

export class ChequeforCorrectionList {
    cardex: string;
    refNo: string;
    refDate: string;
    ddo: string;
    office: string;
    chequeNo: string;
    chequeDate: string;
    billType: string;
    typeAction: string;
    status: string;
    lyingWith: string;
    action: string;
}

export class ChequeforCorrection {
    position: string;
    ddoName: string;
    billType: string;
    billDate: string;
    chequeDate: string;
    action: string;
}

export class OldChequePreparationDetails {
    chequeAmount: string;
    accountNo: string;
    inFavourof: string;
    chequeNo: string;
    chequeType: string;
}

export class BillChequeDetails {
    chequeFromDate: string;
    chequeTodate: string;
    cardexNo: string;
    inwardDate: string;
    dispatchDate: string;
    billNetAmount: string;
    chequeAmount: string;
    chequeAmount1: string;
    cType: string;
    chequeNo: string;
    chequeNo1: string;
    chequeStatus: string;
    chequeType: string;
    partyName: string;
    partyName1: string;
}


export class ChequeInward {

    tokenNo: string;
    inwardDate: string;
    cardex: string;
    ddo: string;
    office: string;
    cType: string;
    chequeNo: string;
    chequeNo1: string;
    chequeNo2: string;
    chequeStatus: string;
    chequeType: string;
}

export class SerialForm {
    srNo: string;
    form: string;
}

export class EdpCodeMasterExpenditureRecovery {
    budgetCode: string;
    edpCode: string;
    edpCodedescription: string;
    objectClass: string;
    edpCodeType: string;
    status: string;
}

export class EdpCodeMasterReceipt {
    edpCode: string;
    edpCodedescription: string;
    deductionType: string;
    majorHead: string;
    subMajorHead: string;
    minorHead: string;
    subHead: string;
    status: string;

}

export class GtrFortyEightList {
    billReq: string;
    billdate: string;
    billType: string;
    billCategary: string;
    majorHead: string;
    Amount: string;
    ddoNo: string;
    ddoName: string;
    billStatus: string;
    TypeOfbill: string;

}

export class SavedBillFourtySix {

    checkbox: boolean;
    billNo: string;
    billRegNo: string;
    date: string;
    billType: string;
    majorHead: string;
    billGrossAmount: string;
    billNetValue: string;
    voucherNo: string;
    voucherDate: string;
    gtr46BillStatus: string;
    pendingSinceDays: string;
}

export class DdoGrantHeadDialog {
    fundType: string;
    voted: string;
    stateCss: string;
    bSubHeadSt: string;
    subHeadDes: string;
    expenditure?: string;
    itemName?: string;
    schemeNo: string;
    grantRecievedTillDate?: string;
    GrantUsedBills?: string;
    Balance?: string;
    GrantUsedSaved?: string;
    MoreGrant?: string;
}

export class ChequeListTypeDialog {
    vender: string;
    chequeType?: string;
    accountNo: string;
    panNo: string;
    checkType?: string;
}

export class ChequeListTypeDialog1 {
    gpfNumber: string;
    employeeName: string;
    designation: string;
}

export class ChequeListTypeDialog2 {
    venderDetails?: string;
    vender: string;
    chequeType?: string;
    accountNo: string;
    ifscCode: string;
    bankBranchName: string;
    panNo: string;
    rateOfIncomeTax: string;
    mobileNo: string;
    checkType?: string;
}

export class ChequeListTypeDialog3 {
    vender: string;
    chequeType: string;
    designation: string;
    payeeName: string;
    accountNo: number;
    ifscCode: string;
    amount: string;
    panNo: string;
}

export class ChequeListTypeDialog4 {
    vender: string;
    checkType: string;
    accountNo: string;
    panNo: string;
}

export class ChequeListTypeDialog5 {
    vender: string;
    chequeType: string;
    accountNo: number;
    panNo: string;
    amount: string;
}

export class ChequeListTypeDialog6 {
    checkType: string;
    designation: string;
    payeeName: string;
    accountNo: number;
    ifscCode: string;
    amount: string;
    pan: string;
}

export class Attachment {
    name: undefined;
    file: undefined;
    uploadedBy?: string;
}

export class BillTypeWiseStructure {

    billType: string;
    classOfExpenditure: string;
    fundType: string;
    schemeType: string;
    department: string;
    demand: string;
    majorHead: string;
    subMajorHead: string;
    minorHead: string;
    subHead: string;
    detailHead: string;
    objectClass: string;
    typeOfEstimate: string;
    itemName: string;
}

export class CreateEmployee {

    employeeNumber: string;
    employeeName: string;
    gpfCpfPpaNo: string;
    employeeType: string;
    employeeDesignation: string;
    billAccountNo: string;
    ifscCode: string;
    branchName: string;
    mobileNumber: string;
    emailId: string;
    bankVerificationFlag: string;
    bankVerificationDate: string;
    panNumber: string;
    aadharNumber: string;
}

export class CreateVendor {

    vender: string;
    partyAddress: string;
    accountNo: string;
    ifscCode: string;
    bankBranchName: string;
    panNo: string;
    tanNo: string;
    rateOfIncomeTax: string;
    mobileNo: string;
    emailId: string;
    bankFlag: string;
    bankVerificationDate: string;
    chequeType: string;
}

export class GtrEightyFiveHbaMca {
    establishment: string;
    shortName: string;
    firstName: string;
    middleName: string;
    lastName: string;
    gender: string;
    birthDay: string;
    designation: string;
    class: string;
    empType: string;
    status: string;
    gpfNo: string;
    basicPay: string;
    sorderNo: string;
    sDate: string;
    rule: string;
    purposeLoan: string;
    mileStone: string;
    AdvanceAmount: number;
    totalLon: string;
    installment: string;
    createAc: string;
    remarks: string;
}

export class GtrEightyFiveOther {

    subVoucher: string;
    description: string;
    amount: string;
    incomeTax: number;
    AdvanceAmount?: number;
}

export class EmployeeTransactionHead {
    creditorName: any;
    creditorAccountNo: any;
    creditorIfscCode: any;
    partName: any;
    partAccNo: any;
    partyIFSC: any;
}

export class RejectedApprovedBillsByCo {
    checkbox: boolean;
    billRegNo: string;
    date: string;
    billType: string;
    billCategory: string;
    majorHead: string;
    billNetValue: string;
    ddoNo: string;
    ddoName: string;
    billStatus: string;
    typeBill: string;
    approvedByCo: string;
    grossAmount: string;

}
export class RejectedBillsByTo {
    checkbox: boolean;
    billRegNo: string;
    date: string;
    billType: string;
    billCategory: string;
    majorHead: string;
    billNetValue: string;
    ddoNo: string;
    ddoName: string;
    billStatus: string;
    typeBill: string;
    tokenno: string;
    grossAmount: string;

}

export class SearchEmployee {
    employeeNumber: number;
    employeeName: string;
    designation: string;
    class: string;
    employeeType: string;
    panNumber: string;
    officeName: string;
}


export class FundDetails {
    group: string;
    savingFund?: string;
    amountPayableInsuranceFund: string;
    fromDate: string;
    toDate: string;
    total?: string;
    ramarks: string;
}

export class SanctionOrderDetails {
    nameOfGovernmentEmployee: string;
    designationOfEmployee: string;
    sanctionOrderNo: string;
    sanctionOrderDate: string;
    deathDate: string;
    retirementDate: string;
}

export class GtrdetailsList {
    subVoucher: string;
    description: string;
    amount: string;
    incomeTax: number;
    refundamount: null;
}

export class GrantAddBill {
    lapsedDeposit: string;
    depositYear: string;
    depositNo: string;
    statmentDate: string;
    statmentNo: string;
    balanceCredit: string;
    amountFigures: string;
    remarks: string;
}

export class GtrDetailsFoutryList {
    billNo: string;
    amount: string;
    billDate: string;
    voucharNo: string;
    voucharDate: string;
    obtainDated: string;
    postageRegister: string;
}

export class IncomeTaxDetails {
    personName?: string;
    panNo: string;
    rate: string;
    amountTax: string;
    remarks: string;
}

export class GtrDetailsFourtyFour {
    Payeesname: string;
    subVoucher: string;
    description: string;
    amount: string;
    incomeTax: string;
    uploadedFileName: string;
    uploadedBy: string;
    file?: any;
}

export class GtrDetailsChequeFourtyFour {
    partyName: string;
    subVoucher: string;
    description: string;
    amount: string;
    incomeTax: string;
    uploadedFileName: string;
    uploadedBy: string;
    file?: any;
}

export class EmployeeDetails {
    employeeNumber: string;
    gpfNumber: string;
    employeeName: string;
    designation: string;
    employeeType: string;
    bankAccountNo: string;
    ifscCode: string;
    bankBranchName: string;
}

export class GtrDetailsFourtyFive {
    billNo: string;
    billRegisterNo: string;
    billDate: string;
    tokenNo: string;
    voucherNo: string;
    voucherDate: string;
    grossAmount: string;
    netAmount: string;

}

export class GtrDetailsFourtyFiveList {
    subVoucher: string;
    description: string;
    amount: string;
}

export class ChallanList {
    chalanNumber: string;
    chalanDate: string;
    party: string;
    amount: string;
}

export class GtrDetailsSeventySeven {
    nameOfGovEmployee: string;
    sanctionOrderNo: string;
    sanctionOrderDate: string;
    fundAmount: string;
    remarks: string;
}

export class GpfBillDetails {
    gpfAcno: string;
    subScribe: string;
    basicPaid: string;
    dpppdfOrder: string;
    sanctionNo: string;
    santionDate: string;
    advanceRs: string;
    remarks: string;
}

export class TradeDetails {

    tradeName: string;
    trade: string;
    fromdate: string;
    todate: string;
    OfficeOrderdate: string;
    Sanctionedfromdate: string;
    Sanctionedtodate: string;
    rainingPeriod: string;
    remarks: string;
}

export class InstituteDetails {
    tDOOffice: string;
    OfficeOrder: string;
    OfficeOrderdate: string;
    rainingPeriod: string;
    strength: string;
    fromdate: string;
    todate: string;
}

export class GtrThirty {

    subVoucher: string;
    description: string;
    amount: string;
    incomeTax: string;
}

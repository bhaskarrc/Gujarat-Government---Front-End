
export class ListValue {
    value: string;
    viewValue: string;
}
export class BrwoseData {
    name: string;
    file: string;
    uploadedBy: string;
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
    newendRange: number;
    newLastToken: number;
    newAction: number | string;
}

export class TokenMaster {
    select: string;
    tokenNumber: number;
    tokenStatus: string;
}


export class IwardPhysicalBill {
    srNo: string;
    challanNo: string;
    challanDate: string;
    challanMajorhead: string;
    challanAmount: string;
    action: string;
}

export class CounterAllocation {
    counter: string;
    range: string;
    counter_h: string;
}

export class TokenStatus {
    tokenstatusdata: string;
    totakeno: string;
}

export class InwardBill {
    billcontrol: string;
    billRefNo: string;
    lastUsedToken: string;
    cardexNo: string;
    billRegNo: string;
    tokenNo: string;
    billGrossAmount: string;
    billAmount: string;
    billType: string;
    billDate: string;
    ddoNo: string;
    ddoName: string;
    mhead: string;
    billCat: string;
    authiorName: string;
    partyName: string;
    chequeFromdate: string;
    chequeTodate: string;
}

export class SavedBill {
    billRefNo: string;
    tokenNo: string;
    billRegNo: string;
    mhead: string;
    ddoNo: string;
    cardexNo: string;
    billAmount: string;
    billType: string;
    billDate: string;
    inwardBillDate: string;
    ddoName: string;
    bilCat: string;
    billGrossAmount: string;
    partyName: string;
    approverName: string;
}

export class InwardBillTracking {
    toName: string;
    dist: string;
}

export class DispatchLevel {
    district: string;
    name: string;
    tokenNo: string;
    refNo: string;
    ddo: string;
    cardex: string;
    office: string;
    bType: string;
    indDate: string;
    majorHead: string;
    grossAmt: string;
    netAmt: string;
    payMode: string;
    wStatus: string;
    lying: string;
    status: string;
    headStr: string;
    headDesc: string;
}
export class DispatchLevelTracker {
    district: string;
    name: string;
    tokenNo: string;
    refNo: string;
    ddo: string;
    cardex: string;
    office: string;
    bType: string;
    indDate: string;
    majorHead: string;
    grossAmt: string;
    netAmt: string;
    payMode: string;
    wStatus: string;
    lying: string;
    headStr: string;
    headDesc: string;
    rDate: string;
}

export class CardexVerification {
    billRefNo: string;
    tokenNo: string;
    mhead: string;
    ddoNo: string;
    cardexNo: string;
    billRegNo: string;
    billAmount: string;
    billGrossAmount: string;
    billType: string;
    billDate: string;
    inwardDate: string;
    ddoName: string;
    billCat: string;
    partyName: string;
    approverName: string;
}

export class ReprintToken {
    billControl: string;
    billRefNo: string;
    lastUsedToken: string;
    cardexNo: string;
    billRegNo: string;
    tokenNo: string;
    billGrossAmount: string;
    billAmount: string;
    billType: string;
    billDate: string;
    ddoNo: string;
    ddoName: string;
    mhead: string;
    billCat: string;
    authiorName: string;
    partyName: string;
}


export class DDOLEVEL {
    ddoNo: string;
    cardexNo: string;
    ddoName: string;
    fromDate: string;
    toDate: string;
    type: string;
}

export class ToLevel {
    ddoNo: string;
    cardexNo: string;
    ddoName: string;
    status: string;
    fromDate: string;
    toDate: string;
    type: string;
}

export class ChequePrepration {
    refNo: string;
    regNo: string;
    billInwardDate: string;
    tokenNo: string;
    majorHead: string;
    billType: string;
    cardexNo: string;
    ddoNo: string;
    ddo: string;
    billDate: string;
    billAmount: string;
    auditor: string;
    category: string;
    party: string;
    billGrossAmount: string;
    status: string;
}


export class ChequePreprationFirstLevel {
    billNo: string;
    tokenNo: string;
    majorHead: string;
    billGrossAmount: string;
    billAmount: string;
    netAmount: string;
    billRegNo: string;
    billInwardDate: string;
    billType: string;
    cardexNo: string;
    ddoNo: string;
    ddo: string;
    billDate: string;
    auditor: string;
    category: string;
    party: string;
    status: string;
}

export class TypeChequePrepration {
    type: string;
    partyMaster: string;
    accountNumber: string;
    chequeAmount: string;
    remchequeAmount: string;
    status: string;
}

export class WrittenCheque {
    refNo: string;
    regNo: string;
    refNot: string;
    tokenNo: string;
    tokenNot: string;
    party: string;
    majorHead: string;
    majorHeadt: string;
    ddoNo: string;
    cardexNo: string;
    cardexNot: string;
    billAmount: string;
    billAmountt: string;
    billGrossAmount: string;
    cheque: string;
    chequeePayment: string;
    partyName: string;
    billdate: string;
    inwardDate: string;
    ddoname: string;
    billcat: string;
    billtype: string;
    status: string;
}

export class ChequePrinting {
    chequeNo: string;
    refNo: string;
    refNoy: string;
    regNo: string;
    tokenNo: string;
    tokenNot: string;
    party: string;
    majorHead: string;
    majorHeadt: string;
    ddoNo: string;
    cardexNo: string;
    cardexNot: string;
    billAmount: string;
    billAmountt: string;
    billGrossAmount: string;
    cheque: string;
    chequeePayment: string;
    partyName: string;
    billdate: string;
    inwardDate: string;
    ddoname: string;
    billcat: string;
    billtype: string;
    status: string;
}

export class ChequePrintingBill {
    accountNumber: string;
    refNo: string;
    tokenNo: string;
    party: string;
    cardexNo: string;
    majorHead: string;
    billAmount: string;
    chequeePayment: string;
    status: string;
}

export class ChequePrintingGenerate {
    accountNumber: string;
    refNo: string;
    tokenNo: string;
    party: string;
    ddoNo: string;
    cardexNo: string;
    majorHead: string;
    billAmount: string;
    chequeePayment: string;
    status: string;
}
export class PrintedCheque {
    refNo: string;
    regNo: string;
    tokenNo: string;
    party: string;
    majorHead: string;
    ddoNo: string;
    cardexNo: string;
    billAmount: string;
    billGrossAmount: string;
    cheque: string;
    chequeePayment: string;
    partyName: string;
    billdate: string;
    inwardDate: string;
    ddoname: string;
    billcat: string;
    billtype: string;
    chequeno: string;
    paidAmount: string;
}

export class EpaymentCustody {
    billNo: string;
    ePayment: string;
    ePaymentAmount: string;
    regNo: string;
    inwardDate: string;
    billDate: string;
    partyName: string;
    tokenNo: string;
    billAmount: string;
    billType: string;
    ddoNo: string;
    cardex: string;
    billGrossAmount: string;
    majorHead: string;
    category: string;
    officeName: string;
    exempted: string;
}

export class TransferDocument {
    refNo: string;
    tokenNo: string;
    majorHead: string;
    billType: string;
    cardexNo: string;
    ddoNo: string;
    ddo: string;
    billDate: string;
    netGrossAmount: string;
    netAmount: string;
    auditor: string;
    category: string;
    status: string;
}

export class AuditorBillAudit {

    billRefNo: string;
    tokenNo: string;
    mhead: string;
    cardexNo: string;
    billRegNo: string;
    billAmount: string;
    billGrossAmount: string;
    billType: string;
    billDate: string;
    ddoName: string;
    billCat: string;
    authiorName: string;
    district: string;
    ddoNo: string;
    partyName: string;
    approverName: string;
    vitocode: string;
    inwardDate: string;
}

export class AuditorAccountant {
    billRefNo: string;
    tokenNo: string;
    mhead: string;
    cardexNo: string;
    billRegNo: string;
    billGrossAmount: string;
    billAmount: string;
    billType: string;
    billDate: string;
    inwardDate: string;
    ddoName: string;
    billCat: string;
    authiorName: string;
    district: string;
    ddono: string;
    vitocode: string;
    partyName: string;
}


export class EPaymentAuthorized {
    ePaymentCode: Number;
    partyName: String;
    tokenNo: Number;
    billTypes: string;
    totalBills: Number;
    totalPayment: Number;
    grantTotalTrans: Number;
    grantTotalPayment: Number;
    payByBank: string;
}

export class PrintNewCheque {
    party: string;
    billAmount: string;
    fromDate: string;
    Todate: string;
}

export class SenToBook {
    advice: string;
    adviceDate: string;
    billRefNo: string;
    ChequeNo: string;
    tokenNo: string;
    cardexNo: string;
    ddoNo: string;
    billRegNo: string;
    billDate: string;
    inwardDate: string;
    officeName: string;
    billGrossAmount: string;
    billAmount: string;
    billType: string;
    mhead: string;
    billCat: string;
    cheAmmount: string;
}

export class BillForCorrection {
    billrefNo: string;
    tokenNo: string;
    mhead: string;
    ddoNo: string;
    cardexNo: string;
    billregno: string;
    billAmount: string;
    billGrossAmount: string;
    billType: string;
    billDate: string;
    ddoName: string;
    billCat: string;
    authiorName: string;
}

export class ChequeForCorrection {
    tokenNo: string;
    inwardDate: string;
    requestStatus: string;
    chequeNo: string;
    chequeNo1: string;
    chequeStatus: string;
    chequeStatus1: string;
}

export class ChequeDetailForCorrection {
    chequeFromDate: string;
    chequeTodate: string;
    cardexNo: string;
    inwardDate: string;
    dispatchDate: string;
    billNetAmount: string;
    chequeAmount: string;
    chequeAmount1: string;
    requestStatus: string;
    chequeNo: string;
    chequeNo1: string;
    chequeStatus: string;
    partyName: string;
    partyName1: string;
    chequeStatus1: string;
}

export class EpaymentAuthorizeToDetails {
    partyNameL: string;
    accountnoL: string;
    ifsccodeL: string;
    pponoL: string;
    amount: string;
    paymentrefno: string;
    paybydate: string;
    settlementno: string;
    schemecode: string;
}

export class ObjectionMaster {
    object_descr: string;
    module_name: string;
    billType: string;
}

export class DDOLEVELLIST {
    ddoNo: string;
    cardexNo: string;
    ddoName: string;
    ddoApproverName: string;
    lywith: string;
    status: string;
    fromDate: string;
    toDate: string;
    type: string;
}

export class EpaymentAuthorize {
    ePaymentCode: number;
    tokenNo: number;
    billTypes: string;
    totalBills: number;
    totalPayment: number;
    grantTotalTrans: number;
    grantTotalPayment: number;
    payByBank: string;
    cardexno: string;
    refNo: string;
    billregno: string;
    tokenno: string;
    billgrossamount: string;
    billrefno: string;
    billamount: string;
    billdate: string;
    ddono: string;
    ddoName: string;
    mhead: string;
    paybyDate: string;
    payBy: string;
}
export class EpaymentAuthorizeDDo {
    ePaymentCode: number;
    tokenNo: number;
    billTypes: string;
    totalBills: number;
    totalPayment: number;
    grantTotalTrans: number;
    grantTotalPayment: number;
    billRegNo: string;
    mhead: string;
    paybyDate: string;
    billrefno: string;
    billDate: string;
    billGrossAmount: string;
    billAmount: string;
    epaymentcode: string;
}

export class DispathOfCounter {
    refNo: string;
    regNo: string;
    tokenNo: string;
    party: string;
    chequeno: string;
    majorHead: string;
    ddoNo: string;
    cardexNo: string;
    billAmount: string;
    billGrossAmount: string;
    cheque: string;
    chequeePayment: string;
    partyName: string;
    billdate: string;
    inwardDate: string;
    ddoName: string;
    billcat: string;
    billtype: string;
    status: string;
}

export class AuditorMaping {
    billRefNo: string;
    tokenno: string;
    mhead: string;
    cardexNo: string;
    billregno: string;
    billAmount: string;
    billType: string;
    billdate: string;
    ddoName: string;
    officers: string;
    authiorName: string;
    section_s: string;
}

export class AuditorMapingA {
    mhead: string;
    cardexNo: string;
    billType: string;
    officers: string;
    section_s: string;
}

export class ApproveReject {

    billRefNo: string;
    tokenNo: string;
    mhead: string;
    cardexNo: string;
    billRegNo: string;
    billAmount: string;
    billGrossAmount: string;
    billType: string;
    billDate: string;
    ddoName: string;
    billCat: string;
    authiorName: string;
    district: string;
    ddoNo: string;
    partyName: string;
    approverName: string;
    vitocode: string;
    inwardDate: string;
    status: string;
}
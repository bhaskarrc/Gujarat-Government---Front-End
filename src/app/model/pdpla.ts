
export class ListValue {
    value: string;
    viewValue: string;
}
export class BrwoseData {
    name: string;
    file: string;
    uploadedBy: string;
}

export class STTable {
    value: string;
    viewValue: string;
    tValue: string;
    stValue: string;
    dValue: string;
}


export class BankTable {
    value: string;
    viewValue: string;
    tValue: string;
    bValue: string;
    dValue: string;

}
export class AllTable {
    value: string;
    viewValue: string;
    tValue: string;
    ddoValue: string;
    ddoDiffValue: string;
    agValue: string;
    agDiffValue: string;
    bValue: string;
    bDiffValue: string;
    stValue: string;
    stDiffValue: string;
}

export class DDOTable {
    value: string;
    viewValue: string;
    tValue: string;
    ddoValue: string;
    dValue: string;
}


export class Ageable {
    value: string;
    viewValue: string;
    tValue: string;
    agValue: string;
    dValue: string;
}

export class ChequePrint {
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

export class ChequePrintingTable {
    chequeNo: string;
    adviceNo: string;
    adviceDate: string;
    adviceAmt: string;
    chequeAmt: string;
    partyName: string;

}
export class AdviceAuditor {
    checked: Boolean;
    chequeDate: string;
    chequeNo: string;
    chequAmt: string;
    partyName: string;
    chequeTotal: string;

}
export class EpayTable {
    checked: Boolean;
    partyName: string;
    bankAcNo: string;
    epayDate: string;
    epayTotal: string;
    advType: string;

}
export class DetailPostingDate {
    checked: Boolean;
    classOfEXp: string;
    fund: string;
    typeExp: string;
    budgetType: string;
    mjrHead: string;
    submjrHead: string;
    minorHead: string;
    subHead: string;
    detailHead: string;
    objectHead: string;
    eapAmt: string;
    headwise: string;
    acBal: string;
    expanditure: string;

}

export class PDPLAServiceDate {
    adviceNo: string;
    pdplaAccNo: string;
    officeName: string;
    cardexNo: string;
    virtualTokenNo: string;
    adviceAmount: string;
    adviceDate: string;

}


export interface ReceiptDetails {
    edpCode: string;
    description: string;
    dedType: string;
    majorHead: string;
    subMajorHead: string;
    minerHead: string;
    subHead: string;
    amount: string;
}

export interface CheclistEpay {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}


// e-payment type table

export interface Epaymenttype {
    payeeName: string;
    accountNo: number;
    ifscCode: string;
    amount: string;
}

// Grant in add bill table
export interface GrantAddbillNo {
    gpfAcno: string;
    amt: string;
}

export interface Expanditure {
    budgetCode: string;
    description: string;
    edpCode: string;
    amountExp: string;
}

// recovery data
export interface RecoveryData {
    budgetCode: string;
    description: string;
    edpCode: string;
    amount: string;
}

// Cheque Type table

export interface Checktype {
    checkType: string;
    partyName: string;
    accountNo: string;
    adress: string;
    checkAmount: string;
}

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}


export interface ReceiptDetails {
    edpCode: string;
    description: string;
    dedType: string;
    majorHead: string;
    subMajorHead: string;
    minerHead: string;
    subHead: string;
    amount: string;
}

export interface AcceptElementDate {
    bName: string;
    branchCode: string;
    sDate: string;
    challan: string;
    cType: string;
    amount: string;
    details: string;

}
export interface RecievedPayment {
    sDate: string;
    cNo: string;
    amt: string;
    pName: string;
    cDate: string;
    advNo: string;
    paidDate: string;
    pdplaAccNo: string;
    officeName: string;
}
export interface ReceiveReciept {
    cinNo: string;
    tDate: string;
    sDate: string;
    pName: string;
    mHead: string;
    smHead: string;
    minorHead: string;
    sHead: string;
    cType: string;
    amt: string;
    bCode: string;
    bankName: string;
    branchCode: string;
    pdplaAccNo: string;
    officeName: string;
}
export class PDPLACarex {
    adviceNo: string;
    pdplaAccNo: string;
    officeName: string;
    cardexNo: string;
    virtualTokenNo: string;
    adviceAmount: string;
    adviceDate: string;
    tokenDate: string;
    depositBranchUser: string;
    signVerify: string;

}

export class PDPLAService {
    adviceNo: string;
    pdplaAccNo: string;
    officeName: string;
    cardexNo: string;
    virtualTokenNo: string;
    adviceAmount: string;
    adviceDate: string;
    tokenDate: string;


}
export class PDPLAInward {
    adviceNo: string;
    pdplaAccNo: string;
    officeName: string;
    cardexNo: string;
    virtualTokenNo: string;
    adviceAmount: string;
    adviceDate: string;
    depositBranchUser: string;

}

export class CreateAcList {
    reqNo: string;
    refDate: string;
    officeName: string;
    pdacNo: string;
    pdacName: string;
    mjrHead: string;
    submjrHead: string;
    minorHead: string;
    subHead: string;
    cardexNo: string;
    ddoNo: string;
    disName: string;
    pendingWith: string;
    status: string;
    lyingWith: string;
    department: string;
    pdplaType: string;
}

export class CreateAcListC {
    reqNo: string;
    refDate: string;
    officeName: string;
    pdacNo: string;
    pdacName: string;
    mjrHead: string;
    submjrHead: string;
    minorHead: string;
    subHead: string;
    cardexNo: string;
    ddoNo: string;
    disName: string;
    pendingWith: string;
    status: string;
    lyingWith: string;
    pdplaType: string;
}

export class CreateAcListDDO {
    reqNo: string;
    refDate: string;
    officeName: string;
    mjrHead: string;
    submjrHead: string;
    minorHead: string;
    subHead: string;
    cardexNo: string;
    ddoNo: string;
    pendingWith: string;
    status: string;
    lyingWith: string;
    pdplaType: string;
}

export class CreateAcListAccount {
    reqNo: string;
    refDate: string;
    officeName: string;
    pdacNo: string;
    pdacName: string;
    mjrHead: string;
    submjrHead: string;
    minorHead: string;
    subHead: string;
    cardexNo: string;
    ddoNo: string;
    disName: string;
    pendingWith: string;
    status: string;
    lyingWith: string;
    pdplaType: string;
}

export class ApprovalList {
    pdplaAc: string;
    advice: string;
    entrydt: string;
    dept: string;
    bank: string;
    amt: string;
    deduction: string;
    netAmount: string;
    approved: string;
    approvedDate: string;


}


export class PDPLAInoperative {
    srNo: string;
    pdplaAc: string;
    desc: string;
    lastTrans: string;
    lastBal: string;
    req: string;

}


export class ApprovalListAdvice {

    class: string;
    fund: string;
    expType: string;
    budgetType: string;
    schemeNo: string;
    demandNo: string;
    majorHead: string;
    subMajorHead: string;
    minorHead: string;
    subHead: string;
    detailHead: string;
    objectHead: string;
    amt: string;
    availAmount: string;


}

export class TreasuryVerification {

    srNo: string;
    advNo: string;
    entryDate: string;
    department: string;
    bank: string;
    totalAmt: string;
    totalDed: string;
    netAmt: string;
    aproved: string;
    aprovedDate: string;
    printDetails: string;



}

export class Aarile {

    srNo: string;
    date: string;
    oppBal: string;
    recDep: string;
    total: string;
    with: string;
    cloBal: string;
    proBal: string;
}

export class PDPLAServiced {
    adviceNo: string;
    pdplaAccNo: string;
    officeName: string;
    cardexNo: string;
    virtualTokenNo: string;
    adviceAmount: string;
    adviceDate: string;
    status: string;
    lyingWith: string;


}


export class CreateasplitList {

    ddoNo: string;
    cardexNo: string;
    ofc: string;
    ddoCode: string;
    location: string;

}

export class CreateAcListCArryForward {
    pdplazAcNo: string;
    pdplaOfcName: string;
    mjrHead: string;
    subMjrHead: string;
    minrHead: string;
    subHead: string;
    acStartDate: string;
    acEndDate: string;
    curBal: string;
    shareAc: string;
    ddoNo: string;
    cardexNo: string;


}
export class ChallanPostingView {
    pdplaAcNo: string;
    payiName: string;
    challanNo: string;
    challanDate: string;
    camt: string;
    transferType: string;
    intTc: string;
    pdplaAcNmae: string;

}

export class ChequeView {
    payiName: string;
    checkNo: string;
    pdplaAc: string;
    pdplaAcName: string;
    chequDate: string;
    camt: string;
    transferType: string;
    intTc: string;
}
export class CreateasplitListCheque {
    srNo: string;
    payiName: string;
    majHead: string;
    pdplaAc: string;
    pdplaAcNmae: string;
    checkNo: string;
    chequDate: string;
    camt: string;
    tc: string;

}

export class CreateasplitListChallan {
    srNo: string;
    payiName: string;
    majHead: string;
    pdplaAc: string;
    pdplaAcNmae: string;
    challanNO: string;
    challanDate: string;
    challanAmt: string;
    tc: string;

}


export class CreateasplitListSplit {
    Code: string;
    srNo: string;
    paryName: string;
    department: string;
    entryDate: string;

}

export class CreateAcListRefund {
    reqNo: string;
    refDate: string;
    pdplaOfcName: string;
    pdacNo: string;
    pdacName: string;
    terName: string;
    disName: string;
    toName: string;
    closBal: string;
    remBal: string;
    reaFundAmt: string;
    cardexNo: string;
    ddoNo: string;
    pendingWith: string;
    status: string;
    headChargeable: string;

}
export class CreateAcListAccountDAte {
    reqNo: string;
    refDate: string;
    pdplaOfcName: string;
    pdacNo: string;
    pdacName: string;
    lastTranDate: string;
    closBal: string;
    carNo: string;
    ddoNo: string;
    disName: string;
    toName: string;
    pendingWith: string;
    status: string;
    headChargeable: string;

}

export class CreateAcListAccountAg {
    reqNo: string;
    refDate: string;
    officeName: string;
    pdacNo: string;
    pdacName: string;
    mjrHead: string;
    submjrHead: string;
    minorHead: string;
    subHead: string;
    cardexNo: string;
    ddoNo: string;
    department: string;
    disName: string;
    pendingWith: string;
    status: string;
    lyingWith: string;
    pdplaType: string;
}


export class CreateAcListING {
    reqNo: string;
    refDate: string;
    officeName: string;
    mjrHead: string;
    submjrHead: string;
    minorHead: string;
    subHead: string;
    cardexNo: string;
    ddoNo: string;
    pendingWith: string;
    status: string;
    lyingWith: string;

}
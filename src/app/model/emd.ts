export class DialogData {

}


export interface ElementEmd {
    cNo: string | '';
    pName: string | '';
    dept: string | '';
    cdate: string | '';
    amt: string | '';

}

export class AcceptChallan {
    receiptNo: string;
    bankDate: string;
    depositorName: string;
    majorHead: string;
    amount: string;
    challanType: string;
    bankCode: string;
    branchCode: string;
    tinNo: string;
}

export class AcceptanceCriteria {
    uniqueNo: string;
    tokenNo: string;
    dist: string;
    toSto: string;
    majorHead: string;
    billType: string;
    ddo: string;
    cardex: string;
    office: string;
    billdate: string;
    grossAmount: string;
    netAmount: string;
}

export class AllPostedChallan {
    srNo: string;
    code: string;
    ddoNo: string;
    cardex: string;
    office: string;
    partyName: string;
    department: string;
    entryDate: string;
    majorHead: string;
    amount: string;
}

export class AuditBillsOne {
    position: string;
    coded: string;
    srNo: string;
    challanAmount: string;
    party: string;
}

export class AuditBillsAuditor {
    coded: string;
    challanNo: string;
    refNo: string;
    majorHead: string;
    party: string;
    department: string;
    challandate: string;
    challanAmount: string;
    paidAmount: string;
    remainingAmount: string;
    tNo: string;
    mHead: string;
    billType: string;
    cardex: string;
    ddo: string;
    bDate: string;
    bAmount: string;
}

export class BalanceTransfer {
    srNumber: string;
    cCode: string;
    pName: string;
    depart: string;
    cDate: string;
    cAmount: string;
    mHead: string;
    transferFromDdo: number;
    transferFromCardex: number;
    transferFromOfficeName: string;
    transferToDdo: number;
    transferToCardex: number;
    transferToofficeName: string;
    stat: string;
    act: string;
}

export class BalanceTransferStoToTo {
    challanNo: string;
    code: string;
    pName: string;
    depart: string;
    chDate: string;
    majorHead: string;
    ddoNo: string;
    cardexNo: string;
    offName: string;
    amount: string;
}

export class ChallanDetailPosting {
    receiptNo: string;
    bankDate: string;
    depositorName: string;
    majorHead: string;
    amount: string;
    challanType: string;
    bankCode: string;
    branchCode: string;
    tinNo: string;
}

export class EmdChallanPostingMaster {
    emdCode: string;
    challan: string;
    amt: string;
}

export class EmdDepositTransfer {
    challanNo: string;
    code: string;
    pName: string;
    depart: string;
    edate: string;
    majorHead: string;
    ddoNo: string;
    cardexNo: string;
    offName: string;
    amount: string;
    transferTo: string;
    ddoOfficeName: string;
}

export class EmdMasterList {
    emdCode: string;
    mHead: string;
    subMhead: string;
    minHead: string;
    sHead: string;
    lapse: string;
    location: string;
}

export class EmdRecordRoom {
    pdate: string;
    srNo: string;
    code: string;
    ecode: string;
    vNo: string;
    type: string;
    tNo: string;
    majorHead: string;
    tDate: string;
    pDate: string;
    amount: string;
    iTC: string;
}

export class EmdRecordRoomAllPosted {
    srNo: string;
    code: string;
    pName: string;
    depart: string;
    edate: string;
    majorHead: string;
    amount: string;
}

export class PostedChallanList {
    srNo: string;
    code: string;
    ddoNo: string;
    cardex: string;
    office: string;
    partyName: string;
    department: string;
    entryDate: string;
    majorHead: string;
    amount: string;
}

export class UnpostedVoucherList {
    billRefNo: string;
    tokenNo: string;
    voucherDate: string;
    inwardedDate: string;
    btype: string;
    cardexNo: string;
    majorHead: string;
    amount: string;
}
export class PostedChallanListHa {
    srNo: string;
    code: string;
    ddo: string;
    cardex: string;
    office: string;
    partyName: string;
    department: string;
    entryDate: string;
    majorHead: string;
    amount: string;
}

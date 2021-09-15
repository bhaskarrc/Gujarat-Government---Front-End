export class NewItemConsolidation {
    finYear: number;
    departmentCode?: string;
    estimationFrom: string;
    estimateFor: string;
    demandCode?: string;
    revenueCapital?: string;
    majorHeadCode?: string;
    subMajorHeadCode?: string;
    minorHeadCode?: string;
    referenceNumber?: number;
}


export class NewItemConsolidationList {
    position: number;
    finYear: string;
    demand: string;
    subMajorHead: string;
    minorHead: string;
    subHead: string;
    detailHead: string;
    chargedVoted: string;
    css: string;
    formTypeName: string;
    estimateFrom: string;
    majorHead: string;
    itemName: string;
    itemCategory: string;
    requestReceived: number;
}


export class DDOList {
    checkbox: Boolean;
    ddoName: string;
    itemCategory: string;
    itemName: string;
    writeUpEn: string;
    ddoProposedAmt: number | string;
    ddoReferenceNo: string;
    ddoTransactionDate: string;
    status: string;
}

export class FormF {
    objecthead: string;
    recurrentAmount: number;
    nonRecurrentAmount: number;
    budgetEstimateNextYear: number;
    ultimateAnnualRecurrentAmount: number;
    amountRecurrentHOD: number;
    amountNonRecurrentHOD: number;
    amountAnnualRecurrentHOD: number;
    amountNextYearHOD: number;
    remarks: string;
    isBreakup: Boolean;
}


export class FormCStmt {
    objecthead: string;
    recurrentAmount: number;
    nonRecurrentAmount: number;
    budgetEstimateNextYear: number;
    ultimateAnnualRecurrentAmount: number;
    remarks: string;
    isBreakup: Boolean;
}

export class ObjectHeadBreakup {
    objecthead: string;
    recurrentAmount: number;
    nonRecurrentAmount: number;
    budgetEstimateNextYear: number;
    ultimateAnnualRecurrentAmount: number;
    remarks: string;
}

export class District {
    id: number;
    districtName: string;
    expendature: number;
    talukaExpendature: number;
    gramExpendature: number;
}
export class Attachment {
    attachmentType: string;
    fileName: string;
}
export class NewItemMerge {
    actionCode: string;
    userCode: string;
    branchName: string;
    additionalText: string;
}

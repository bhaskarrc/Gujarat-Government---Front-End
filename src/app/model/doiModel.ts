
export class ListValue {
    value: string;
    viewValue: string;
}
export class BrwoseData {
    name: string;
    file: string;
    uploadedBy: string;
}
export class AttachmentData {
    attachmentType: undefined | string;
    name: undefined | string;
    file: undefined | string;
}

export class MasterEntry {
    schemeName: string;
    srNo: string;
    schemeNameGuj: string;
    schemeShortname: string;
    nodalOffice: string;
    claimAmt: string;
    createdOn: string;
    updatedOn: string;
    status: Boolean;
}

export class JPAPendingApproval {
    srno: string;
    claimId: string;
    policyNo: string;
    scheme: string;
    DecPersonName: string;
    applicantName: string;
    district: string;
    taluka: string;
    claimEnterDate: string;
    status: string;
    action: string;
}

export class JPAPendingApprovalListing {
    srno: string;
    claimId: string;
    policyNo: string;
    scheme: string;
    DecPersonName: string;
    applicantName: string;
    district: string;
    taluka: string;
    claimEnterDate: string;
    status: string;
    remarks: string;
    action: string;
}

export class JPAREJECTION {
    srno: string;
    claimId: string;
    policyNo: string;
    scheme: string;
    DecPersonName: string;
    applicantName: string;
    district: string;
    taluka: string;
    claimEnterDate: string;
    status: string;
    remarks: string;
    sendOn: string;
    fieldName: string;
    sendBy: string;
    action: string;
}

export class JPAPendingSendForPayment {
    srno: string;
    claimId: string;
    policyNo: string;
    scheme: string;
    DecPersonName: string;
    applicantName: string;
    district: string;
    taluka: string;
    inwardNo: string;
    status: string;
    remarks: string;
    action: string;
}

export class BankBranch {
    srno: string;
    bankName: string;
    branchName: string;
    ifscCode: string;
    district: string;
    taluka: string;
    action: string;
}

export class MasterPolicy {
    srno: string;
    plocyNo: string;
    scheme: string;
    startDate: string;
    endDate: string;
    numberofBenificiaries: string;
    premiumAmount: string;
    death: string;
    fiftyDiablity: string;
    hundredDisablity: string;
    action: string;
}

export class JPALEGAL {
    srno: string;
    district: string;
    inwardNo: string;
    inwardDate: string;
    courtCaseNo: string;
    courtCaseDate: string;
    courtDetail: string;
    claimId: string;
    ploicyNo: string;
    scheme: string;
    applicantName: string;
    nameofDeceasedPerson: string;
    detailofQuery: string;
    dateOfAci: string;
    courtDecision: string;
    status: string;
    action: string;
}

export class DOcumentElement {
    scheme: string;
    policy: string;
    document: string;
    requirement: string;
}

export class DocumentCasu {
    causeName: string;
    document: string;
    requirement: string;
}

export class DocumentRequirement {
    document: string;
    requirement: string;
}

export class JPLLegalReq {
    srno: string;
    district: string;
    courtCaseNo: string;
    courtCaseDate: string;
    courtDetail: string;
    claimId: string;
    ploicyNo: string;
    scheme: string;
    applicantName: string;
    detailofQuery: string;
    nameofDeceasedPerson: string;
    dateOfAci: string;
    courtDecision: string;
    status: string;
    action: string;
}

export class CashBook {
    date: string;
    srNoOdSubVoucherNo: string;
    paidTo: string;
    receiptToBeCredited: string;
    payAndAllowance: string;
    advance: string;
    travelAllowance: string;
    total: string;
    permanentAdvance: string;
    amtDrawn: string;
    misc: string;
    majorHead: string;
    subMajorHead: string;
    minorHead: string;
    subHead: string;
}

export class CashBookReciver {
    rdate: string;
    srNoOfBill: string;
    receivedFrom: string;
    chequeNo: string;
    receiptToBeCredited: string;
    payAndAllowance: string;
    advance: string;
    travelAllowance: string;
    permanentAdvance: string;
    amtDrawn: string;
    misc: string;
    total: string;
    majorHead: string;
    subMajorHead: string;
    minorHead: string;
    subHead: string;
    ddNo: string;
}

export class LEgalEntryRequest {
    srno: string;
    district: string;
    courtCaseNo: string;
    courtCaseDate: string;
    courtDetail: string;
    claimId: string;
    ploicyNo: string;
    scheme: string;
    applicantName: string;
    detailofQuery: string;
    nameofDeceasedPerson: string;
    dateOfAci: string;
    courtDecision: string;
    status: string;
    action: string;
}

export class CancelIssuedChequeBook {
    financialYear: string;
    refNo: string;
    refDate: Date;
    status: string;
    lyingWith: string;
    edit: boolean;
}

export class CtsAccountMapping {
    financialYear: string;
    refNo: string;
    refDate: Date;
    ddoNo: string;
    cardexNo: string;
    status: string;
    ctsChequeType: string;
    minStock: string;
    edit: boolean;
}

export class CtsAccountMappingListing {
    financialYear: string;
    refNo: string;
    refDate: Date;
    ddoNo: string;
    cardexNo: string;
    status: string;
    lyingWith: string;
    edit: boolean;
}
export class RegularIndent {
    financialYear: string;
    refNo: string;
    refDate: Date;
    ddoNo: string;
    cardexNo: string;
    status: string;
    department: string;
    lyingWith: string;
    edit: boolean;
}

export class YearlyIndent {
    department: string;
    chequeFormat: string;
    chequeLeaves: string;
    quantity: string;
    chequeType: string;
    treasuryOfficerName: string;
    districtTreasuryAddress: string;
    contactNo: string;
    emailId: string;
    edit: boolean;
}

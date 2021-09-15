export class PseRegistrationListing {
    pseName: string;
    pseType: string;
    registrationNo: string;
    registrationYear: string;
    district: string;
    village: string;
}

export class FinancialDetailsListing {
    referenceNo: string;
    referenceDate: Date;
    nameOfCompany: string;
    district: string;
    financialYear: string;
}

export class LoanDetailsListing {
    referenceNo: string;
    referenceDate: Date;
    nameOfEnterprise: string;
    purposeOfLoan: string;
    financialYear: string;
}

export class EmploymentDetailsListing {
    referenceNo: string;
    referenceDate: Date;
    psuName: string;
    financialYear: string;
}

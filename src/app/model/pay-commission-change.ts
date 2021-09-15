export class PayCommissionChangeForm {
    empNumber: number | '';
    payCommision: string | '';
    designation: string | '';
    class: string | '';
    payCommissionEffeDate: Date | '';
    nextIncrement: string | '';
}


export class PayCommissionDataModel {
    employeeNumber: number | '';
    employeeName: string | '';
    office: string | '';
    dateOfJoining: string | '';
    payScale?: string | '';
    basicPay?: string;
    payBand: string | '';
    payBandValue?: number | '';
    gradePay: string;
    basicPaySix?: string;
    effectiveDate: string | '';
    nextIncrementDate: string | '';
    remarks: string | '';
    payLevel?: string;
    cellId?: string;
    basicPaySeven?: string;
    reasonChangeEffectiveDate: string;
}



// export class PayCommissionChangeSevenModel { 
//   // employeeNumber:number |''; 
//   // employeeName:string | '';
//   // office:string | '';
//   // dateOfJoining:string | '';
//   // payBand: number |''; 
//   // payBandValue:number |''; 
//   // gradePay: number |''; 
//   // basicPay: number |'';  
//   // payLevelSeven:string | '';
//   // cellIdSeven: number |'';   

//   // eftDate:string | '';
//   // nextIncrement: string | '';
//   // remarks: string | '';
// }



export class ExcludedEmployeePayCommissionSevenModel {
    employeeNumber: number | '';
    employeeName: string | '';
    officeName: string | '';
    dateOfJoining: string | '';
    epayBand: string | '';
    gradePay: number | '';
    PaySevenValue: number | '';
    basicPay: number | '';
    reasonForExclusion: string | '';
    remarks: string | '';
    selected: boolean | '';
}

export class ExcludedEmployeePayCommissionSixModel {
    employeeNumber: number | '';
    employeeName: string | '';
    officeName: string | '';
    dateOfJoining: string | '';
    epayBand: string | '';
    basicPay: number | '';
    reasonForExclusion: string | '';
    remarks: string | '';
    selected: boolean | '';
}



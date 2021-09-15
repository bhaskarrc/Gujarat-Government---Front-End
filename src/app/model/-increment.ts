export class IncrementFormControl {
  officeName: String;
  financialYear: String;
  incrementOrderNo: String;
  incrementFor: String;
  incrementType: String;
  Class: String;
  designation: String;
  incrementEffectiveDate: String;
  cpfGpfPpanNo: String;
  employeeNumber: String;
}

export class EmployeeEligibleTable {
  employeeNumber: Number;
  employeeName: String;
  cpfgpfno: String | Number;
  class: String;
  designation: String;
  dateOfJoining: String;
  payBand?: String;
  payBandValue?: String | Number;
  gradePay?: String;
  basicPay: String;
  effectiveDate: String;
  nextIncrementDate: String;
  payBand2?: String;
  payBandValue2?: String | Number;
  gradePay2?: String;
  basicPay2: String;
  differenceAmount: String;
  fromDate: String;
  toDate: String;
  fromDate2: String;
  toDate2: String;
  remarks: String;
  payLevelId?: String;
  cellId1?: String;
  payLevel?: String;
  cellId2?: String;
}
export class ExcludeEmployeeList {
  employeeNumber: Number;
  employeeName: String;
  class: String;
  designation: String;
  dateOfJoining: String;
  payBand?: String;
  payBandValue?: String;
  gradePay?: String;
  basicPay: String;
  differenceAmount?: String;
  reasonForExclusion: String;
  payLevel?: String;
  cellId?: String;
  frmDate?: String;
  toDate?: String;
  nextIncrementDate?: String;
  effect?: String;
}

export class Summary {
  class: String;
  includeCount: String;
  excludeCount: String;
  totalCount: String;
}


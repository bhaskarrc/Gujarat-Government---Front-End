
export class ListValue {
  value: string;
  viewValue: string;
}
export class BrwoseData {
  name: string;
  file: string;
  uploadedBy: string;
}

export class Attachment {
  name: string;
  file: string;
  attachment: string;
}
export class TransferEntryList {
  checkbox: Boolean;
  trasnferEntryDate: string;
  teNo: string;
  fromMajorHead: string;
  toMajorHead: string;
  teTypeFrom: string;
  teTypeTo: string;
  teAmount: string;
}
export class BillsReturnedByVerifier {
  checkbox: Boolean;
  billRegNo: string;
  date: string;
  billType: string;
  billCategory: string;
  majorHead: string;
  billNetValue: string;
  ddoNo: string;
  ddoName: string;
  TypeBill: String;
  status: string;
}

export class LiasonOfficeDataEntry {
  billAmount: string;
  billtypes: string;
  demand: string;
  cardexNo: string;
  voucherDate: string;
  voucherNo: string;
  majorHead: string;
  tcbBll: string;
  damand: string;
  partyName: string;
  chequeNo: string;
  chequeDate: string;
  chequeAmount: string;
}

export class ExpenditureList {
  edpCode: string;
  amount: string;
}

export class ChallanDetails {
  insertSubMajorhead: string;
  insertMajorhead: string;
  insertSubHead: string;
  amount: string;
}

export class LiasonOfficerList {
  billAmount: string;
  billtypes: string;
  demand: string;
  cardexNo: string;
  voucherDate: string;
  voucherNo: string;
  majorHead: string;
  tcbBll: string;
  damand: string;
  PayeeName: string;
  chequeNo: string;
  chequeDate: string;
  chequeAmount: string;
  clearDate: string;
}

export class CreateMLA {
  mlaNo: string;
  assemblyNo: string;
  mlaName: string;
  department: string;
  designation: string;
  majorHead: string;
  difference: string;
}

export class FlyLeafRegister {
  tokenNo: string;
  billDate: string;
  billRefNo: string;
  majorHead: string;
  billType: string;
  cardexNo: string;
  ddo: string;
  billInward: string;
  billAmount: string;
  category: string;
}

export class VoucherDistribution {
  majorHead: string;
  voucherNumber: string;
  totalAmount: string;
  distributeTo: string;
}

export class VoucherDetails {
  billRefNo: string;
  tokenNumber: string;
  voucherDate: string;
  inwardedDate: string;
  bType: string;
  cardexNumber: string;
  majorHead: string;
  netAmount: string;
}


export interface SloDept {
  srNo: number;
  department: string;
  cardexNo: string;
  schemeNo: string;
  demand: string;
  majorHead: string;
  subMajorHead: string;
  minorHead: string;
  subHead: string;
  detailHead: string;
  objectClass: string;
  officeCategory: string;
  minister: string;
}

export interface PeriodicElement {
  position: number;
  oderNo: string;
  type: string;
  designation: string;
  sanction: string;
  parentRec: string;
  pay: string;
  payBand: string;
  gradePay: string;
  startDate: string;
  endDate: string;
}

export class PostMasterE {
  type: string;
  designation: string;
  sanction: string;
  parentRec: string;
  pay: string;
  payBand: string;
  gradePay: string;
  startDate: string;
  endDate: string;
}

export class PostedChallanList {
  branchCode: string;
  salesTextNo: string;
  bankDate: string;
  partyName: string;
  majorHead: string;
  amount: string;
  revenue: string;
}

export class PostAudit {
  voucherNumber: string;
  voucherDate: string;
  billRefNo: string;
  tokenNo: string;
  billAmount: string;
  billType: string;
  cardexNumber: string;
  officeName: string;
  majorHead: string;
  billCategory: string;
  postAuditDate: string;
}

export class PrintBillMLA {
  billControlNumber: string;
  billDate: string;
  mlaNo: string;
  mlaName: string;
  majorHead: string;
  billNetAmount: string;
  mlaDesignation: string;
  mlaDepartment: string;
  billStatus: string;
  billMonth: string;
  billType: string;
}

export class BillCreationForMla {
  mlaNo: string;
  assemblyNo: string;
  mlaName: string;
  department: string;
  designation: string;
  majorHead: string;
  deduction: string;
  expinture: string;
  netamount: string;
}

export class CancelNewCheque {
  adviceNo1: string;
  adviceNo2: string;
  adviceNo3: string;
  chequeOrEPayment11: string;
  chequeOrEPayment12: string;
  chequeOrEPayment13: string;
  amount11: string;
  amount12: string;
  amount13: string;
  party11: string;
  party12: string;
  party13: string;
  fromDate11: string;
  fromDate12: string;
  fromDate13: string;
  toDate11: string;
  toDate12: string;
  toDate13: string;
  token: string;
  chequeOrEPayment21: string;
  chequeOrEPayment22: string;
  chequeOrEPayment23: string;
  amount21: string;
  amount22: string;
  amount23: string;
  amount24: string;
  party21: string;
  party22: string;
  party23: string;
  fromDate21: string;
  fromDate22: string;
  fromDate23: string;
  toDate21: string;
  toDate22: string;
  toDate23: string;
}

export class MLADesignationList {
  designationName: string;
  deapartment: string;
  budgetDetail: string;
}

export class VoucherList {
  voucherDate: string;
  billRefNo: string;
  tokenNumber: string;
  inwardedDate: string;
  bType: string;
  cardexNumber: string;
  majorHead: string;
  netAmount: string;
  postedBy: string;
}

export class FreezAccount {
  mjrHead: string;
  descr: string;
  lockDate: string;
}

export class JottingData {
  scrollDate: string;
  mjrHead: string;
  amt: string;
  tcAmt: string;
  pageNo: string;
  noDoc: string;
}

export class ChequeReconciliation {
  adviceNo: string;
  chkNo: string;
  paidDate: string;
  chkAmount: string;
}

export class BankDetails {
  srno: string;
  bankName: string;
  receipt: string;
  payment: string;
  rdb: string;
  desc: string;
}
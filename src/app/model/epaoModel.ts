
export class ListValue {
  value: string;
  viewValue: string;
}
export class BrwoseData {
  name: string;
  file: string;
  uploadedBy: string;
}

export class BranchHamApping {
  branchName: string;
  branch: string;
}

export class BranchMapping {
  branchList: string;
}

export class SADAMapping {
  saUser: string;
}

export class BankRateMaster {
  effectivFromDate: string;
  effectivToDate: string;
  bankRate: string;
  addRated: string;
  penRated: string;
  status: string;
}

export class BankRateDialog {
  refNo: string;
  refDate: string;
  status: string;
  penRated: string;
  addRated: string;
  bankRate: string;
  effectivToDate: string | number | Date;
  effectivFromDate: string | number | Date;
}
export class BlokPinListing {
  status: string;
  cpIn: string;
  refDate: string;
  refNo: string;
  amount: string;
}

export class LoadBalancerAOListing {
  bankName: string;
  noOfChallan: string;
  amount: string;
  totalChallan: string;
  totalAmount: string;
  branch: string;
  saDA: string;
  fromSaDA: string;
  toSaDA: string;
  challanAmount: string;
  bank: string;
}

export class LoadBalancerAO {
  bankName: string;
  saDa: string;
  noOfChallan: string;
  amount: string;
  totalChallan: string;
  totalAmount: string;
  branch: string;
}

export class FileSummary {
  fileDate: string;
  fileType: string;
  totalRecords: string;
  totalFiles: string;
  sgstAmt: string;
  igstAmt: string;
  chstAmt: string;
  cessAmt: string;
  totalAmt: string;
}

export class CInCpinStatus {
  cpin: string;
  cin: string;
  status: string;
  cpIn: string;
  fileNo: string;
  amountGovt: string;
  fileDate: string;
  creditDate: string;
  transStatus: string;
}

export class PenaltyAmount {
  refNo: string;
  refDate: string;
  mor: string;
  bank: string;
  claimAmt: string;
}

export class PanaltyAmountReceive {
  year: string;
  month: string;
  claimAmt: string;
  oldAmt: string;
  remainingAmt: string;
  currentAmt: string;
}

export class BlockCpin {
  cpin: string;
  cin: string;
  status: string;
  cpIn: string;
  fileNo: string;
  amountGovt: string;
  fileDate: string;
}

export class GenerateMoe {
  status: string;
  gstIN: string;
  mOEAmount: string;
  cin: string;
  mOEType: string;
  partyName: string;
  rbiAmount: string;
  gstAmount: string;
  bank: string;
  govCreditDate: string;
  paymentDate: string;
  remarks: string;
}
export class ManualEntry {
  majorHead: string;
  subMajorHead: string;
  minorHead: string;
  subHead: string;
  detailsHead: string;
  objectHead: string;
  amt: string | number;
}
export class ManualEntryListing {
  tNo: string;
  cIn: string;
  amt: string;
  eDate: string;
  vDate: string;
  type: string;
}

export class ChallanDistributionListing {
  bankName: string;
  noOfChallan: string;
  amount: string;
  branch: string;
  saDA: string;
  challanAmount: string;
  scrollName: string;
}
export class ChallanDistribution {
  auditor: string;
  bank: string;
  totalChallan: string;
  availableChallan: string;
  toBeDistributed: string;
  totalToBeDistributed: string;
}
export class ScrollDisListing {
  refDate: string;
  refNo: string;
  scrollName: string;
  noOfChallan: string;
  amount: string;
  branch: string;
  status: string;
}

export class ScrollDistribution {
  scrollNo: string;
  noOfChallan: string;
  amount: string;
}
export class GSTFileAccountingListing {
  fileName: string;
  noOfChallan: string;
  amount: string;
  date: string;
}
export class GSTFileAccounting {
  fileName: string;
  noOfChallan: string;
  amount: string;
}
export class AcountScreen {
  status: string;
  cin: string;
  amount: string;
  partyName: string;
  govCreditDate: string;
  scrollDate: string;
  paymentDate: string;
  remarks: string;
}

export class RBIDetails {
  status: string;
  cin: string;
  amount: string;
  partyName: string;
  govCreditDate: string;
  scrollDate: string;
  paymentDate: string;
  remarks: string;
  type: string;
  bank: string;
  scrollNo: string;
}
export class GSTDetails {
  gstin: string;
  cin: string;
  partyName: string;
  paymentDate: string;
  sgstFees: string;
  sgsttac: string;
  sgstInterest: string;
  sgstOthers: string;
  sgstPenalty: string;
  sgstTotal: string;
}
export class AccountingEntries {
  matched: string;
  moeType: string;
  moeId: string;
  moeStatus: string;
  debitHeaad: string;
  creditHead: string;
  amount: string;
}
export class AccountingEn {
  majorHead: string;
  subMajorHead: string;
  minorHead: string;
  subhead: string;
  detailHead: string;
  amount: string;
  majorHead1: string;
  subMajorHead1: string;
  minorHead1: string;
  subhead1: string;
  detailHead1: string;
  amount1: string;
  description: string;
  description1: string;
}

export class ModifiedTable {
  desc: string;
  tax: string;
  interest: string;
  fees: string;
  penalty: string;
  others: string;
  rat: string;
  total: string;
}

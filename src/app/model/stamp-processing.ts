// Stamp Indent Preparation

export interface ElementStIndent {
  checkbox: boolean;
  deno: string | '';
  stampInEachSheet: string | '';
  stock: string | '';
  supply: string | '';
  qtySold: string | '';
  closeBal: string | '';
  qtyDue: string | '';
  qtyReq: string | '';
  amt: string | '';
  qtyRequired: string | '';
  qtyApprScr: string | '';
}
export interface ElementStIndentView {
  checkbox: boolean;
  denominationValue: string | '';
  stock: string | '';
  denominationCode: string | '';
  qtySold: string | '';
  closeBal: string | '';
  qtyDue: string | '';
  qtyReq: string | '';
  qtyApp: string | '';
  qtyRequired: string | '';
  stampInEachSheet: string | '';
}
export interface ElementStIndentViewNew {
  checkbox: boolean;
  denominationValue: string | '';
  stock: string | '';
  denominationCode: string | '';
  qtySold: string | '';
  closeBal: string | '';
  qtyDue: string | '';
  qtyReq: string | '';
  qtyApp: string | '';
  qtyRequired: string | '';
  qtyApprScr: string | '';
  stampInEachSheet: string | '';
}
export interface ElementFinalStIndent {
  deno: string | '';
  stampInEachSheet: string | '';
  typeOfStamp: string | '';
  stock: string | '';
  supply: string | '';
  qtySold: string | '';
  closeBal: string | '';
  qtyDue: string | '';
  qtyReq: string | '';
  amt: string | '';
  qtyRequired: string | '';
  qtyApprScr: string | '';
}
export interface ElementFinalStIndentView {
  typeOfStamp: string | '';
  denominationValue: string | '';
  stock: string | '';
  denominationCode: string | '';
  supply: string | '';
  qtySold: string | '';
  closeBal: string | '';
  qtyDue: string | '';
  qtyReq: string | '';
  qtyApp: string | '';
  qtyRequired: string | '';
  stampInEachSheet: string | '';
}
export interface ElementFinalStIndentNumberView {
  typeOfStamp: string | '';
  denominationValue: string | '';
  stock: string | '';
  denominationCode: string | '';
  supply: string | '';
  qtySold: string | '';
  closeBal: string | '';
  qtyDue: string | '';
  qtyReq: string | '';
  qtyApp: string | '';
  qtyRequired: string | '';
  qtyApprScr: string | '';
  stampInEachSheet: string | '';
}
export interface ElementFinalStIndentViewNew {
  typeOfStamp: string | '';
  denominationValue: string | '';
  stock: string | '';
  denominationCode: string | '';
  supply: string | '';
  qtySold: string | '';
  closeBal: string | '';
  qtyDue: string | '';
  qtyReq: string | '';
  qtyApp: string | '';
  qtyRequired: string | '';
  qtyApprScr: string | '';
  stampInEachSheet: string | '';
}
export interface ElementStIndentList {
  fYear: string | '';
  iNumber: string | '';
  iDuration: string | '';
  iFor: string | '';
  status: string | '';
}
export interface ElementStIndentTOList {
  fYear: string | '';
  indType: string | '';
  treSubtreOff: string | '';
  iNumber: string | '';
  iDuration: string | '';
  refNo: string | '';
  recFromOn: string | '';
  sentToON: string | '';
  lyingWith: string | '';
  wStatus: string | '';
  status: string | '';
}
// For STO

export interface ElementStIndentSto {
  checkbox: boolean;
  deno: string | '';
  stock: string | '';
  supply: string | '';
  qtySold: string | '';
  closeBal: string | '';
  qtyDue: string | '';
  qtyReq: string | '';
  qtyApp: string | '';
  qtyRequired: string | '';
}
export interface ElementFinalStIndentSto {
  deno: string | '';
  typeOfStamp: string | '';
  stock: string | '';
  supply: string | '';
  qtySold: string | '';
  closeBal: string | '';
  qtyDue: string | '';
  qtyReq: string | '';
  qtyApp: string | '';
  qtyRequired: string | '';
}
// Valuables Master
export interface ValuablesMasterList {

  fYear: string | '';
  catName: string | '';
  subCatName: string | '';
  status: string | '';
}
// Indent Consolidation
export interface ElementIndCon {

  denomination: string | '';
  denominationCode: string | '';
  lastIndentStock: string | '';
  supplyPreviousIndent: string | '';
  quantitySold: string | '';
  currentClosingBalance: string | '';
  dueQuantity: string | '';
  quantityRequired: string | '';
  qtyApprScr: string | '';
  quantityApproved: string | '';
  amount: string | '';
}
export interface ElementIndConEntry {
  treasuryOffice: string | '';
  indentNumber: string | '';
  indentDate: string | '';
  indentType: string | '';
  indentDuration: string | '';
}
export interface ElementIndConList {
  fYear: string | '';
  indNo: string | '';
  indType: string | '';
  cIndentNumber: string | '';
  refNo: string | '';
  recFromOn: string | '';
  sentToON: string | '';
  lyingWith: string | '';
  wStatus: string | '';
  status: string | '';
}
export interface ElementIndConNumberList {
  treSubTre: string | '';
  total: string | '';
  refNo: string | '';
  subDate: string | '';
}
// Stamp Issue Sso to to

export interface ElementSsoToTo {
  typeOfStamp: string | '';
  denominationvalue: string | '';
  availQty: string | '';
  authQty: string | '';
  requestedQuantity: string | '';
  qtyapproved: string | '';
  from: string | '';
  to: string | '';
  qtyApprScr: string | '';
  amt: string | '';
  isDisable: boolean | '';
}

export interface ElementSsoToToNew {
  position: string | '';
  typeOfStamp: string | '';
  denominationvalue: string | '';
  availQty: string | '';
  authQty: string | '';
  requestedQuantity: string | '';
  qtyApprScr: string | '';
  qtyapproved: string | '';

  denominationCode: string | '';
  stampSheet: string | '';
  from: string | '';
  to: string | '';
  remarks: string | '';
  isDisable: boolean | '';
  show: boolean | '';
  innerDataSource: any;
  rowStyleClass: any;
}
export interface ElementSsoToToView {
  denomination: string | '';
  availQty: string | '';
  authQty: string | '';
  requestedQuantity: string | '';
  qtyapproved: string | '';
  unitValue: string | '';
  stampSheet: string | '';
  from: string | '';
  to: string | '';
  remarks: string | '';
}
export interface ElementSsoToToList {
  fYear: string | '';
  indType: string | '';
  indRecFrom: string | '';
  iNumber: string | '';
  iDuration: string | '';
  refNo: string | '';
  recFromOn: string | '';
  sentToON: string | '';
  lyingWith: string | '';
  wStatus: string | '';
  status: string | '';
}
// Stamp receipt TO

export interface ElementRecTo {
  position: string | '';
  deno: string | '';
  typeOfStamp: string | '';
  prevIndent: string | '';
  qtyprevIndent: string | '';
  reuseQty: string | '';
  qtyApp: string | '';
  denominationCode: string | '';
  actQtyRecTo: string | '';
  stampSheet: string | '';
  fromSeries: string | '';
  toSeries: string | '';
  reuseQtySub: string | '';
  isDisable: boolean | '';
  isNew: boolean | '';
  innerDataSource: any;
  rowStyleClass: any;
}
export interface ElementRecToView {
  deno: string | '';
  typeOfStamp: string | '';
  prevIndent: string | '';
  qtyprevIndent: string | '';
  reuseQty: string | '';
  qtyApp: string | '';
  denominationCode: string | '';
  qtyIssue: string | '';
  fromSeries: string | '';
  toSeries: string | '';
  reuseQtySub: string | '';
}
export interface ElementRecToList {
  fYear: string | '';
  rNumber: string | '';
  rDate: string | '';
  receivedFrom: string | '';
  dateStamp: string | '';
  recFromOn: string | '';
  sentToON: string | '';
  lyingWith: string | '';
  wStatus: string | '';
  status: string | '';
}
export interface ElementRecStoList {
  fYear: string | '';
  rNumber: string | '';
  rDate: string | '';
  receivedFrom: string | '';
  dateStamp: string | '';
  treasuryOff: string | '';
  status: string | '';
}
// Stamp receipt STO
export interface ElementRecSTo {
  deno: string | '';
  prevIndent: string | '';
  qtyprevIndent: string | '';
  reuseQty: string | '';
  qtyApp: string | '';
  unitQty: string | '';
  stampSheet: string | '';
  fromSeries: string | '';
  toSeries: string | '';
  reuseQtySub: string | '';
}
// Preparation of Challan
export interface ElementPrepChaTo {
  checkbox: boolean;
  deno: string | '';
  disc: string | '';
  unitVal: string | '';
  stampSheet: string | '';
  totAmt: string | '';
  netAmt: string | '';
}
// Preparation of Challan
export interface ElementPrepChaToNew {
  checkbox: boolean;
  deno: string | '';
  disc: string | '';
  discRs: string | '';
  unitVal: string | '';
  stampSheet: string | '';
  totAmt: string | '';
  netAmt: string | '';
}
export interface ElementPrepChaToList {
  fYear: string | '';
  rNumber: string | '';
  rDate: string | '';
  cNumber: string | '';
  cDate: string | '';
  paymentMode?: string | '';
  vendor: string | '';
  recFromOn?: string | '';
  sentToON?: string | '';
  lyingWith?: string | '';
  wStatus?: string | '';
  status: string | '';
}
export interface ElementPrepChaFinalTo {
  typeOfStamp: string | '';
  deno: string | '';
  denoCode: string | '';
  disc: string | '';
  discRs: string | '';
  stampSheet: string | '';
  totAmt: string | '';
  netAmt: string | '';
  stampNo: string | '';
  sheetNo: string | '';
}
export interface ElementPrepChaFinalToNew {
  typeOfStamp: string | '';
  deno: string | '';
  disc: string | '';
  discRs: string | '';
  unitVal: string | '';
  stampSheet: string | '';
  totAmt: string | '';
  netAmt: string | '';
  stampNo: string | '';
  sheetNo: string | '';
}
export interface ElementPrepChaSto {
  checkbox: boolean;
  deno: string | '';
  disc: string | '';
  unitVal: string | '';
  stampSheet: string | '';
  totAmt: string | '';
  netAmt: string | '';
}
export interface ElementPrepChaFinalSto {
  typeOfStamp: string | '';
  deno: string | '';
  disc: string | '';
  unitVal: string | '';
  stampSheet: string | '';
  totAmt: string | '';
  netAmt: string | '';
  stampNo: string | '';
  sheetNo: string | '';
}
// Authorization of Challan
export interface ElementAuthTo {
  chNo: string | '';
  dateCh: string | '';
  venName: string | '';
  chAmt: string | '';
  refNo: string | '';
  srlAmt: string | '';
  chStatus: string | '';
  payStatus: string | '';
}
export interface ElementAuthToList {
  fYear: string | '';
  rNumber: string | '';
  rDate: string | '';
  cNumber: string | '';
  cDate: string | '';
  authDate: string | '';
  receivedFromSentTo: string | '';
  sentFromSentTo: string | '';
  workflowStatus: string | '';
  status: string | '';
}
export interface ElementAuthSTOList {
  fYear: string | '';
  rNumber: string | '';
  rDate: string | '';
  cNumber: string | '';
  cDate: string | '';
  authDate: string | '';
  authBy: string | '';
  status: string | '';
}
// Double Single Lock
export interface ElementDoubleSingleTo {
  denomination: string | '';
  availQty: string | '';
  authQty: string | '';
  qtyTransfer: string | '';
  from: string | '';
  to: string | '';
  stampType: string | '';
  unitVal: string | '';
  labelSheet: string | '';
  stampNo: string | '';
  sheetNo: string | '';
  isDisable: boolean | '';
}
export interface ElementDoubleSingleManual {
  checkbox: boolean | '';
  denomination: string | '';
  availQty: string | '';
  qtyTransfer: string | '';
  from: string | '';
  to: string | '';
  unitVal: string | '';
  labelSheet: string | '';
  stampNo: string | '';
  sheetNo: string | '';
  isDisable: boolean | '';
}
export interface ElementDoubleSingleManualFinal {
  typeOfStamp: string | '';
  denomination: string | '';
  availQty: string | '';
  qtyTransfer: string | '';
  from: string | '';
  to: string | '';
  unitVal: string | '';
  labelSheet: string | '';
  stampNo: string | '';
  sheetNo: string | '';
}
export interface ElementDoubleSingleSto {
  denomination: string | '';
  availQty: string | '';
  authQty: string | '';
  qtyTransfer: string | '';
  from: string | '';
  to: string | '';
}
export interface ElementDoubleSingleList {
  fYear: string | '';
  modeOfTransfer: string | '';
  rNumber: string | '';
  rDate: string | '';
  vendor: string | '';
  recFromOn: string | '';
  sentToON: string | '';
  lyingWith: string | '';
  wStatus: string | '';
  status: string | '';
}
export interface ElementDoubleSingleStoList {
  fYear: string | '';
  rNumber: string | '';
  rDate: string | '';
  vendor: string | '';
  status: string | '';
}
// Single Double Lock
export interface ElementSingleDoubleTo {
  denomination: string | '';
  availQty: string | '';
  authQty: string | '';
  qtyTransfer: string | '';
  from: string | '';
  to: string | '';
  stampType: string | '';
  unitVal: string | '';
  labelSheet: string | '';
  stampNo: string | '';
  sheetNo: string | '';
  isDisable: boolean | '';
}
export interface ElementSingleDoubleManual {
  checkbox: boolean | '';
  denomination: string | '';
  availQty: string | '';
  qtyTransfer: string | '';
  from: string | '';
  to: string | '';
  unitVal: string | '';
  labelSheet: string | '';
  stampNo: string | '';
  sheetNo: string | '';
  isDisable: boolean | '';
}
export interface ElementSingleDoubleManualFinal {
  typeOfStamp: string | '';
  denomination: string | '';
  availQty: string | '';
  qtyTransfer: string | '';
  from: string | '';
  to: string | '';
  unitVal: string | '';
  labelSheet: string | '';
  stampNo: string | '';
  sheetNo: string | '';
}
export interface ElementSingleDoubleSTo {
  denomination: string | '';
  availQty: string | '';
  authQty: string | '';
  qtyTransfer: string | '';
  from: string | '';
  to: string | '';
}
export interface ElementSingleDoubleList {
  fYear: string | '';
  modeOfTransfer: string | '';
  rNumber: string | '';
  rDate: string | '';
  vendor: string | '';
  recFromOn: string | '';
  sentToON: string | '';
  lyingWith: string | '';
  wStatus: string | '';
  status: string | '';
}
export interface ElementSingleDoubleStoList {
  fYear: string | '';
  rNumber: string | '';
  rDate: string | '';
  vendor: string | '';
  status: string | '';
}
// Stamp Issue
export interface ElementIssueTo {
  position: string | '';
  typeOfStamp: string | '';
  deno: string | '';
  disc: string | '';
  discRs: string | '';
  unitVal: string | '';
  availQty: string | '';
  authQty: string | '';
  requestedQuantity: string | '';
  requestedQuantitySub: string | '';
  stampSheet: string | '';
  stampNo: string | '';
  sheetNo: string | '';
  fromSeries: string | '';
  toSeries: string | '';
  totAmt: string | '';
  netAmt: string | '';
  stmpIssueTre: string | '';
  stmpIssueSub: string | '';
  stmpIssueVen: string | '';
  qtyAppred: string | '';
  qtyApprScr: string | '';
  amt: string | '';
  innerDataSource: any;
  rowStyleClass: string | '';
}
export interface ElementIssueToView {
  position: string | '';
  typeOfStamp: string | '';
  deno: string | '';
  disc: string | '';
  discRs: string | '';
  unitVal: string | '';
  stampSheet: string | '';
  stampNo: string | '';
  sheetNo: string | '';
  fromSeries: string | '';
  toSeries: string | '';
  totAmt: string | '';
  netAmt: string | '';
  stmpIssueTre: string | '';
  stmpIssueSub: string | '';
  stmpIssueVen: string | '';
  qtyAppred: string | '';
  innerDataSource: any;
  rowStyleClass: string | '';
}
export interface ElementIssueToList {
  fYear: string | '';
  rNumber: string | '';
  rDate: string | '';
  vendor: string | '';
  stampType: string | '';
  status: string | '';
}
export interface ElementIssueToListNew {
  fYear: string | '';
  rNumber: string | '';
  rDate: string | '';
  issueTo: string | '';
  recFromOn: string | '';
  sentToON: string | '';
  lyingWith: string | '';
  wStatus: string | '';
  status: string | '';
}

export interface ElementIssueSTo {
  deno: string | '';
  reuseQty: string | '';
  unitQty: string | '';
  stampSheet: string | '';
  fromSeries: string | '';
  toSeries: string | '';
  reuseQtySub: string | '';
  reuseQtyVen: string | '';
}
// Challan Cancellation
export interface ElementChallanCan {
  cNumber: string | '';
  cDate: string | '';
  cName: string | '';
  cAmount: string | '';
  bankNo: string | '';

  bankAmount: string | '';
  cStatus: string | '';

  remarks: string | '';
}
export interface ElementChallanCanList {
  fYear: string | '';
  refDate: string | '';
  refNo: string | '';
  cNo: string | '';
  cdt: string | '';
  cCancelDate: string | '';
  cancelBy: string | '';
  status: string | '';
}
export interface ElementChallanCanListNew {
  fYear: string | '';
  refDate: string | '';
  refNo: string | '';
  cNo: string | '';
  cdt: string | '';
  cCancelDate: string | '';
  cancelBy: string | '';
  status: string | '';
  recFromOn: string | '';
  sentToON: string | '';
  lyingWith: string | '';
  wStatus: string | '';
}
// Revert Stamp Issue
export interface ElementRevertStampTo {
  position: string | '';
  typeOfStamp: string | '';
  deno: string | '';
  disc: string | '';
  discRs: string | '';
  unitVal: string | '';
  stampSheet: string | '';
  stampNo: string | '';
  sheetNo: string | '';
  fromSeries: string | '';
  toSeries: string | '';
  totAmt: string | '';
  netAmt: string | '';
  stmpIssueTre: string | '';
  stmpIssueSub: string | '';
  stmpIssueVen: string | '';
  qtyAppred: string | '';
  innerDataSource: any;
  rowStyleClass: string | '';
}
export interface ElementRevertStampToNew {
  position: string | '';
  typeOfStamp: string | '';
  deno: string | '';
  disc: string | '';
  discRs: string | '';
  unitVal: string | '';
  stampSheet: string | '';
  stampNo: string | '';
  sheetNo: string | '';
  fromSeries: string | '';
  toSeries: string | '';
  totAmt: string | '';
  netAmt: string | '';
  stmpIssueTre: string | '';
  stmpIssueSub: string | '';
  stmpIssueVen: string | '';
  qtyAppred: string | '';
  innerDataSource: any;
  rowStyleClass: string | '';
}
export interface ElementRevertStampToList {
  fYear: string | '';
  rNumber: string | '';
  rDate: string | '';
  challanNo: string | '';
  vendor: string | '';
  status: string | '';
}
export interface ElementRevertStampToListNew {
  fYear: string | '';
  rNumber: string | '';
  rDate: string | '';
  revertDate: string | '';
  vendor: string | '';
  recFromOn: string | '';
  sentToON: string | '';
  lyingWith: string | '';
  wStatus: string | '';
  status: string | '';
}
export interface ElementRevertStampSto {
  deno: string | '';
  issueQtyVen: string | '';
  unitQty: string | '';
  stampSheet: string | '';
  fromSeries: string | '';
  toSeries: string | '';
}
export interface ElementRevertStampStoList {
  fYear: string | '';
  rNumber: string | '';
  rDate: string | '';
  vendor: string | '';
  status: string | '';
}
// Online Request For Deposit of Valuables
export interface ElementDepositValList {
  fYear: string | '';
  dept: string | '';
  subTo: string | '';
  depDate: string | '';
  valCat: string | '';
  subCat: string | '';
  refNo: string | '';
  recFromOn: string | '';
  sentToON: string | '';
  lyingWith: string | '';
  wStatus: string | '';
  status: string | '';
}
// Online Request For Withdrawal of Valuables
export interface ElementWithdrawVal {
  reqNo: string | '';
  dateDep: string | '';
  subTo: string | '';
  subBy: string | '';
  desig: string | '';
  valCat: string | '';
  subCat: string | '';
  regNo: string | '';
  qtyDep: string | '';
  messName: string | '';
  messDesig: string | '';
  withReqBy: string | '';
  qtyWith: string | '';
}
export interface ElementWithdrawValList {
  fYear: string | '';
  dept: string | '';
  subTo: string | '';
  withdrawType: string | '';
  valCat: string | '';
  subCat: string | '';
  refNo: string | '';
  recFromOn: string | '';
  sentToON: string | '';
  lyingWith: string | '';
  wStatus: string | '';
  status: string | '';
}
// Monthly Discount Memo
export interface ElementMonthMemo {
  denomination: string | '';
  discount: string | '';
}
export interface ElementMonthMemoList {
  fYear: string | '';
  refDate: string | '';
  refNo: string | '';
  office: string | '';
  status: string | '';
}
// Surprise Verification
export interface SurpriseVerifList {
  fYear: string | '';
  toffice: string | '';
  veriType: string | '';
  rNumber: string | '';
  closingDate: string | '';
  vName: string | '';
  refDateTime: string | '';
  desi: string | '';
  status: string | '';
}
// Treasury inspection management
export interface TreasuryInspectionManage {
  fYear: string | '';
  toffice: string | '';
  veriType: string | '';
  rNumber: string | '';
  closingDate: string | '';
  vName: string | '';
  refDateTime: string | '';
  desi: string | '';
  status: string | '';
}
// Physical Stock Verification
export interface PhysicalVerifList {
  fYear: string | '';
  toffice: string | '';
  rNumber: string | '';
  closingDate: string | '';
  vName: string | '';
  refDateTime: string | '';
  desi: string | '';
  status: string | '';
}
// Stamp Return Sso by To
export interface ElementReturnSsoTo {
  checkbox: boolean | '';
  unitVal: string | '';
  deno: string | '';
  stampSheet: string | '';
  sheetNo: string | '';
  stampNo: string | '';
  fromSeries: string | '';
  toSeries: string | '';
  totAmt: string | '';
  reason: string | '';
}
export interface ElementReturnSsoToFinal {
  typeOfStamp: string | '';
  unitVal: string | '';
  deno: string | '';
  stampSheet: string | '';
  sheetNo: string | '';
  stampNo: string | '';
  fromSeries: string | '';
  toSeries: string | '';
  totAmt: string | '';
  reason: string | '';
}
export interface ElementReturnSsoToView {
  typeOfStamp: string | '';
  unitVal: string | '';
  deno: string | '';
  stampSheet: string | '';
  sheetNo: string | '';
  stampNo: string | '';
  fromSeries: string | '';
  toSeries: string | '';
  totAmt: string | '';
  reason: string | '';
}
export interface ElementReturnSsoToList {
  fYear: string | '';
  rNumber: string | '';
  rDate: string | '';
  indNo: string | '';
  recFromOn: string | '';
  sentToON: string | '';
  lyingWith: string | '';
  wStatus: string | '';
  returnDate: string | '';
  returnTo: string | '';
  status: string | '';
}
// Stamp Return To by Sto
export interface ElementReturnToSto {
  deno: string | '';
  availFrom: string | '';
  availTo: string | '';
  unitQty: string | '';
  stampSheet: string | '';
  fromSeries: string | '';
  toSeries: string | '';
}
export interface ElementReturnToStoList {
  fYear: string | '';
  rNumber: string | '';
  rDate: string | '';
  stampType: string | '';
  returnDate: string | '';
  returnTo: string | '';
  status: string | '';
}
// Stamp Series Master
export interface StampSeriesMaster {
  denomination: string | '';
  unitValue: string | '';
  stampSheet: string | '';
  from: string | '';
  to: string | '';
}
export interface StampSeriesMasterList {
  fYear: string | '';
  stamp: string | '';
}
// stamp Help Master
export interface StampHelp {
  question: string | '';
  answer: string | '';
}
// Cancel Challan Authorization
export interface CancelChallanAuth {
  cNumber: string | '';
  cDate: string | '';
  cName: string | '';
  cAmount: string | '';
  cStatus: string | '';
  remarks: string | '';
}
export interface CancelChallanAuthList {
  fYear: string | '';
  refDate: string | '';
  refNo: string | '';
  cNo: string | '';
  cdt: string | '';
  cCancelDate: string | '';
  cancelBy: string | '';
  status: string | '';
}
// Vendor Discount Master
export interface VenDiscMaster {
  typeOfVendor: string | '';
  typeOfStamp: string | '';
}
export interface VenDiscMasterSto {
  checkbox: boolean;
  deno: string | '';
  disc: string | '';
}
export interface VenDiscMasteNewSto {
  deno: string | '';
  disc: string | '';
}
export interface VenDiscMasteStoList {
  fYear: string | '';
  treSubTre: string | '';
  vendorNameCode: string | '';
  stamp: string | '';
}
export interface VenDiscMasterList {
  fYear: string | '';
  vendorType: string | '';
}
// Revert Closing Stock Utility
export interface RevertClosingStockUtilityList {
  fYear: string | '';
  rNumber: string | '';
  closingDate: string | '';
  refDateTime: string | '';
}
// Closing Stock Utility
export interface ClosingStockUtilityList {
  fYear: string | '';
  rNumber: string | '';
  closingDate: string | '';
  refDateTime: string | '';
}
// Vendor Master
export interface ElementVendorMasterList {
  fYear: string | '';
  treSubTre: string | '';
  vendor: string | '';
  vendorCode: string | '';
  startDate: string | '';
  endDate: string | '';
  disc: string | '';
  status: string | '';
}
export interface ElementVendorMaster {
  category: string | '';
  disc: string | '';
}
// Stamp Denomination Master
export interface ElementStampDenoMasterList {
  fYear: string | '';
  stamp: string | '';
  denoVal: string | '';
  disc: string | '';
  effectDate: string | '';
  denoCode: string | '';
}
export interface ElementStampDenoMaster {
  stamp: string | '';
  denoVal: string | '';
  disc: string | '';
  effectDate: string | '';
}
export interface ElementStampDenoMasterTcList {
  deno: string | '';
  stamp: string | '';
  disc: string | '';
}
// Category Master
export interface ElementCategoryMasterList {
  catName: string | '';
  majHead: string | '';
  majHeadToolTip: string | '';
  subMajHead: string | '';
  subMajHeadToolTip: string | '';
  minHead: string | '';
  minHeadToolTip: string | '';
  subHead: string | '';
  subHeadToolTip: string | '';
  purpose: string | '';
  status: string | '';
}
// Printing Press Master
export interface ElementPrintMasterList {
  fYear: string | '';
  press: string | '';
  status: string | '';
}
// Opening Balance and Papers of Stamp
export interface ElementOpenBalance1 {
  checkbox: boolean;
  deno: string | '';
  fromSeries: string | '';
  toSeries: string | '';
  unitVal: string | number;
  stampEachSheet: string | number;
  labelPerSheet: string | number;
  qtyRequired: string | number;
  totalSheet: string | number;
  label: string | number;
  amount: string | number;
  displayedColumns: string | '';
}
// Opening Balance and Papers of Stamp
export interface ElementOpenBalance1Final {
  deno: string | '';
  stampType: string | '';
  fromSeries: string | '';
  toSeries: string | '';
  unitVal: string | number;
  stampEachSheet: string | number;
  labelPerSheet: string | number;
  qtyRequired: string | number;
  totalSheet: string | number;
  label: string | number;
  amount: string | number;
  displayedColumns: string | '';
}
export interface ElementOpenBalance {
  deno: string | '';
  fromSeries: string | '';
  toSeries: string | '';
  unitVal: Number | '';
  stampEachSheet: Number | '';
  labelPerSheet: Number | '';
  qtyRequired: Number | '';
  totalSheet: Number | '';
  label: Number | '';
  amount: Number | '';
  displayedColumns: string | '';
}
export interface ElementOpenBalanceView {
  deno: string | '';
  fromSeries: string | '';
  toSeries: string | '';
  amount: string | '';
}
export interface ElementOpenBalanceList {
  fYear: string | '';
  stamp: string | '';
}

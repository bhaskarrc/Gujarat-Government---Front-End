export class Budget {
  position: number;
  type: string;
  finYear: string;
  receivedFrom: string;
  demand: string;
  majorHead: string;
  subMajorHead: string;
  minorHead: string;
  subHead: string;
  detailHead: string;
  refNo: string;
  lyingWith: string;
  status: string;
}
export class BudgetFormType {
  value: number | string;
  viewValue: number | string;
}

// New Item Estimate
export interface DistrictElement1 {
  id: number;
  districtName: string;
  expendature: number | '';
  propsedAmount: number | '';
}
export class FormC1 {
  objecthead: string;
  recurrentAmount: number;
  nonRecurrentAmount: number;
  budgetEstimateNextYear: number;
  ultimateAnnualRecurrentAmount: number;
  remarks: string;
  toolTipData: string;
}
export class ObjectClassDataNewItem {
  objecthead: string | '';
  recurrentAmount: string | number;
  nonRecurrentAmount: string | number;
  budgetEstimateNextYear: string | number;
  ultimateAnnualRecurrentAmount: string | number;
  remarks: string | '';
  toolTipData: string | '';
}
export class DirstrictTableSecond {
  id: string | number;
  expendature: string | '';
  districtName: string | '';
  talukaexpendature: string | '';
  gramexpendature: string | '';
}
export interface HeaderElement {
  label: string | '';
  value: string | '';
}
export interface FormCStmt1Element {
  designationEng: string | '';
  noOfPosts: number | '';
  payScale: number | '';
  designationGuj: string | '';
}
export interface ChecklistTable {
  position: string | number;
  name: string | number;
}
export interface FormCStmt1ElementView {
  designationEng: string | '';
  noOfPosts: number | '';
  payScale: number | '';
  designationGuj: string | '';
  levelPay: string | '';
}

// Item Continuous Estimate
export class ItemContinuous1 {
  objectHead: string;
  actualsThirdLastYear: number | string;
  actualsSecondLastYear: number | string;
  lastYear: number | string;
  criteria: string;
  endBaseLine: number | string;
  improvementFifteen: number | string;
  improvementSixteen: number | string;
  improvementEighteen: number | string;
  currentYear: number | string;
  underStatedOperation: number | string;
  amountProposedByHod: string;
  remarks: string;
  toolTipData: string;
}
export class ItemContinuous1View {
  objectHead: string;
  actualsThirdLastYear: number | string;
  actualsSecondLastYear: number | string;
  lastYear: number | string;
  criteria: string;
  endBaseLine: number | string;
  improvementFifteen: number | string;
  improvementSixteen: number | string;
  improvementEighteen: number | string;
  currentYear: number | string;
  underStatedOperation: number | string;
  amountProposedByHod: string;
  amountProposedByHodFinal: string;
  amountProposedByDept: string;
  amountProposedByFd: string;
  remarks: string;
  toolTipData: string;
}
export class DistrictElement {
  id: number;
  districtName: string;
  expenditure: number;
  talukaExpenditure: number;
  gramExpenditure: number;
}
export class DirstrictTableSecondItemCont {
  id: string | number;
  expendature: string | '';
  districtName: string | '';
  talukaexpendature: string | '';
  gramexpendature: string | '';
}
export interface DistrictElement1ItemCont {
  id: number | string;
  districtName: string;
  expendature: number | '';
  propsedAmount: number | '';
}

// New Work Estimate

export interface ExcelData {
  workNo: number | '';
  locality: string | '';
  exeDivision: string | '';
  workNameEng: string | '';
  workNameGuj: string | '';
  secSubSector: any | '';
  sacEstimatedCost: string | '';
  actualEstablishment: string;
  actualMachinery: string;
  workDescEng: string;
  workDescGuj: string;
  remarksEng: string;
  remarksGuj: string;
  proposeAmount: number | '1.2-2';
  css?: string;
}


// Work in Progress
export interface WorkInProgressElement {
  districtId: string | '';
  districtName: string | '';
  workId: string | '';
  workNo: string | '';
  workName: string | '';
  val1: number | string;
  val2: number | string;
  val3: number | string;
  val4: number | string;
  val5: number | string;
  val6: number | string;
  totProEx: number | string;
  val7: number | string;
  remarks: string | '';
  css: string | '';
}
export interface WorkSelectionTab1 {
  workDetails: string | '';
  amount: string | '';
}
export interface WorkSelectionTab2 {
  workDetails: string | '';
  state: string | '';
  css: string | '';
  total: string | '';
}
export interface WorkSelectionTabMain {
  srNo: string | '';
  districtName: string | '';
  itemNo: string | '';
  workDescriptionEng: string | '';
  state: string | '';
  css: string | '';
  status: string | '';
}

// Standing Charge Consolidate

export interface DialogData {
  animal: string;
  name: string;
}
export interface SchemeList {
  financialYear: string;
  demand: string;
  bpn: string;
  revenueCapital: string;
  major: string;
  subMajor: string;
  minor: string;
  sub: string;
  detail: string;
  noOfDDO: number;
  consolidatedAmt: number;
  referenceNo: string;
  lyingWith: string;
  transactionStatus: string;
  status: string;
  chargedVoted: string;
  percentage: number;
  amount: number;
}
export interface StandingChargeElement {
  isSelected: boolean;
  objecthead: string | '';
  thirdlastyear: number | '';
  secondlastyear: number | '';
  lastyear: number | '';
  currentyear: number | '';
  last8month: number | '';
  first4month: number | '';
  totalof8and4month: number | '';
  col6: number | '';
  col7: number | '';
  amountproposedbyDDO: number | '';
  amountWorkOutByFormula: number | string;
  amountproposedbyHOD: number | '';
  percentage: number | string;
  remarks: string | '';
  isBreakup: Boolean;
  toolTipData?: string | '';
}

export interface ObjectHeadBreakupElement {
  objecthead: string | '';
  thirdlastyear: number | '';
  secondlastyear: number | '';
  lastyear: number | '';
  currentyear: number | '';
  last8month: number | '';
  first4month: number | '';
  totalof8and4month: number | '';
  col6: number | '';
  col7: number | '';
  amountproposedbyDDO: number | '';
  amountWorkOutByFormula: number | '';
  amountproposedbyHOD: number | '';
  remarks: string | '';
}

export interface DistrictElementStandingCharge {
  id: number;
  districtName: string;
  expendature: number | '';
  talukaexpendature: number | '';
  gramexpendature: number | '';
}
export interface DistrictElement1 {
  id: number;
  districtName: string;
  expendature: number | '';
  propsedAmount: number | '';
}

// View
export interface StandingChargeElementView {
  objecthead: string | '';
  thirdlastyear: number | '';
  secondlastyear: number | '';
  lastyear: number | '';
  currentyear: number | '';
  last8month: number | '';
  first4month: number | '';
  totalof8and4month: number | '';
  col6: number | '';
  col7: number | '';
  amountproposedbyDDO: number | '';
  amountproposedbyHOD: number | '';
  remarks: string | '';
  isBreakup: Boolean;
}

export interface ObjectHeadBreakupElementView {
  objecthead: string | '';
  thirdlastyear: number | '';
  secondlastyear: number | '';
  lastyear: number | '';
  currentyear: number | '';
  last8month: number | '';
  first4month: number | '';
  totalof8and4month: number | '';
  col6: number | '';
  col7: number | '';
  amountproposedbyDDO: number | '';
  amountproposedbyHOD: number | '';
  remarks: string | '';
}
export interface DistrictElementView {
  id: number;
  districtName: string;
  expendature: number;
  talukaexpendature: number;
  gramexpendature: number;
}

export interface DistrictElement1View {
  id: number;
  expendature: string;
  districtName: string;
  propsedAmount: string;
}


// Revised Receipt Estimate
export interface RevisedRecEstimate {
  subMajorHead: string;
  minorHead: string;
  subHead: string;
  detailHead: string;
  objectHead: string;
  receipt: string;
  disbursement: string;
  actualReceiptForLastYear: string;
  actualDisburSementForLastYear: string;
  actualReceiptFor8MonthsOfCurrYr1A: string;
  actualDisbursementFor8MonthsOfCurrYr1B: string;
  actReciForLast4MonthCurR2A: string;
  actDisbForLast4MonthCurR2B: string;
  receipt1M2: string;
  disbursement1M2: string;
  Provision4nYReceipt: string;
  Provision4nYdisbursement: string;
  PropoAmountReceipt: string;
  PropoAmountDisbu: string;
  fDAcctOctNovCurrYearRec: string;
  fDAcctOctNovCurrYearDis: string;
  FDLatestEt4castCurrYearRec: string;
  FDLatestEt4castCurrYearDis: string;
  remarks: string;
  DeductRefundMap: string;
}
export interface RevisedRecEstimateView {
  subMajorHead: string | number;
  minorHead: string | number;
  subHead: string | number;
  detailHead: string | number;
  receipt: string | number;
  disbursement: string | number;
  receipt1: string | number;
  disbursement1: string | number;
  receipt2: string | number;
  disbursement2: string | number;
  receipt3: string | number;
  disbursement3: string | number;
  actualReceiptForLastYear: string | number;
  actualDisburSementForLastYear: string | number;
  actualReceiptFor8MonthsOfCurrYr1A: string | number;
  actualDisbursementFor8MonthsOfCurrYr1B: string | number;
  actReciForLast4MonthCurR2A: string | number;
  actDisbForLast4MonthCurR2B: string | number;
  receipt1M2: string | number;
  disbursement1M2: string | number;
  Provision4nYReceipt: string | number;
  Provision4nYdisbursement: string | number;
  PropoAmountReceipt: string | number;
  PropoAmountDisbu: string | number;
  fDAcctOctNovCurrYearRec: string | number;
  fDAcctOctNovCurrYearDis: string | number;
  FDLatestEt4castCurrYearRec: string | number;
  FDLatestEt4castCurrYearDis: string | number;
  DeductRefundMap: string | number;
  remarks: string | number;
}
export interface PeriodicElementRevisedReceipt {
  position: number;
  finYear: string;
  branch: string;
  majorHead: string;
  receipt: number;
  disbursement: number;
  file: string;
  estimateFrom: string;
  status: string;
}

// Revised Receipt Consolidation

export interface ElementRevRecConsolidate {
  subMajorHead: string | '';
  minorHead: string | '';
  subHead: string | '';
  detailHead: string | '';
  receipt: number | '';
  disbursement: number | '';
  receipt1: number | '';
  disbursement1: number | '';
  receipt2: number | '';
  disbursement2: number | '';
  receipt3: number | '';
  disbursement3: number | '';
  receipt4: number | '';
  disbursement4: number | '';
  actualReceiptForLastYear: number | '';
  actualDisburSementForLastYear: number | '';
  actualReceiptFor8MonthsOfCurrYr1A: number | '';
  actualDisbursementFor8MonthsOfCurrYr1B: number | '';
  actReciForLast4MonthCurR2A: number | '';
  actDisbForLast4MonthCurR2B: number | '';
  receipt1M2: number | '';
  disbursement1M2: number | '';
  Provision4nYReceipt: number | '';
  Provision4nYdisbursement: number | '';
  PropoAmountReceipt: number | '';
  PropoAmountDisbu: number | '';
  fDAcctOctNovCurrYearRec: number | '';
  fDAcctOctNovCurrYearDis: number | '';
  FDLatestEt4castCurrYearRec: number | '';
  FDLatestEt4castCurrYearDis: number | '';
  remarks: string | '';
  DeductRefundMap: number | '';
}

// Revised Expenditure Estimate

export interface PeriodicElementRevExpEstimate {
  position: number;
  department: string;
  finYear: string;
  estimateFrom: string;
  demand: string;
  majorHead: string;
  subMajorHead: string;
  minorHead: string;
  subHead: string;
  detailHead: string;
  refNo: string;
  status: string;
  bHead: string;
  iName: string;
  rNumber: string;
  wStatus: string;
}

export class DistData {
  id: number;
  districtName: string;
  expenditure: number;
  talukaExpenditure: number;
  gramExpenditure: number;
}
export interface DistrictTableRevExp2 {
  id: number | string;
  expendature: string;
  districtName: string;
  talukaexpendature: string;
  gramexpendature: string;
}

export interface StateTableRevExp {
  id: number;
  expendature: string;
  districtName: string;
  propsedAmount: string;
}

// Branch Mapping and Creation
export interface BranchCreation {
  branchName: string;
  branchType: string;
}
export interface BranchMapping {
  empNum: string;
  empName: string;
  postName: string;
}

// Upload AG Account
export interface UpAccount {
  financialYear: string;
  department: string;
  bpnCode: string;
  accType: string;
  status: string;
}

// FD Group Mapping
export interface FdGroupMapping {
  userName: string;
  postName: string;
}
export interface FdGroupMappingList {
  groupName: string;
}
// Outcome Budget
export interface OutcomeAchievement {
  schem: string | number;
  depart: string | number;
  typeSchem: string | number;
  phyTarget: string | number;
  unit: string | number;
  target: string | number;
  achiveMent: string | number;
  tagetQ2: string | number;
  achiveMentQ2: string | number;
  targetQ3: string | number;
  achiveQ3: string | number;
  totalSchem: string | number;
  quterQ1: string | number;
  quterQ2: string | number;
  quterQ3: string | number;
  anuTarQ1: string | number;
  anuTarQ2: string | number;
  anuTarQ3: string | number;
}
export interface OutcomeAchievementList {
  depart: string | number;
  finYr: string | number;
  quter: string | number;
  schenType: string | number;
}

// Admin Approval
export interface AdminApprovalList {
  bHead: string;
  estType: string;
  iName: string;
  fdAmt: string;
  refNo: string;
  recFromOn: string;
  sentFromOn: string;
  lying: string;
  status: string;
  workFlowstatus: string;
}

// Scheme Type Mapping
export interface SchemeTypeMapping {
  position: string | number;
  finYear: string;
  bhNormal: string;
  bhTasp: string;
  bhScsp: string;
  bhWorks: string;
  bhEarthQuake: string;
  bhNormal1: string;
  bhTasp1: string;
  bhScsp1: string;
  bhWorks1: string;
  bhEarthQuake1: string;
}

// Supplementary Demand
export interface SuppDemand {
  majorHead: string;
  subMajorHead: string;
  minorHead: string;
  subHead: string;
  detHead: string;
  budgetEstimate: string;
  advancedCF: string;
  revisedEstimate: string;
  excessSaving: string;
  excessScheme: string;
  excessSchemeEdit: boolean;
  remarkEng: string;
  remarkGuj: string;
}
export interface SuppDemandList {
  position: string | number;
  refNo: string;
  refDate: string;
  demand: string;
  revenueCapital: string;
  votedCharged: string;
  recFrom: string;
  recDate: string;
  sentTo: string;
  sentDate: string;
  lyingWith: string;
  status: string;
  wstatus: string;
  excess: string | number;
}
export interface SuppDemandHistory {
  userRole: string;
  userSortName: string;
  userCode: string;
  designation: string;
  dateAndTime1: string;
  dateAndTime: string;
  proposedAmt: string | number;
  remark: string;
}

// Macro Outcome
export interface MacroOutcomeList {
  financialYear: string;
  department: string;
  bpnCode: string;
  refNum: string;
  refDate: string;
  status: string;
}
export interface MacroOutcomeListNew {
  financialYear: string;
  department: string;
  bpnCode: string;
  refNum: string;
  refDate: string;
  recFromOn: string;
  sentToON: string;
  lyingWith: string;
  wStatus: string;
  status: string;
}

// Macro Outcome Details
export interface MacroOutcomeDemandDet {
  demandNo: string;
  demandDetails: string;
  provision: string;
}

export interface MacroOutcomeDetTab {
  macroOutcomeEnglish: string;
  macroOutcomeGujarati: string;
}


// Department Achievement Details
export interface DeptAchieveList {
  financialYear: string;
  referenceNo: string;
  referenceDate: string;
  dept: string;
  recFromOn: string;
  sentToON: string;
  lyingWith: string;
  wStatus: string;
  status: string;
}
export interface AchieveAgainstTarget {
  financialYear: string;
  department: string;
  bpnCode: string;
  refNum: string;
  refDate: string;
  status: string;
}
export interface AchieveAgainstTargetDetails {
  typeOfScheme: string;
  budgetHead: string;
  nameOfScheme: string;
  financialProvision: string;
  physicalTarget: string;
  physicalTargetInput: string | number;
  unit: string;
  quarter1target: string | number;
  quarter1achievement: string | number;
  quarter2target: string | number;
  quarter2achievement: string | number;
  quarter3target: string | number;
  quarter3achievement: string | number;
  quarter4target: string | number;
  quarter4achievement: string | number;
  cumulativeAchievementActual: string | number;
  cumulativeAchievementIn: string | number;
  quarterlyAchievement1: string | number;
  quarterlyAchievement2: string | number;
  quarterlyAchievement3: string | number;
  quarterlyAchievement4: string | number;
  achievementq1: string | number;
  achievementq2: string | number;
  achievementq3: string | number;
  achievementq4: string | number;
}

// Outcome Achievement
export interface OutcomeAchieve {
  financialYear: string;
  referenceNo: string;
  referenceDate: string;
  demandNo: string;
  status: string;
}

// Physical target
export interface PhysicalTarget {
  financialYear: string;
  department: string;
  bpnCode: string;
  refNum: string;
  refDate: string;
  status: string;
}
export interface PhysicalTargetDetails {
  typeOfScheme: string;
  budgetHead: string;
  nameOfScheme: string;
  financialProvision: string;
  physicalTarget: string;
  physicalTargetInput: string;
  unit: string;
  year2021: string;
  year2122: string;
  year2223: string;
}

// Expenditure Explanation List
export interface ExpenditureExpList {
  financialYear: string;
  depart: string;
  bpnCode: string;
  majorHead: string;
  demand: string;
  status: string;
  action: string;
}

// Delegation
export interface DelegationList {
  financialYear: string;
  departMent: string;
  module: string;
  subModule: string;
}
export interface Delegation {
  name: string;
  position: number;
  amount: string;
  readonly: boolean;
}

// annexure a
export interface AnnexureAList {
  fYear: string | '';
  bpnCodeNo: string | '';
  lang: string | '';
  expenditType: string | '';
  cfMemo: string | '';
  status: string | '';
}

// Scheme Type Wise Mapping
export interface SchemeTypeWise {
  normal: string | '';
}

// MH Object Mapping
export interface MhObjectMap {
  majorHead: string | '';
  subMajorHead: string | '';
  minHead: string | '';
  subHead: string | '';
  detHead: string | '';
  objHead: string | '';
  majorHeadToolTip: string | '';
  subMajorHeadToolTip: string | '';
  minHeadToolTip: string | '';
  subHeadToolTip: string | '';
  detHeadToolTip: string | '';
  objHeadToolTip: string | '';
}




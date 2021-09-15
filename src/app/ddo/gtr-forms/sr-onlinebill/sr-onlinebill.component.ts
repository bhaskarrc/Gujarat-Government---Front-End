import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import {
  MatTableDataSource,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog
} from '@angular/material';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { DialogData } from 'src/app/model/standing-charge';
import { SelectionModel } from '@angular/cdk/collections';
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';
import { Router } from '@angular/router';
import { ddoMasage } from 'src/app/common/error-message/common-message.constants';
import {
  Gross, HeadDataSr, ChequeDetails, EdpDetails, ReceiptSummaryDeduction,
  ReceiptDetails, RecoveryDetails, EPaymentDetails, ReceiptDataSummary, ChequeListTypeDialog
} from 'src/app/model/ddo-forms';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { HeaderElement } from 'src/app/model/common-listing';


const EXPENDITURE_LIST: EdpDetails[] = [
  {
    budgetCode: '0000',
    description: 'For Mh 8009 & Other 8000 Mh',
    edpCode: '0000',
    amount: '10000.00'
  }
];


// gross table
const GROSS_TOTAL: Gross[] = [
  {
    grossTotal: '604630.00',
    recovery: '0.00',
    deduA: '0.00',
    deduB: '0.00',
    netTotal: '0.00',
    amntRs: 'Hundred rupees Only',
    apropriFor: '0.00',
    expThisBill: '604630.00',
    bal: '-604630.00'
  }
];

// ddo head table
const HEAD_DIALOG: HeadDataSr[] = [
  {
    fundType: 'Public Accounts',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: '8658:00:102:26:00:C0 ',
    subHeadDes: 'Unsuccessful Transaction e-Advice',
    schemeNo: '000000'
  }
];

// cheque list type pop up data
const ELEMENT_DATA1: ChequeListTypeDialog[] = [
  { vender: 'ABC Employee', checkType: 'Contractor', accountNo: '3600178925', panNo: 'EOXPS8331P ' },
];


/** app-check-list-example-dialog starts */
@Component({
  selector: 'app-check-list-example-dialog',
  templateUrl: 'check-list-dialog.html'
})
export class ChecklistsrleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ChecklistsrleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private route: Router
  ) { }

  // table column
  displayedColumns: string[] = [
    'select',
    'vender',
    'checkType',
    'accountNo',
    'panNo'
  ];

  dataSource = new MatTableDataSource<ChequeListTypeDialog>(ELEMENT_DATA1);
  selection = new SelectionModel<ChequeListTypeDialog>(true, []);
  directiveObj = new CommonDirective(this.route);

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  // close the dialog box on clicking on add to bill button
  addToBill() {
    this.dialogRef.close();
  }
}
/** app-check-list-example-dialog ends */


/** app-grant-head-dialog starts */
@Component({
  selector: 'app-grant-head-dialog',
  templateUrl: 'grant-head-dialog.html'
})
export class GrantHeadSRDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<GrantHeadSRDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  displayedColumns: string[] = [
    'fundType',
    'voted',
    'stateCss',
    'bSubHeadSt',
    'subHeadDes',
    'schemeNo'

  ];
  dataSource = new MatTableDataSource(HEAD_DIALOG);

  selection = new SelectionModel<HeadDataSr>(true, []);

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  // close the dialog box if clicked on budget head structure in table
  selectBudgetHead(): void {
    this.dialogRef.close();
  }
}

/** app-grant-head-dialog starts */


/** app-sr-onlinebill starts */
@Component({
  selector: 'app-sr-onlinebill',
  templateUrl: './sr-onlinebill.component.html',
  styleUrls: ['./sr-onlinebill.component.css']
})
export class SrOnlinebillComponent implements OnInit {

  ddoNo = 441;
  cardexNo = 87;
  ddoName = 'Pratik K';
  designation = 'Deputy Destrict Development Officer';
  officeName = 'Destrict Social Welfare Officer, DISTRICT DEPUTY DIRECTOR (DEVELOPING CAST), Gandhinagar';
  districtCode = 57;
  billCreater = 'Pratik K';
  billApprover = 'Pratik K';
  claimant = 'Employee';
  checkTable = false;
  epayment = true;
  isInputEdpCode = true;
  isDelete = false;
  isInputEdpCode1 = true;
  checkpayment = true;
  paymentBlock = true;
  ddoParty;
  paymentTypeDropDown = true;
  typeOfEstimate = false;
  ngItemName = false;
  majorHeadVal = '';
  subMajorHeadVal = '';
  minorHeadVal = '';
  subHeadVal = '';
  detailHeadVal = '';
  objectClassVal = '';
  headChargeableVal;
  fileBrowseIndex: number;
  selectedIndex: number;
  formSr: FormGroup;
  todayDate = Date.now();
  subObjectId: Array<any> = [];
  tabDisable: Boolean = true;
  maxDate = new Date();

  itemName_list: ListValue[] = [
    {
      value: '1',
      viewValue: 'Purchase of new car for Director of Agriculture'
    },
    { value: '2', viewValue: 'Purchase of Furniture for the Director Office' },
    { value: '3', viewValue: 'Purchase Furniture for record room of Office' },
    {
      value: '4',
      viewValue: 'Purchase of new Furniture for the Joint Director Office'
    },
    {
      value: '5',
      viewValue: 'Purchase of new Furniture for the Deputy Director'
    }
  ];

  typeOfEstimateList: ListValue[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: 'New Item' },
    { value: '3', viewValue: 'New Work' },
    { value: '4', viewValue: 'Item Continuous' },
    { value: '5', viewValue: 'Work-In-Progress' }
  ];

  checkList: ChequeDetails[] = [
    {
      chequeAmount: '0.00',
      chequeType: '',
      address: '',
      accountNo: '',
      partyName: ''
    }
  ];

  expenditureColumn: string[] = [
    'budgetCode',
    'description',
    'edpCode',
    'amount',
    'action'
  ];
  // gross table
  grossTotalColumn: string[] = [
    'grossTotal',
    'recovery',
    'deduA',
    'deduB',
    'netTotal',
    'amntRs',
    'apropriFor',
    'expThisBill',
    'bal'
  ];

  employeeTypeList: ListValue[] = [
    { value: '1', viewValue: 'GO' },
    { value: '2', viewValue: 'Private' }
  ];

  monthList: ListValue[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'September' },
    { value: '9', viewValue: 'October' },
    { value: '9', viewValue: 'November' },
    { value: '9', viewValue: 'Decmber' }
  ];

  yearList: ListValue[] = [
    { value: '1', viewValue: '2015' },
    { value: '2', viewValue: '2016' },
    { value: '3', viewValue: '2017' },
    { value: '4', viewValue: '2018' },
    { value: '5', viewValue: '2019' },
    { value: '6', viewValue: '2020' }
  ];

  classExpenditureList: ListValue[] = [
    { value: '1', viewValue: ' 2-Charged' },
    { value: '2', viewValue: ' 1-Voted' }
  ];

  demandList: ListValue[] = [
    { value: '999', viewValue: '999' },
    { value: '019', viewValue: '019: Other expenditure pertaining to Finance Department' },
  ];

  majorHeadList: ListValue[] = [
    { value: '8658', viewValue: '8658: Suspense Accounts' },
    { value: '2235', viewValue: '2235: Social Security and Welfare' },
  ];

  subMajorHeadList: ListValue[] = [
    { value: '00', viewValue: '00' },
    { value: '60', viewValue: '60: Other Social Security and Welfare Programmes' },
  ];

  minorHeadList: ListValue[] = [
    { value: '102', viewValue: '102: Suspense Accounts Civil' },
    { value: '104', viewValue: '104: Deposit Linked Insurance Scheme-Government Provident Fund' },

  ];

  subHeadList: ListValue[] = [
    { value: '26', viewValue: '26: Unsuccessful Transaction e-Advice' },
    { value: '01', viewValue: '01: Deposit Linked Insurance Scheme for Subscribers to Provident Fund' }
  ];

  detailedHeadList: ListValue[] = [
    { value: '00', viewValue: '00' },
  ];

  objectClassList: ListValue[] = [
    { value: 'C0', viewValue: 'Object Class-0' },
    {
      value: 'C1',
      viewValue: 'Object Class-1 (Personnel Services and Benefits)'
    },
    { value: 'C5', viewValue: 'Object Class-5 (Other Expenditure)' },
    {
      value: 'C6',
      viewValue:
        'Object Class-6 (Acquisition of Capital Assets and Other Capital Expenditure)'
    },
  ];

  exemptedTypeList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  billCodeList: ListValue[] = [
    { value: '1', viewValue: '1 - Pay allow Retirement benefit i.e. ltc & leave encas. at reti' },
    { value: '2', viewValue: '2 - Widow Relief Assistance To Aged Helpless' },
    { value: '3', viewValue: '3 - Bills Of Scarcity' },
    { value: '4', viewValue: '4 - Bills Of Diet Charges Of Hospital' },
    { value: '5', viewValue: '5 - Scolarship / Stipend Bills' },
    { value: '6', viewValue: '6 - Relief On Salestax Levied On Diesel Of Fisherman' },
    { value: '7', viewValue: '7 - Telephone / Light Bills' },
    { value: '8', viewValue: '8 - Petrol / Diesel Bill' }
  ];

  billCategoryList: ListValue[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'Regular / Challen' },
    { value: '3', viewValue: 'TC' },
    { value: '4', viewValue: 'Nil' }
  ];

  paymentTypeList: ListValue[] = [
    { value: '1', viewValue: 'Cheque' },
    { value: '2', viewValue: 'ePayment' }
  ];

  grossTotl: HeaderElement[] = [
    { label: 'Gross Total', value: '10000.00' },
    { label: 'Recovery', value: '0.00' },
    { label: 'Deduction A', value: '0.00' },
    { label: 'Deduction B', value: '0.00' },
    { label: 'Net Total', value: '10000.00' },
    { label: 'Amount in Rs.', value: 'Ten Thousand Only' },
    { label: 'Appropriation For', value: '0.00' },
    { label: 'Disbursement Amount', value: '604630.00' },
    { label: 'Expenditure including this bill', value: '10000.00' },
    { label: 'Balance', value: '594630‬.00' }
  ];

  chequeTypeList: ListValue[] = [
    { value: '1', viewValue: 'Beneficiary' },
    { value: '2', viewValue: 'Contractor' },
    { value: '3', viewValue: 'GST TDS' },
    { value: '4', viewValue: 'Scholarship' },
    { value: '5', viewValue: 'Service Provider' },
    { value: '5', viewValue: ' Supplier' }
  ];

  fundTypeList: ListValue[] = [
    { value: '1', viewValue: '3-Consolidated' },
    { value: '2', viewValue: '4-Contingency' },
    { value: '3', viewValue: '5-Public Accounts' }
  ];

  schemeTypeList: ListValue[] = [
    { value: '1', viewValue: '1-State' },
    { value: '2', viewValue: '2-CSS' }
  ];

  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];

  // receipt-data-summary second table data
  deductionList: ReceiptSummaryDeduction[] = [
    { decuctionA: '0.00', decuctionB: '0.00', expenditure: '10000.00', recovery: '0.00' }
  ];

  // receipt-data-summary second table columns
  deductionCol = ['expenditure', 'recovery', 'decuctionA', 'decuctionB'];
  receiptList: ReceiptDetails[] = [];

  chequeTypeChequeList: ListValue[] = [
    { value: '1', viewValue: 'Party Cheque' },
    { value: '2', viewValue: 'DDO Cheque' }
  ];

  // Cheque Type table

  chequeColumn = [
    'chequeType', 'partyName', 'address', 'accountNo', 'chequeAmount', 'action'];

  // epayment Type table

  epaymentColumn = ['payeeName', 'accountNo', 'ifscCode', 'amount', 'action'];

  // Receipt Details

  receiptColumn = [
    'edpCode',
    'description',
    'dedType',
    'majorHead',
    'subMajorHead',
    'minerHead',
    'subHead',
    'amount',
    'action'
  ];
  // Receipt-Data Summary
  summaryData = [
    'edpCode',
    'challanDate',
    'pdAccount',
    'party',
    'amount',
    'action'
  ];

  // recovery details
  recoveryColumn = ['budgetCode', 'description', 'edpCode', 'amount', 'action'];

  // formControls
  empTypeCtrl: FormControl = new FormControl();
  monthsCTRL: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();
  classCtrl: FormControl = new FormControl();
  fundTypeCtrl: FormControl = new FormControl();
  schemeTypeCtrl: FormControl = new FormControl();
  schemeNoCtrl: FormControl = new FormControl();
  demandCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  detailHeadCtrl: FormControl = new FormControl();
  objClassCtrl: FormControl = new FormControl();
  exemptedCtrl: FormControl = new FormControl();
  billCodeCtrl: FormControl = new FormControl();
  billCatCtrl: FormControl = new FormControl();
  previousBillCtrl: FormControl = new FormControl();
  paymentTypeCtrl: FormControl = new FormControl();
  checkTypeCtrl: FormControl = new FormControl();
  gpfbillCtrl: FormControl = new FormControl();
  checkTypeTwoCtrl: FormControl = new FormControl();
  itemCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();

  // recovery details datasource
  recoveryDataSource = new MatTableDataSource<RecoveryDetails>([]);

  // receipt-data summary second table datasource
  deductionDataSource = new MatTableDataSource<ReceiptSummaryDeduction>(this.deductionList);

  // cheque payment mode datasource
  checkDataSource = new MatTableDataSource<ChequeDetails>(this.checkList);

  // edp details datasource
  expenditureDataSource = new MatTableDataSource<EdpDetails>(EXPENDITURE_LIST);

  // e-payment payment mode datasource
  epaymentDataSource = new MatTableDataSource<EPaymentDetails>([]);

  grossDataSource = new MatTableDataSource<Gross>(GROSS_TOTAL);

  // receipt-data summary datasource
  summaryDataSource = new MatTableDataSource<ReceiptDataSummary>([]);

  // receipt details datasource
  receiptDataSource = new MatTableDataSource<ReceiptDetails>(this.receiptList);

  constructor(
    private fb: FormBuilder,
    private el: ElementRef,
    public dialog: MatDialog,
    private router: Router
  ) { }
  errormsg;
  ngOnInit() {
    this.errormsg = ddoMasage;
    this.formSrData();
  }

  formSrData() {
    this.formSr = this.fb.group({
      empType: [''],
      empNo: [''],
      employeeName: [''],
      designation: [''],
      establishment: this.officeName,
      month: ['2'],
      year: ['6'],
      subMajorHead: [''],
      minorHead: [''],
      majorHead: [''],
      subHead: [''],
      detailHead: [''],
      objectClass: [''],
      exempted: ['1'],
      headChargeable: [''],
      billCode: [''],
      billCategory: [''],
      previousBill: [''],
      paymentType: ['2'],
      ddoGrantHead: [''],
      classExp: ['2'],
      funds: ['3'],
      schemeType: ['1'],
      demand: [''],
      schemeNo: [''],
      itemName: [''],
      type: ['']
    });
  }

  // go to dashboard
  goToDashboard() {

  }

  // go to next
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

  // navigate to report
  goToReport() {
    this.router.navigate(['/ddo/report-gtr-sr']);
  }

  // navigate to office report
  goToOfficeReport() {
    this.router.navigate(['/ddo/gtr-sr-office-order']);
  }


  // remove row in Receipt-Data Summary
  removeRowsummary(index) {
    this.summaryDataSource.data.splice(index, 1);
    this.summaryDataSource = new MatTableDataSource(this.summaryDataSource.data);
  }

  // delete row from cheque table
  deleteChequeTypeRow(index) {
    this.checkDataSource.data.splice(index, 1);
    this.checkDataSource = new MatTableDataSource(this.checkDataSource.data);
  }

  // get tab index
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
  }

  // calculate total summary amount
  totalSummary(): number {
    let amount = 0;
    this.summaryDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }


  // fill data in edp-details table
  fillData() {
    const p_data = this.expenditureDataSource.data;
    p_data.push({
      budgetCode: '1300',
      description: 'Post & Telegraph Expeness',
      edpCode: '1302',
      amount: '0.00',
    });
    p_data.splice(this.expenditureDataSource.data.length - 2, 1);
    this.expenditureDataSource.data = p_data;
  }

  // toggles epayment & checkTable variable on basis of payment mode dropdown
  payment(data) {
    if (data.value === '1') {
      this.epayment = false;
      this.checkTable = true;
    }
    if (data.value === '2') {
      this.checkTable = false;
      this.epayment = true;
    }
  }

  // show payment mode dropdown on basis of bill category
  billValues(data) {
    if (data.value === '3' || data.value === '4') {
      this.paymentTypeDropDown = false;
    }
    if (data.value === '1' || data.value === '2') {
      this.paymentTypeDropDown = true;
    }
  }

  // calculate total expenditure amount
  totalExpeAmount(): number {
    let amount = 0;
    this.expenditureDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }


  // add data in edp-details
  addLeave() {
    const p_data = this.expenditureDataSource.data;
    this.isInputEdpCode = false;
    this.isDelete = true;
    p_data.push({
      budgetCode: '',
      description: '',
      edpCode: '',
      amount: '0.00'
    });
    this.expenditureDataSource.data = p_data;
  }


  // add new row in receipt details
  addEdpRow() {
    const Col_Data = this.receiptDataSource.data;
    Col_Data.push({
      edpCode: '',
      description: '',
      dedType: '',
      majorHead: '',
      subMajorHead: '',
      minerHead: '',
      subHead: '',
      amount: '0.00'
    });
    this.receiptDataSource.data = Col_Data;
    this.isInputEdpCode1 = false;
  }

  // calculate receipt total amount
  reciptTotal(): number {
    let amount = 0;
    this.receiptDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculate total amount for cheque table
  getTotalAmount(): number {
    let chequeAmount = 0;
    this.checkDataSource.data.forEach(element => {
      chequeAmount = chequeAmount + Number(element.chequeAmount);
    });
    return chequeAmount;
  }

  // add row in cheque table
  addNewRow() {
    const p_data = this.checkDataSource.data;
    p_data.push({
      partyName: '',
      accountNo: '',
      chequeAmount: '',
      address: '',
      chequeType: ''
    });
    this.checkDataSource.data = p_data;
  }

  // delete row in gtr-details table
  deletExpenditureRow(index) {
    this.expenditureDataSource.data.splice(index, 1);
    this.expenditureDataSource = new MatTableDataSource(
      this.expenditureDataSource.data
    );
  }

  // patches value in fprm
  onEmployeeNumber() {
    this.formSr.patchValue({
      empType: this.employeeTypeList[0].value,
      employeeName: 'ABC Employee',
      designation: this.designation,
    });
  }

  // opens search employee dialog box
  openDailogOnEmployeeNumber() {
    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.formSr.patchValue({
          empNo: result[0].employeeNumber,
          empType: this.employeeTypeList[0].value,
          employeeName: result[0].employeeName,
          designation: this.designation,
        });
      }
    });
  }

  // sets the ddo party name on basis of party type
  changeDdoValue(data) {
    if (data.value === '1') {
      this.ddoParty = '';

    }
    if (data.value === '2') {
      this.ddoParty = '';
    }
  }


  // sets variable value on basis of bill category
  billCategoryChange(data) {
    if (data.value === 3 || data.value === 4) {
      this.checkpayment = false;
      this.paymentBlock = false;
    } else {
      this.checkpayment = true;
      this.paymentBlock = true;
    }
  }

  // generate head chargable on basis of major head
  majorHeadChange(data) {
    this.majorHeadVal = data.value;
    this.headChargeableVal = this.majorHeadVal
      + ':'
      + this.subMajorHeadVal
      + ':'
      + this.minorHeadVal
      + ':'
      + this.subHeadVal
      + ':'
      + this.detailHeadVal
      + ':'
      + this.objectClassVal;
    this.formSr.patchValue({
      subMajorHead: '',
      subHead: '',
      minorHead: '',
      detailHead: '',
      objectClass: '',
      headChargeable: '',
    });
  }

  // generate head chargable on basis of sub major head
  subMajorHeadChange(data) {
    this.subMajorHeadVal = data.value;
    this.headChargeableVal = this.majorHeadVal
      + ':'
      + this.subMajorHeadVal
      + ':'
      + this.minorHeadVal
      + ':'
      + this.subHeadVal
      + ':'
      + this.detailHeadVal
      + ':'
      + this.objectClassVal;
    this.formSr.patchValue({
      subHead: '',
      minorHead: '',
      detailHead: '',
      objectClass: '',
      headChargeable: '',
    });
  }

  // generate head chargable on basis of minor head
  minorHeadChange(data) {
    this.minorHeadVal = data.value;
    this.headChargeableVal = this.majorHeadVal
      + ':'
      + this.subMajorHeadVal
      + ':'
      + this.minorHeadVal
      + ':'
      + this.subHeadVal
      + ':'
      + this.detailHeadVal
      + ':'
      + this.objectClassVal;
    this.formSr.patchValue({
      subHead: '',
      detailHead: '',
      objectClass: '',
      headChargeable: '',
    });
  }

  // generate head chargable on basis of sub head
  subHeadChange(data) {
    this.subHeadVal = data.value;
    this.headChargeableVal = this.majorHeadVal
      + ':'
      + this.subMajorHeadVal
      + ':'
      + this.minorHeadVal
      + ':'
      + this.subHeadVal
      + ':'
      + this.detailHeadVal
      + ':'
      + this.objectClassVal;
    this.formSr.patchValue({
      detailHead: '',
      objectClass: '',
      headChargeable: '',
    });
  }

  // generate head chargable on basis of detail head
  detailHeadChange(data) {
    this.detailHeadVal = data.value;
    this.headChargeableVal = this.majorHeadVal
      + ':'
      + this.subMajorHeadVal
      + ':'
      + this.minorHeadVal
      + ':'
      + this.subHeadVal
      + ':'
      + this.detailHeadVal
      + ':'
      + this.objectClassVal;
    this.formSr.patchValue({
      objectClass: '',
      headChargeable: '',
    });
  }

  // generate head chargable on basis of object change
  objectChange(data) {
    this.objectClassVal = data.value;
    this.headChargeableVal = this.majorHeadVal
      + ':'
      + this.subMajorHeadVal
      + ':'
      + this.minorHeadVal
      + ':'
      + this.subHeadVal
      + ':'
      + this.detailHeadVal
      + ':'
      + this.objectClassVal;
    this.formSr.patchValue({
      headChargeable: this.headChargeableVal,
    });
  }

  // patches data on basis of demand value
  demandChange(data) {
    if (data.value === '019') {
      this.typeOfEstimate = true;
      this.formSr.patchValue({
        majorHead: undefined,
        subMajorHead: '',
        subHead: '',
        minorHead: '',
        detailHead: '',
        objectClass: '',
        headChargeable: '',
      });
    }
    if (data.value === '999') {
      this.typeOfEstimate = false;
      this.ngItemName = false;
      this.formSr.patchValue({
        majorHead: undefined,
        subMajorHead: '',
        subHead: '',
        minorHead: '',
        detailHead: '',
        objectClass: '',
        headChargeable: '',
      });
    }
  }

  // toggles value on basis of type change
  onTypeChange(data) {
    if (data.value === 1) {
      this.ngItemName = false;
    } else {
      this.ngItemName = true;
    }
  }

  // total epay amount
  totalAmountEpay(): number {
    let amount = 0;
    this.epaymentDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // delete row from e-payment table
  deleteEPaymentRow(index) {
    this.epaymentDataSource.data.splice(index, 1);
    this.epaymentDataSource = new MatTableDataSource(
      this.epaymentDataSource.data
    );
  }

  // open grand head dialog pop up
  openDialoggranthead(): void {
    const dialogRef = this.dialog.open(GrantHeadSRDialogComponent, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.typeOfEstimate = false;
      this.ngItemName = false;
      this.majorHeadVal = this.majorHeadList[0].value;
      this.subMajorHeadVal = this.subMajorHeadList[0].value;
      this.minorHeadVal = this.minorHeadList[0].value;
      this.subHeadVal = this.subHeadList[0].value;
      this.detailHeadVal = this.detailedHeadList[0].value;
      this.objectClassVal = this.objectClassList[0].value;
      this.formSr.patchValue({
        schemeNo: '000000',
        subMajorHead: this.subMajorHeadList[0].value,
        minorHead: this.minorHeadList[0].value,
        subHead: this.subHeadList[0].value,
        detailHead: this.detailedHeadList[0].value,
        objectClass: this.objectClassList[0].value,
        billCategory: this.billCategoryList[0].value,
        paymentType: this.paymentTypeList[1].value,
        majorHead: this.majorHeadList[0].value,
        demand: this.demandList[0].value,
        headChargeable:
          this.majorHeadList[0].value
          + ':'
          + this.subMajorHeadList[0].value
          + ':'
          + this.minorHeadList[0].value
          + ':'
          + this.subHeadList[0].value
          + ':'
          + this.detailedHeadList[0].value
          + ':'
          + this.objectClassList[0].value,
      });
    });

  }

  // add new row in receipt summary data table
  addRowReceipt() {
    const Col_Data = this.summaryDataSource.data;
    Col_Data.push({
      edpCode: '9720',
      challanDate: '',
      pdAccount: '',
      party: '',
      amount: ''
    });
    this.summaryDataSource.data = Col_Data;
  }

  // delete row in receipt details table
  removeRow(objIndex) {
    const p_data = this.receiptDataSource.data;
    this.subObjectId.splice(objIndex, 1);
    p_data.splice(objIndex, 1);
    this.receiptDataSource.data = p_data;
    this.summaryDataSource.data.splice(objIndex, 1);
    this.summaryDataSource = new MatTableDataSource(this.summaryDataSource.data);
  }

  // opens ChecklistsrleDialogComponent dialog box
  openChequeListDialog(): void {
    const dialogRef = this.dialog.open(ChecklistsrleDialogComponent, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(() => {
      const p_data = this.epaymentDataSource.data;
      this.isInputEdpCode = false;
      this.isDelete = true;

      p_data.push({
        payeeName: 'ABC Employee',
        accountNo: 32373007812,
        ifscCode: 'SBIN002636',
        amount: '0.00'
      });
      this.epaymentDataSource.data = p_data;
    });
  }

  // add row in recovery details
  addRecovery() {
    const Col_Data = this.recoveryDataSource.data;
    Col_Data.push({
      budgetCode: '',
      description: '',
      edpCode: '',
      amount: ''
    });
    this.recoveryDataSource.data = Col_Data;
  }

  // calculate total recovery amount
  totalRecovery(): number {
    let amount = 0;
    this.recoveryDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // fill edp description in receipt datasource
  fillEdpDescription() {
    const Col_Data = this.receiptDataSource.data;
    Col_Data.push({
      edpCode: '9520',
      description: 'Surcharge On Income Tax',
      dedType: 'A',
      majorHead: '8658',
      subMajorHead: '00',
      minerHead: '112',
      subHead: '00',
      amount: '0.00'
    });
    Col_Data.splice(this.receiptDataSource.data.length - 2, 1);
    this.receiptDataSource.data = Col_Data;
  }

  // add recovry data
  recoveryData() {
    const Col_Data = this.recoveryDataSource.data;
    Col_Data.push({
      budgetCode: '0102',
      description: 'Pay of Establishment',
      edpCode: '0102',
      amount: '0.00'
    });
    Col_Data.splice(this.recoveryDataSource.data.length - 2, 1);
    this.recoveryDataSource.data = Col_Data;
  }

  // delete row in recovery details
  deleteRowRecovery(index) {
    this.recoveryDataSource.data.splice(index, 1);
    this.recoveryDataSource = new MatTableDataSource(
      this.recoveryDataSource.data
    );
  }
}
/** app-sr-onlinebill ends */

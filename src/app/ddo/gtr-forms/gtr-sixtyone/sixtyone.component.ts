import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import {
  MatTableDataSource,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog
} from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { DialogData } from 'src/app/model/standing-charge';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';
import { ddoMasage } from 'src/app/common/error-message/common-message.constants';
import {
  GrantAddbillNo, ChequeDetails, EPaymentDetails, EdpDetails, ReceiptDetails, ReceiptDataSummary,
  RecoveryDetails, ReceiptSummaryDeduction, HeadData, ChequeListTypeDialog6
} from 'src/app/model/ddo-forms';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { DdoDirective } from 'src/app/common/directive/ddo-directive';
import { HeaderElement } from 'src/app/model/common-listing';


const EPAYMENT_LIST: EPaymentDetails[] = [];

// Grant in add bill table
const GRANT_ADD_BILL: GrantAddbillNo[] = [
  {
    gpfAcno: '',
    amt: '10000.00'
  },
];

const ELEMENT_DATA1: ChequeListTypeDialog6[] = [
  {
    checkType: 'Supplier',
    designation: 'Pay of Officers',
    payeeName: 'ABC Employee',
    accountNo: 32373007812,
    ifscCode: 'SBIN002636',
    amount: '500.00',
    pan: 'TA000778890'
  }
];

const HEAD_DIALOG: HeadData[] = [
  {
    fundType: 'Consolidated',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: '0049:04:900:01:C5 ',
    subHeadDes: ' Interest Payments',
    expenditure: 'Standing Charges',
    itemName: '-',
    schemeNo: '000000'
  },
  {
    fundType: 'Consolidated',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: '0049:04:900:01:C5 ',
    subHeadDes: ' Interest Payments ',
    expenditure: 'New Item',
    itemName: 'Purchase of new car for Director of Agriculture',
    schemeNo: '000000'
  }
];

/** SixtyoneComponent end */
@Component({
  selector: 'app-sixtyone',
  templateUrl: './sixtyone.component.html',
  styleUrls: ['./sixtyone.component.css']
})
export class SixtyoneComponent implements OnInit {
  // EDP Details Table
  expenditureColumn: string[] = [
    'budgetCode',
    'description',
    'edpCode',
    'amount',
    'action'
  ];

  expenditureList: EdpDetails[] = [
    {
      budgetCode: '5000',
      description: 'Refunds',
      edpCode: '5010',
      amount: '10000.00'
    },
  ];

  expenditureDataSource = new MatTableDataSource(this.expenditureList);

  // Cheque Type table

  CheckColumn = [
    'chequeType',
    'partyName',
    'address',
    'accountNo',
    'chequeAmount',
    'action'
  ];

  checkList: ChequeDetails[] = [
    {
      chequeAmount: '0.00',
      chequeType: '',
      partyName: '',
      address: '',
      accountNo: ''
    }
  ];

  checkDataSource = new MatTableDataSource(this.checkList);

  // epayment Type table

  epaymentColumn = ['payeeName', 'accountNo', 'ifscCode', 'amount', 'action'];

  epaymentDataSource = new MatTableDataSource<EPaymentDetails>(EPAYMENT_LIST);

  // gpf bill table

  grantinbillColumn: string[] = [
    'nameCredited',
    'accountReceived',
    'AmountRealised',
    'paymentTreDate',
    'challanNo',
    'amountIncluded',
    'headCredited',
    'namePayee',
    'amountBeRef',
  ];

  grantinbillDataSource = new MatTableDataSource(GRANT_ADD_BILL);


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

  receiptList: ReceiptDetails[] = [
  ];

  receiptDataSource = new MatTableDataSource(this.receiptList);

  // Receipt-Data Summary

  summaryData = [
    'edpCode',
    'chlanDate',
    'pdAccount',
    'party',
    'amount',
    'action'
  ];

  summaryDataSource = new MatTableDataSource<ReceiptDataSummary>([]);

  // recovery data

  recoveryColumn = ['budgetCode', 'description', 'edpCode', 'amount', 'action'];

  recoveryList: RecoveryDetails[] = [];

  recoveryDataSource = new MatTableDataSource(this.recoveryList);

  // recovery deduction
  deductionCol = ['expenditure', 'recovery', 'decuctionA', 'decuctionB'];

  deductionList: ReceiptSummaryDeduction[] = [
    { decuctionA: '0.00', decuctionB: '0.00', expenditure: '10000.00', recovery: '0.00 ' }
  ];

  deductionDataSource = new MatTableDataSource(this.deductionList);


  employeeTypeList: ListValue[] = [
    { value: '1', viewValue: 'GO' },
    { value: '2', viewValue: 'IAS/IPS/IFS' },
    { value: '3', viewValue: 'NGO' },
    { value: '4', viewValue: 'MLA' }
  ];

  classType: ListValue[] = [
    { value: '1', viewValue: ' 1-Voted' },
    { value: '2', viewValue: ' 2-Charged' }
  ];
  demandList: ListValue[] = [
    { value: '1', viewValue: '999' },
    { value: '2', viewValue: '017:Treasury and Accounts Administration' }
  ];

  majorHeadList: ListValue[] = [
    { value: '1', viewValue: '0049 : Interest Receipts' }
  ];
  subMajorHeadList: ListValue[] = [
    {
      value: '1',
      viewValue: '04 : Interest Receipts of State Government '
    }
  ];

  minorHeadList: ListValue[] = [
    { value: '1', viewValue: '900:Deducts Amount' },
    { value: '2', viewValue: '096:Pay and Accounts Offices' },
    { value: '3', viewValue: '097:Treasury Establishment' },
  ];
  subHeadList: ListValue[] = [
    { value: '1', viewValue: '01:Deduct-Refunds' },
    { value: '2', viewValue: '01:Pay and Accounts offices ' },
    { value: '3', viewValue: '01:Treasuries' },
  ];

  detailHeadList: ListValue[] = [
    { value: '1', viewValue: '00:GES-1 Directorate' },
    { value: '2', viewValue: '00:Pay and Accounts offices' },
    { value: '3', viewValue: '00:Treasuries' },
  ];

  objectClassList: ListValue[] = [{ value: '2', viewValue: 'C5: Grant etc.' }];


  grossTotl: HeaderElement[] = [
    { label: 'Gross Total', value: '10000.00' },
    { label: 'Recovery', value: '0.00' },
    { label: 'Deduction A', value: '0.00' },
    { label: 'Deduction B', value: '0.00' },
    { label: 'Net Total', value: '10000.00' },
    { label: 'Amount in Rs.', value: 'Ten thousand Only' },
    { label: 'Disbursement Amount.', value: '10000' },
    { label: 'Appropriation For 2019-2020', value: '0.00' },
    { label: 'Expenditure including this bill', value: '10000.00' },
    { label: 'Balance', value: '-10000.00' }
  ];

  exemptedType: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  billCodeList: ListValue[] = [
    {
      value: '1',
      viewValue:
        '1 - Pay allow Retirement benefit i.e. ltc & leave encas. at reti'
    },
    { value: '2', viewValue: '2 - Widow Relief Assistance To Aged Helpless' },
    { value: '3', viewValue: '3 - Bills Of Scarcity' },
    { value: '4', viewValue: '4 - Bills Of Diet Charges Of Hospital' },
    { value: '5', viewValue: '5 - Scolarship / Stipend Bills' },
    {
      value: '6',
      viewValue: '6 - Relief On Salestax Levied On Diesel Of Fisherman'
    },
    { value: '6', viewValue: '7 - Telephone / Light Bills' },
    { value: '7', viewValue: '8 - Petrol / Diesel Bill' }

  ];

  billCategoryList: ListValue[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'Regular/Challan' },
    { value: '3', viewValue: 'TC' },
    { value: '4', viewValue: 'NIL' }
  ];

  paymentTypeList: ListValue[] = [
    { value: '1', viewValue: 'Cheque' },
    { value: '2', viewValue: 'e-Payment' }
  ];

  chequeTypeList: ListValue[] = [
    { value: '1', viewValue: 'Beneficiary' },
    { value: '2', viewValue: 'Contractor' },
    { value: '3', viewValue: 'GST TDS' },
    { value: '4', viewValue: 'Scholarship' },
    { value: '5', viewValue: 'Service Provider' },
    { value: '5', viewValue: ' Supplier' }
  ];

  financialYearList: ListValue[] = [
    { value: '1', viewValue: '2019' },
    { value: '2', viewValue: '2020' },
    { value: '3', viewValue: '2021' }
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
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' }
  ];

  fundTypeList: ListValue[] = [
    { value: '1', viewValue: '3-Consolidated' },
    { value: '2', viewValue: '4-Contingency' }
  ];

  schemeTypeList: ListValue[] = [
    { value: '1', viewValue: '1-State' },
    { value: '2', viewValue: '1-CSS' }
  ];

  typeList: ListValue[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: 'New Item' },
    { value: '3', viewValue: 'New Work' },
    { value: '4', viewValue: 'Item Continuous' },
    { value: '5', viewValue: 'Work-In-Progress' }
  ];

  chequeList: ListValue[] = [
    { value: '1', viewValue: 'Party Cheque' },
    { value: '2', viewValue: 'DDO Cheque' }
  ];

  itemNameList: ListValue[] = [
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

  expenditureMajorHeadList: ListValue[] = [
    { value: '2049', viewValue: '2049 : Interest Payments' }
  ];

  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];

  employeeTypeCtrl: FormControl = new FormControl();
  classCtrl: FormControl = new FormControl();
  fundTypeCtrl: FormControl = new FormControl();
  schemeTypeCtrl: FormControl = new FormControl();
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
  paymentTypeCtrl: FormControl = new FormControl();
  checkTypeCtrl: FormControl = new FormControl();
  monthOfCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  itemCtrl: FormControl = new FormControl();
  checkTypeTwoCtrl: FormControl = new FormControl();
  billRegisterCtrl: FormControl = new FormControl('', Validators.required);
  nameOfMessenger: FormControl = new FormControl('', Validators.required);
  billTransitNo: FormControl = new FormControl('', Validators.required);
  errorMessage;
  expenditureMajorHeadData = '';
  fileBrowseIndex: number;
  selectedIndex: number;
  formSixtyOne: FormGroup;
  todayDate = Date.now();
  checkTable = false;
  epayment = true;
  tabDisable: Boolean = true;
  isItemList = false;
  isInputEdpCode = true;
  isDelete = false;
  paymentTypeDropDown = true;
  isInputEdpCode1 = true;
  ddoParty: string;
  date = new FormControl(new Date());
  billRigister;
  BillTransit;
  message;
  maxDate = new Date();
  directiveObject = new DdoDirective(this.dialog);

  constructor(
    private fb: FormBuilder,
    private el: ElementRef,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {

    this.errorMessage = ddoMasage;
    this.formsixtyoneformData();
  }

  // form data
  formsixtyoneformData() {
    this.formSixtyOne = this.fb.group({
      employee: [''],
      employeeNo: [''],
      employeeType: [''],
      employeeName: [''],
      financialYear: ['2'],
      designation: [''],
      establishmentr: [''],
      monthOf: ['2'],
      subMajorHead: ['', Validators.required],
      minorHead: ['', Validators.required],
      subHead: ['', Validators.required],
      detailHead: ['', Validators.required],
      objectClass: ['', Validators.required],
      exempted: ['1'],
      headChargeable: [''],
      billCode: ['', Validators.required],
      billCategory: ['1', Validators.required],
      previousBill: [''],
      paymentType: ['2', Validators.required],
      ddoGrantHead: [''],
      classExp: ['1'],
      fundType: ['1'],
      schemeType: ['1'],
      demand: ['', Validators.required],
      majorHead: ['', Validators.required],
      type: ['1'],
      itemName: ['', Validators.required],
      schemeNo: ['', Validators.required],
      expenditureMajorHead: ['', Validators.required],
      expenditureMajorHeadDescription: ['', Validators.required],
      deductRefundAmount: ['', Validators.required],
      refundRevenueAmount: ['', Validators.required],
      districtOf: ['', Validators.required],
      headOfServiceChargeable: [''],
      officeOrderNo: ['', Validators.required],
      date: [''],
      subMajorHeadGtr: ['', Validators.required],
      minorHeadGtr: [''],
      subHeadGTR: [''],
      majorHeadGtr: ['', Validators.required],
      headChargeableGtr: ['']
    });
  }

  // get tab index
  getTabIndex(event?) {

  }

  // reset form
  resetForm() {
  }

  // fill employee data
  fillEmployeeData() {
    this.formSixtyOne.patchValue({
      employeeName: 'Praikh Shah',
      employeeType: '1',
      designation: 'Deputy Accountant',
      establishmentr: 'District Treasury Officer, District Treasury Office, Gandhinagar',
      financialYear: '2',
      monthOf: '2',
    });
  }

  // fill expenditure major head
  fillDataExpenditureMajorHead(event) {
    this.expenditureMajorHeadList.forEach((result) => {
      if (this.formSixtyOne.controls.expenditureMajorHead.value === result.value) {
        this.expenditureMajorHeadData = result.viewValue;
      }
    });
    this.formSixtyOne.patchValue({
      expenditureMajorHeadDescription: this.expenditureMajorHeadData
    });
  }

  // selection for major head
  selectionCheckForHead() {
    const refFormcontrols = this.formSixtyOne.controls;
    if (refFormcontrols.majorHeadGtr.value !== '' &&
      refFormcontrols.subMajorHeadGtr.value !== '' &&
      refFormcontrols.minorHeadGtr.value !== '' && refFormcontrols.subHeadGTR.value !== '') {
      this.formSixtyOne.patchValue({
        headChargeableGtr: '0049:04:900:01'
      });
    } else {
      this.formSixtyOne.patchValue({
        headChargeableGtr: ''
      });
    }
  }

  // go to next
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

  // add row in edp details
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

  // fill data
  fillData() {
    const p_data = this.expenditureDataSource.data;
    p_data.push({
      budgetCode: '1600',
      description: 'Publications',
      edpCode: '1601',
      amount: '0.00'
    });
    p_data.splice(this.expenditureDataSource.data.length - 2, 1);
    this.expenditureDataSource.data = p_data;
  }

  // add row in cheque details
  addNewRow() {
    const p_data = this.checkDataSource.data;
    p_data.push({
      partyName: '',
      accountNo: '',
      chequeAmount: '',
      chequeType: '',
      address: ''
    });
    this.checkDataSource.data = p_data;
  }

  // delete row from cheque details
  addDeleteChequeDataRow(index) {
    this.checkDataSource.data.splice(index, 1);
    this.checkDataSource = new MatTableDataSource(this.checkDataSource.data);
  }

  // calculate total amount in cheque details
  getTotalAmount(): number {
    let chequeAmount = 0;
    this.checkDataSource.data.forEach(element => {
      chequeAmount = chequeAmount + Number(element.chequeAmount);
    });
    return chequeAmount;
  }

  // add row in receipt summary details
  addnewRowreceipt(data) {
    const Col_Data = this.summaryDataSource.data;
    Col_Data.push({
      edpCode: '9547',
      amount: '10000.00',
      party: '',
      pdAccount: '',
      challanDate: ''
    });
    this.summaryDataSource.data = Col_Data;
  }

  // calculate total expenditure amount
  totalExpeAmount(): number {
    let amount = 0;
    this.expenditureDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // delete row from edp details
  deletExpenditureRow(index) {
    this.expenditureDataSource.data.splice(index, 1);
    this.expenditureDataSource = new MatTableDataSource(
      this.expenditureDataSource.data
    );
  }

  // calculate recovery details
  totalRecovery(): number {
    let amount = 0;
    this.recoveryDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculate total receipt summary details
  totalSummary(): number {
    let amount = 0;
    this.summaryDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculate total receipt details amount
  reciptTotal(): number {
    let amount = 0;
    this.receiptDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // sets payment type grid on basis of selection of payment type
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

  // opns employee number pop up
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.formSixtyOne.patchValue({
          employeeNo: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          employeeType: '1',
          designation: result[0].designation,
          establishmentr: 'District Treasury Officer, District Treasury Office, Gandhinagar',
          financialYear: '2',
          monthOf: '2',
        });
      }
    });
  }

  // opens ddo grant head pop-up
  openDialogDdoHead(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(DdoHeadDialog, {
      width: '1000px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.formSixtyOne.patchValue({
        demand: '1',
        majorHead: '1',
        subMajorHead: '1',
        minorHead: '1',
        subHead: '1',
        detailHead: '1',
        objectClass: '2',
        headChargeable: '0049:04:900:01:C5',
        schemeNo: '000000'
      });
    });
  }

  // add new row in edp details
  addNewEdpRow() {
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

  // fill edp description
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

  // remove row from receipt details
  removeRow(index) {
    this.receiptDataSource.data.splice(index, 1);
    this.summaryDataSource.data = [];
    this.receiptDataSource = new MatTableDataSource(
      this.receiptDataSource.data
    );
  }

  // remove row from receipt summary details
  removeRowsummary(index) {
    this.summaryDataSource.data.splice(index, 1);
    this.summaryDataSource = new MatTableDataSource(
      this.summaryDataSource.data
    );
  }

  // sets whether to show item name/ work name field or not
  itemSelect(selectedValue) {
    if (selectedValue.value !== '1') {
      return (this.isItemList = true);
    }
    if (selectedValue.value === '1') {
      return (this.isItemList = false);
    }
  }

  // sets payment type dropdown value
  billValues(data) {
    if (data.value === '3' || data.value === '4') {
      this.paymentTypeDropDown = false;
    }
    if (data.value === '1' || data.value === '2') {
      this.paymentTypeDropDown = true;
    }
  }

  // add row in recovery data source
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

  // add row in recovery details
  recoveryData() {
    const Col_Data = this.recoveryDataSource.data;
    Col_Data.push({
      budgetCode: '3133',
      description: 'Pay Of Officers',
      edpCode: '3119',
      amount: '0.00'
    });
    Col_Data.splice(this.recoveryDataSource.data.length - 2, 1);
    this.recoveryDataSource.data = Col_Data;
  }

  // delete row from recovery details
  deleteRowRecovery(index) {
    this.recoveryDataSource.data.splice(index, 1);
    this.recoveryDataSource = new MatTableDataSource(
      this.recoveryDataSource.data
    );
  }

  // change ddo value
  changeDDoValue(data) {
    if (data.value === '1') {
      this.ddoParty = '';

    }
    if (data.value === '2') {
      this.ddoParty = 'District Treasury Officer, District Treasury Office, Gandhinagar';
    }
  }

  // decimal point controls
  decimalPointControls(refControl) {
    if (refControl.value !== '') {
      refControl.value = Number(refControl.value).toFixed(2);
      refControl.setValue(refControl.value);
    }
  }

  // opens cheque list dialog pop-up
  checkDialog(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(GTR61ADialogCheckList, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      const p_data = this.epaymentDataSource.data;
      this.isInputEdpCode = false;
      this.isDelete = true;

      p_data.push({
        payeeName: 'ABC Employee',
        accountNo: 32373007812,
        ifscCode: 'SBIN002636',
        amount: '10000.00'
      });
      this.epaymentDataSource.data = p_data;
    });
  }

  // total epay amount
  totalAmountEpay(): number {
    let amount = 0;
    this.epaymentDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // go to cheque list
  goToCheckList() {
    this.router.navigate(['/ddo/cheque-list']);
  }

  // go to report
  goToReport() {
    this.router.navigate(['/ddo/report-gtr-61']);
  }
}
/** SixtyoneComponent start */



/** DdoHeadDialog start */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ddo-head-dialog',
  templateUrl: 'ddo-head-dialog.html'
})
// tslint:disable-next-line: component-class-suffix
export class DdoHeadDialog {

  // constructor
  constructor(
    public dialogRef: MatDialogRef<DdoHeadDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  // table data
  displayedColumns: string[] = [
    'fundType',
    'voted',
    'stateCss',
    'bSubHeadSt',
    'subHeadDes',
    'expenditure',
    'itemName',
    'schemeNo'
  ];
  dataSource = new MatTableDataSource(HEAD_DIALOG);
  // table data end

  selection = new SelectionModel<HeadData>(true, []);

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  // close the pop up on click on budget head structure
  selectBudgetHead(data): void {
    this.dialogRef.close(data);
  }
}
/** DdoHeadDialog end */



/** GTR61ADialogCheckList start */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'gtr-dialog-CheckList-dialog',
  templateUrl: 'gtr-dialog-Check-List.html'
})
// tslint:disable-next-line: component-class-suffix
export class GTR61ADialogCheckList {

  // constructor
  constructor(
    public dialogRef: MatDialogRef<GTR61ADialogCheckList>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private route: Router
  ) { }

  // table data
  displayedColumns: string[] = [
    'select',
    'vender',
    'checkType',
    'accountNo',
    'panNo'
  ];
  dataSource = new MatTableDataSource<ChequeListTypeDialog6>(ELEMENT_DATA1);
  // table data end

  // directive object for checkbox
  directiveObj = new CommonDirective(this.route);

  selection = new SelectionModel<ChequeListTypeDialog6>(true, []);

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  // add to bill
  addToBill() { }
}
/** GTR61ADialogCheckList end */

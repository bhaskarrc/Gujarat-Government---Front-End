
import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource } from '@angular/material';
import {
  MatDialog, MatDialogRef, MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { DialogData } from 'src/app/model/standing-charge';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';
import { ddoMasage } from 'src/app/common/error-message/common-message.constants';
import {
  EdpDetails,
  ReceiptDetails,
  ReceiptDataSummary,
  ChequeDetails,
  ReceiptSummaryDeduction,
  EPaymentDetails,
  RecoveryDetails,
  HeadDataSr,
  ChequeListTypeDialog1,
  GpfBillDetails
} from 'src/app/model/ddo-forms';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { DdoDirective } from 'src/app/common/directive/ddo-directive';
import { HeaderElement } from 'src/app/model/common-listing';

const ELEMENT_DATA: HeadDataSr[] = [
  {
    fundType: 'Public Account',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: '999:8009:01:101:01:: ',
    subHeadDes: 'For other than class IV Government Servants ',
    schemeNo: '000000'
  },
  {
    fundType: 'Public Account',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: ' 999:8009:01:101:02:: ',
    subHeadDes: 'For class IV Government Servants ',
    schemeNo: '000000'
  },
  {
    fundType: 'Public Account',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: '999:8009:01:101:03::  ',
    subHeadDes: 'For Divisional Accountant`s Provident Fund ',
    schemeNo: '000000'
  },
  {
    fundType: 'Public Account',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: ' 999:8009:01:102:01:: ',
    subHeadDes: 'Contributory Provident Fund ',
    schemeNo: '000000'
  },
  {
    fundType: 'Public Account',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: ' 999:8009:01:102:02:: ',
    subHeadDes: 'Workmen Contributory Provident Fund ',
    schemeNo: '000000'
  },
  {
    fundType: 'Public Account',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: '999:8009:01:104:01::  ',
    subHeadDes: 'All India Service Provident Fund ',
    schemeNo: '000000'
  },
  {
    fundType: 'Public Account',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: ' 999:8009:60:101:01:: ',
    subHeadDes: 'Workmen`s Contributory Provident Fund ',
    schemeNo: '000000'
  },
  {
    fundType: 'Public Account',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: ' 999:8009:60:103:01:: ',
    subHeadDes: 'Provident Fund of the Staff including Primary Teachers of the District School Boards ',
    schemeNo: '000000'
  },
  {
    fundType: 'Public Account',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: ' 999:8009:60:103:02:: ',
    subHeadDes: 'General Provident Fund of P.W.D. work charged employees ',
    schemeNo: '000000'
  },
  {
    fundType: 'Public Account',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: ' 999:8009:60:103:03::',
    subHeadDes: 'Contributory Provident Fund of Gujarat Housing Boards ',
    schemeNo: '000000'
  },
  {
    fundType: 'Public Account',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: ' 999:8009:60:103:04::',
    subHeadDes: 'General Provident Fund of Daily wages employees',
    schemeNo: '000000'
  }
];

const ELEMENT_DATA1: ChequeListTypeDialog1[] = [
  { gpfNumber: 'MEDL/4323', employeeName: 'ABC Employee', designation: 'Office Assistant' },
  { gpfNumber: 'MEDL/4231', employeeName: 'EFG Employee', designation: 'Office Incharge' },
  { gpfNumber: 'MEDL/4325', employeeName: 'HIJ Employee', designation: 'Officer Class1' }
];


/**  GtrSeventyfiveComponent start*/
@Component({
  selector: 'app-gtr-seventyfive',
  templateUrl: './gtr-seventyfive.component.html',
  styleUrls: ['./gtr-seventyfive.component.css']
})
export class GtrSeventyfiveComponent implements OnInit {

  // variables
  gtrSeventyFive =
    'FORM G.T.R  75  - Bill for Withdrawal of Final Payment / Advance / Other Withdrawal From GPF (Other than Class IV and Workcharged) ';
  refNuber = 'Reference Number:';
  refNuberDate = 'Reference Date:';
  home = 'Home';
  ddo = 'DDO';
  createBill = 'Create Online Bill';
  billPreForm = 'Bill Preparation Form';
  ddoInfo = 'DDO Information';
  budgetDetail = 'Budget Details';
  empDetails = false;
  paymentTypeDropDown = true;
  checkTable = false;
  epayment = true;
  isInputEdpCode = true;
  isDelete = false;
  isInputEdpCode1 = true;
  isInstitute = false;
  isTrade = false;
  ddoParty;
  todayDate = Date.now();
  date = new FormControl(new Date());
  tabDisable: Boolean = true;
  selectedIndex: number;
  billPreprationFormFourtyFive: FormGroup;
  incomeCategory: FormGroup;
  amount;
  errorMessages = ddoMasage;
  fileBrowseIndex: number;
  maxDate;
  heading = 'Advances / Withdrawals Rs';

  grossTotl: HeaderElement[] = [
    { label: 'Gross Total', value: '5000.00' },
    { label: 'Recovery', value: '0.00' },
    { label: 'Deduction A', value: '0.00' },
    { label: 'Deduction B', value: '0.00' },
    { label: 'Net Total', value: '5000.00' },
    { label: 'Amount in Rs.', value: 'Five Thousand Only' },
    { label: 'Appropriation For', value: '80000.00' },
    { label: 'Expenditure including this bill', value: '10000.00' },
    { label: 'Balance', value: '70000.00' },
  ];

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog, private el: ElementRef, private router: Router) {

  }

  // lists
  employeeTypeList: ListValue[] = [
    { value: '1', viewValue: 'GO' },
    { value: '2', viewValue: 'IAS/IPS/IFS' },
    { value: '3', viewValue: 'NGO' },
    { value: '4', viewValue: 'MLA' }
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

  classType: ListValue[] = [
    { value: '1', viewValue: '1-Voted' },
    { value: '2', viewValue: '2-Charged' }
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

  demandList: ListValue[] = [
    { value: '1', viewValue: '999' }
  ];

  majorHeadList: ListValue[] = [
    { value: '1', viewValue: '8009 : State Provident Fund' }
  ];
  subMajorHeadList: ListValue[] = [
    { value: '1', viewValue: '01 : Civil' }
  ];

  minorHeadList: ListValue[] = [
    { value: '1', viewValue: '101 : General Provident Fund' }
  ];

  subHeadList: ListValue[] = [
    { value: '1', viewValue: '01:	For other than class IV Government Servants' },
    { value: '2', viewValue: '02: For class IV Government Servants ' },
    { value: '3', viewValue: '03: For class IV Government Servants' },
  ];

  detailHeadList: ListValue[] = [
    { value: '1', viewValue: '00' },
    { value: '2', viewValue: '00' },
    { value: '3', viewValue: '00' },
  ];

  objectClassList: ListValue[] = [
    { value: '2', viewValue: 'C0' }
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
    { value: '4', viewValue: 'NIL' },
  ];

  paymentTypeList: ListValue[] = [
    { value: '1', viewValue: 'Cheque' },
    { value: '2', viewValue: 'e-payment' }
  ];

  designationList: ListValue[] = [
    { value: '1', viewValue: 'Office Assistant' },
    { value: '2', viewValue: 'Office Incharge' },
    { value: '3', viewValue: 'Officer Class1' }
  ];

  chequeList: ListValue[] = [
    { value: '1', viewValue: 'Party Cheque' },
    { value: '2', viewValue: 'DDO Cheque' }
  ];

  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];

  gpdBillList: ListValue[] = [
    { value: '1', viewValue: 'Advances' },
    { value: '2', viewValue: 'Withdrawals' },
    { value: '3', viewValue: 'Final Withdrawal' }
  ];

  // edp details
  expenditureColumn = [
    'budgetCode',
    'description',
    'edpCode',
    'amount',
    'action'
  ];

  expenditureList: EdpDetails[] = [
    { budgetCode: '0000', description: 'For Mh 8009 & Other 8000 Mh', edpCode: '0000', amount: '5000.00' },

  ];
  expenditureDataSource = new MatTableDataSource(this.expenditureList);

  // receiipt details
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
  receiptDataSource = new MatTableDataSource<ReceiptDetails>([]);

  // receipt summary data
  summaryData = [
    'edpCode',
    'chlanDate',
    'pdAccount',
    'party',
    'amount',
    'action'
  ];
  summaryDataSource = new MatTableDataSource<ReceiptDataSummary>([]);

  // receipt summary deduction
  deductionCol = ['expenditure', 'recovery', 'decuctionA', 'decuctionB'];
  deductionList: ReceiptSummaryDeduction[] = [
    { decuctionA: '0.00', decuctionB: '0.00', expenditure: '5000.00', recovery: '0.00' }
  ];
  deductionDataSource = new MatTableDataSource(this.deductionList);

  // gpf bill column
  gpfbillColumn: string[] = [
    'gpfAcno',
    'subScribe',
    'basicPaid',
    'dpppdfOrder',
    'sanctionNo',
    'santionDate',
    'advanceRs',
    'remarks'
  ];
  gpfBill: GpfBillDetails[] = [
    {
      gpfAcno: 'GAGUJ11111',
      subScribe: 'ABC Employee',
      basicPaid: '7200',
      dpppdfOrder: '2565843',
      sanctionNo: '',
      santionDate: '',
      advanceRs: '',
      remarks: ''
    }
  ];
  gpfbillDataSource = new MatTableDataSource<GpfBillDetails>(this.gpfBill);

  // cheque details
  chequeColumn = [
    'chequeType', 'partyName', 'address', 'accountNo', 'chequeAmount', 'action'];

  checkList: ChequeDetails[] = [
    {
      chequeAmount: '0.00',
      chequeType: '',
      address: '',
      partyName: '',
      accountNo: ''
    }
  ];
  checkDataSource = new MatTableDataSource(this.checkList);

  // e-payment details
  epaymentColumn = ['payeeName', 'accountNo', 'ifscCode', 'amount', 'action'];
  epaymentDataSource = new MatTableDataSource<EPaymentDetails>([]);

  // recovery details
  recoveryColumn = ['budgetCode', 'description', 'edpCode', 'amount', 'action'];
  recoveryDataSource = new MatTableDataSource<RecoveryDetails>([]);

  // form control
  monthOfCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();
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
  designationCtrl: FormControl = new FormControl();
  checkTypeTwoCtrl: FormControl = new FormControl();
  gpfbillCtrl: FormControl = new FormControl();
  employeeTypeCtrl: FormControl = new FormControl();

  directiveObject = new DdoDirective(this.dialog);

  ngOnInit() {

    this.maxDate = new Date();
    this.billPreprationFormFourtyFive = this.fb.group({
      employee: [''],
      employeeNo: [''],
      employeeType: [''],
      employeeName: [''],
      financialYear: ['2'],
      designation: [''],
      establishmentr: [''],
      monthOf: ['2'],
      classExp: ['1', Validators.required],
      fundType: ['3', Validators.required],
      schemeType: ['1', Validators.required],
      ddoGrantHead: [''],
      schemeNo: [''],
      demand: ['1', Validators.required],
      majorHead: ['1', Validators.required],
      subMajorHead: ['', Validators.required],
      minorHead: ['', Validators.required],
      subHead: ['', Validators.required],
      detailHead: ['', Validators.required],
      objectClass: ['', Validators.required],
      itemName: ['', Validators.required],
      exempted: ['1'],
      headChargeable: ['', Validators.required],
      billCode: [''],
      billCategory: ['1', Validators.required],
      previousBill: [''],
      paymentType: ['2', Validators.required],
      establishment: [''],
      bilgpf: [''],
      billRegisterNo: [''],
      billTransitRegisterNo: [''],
      msg: [''],
    });
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

  // get tab index
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
  }

  // go to next
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
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

  // get total amount
  getTotalAmount(): number {
    let chequeAmount = 0.00;
    this.checkDataSource.data.forEach(element => {
      chequeAmount = chequeAmount + Number(element.chequeAmount);
    });
    return chequeAmount;
  }

  // total epay amount
  totalAmountEpay(): number {
    let amount = 0.00;
    this.epaymentDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculate total expenditure amount
  totalExpeAmount(): number {
    let amount = 0.00;
    this.expenditureDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculate total recovery amount
  totalRecovery(): number {
    let amount = 0;
    this.recoveryDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculate total summary amount
  totalSummary(): number {
    let amount = 0;
    this.summaryDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculate receipt total
  reciptTotal(): number {
    let amount = 0;
    this.receiptDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // gpf bill details
  totalWithdraw(): number {
    let calcwithdrow = 0;
    this.gpfbillDataSource.data.forEach(element => {
      calcwithdrow = calcwithdrow + Number(element.advanceRs);
    });
    return calcwithdrow;
  }

  // open ddo grant head dialog box
  openDialog(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(GTR75Dialog, {
      width: '1000px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const budgetHeadStructure_array = result.split(':');
        budgetHeadStructure_array.splice(0, 1);
        budgetHeadStructure_array.splice(5, 1);
        budgetHeadStructure_array.splice(6, 1);
        this.billPreprationFormFourtyFive.patchValue({
          schemeNo: '000000',
          demand: '1',
          majorHead: '1',
          subMajorHead: '1',
          minorHead: '1',
          subHead: '1',
          detailHead: '3',
          objectClass: '2',
          billCode: '1',
          headChargeable: '8009:01:101:01:' + '00:' + 'C0'
        });
      }
    });
  }

  // reset the form
  resetForm() {
    this.billPreprationFormFourtyFive.reset();
  }

  // check dialogF
  checkDialog(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(GTR75DialogCheckList, {
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

  // open employee number component
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.empDetails = true;
        this.billPreprationFormFourtyFive.patchValue({
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
      amount: '0.00',
    });
    p_data.splice(this.expenditureDataSource.data.length - 2, 1);
    this.expenditureDataSource.data = p_data;
  }

  // fill employee data
  fillEmployeeData() {
    this.billPreprationFormFourtyFive.patchValue({
      employeeName: 'Praikh Shah',
      employeeType: '1',
      designation: 'Deputy Accountant',
      establishmentr: 'District Treasury Officer, District Treasury Office, Gandhinagar',
      financialYear: '2',
      monthOf: '2',
    });
  }

  // add row in cheque details
  addNewRow() {
    const p_data = this.checkDataSource.data;
    p_data.push({
      partyName: '',
      accountNo: '',
      chequeAmount: '0.00',
      chequeType: '',
      address: ''
    });
    this.checkDataSource.data = p_data;
  }

  // add new row in receipt summary details
  addNewRowReceipt() {
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

  // add new row in receipt details
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

  // add recovery data
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


  // delete row from receipt details
  removeRow(index) {
    this.receiptDataSource.data.splice(index, 1);
    this.summaryDataSource.data = [];
    this.receiptDataSource = new MatTableDataSource(
      this.receiptDataSource.data
    );

  }

  // delete row from edp-details
  deletExpenditureRow(index) {
    this.expenditureDataSource.data.splice(index, 1);
    this.expenditureDataSource = new MatTableDataSource(
      this.expenditureDataSource.data
    );
  }

  // delete row from e-payment details
  deletePaymentRow(index) {
    this.epaymentDataSource.data.splice(index, 1);
    this.epaymentDataSource = new MatTableDataSource(
      this.epaymentDataSource.data
    );
  }

  // delete row from receipt summary details
  removeRowSummary(index) {
    this.summaryDataSource.data.splice(index, 1);
    this.summaryDataSource = new MatTableDataSource(this.summaryDataSource.data);
  }

  // delete row from cheque details
  addDeleteCheckDataRow(index) {
    this.checkDataSource.data.splice(index, 1);
    this.checkDataSource = new MatTableDataSource(this.checkDataSource.data);
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

  // go to report
  goToReport() {
    this.router.navigate(['/ddo/report-gtr-75']);
  }

  // go to cheque list
  goToCheckList() {
    this.router.navigate(['/ddo/cheque-list']);
  }

  // show heading on basis of Bill for GPF dropdown value
  selectBillGpf(event) {
    if (event.value === '1') {
      this.heading = 'Advances';
    }
    if (event.value === '2') {
      this.heading = 'Withdrawals';
    }
    if (event.value === '3') {
      this.heading = 'Final Withdrawal';
    }
  }
}
/**  GtrSeventyfiveComponent end*/



/**  GTR75Dialog start*/
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'gtr75-dialog',
  templateUrl: 'gtr75-dialog.html'
})
// tslint:disable-next-line: component-class-suffix
export class GTR75Dialog {

  constructor(
    public dialogRef: MatDialogRef<GTR75Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  // table data
  displayedColumns: string[] = [
    'fundType',
    'voted',
    'stateCss',
    'bSubHeadSt',
    'subHeadDes',
    'schemeNo'
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // table data end

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  // closes the pop up on click on budget head
  selectBudgetHead(data): void {
    this.dialogRef.close(data);
  }
}
/**  GTR75Dialog end */



/**  GTR75DialogCheckList start*/
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'gtr-75dialog-CheckList-dialog',
  templateUrl: 'gtr-75-dialog-Check-List.html'
})
// tslint:disable-next-line: component-class-suffix
export class GTR75DialogCheckList {

  // constructor
  constructor(
    public dialogRef: MatDialogRef<GTR75DialogCheckList>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private route: Router) { }

  // table data start
  displayedColumns: string[] = ['select', 'gpfNumber', 'employeeName', 'designation'];
  dataSource = new MatTableDataSource<ChequeListTypeDialog1>(ELEMENT_DATA1);
  // table data end

  // directive object for workflow details
  directiveObj = new CommonDirective(this.route);

  selection = new SelectionModel<ChequeListTypeDialog1>(true, []);

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  // add to bill
  addToBill() {
    this.dialogRef.close();
  }
}
/**  GTR75DialogCheckList end */



import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource } from '@angular/material';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { DialogData } from 'src/app/model/standing-charge';
import { Router } from '@angular/router';
import { ddoMasage } from 'src/app/common/error-message/common-message.constants';
import {
  HeadData,
  EdpDetails,
  ReceiptDetails,
  ReceiptDataSummary,
  ReceiptSummaryDeduction,
  RecoveryDetails,
  EPaymentDetails,
  ChequeDetails,
  Attachment,
  GtrDetailsSeventySeven
} from 'src/app/model/ddo-forms';
import { DdoDirective } from 'src/app/common/directive/ddo-directive';
import { HeaderElement } from 'src/app/model/common-listing';


const ELEMENT_DATA: HeadData[] = [
  {
    fundType: 'Consolidated',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: '017:2054:00:095:01:00:C2 ',
    subHeadDes: 'Treasuries',
    expenditure: 'Standing Charges',
    itemName: '-',
    schemeNo: '000000'
  },
  {
    fundType: 'Consolidated',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: '017:2054:00:095:01:00:C2 ',
    subHeadDes: 'Treasuries',
    expenditure: 'New Item',
    itemName: 'Purchase of new car for Director of Agriculture',
    schemeNo: '000000'
  }
];

/** GtrSeventySevenComponent start */
@Component({
  selector: 'app-gtr-seventy-seven',
  templateUrl: './gtr-seventy-seven.component.html',
  styleUrls: ['./gtr-seventy-seven.component.css']
})
export class GtrSeventySevenComponent implements OnInit {

  // variables
  gtrSeventySeven = 'FORM GTR 77';
  refNuber = 'Reference Number:';
  refNuberDate = 'Reference Date:';
  home = 'Home';
  ddo = 'DDO';
  createBill = 'Create Online Bill';
  billPreForm = 'Bill Preparation Form';
  ddoInfo = 'DDO Information';
  budgetDetail = 'Budget Details';
  detailHeaderLable2 = 'Bill for Group Insurance Scheme for 1979';
  ddoParty;
  todayDate = Date.now();
  date = new FormControl(new Date());
  tabDisable: Boolean = true;
  selectedIndex: number;
  checkTable = false;
  epayment = true;
  paymentTypeDropDown = true;
  isItemList = false;
  isInputEdpCode = true;
  isDelete = false;
  isInputEdpCode1 = true;
  billPreprationFormSeventySeven: FormGroup;
  gtr77Details: FormGroup;
  errorMessages = ddoMasage;
  maxDate = new Date();

  grossTotl: HeaderElement[] = [
    { label: 'Gross Total', value: '6000.00' },
    { label: 'Recovery', value: '0.00' },
    { label: 'Deduction A', value: '1000.00' },
    { label: 'Deduction B', value: '0.00' },
    { label: 'Net Total', value: '5000.00' },
    { label: 'Amount in Rs.', value: 'Five Thousand Only' },
    { label: 'Appropriation For', value: '80000.00' },
    { label: 'Expenditure including this bill', value: '10000.00' },
    { label: 'Balance', value: '70000.00' },
  ];

  constructor(private fb: FormBuilder, public dialog: MatDialog, private el: ElementRef, private router: Router) {

  }

  // lists
  classType: ListValue[] = [
    { value: '1', viewValue: '1-Voted' },
    { value: '2', viewValue: '2-Charged' }
  ];

  fundTypeList: ListValue[] = [
    { value: '1', viewValue: '3-Consolidated' },
    { value: '2', viewValue: '4-Contingency' }
  ];

  schemeTypeList: ListValue[] = [
    { value: '1', viewValue: '1-State' },
    { value: '2', viewValue: '2-CSS' }
  ];

  demandList: ListValue[] = [
    { value: '1', viewValue: '017:Treasury and Accounts Administration' }
  ];

  majorHeadList: ListValue[] = [
    { value: '1', viewValue: '2054 : Treasury and Accounts Administration' }
  ];
  subMajorHeadList: ListValue[] = [
    { value: '1', viewValue: '00' }
  ];

  minorHeadList: ListValue[] = [
    { value: '1', viewValue: '095:Directorate of Accounts and Treasuries' },
    { value: '2', viewValue: '096:Pay and Accounts Offices' },
    { value: '3', viewValue: '097:Treasury Establishment' },
  ];

  subHeadList: ListValue[] = [
    { value: '1', viewValue: '01:GES-1 Directorate' },
    { value: '2', viewValue: '01:Pay and Accounts offices ' },
    { value: '3', viewValue: '01:Treasuries' },
  ];

  detailHeadList: ListValue[] = [
    { value: '1', viewValue: '00:GES-1 Directorate' },
    { value: '2', viewValue: '00:Pay and Accounts offices' },
    { value: '3', viewValue: '00:Treasuries' },
  ];

  objectClassList: ListValue[] = [
    { value: '2', viewValue: 'Object Class-2 (Administrative Expenses)' }
  ];
  exemptedTypeList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  billCodeList: ListValue[] = [
    {
      value: '1',
      viewValue: '1-Pay Allows Retirement Benefit I.E Ltc & Leave Encas. At Reti'
    },
    { value: '2', viewValue: '2-Window Relief Assistance To Aged Helpless' },
    { value: '3', viewValue: '3-Bills Of Scarcity' }
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

  chequeTypeList: ListValue[] = [
    { value: '1', viewValue: 'Beneficiary' },
    { value: '2', viewValue: 'Contractor' },
    { value: '3', viewValue: 'GST TDS' },
    { value: '4', viewValue: 'Scholarship' },
    { value: '5', viewValue: 'Service Provider' },
    { value: '5', viewValue: ' Supplier' }
  ];

  chequeTypeChequeList: ListValue[] = [
    { value: '1', viewValue: 'Party Cheque' },
    { value: '2', viewValue: 'DDO Cheque' }
  ];

  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
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
    { budgetCode: '0200', description: 'Wages', edpCode: '0201', amount: '2000.00' },
    { budgetCode: '1300', description: 'Office Expenses', edpCode: '1301', amount: '2000.00' },
    { budgetCode: '2800', description: 'Payment Of Prof. & Special Services', edpCode: '2801', amount: '2000.00' },
  ];
  expenditureDataSource = new MatTableDataSource(this.expenditureList);

  // receipt details
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
    {
      edpCode: '9510',
      description: 'Income Tax',
      dedType: 'A',
      majorHead: '8658',
      subMajorHead: '00',
      minerHead: '112',
      subHead: '00',
      amount: '100.00'
    },
    {
      edpCode: '9520',
      description: 'Surcharge On Income Tax',
      dedType: 'A',
      majorHead: '8658',
      subMajorHead: '00',
      minerHead: '112',
      subHead: '00', amount: '400.00'
    },
    {
      edpCode: '9600',
      description: 'Security Deposit',
      dedType: 'A',
      majorHead: '8443',
      subMajorHead: '00',
      minerHead: '103',
      subHead: '00', amount: '500.00'
    },
  ];
  receiptDataSource = new MatTableDataSource(this.receiptList);

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

  // receipt deduction summary
  deductionCol = ['expenditure', 'recovery', 'decuctionA', 'decuctionB'];
  deductionList: ReceiptSummaryDeduction[] = [
    { decuctionA: '1000.00', decuctionB: '0.00', expenditure: '6000.00', recovery: '0.00' }
  ];
  deductionDataSource = new MatTableDataSource(this.deductionList);

  // cheque details
  chequeColumn = [
    'checkType', 'partyName', 'address', 'accountNo', 'checkAmount', 'action'];

  chequeDataList: ChequeDetails[] = [
    {
      checkType: '',
      partyName: '',
      address: '',
      accountNo: '',
      checkAmount: '',
    }
  ];
  chequeDataSource = new MatTableDataSource(this.chequeDataList);

  // e-payment details
  epaymentColumn = ['payeeName', 'accountNo', 'ifscCode', 'amount', 'action'];
  epaymentDataSource = new MatTableDataSource<EPaymentDetails>([]);

  // recovery details
  recoveryColumn = ['budgetCode', 'description', 'edpCode', 'amount', 'action'];
  recoveryDataSource = new MatTableDataSource<RecoveryDetails>([]);

  // attachment
  brwoseData: Attachment[] = [
    {
      name: undefined,
      file: undefined,
      uploadedBy: ''
    }
  ];

  fileBrowseIndex: number;
  displayedBrowseColumns = [
    'serialNo',
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'
  ];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);

  // gtr details
  gtrTbableColumn: string[] = ['nameOfGovEmployee', 'sanctionOrderNo', 'sanctionOrderDate', 'fundAmount', 'remarks'];
  gtrDetailList: GtrDetailsSeventySeven[] = [
    { nameOfGovEmployee: '', sanctionOrderNo: '', sanctionOrderDate: '', fundAmount: '', remarks: '' },
  ];
  gtrDetailDataSource = new MatTableDataSource<GtrDetailsSeventySeven>(this.gtrDetailList);

  // form controls
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
  checkTypeTwoCtrl: FormControl = new FormControl();

  directiveObject = new DdoDirective(this.dialog);

  ngOnInit() {
    this.billPreprationFormSeventySeven = this.fb.group({
      classExp: ['1', Validators.required],
      fundType: ['1', Validators.required],
      schemeType: ['1', Validators.required],
      ddoGrantHead: [''],
      schemeNo: [''],
      demand: ['', Validators.required],
      majorHead: ['', Validators.required],
      subMajorHead: ['', Validators.required],
      minorHead: ['', Validators.required],
      subHead: ['', Validators.required],
      detailHead: ['', Validators.required],
      objectClass: ['', Validators.required],
      exempted: ['1'],
      headChargeable: ['', Validators.required],
      billCode: ['', Validators.required],
      billCategory: ['1', Validators.required],
      previousBill: [''],
      paymentType: ['2', Validators.required],
      billRegisterNo: [''],
      billTransitRegisterNo: [''],
      msg: [''],
    });

    this.gtr77Details = this.fb.group({
      nameOfGovEmployee: ['', Validators.required],
      sanctionOrderNo: ['', Validators.required],
      sanctionOrderDate: ['', Validators.required],
      fundAmount: ['', Validators.required],
      remarksControl: ['', Validators.required],
      netAmountPayable: ['', Validators.required],
      billPassDate: ['', Validators.required],
      billPassedAmount: ['', Validators.required],
      amountForPaymentInWords: ['', Validators.required],
      billSentDate: ['', Validators.required],
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
    let checkAmount = 0;
    this.chequeDataSource.data.forEach(element1 => {
      checkAmount = checkAmount + Number(element1.checkAmount);
    });
    return checkAmount;
  }

  // total epay amount
  totalAmountEpay(): number {
    let amount = 0;
    this.epaymentDataSource.data.forEach(element1 => {
      amount = amount + Number(element1.amount);
    });
    return amount;
  }

  // calculate total expenditure amount
  totalExpeAmount(): number {
    let amount = 0;
    this.expenditureDataSource.data.forEach((element1) => {
      amount = amount + Number(element1.amount);
    });
    return amount;
  }

  // calculate total recovery amount
  totalRecovery(): number {
    let amount = 0;
    this.recoveryDataSource.data.forEach((element1) => {
      amount = amount + Number(element1.amount);
    });
    return amount;
  }

  // calculate total summary amount
  totalSummary(): number {
    let amount = 0;
    this.summaryDataSource.data.forEach((element1) => {
      amount = amount + Number(element1.amount);
    });
    return amount;
  }

  // calculate receipt total
  reciptTotal(): number {
    let amount = 0;
    this.receiptDataSource.data.forEach((element1) => {
      amount = amount + Number(element1.amount);
    });
    return amount;
  }

  // open ddo grant head dialog box
  openDialog(data?): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(GTR77Dialog, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.billPreprationFormSeventySeven.patchValue({
        // class: 'Class I',
        schemeNo: '000000',
        demand: '1',
        majorHead: '1',
        subMajorHead: '1',
        minorHead: '1',
        subHead: '1',
        detailHead: '1',
        objectClass: '2',
        headChargeable: '017:2054:00:095:01:00:C2 '
      });
    });
  }

  // reset the form
  resetForm() {
    this.billPreprationFormSeventySeven.reset();
  }


  // add new row in edp-details
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

  // add new row in payment type cheque
  addNewRow() {
    const p_data = this.chequeDataSource.data;
    p_data.push({
      checkType: '',
      partyName: '',
      address: '',
      accountNo: '',
      checkAmount: '',
    });
    this.chequeDataSource.data = p_data;
  }

  // add new row in receipt-data summary
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

  // remove row in receipt details
  removeRow(index) {
    this.receiptDataSource.data.splice(index, 1);
    this.summaryDataSource.data = [];
    this.receiptDataSource = new MatTableDataSource(
      this.receiptDataSource.data
    );

  }

  // delete row in edp-details
  deletExpenditureRow(index) {
    this.expenditureDataSource.data.splice(index, 1);
    this.expenditureDataSource = new MatTableDataSource(
      this.expenditureDataSource.data
    );
  }

  // remove row from e-payment details
  deletePaymentRow(index) {
    this.epaymentDataSource.data.splice(index, 1);
    this.epaymentDataSource = new MatTableDataSource(
      this.epaymentDataSource.data
    );
  }

  // remove row in receipt-data summary
  removeRowSummary(index) {
    this.summaryDataSource.data.splice(index, 1);
    this.summaryDataSource = new MatTableDataSource(this.summaryDataSource.data);
  }

  // delete row in cheque payment type
  addDeleteChequeDataRow(index) {
    this.chequeDataSource.data.splice(index, 1);
    this.chequeDataSource = new MatTableDataSource(this.chequeDataSource.data);
  }

  // delete row in recovery details
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
    this.router.navigate(['/ddo/report-gtr-44']);
  }

  // go to cheque list
  goToCheckList() {
    this.router.navigate(['/ddo/cheque-list']);
  }

  // check dialog
  checkDialog() {

  }

}
/** GtrSeventySevenComponent end */


/** GTR77Dialog start */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'gtr77-dialog',
  templateUrl: 'gtr77-dialog.html'
})
// tslint:disable-next-line: component-class-suffix
export class GTR77Dialog {

  constructor(
    public dialogRef: MatDialogRef<GTR77Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

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
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  // closes the dialog on click on budget head
  selectBudgetHead(): void {
    this.dialogRef.close();
  }
}
/** GTR77Dialog end */

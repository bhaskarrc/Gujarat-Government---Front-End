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
import { Router } from '@angular/router';
import { ddoMasage } from 'src/app/common/error-message/common-message.constants';
import {
  ChequeDetails,
  EPaymentDetails,
  HeadData,
  RecoveryDetails,
  ReceiptDetails,
  EdpDetails,
  ReceiptDataSummary,
  ReceiptSummaryDeduction,
  ChequeListTypeDialog5,
  GrantAddBill
} from 'src/app/model/ddo-forms';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { DdoDirective } from 'src/app/common/directive/ddo-directive';
import { HeaderElement } from 'src/app/model/common-listing';


/** GTR83DialogComponent start */
@Component({
  selector: 'app-gtr83-dialog',
  templateUrl: 'gtr83-dialog.html'
})
export class GTR83DialogComponent {
  elementData: HeadData[] = [
    {
      fundType: 'Consolidated',
      voted: 'Voted',
      stateCss: 'State',
      bSubHeadSt: '0075:00:101:00:00:C5 ',
      subHeadDes: ' 52:HRT- 12 National Medicinal Plant Mission ',
      expenditure: 'Standing Charges',
      itemName: '-',
      schemeNo: '000000'
    },
    {
      fundType: 'Consolidated',
      voted: 'Voted',
      stateCss: 'State',
      bSubHeadSt: '0075:00:101:00:00:C5',
      subHeadDes: ' 52:HRT- 12 National Medicinal Plant Mission ',
      expenditure: 'New Item',
      itemName: 'Purchase of new car for Director of Agriculture',
      schemeNo: '000000'
    }
  ];
  constructor(
    public dialogRef: MatDialogRef<GTR83DialogComponent>,
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
  dataSource = new MatTableDataSource<HeadData>(this.elementData);

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  // closes dialog box for budget head
  selectBudgetHead(data): void {
    this.dialogRef.close();
  }
}
/** GTR83DialogComponent end */



/** GTR83DialogCheckListComponent start */
@Component({
  selector: 'app-gtr-83dialog-checklist-dialog',
  templateUrl: 'gtr-83-dialog-Check-List.html'
})
export class GTR83DialogCheckListComponent {

  elementData: ChequeListTypeDialog5[] = [
    {
      vender: 'ABC Ltd',
      chequeType: 'Supplier',
      panNo: 'EOXPS4584S',
      accountNo: 32373007812,
      amount: '500.00'
    }
  ];
  constructor(
    public dialogRef: MatDialogRef<GTR83DialogCheckListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private route: Router
  ) { }
  displayedColumns: string[] = [
    'select',
    'vender',
    'chequeType',
    'accountNo',
    'panNo'
  ];

  dataSource = new MatTableDataSource<ChequeListTypeDialog5>(this.elementData);
  directiveObj = new CommonDirective(this.route);

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }
  // add to bill
  addToBill() { }
}
/** GTR83DialogCheckListComponent end */



/** GtrEightythreeComponent start */
@Component({
  selector: 'app-gtr-eightythree',
  templateUrl: './gtr-eightythree.component.html',
  styleUrls: ['./gtr-eightythree.component.css']
})
export class GtrEightythreeComponent implements OnInit {

  maxDate = new Date();

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
  expenditureDataSource = new MatTableDataSource<EdpDetails>(this.expenditureList);

  // cheque details
  chequeColumn = ['chequeType', 'partyName', 'address', 'accountNo', 'chequeAmount', 'action'];
  checkList: ChequeDetails[] = [
    {
      chequeAmount: '0.00',
      chequeType: '',
      partyName: '',
      address: '',
      accountNo: '',
    }
  ];
  checkDataSource = new MatTableDataSource<ChequeDetails>(this.checkList);

  // epayment Type table
  epaymentColumn = ['payeeName', 'accountNo', 'ifscCode', 'amount', 'action'];
  epaymentList: EPaymentDetails[] = [];
  epaymentDataSource = new MatTableDataSource<EPaymentDetails>(this.epaymentList);

  // gpf bill table
  grantinbillColumn: string[] = [
    'lapsedDeposit',
    'depositYear',
    'depositNo',
    'statmentDate',
    'statmentNo',
    'balanceCredit',
    'amountFigures',
    'remarks',
  ];
  grantAddBill: GrantAddBill[] = [
    {
      lapsedDeposit: '',
      depositYear: '',
      depositNo: '',
      statmentDate: '',
      statmentNo: '',
      balanceCredit: '',
      amountFigures: '',
      remarks: '',
    },
  ];
  grantinbillDataSource = new MatTableDataSource<GrantAddBill>(this.grantAddBill);

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
    {
      edpCode: '9547',
      description: 'P.L.A of D.D.D',
      dedType: 'A',
      majorHead: '8448',
      subMajorHead: '00',
      minerHead: '109',
      subHead: '01',
      amount: '10000.00'
    },
  ];
  receiptDataSource = new MatTableDataSource<ReceiptDetails>([]);

  // Receipt-Data Summary
  summaryData = [
    'edpCode',
    'challanDate',
    'pdAccount',
    'party',
    'amount',
    'action'
  ];
  summaryDataList: ReceiptDataSummary[] = [];
  summaryDataSource = new MatTableDataSource<ReceiptDataSummary>(this.summaryDataList);

  // recovery data
  recoveryColumn = ['budgetCode', 'description', 'edpCode', 'amount', 'action'];
  recoveryList: RecoveryDetails[] = [];
  recoveryDataSource = new MatTableDataSource<RecoveryDetails>(this.recoveryList);


  // recovery deduction
  deductionCol = ['expenditure', 'recovery', 'decuctionA', 'decuctionB'];
  deductionList: ReceiptSummaryDeduction[] = [
    { decuctionA: '0.00', decuctionB: '0.00', expenditure: '10000.00', recovery: '0.00 ' }
  ];
  deductionDataSource = new MatTableDataSource<ReceiptSummaryDeduction>(this.deductionList);


  // lists

  classExpenditureList: ListValue[] = [
    { value: '1', viewValue: ' 1-Voted' },
    { value: '2', viewValue: ' 2-Charged' }
  ];

  demandList: ListValue[] = [
    { value: '1', viewValue: '999' }
  ];

  majorHeadList: ListValue[] = [
    { value: '1', viewValue: '0075:Miscellaneous General Services' }
  ];

  subMajorHeadList: ListValue[] = [
    { value: '1', viewValue: '00' }
  ];

  minorHeadList: ListValue[] = [
    { value: '1', viewValue: '101: Unclaimed Deposit' },
  ];
  subHeadList: ListValue[] = [
    { value: '1', viewValue: '00: Unclaimed Deposit' },
  ];

  detailedHeadList: ListValue[] = [
    { value: '1', viewValue: '00' },
  ];

  objectClassList: ListValue[] = [
    { value: '1', viewValue: 'Object Class-0' },
    { value: '2', viewValue: 'Object Class-5 (Other Expenditure)' },
  ];

  grossTotl: HeaderElement[] = [
    { label: 'Gross Total', value: '10000.00' },
    { label: 'Recovery', value: '0.00' },
    { label: 'Deduction A', value: '0.00' },
    { label: 'Deduction B', value: '0.00' },
    { label: 'Net Total', value: '10000.00' },
    { label: 'Amount in Rs.', value: 'Ten Thousand Only' },
    { label: 'Disbursement Amount.', value: '10000' },
    { label: 'Appropriation For', value: '0.00' },
    { label: 'Expenditure including this bill', value: '10000.00' },
    { label: 'Balance', value: '10000.00' }
  ];

  exemptedType: ListValue[] = [
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
    { value: '6', viewValue: '7 - Telephone / Light Bills' },
    { value: '7', viewValue: '8 - Petrol / Diesel Bill' }

  ];

  billCategoryList: ListValue[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'Regular/Challan' },
    { value: '3', viewValue: 'TC' },
    { value: '4', viewValue: 'NIL' }
  ];

  previousBillType: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
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

  checklist: ListValue[] = [
    { value: '1', viewValue: 'Party Cheque' },
    { value: '2', viewValue: 'DDO Cheque' }
  ];

  lapsedList: ListValue[] = [
    { value: '1', viewValue: 'Other Revenue Deposits' },
  ];

  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];

  // form control
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
  previousBillCtrl: FormControl = new FormControl();
  paymentTypeCtrl: FormControl = new FormControl();
  checkTypeCtrl: FormControl = new FormControl();
  monthOfCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();
  checkTypeTwoCtrl: FormControl = new FormControl();
  lapsedDepositCtrl: FormControl = new FormControl();

  // variables
  fileBrowseIndex: number;
  selectedIndex: number;
  formEightyThree: FormGroup;
  todayDate = Date.now();
  checkTable = false;
  epayment = true;
  tabDisable: Boolean = true;
  isItemList = false;
  isDelete = false;
  paymentTypeDropDown = true;
  DDoParty: string;
  date = new FormControl(new Date());
  errormsg;
  billRigister;
  BillTransit;
  message;
  certifiesAmount;
  certifiesAmountInWords;
  creditedToName;
  depositNo;
  paidCertifiedAmount;
  remainingAmountToPay;
  netDeduction;
  paidAmountOutRsVal1;
  paidAmountInRsVal1;

  directiveObject = new DdoDirective(this.dialog);

  constructor(
    private fb: FormBuilder,
    private el: ElementRef,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.errormsg = ddoMasage;
    this.formEightyThreeFormData();
  }

  // form data
  formEightyThreeFormData() {
    this.formEightyThree = this.fb.group({
      establishment: [''],
      subMajorHead: ['1'],
      minorHead: ['1'],
      subHead: ['1'],
      detailHead: ['1'],
      objectClass: [''],
      exempted: ['1'],
      headChargeable: [''],
      billCode: [''],
      billCategory: ['1'],
      previousBill: [''],
      paymentType: ['2'],
      ddoGrantHead: [''],
      monthOf: ['2'],
      financialYear: ['2'],
      classExp: ['1'],
      fundType: ['1'],
      schemeType: ['1'],
      demand: ['1'],
      majorHead: ['1'],
      schemeNo: ['000000'],
      expenditureMajorHead: [''],
      headOfServiceChargeable: [''],
      expenditureDesc: [''],
    });
  }

  // on key up of expenditureMajorHead patch data
  keyUp(data) {
    if (this.formEightyThree.value.expenditureMajorHead !== '') {
      this.formEightyThree.patchValue({
        expenditureDesc: 'Social Security and Welfare'
      });
    }
    if (this.formEightyThree.value.expenditureMajorHead === '') {
      this.formEightyThree.patchValue({
        expenditureDesc: ''
      });
    }
  }

  // get value table
  getVaueTable($event?) {
    let depositNo = 0;
    this.grantinbillDataSource.data.forEach(element => {
      depositNo = depositNo + Number(element.depositNo);
    });
    return depositNo;
  }

  // credit to gov
  creditedGov($event?) {
    let balanceCredit = 0;
    this.grantinbillDataSource.data.forEach(element => {
      balanceCredit = Number(element.balanceCredit);
    });
    return balanceCredit;
  }

  // get tab index
  getTabIndex(tabIndex?) {
    this.selectedIndex = tabIndex;
    const temp = this.selectedIndex;
  }

  // reset form
  resetForm() { }

  // amount figure
  amountFigu($event?) {
    let amountFigures = 0;
    this.grantinbillDataSource.data.forEach(element => {
      amountFigures = Number(element.amountFigures);
    });
    return amountFigures;
  }

  // go to next
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

  // delete row from attachment
  addLeave() {
    const p_data = this.expenditureDataSource.data;
    p_data.push({
      budgetCode: '',
      description: '',
      edpCode: '',
      amount: '0.00'
    });
    this.expenditureDataSource.data = p_data;
  }

  // fill data in edp details table
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

  // add new row in cheque table for payment mode cheque
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

  // delete row from cheque table for payment mode cheque
  addDeleteChequeDataRow(index) {
    this.checkDataSource.data.splice(index, 1);
    this.checkDataSource = new MatTableDataSource(this.checkDataSource.data);
  }

  // get total amount
  getTotalAmount(): number {
    let chequeAmount = 0;
    this.checkDataSource.data.forEach(element => {
      chequeAmount = chequeAmount + Number(element.chequeAmount);
    });
    return chequeAmount;
  }

  // add new row in receipt-data summary datasource
  addNewRowReceipt(data) {
    const Col_Data = this.summaryDataSource.data;
    Col_Data.push({
      edpCode: '9547',
      amount: '10000.00',
      challanDate: '',
      pdAccount: '',
      party: ''
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

  // delete row from edp details datasource
  deletExpenditureRow(index) {
    this.expenditureDataSource.data.splice(index, 1);
    this.expenditureDataSource = new MatTableDataSource(
      this.expenditureDataSource.data
    );
  }

  // calculate total recovery amount
  totalRecovery(): number {
    let amount = 0;
    this.recoveryDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculate total summary amount
  totalSummary(): number {
    let amount = 0;
    this.summaryDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculate receipt total
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

  // opens ddo grant head dialog box
  openDialogDdoHead(): void {
    const dialogRef = this.dialog.open(GTR83DialogComponent, {
      width: '1000px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.formEightyThree.patchValue({
        demand: '1',
        majorHead: '1',
        subMajorHead: '1',
        minorHead: '1',
        subHead: '1',
        detailHead: '1',
        objectClass: '2',
        headChargeable: '0075:00:101:00:00:C5',
        schemeNo: '000000'
      });
    });
  }

  // add new row in receipt details datasource
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
  }

  // fill edp description in receipt details datasource
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

  // delete row ffrom receipt details datasource
  removeRow(index) {
    this.receiptDataSource.data.splice(index, 1);
    this.summaryDataSource.data = [];
    this.receiptDataSource = new MatTableDataSource(
      this.receiptDataSource.data
    );
  }

  // delete row from receipt-data summary datasource
  removeRowSummary(index) {
    this.summaryDataSource.data.splice(index, 1);
    this.summaryDataSource = new MatTableDataSource(
      this.summaryDataSource.data
    );
  }

  // delete row from e-payment table for payment mode e-payment
  deleteEPaymentRow(index) {
    this.epaymentDataSource.data.splice(index, 1);
    this.epaymentDataSource = new MatTableDataSource(
      this.epaymentDataSource.data
    );
  }

  // sets value of headChargeable & schemeNo if all the previous field starting from demand to object class has value
  objectClassSelect(data: any) {
    const demand = this.formEightyThree.controls.demand.value;
    const majorHead = this.formEightyThree.controls.majorHead.value;
    const subMajorHead = this.formEightyThree.controls.subMajorHead.value;
    const minorHead = this.formEightyThree.controls.minorHead.value;
    const subHead = this.formEightyThree.controls.subHead.value;
    if (demand !== '' || majorHead !== '' || subMajorHead !== '' || minorHead !== '' || subHead !== '') {
      this.formEightyThree.patchValue({
        headChargeable: '0075:00:101:00:00:C5',
        schemeNo: '000000',
      });
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

  // add row in recovery details datasource
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

  // replace data in recovery details datasource
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

  // delete row from recovery details datasource
  deleteRowRecovery(index) {
    this.recoveryDataSource.data.splice(index, 1);
    this.recoveryDataSource = new MatTableDataSource(
      this.recoveryDataSource.data
    );
  }

  // sets ddoparty name on basis of cheque type oin payment mode cheque
  changeDdoValue(data) {
    if (data.value === '1') {
      this.DDoParty = '';

    }
    if (data.value === '2') {
      this.DDoParty = 'District Treasury Officer, District Treasury Office, Gandhinagar';
    }
  }

  // paid amount in rs
  paidAmountInRsVal(data) {
    this.paidAmountInRsVal1 = data;
  }

  // paid amount out rs value
  paidAmountOutRsVal(data) {
    this.paidAmountOutRsVal1 = data;
  }

  // opens GTR83DialogCheckListComponent
  checkDialog(): void {
    const dialogRef = this.dialog.open(GTR83DialogCheckListComponent, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      const p_data = this.epaymentDataSource.data;
      this.isDelete = true;

      p_data.push({
        payeeName: 'ABC Ltd',
        accountNo: 32373007812,
        ifscCode: 'SBIN002636',
        amount: '0.00'
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

  // navigate to cheque-list
  goToCheckList() {
    this.router.navigate(['/ddo/cheque-list']);
  }

  // navigates to report
  goToReport() {
    this.router.navigate(['/ddo/report-gtr-83']);
  }
}
/** GtrEightythreeComponent end */

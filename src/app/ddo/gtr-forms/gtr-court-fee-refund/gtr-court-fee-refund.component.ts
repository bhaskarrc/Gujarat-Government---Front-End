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
import { Router } from '@angular/router';
import { ddoMasage } from 'src/app/common/error-message/common-message.constants';
import {
  HeadData,
  ChequeDetails,
  RecoveryDetails,
  EdpDetails, EPaymentDetails,
  ReceiptDetails,
  ReceiptDataSummary,
  ReceiptSummaryDeduction,
  ChequeListTypeDialog3
} from 'src/app/model/ddo-forms';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { DdoDirective } from 'src/app/common/directive/ddo-directive';
import { HeaderElement } from 'src/app/model/common-listing';


/**CFRDdoHeadDialogComponent starts**/
@Component({
  selector: 'app-ddo-head-dialog',
  templateUrl: 'ddo-head-dialog.html'
})
export class CFRDdoHeadDialogComponent {
  headDialogData: HeadData[] = [
    {
      fundType: 'Consolidated',
      voted: 'Voted',
      stateCss: 'State',
      bSubHeadSt: '0030:01:101:90:00:C4',
      subHeadDes: '90: Deduct Refunds',
      expenditure: '-',
      itemName: '-',
      schemeNo: '000000'
    },
    {
      fundType: 'Consolidated',
      voted: 'Voted',
      stateCss: 'State',
      bSubHeadSt: '0030:01:101:90:00:C5',
      subHeadDes: '90: Deduct Refunds',
      expenditure: '-',
      itemName: '-',
      schemeNo: '000000'
    }
  ];
  constructor(
    public dialogRef: MatDialogRef<CFRDdoHeadDialogComponent>,
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
  dataSource = new MatTableDataSource<HeadData>(this.headDialogData);
  selection = new SelectionModel<HeadData>(true, []);

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  // closes budget head dialog box
  selectBudgetHead(data): void {
    this.dialogRef.close(data);
  }
}
/**CFRDdoHeadDialogComponent ends**/



/* CFRGTR62ADialogCheckListComponent starts */
@Component({
  selector: 'app-gtr-dialog-checklist-dialog',
  templateUrl: 'gtr-dialog-Check-List.html'
})
export class CFRGTR62ADialogCheckListComponent {

  elementData: ChequeListTypeDialog3[] = [
    {
      vender: 'ABC Ltd',
      chequeType: 'Supplier',
      designation: 'Pay of Officers',
      payeeName: 'ABC Ltd',
      accountNo: 32373007812,
      ifscCode: 'SBIN002636',
      amount: '500.00',
      panNo: 'EMYC0000100'
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<CFRGTR62ADialogCheckListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private route: Router
  ) { }
  displayedColumns: string[] = [
    'select',
    'vender',
    'chequeType',
    'accountNo',
    'panNo'
  ];

  dataSource = new MatTableDataSource<ChequeListTypeDialog3>(this.elementData);
  selection = new SelectionModel<ChequeListTypeDialog3>(true, []);
  directiveObj = new CommonDirective(this.route);

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  // closes the dialog box
  addToBill() {
    this.dialogRef.close();
  }

}
/* CFRGTR62ADialogCheckListComponent ends */



/* GtrCourtFeeRefundComponent starts */
@Component({
  selector: 'app-gtr-court-fee-refund',
  templateUrl: './gtr-court-fee-refund.component.html',
  styleUrls: ['./gtr-court-fee-refund.component.css']
})
export class GtrCourtFeeRefundComponent implements OnInit {

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


  // Cheque Type table
  chequeColumn = [
    'chequeType',
    'partyName',
    'address',
    'accountNo',
    'chequeAmount',
    'action'
  ];
  chequeList: ChequeDetails[] = [
    {
      chequeType: '',
      partyName: '',
      accountNo: '',
      address: '',
      chequeAmount: '0.00'
    }
  ];
  checkDataSource = new MatTableDataSource<ChequeDetails>(this.chequeList);

  // epayment Type table

  epaymentColumn = ['payeeName', 'accountNo', 'ifscCode', 'amount', 'action'];
  epaymentList: EPaymentDetails[] = [];
  epaymentDataSource = new MatTableDataSource<EPaymentDetails>(this.epaymentList);

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
  receiptDetailsList: ReceiptDetails[] = [];
  receiptDataSource = new MatTableDataSource<ReceiptDetails>(this.receiptDetailsList);


  // Receipt-Data Summary
  summaryData = [
    'edpCode',
    'challanDate',
    'pdAccount',
    'party',
    'amount',
    'action'
  ];
  summaryList: ReceiptDataSummary[] = [];
  summaryDataSource = new MatTableDataSource<ReceiptDataSummary>(this.summaryList);


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
  classType: ListValue[] = [
    { value: '1', viewValue: ' 1-Voted' },
    { value: '2', viewValue: ' 2-Charged' }
  ];
  demandList: ListValue[] = [{ value: '1', viewValue: '999' }];

  typeOfClaimList: ListValue[] = [
    { value: '1', viewValue: 'Plaint' },
    { value: '2', viewValue: 'Court Claim' },
    { value: '3', viewValue: 'Application' },
    { value: '4', viewValue: 'Memo of Appeal' }
  ];

  majorHeadList: ListValue[] = [
    { value: '0030', viewValue: '0030: Stamps and Registration Fees' }
  ];
  subMajorHeadList: ListValue[] = [
    {
      value: '01',
      viewValue: '01: Stamps-Judicial'
    }
  ];

  minorHeadList: ListValue[] = [
    {
      value: '101',
      viewValue: '101: Court fees realised in Stamps'
    },
    {
      value: '800',
      viewValue: '800: Other Receipts'
    },
  ];
  subHeadList: ListValue[] = [
    {
      value: '90',
      viewValue: '90 : Deduct Refunds'
    }
  ];

  detailedHeadList: ListValue[] = [
    {
      value: '00',
      viewValue: '00'
    },
  ];

  objectClassList: ListValue[] = [
    { value: 'C4', viewValue: 'Object Class-4 (Grant etc.)' },
    { value: 'C5', viewValue: 'Object Class-5 (Other Expenditure)' }
  ];

  grossTotl: HeaderElement[] = [
    { label: 'Gross Total', value: '10000.00' },
    { label: 'Recovery', value: '0.00' },
    { label: 'Deduction A', value: '0.00' },
    { label: 'Deduction B', value: '0.00' },
    { label: 'Net Total', value: '10000.00' },
    { label: 'Amount in Rs.', value: 'Ten thousand Only' },
    { label: 'Appropriation For', value: '0.00' },
    { label: 'Expenditure including this bill', value: '10000.00' },
    { label: 'Balance', value: '-10000.00' }
  ];

  exemptedTypeList: ListValue[] = [
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

  chequeTypeChequeList: ListValue[] = [
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

  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];


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
  chequeTypeCtrl: FormControl = new FormControl();
  monthOfCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  itemCtrl: FormControl = new FormControl();
  chequeTypeChequeCtrl: FormControl = new FormControl();
  typeOfClaimCtrl: FormControl = new FormControl();

  // variables
  fileBrowseIndex: number;
  selectedIndex: number;
  cfr: FormGroup;
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
  typeOfEstimate = false;
  ngItemName = false;
  majorHeadVal = '';
  subMajorHeadVal = '';
  minorHeadVal = '';
  subHeadVal = '';
  detailHeadVal = '';
  objectClassVal = '';
  headChargeableVal;
  vendor = 'ABC Ltd';
  amount = '10000';
  displayExpDesc = false;
  ExpMajorHeadDesc = 'Stamps and Registration';
  billRigister;
  BillTransit;
  message;
  paidAmountInCourtVal1;
  refundAmountVal1;
  sentDate = '07-Sep-2020';
  maxDate = new Date();
  directiveObject = new DdoDirective(this.dialog);

  constructor(
    private fb: FormBuilder,
    private el: ElementRef,
    public dialog: MatDialog,
    private router: Router
  ) { }

  errormsg;

  ngOnInit() {
    this.errormsg = ddoMasage;
    this.cfrformData();
  }

  // reset form
  resetForm() { }


  // functiom for cfr form data
  cfrformData() {
    this.cfr = this.fb.group({
      establishment: [''],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
      detailHead: [''],
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
      demand: [''],
      majorHead: [''],
      type: ['1'],
      itemName: [''],
      schemeNo: [''],
      expenditureMajorHead: [''],
      partyName: [''],
      suitNo: [''],
      paidAmountInCourt: [''],
      certificateNo: [''],
      yearOfSuits: [''],
      nameOfCourt: [''],
      refundAmount: [''],
      typeOfClaim: [''],
      expenditureDescription: [''],
    });
  }


  // paid Amount In Court Value
  paidAmountInCourtVal(data) {
    this.paidAmountInCourtVal1 = data;
  }

  // refund Amount Value
  refundAmountVal(data) {
    this.refundAmountVal1 = data;
  }

  // go to next
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
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

  // fill data in table
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

  // add new row in payment type cheque
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

  // delete row in cheque payment type
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

  // add new row in receipt-data summary
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

  // total expenditure amount
  totalExpeAmount(): number {
    let amount = 0;
    this.expenditureDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // delete row in edp-details
  deletExpenditureRow(index) {
    this.expenditureDataSource.data.splice(index, 1);
    this.expenditureDataSource = new MatTableDataSource(
      this.expenditureDataSource.data
    );
  }

  // calculates total recovery
  totalRecovery(): number {
    let amount = 0;
    this.recoveryDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculates total summary
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

  // sets payment type grid on basis of selection of payment type grid
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

  // open ddo head dialog box
  openDialogDdoHead(): void {
    const dialogRef = this.dialog.open(CFRDdoHeadDialogComponent, {
      width: '1000px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.typeOfEstimate = false;
      this.ngItemName = false;
      this.majorHeadVal = this.majorHeadList[0].value;
      this.subMajorHeadVal = this.subMajorHeadList[0].value;
      this.minorHeadVal = this.minorHeadList[0].value;
      this.subHeadVal = this.subHeadList[0].value;
      this.detailHeadVal = this.detailedHeadList[0].value;
      this.objectClassVal = this.objectClassList[0].value;
      let headcharge;
      if (result == null) {
        headcharge = this.majorHeadList[0].value
          + ':'
          + this.subMajorHeadList[0].value
          + ':'
          + this.minorHeadList[0].value
          + ':'
          + this.subHeadList[0].value
          + ':'
          + this.detailedHeadList[0].value
          + ':'
          + this.objectClassList[0].value;
      } else {
        headcharge = result;
      }
      this.cfr.patchValue({
        schemeNo: '000000',
        subMajorHead: this.subMajorHeadList[0].value,
        minorHead: this.minorHeadList[0].value,
        subHead: this.subHeadList[0].value,
        detailHead: this.detailedHeadList[0].value,
        objectClass: this.objectClassList[0].value,
        billCategory: this.billCategoryList[0].value,
        majorHead: this.majorHeadList[0].value,
        demand: this.demandList[0].value,
        headChargeable: headcharge,
      });
    });
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

  // remove row in receipt details
  removeRow(index) {
    this.receiptDataSource.data.splice(index, 1);
    this.summaryDataSource.data = [];
    this.receiptDataSource = new MatTableDataSource(
      this.receiptDataSource.data
    );
  }

  // remove row in receipt-data summary
  removeRowsummary(index) {
    this.summaryDataSource.data.splice(index, 1);
    this.summaryDataSource = new MatTableDataSource(
      this.summaryDataSource.data
    );
  }

  // allow to select item
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
      budgetCode: '3133',
      description: 'Pay Of Officers',
      edpCode: '3119',
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

  // change party name on basis of cheque type
  changeDDovalue(data) {
    if (data.value === '1') {
      this.ddoParty = '';

    }
    if (data.value === '2') {
      this.ddoParty = 'District Treasury Officer, District Treasury Office, Gandhinagar';
    }
  }

  // opens dialog box on selection of value from cheque list type
  checkDialog(): void {
    const dialogRef = this.dialog.open(CFRGTR62ADialogCheckListComponent, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      const p_data = this.epaymentDataSource.data;
      this.isInputEdpCode = false;
      this.isDelete = true;

      p_data.push({
        payeeName: 'ABC Ltd',
        accountNo: 32373007812,
        ifscCode: 'SBIN002636',
        amount: '5000.00'
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


  // naviagte to cheque list
  goToCheckList() {
    this.router.navigate(['/ddo/cheque-list']);
  }

  // navigates to cfr report
  goToReport() {
    this.router.navigate(['/ddo/report-gtr-cfr']);
  }

  // get current tab index
  getTabIndex(event) { }


  // toggles Expenditure Major Head description field
  expenditureMajorHead(data) {
    if (data.length < 4) {
      this.displayExpDesc = false;
    } else {
      this.displayExpDesc = true;
    }
  }

  // calculate headChargable on major head change
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
    this.cfr.patchValue({
      subMajorHead: '',
      subHead: '',
      minorHead: '',
      detailHead: '',
      objectClass: '',
      headChargeable: '',
    });
  }

  // calculate headChargable on sub major head change
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
    this.cfr.patchValue({
      subHead: '',
      minorHead: '',
      detailHead: '',
      objectClass: '',
      headChargeable: '',
    });
  }

  // calculate headChargable on minor head change
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
    this.cfr.patchValue({
      subHead: '',
      detailHead: '',
      objectClass: '',
      headChargeable: '',
    });
  }

  // calculate headChargable on sub head change
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
    this.cfr.patchValue({
      detailHead: '',
      objectClass: '',
      headChargeable: '',
    });
  }

  // calculate headChargable on detail head change
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
    this.cfr.patchValue({
      objectClass: '',
      headChargeable: '',
    });
  }


  // calculate headChargable on object class change
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
    this.cfr.patchValue({
      headChargeable: this.headChargeableVal,
    });
  }


  // calculate headChargable on demand change
  demandChange(data) {
    if (data.value === '019') {
      this.typeOfEstimate = true;
      this.cfr.patchValue({
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
      this.cfr.patchValue({
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

  // display Item Name / Work Name field only if type of Estimate value is other than first dropdown value
  onTypeChange(data) {
    if (data.value === 1) {
      this.ngItemName = false;
    } else {
      this.ngItemName = true;
    }
  }

  // delete row from the table
  deletePaymentRow(index) {
    this.epaymentDataSource.data.splice(index, 1);
    this.epaymentDataSource = new MatTableDataSource(
      this.epaymentDataSource.data
    );
  }

}
/* GtrCourtFeeRefundComponent ends */


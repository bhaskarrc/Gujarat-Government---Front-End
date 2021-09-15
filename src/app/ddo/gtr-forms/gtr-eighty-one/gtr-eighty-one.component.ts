
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
import { ddoMasage } from 'src/app/common/error-message/common-message.constants';
import {
  HeadData,
  EdpDetails,
  ReceiptDetails,
  ReceiptDataSummary,
  ReceiptSummaryDeduction,
  ChequeDetails,
  ChequeListTypeDialog4,
  GtrdetailsList,
  EPaymentDetails, RecoveryDetails
} from 'src/app/model/ddo-forms';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { DdoDirective } from 'src/app/common/directive/ddo-directive';
import { HeaderElement } from 'src/app/model/common-listing';

/* GTR81DialogComponent starts */
@Component({
  selector: 'app-gtr81-dialog',
  templateUrl: 'gtr81-dialog.html'
})
export class GTR81DialogComponent {

  elementData: HeadData[] = [
    {
      fundType: 'Public Account',
      voted: 'Voted',
      stateCss: 'State',
      bSubHeadSt: '999:8443:00:101:00:01:C2 ',
      subHeadDes: 'Revenue Tenancy Deposits',
      expenditure: '-',
      itemName: '-',
      schemeNo: '000000'
    },
    {
      fundType: 'Public Account',
      voted: 'Voted',
      stateCss: 'State',
      bSubHeadSt: '999:8443:00:101:00:01:C2 ',
      subHeadDes: 'Revenue Tenancy Deposits',
      expenditure: '-',
      itemName: '-',
      schemeNo: '000000'
    }
  ];
  constructor(
    public dialogRef: MatDialogRef<GTR81DialogCheckListComponent>,
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
/* GTR81DialogComponent ends */



/* GTR81DialogComponent starts */
@Component({
  selector: 'app-gtr-81dialog-checklist-dialog',
  templateUrl: 'gtr-81-dialog-Check-List.html'
})
export class GTR81DialogCheckListComponent {

  elementData: ChequeListTypeDialog4[] = [
    { vender: 'ABC Ltd', checkType: 'Contractor', accountNo: '3600178925', panNo: 'EOXPS8331P ' },
  ];
  constructor(
    public dialogRef: MatDialogRef<GTR81DialogCheckListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private route: Router) { }
  displayedColumns: string[] = ['select', 'vender', 'checkType', 'accountNo', 'panNo'];

  dataSource = new MatTableDataSource<ChequeListTypeDialog4>(this.elementData);
  selection = new SelectionModel<ChequeListTypeDialog4>(true, []);
  directiveObj = new CommonDirective(this.route);

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  // add to bill
  addToBill() { }
}
/* GTR81DialogComponent ends */




/* GtrEightyOneComponent starts */
@Component({
  selector: 'app-gtr-eighty-one',
  templateUrl: './gtr-eighty-one.component.html',
  styleUrls: ['./gtr-eighty-one.component.css']
})
export class GtrEightyOneComponent implements OnInit {

  // variables
  gtrfourtyFout = 'Form GTR 81 - Refund Of Deposit ';
  refNuber = 'Reference Number:';
  refNuberDate = 'Reference Date:';
  home = 'Home';
  ddo = 'DDO';
  createBill = 'Create Online Bill';
  billPreForm = 'Bill Preparation Form';
  ddoInfo = 'DDO Information';
  budgetDetail = 'Budget Details';
  detailHeaderLable2 = 'Refund Bill Details';
  todayDate = Date.now();
  date = new FormControl(new Date());
  tabDisable: Boolean = true;
  selectedIndex: number;
  fileBrowseIndex: number;
  paymentTypeDropDown = true;
  billpreprationformFourtyFour: FormGroup;
  isItemList = false;
  checkTable = false;
  epayment = true;
  isInputEdpCode = true;
  isDelete = false;
  isInputEdpCode1 = true;
  typeEstimation = true;
  DDoParty;

  // lists
  grossTotl: HeaderElement[] = [
    { label: 'Gross Total', value: '5000.00' },
    { label: 'Recovery', value: '0.00' },
    { label: 'Deduction A', value: '0.00' },
    { label: 'Deduction B', value: '0.00' },
    { label: 'Net Total', value: '5000.00' },
    { label: 'Amount in Rs.', value: 'Five Thousand Only' },
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

  classTypeList: ListValue[] = [
    { value: '1', viewValue: '1-Voted' },
    { value: '2', viewValue: '2-Charged' }
  ];

  fundTypeList: ListValue[] = [
    { value: '1', viewValue: '3-Consolidated' },
    { value: '2', viewValue: '4-Contingency' },
    { value: '3', viewValue: '5-Public Account' }
  ];

  schemeTypeList: ListValue[] = [
    { value: '1', viewValue: '1-State' },
    { value: '2', viewValue: '2-CSS' }
  ];

  demandList: ListValue[] = [
    { value: '1', viewValue: '999' },
    { value: '2', viewValue: '017:Treasury and Accounts Administration' }
  ];

  majorHeadList: ListValue[] = [
    { value: '1', viewValue: '8443: Civil Deposits' },
    { value: '2', viewValue: '2054 : Treasury and Accounts Administration' }
  ];
  subMajorHeadList: ListValue[] = [
    { value: '1', viewValue: '00' }
  ];

  minorHeadList: ListValue[] = [
    { value: '1', viewValue: '101:Revanue Deposits' },
    { value: '2', viewValue: '095:Directorate of Accounts and Treasuries' },
    { value: '3', viewValue: '096:Pay and Accounts Offices' },
    { value: '4', viewValue: '097:Treasury Establishment' },
  ];

  subHeadList: ListValue[] = [
    { value: '1', viewValue: '01:Revanue Tenancy Deposits' },
    { value: '2', viewValue: '01:GES-1 Directorate' },
    { value: '3', viewValue: '01:Pay and Accounts offices ' },
    { value: '4', viewValue: '01:Treasuries' },
  ];

  detailHeadList: ListValue[] = [
    { value: '1', viewValue: '00' },
    { value: '2', viewValue: '00:GES-1 Directorate' },
    { value: '3', viewValue: '00:Pay and Accounts offices' },
    { value: '4', viewValue: '00:Treasuries' },
  ];

  objectClassList: ListValue[] = [
    { value: '2', viewValue: 'Object Class-0' }
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
    { value: '7', viewValue: '7 - Telephone / Light Bills' },
    { value: '8', viewValue: '8 - Petrol / Diesel Bill' }
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

  typeList: ListValue[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: 'New Item' },
    { value: '3', viewValue: 'New Work' },
    { value: '4', viewValue: 'Item Continuous' },
    { value: '5', viewValue: 'Work-In-Progress' }
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

  constructor(private fb: FormBuilder, public dialog: MatDialog, private el: ElementRef, private router: Router) {
  }

  // edp details column
  expenditureColumn = [
    'budgetCode',
    'description',
    'edpCode',
    'amount',
    'action'
  ];
  expenditureList: EdpDetails[] = [
    { budgetCode: '5000', description: 'Refunds', edpCode: '5010', amount: '5000.00' },
  ];
  expenditureDataSource = new MatTableDataSource<EdpDetails>(this.expenditureList);


  // receipt details column
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
  receiptDetailsData: ReceiptDetails[] = [];
  receiptDataSource = new MatTableDataSource<ReceiptDetails>(this.receiptDetailsData);


  // receipt-data-summary column
  summaryData = [
    'edpCode',
    'chlanDate',
    'pdAccount',
    'party',
    'amount',
    'action'
  ];
  summaryDetailsData: ReceiptDataSummary[] = [];
  summaryDataSource = new MatTableDataSource<ReceiptDataSummary>(this.summaryDetailsData);

  // receipt-data-summary deduction column
  deductionCol = ['expenditure', 'recovery', 'decuctionA', 'decuctionB'];
  deductionList: ReceiptSummaryDeduction[] = [
    { decuctionA: '0.00', decuctionB: '0.00', expenditure: '5000.00', recovery: '0.00' }
  ];
  deductionDataSource = new MatTableDataSource<ReceiptSummaryDeduction>(this.deductionList);


  // payment type cheque columns
  checkColumn = [
    'checkType', 'partyName', 'address', 'accountNo', 'chequeAmount', 'action'];
  checkList: ChequeDetails[] = [
    {
      chequeAmount: '0.00',
      partyName: '',
      address: '',
      chequeType: '1',
      accountNo: ''
    }
  ];
  checkDataSource = new MatTableDataSource<ChequeDetails>(this.checkList);


  // epayment payment type column
  epaymentColumn = ['payeeName', 'accountNo', 'ifscCode', 'amount', 'action'];
  epaymentList: EPaymentDetails[] = [
    { payeeName: '', accountNo: 0, ifscCode: '', amount: 100 }
  ];
  epaymentDataSource = new MatTableDataSource<EPaymentDetails>([]);


  // recovery details column
  recoveryColumn = ['budgetCode', 'description', 'edpCode', 'amount', 'action'];
  recoveryDataSource = new MatTableDataSource<RecoveryDetails>([]);

  // refund bill
  refundBillColumn = ['originalNo', 'originDate', 'nameDepositor', 'refundamount', 'itemName', 'action'];
  gtrDetailList: GtrdetailsList[] = [
    { subVoucher: '', description: '', amount: '0', incomeTax: 0, refundamount: null },
  ];
  gtrDetailDataSource = new MatTableDataSource<GtrdetailsList>(this.gtrDetailList);


  // form controls
  monthOfCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();
  classCtrl: FormControl = new FormControl();
  fundTypeCtrl: FormControl = new FormControl();
  schemeTypeCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  ddoGrantHeadCtrl: FormControl = new FormControl();
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
  itemCtrl: FormControl = new FormControl();
  checkTypeTwoCtrl: FormControl = new FormControl();
  errormsg;
  billRigister;
  BillTransit;
  message;
  passedForRupees = '0.00';
  sentDate = '07-Sep-2020';
  maxDate = new Date();
  directiveObject = new DdoDirective(this.dialog);

  ngOnInit() {
    this.errormsg = ddoMasage;
    this.billpreprationformFourtyFour = this.fb.group({
      monthOf: ['2'],
      financialYear: ['2'],
      classExp: ['1', Validators.required],
      fundType: ['3', Validators.required],
      type: ['1', Validators.required],
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
      itemName: ['', Validators.required],
      exempted: ['1'],
      headChargeable: ['', Validators.required],
      billCode: ['', Validators.required],
      billCategory: ['1', Validators.required],
      previousBill: [''],
      paymentType: ['2', Validators.required],
      establishment: [''],
      chequeType: ['1'],
      nameOfDepositor: ['']
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
    const temp = this.selectedIndex;
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

  // item select
  itemSelect(selectedValue) {
    if (selectedValue.value !== '1') {
      return (this.isItemList = true);
    }
    if (selectedValue.value === '1') {
      return (this.isItemList = false);
    }
  }

  // get total amount
  getTotalAmount(): number {
    let chequeAmount = 0;
    this.checkDataSource.data.forEach(element => {
      chequeAmount = chequeAmount + Number(element.chequeAmount);
    });
    return chequeAmount;
  }

  // total epay amount
  totalAmountEpay(): number {
    let amount = 0;
    this.epaymentDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculate total expenditure amount
  totalExpeAmount(): number {
    let amount = 0;
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

  // opens Gtr81GTR81DialogComponent
  openDialog(data?): void {
    const dialogRef = this.dialog.open(GTR81DialogComponent, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.billpreprationformFourtyFour.patchValue({
        schemeNo: '000000',
        demand: '1',
        majorHead: '1',
        subMajorHead: '1',
        minorHead: '1',
        subHead: '1',
        detailHead: '1',
        objectClass: '2',
        headChargeable: '8443:00:101:01:00:C2 ',
        billCategory: '1',
        billCode: '1'
      });
    });
  }

  // sets value of headChargeable & schemeNo if all the previous field starting from demand to object class has value
  objectClassSelect(data: any) {
    const demand = this.billpreprationformFourtyFour.controls.demand.value;
    const majorHead = this.billpreprationformFourtyFour.controls.majorHead.value;
    const subMajorHead = this.billpreprationformFourtyFour.controls.subMajorHead.value;
    const minorHead = this.billpreprationformFourtyFour.controls.minorHead.value;
    const subHead = this.billpreprationformFourtyFour.controls.subHead.value;
    if (demand !== '' ||
      majorHead !== '' ||
      subMajorHead !== '' ||
      minorHead !== '' ||
      subHead !== '') {
      this.billpreprationformFourtyFour.patchValue({
        headChargeable: '2054:00:095:01:00:C2',
        schemeNo: '000000',
      });
    }
  }

  // resets the form
  resetForm() {
    this.billpreprationformFourtyFour.reset();
  }

  // opens GTR81DialogCheckListComponent
  checkDialog(): void {
    const dialogRef = this.dialog.open(GTR81DialogCheckListComponent, {
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
        amount: '0.00'
      });
      this.epaymentDataSource.data = p_data;
    });
  }


  // add row in edp details datasource
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

  // fill data in edp details table
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

  // add new row in cheque table for payment mode cheque
  addNewRow() {
    const p_data = this.checkDataSource.data;
    p_data.push({
      partyName: '',
      accountNo: '',
      chequeAmount: '0.00',
      chequeType: '1',
      address: ''
    });
    this.checkDataSource.data = p_data;
  }

  // add row in gtr-details datasource
  refundBillRow() {
    const Col_Data = this.gtrDetailDataSource.data;
    Col_Data.push({
      subVoucher: '', description: '', amount: '0', incomeTax: 0, refundamount: null
    });
    this.gtrDetailDataSource.data = Col_Data;
  }

  // add new row in receipt-data summary datasource
  addNewRowReceipt(data) {
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
    this.isInputEdpCode1 = false;
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
      budgetCode: '0102',
      description: 'Pay of Establishment',
      edpCode: '0102',
      amount: '0.00'
    });
    Col_Data.splice(this.recoveryDataSource.data.length - 2, 1);
    this.recoveryDataSource.data = Col_Data;
  }

  // delete row ffrom receipt details datasource
  removeRow(index) {
    this.receiptDataSource.data.splice(index, 1);
    this.summaryDataSource.data = [];
    this.receiptDataSource = new MatTableDataSource(
      this.receiptDataSource.data
    );

  }

  // delete row from edp details datasource
  deletExpenditureRow(index) {
    this.expenditureDataSource.data.splice(index, 1);
    this.expenditureDataSource = new MatTableDataSource(
      this.expenditureDataSource.data
    );
  }

  // delete row from e-payment table for payment mode e-payment
  deleteEPaymentRow(index) {
    this.epaymentDataSource.data.splice(index, 1);
    this.epaymentDataSource = new MatTableDataSource(
      this.epaymentDataSource.data
    );
  }

  // delete row from receipt-data summary datasource
  removeRowsummary(index) {
    this.summaryDataSource.data.splice(index, 1);
    this.summaryDataSource = new MatTableDataSource(this.summaryDataSource.data);
  }

  // delete row from cheque table for payment mode cheque
  addDeleteChequeDataRow(index) {
    this.checkDataSource.data.splice(index, 1);
    this.checkDataSource = new MatTableDataSource(this.checkDataSource.data);
  }

  // delete row from recovery details datasource
  deleteRowRecovery(index) {
    this.recoveryDataSource.data.splice(index, 1);
    this.recoveryDataSource = new MatTableDataSource(this.recoveryDataSource.data
    );
  }

  // delete row from gtr-81 details table
  deleteRefundBillRow(index) {
    this.gtrDetailDataSource.data.splice(index, 1);
    this.gtrDetailDataSource = new MatTableDataSource(this.gtrDetailDataSource.data
    );
  }

  // demand change
  demandChange(data) {
    if (data.value === 1) {
      this.typeEstimation = false;
    } else {
      this.typeEstimation = true;
    }
  }

  // sets ddoparty name on basis of cheque type oin payment mode cheque
  changeDDovalue(data) {
    const pdata = this.checkDataSource.data;
    if (data.value === '1') {
      this.DDoParty = '';
    }
    if (data.value === '2') {
      this.DDoParty = 'District Treasury Officer, District Treasury Office, Gandhinagar';
    }
  }

  // navigates to report
  goToReport() {
    this.router.navigate(['/ddo/report-gtr-81']);
  }

  calculateRefundAmount() {
    let amount = 0;
    this.gtrDetailDataSource.data.forEach(element => { amount = Number(element.refundamount) + amount; });
    this.passedForRupees = parseFloat(amount.toString()).toFixed(2);
    return amount;
  }

}
/* GtrEightyOneComponent ends */

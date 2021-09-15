import { Component, OnInit, Inject } from '@angular/core';
import {
  MatTableDataSource,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog

} from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { DialogData } from 'src/app/model/standing-charge';
import { Router } from '@angular/router';
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';
import { ddoMasage } from 'src/app/common/error-message/common-message.constants';
import {
  ChequeDetails, EdpDetails, ReceiptDetails, EPaymentDetails, RecoveryDetails, ReceiptDataSummary,
  ReceiptSummaryDeduction, DdoGrantHeadDialog, ChequeListTypeDialog1, Attachment
} from 'src/app/model/ddo-forms';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { HeaderElement } from 'src/app/model/common-listing';


/** DdoGrantHeadDialogComponent starts */
@Component({
  selector: 'app-ddo-grant-head-dialog',
  templateUrl: 'ddo-grant-head-dialog.component.html'
})
export class DdoGrantHeadDialogComponent {
  // constructor
  constructor(
    public dialogRef: MatDialogRef<DdoGrantHeadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  headDialogData: DdoGrantHeadDialog[] = [
    {
      fundType: 'Consolidated',
      voted: 'Voted',
      stateCss: 'State',
      bSubHeadSt: '2054:00:096:01:00:C1 ',
      subHeadDes: ' 01:Pay and Accounts offices ',
      expenditure: 'Standing Charges',
      itemName: '-',
      schemeNo: '000000'
    },
    {
      fundType: 'Consolidated',
      voted: 'Voted',
      stateCss: 'State',
      bSubHeadSt: '2054:00:096:01:00:C1',
      subHeadDes: ' 01:Pay and Accounts offices ',
      expenditure: 'New Item',
      itemName: 'Purchase of new car for Director of Agriculture',
      schemeNo: '000000'
    }
  ];

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
  dataSource = new MatTableDataSource<DdoGrantHeadDialog>(this.headDialogData);

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  // the dialog closes on click on budget head
  selectBudgetHead(data): void {
    this.dialogRef.close(data);
  }
}
/** DdoGrantHeadDialogComponent ends */



/** ChequeListTypeDialogThirtyFiveComponent starts */
@Component({
  selector: 'app-cheque-list-type-dialog-thirty-five',
  templateUrl: 'cheque-list-type-dialog-thirty-five.comonent.html'
})
export class ChequeListTypeDialogThirtyFiveComponent {
  // constructor
  constructor(
    public dialogRef: MatDialogRef<ChequeListTypeDialogThirtyFiveComponent>, private route: Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  directiveObj = new CommonDirective(this.route);
  displayedColumns: string[] = ['select', 'gpfNumber', 'employeeName', 'designation'];
  // cheque list pop-up table

  elementData: ChequeListTypeDialog1[] = [
    { gpfNumber: 'MEDL/4323', employeeName: 'ABC Employee', designation: 'Office Assistant' },
    { gpfNumber: 'MEDL/4231', employeeName: 'EFG Employee', designation: 'Office Incharge' },
    { gpfNumber: 'MEDL/4325', employeeName: 'HIJ Employee', designation: 'Officer Class1' }
  ];

  dataSource = new MatTableDataSource<ChequeListTypeDialog1>(this.elementData);

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }
  // add to bill
  addToBill() { }
}
/** ChequeListTypeDialogThirtyFiveComponent ends */

@Component({
  selector: 'app-bill-preparation-thirty-five',
  templateUrl: './bill-preparation-thirty-five.component.html',
  styleUrls: ['./bill-preparation-thirty-five.component.css']
})
export class BillPreparationThirtyFiveComponent implements OnInit {

  //  EDP Details Table
  expenditureColumn: string[] = [
    'budgetCode',
    'description',
    'edpCode',
    'amount',
    'action'
  ];
  expenditureList: EdpDetails[] = [
    {
      budgetCode: '0105',
      description: 'Leave Travel Concession',
      edpCode: '0105',
      amount: '15000.00'
    },
    {
      budgetCode: '1100',
      description: 'Domestic Travel Expenses',
      edpCode: '1101 ',
      amount: '0.00'
    },
    {
      budgetCode: '1200',
      description: 'Foreign Travel Expenses',
      edpCode: '1201  ',
      amount: '0.00'
    },
    {
      budgetCode: '1100',
      description: 'Ta/Da To Non Official Member On A/C India',
      edpCode: '1201',
      amount: '0.00'
    },
    {
      budgetCode: '1200 ',
      description: 'Ta/Da To Non Official Mem. On Tour Abroad',
      edpCode: '1202',
      amount: '0.00'
    },

  ];
  expenditureDataSource = new MatTableDataSource<EdpDetails>(this.expenditureList);

  // recovery data
  recoveryColumn = ['budgetCode', 'description', 'edpCode', 'amount', 'action'];
  recoveryList: RecoveryDetails[] = [];
  recoveryDataSource = new MatTableDataSource(this.recoveryList);

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
  receiptList: ReceiptDetails[] = [];
  receiptDataSource = new MatTableDataSource<ReceiptDetails>(this.receiptList);

  // Receipt-Data Summary
  summaryData = [
    'edpCode',
    'chlanDate',
    'pdAccount',
    'party',
    'amount',
    'action'
  ];
  receiptDataSourceList: ReceiptDataSummary[] = [];
  summaryDataSource = new MatTableDataSource<ReceiptDataSummary>(this.receiptDataSourceList);

  // recovery deduction
  deductionColumns = ['expenditure', 'recovery', 'decuctionA', 'decuctionB'];
  deductionList: ReceiptSummaryDeduction[] = [
    { decuctionA: '15000.00', decuctionB: '0.00', expenditure: '15000.00', recovery: '0.00 ' }
  ];
  deductionDataSource = new MatTableDataSource<ReceiptSummaryDeduction>(this.deductionList);

  // Cheque Type table
  chequeColumns = [
    'chequeType',
    'partyName',
    'address',
    'accountNo',
    'chequeAmount',
    'action'
  ];
  chequeList: ChequeDetails[] = [
    {
      chequeType: '0101',
      partyName: 'Pay of Officers',
      accountNo: '1254879',
      address: '43, shiavam, gandhinagar',
      chequeAmount: '0'
    }
  ];
  chequeDataSource = new MatTableDataSource<ChequeDetails>(this.chequeList);


  // epayment Type table
  epaymentColumn = ['payeeName', 'accountNo', 'ifscCode', 'amount', 'action'];
  ePaymentList: EPaymentDetails[] = [

  ];
  epaymentDataSource = new MatTableDataSource<EPaymentDetails>(this.ePaymentList);


  // attachment
  browseData: Attachment[] = [
    {
      name: undefined,
      file: undefined
    }
  ];
  displayedBrowseColumns: string[] = [
    'serialNo',
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'
  ];
  dataSourceBrowse = new MatTableDataSource(this.browseData);

  // lists
  employeeTypeList: ListValue[] = [
    { value: '1', viewValue: 'GO' },
    { value: '2', viewValue: 'IAS/IPS/IFS' },
    { value: '3', viewValue: 'NGO' },
    { value: '4', viewValue: 'MLA' }
  ];

  classTypeList: ListValue[] = [
    { value: '1', viewValue: ' 1-Voted' },
    { value: '2', viewValue: ' 2-Charged' }
  ];
  demandList: ListValue[] = [{ value: '1', viewValue: '017: Treasury and Accounts Administration' }];

  majorHeadList: ListValue[] = [
    { value: '1', viewValue: '2054: Treasury and Accounts Administration' }
  ];
  subMajorHeadList: ListValue[] = [
    {
      value: '1',
      viewValue: '00'
    }
  ];

  minorHeadList: ListValue[] = [
    {
      value: '1',
      viewValue: '096: Pay and Accounts Offices'
    },

  ];
  subHeadList: ListValue[] = [
    {
      value: '1',
      viewValue: '01: Pay and Accounts offices'
    },

  ];

  detailedHeadList: ListValue[] = [
    {
      value: '1',
      viewValue: '00:GES-1 Directorate'
    },
    {
      value: '2',
      viewValue: '00:Pay and Accounts offices'
    },

    {
      value: '3',
      viewValue: '00:Treasuries'
    }
  ];

  objectClassList: ListValue[] = [{ value: '2', viewValue: 'C1: Personel Services and Benefits', }];

  grossTotal: HeaderElement[] = [
    { label: 'Gross Total', value: '15000.00' },
    { label: 'Recovery', value: '0.00' },
    { label: 'Deduction A', value: '0.00' },
    { label: 'Deduction B', value: '0.00' },
    { label: 'Net Total', value: '15000.00' },
    { label: 'Amount in Rs.', value: 'One Hundred Five Only' },
    { label: 'Appropriation For', value: '12500000.00' },
    { label: 'Expenditure including this bill', value: '1535.00' },
    { label: 'Balance', value: '12498465.00' }
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
    { value: '2', viewValue: 'e-payment' }
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

  stateCssList: ListValue[] = [
    { value: '1', viewValue: '1-State' },
    { value: '2', viewValue: '2-CSS' }
  ];

  typeOfEstimateList: ListValue[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: 'New Item' },
    { value: '3', viewValue: 'New Work' },
    { value: '4', viewValue: 'Item Continuous' },
    { value: '5', viewValue: 'Work-In-Progress' }
  ];

  chequeTypeList: ListValue[] = [
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

  designationList: ListValue[] = [
    { value: '1', viewValue: 'Office Assistant' },
    { value: '2', viewValue: 'Office Incharge' },
    { value: '3', viewValue: 'Officer Class1' }
  ];

  // form controls
  designationCtrl: FormControl = new FormControl();
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
  billCategoryCtrl: FormControl = new FormControl();
  paymentTypeCtrl: FormControl = new FormControl();
  monthOfCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();
  typeOfEstimateCtrl: FormControl = new FormControl();
  itemCtrl: FormControl = new FormControl();
  chequeTypeCtrl: FormControl = new FormControl();
  employeeTypeCtrl: FormControl = new FormControl();

  // variables
  fileBrowseIndex: number;
  selectedIndex: number;
  thirtyFive: FormGroup;
  todayDate = Date.now();
  chequeTable = false;
  ePayment = true;
  tabDisable: Boolean = true;
  isItemList = false;
  isInputEdpCode = true;
  isDelete = false;
  paymentTypeDropDown = true;
  isInputEdpCode1 = true;
  ddoParty: string;
  date = new FormControl(new Date());
  empdetails = false;
  errormsg;

  // Date
  maxDate = new Date();

  // constructor
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.errormsg = ddoMasage;
    this.thirtyFiveformData();
  }

  // form data function
  thirtyFiveformData() {
    this.thirtyFive = this.fb.group({
      ddoNo: [{ value: '52', disabled: true }],
      cardexNo: [{ value: '51', disabled: true }],
      ddoName: [{ value: 'D C DAVE', disabled: true }],
      designation: [{ value: 'District Treasury Officer', disabled: true }],
      officeName: [{ value: 'District Treasury Officer, District Treasury Office, Gandhinagar', disabled: true }],
      districtCode: [{ value: '71', disabled: true }],
      billCreator: [{ value: '', disabled: true }],
      billApprover: [{ value: '', disabled: true }],
      employee: [{ value: 'Employee', disabled: true }],
      employeeNo: [''],
      employeeType: [{ value: '1', disabled: true }],
      employeeName: [{ value: '', disabled: true }],
      financialYear: [{ value: '2', disabled: true }],
      designationEmployee: [{ value: '', disabled: true }],
      establishment: [{ value: '', disabled: true }],
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
      ddoGrantHead: [''],
      monthOf: ['2'],
      classExpenditure: ['1', Validators.required],
      fundType: ['1', Validators.required],
      stateCss: ['1', Validators.required],
      demand: ['', Validators.required],
      majorHead: ['', Validators.required],
      type: ['1', Validators.required],
      itemName: ['', Validators.required],
      schemeNo: [''],
      chequeType: ['1'],
      billRegisterNo: [''],
      billTransitNo: [''],
      nameOfMessenger: [''],
    });
  }

  // add row in edp-details table
  addExpenditureRow() {
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

  // fill employee data
  fillEmployeeData() {
    this.thirtyFive.patchValue({
      employeeName: 'Praikh Shah',
      employeeType: '1',
      designationEmployee: 'Deputy Accountant',
      establishment: 'District Treasury Officer, District Treasury Office, Gandhinagar',
      financialYear: '2',
      monthOf: '2',
    });
  }

  // fill data in edp-details table
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

  // add row in cheque table
  addRowCheque() {
    const p_data = this.chequeDataSource.data;
    p_data.push({
      partyName: '',
      chequeType: '',
      address: '',
      chequeAmount: '',
      accountNo: '',
    });
    this.chequeDataSource.data = p_data;
  }

  // delete row in cheque table
  deleteRowCheque(index) {
    this.chequeDataSource.data.splice(index, 1);
    this.chequeDataSource = new MatTableDataSource(this.chequeDataSource.data);
  }

  // calculate total amount in cheque table
  getTotalAmount(): number {
    let chequeAmount = 0;
    this.chequeDataSource.data.forEach(element => {
      chequeAmount = chequeAmount + Number(element.chequeAmount);
    });
    return chequeAmount;
  }

  // add new row in receipt summmary table
  addReceiptRowTable(data) {
    const Col_Data = this.summaryDataSource.data;
    Col_Data.push({
      edpCode: '9547',
      amount: '15000.00',
      challanDate: '',
      pdAccount: '',
      party: '',
    });
    this.summaryDataSource.data = Col_Data;
  }

  // calculate total expenditure amount
  totalExpenditureAmount(): number {
    let amount = 0;
    this.expenditureDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // delele row in edp-details
  deleteExpenditureRow(index) {
    this.expenditureDataSource.data.splice(index, 1);
    this.expenditureDataSource = new MatTableDataSource(
      this.expenditureDataSource.data
    );
  }

  // calculate total amount in recovery details table
  totalRecovery(): number {
    let amount = 0;
    this.recoveryDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculate total amount in receipt-data summary table
  totalSummary(): number {
    let amount = 0;
    this.summaryDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculate total in receipt details table
  totalReceipt(): number {
    let amount = 0;
    this.receiptDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // show e-payment details or cheque details div on basis of payment mode
  payment(data) {
    if (data.value === '1') {
      this.ePayment = false;
      this.chequeTable = true;
    }
    if (data.value === '2') {
      this.chequeTable = false;
      this.ePayment = true;
    }
  }

  // opens ddo grant head dialog box
  openDialoggranthead(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(DdoGrantHeadDialogComponent, {
      width: '1000px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.thirtyFive.patchValue({
        // class: 'Class I',

        demand: '1',
        majorHead: '1',
        subMajorHead: '1',
        minorHead: '1',
        subHead: '1',
        detailHead: '1',
        objectClass: '2',
        headChargeable: '2054:00:096:01:00:C1:c1',
        schemeNo: '000000'
      });
    });
  }

  // add row in receipt details
  addReceiptRow() {
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

  // fill edp description in receipt details table
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

  // delte row from epayment row
  deleteEPaymentRow(index) {
    this.epaymentDataSource.data.splice(index, 1);
    this.epaymentDataSource = new MatTableDataSource(
      this.epaymentDataSource.data
    );
  }

  // delete row in receipt data table
  deleteReceiptRowTable(index) {
    this.receiptDataSource.data.splice(index, 1);
    this.summaryDataSource.data = [];
    this.receiptDataSource = new MatTableDataSource(
      this.receiptDataSource.data
    );
  }

  // delete row in receipt data summary
  deleteSummaryRow(index) {
    this.summaryDataSource.data.splice(index, 1);
    this.summaryDataSource = new MatTableDataSource(
      this.summaryDataSource.data
    );
  }

  // add item name/work name field on basis of value of type of estimate
  itemSelect(selectedValue) {
    if (selectedValue.value !== '1') {
      return (this.isItemList = true);
    }
    if (selectedValue.value === '1') {
      return (this.isItemList = false);
    }
  }

  // show payment type method on basis of value of bill category
  billValues(data) {
    if (data.value === '3' || data.value === '4') {
      this.paymentTypeDropDown = false;
    }
    if (data.value === '1' || data.value === '2') {
      this.paymentTypeDropDown = true;
    }
  }

  // add row in recovery details table
  addRowRecovery() {
    const Col_Data = this.recoveryDataSource.data;
    Col_Data.push({
      budgetCode: '',
      description: '',
      edpCode: '',
      amount: ''
    });
    this.recoveryDataSource.data = Col_Data;
  }

  // add data in recovery details table
  recoveryData() {
    const Col_Data = this.recoveryDataSource.data;
    Col_Data.push({
      budgetCode: '0107',
      description: 'Medical Allowances',
      edpCode: '0107',
      amount: '0.00'
    });
    Col_Data.splice(this.recoveryDataSource.data.length - 2, 1);
    this.recoveryDataSource.data = Col_Data;
  }

  // delete row in recovery details table
  deleteRowRecovery(index) {
    this.recoveryDataSource.data.splice(index, 1);
    this.recoveryDataSource = new MatTableDataSource(
      this.recoveryDataSource.data
    );
  }

  // display value of ddo party on basis of cheque type
  changeDDovalue(data) {
    if (data.value === '1') {
      this.ddoParty = '';

    }
    if (data.value === '2') {
      this.ddoParty = 'District Treasury Officer, District Treasury Office, Gandhinagar';
    }
  }

  // patches value of headchargable and schemeNo on basis of values of fields form major head to object class
  selectionCheckForHead() {
    const refFormcontrols = this.thirtyFive.controls;
    if (refFormcontrols.majorHead.value !== ''
      && refFormcontrols.subMajorHead.value !== '' &&
      refFormcontrols.minorHead.value !== '' &&
      refFormcontrols.subHead.value !== '' && refFormcontrols.objectClass.value !== ''
      && refFormcontrols.detailHead.value !== '') {
      this.thirtyFive.patchValue({
        headChargeable: '2054:00:096:01:00:C1',
        schemeNo: ['000000']
      });
    } else {
      this.thirtyFive.patchValue({
        headChargeableGTR: '',
        schemeNo: ['']
      });
    }
  }

  // opens  GTR35FixpayDialogCheckList component
  checkDialog(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(ChequeListTypeDialogThirtyFiveComponent, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      const p_data = this.epaymentDataSource.data;
      this.isInputEdpCode = false;
      this.isDelete = true;

      p_data.push({
        payeeName: 'ABC Employee',
        accountNo: 12345654,
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
  // opens search employee dialog box
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.empdetails = true;
        this.thirtyFive.patchValue({
          employeeNo: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          employeeType: '1',
          designationEmployee: result[0].designation,
          establishment: 'District Treasury Officer, District Treasury Office, Gandhinagar',
          financialYear: '2',
          monthOf: '2',
        });
      }
    });
  }


}



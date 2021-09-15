import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource } from '@angular/material';
import {
  MatDialog, MatDialogRef, MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { DialogData } from 'src/app/model/standing-charge';
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';
import {
  EdpDetails,
  ReceiptDetails,
  ReceiptDataSummary, ReceiptSummaryDeduction, EPaymentDetails, ChequeDetails, RecoveryDetails, DdoGrantHeadDialog, ChequeListTypeDialog
} from 'src/app/model/ddo-forms';
import { ddoMasage } from 'src/app/common/error-message/common-message.constants';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Router } from '@angular/router';
import { HeaderElement } from 'src/app/model/common-listing';


const ELEMENT_DATA: DdoGrantHeadDialog[] = [
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

const ELEMENT_DATA1: ChequeListTypeDialog[] = [
  { vender: 'ABC Ltd', chequeType: 'Contractor', accountNo: '3600178925', panNo: 'EOXPS8331P ' },
];

/** cheque-type-list-dialog-eighty-five start*/
@Component({
  selector: 'app-cheque-type-list-dialog-eighty-five',
  templateUrl: 'cheque-type-list-dialog-eighty-five.component.html'
})
export class ChequeListTypeDialogEightyFiveComponent {

  // constructor
  constructor(public dialogRef: MatDialogRef<ChequeListTypeDialogEightyFiveComponent>, private route: Router) { }

  // table data start
  displayedColumns: string[] = ['select', 'vender', 'chequeType', 'accountNo', 'panNo'];
  dataSource = new MatTableDataSource<ChequeListTypeDialog>(ELEMENT_DATA1);
  // table data end

  // directive object
  directiveObj = new CommonDirective(this.route);

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  // add to bill
  addToBill() { }
}
/** cheque-type-list-dialog-eighty-five end*/



/** ddo-grant-head-dialog-eighty-five start*/
@Component({
  selector: 'app-ddo-grant-head-dialog-eighty-five',
  templateUrl: 'ddo-grant-head-dialog-eighty-five.component.html'
})
export class DdoGrantHeadDialogEightyFiveComponent {

  constructor(
    public dialogRef: MatDialogRef<DdoGrantHeadDialogEightyFiveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  // table data start
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
  dataSource = new MatTableDataSource<DdoGrantHeadDialog>(ELEMENT_DATA);
  // table data end

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  // close the dialog box on click on budget head structure
  selectBudgetHead(): void {
    this.dialogRef.close();
  }


}
/** ddo-grant-head-dialog-eighty-five end*/



/** bill-preparation-eighty-five-eighty-five-other start */
@Component({
  selector: 'app-bill-preparation-eighty-five-eighty-five-other',
  templateUrl: './bill-preparation-eighty-five-eighty-five-other.component.html',
  styleUrls: ['./bill-preparation-eighty-five-eighty-five-other.component.css']
})
export class BillPreparationEightyFiveEightyFiveOtherComponent implements OnInit {

  // variables
  paymentTypeDropDown = true;
  checkTable = false;
  epayment = true;
  isItemList = false;
  isInputEdpCode = true;
  isDelete = false;
  isInputEdpCode1 = true;
  billRigister;
  message;
  advanceAmount;
  DDoParty;
  errormsg;

  // Date
  maxDate = new Date();

  // form group
  billPreparationFormEightyFive: FormGroup;

  // form control
  monthOfCtrl: FormControl = new FormControl();
  monthOfEmployeeCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();
  financialYearEmployeeCtrl: FormControl = new FormControl();
  classExpenditureCtrl: FormControl = new FormControl();
  fundTypeCtrl: FormControl = new FormControl();
  stateCssCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
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
  chequeTypeCtrl: FormControl = new FormControl();
  itemCtrl: FormControl = new FormControl();
  chequeTypeChequeCtrl: FormControl = new FormControl();
  employeeTypeCtrl: FormControl = new FormControl();


  // lists start
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

  classExpenditureList: ListValue[] = [
    { value: '1', viewValue: '1-Voted' },
    { value: '2', viewValue: '2-Charged' }
  ];

  fundTypeList: ListValue[] = [
    { value: '1', viewValue: '3-Consolidated' },
    { value: '2', viewValue: '4-Contingency' }
  ];

  stateCssList: ListValue[] = [
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

  typeOfEstimateList: ListValue[] = [
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

  empType: ListValue[] = [
    { value: '1', viewValue: '1-GO' },
    { value: '2', viewValue: '2-IPS/IAS/IFS' },
    { value: '2', viewValue: '3-NGO' },
    { value: '2', viewValue: '4-MLA' }
  ];
  // lists end

  // edp details
  expenditureColumn = [
    'budgetCode',
    'description',
    'edpCode',
    'amount',
    'action'
  ];
  expenditureList: EdpDetails[] = [
    { budgetCode: '5700', description: 'Festival Advances', edpCode: '5701', amount: '0.00' },
    { budgetCode: '5800', description: 'Food Grains Advances', edpCode: '5801', amount: '0.00' },
    { budgetCode: '5500', description: 'Advance For Purchase Of Fan', edpCode: '5510', amount: '0.00' },
    { budgetCode: '5500', description: 'Adv. For Purchase Of Other Conve.', edpCode: '5509', amount: '0.00' },
    { budgetCode: '5500', description: 'House Building Advances', edpCode: '5507', amount: '0.00' },
    { budgetCode: '5500', description: 'Other Advances', edpCode: '5512', amount: '0.00' },
    { budgetCode: '0105', description: 'Leave Travel Concession', edpCode: '0105', amount: '0.00' },
    { budgetCode: '1100', description: 'Domestic Travel Expenses', edpCode: '5512', amount: '0.00' },
  ];
  expenditureDataSource = new MatTableDataSource<EdpDetails>(this.expenditureList);


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
  receiptDataList: ReceiptDetails[] = [];
  receiptDataSource = new MatTableDataSource<ReceiptDetails>(this.receiptDataList);


  // Receipt-Data Summary
  summaryData = [
    'edpCode',
    'chlanDate',
    'pdAccount',
    'party',
    'amount',
    'action'
  ];
  summaryDataList: ReceiptDataSummary[] = [];
  summaryDataSource = new MatTableDataSource<ReceiptDataSummary>(this.summaryDataList);


  // Receipt-Data Summary Deduction
  deductionCol = ['expenditure', 'recovery', 'decuctionA', 'decuctionB'];
  deductionList: ReceiptSummaryDeduction[] = [
    { decuctionA: '0.00', decuctionB: '0.00', expenditure: '5000.00', recovery: '0.00' }
  ];
  deductionDataSource = new MatTableDataSource<ReceiptSummaryDeduction>(this.deductionList);


  // paymeny type cheque
  CheckColumn = [
    'chequeTypeList', 'partyName', 'address', 'accountNo', 'chequeAmount', 'action'];
  checkList: ChequeDetails[] = [
    {
      partyName: '',
      chequeType: '',
      address: '',
      chequeAmount: '0',
      accountNo: '',
    }
  ];
  chequeDataSource = new MatTableDataSource(this.checkList);


  // epayment payment type
  epaymentColumn = ['payeeName', 'accountNo', 'ifscCode', 'amount', 'action'];
  epaymentList: EPaymentDetails[] = [
    { payeeName: '', accountNo: 0, ifscCode: '', amount: '100' }
  ];
  epaymentDataSource = new MatTableDataSource<EPaymentDetails>([]);


  // recovery details
  recoveryColumn = ['budgetCode', 'description', 'edpCode', 'amount', 'action'];
  recoveryDataList: RecoveryDetails[] = [];
  recoveryDataSource = new MatTableDataSource<RecoveryDetails>(this.recoveryDataList);


  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) {

  }
  ngOnInit() {
    this.errormsg = ddoMasage;
    this.billPreparationFormEightyFive = this.fb.group({
      ddoNo: [{ value: '52', disabled: true }],
      cardexNo: [{ value: '51', disabled: true }],
      ddoName: [{ value: 'D C DAVE', disabled: true }],
      ddodesignation: [{ value: 'District Treasury Officer', disabled: true }],
      officeName: [{ value: 'District Treasury Officer, District Treasury Office, Gandhinagar', disabled: true }],
      districtCode: [{ value: '71', disabled: true }],
      billCreator: [{ value: '', disabled: true }],
      billApprover: [{ value: '', disabled: true }],
      employee: [{ value: 'Employee', disabled: true }],
      employeeNo: [''],
      employeeType: ['1'],
      employeeName: [{ value: '', disabled: true }],
      designation: [{ value: '', disabled: true }],
      establishmentEmployee: [{ value: '', disabled: true }],
      status: [''],
      monthOf: ['2'],
      monthOfEmployee: ['2'],
      financialYear: ['2'],
      financialYearEmployee: ['2'],
      classExpenditure: ['1', Validators.required],
      fundType: ['1', Validators.required],
      type: ['1', Validators.required],
      stateCss: ['1', Validators.required],
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
      headChargeable: [{ value: '', disabled: true }, Validators.required],
      billCode: [{ value: '', disabled: true }, Validators.required],
      billCategory: ['1', Validators.required],
      previousBill: [''],
      paymentType: ['2', Validators.required],
      establishment: [{ value: 'District Treasury Officer, District Treasury Office, Gandhinagar', disabled: true }],
      billRigister: [''],
      billTransit: [''],
      message: [''],
    });
  }

  // fill employee data
  fillEmployeeData() { }


  // sets payment type dropdown value
  billValues(data) {
    if (data.value === '3' || data.value === '4') {
      this.paymentTypeDropDown = false;
    }
    if (data.value === '1' || data.value === '2') {
      this.paymentTypeDropDown = true;
    }
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
    this.chequeDataSource.data.forEach(element => {
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
  totalExpenditureAmount(): number {
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

  // calculate total receipt amount
  reciptTotal(): number {
    let amount = 0;
    this.receiptDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // opens ddo grant head dialog box
  openDialog(): void {
    const dialogRef = this.dialog.open(DdoGrantHeadDialogEightyFiveComponent, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.billPreparationFormEightyFive.patchValue({
        schemeNo: '000000',
        demand: '1',
        majorHead: '1',
        subMajorHead: '1',
        minorHead: '1',
        subHead: '1',
        detailHead: '1',
        objectClass: '2',
        headChargeable: '2054:00:095:01:00:C2 '
      });
    });
  }

  // open employee number dialog box
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.billPreparationFormEightyFive.patchValue({
          employeeNo: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          employeeType: '1',
          designation: result[0].designation,
          establishmentEmployee: 'District Treasury Officer, District Treasury Office, Gandhinagar',
          financialYearEmployee: '2',
          monthOfEmployee: '2',
        });
      }
    });
  }


  // object class select
  objectClassSelect(event) {
    const demand = this.billPreparationFormEightyFive.controls.demand.value;
    const majorHead = this.billPreparationFormEightyFive.controls.majorHead.value;
    const subMajorHead = this.billPreparationFormEightyFive.controls.subMajorHead.value;
    const minorHead = this.billPreparationFormEightyFive.controls.minorHead.value;
    const subHead = this.billPreparationFormEightyFive.controls.subHead.value;
    if (demand !== '' || majorHead !== '' || subMajorHead !== '' || minorHead !== '' || subHead !== '') {
      this.billPreparationFormEightyFive.patchValue({
        headChargeable: '2054:00:095:01:00:C2',
        schemeNo: '000000',
      });
    }
  }

  // opens dialog box on selection of value from cheque list type
  checkDialog(): void {
    const dialogRef = this.dialog.open(ChequeListTypeDialogEightyFiveComponent, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(() => {
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

  // add new row in edp details table
  addExpenditureDetails() {
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

  // add new row in cheque payment type
  addNewRow() {
    const p_data = this.chequeDataSource.data;
    p_data.push({
      partyName: '',
      accountNo: '',
      chequeAmount: '',
      chequeType: '',
      address: ''
    });
    this.chequeDataSource.data = p_data;
  }

  // add new in receipt-data-summary details
  addRowReceipt() {
    const Col_Data = this.summaryDataSource.data;
    Col_Data.push({
      edpCode: '9720',
      challanDate: '',
      pdAccount: '',
      party: '',
      amount: '',
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

  // fills edp description
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

  // add new row in recovery detaila
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

  // delete row in receipt details
  removeRow(index) {
    this.receiptDataSource.data.splice(index, 1);
    this.summaryDataSource.data = [];
    this.receiptDataSource = new MatTableDataSource(
      this.receiptDataSource.data
    );

  }

  // delete row in edp- details
  deletExpenditureRow(index) {
    this.expenditureDataSource.data.splice(index, 1);
    this.expenditureDataSource = new MatTableDataSource(
      this.expenditureDataSource.data
    );
  }

  // delete row form epayment payment type table
  deletePaymentRow(index) {
    this.epaymentDataSource.data.splice(index, 1);
    this.epaymentDataSource = new MatTableDataSource(
      this.epaymentDataSource.data
    );
  }

  // delete row from receipt-summary
  removeRowsummary(index) {
    this.summaryDataSource.data.splice(index, 1);
    this.summaryDataSource = new MatTableDataSource(this.summaryDataSource.data);
  }

  // delete row from cheque payment type table
  deleteChequeTypeRow(index) {
    this.chequeDataSource.data.splice(index, 1);
    this.chequeDataSource = new MatTableDataSource(this.chequeDataSource.data);
  }

  // delete row from recovery details
  deleteRowRecovery(index) {
    this.recoveryDataSource.data.splice(index, 1);
    this.recoveryDataSource = new MatTableDataSource(
      this.recoveryDataSource.data
    );
  }

  // change ddo party name on basis of selection of cheque type in cheque payment type
  changeDDovalue(data) {
    if (data.value === '1') {
      this.DDoParty = '';

    }
    if (data.value === '2') {
      this.DDoParty = 'District Treasury Officer, District Treasury Office, Gandhinagar';
    }
  }
}
/** bill-preparation-eighty-five-eighty-five-other end*/


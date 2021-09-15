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
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';
import { ddoMasage } from 'src/app/common/error-message/common-message.constants';
import {
  EdpDetails,
  RecoveryDetails,
  ReceiptDetails,
  ReceiptDataSummary,
  ReceiptSummaryDeduction,
  EPaymentDetails,
  ChequeDetails,
  DdoGrantHeadDialog,
  ChequeListTypeDialog1
} from 'src/app/model/ddo-forms';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { HeaderElement } from 'src/app/model/common-listing';


// ** BillPreparationSeventyEightSeventyNineComponent start */
@Component({
  selector: 'app-bill-preparation-seventy-eight-seventy-nine',
  templateUrl: './bill-preparation-seventy-eight-seventy-nine.component.html',
  styleUrls: ['./bill-preparation-seventy-eight-seventy-nine.component.css']
})
export class BillPreparationSeventyEightSeventyNineComponent implements OnInit {

  // variables
  empdetails = true;
  ddoInfo = 'DDO Information';
  budgetDetail = 'Budget Details';
  paymentTypeDropDown = true;
  isInputEdpCode = true;
  isDelete = false;
  isInputEdpCode1 = true;
  DDoParty;
  isItemList = false;
  checkTable = false;
  epayment = true;
  amount;
  errormsg;

  // Date
  maxDate = new Date();

  // form group
  billpreprationformSeventyEight: FormGroup;

  // form controls
  classExpenditureCtrl: FormControl = new FormControl();
  fundTypeCtrl: FormControl = new FormControl();
  stateCssCtrl: FormControl = new FormControl();
  demandCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  detailHeadCtrl: FormControl = new FormControl();
  objectClassCtrl: FormControl = new FormControl();
  exemptedCtrl: FormControl = new FormControl();
  billCodeCtrl: FormControl = new FormControl();
  billCategoryCtrl: FormControl = new FormControl();
  paymentTypeCtrl: FormControl = new FormControl();
  chequeTypeCtrl: FormControl = new FormControl();
  chequeTypeChequeCtrl: FormControl = new FormControl();
  monthsCtrl: FormControl = new FormControl();
  yearsCtrl: FormControl = new FormControl();


  // lists start
  detailsHeadList: ListValue[] = [
    { value: '1', viewValue: '00' },
  ];

  classTypeList: ListValue[] = [
    { value: '1', viewValue: '1-Voted' },
    { value: '2', viewValue: '2-Charged' }
  ];

  fundTypeList: ListValue[] = [
    { value: '1', viewValue: '3-Consolidated' },
    { value: '2', viewValue: '4-Contingency' },
    { value: '3', viewValue: '5-Public Accounts' }
  ];

  stateCssList: ListValue[] = [
    { value: '1', viewValue: 'State' },
    { value: '2', viewValue: 'CSS' }
  ];

  demandList: ListValue[] = [
    { value: '1', viewValue: '999' }
  ];

  majorHeadList: ListValue[] = [
    { value: '1', viewValue: '8011: Insurance and Pension Funds' }
  ];
  subMajorHeadList: ListValue[] = [
    { value: '1', viewValue: '00' },
  ];

  minorHeadList: ListValue[] = [
    { value: '1', viewValue: '106: Other Insurance and Pension Funds' },
  ];

  subHeadList: ListValue[] = [
    { value: '1', viewValue: '03: Gujarat Government Employees Group Insurance Scheme' }
  ];

  objectClassList: ListValue[] = [
    { value: '1', viewValue: 'C0' }
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

  chequeType: ListValue[] = [
    { value: '1', viewValue: 'Office Assistant' },
    { value: '2', viewValue: 'Teacher' }
  ];

  chequeTypeList: ListValue[] = [
    { value: '1', viewValue: 'Party Cheque' },
    { value: '2', viewValue: 'DDO Cheque' }
  ];
  grossTotl: HeaderElement[] = [
    { label: 'Gross Total', value: '1890.00' },
    { label: 'Recovery', value: '0.00' },
    { label: 'Deduction A', value: '0.00' },
    { label: 'Deduction B', value: '0.00' },
    { label: 'Net Total', value: '1890.00' },
    { label: 'Amount in Rs.', value: 'One Thousand Eight Hundred Ninty Only' },
    { label: 'Disbursement Amount', value: '1890.00' }
  ];

  monthsList: ListValue[] = [
    { value: '1', viewValue: 'Jan' },
    { value: '2', viewValue: 'Feb' },
    { value: '3', viewValue: 'Mar' },
    { value: '4', viewValue: 'Apr' },
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
    { value: '1', viewValue: '2000' },
    { value: '2', viewValue: '2001' },
    { value: '3', viewValue: '2002' },
    { value: '4', viewValue: '2003' },
    { value: '5', viewValue: '2004' },
    { value: '6', viewValue: '2005' },
    { value: '7', viewValue: '2006' },
    { value: '8', viewValue: '2007' },
    { value: '9', viewValue: '2008' },
    { value: '10', viewValue: '2009' },
    { value: '11', viewValue: '2010' },
    { value: '12', viewValue: '2011' },
    { value: '13', viewValue: '2012' },
    { value: '14', viewValue: '2013' },
    { value: '15', viewValue: '2014' },
    { value: '16', viewValue: '2015' },
    { value: '17', viewValue: '2016' },
    { value: '18', viewValue: '2017' },
    { value: '19', viewValue: '2018' },
    { value: '20', viewValue: '2019' },
    { value: '21', viewValue: '2020' },
    { value: '22', viewValue: '2021' },
    { value: '23', viewValue: '2022' },
    { value: '24', viewValue: '2023' }
  ];
  // lists end

  // edp details table
  expenditureColumn = [
    'budgetCode',
    'description',
    'edpCode',
    'amount',
    'action'
  ];
  expenditureList: EdpDetails[] = [
    { budgetCode: '0000', description: 'For Mh 8009 & Other 8000 Mh', edpCode: '0000', amount: '1890.00' }
  ];
  expenditureDataSource = new MatTableDataSource<EdpDetails>(this.expenditureList);


  // recovery details
  recoveryColumn = ['budgetCode', 'description', 'edpCode', 'amount', 'action'];
  recoveryList: RecoveryDetails[] = [];
  recoveryDataSource = new MatTableDataSource<RecoveryDetails>(this.recoveryList);

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
  receiptList: ReceiptDetails[] = [];
  receiptDataSource = new MatTableDataSource<ReceiptDetails>(this.receiptList);


  // receipt-data summary
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

  // receipt data summary deduction
  deductionCol = ['expenditure', 'recovery', 'decuctionA', 'decuctionB'];
  deductionList: ReceiptSummaryDeduction[] = [
    { decuctionA: '0.00', decuctionB: '0.00', expenditure: '1890', recovery: '0' }
  ];
  deductionDataSource = new MatTableDataSource<ReceiptSummaryDeduction>(this.deductionList);

  // e-payment details
  epaymentColumn = ['payeeName', 'accountNo', 'ifscCode', 'amount', 'action'];
  epaymentList: EPaymentDetails[] = [];
  epaymentDataSource = new MatTableDataSource<EPaymentDetails>(this.epaymentList);


  // cheque details
  chequeColumn = ['chequeType', 'partyName', 'address', 'accountNo', 'chequeAmount', 'action'];
  checkList: ChequeDetails[] = [
    {
      partyName: '',
      chequeType: '1',
      address: '',
      accountNo: '',
      chequeAmount: '0'
    }
  ];
  chequeDataSource = new MatTableDataSource<ChequeDetails>(this.checkList);

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog, private el: ElementRef, private router: Router) { }

  ngOnInit() {
    this.errormsg = ddoMasage;
    this.gtrSeventyEightSeventyNineData();
  }

  // form data
  gtrSeventyEightSeventyNineData() {
    this.billpreprationformSeventyEight = this.fb.group({
      ddoNumber: [{ value: '416', disabled: true }],
      cardexNo: [{ value: '1', disabled: true }],
      ddoName: [{ value: 'H N Kanabar', disabled: true }],
      ddoDesignation: [{ value: 'District Treasury Officer', disabled: true }],
      ddoOfficeName: [{ value: 'District Treasury Officer, District Treasury Office, Gandhinagar', disabled: true }],
      districtCode: [{ value: '57', disabled: true }],
      billCreator: [{ value: 'H N Kanabar', disabled: true }],
      billApprover: [{ value: 'H N Kanabar', disabled: true }],
      claimant: [{ value: 'Employee', disabled: true }],
      employeeNumber: [''],
      employeeName: [''],
      employeeType: [''],
      designation: [''],
      establishment: [{ value: 'District Treasury Officer, District Treasury Office, GANDHINAGAR', disabled: true }],
      month: ['2'],
      year: ['21'],
      expenditure: ['1'],
      fund: [{ value: '3', disabled: true }],
      classExpenditure: [{ value: '1', disabled: true }, Validators.required],
      stateCss: [{ value: '1', disabled: true }, Validators.required],
      ddoGrantHead: [''],
      schemeNo: [{ value: '', disabled: true }],
      demand: [{ value: '1', disabled: true }, Validators.required],
      majorHead: [{ value: '1', disabled: true }, Validators.required],
      subMajorHead: ['', Validators.required],
      minorHead: ['', Validators.required],
      subHead: ['', Validators.required],
      detailHead: ['', Validators.required],
      objectClass: ['', Validators.required],
      exempted: [{ value: '1', disabled: true }],
      headChargeable: [{ value: '', disabled: true }, Validators.required],
      billCode: ['', Validators.required],
      billCategory: ['', Validators.required],
      previousBill: [''],
      paymentType: ['2', Validators.required],
      chequeType: ['1'],
      billRegisterNumber: [''],
      billTransitRegisterNumber: [''],
      nameOfMessanger: ['']
    });
  }

  // open employee details pop up
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.empdetails = true;
        this.billpreprationformSeventyEight.patchValue({
          employeeNumber: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          employeeType: 'GO',
          designation: result[0].designation,
          establishment: 'District Treasury Officer, District Treasury Office, GANDHINAGAR',
          year: '21',
          month: '2',
        });
      }
    });
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

  // show e-payment details or cheque details div on basis of payment mode
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

  // add item name/work name field on basis of value of type of estimate
  itemSelect(selectedValue) {
    if (selectedValue.value !== '1') {
      return (this.isItemList = true);
    }
    if (selectedValue.value === '1') {
      return (this.isItemList = false);
    }
  }

  // calculate total amount in cheque table
  getTotalAmount(): number {
    let chequeAmount = 0;
    this.chequeDataSource.data.forEach(element1 => {
      chequeAmount = chequeAmount + Number(element1.chequeAmount);
    });
    return chequeAmount;
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
  totalExpenditureAmount(): number {
    let amount = 0;
    this.expenditureDataSource.data.forEach((element1) => {
      amount = amount + Number(element1.amount);
    });
    return amount;
  }

  // calculate total amount in recovery details table
  totalRecoveryAmount(): number {
    let amount = 0;
    this.recoveryDataSource.data.forEach((element1) => {
      amount = amount + Number(element1.amount);
    });
    return amount;
  }

  // calculate total amount in receipt-data summary table
  totalSummary(): number {
    let amount = 0;
    this.summaryDataSource.data.forEach((element1) => {
      amount = amount + Number(element1.amount);
    });
    return amount;
  }

  // calculate total in receipt details table
  totalReceipt(): number {
    let amount = 0;
    this.receiptDataSource.data.forEach((element1) => {
      amount = amount + Number(element1.amount);
    });
    return amount;
  }

  // opens ddo grant head dialog box
  openDialog() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(DdoGrantHeadSeventyEightSeventyNineComponent, {
      width: '1000px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const budgetHeadStructure_array = result.split(':');
        budgetHeadStructure_array.splice(0, 1);
        budgetHeadStructure_array.splice(5, 1);
        budgetHeadStructure_array.splice(6, 1);
        this.billpreprationformSeventyEight.patchValue({
          schemeNo: '000000',
          demand: '1',
          majorHead: '1',
          subMajorHead: '1',
          minorHead: '1',
          subHead: '1',
          detailHead: '1',
          objectClass: '1',
          billCode: '1',
          headChargeable: '8011:00:106:03:00:C0',
          billCategory: '1',
          exempted: '1',
        });
      }
    });
  }

  // resets the form
  resetForm() {
    this.billpreprationformSeventyEight.reset();
  }

  // opens  ChequeListTypeSeventyEightSeventyNineComponent pop -up
  checkDialog(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(ChequeListTypeSeventyEightSeventyNineComponent, {
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

  // add row in cheque table
  addRowCheque() {
    const p_data = this.chequeDataSource.data;
    p_data.push({
      chequeType: 'Party Cheque',
      partyName: '',
      address: '',
      accountNo: '',
      chequeAmount: '0'
    });
    this.chequeDataSource.data = p_data;
  }

  // add new row in receipt summmary table
  addReceiptRowTable() {
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
      budgetCode: '0102',
      description: 'Pay of Establishment',
      edpCode: '0102',
      amount: '0.00'
    });
    Col_Data.splice(this.recoveryDataSource.data.length - 2, 1);
    this.recoveryDataSource.data = Col_Data;
  }

  // delete row in receipt data table
  deleteReceiptRowTable(index) {
    this.receiptDataSource.data.splice(index, 1);
    this.summaryDataSource.data = [];
    this.receiptDataSource = new MatTableDataSource(
      this.receiptDataSource.data
    );
  }

  // delele row in edp-details
  deleteExpenditureRow(index) {
    this.expenditureDataSource.data.splice(index, 1);
    this.expenditureDataSource = new MatTableDataSource(
      this.expenditureDataSource.data
    );
  }

  // delte row from epayment row
  deleteEPaymentRow(index) {
    this.epaymentDataSource.data.splice(index, 1);
    this.epaymentDataSource = new MatTableDataSource(
      this.epaymentDataSource.data
    );
  }
  // delete row in receipt data summary
  deleteSummaryRow(index) {
    this.summaryDataSource.data.splice(index, 1);
    this.summaryDataSource = new MatTableDataSource(this.summaryDataSource.data);
  }

  // delete row in cheque table
  deleteRowCheque(index) {
    this.chequeDataSource.data.splice(index, 1);
    this.chequeDataSource = new MatTableDataSource(this.chequeDataSource.data);
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
      this.DDoParty = '';

    }
    if (data.value === '2') {
      this.DDoParty = 'District Treasury Officer, District Treasury Office, Gandhinagar';
    }
  }

}
// ** BillPreparationSeventyEightSeventyNineComponent end */



// ** DdoGrantHeadSeventyEightSeventyNineComponent start */
@Component({

  selector: 'app-ddo-grant-head-seventy-eight-seventy-nine',
  templateUrl: 'ddo-grant-head-seventy-eight-seventy-nine.component.html'
})

export class DdoGrantHeadSeventyEightSeventyNineComponent {

  elementData: DdoGrantHeadDialog[] = [
    {
      fundType: 'Public Account',
      voted: 'Voted',
      stateCss: 'State',
      bSubHeadSt: '999:8011:00:105:00:: ',
      subHeadDes: 'State Government Insurance Fund',
      schemeNo: '000000'
    },
    {
      fundType: 'Public Account',
      voted: 'Voted',
      stateCss: 'State',
      bSubHeadSt: ' 999:8009:01:101:02:: ',
      subHeadDes: 'Saving Fund',
      schemeNo: '000000'
    },
    {
      fundType: 'Public Account',
      voted: 'Voted',
      stateCss: 'State',
      bSubHeadSt: '999:8011:00:105:03:: ',
      subHeadDes: 'Pensionery Con. ',
      schemeNo: '000000'
    },
    {
      fundType: 'Public Account',
      voted: 'Voted',
      stateCss: 'State',
      bSubHeadSt: '999:8011:00:106:01:: ',
      // tslint:disable-next-line: max-line-length
      subHeadDes: 'Pensionery Contribution of Employees of Taluka/District Panchayats Including Primary Teachers and Grant-in-aid Institution of High Schools and Higher Secondary Schools ',
      schemeNo: '000000'
    },
    {
      fundType: 'Public Account',
      voted: 'Voted',
      stateCss: 'State',
      bSubHeadSt: '999:8011:00:106:02::',
      subHeadDes: 'Gujarat Government Employees Group Insurance Scheme ',
      schemeNo: '000000'
    },
    {
      fundType: 'Public Account',
      voted: 'Voted',
      stateCss: 'State',
      bSubHeadSt: '999:8011:00:106:03:: ',
      subHeadDes: 'Gujarat Government Employees Group Insurance Scheme ',
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
      bSubHeadSt: '999:8011:00:107:01::',
      subHeadDes: 'Gujarat Government Employees Group Insurance Scheme 1981-Insurance Fund ',
      schemeNo: '000000'
    },
    {
      fundType: 'Public Account',
      voted: 'Voted',
      stateCss: 'State',
      bSubHeadSt: '999:8011:00:107:02:: ',
      // tslint:disable-next-line: max-line-length
      subHeadDes: 'Gujarat Government Employees Group Insurance Scheme 1981-82 Saving Fund Transfer to Major Head of Expenditure 7465 Loans to General Financial and Trading ',
      schemeNo: '000000'
    },
    {
      fundType: 'Public Account',
      voted: 'Voted',
      stateCss: 'State',
      bSubHeadSt: '999:8011:00:107:03:: ',
      subHeadDes: 'Saving Fund ',
      schemeNo: '000000'
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<DdoGrantHeadSeventyEightSeventyNineComponent>,
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
  dataSource = new MatTableDataSource(this.elementData);

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  // on selection of budget head close the pop-up
  selectBudgetHead(data): void {
    this.dialogRef.close(data);
  }

}
// ** DdoGrantHeadSeventyEightSeventyNineComponent end */



// ** ChequeListTypeSeventyEightSeventyNineComponent start */
@Component({
  selector: 'app-cheque-list-type-seventy-eight-seventy-nine',
  templateUrl: 'cheque-list-type-seventy-eight-seventy-nine.component.html'
})
export class ChequeListTypeSeventyEightSeventyNineComponent {

  elementData: ChequeListTypeDialog1[] = [
    { gpfNumber: '123456', employeeName: 'ABC Employee', designation: 'DYSO' },
  ];
  constructor(
    public dialogRef: MatDialogRef<ChequeListTypeSeventyEightSeventyNineComponent>, private route: Router) { }
  displayedColumns: string[] = ['select', 'gpfNumber', 'employeeName', 'designation'];

  dataSource = new MatTableDataSource<ChequeListTypeDialog1>(this.elementData);

  // directive object
  directiveObj = new CommonDirective(this.route);

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  // add to bill
  addToBill() { }
}
// ** ChequeListTypeSeventyEightSeventyNineComponent ends */

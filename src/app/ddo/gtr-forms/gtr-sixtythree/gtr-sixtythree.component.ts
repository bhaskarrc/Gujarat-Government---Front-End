import { Component, OnInit, Inject, ElementRef, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatInput } from '@angular/material';
import {
  MatDialog, MatDialogRef, MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { ddoMasage } from 'src/app/common/error-message/common-message.constants';
import { DialogData } from 'src/app/model/standing-charge';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import {
  HeadData,
  EdpDetails,
  ReceiptDetails,
  ReceiptSummaryDeduction,
  ReceiptDataSummary,
  ChequeDetails, ChequeListTypeDialog, GtrEightyFiveOther, TradeDetails, InstituteDetails
} from 'src/app/model/ddo-forms';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { DdoDirective } from 'src/app/common/directive/ddo-directive';
import { HeaderElement } from 'src/app/model/common-listing';

const ELEMENT_DATA: HeadData[] = [
  {
    fundType: 'Consolidated',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: '2225:01:277:01:00:C4 ',
    subHeadDes: 'Scholarship & Incentives for Post Metric Education',
    expenditure: 'Standing Charges',
    itemName: '-',
    schemeNo: '000000'
  },
];

const ELEMENT_DATA1: ChequeListTypeDialog[] = [
  { vender: 'ABC Ltd', checkType: 'Contractor', accountNo: '3600178925', panNo: 'EOXPS8331P ' },
];

/** GtrSixtythreeComponent starts*/
@Component({
  selector: 'app-gtr-sixtythree',
  templateUrl: './gtr-sixtythree.component.html',
  styleUrls: ['./gtr-sixtythree.component.css']
})
export class GtrSixtythreeComponent implements OnInit {

  // variables
  errorMessage;
  gtrSixtyThree = 'Form GTR 63 - Scholarship/Stipend ';
  refNuber = 'Reference Number:';
  refNuberDate = 'Reference Date:';
  home = 'Home';
  ddo = 'DDO';
  createBill = 'Create Online Bill';
  billPreForm = 'Bill Preparation Form';
  ddoInfo = 'DDO Information';
  budgetDetail = 'Budget Details';
  detailHeaderLable2 = 'Scholarship / Stipend / Relief Bill Details';
  billRigister;
  billTransit;
  message;
  checkTable = false;
  epayment = true;
  paymentTypeDropDown = true;
  isItemList = false;
  isInputEdpCode = true;
  isDelete = false;
  isInputEdpCode1 = true;
  ddoParty;
  isInstitute = false;
  istrade = false;
  todayDate = Date.now();
  date = new FormControl(new Date());
  tabDisable: Boolean = true;
  selectedIndex: number;
  billPreprationFormSixtyThree: FormGroup;
  maxDate = new Date();

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

  constructor(private fb: FormBuilder, public dialog: MatDialog, private el: ElementRef, private router: Router) {

  }

  // lists
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
    { value: '3', viewValue: '5-Public Accounts' }
  ];

  schemeTypeList: ListValue[] = [
    { value: '1', viewValue: '1-State' },
    { value: '2', viewValue: '2-CSS' }
  ];

  demandList: ListValue[] = [
    { value: '1', viewValue: '095:Scheduled Caste Sub Plan' }
  ];

  majorHeadList: ListValue[] = [
    { value: '1', viewValue: '2225 : Welfare of Schedule Castes, Schedule Tribes, other Backward Classes and Minorities' }
  ];
  subMajorHeadList: ListValue[] = [
    { value: '1', viewValue: '01 : Welfare of Scheduled Castes' }
  ];

  minorHeadList: ListValue[] = [
    { value: '1', viewValue: '277:Education' },
  ];

  subHeadList: ListValue[] = [
    { value: '1', viewValue: '04:SCW-6 Scholarship & Incentives for Post-Metric Education' },
  ];

  detailHeadList: ListValue[] = [
    { value: '1', viewValue: '00' },
  ];

  objectClassList: ListValue[] = [

    { value: '1', viewValue: 'C4: Grant etc.' },
  ];
  exemptedTypeList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  billCodeList: ListValue[] = [
    {
      value: '1',
      viewValue: '1-PAY ALLOW RETIREMENT BENEFIT I.E LTC & LEAVE ENCAS. AT RETI'
    },
    { value: '2', viewValue: '2-WINDOW RELIEF ASSISTANCE TO AGED HELPLESS' },
    { value: '3', viewValue: '3- BILLS OF SCARCITY' }
  ];

  billCategoryList: ListValue[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'Regular/Challan' },
    { value: '3', viewValue: 'TC' },
    { value: '4', viewValue: 'NIL' },
  ];

  selectTaxList: ListValue[] = [
    { value: '1', viewValue: 'Scholarship/Relief' },
    { value: '2', viewValue: 'Stipend ' }
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
    { budgetCode: '3400', description: 'Scholarships/Stipend', edpCode: '3401', amount: '5000.00' },

  ];
  expenditureDataSource = new MatTableDataSource<EdpDetails>(this.expenditureList);

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
  receiptDataSource = new MatTableDataSource<ReceiptDetails>([]);

  // receipt dats summary
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
  deductionDataSource = new MatTableDataSource<ReceiptSummaryDeduction>(this.deductionList);

  // cheque details
  chequeColumn = [
    'chequeType', 'partyName', 'address', 'accountNo', 'chequeAmount', 'action'];

  checkList: ChequeDetails[] = [
    {
      chequeAmount: '0.00',
      chequeType: '',
      address: '',
      accountNo: '',
      partyName: ''
    }
  ];
  checkDataSource = new MatTableDataSource<ChequeDetails>(this.checkList);

  // e-payment details
  epaymentColumn = ['payeeName', 'accountNo', 'ifscCode', 'amount', 'action'];
  epaymentDataSource = new MatTableDataSource([]);

  // recovery details
  recoveryColumn = ['budgetCode', 'description', 'edpCode', 'amount', 'action'];
  recoveryDataSource = new MatTableDataSource([]);

  // gtr table
  gtrTbableColumn = ['year', 'NameOfscholarship', 'KindOfScholarship', 'amount', 'sanctionedBy', 'remarks'];
  gtrDetailList: GtrEightyFiveOther[] = [
    { subVoucher: '', description: '', amount: '0', incomeTax: 0 },
  ];
  gtrDetailDataSource = new MatTableDataSource(this.gtrDetailList);

  // stipend table
  traineeDetailsColumns = [
    'tradeName', 'trade',
    'fromdate', 'todate',
    'monthlyRateStipend',
    'Sanctionedfromdate',
    'Sanctionedtodate',
    'amountOfStipend',
    'remarks'];
  tradeData1: TradeDetails[] = [
    {
      tradeName: '', trade: '',
      fromdate: '', todate: '', OfficeOrderdate: '', Sanctionedfromdate: '', Sanctionedtodate: '', rainingPeriod: '', remarks: ''
    }
  ];

  traineeDetailDataSource = new MatTableDataSource(this.tradeData1);

  // scholarship table
  InstituteDetailColumns = ['tDOOffice', 'OfficeOrder', 'OfficeOrderdate', 'fromdate', 'todate', 'strength', 'amount'];
  elementData1: InstituteDetails[] = [
    {
      tDOOffice: '', OfficeOrder: '',
      OfficeOrderdate: '',
      rainingPeriod: '', strength: '', fromdate: '',
      todate: '',

    }
  ];
  grantdataSource1 = new MatTableDataSource<InstituteDetails>(this.elementData1);

  // form controls
  monthOfCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();
  classCtrl: FormControl = new FormControl();
  fundTypeCtrl: FormControl = new FormControl();
  schemeTypeCtrl: FormControl = new FormControl();
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
  taxCtrl: FormControl = new FormControl();
  billRegisterCtrl: FormControl = new FormControl('', Validators.required);
  nameOfMessenger: FormControl = new FormControl('', Validators.required);
  billTransitNo: FormControl = new FormControl('', Validators.required);

  directiveObject = new DdoDirective(this.dialog);

  ngOnInit() {
    this.errorMessage = ddoMasage;

    this.billPreprationFormSixtyThree = this.fb.group({
      monthOf: ['2'],
      financialYear: ['2'],
      classExpenditure: ['1', Validators.required],
      fundType: ['1', Validators.required],
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
      establishment: ['']
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

  // get object class view value
  getObjectClassViewValue(val) {
    let res = '';
    for (const item of this.objectClassList) {
      if (item.value === val) {
        res = item.viewValue.substring(0, 2);
      }
    }
    return res;
  }

  // set head chargable
  setHeadChargeable($event) {
    const formControls = this.billPreprationFormSixtyThree.controls;

    if (formControls.majorHead.value !== '' && formControls.subMajorHead.value !== ''
      && formControls.minorHead.value !== '' && formControls.subHead.value !== '' && formControls.objectClass.value !== '') {

      this.billPreprationFormSixtyThree.patchValue({
        headChargeable: '2225:01:277:01:00:' + this.getObjectClassViewValue(formControls.objectClass.value),
        schemeNo: '000000'
      });
    } else {
      this.billPreprationFormSixtyThree.patchValue({
        headChargeable: ''
      });
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

  // sets whether to show item name/work name field or not
  itemSelect(selectedValue) {
    if (selectedValue.value !== '1') {
      return (this.isItemList = true);
    }
    if (selectedValue.value === '1') {
      return (this.isItemList = false);
    }
  }

  // calculate total amount in cheque details
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

  // calculate recovery details
  totalRecovery(): number {
    let amount = 0;
    this.recoveryDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculate total receipt summary details
  totalSummary(): number {
    let amount = 0;
    this.summaryDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculate total receipt details amount
  receiptTotal(): number {
    let amount = 0;
    this.receiptDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // opens ddo grant head dialog pop-up
  openDialogDdoHead(data?): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(GTR63Dialog, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.billPreprationFormSixtyThree.patchValue({
        schemeNo: '000000',
        demand: '1',
        majorHead: '1',
        subMajorHead: '1',
        minorHead: '1',
        subHead: '1',
        detailHead: '1',
        objectClass: '1',
        headChargeable: '2225:01:277:01:00:C4'
      });
    });
  }

  // reet the form
  resetForm() {
    this.billPreprationFormSixtyThree.reset();
  }

  // opens cheque list dialog box
  chequeListDialog(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(GTR63DialogCheckList, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      const p_data = this.epaymentDataSource.data;
      this.isInputEdpCode = false;
      this.isDelete = true;

      p_data.push({
        chequeType: 'Supplier',
        designation: 'Pay of Officers',
        payeeName: 'ABC Ltd',
        accountNo: 32373007812,
        ifscCode: 'SBIN002636',
        amount: '0.00'
      });
      this.epaymentDataSource.data = p_data;
    });
  }

  // add row in edp details
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

  // add row in cheque details
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

  // add row in receipt summary data
  addNewRowReceipt(data) {
    const Col_Data = this.summaryDataSource.data;
    Col_Data.push({
      edpCode: '9720',
      pdAccount: '',
      party: '',
      challanDate: '',
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
      budgetCode: '0102',
      description: 'Pay of Establishment',
      edpCode: '0102',
      amount: '0'
    });
    Col_Data.splice(this.recoveryDataSource.data.length - 2, 1);
    this.recoveryDataSource.data = Col_Data;
  }

  // remove row from receipt details
  removeRow(index) {
    this.receiptDataSource.data.splice(index, 1);
    this.summaryDataSource.data = [];
    this.receiptDataSource = new MatTableDataSource(
      this.receiptDataSource.data
    );

  }
  // delete row from edp details
  deletExpenditureRow(index) {
    this.expenditureDataSource.data.splice(index, 1);
    this.expenditureDataSource = new MatTableDataSource(
      this.expenditureDataSource.data
    );
  }

  // delete row from epayment details
  deleteEPaymentRow(index) {
    this.epaymentDataSource.data.splice(index, 1);
    this.epaymentDataSource = new MatTableDataSource(
      this.epaymentDataSource.data
    );
  }

  // remove row from receipt summary details
  removeRowSummary(index) {
    this.summaryDataSource.data.splice(index, 1);
    this.summaryDataSource = new MatTableDataSource(this.summaryDataSource.data);
  }

  // remove row from cheque details
  deleteChequeTypePaymentRow(index) {
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
    this.router.navigate(['/ddo/report-gtr-63']);
  }

  // scholarship is selected or not
  scholarship(data) {
    if (data.value === '1') {
      this.isInstitute = false;
      this.istrade = true;
    }

    if (data.value === '2') {
      this.istrade = false;
      this.isInstitute = true;
    }
  }
}
/** GtrSixtythreeComponent ends*/

/** GTR63Dialog starts*/
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'gtr63-dialog',
  templateUrl: 'gtr63-dialog.html'
})
// tslint:disable-next-line: component-class-suffix
export class GTR63Dialog {

  constructor(
    public dialogRef: MatDialogRef<GTR63Dialog>,
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

  // dialog box pop up close on click on budget head
  selectBudgetHead(data): void {
    this.dialogRef.close();
  }
}
/** GTR63Dialog ends*/


/** GTR63DialogCheckList starts*/
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'gtr-63dialog-CheckList-dialog',
  templateUrl: 'gtr-63-dialog-Check-List.html'
})
// tslint:disable-next-line: component-class-suffix
export class GTR63DialogCheckList {
  constructor(
    public dialogRef: MatDialogRef<GTR63DialogCheckList>, private route: Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  displayedColumns: string[] = ['select', 'vender', 'checkType', 'accountNo', 'panNo'];

  dataSource = new MatTableDataSource<ChequeListTypeDialog>(ELEMENT_DATA1);
  selection = new SelectionModel<ChequeListTypeDialog>(true, []);
  directiveObj = new CommonDirective(this.route);

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  // add to bill
  addToBill() { }
}
/** GTR63DialogCheckList ends*/

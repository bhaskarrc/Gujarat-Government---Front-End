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
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';
import {
  GrantAddBillNoDetails, HeadData, ChequeDetails, EPaymentDetails, EdpDetails, PatientDetails,
  ReceiptDetails, RecoveryDetails, ReceiptDataSummary, ReceiptSummaryDeduction, ChequeListTypeDialog1
} from 'src/app/model/ddo-forms';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { DdoDirective } from 'src/app/common/directive/ddo-directive';
import { HeaderElement } from 'src/app/model/common-listing';



const EPAYMENT_LIST: EPaymentDetails[] = [
];

const GRANT_ADD_BILL: GrantAddBillNoDetails[] = [
  {
    gpfAcno: 'GAUJ11111',
    grantInAdd: '250.00'

  },
];

const HEAD_DIALOG_DATA: HeadData[] = [
  {
    fundType: 'Consolidated',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: '2054:00:097:01:00:c1 ',
    subHeadDes: ' 01: ',
    expenditure: 'Standing Charges',
    itemName: '-',
    schemeNo: '000000'
  },
  {
    fundType: 'Consolidated',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: '2054:00:097:01:00:c1',
    subHeadDes: ' 01: ',
    expenditure: 'New Item',
    itemName: 'Purchase of new car for Director of Agriculture',
    schemeNo: '000000'
  }
];

const ELEMENT_DATA_1: ChequeListTypeDialog1[] = [
  { gpfNumber: 'MEDL/4323', employeeName: 'ABC Employee', designation: 'Office Assistant' },
  { gpfNumber: 'MEDL/4231', employeeName: 'EFG Employee', designation: 'Office Incharge' },
  { gpfNumber: 'MEDL/4325', employeeName: 'HIJ Employee', designation: 'Officer Class1' }
];



/** gtr- 29 component starts */
@Component({
  selector: 'app-gtr-tweintynine',
  templateUrl: './gtr-tweintynine.component.html',
  styleUrls: ['./gtr-tweintynine.component.css']
})
export class GtrTweintynineComponent implements OnInit {
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
      budgetCode: '0106',
      description: 'Reimbursement Of Medical Charges ',
      edpCode: '0106',
      amount: '1200.00'
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
  checkList: ChequeDetails[] = [
    {
      chequeType: '',
      accountNo: '',
      address: '',
      partyName: '',
      chequeAmount: '0.00'
    }
  ];
  checkDataSource = new MatTableDataSource<ChequeDetails>(this.checkList);


  // epayment Type table
  epaymentColumn = ['payeeName', 'accountNo', 'ifscCode', 'amount', 'action'];
  epaymentDataSource = new MatTableDataSource<EPaymentDetails>(EPAYMENT_LIST);


  // gpf bill table
  grantinbillColumn: string[] = [
    'gpfAcno',
    'bDate',
    'joinDate',
    'grantInAdd',
  ];
  grantinbillDataSource = new MatTableDataSource<GrantAddBillNoDetails>(GRANT_ADD_BILL);


  // Patient Details
  pationtDetailsColumn: string[] = [
    'relation',
    'namePAtiont',
    'agePationts',
    'incument',
    'trestmentFrom',
    'trestmentTo',
    'disName',
    'docName',
    'claimAmt',
    'remarks',
    'action'
  ];
  patientDetailsData: PatientDetails[] = [
    {
      namePAtiont: '',
      agePationts: '',
      relation: '',
      incument: '',
      trestmentFrom: '',
      trestmentTo: '',
      claimAmt: '0.00',
      disName: '',
      docName: '',
      remarks: ''
    },
  ];
  pationDatailsDatasource = new MatTableDataSource<PatientDetails>(this.patientDetailsData);

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
  summaryDataSource = new MatTableDataSource<ReceiptDataSummary>([]);

  // recovery data
  recoveryColumn = ['budgetCode', 'description', 'edpCode', 'amount', 'action'];
  recoveryList: RecoveryDetails[] = [
  ];
  recoveryDataSource = new MatTableDataSource<RecoveryDetails>(this.recoveryList);


  // recovery deduction
  deductionCol = ['expenditure', 'recovery', 'decuctionA', 'decuctionB'];
  deductionList: ReceiptSummaryDeduction[] = [
    { decuctionA: '0.00', decuctionB: '0.00', expenditure: '1200.00', recovery: '0.00 ' }
  ];
  deductionDataSource = new MatTableDataSource<ReceiptSummaryDeduction>(this.deductionList);


  // various dropdown list
  designationList: ListValue[] = [
    { value: '1', viewValue: 'Office Assistant' },
    { value: '2', viewValue: 'Office Incharge' },
    { value: '3', viewValue: 'Officer Class1' }
  ];

  classType: ListValue[] = [
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
      viewValue: '097:Treasury Establishment'
    },

  ];
  subHeadList: ListValue[] = [
    {
      value: '1',
      viewValue: '01:Treasury'
    },

  ];

  detailHeadList: ListValue[] = [
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

  grossTotl: HeaderElement[] = [
    { label: 'Gross Total', value: '1200.00' },
    { label: 'Recovery', value: '0.00' },
    { label: 'Deduction A', value: '0.00' },
    { label: 'Deduction B', value: '0.00' },
    { label: 'Net Total', value: '1200.00' },
    { label: 'Amount in Rs.', value: 'Twelve Hundred Only' },
    { label: 'Appropriation For', value: '860886.00' },
    { label: 'Expenditure including this bill', value: '1200.00' },
    { label: 'Balance', value: '859686.00' }
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

  schemeTypeList: ListValue[] = [
    { value: '1', viewValue: '1-State' },
    { value: '2', viewValue: '2-CSS' }
  ];

  employeeTypeList: ListValue[] = [
    { value: '1', viewValue: 'GO' },
    { value: '2', viewValue: 'IAS/IPS/IFS' },
    { value: '3', viewValue: 'NGO' },
    { value: '4', viewValue: 'MLA' }
  ];


  typeOfEstimateList: ListValue[] = [
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

  treatmentList: ListValue[] = [
    { value: '1', viewValue: 'Indoor' },
    { value: '2', viewValue: 'Outdoor' },
    { value: '2', viewValue: 'Indoor + Outdoor' }
  ];

  specialCaseList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  relationshipList: ListValue[] = [
    { value: '1', viewValue: 'Daughter' },
    { value: '2', viewValue: 'Father' },
    { value: '3', viewValue: 'Mother' },
    { value: '4', viewValue: 'Self' },
    { value: '5', viewValue: 'Son' },
    { value: '6', viewValue: 'Spouse' }
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
  monthOfCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  itemCtrl: FormControl = new FormControl();
  checkTypeTwoCtrl: FormControl = new FormControl();
  treatmentCtrl: FormControl = new FormControl();
  spedateCTrl: FormControl = new FormControl();
  relationCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();

  // variables
  fileBrowseIndex: number;
  selectedIndex: number;
  formTwentyNine: FormGroup;
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
  empdetails = false;
  dateOfBirth;
  dateOfJoining;
  billRigister;
  billTransit;
  message;
  maxDate = new Date();

  directiveObject = new DdoDirective(this.dialog);

  constructor(
    private fb: FormBuilder,
    private el: ElementRef,
    public dialog: MatDialog,
    private router: Router
  ) { }

  getTabIndex(event?) {
  }

  ngOnInit() {
    this.formsixtytwoformData();
    this.dateOfBirth = new Date((new Date().getFullYear()) - 60, new Date().getMonth(), new Date().getDay());
    this.dateOfJoining = new Date((new Date().getFullYear()) - 40, new Date().getMonth(), new Date().getDay());
  }

  // reset form
  resetForm() {
  }


  // formsixtytwoform Data function
  formsixtytwoformData() {
    this.formTwentyNine = this.fb.group({
      employeeNo: '',
      employeeName: [''],
      employeeType: [''],
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
      chequeTy: ['1'],
      treatment: [''],
      specialCase: ['2'],
      relation: ['6'],
      designation: [''],
      nameofPatient: [''],
      ageOfPatients: [''],
      sanctionOrderNo: ['']
    });
  }

  // select type which data to show
  selectType(type) {
    // tslint:disable-next-line: triple-equals
    if (type == 4) {

      this.formTwentyNine.patchValue({
        nameofPatient: 'Pratik K Shah',
        ageOfPatients: '40'
      });
      // tslint:disable-next-line: triple-equals
    } else if (type == 1 || type == 2 || type == 3 || type == 5 || type == 6) {
      this.formTwentyNine.patchValue({
        nameofPatient: '',
        ageOfPatients: ''
      });
    }
  }

  // patches employee data
  fillEmployeeData(event?) {

    this.formTwentyNine.patchValue({
      employeeName: 'Praikh Shah',
      employeeType: '1',
      designation: 'Deputy Accountant',
      establishment: 'District Treasury Officer, District Treasury Office, Gandhinagar',
      financialYear: '2',
      monthOf: '2'
    });
  }

  // sets the control to next tab
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

  // add row in edp-details table
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

  // add row in cheque payment type table
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

  // delete row in cheque payment type table
  deleteChequeDataRow(index) {
    this.checkDataSource.data.splice(index, 1);
    this.checkDataSource = new MatTableDataSource(this.checkDataSource.data);
  }

  // calculate total amount  in cheque payment type table
  getTotalAmount(): number {
    let chequeAmount = 0;
    this.checkDataSource.data.forEach(element => {
      chequeAmount = chequeAmount + Number(element.chequeAmount);
    });
    return chequeAmount;
  }

  // add new row in receipt summary table
  addnewRowreceipt(data) {
    const Col_Data = this.summaryDataSource.data;
    Col_Data.push({
      edpCode: '9547',
      amount: '0.00',
      challanDate: '',
      pdAccount: '',
      party: ''

    });
    this.summaryDataSource.data = Col_Data;
  }

  // calculate total expenditure amount in edp details
  totalExpeAmount(): number {
    let amount = 0;
    this.expenditureDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // delete row in  edp-details table
  deletExpenditureRow(index) {
    this.expenditureDataSource.data.splice(index, 1);
    this.expenditureDataSource = new MatTableDataSource(
      this.expenditureDataSource.data
    );
  }


  // calculate total for receipt-recovery table
  totalRecovery(): number {
    let amount = 0;
    this.recoveryDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculate total for receipt-summary table
  totalSummary(): number {
    let amount = 0;
    this.summaryDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculate total for receipt details
  reciptTotal(): number {
    let amount = 0;
    this.receiptDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // selects which payment details to be displayed
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

  // opens grand head dialog box
  openDdoGrantHeadDialog(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(GrantHead29Dialog, {
      width: '1000px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.formTwentyNine.patchValue({

        demand: '1',
        majorHead: '1',
        subMajorHead: '1',
        minorHead: '1',
        subHead: '1',
        detailHead: '1',
        objectClass: '2',
        headChargeable: '2054:00:097:01:00:C1',
        schemeNo: '000000'
      });
    });
  }

  // opens search employee dialog box
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.empdetails = true;
        this.formTwentyNine.patchValue({
          employeeNo: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          employeeType: '1',
          designation: 'Deputy Accountant',
          establishment: 'District Treasury Officer, District Treasury Office, Gandhinagar',
          financialYear: '2',
          monthOf: '2',
        });
      }
    });
  }

  // add new row in receipt details
  addEdpRow() {
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

  // fill edp description in receipt-details
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

  // delete row in receipt-details
  removeRow(index) {
    this.receiptDataSource.data.splice(index, 1);
    this.summaryDataSource.data = [];
    this.receiptDataSource = new MatTableDataSource(
      this.receiptDataSource.data
    );
  }

  // delete row in receipt-summary
  removeRowSummary(index) {
    this.summaryDataSource.data.splice(index, 1);
    this.summaryDataSource = new MatTableDataSource(
      this.summaryDataSource.data
    );
  }

  // shows item list
  itemSelect(selectedValue) {
    if (selectedValue.value !== '1') {
      return (this.isItemList = true);
    }
    if (selectedValue.value === '1') {
      return (this.isItemList = false);
    }
  }

  // show payment type field only if value of bill category is 1 & 2
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

  // add data in recovery details
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

  // delete row in recovery details
  deleteRowRecovery(index) {
    this.recoveryDataSource.data.splice(index, 1);
    this.recoveryDataSource = new MatTableDataSource(
      this.recoveryDataSource.data
    );
  }

  // sets ddoParty name for cheque payment type
  changeDdoValue(data) {
    if (data.value === '1') {
      this.ddoParty = '';

    }
    if (data.value === '2') {
      this.ddoParty = 'District Treasury Officer, District Treasury Office, Gandhinagar';
    }
  }

  // opens gtr-29 dialog chequeTypeChequeList dialog box
  chequeListDialog(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(GTR29DialogCheckList, {
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
        amount: '0.00'
      });
      this.epaymentDataSource.data = p_data;
    });
  }

  // delete epayment table row
  deletePaymentRow(index) {
    this.epaymentDataSource.data.splice(index, 1);
    this.epaymentDataSource = new MatTableDataSource(
      this.epaymentDataSource.data
    );

  }

  // total epay amount
  totalAmountEpay(): number {
    let amount = 0;
    this.epaymentDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // redirects  to cheque-list
  gotoCheckList() {
    this.router.navigate(['/ddo/cheque-list']);
  }

  // add row in patient details
  addPationtsDetails() {
    const Col_Data = this.pationDatailsDatasource.data;
    Col_Data.push(
      {
        namePAtiont: '',
        agePationts: '',
        relation: '',
        incument: '',
        trestmentFrom: '',
        trestmentTo: '',
        claimAmt: '0.00',
        disName: '',
        docName: '',
        remarks: ''
      },
    );
    this.pationDatailsDatasource.data = Col_Data;
  }

  // delete row in patient details
  deletePatientDetails(index) {
    this.pationDatailsDatasource.data.splice(index, 1);
    this.pationDatailsDatasource = new MatTableDataSource(this.pationDatailsDatasource.data);
  }

  // redirects to report-gtr-29
  goToReport() {
    this.router.navigate(['/ddo/report-gtr-29']);
  }
}
/** gtr- 29 component ends */



/** grant-head-dialog component starts */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'grant-head-dialog',
  templateUrl: 'grant-head-dialog.html'
})
// tslint:disable-next-line: component-class-suffix
export class GrantHead29Dialog {
  constructor(
    public dialogRef: MatDialogRef<GrantHead29Dialog>,
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
  dataSource = new MatTableDataSource<HeadData>(HEAD_DIALOG_DATA);
  selection = new SelectionModel<HeadData>(true, []);


  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  selectBudgetHead(data): void {
    this.dialogRef.close(data);
  }

}
/** grant-head-dialog component ends */



/** cheque-list-example dialog component starts */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'check-list-example-dialog',
  templateUrl: 'check-list-dialog.html'
})
// tslint:disable-next-line: component-class-suffix
export class GTR29DialogCheckList {
  constructor(
    public dialogRef: MatDialogRef<GTR29DialogCheckList>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private route: Router
  ) { }
  displayedColumns: string[] = ['select', 'gpfNumber', 'employeeName', 'designation'];

  dataSource = new MatTableDataSource<ChequeListTypeDialog1>(ELEMENT_DATA_1);
  selection = new SelectionModel<ChequeListTypeDialog1>(true, []);
  directiveObj = new CommonDirective(this.route);

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  // add to bill
  addToBill() { }
}
/** cheque-list-example dialog component ends */

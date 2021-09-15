
import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatSort } from '@angular/material';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { DialogData } from 'src/app/model/standing-charge';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { ddoMasage } from 'src/app/common/error-message/common-message.constants';
import {
  HeadDataDetails,
  EdpDetails,
  ReceiptDetails,
  ChequeDetails,
  ReceiptSummaryDeduction,
  ReceiptDataSummary,
  EPaymentDetails,
  RecoveryDetails,
  GtrDetailsFourtyFour, GtrDetailsChequeFourtyFour, ChequeListTypeDialog2, IncomeTaxDetails, EmployeeDetails
} from 'src/app/model/ddo-forms';
import { CommonListing, HeaderElement } from 'src/app/model/common-listing';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { DdoDirective } from 'src/app/common/directive/ddo-directive';

const INCOMETAX_DETAILS_DATA: IncomeTaxDetails[] = [
  { panNo: '', rate: '', amountTax: '', remarks: '' }
];

const ELEMENT_DATA: HeadDataDetails[] = [

  {
    fundType: 'Consolidated',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: '017:2054:00:095:01:00:C2 ',
    subHeadDes: 'Treasuries',
    expenditure: 'Standing Charges',
    itemName: '-',
    schemeNo: '000000',
    grantRecievedTillDate: '1000',
    GrantUsedBills: '0',
    Balance: '1000',
    GrantUsedSaved: '2500',
    MoreGrant: '1500'
  },
  {
    fundType: 'Consolidated',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: '017:2054:00:095:01:00:C2 ',
    subHeadDes: 'Treasuries',
    expenditure: 'Standing Charges',
    itemName: '-',
    schemeNo: '000000',
    grantRecievedTillDate: '1000',
    GrantUsedBills: '100',
    Balance: '900',
    GrantUsedSaved: '2400',
    MoreGrant: '1500'
  },
  {
    fundType: 'Consolidated',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: '017:2054:00:095:01:00:C2 ',
    subHeadDes: 'Treasuries',
    expenditure: 'Standing Charges',
    itemName: '-',
    schemeNo: '000000',
    grantRecievedTillDate: '1000',
    GrantUsedBills: '900',
    Balance: '100',
    GrantUsedSaved: '1600',
    MoreGrant: '1500'
  },
  {
    fundType: 'Consolidated',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: '017:2054:00:095:01:00:C2 ',
    subHeadDes: 'Treasuries',
    expenditure: 'New Item',
    itemName: 'Purchase of new car for Director of Agriculture',
    schemeNo: '000000',
    grantRecievedTillDate: '3000',
    GrantUsedBills: '1700',
    Balance: '1300',
    GrantUsedSaved: '800',
    MoreGrant: '-'
  }


];
@Component({
  selector: 'app-gtr-fourty-four',
  templateUrl: './gtr-fourty-four.component.html',
  styleUrls: ['./gtr-fourty-four.component.css'],

})
export class GtrFourtyFourComponent implements OnInit {

  // variables
  ddoParty = false;
  arr = [];
  isInputEdpCode1 = true;
  isInputEdpCode = true;
  isDelete = false;
  isItemList = false;
  checkTable = false;
  epayment = true;
  paymentTypeDropDown = true;
  gtrfourtyFout = 'Form GTR 44 - Detailed Bill of Contingent Charges of Fully vouched contingent charges';
  refNuber = 'Reference Number:';
  refNuberDate = 'Reference Date:';
  home = 'Home';
  ddo = 'DDO';
  createBill = 'Create Online Bill';
  billPreForm = 'Bill Preparation Form';
  ddoInfo = 'DDO Information';
  budgetDetail = 'Budget Details';
  detailHeaderLable = 'Contingent Bill Details';
  detailHeaderLable2 = 'Detailed Bill For Contingent Charges';
  ePayment: false;
  todayDate = Date.now();
  date = new FormControl(new Date());
  tabDisable: Boolean = true;
  selectedIndex: number;
  billPreprationFormFourtyFour: FormGroup;
  incomeCategory: FormGroup;
  amount;
  fileBrowseIndex: number;
  errormsg;
  billRigister;
  BillTransit;
  message;
  BillTransitNo;
  majorHeadVal = '';
  subMajorHeadVal = '';
  minorHeadVal = '';
  subHeadVal = '';
  detailHeadVal = '';
  objectClassVal = '';
  headChargeableVal;
  netDeduction = '500.00';
  maxDate = new Date();

  // lists
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

  constructor(private fb: FormBuilder,
    public dialog: MatDialog,
    private el: ElementRef,
    private router: Router,
  ) { }

  // lists
  financialYearList: CommonListing[] = [
    { value: '1', viewValue: '2019' },
    { value: '2', viewValue: '2020' },
    { value: '3', viewValue: '2021' }
  ];

  monthList: CommonListing[] = [
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

  classType: CommonListing[] = [
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
    { value: '017', viewValue: '017:Treasury and Accounts Administration' }
  ];

  majorHeadList: ListValue[] = [
    { value: '2054', viewValue: '2054 : Treasury and Accounts Administration' }
  ];
  subMajorHeadList: ListValue[] = [
    { value: '00', viewValue: '00' }
  ];

  minorHeadList: ListValue[] = [
    { value: '095', viewValue: '095:Directorate of Accounts and Treasuries' },
    { value: '096', viewValue: '096:Pay and Accounts Offices' },
    { value: '097', viewValue: '097:Treasury Establishment' },
  ];

  subHeadList: ListValue[] = [
    { value: '01', viewValue: '01:GES-1 Directorate' },
    { value: '01', viewValue: '01:Pay and Accounts offices ' },
    { value: '01', viewValue: '01:Treasuries' },
  ];

  detailHeadList: ListValue[] = [
    { value: '00', viewValue: '00:GES-1 Directorate' },
    { value: '00', viewValue: '00:Pay and Accounts offices' },
    { value: '00', viewValue: '00:Treasuries' },
  ];

  objectClassList: ListValue[] = [
    { value: 'C2', viewValue: 'C2 : Administrative Expenses' }
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

  billCodeRequiredList: ListValue[] = [
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

  selectedTaxList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
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
    { value: '5', viewValue: 'Work-In-Progress' },
  ];

  chequeTypeList: ListValue[] = [
    { value: '1', viewValue: 'Beneficiary' },
    { value: '2', viewValue: 'Contractor' },
    { value: '3', viewValue: 'Employee' },
    { value: '4', viewValue: 'Grant In Aid' },
    { value: '5', viewValue: 'GST TDS' },
    { value: '6', viewValue: 'Scholarship' },
    { value: '7', viewValue: 'Service Provider' },
    { value: '8', viewValue: 'Supplier' },
  ];

  chequeList: ListValue[] = [
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
  expenditureColumn: string[] = [
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
  expenditureDataSource = new MatTableDataSource<EdpDetails>(this.expenditureList);

  // reecipt details
  receiptColumn: string[] = [
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
      subHead: '00',
      amount: '400.00'
    },
    {
      edpCode: '9600',
      description: 'Security Deposit',
      dedType: 'A',
      majorHead: '8443',
      subMajorHead: '00',
      minerHead: '103',
      subHead: '00',
      amount: '500.00'
    },
  ];
  receiptDataSource = new MatTableDataSource<ReceiptDetails>(this.receiptList);

  // receipt data summary
  summaryData: string[] = [
    'edpCode',
    'chlanDate',
    'pdAccount',
    'party',
    'amount',
    'action'
  ];
  summaryDataList: ReceiptDataSummary[] = [];
  summaryDataSource = new MatTableDataSource<ReceiptDataSummary>(this.summaryDataList);

  // receipt summary deduction
  deductionCol: string[] = ['expenditure', 'recovery', 'decuctionA', 'decuctionB'];
  deductionList: ReceiptSummaryDeduction[] = [
    { decuctionA: '1000.00', decuctionB: '0.00', expenditure: '6000.00', recovery: '0.00' }
  ];
  deductionDataSource = new MatTableDataSource<ReceiptSummaryDeduction>(this.deductionList);

  // cheque details
  checkColumn: string[] = ['chequeType', 'partyName', 'address', 'accountNo', 'chequeAmount', 'action'];
  checkList: ChequeDetails[] = [
    {
      partyName: '',
      chequeType: '1',
      chequeAmount: '0.00',
      address: '',
      accountNo: ''
    }
  ];
  checkDataSource = new MatTableDataSource<ChequeDetails>(this.checkList);

  // epayment details
  epaymentColumn: string[] = ['payeeName', 'accountNo', 'ifscCode', 'amount', 'action'];
  ePaymentData: EPaymentDetails[] = [];
  epaymentDataSource = new MatTableDataSource<EPaymentDetails>(this.ePaymentData);

  // recovery details
  recoveryColumn: string[] = ['budgetCode', 'description', 'edpCode', 'amount', 'action'];
  recoveryDataList: RecoveryDetails[] = [];
  recoveryDataSource = new MatTableDataSource<RecoveryDetails>(this.recoveryDataList);

  // gtr details
  gtrTbableColumn: string[] = [
    'Payeesname',
    'subVoucher',
    'description',
    'amount',
    'incomeTax',
    'viewLink',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'];
  gtrDetailList: GtrDetailsFourtyFour[] = [];
  gtrDetailDataSource = new MatTableDataSource<GtrDetailsFourtyFour>(this.gtrDetailList);

  // gtr-cheque details list
  gtrTbableChequeColumn: string[] = [
    'partyName',
    'subVoucher',
    'description',
    'amount',
    'incomeTax',
    'viewLink',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'];

  gtrChequeDetailList: GtrDetailsChequeFourtyFour[] = [];
  gtrDetailChequeDataSource = new MatTableDataSource<GtrDetailsChequeFourtyFour>(this.gtrChequeDetailList);

  // form control
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
  billCodeRequiredCtrl: FormControl = new FormControl();
  billCatCtrl: FormControl = new FormControl();
  paymentTypeCtrl: FormControl = new FormControl();
  checkTypeCtrl: FormControl = new FormControl();
  itemCtrl: FormControl = new FormControl();
  taxCtrl: FormControl = new FormControl();

  directiveObject = new DdoDirective(this.dialog);

  ngOnInit() {
    this.errormsg = ddoMasage;
    this.billPreprationFormFourtyFour = this.fb.group({
      monthOf: ['2'],
      financialYear: ['2'],
      classExp: ['1', Validators.required],
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
      exempted: ['2'],
      headChargeable: ['', Validators.required],
      billCode: [''],
      billCodeRequired: ['', Validators.required],
      billCategory: ['1', Validators.required],
      previousBill: [''],
      paymentType: ['2', Validators.required],
      establishment: [''],
      chequeTypeCheck: ['']
    });
    this.incomeCategory = this.fb.group({
      incomeTax: ['2']
    });
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
    this.billPreprationFormFourtyFour.patchValue({
      subMajorHead: '',
      subHead: '',
      minorHead: '',
      detailHead: '',
      type: '1',
      objectClass: '',
      headChargeable: '',
      schemeNo: ''
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
    this.billPreprationFormFourtyFour.patchValue({
      subHead: '',
      minorHead: '',
      detailHead: '',
      type: '1',
      objectClass: '',
      headChargeable: '',
      schemeNo: ''
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
    this.billPreprationFormFourtyFour.patchValue({
      subHead: '',
      detailHead: '',
      type: '1',
      objectClass: '',
      headChargeable: '',
      schemeNo: ''
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
    this.billPreprationFormFourtyFour.patchValue({
      detailHead: '',
      type: '1',
      objectClass: '',
      headChargeable: '',
      schemeNo: ''
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
    this.billPreprationFormFourtyFour.patchValue({
      type: '1',
      objectClass: '',
      headChargeable: '',
      schemeNo: ''
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
    this.billPreprationFormFourtyFour.patchValue({
      headChargeable: this.headChargeableVal,
      schemeNo: '000000'
    });
  }

  // calculate headChargable on demand change
  demandChange(data) {
    if (data.value === '017') {

      this.billPreprationFormFourtyFour.patchValue({
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

  // calculae headchargable on item change
  itemChange(data) {
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
    this.billPreprationFormFourtyFour.patchValue({
      objectClass: '',
      headChargeable: '',
      schemeNo: ''
    });
  }

  // calculate headchargabe on type of estimate change
  typeChange(data) {
    if (data.value !== 1) {

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
      this.billPreprationFormFourtyFour.patchValue({
        itemName: '',
        objectClass: '',
        headChargeable: '',
        schemeNo: ''
      });
    } else {
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
      this.billPreprationFormFourtyFour.patchValue({
        itemName: '',
        objectClass: '',
        headChargeable: '',
        schemeNo: ''
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

  // selects item
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
    this.checkDataSource.data.forEach(element1 => {
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
    const dialogRef = this.dialog.open(GTR44Dialog, {
      width: '1900px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.majorHeadVal = this.majorHeadList[0].value;
      this.subMajorHeadVal = this.subMajorHeadList[0].value;
      this.minorHeadVal = this.minorHeadList[0].value;
      this.subHeadVal = this.subHeadList[0].value;
      this.detailHeadVal = this.detailHeadList[0].value;
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
          + this.detailHeadList[0].value
          + ':'
          + this.objectClassList[0].value;
      } else {
        headcharge = result;
      }
      this.billPreprationFormFourtyFour.patchValue({
        schemeNo: '000000',
        subMajorHead: this.subMajorHeadList[0].value,
        minorHead: this.minorHeadList[0].value,
        subHead: this.subHeadList[0].value,
        detailHead: this.detailHeadList[0].value,
        type: this.typeList[0].value,
        objectClass: this.objectClassList[0].value,
        billCategory: this.billCategoryList[0].value,
        majorHead: this.majorHeadList[0].value,
        demand: this.demandList[0].value,
        headChargeable: headcharge,
      });
    });
  }

  // reset form
  resetForm() {
    this.billPreprationFormFourtyFour.reset();
  }

  // party name change
  partyNameChange(ele, i) {
  }

  checkTableData(ele, i) {
    this.gtrChequeDetailList.splice(i, 1, {
      partyName: ele.partyName,
      subVoucher: '',
      description: '',
      amount: ele.chequeAmount,
      incomeTax: '',
      uploadedFileName: '',
      uploadedBy: ''
    });
    this.gtrDetailChequeDataSource = new MatTableDataSource(this.gtrChequeDetailList);
  }

  // change party anme
  checkPartyName(ele, i) {
    this.gtrChequeDetailList.splice(i, 1, {
      partyName: ele.partyName,
      subVoucher: '',
      description: '',
      amount: ele.amount,
      incomeTax: '',
      uploadedFileName: '',
      uploadedBy: ''
    });
    this.gtrDetailChequeDataSource = new MatTableDataSource(this.gtrChequeDetailList);
  }

  // change e-payment details data
  checkEPayData(ele, i) {
    this.gtrDetailList.splice(
      i, 1, {
      Payeesname: ele.payeeName, subVoucher: '', description: '', amount: ele.amount, incomeTax: 'No', uploadedFileName: '',
      uploadedBy: ''
    }
    );
    this.gtrDetailDataSource = new MatTableDataSource(this.gtrDetailList);
  }

  // opens dialog box on selection of value from cheque list type
  checkDialog(event?: boolean): void {
    if (event) {
      // tslint:disable-next-line: no-use-before-declare
      const dialogRef = this.dialog.open(GTR44DialogCheckList, {
        width: '1000px'
      });

      dialogRef.afterClosed().subscribe(result => {
        const p_data = this.epaymentDataSource.data;
        this.isInputEdpCode = false;
        this.isDelete = true;

        result.forEach(res => {
          this.gtrDetailList.push(
            {
              Payeesname: res['vender'], subVoucher: '', description: '', amount: '', incomeTax: 'No', uploadedFileName: '',
              uploadedBy: ''
            }
          );

          this.gtrDetailDataSource.data = this.gtrDetailDataSource.data;

          p_data.push({
            payeeName: res['vender'],
            accountNo: 32373007812,
            ifscCode: 'SBIN002636',
            amount: '0.00'
          });
          this.epaymentDataSource.data = p_data;
        });
      });
    } else {

      // tslint:disable-next-line: no-use-before-declare
      const dialogRef = this.dialog.open(GTR44EmployeeDialogChecklist, {
        width: '1000px'
      });

      dialogRef.afterClosed().subscribe(result => {
        const p_data = this.epaymentDataSource.data;
        this.isInputEdpCode = false;
        this.isDelete = true;
        result.forEach(res => {
          this.gtrDetailList.push(
            {
              Payeesname: res['employeeName'], subVoucher: '', description: '', amount: '', incomeTax: 'No', uploadedFileName: '',
              uploadedBy: ''
            }
          );

          this.gtrDetailDataSource.data = this.gtrDetailDataSource.data;

          p_data.push({
            payeeName: res['employeeName'],
            accountNo: 32373007812,
            ifscCode: 'SBIN002636',
            amount: '0.00'
          });
          this.epaymentDataSource.data = p_data;
        });
      });

    }
  }

  // on file selection gtr details (e-payment)
  onFileSelectionGtr(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.gtrDetailDataSource.data[this.fileBrowseIndex].file =
        fileSelected.target.files[0];
      this.gtrDetailDataSource.data[this.fileBrowseIndex].uploadedBy =
        'Mr. Pratik Shah';
    }
  }

  // on file selection gtr details (cheque)
  onFileSelectionGtrCheque(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.gtrDetailChequeDataSource.data[this.fileBrowseIndex].file =
        fileSelected.target.files[0];
      this.gtrDetailChequeDataSource.data[this.fileBrowseIndex].uploadedBy =
        'Mr. Pratik Shah';
    }
  }

  // open file selector (e-payment)
  openFileSelectorGtr(item, index) {

    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
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
    const p_data = this.checkDataSource.data;
    p_data.push({
      chequeType: '1',
      partyName: '',
      accountNo: '',
      chequeAmount: '0.00',
      address: ''
    });
    this.checkDataSource.data = p_data;
  }

  // add new row in table
  addNewRowDetail() {
    const Col_Data = this.gtrDetailDataSource.data;
    Col_Data.push({
      subVoucher: '',
      description: '',
      amount: '',
      incomeTax: 'NO',
      uploadedFileName: '',
      uploadedBy: '',
      Payeesname: ''
    });
    this.gtrDetailDataSource.data = Col_Data;
  }

  // add new row in receipt summary
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
  addNewEdpROw() {
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

  // add new row in recovery details
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
      amount: ''
    });
    Col_Data.splice(this.recoveryDataSource.data.length - 2, 1);
    this.recoveryDataSource.data = Col_Data;
    setTimeout(() => { document.getElementById('amount-' + Col_Data.length).focus(); }, 0);
  }


  // delete row from gtr-details
  deleteDetail(index) {
    this.gtrDetailDataSource.data.splice(index, 1);
    this.gtrDetailDataSource = new MatTableDataSource(
      this.gtrDetailDataSource.data
    );
  }

  // view cheque details
  viewDetailsCheque() { }

  // view details
  viewDetails() { }

  // delete row from gtr cheque table
  deleteDetailCheque(index) {
    this.gtrDetailChequeDataSource.data.splice(index, 1);
    this.gtrDetailChequeDataSource = new MatTableDataSource(
      this.gtrDetailChequeDataSource.data
    );

  }

  // remove row from receipt details
  removeRow(index) {
    this.receiptDataSource.data.splice(index, 1);
    this.summaryDataSource.data = [];
    this.receiptDataSource = new MatTableDataSource(
      this.receiptDataSource.data
    );

  }

  // remove row in edp details
  deletExpenditureRow(index) {
    this.expenditureDataSource.data.splice(index, 1);
    this.expenditureDataSource = new MatTableDataSource(
      this.expenditureDataSource.data
    );
  }

  // delete row from e-payment details and gtr details
  deleteEPaymentRow(index) {
    this.epaymentDataSource.data.splice(index, 1);
    this.gtrDetailDataSource.data.splice(index, 1);
    this.epaymentDataSource = new MatTableDataSource(
      this.epaymentDataSource.data
    );
    this.gtrDetailDataSource = new MatTableDataSource(
      this.gtrDetailDataSource.data
    );
  }

  // remove roe from receipt data summary
  removeRowSummary(index) {
    this.summaryDataSource.data.splice(index, 1);
    this.summaryDataSource = new MatTableDataSource(this.summaryDataSource.data);
  }

  // remove row from cheque details and gtr-details
  addDeleteChequekDataRow(index) {
    this.checkDataSource.data.splice(index, 1);
    this.gtrDetailChequeDataSource.data.splice(index, 1);
    this.checkDataSource = new MatTableDataSource(this.checkDataSource.data);
    this.gtrDetailChequeDataSource = new MatTableDataSource(
      this.gtrDetailChequeDataSource.data
    );
  }

  // remove row from recovery details
  deleteRowRecovery(index) {
    this.recoveryDataSource.data.splice(index, 1);
    this.recoveryDataSource = new MatTableDataSource(
      this.recoveryDataSource.data
    );
  }

  // change ddo valueF
  changeDDoValue(data, i) {

    if (data.value === '1') {
      this.ddoParty = false;
      this.checkList.splice(i, 1, {
        chequeType: '1',
        partyName: '',
        address: '',
        accountNo: '',
        chequeAmount: '0.00',
      });
      this.checkDataSource = new MatTableDataSource(this.checkList);
    }
    if (data.value === '2') {
      this.ddoParty = false;
      this.checkList.splice(i, 1, {
        chequeType: '2',
        partyName: 'District Treasury Officer, District Treasury Office, Gandhinagar',
        address: '',
        accountNo: '',
        chequeAmount: '0.00',
      });
      this.gtrChequeDetailList.splice(i, 1, {
        partyName: 'District Treasury Officer, District Treasury Office, Gandhinagar',
        subVoucher: '',
        description: '',
        amount: '',
        incomeTax: '',
        uploadedFileName: '',
        uploadedBy: ''
      });
      this.gtrDetailChequeDataSource = new MatTableDataSource(this.gtrChequeDetailList);
      this.checkDataSource = new MatTableDataSource(this.checkList);
      this.ddoParty = true;

    }
  }

  // go to report
  goToReport() {
    this.router.navigate(['/ddo/report-gtr-44']);
  }

  // got to cheque list
  goToChequeList() {
    this.router.navigate(['/ddo/cheque-list']);
  }

  // view income tax details pop-up
  viewIncomeTax(event, i) {
    // tslint:disable-next-line: max-line-length
    const DATA = { personName: this.gtrDetailDataSource.data[i].Payeesname, amount: this.gtrDetailDataSource.data[i].amount, ePayment: true };
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(IncomeTaxDetailsDialog, {
      width: '900px', data: DATA
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  // view income tax details cheque
  viewIncomeTaxCheque(event, i) {
    // tslint:disable-next-line: max-line-length
    const DATA = { partyName: this.gtrDetailChequeDataSource.data[i].partyName, amount: this.gtrDetailChequeDataSource.data[i].amount, ePayment: false };
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(IncomeTaxDetailsDialog, {
      width: '900px', data: DATA
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  // open income tax details
  openModelIncomeTax(deviceValue, index) {
    if (this.epayment === true) {
      if (deviceValue.value === '1') {
        const DATA = {
          personName: this.gtrDetailDataSource.data[index].Payeesname, amount: this.gtrDetailDataSource.data[index].amount, ePayment: true
        };
        // tslint:disable-next-line: no-use-before-declare
        const dialogRef = this.dialog.open(IncomeTaxDetailsDialog, {
          width: '900px', data: DATA
        });

        dialogRef.afterClosed().subscribe(result => {
          this.arr = result;
        });
      } else {
        if (deviceValue.value === '2') {
          // tslint:disable-next-line: no-use-before-declare
          const dialogRef = this.dialog.open(IncomeTaxDetailsNoDialogComponent, {
            width: '300px',
            height: '175px',
          });
          dialogRef.afterClosed().subscribe(result => {

          });
        }
      }
    } else if (this.checkTable === true) {
      if (deviceValue.value === '1') {
        const DATA = {
          // tslint:disable-next-line: max-line-length
          partyName: this.gtrDetailChequeDataSource.data[index].partyName, amount: this.gtrDetailChequeDataSource.data[index].amount, ePayment: false
        };
        // tslint:disable-next-line: no-use-before-declare
        const dialogRef = this.dialog.open(IncomeTaxDetailsDialog, {
          width: '900px', data: DATA
        });

        dialogRef.afterClosed().subscribe(result => {
          this.arr = result;
        });
      } else {
        if (deviceValue.value === '2') {
          // tslint:disable-next-line: no-use-before-declare
          const dialogRef = this.dialog.open(IncomeTaxDetailsNoDialogComponent, {
            width: '300px',
            height: '175px',
          });
          dialogRef.afterClosed().subscribe(result => {
          });
        }
      }

    }

  }

  // income tax details cheque pop up
  checkListTaxDetail(deviceValue) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(IncomeTaxDetailsCheckListDialog, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => { });
  }

  // calculate total for e-payment type (gtr-44 details)
  calculateEpaymentTypeTotal() {
    let amount = 0;
    this.gtrDetailDataSource.data.forEach(element => { amount = amount + Number(element.amount); });
    return parseFloat(amount.toString()).toFixed(2);
  }

  // calculate total for cheque type (gtr-44 details)
  calculateChequeTypeTotal() {
    let amount = 0;
    this.gtrDetailChequeDataSource.data.forEach(element => { amount = amount + Number(element.amount); });
    return parseFloat(amount.toString()).toFixed(2);
  }
}
/*end 1 Component checkDataSource*/


/** GTR44Dialog opens */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'gtr44-dialog',
  templateUrl: 'gtr44-dialog.html'
})
// tslint:disable-next-line: component-class-suffix
export class GTR44Dialog {

  constructor(public dialogRef: MatDialogRef<GTR44Dialog>,
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
    'schemeNo',
    'grantRecievedTillDate',
    'GrantUsedBills',
    'Balance',
    'GrantUsedSaved',
    'MoreGrant'
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }
  // closes the dialog on click on budget head structure
  selectBudgetHead(data): void {
    this.dialogRef.close();
  }
}
/** GTR44Dialog end */


/** GTR44DialogCheckList start */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'gtr-44dialog-CheckList-dialog',
  templateUrl: 'gtr-44-dialog-Check-List.html'
})
// tslint:disable-next-line: component-class-suffix
export class GTR44DialogCheckList implements OnInit {
  elementData: ChequeListTypeDialog2[] = [
    {
      venderDetails: ' ',
      vender: 'ABC Ltd',
      checkType: 'Contractor',
      accountNo: '3600178925',
      ifscCode: 'SBIN002636',
      bankBranchName: 'sargasan',
      panNo: 'EOXPS8331P',
      rateOfIncomeTax: '10.00',
      mobileNo: '8825077304'
    },
    {
      venderDetails: ' ',
      vender: 'XAT Ltd',
      checkType: 'Contractor',
      accountNo: '3600178926',
      ifscCode: 'SBIN002636',
      bankBranchName: 'Kudasan',
      panNo: 'EOXPS8331Q',
      rateOfIncomeTax: '10.00',
      mobileNo: '8825077604'
    },
    {
      venderDetails: ' ',
      vender: 'YAB Ltd',
      checkType: 'Contractor',
      accountNo: '3600178927',
      ifscCode: 'SBIN002636',
      bankBranchName: 'sargasan',
      panNo: 'EOXPS8331R',
      rateOfIncomeTax: '10.00',
      mobileNo: '8825077604'
    },
    {
      venderDetails: ' ',
      vender: 'ZCCB Ltd',
      checkType: 'Contractor',
      accountNo: '3600178985',
      ifscCode: 'SBIN002636',
      bankBranchName: 'Kudasan',
      panNo: 'EOXPS8331S',
      rateOfIncomeTax: '10.00',
      mobileNo: '8825077904'
    },
    {
      venderDetails: ' ',
      vender: 'CAXD Ltd',
      checkType: 'Contractor',
      accountNo: '3600178929',
      ifscCode: 'SBIN002638',
      bankBranchName: 'Randesan',
      panNo: 'EOXPS8331T',
      rateOfIncomeTax: '10.00',
      mobileNo: '8825077104'
    },
    {
      venderDetails: ' ',
      vender: 'VET Ltd',
      checkType: 'Contractor',
      accountNo: '3600178922',
      ifscCode: 'SBIN002639',
      bankBranchName: 'sargasan',
      panNo: 'EOXPS8331U',
      rateOfIncomeTax: '10.00', mobileNo: '8825077504'
    },
    {
      venderDetails: ' ',
      vender: 'NETR Ltd',
      checkType: 'Contractor',
      accountNo: '3600178921',
      ifscCode: 'SBIN002640',
      bankBranchName: 'Randesan',
      panNo: 'EOXPS8331V', rateOfIncomeTax: '10.00', mobileNo: '8825077704'
    },
  ];
  selectionData: ChequeListTypeDialog2[] = [];
  filterElementData: ChequeListTypeDialog2[];
  smartSearch: FormGroup;
  dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.elementData);
  selection = new SelectionModel<ChequeListTypeDialog2>(true, []);
  directiveObj = new CommonDirective(this.route);
  displayedColumns: string[] = [
    'select',
    'vender',
    'checkType',
    'accountNo',
    'ifscCode',
    'bankBranchName',
    'panNo',
    'rateOfIncomeTax',
    'mobileNo'];
  checkTypeNameCtrl: FormControl = new FormControl();
  @ViewChild(MatSort) sort: MatSort;
  checkTypeNameList: ListValue[] = [
    { value: '1', viewValue: 'Beneficary' },
    { value: '2', viewValue: 'Contractor' },
    { value: '3', viewValue: 'Grant In Aid' },
    { value: '4', viewValue: 'GST / TDS' },
    { value: '5', viewValue: 'Scholorship' },
    { value: '6', viewValue: 'Service Provider' },
    { value: '7', viewValue: 'Supplier ' },
  ];
  errorMessage = 'Please enter valid format of PAN No. in format Like :  AAAAA1111A';
  isIFSCValid;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<GTR44DialogCheckList>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private route: Router) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.smartSearch = this.fb.group({

      vendorName: [''],
      checkTypeName: [''],
      accountNoName: [''],
      ifscCode: [''],
      branchName: [''],
      panNoName: ['', Validators.pattern(/^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/)],
      rateOfIncomeTax: [''],
      mobileNoName: ['']
    });
  }

  // on checking the checkbox
  onCheck(event, row) {
    if (event.checked) {
      if (this.selectionData.filter(e => e['accountNo'] === row
      ['accountNo']).length === 0) {
        this.selectionData.push(row);

      }
    } else {
      this.selectionData.splice(this.selectionData.findIndex(e => e['accountNo'] === row
      ['accountNo'], 1));
    }
  }

  // search the data on basis of fields
  onSearch() {
    const formVal = this.smartSearch.value;
    if (formVal.vendorName !== '' && formVal.vendorName != null) {
      this.filterElementData = this.elementData.filter(
        searchByVendor => searchByVendor.vender.toLowerCase() === formVal.vendorName.toLowerCase());
      this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);
    }

    if (formVal.checkTypeName !== '' && formVal.checkTypeName != null) {
      if (formVal.checkTypeName === '1') {
        const checkTypeNameValue = 'Beneficary';
        this.filterElementData = this.elementData.filter(
          searchByCheckType => searchByCheckType.checkType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);
      }
      if (formVal.checkTypeName === '2') {
        const checkTypeNameValue = 'Contractor';
        this.filterElementData = this.elementData.filter(
          searchByCheckType => searchByCheckType.checkType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);
      }
      if (formVal.checkTypeName === '3') {
        const checkTypeNameValue = 'Grant In Aid';
        this.filterElementData = this.elementData.filter(
          searchByCheckType => searchByCheckType.checkType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);
      }
      if (formVal.checkTypeName === '4') {
        const checkTypeNameValue = 'GST / TDS';
        this.filterElementData = this.elementData.filter(
          searchByCheckType => searchByCheckType.checkType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);
      }
      if (formVal.checkTypeName === '5') {
        const checkTypeNameValue = 'Scholorship';
        this.filterElementData = this.elementData.filter(
          searchByCheckType => searchByCheckType.checkType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);
      }
      if (formVal.checkTypeName === '6') {
        const checkTypeNameValue = 'Service Provider';
        this.filterElementData = this.elementData.filter(
          searchByCheckType => searchByCheckType.checkType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);
      }
      if (formVal.checkTypeName === '7') {
        const checkTypeNameValue = 'Supplier';
        this.filterElementData = this.elementData.filter(
          searchByCheckType => searchByCheckType.checkType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);
      }
    }

    if (formVal.accountNoName !== '' && formVal.accountNoName != null) {
      this.filterElementData = this.elementData.filter(
        searchByAccount => searchByAccount.accountNo.toLowerCase() === formVal.accountNoName.toLowerCase());
      this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);
    }

    if (formVal.ifscCode !== '' && formVal.ifscCode != null) {
      this.filterElementData = this.elementData.filter(
        searchByifscCode => searchByifscCode.ifscCode.toLowerCase() === formVal.ifscCode.toLowerCase());
      this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);
      if (this.filterElementData.length !== 0) {
        this.isIFSCValid = true;
      } else {
        this.isIFSCValid = false;
      }
    }


    if (formVal.branchName !== '' && formVal.branchName != null) {
      this.filterElementData = this.elementData.filter(
        searchByBranch => searchByBranch.bankBranchName.toLowerCase() === formVal.branchName.toLowerCase());
      this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);

    }

    if (formVal.panNoName !== '' && formVal.panNoName != null) {
      this.filterElementData = this.elementData.filter(
        searchByPan => searchByPan.panNo === formVal.panNoName);
      this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);
    }

    if (formVal.rateOfIncomeTax !== '' && formVal.rateOfIncomeTax != null) {
      this.filterElementData = this.elementData.filter(
        searchByrateOfIncomeTax => searchByrateOfIncomeTax.rateOfIncomeTax.toLowerCase() === formVal.rateOfIncomeTax.toLowerCase());
      this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);
    }

    if (formVal.mobileNoName !== '' && formVal.mobileNoName != null) {
      this.filterElementData = this.elementData.filter(
        searchByMobile => searchByMobile.mobileNo.toLowerCase() === formVal.mobileNoName.toLowerCase());
      this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);
    }


    if ((formVal.vendorName === '' || formVal.vendorName == null)
      && (formVal.checkTypeName === '' || formVal.checkTypeName == null)
      && (formVal.accountNoName === '' || formVal.accountNoName == null)
      && (formVal.panNoName === '' || formVal.panNoName == null)
      && (formVal.mobileNoName === '' || formVal.mobileNoName == null)
      && (formVal.branchName === '' || formVal.branchName == null)
      && (formVal.ifscCode === '' || formVal.ifscCode == null)) {
      this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.elementData);
    }
  }

  // check is ifsc valid
  checkIfsc() {
    const formVal = this.smartSearch.value;
    if (formVal.ifscCode !== '' && formVal.ifscCode != null) {
      this.filterElementData = this.elementData.filter(
        searchByifscCode => searchByifscCode.ifscCode.toLowerCase() === formVal.ifscCode.toLowerCase());

      if (this.filterElementData.length !== 0) {
        this.isIFSCValid = true;
      } else {
        this.isIFSCValid = false;
      }
    }
  }

  // return form control
  get fc() {
    return this.smartSearch.controls;
  }

  // reset form
  clearForm() {
    this.smartSearch.reset();

  }

  // close the pop-up
  onNoClick(): void {
    this.dialogRef.close(this.selectionData);
  }



  // add to bill
  addToBill() {
    const table_data = this.dataSource;
  }

}
/** GTR44DialogCheckList end */


/** IncomeTaxDetailsDialog start */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'income-tax-details-dialog',
  templateUrl: 'income-tax-details-dialog.html'
})

// tslint:disable-next-line: component-class-suffix
export class IncomeTaxDetailsDialog {
  copyData;
  isEpayment;
  amount;
  totalAmount;
  incomeTaxCopy: IncomeTaxDetails[] = [];
  constructor(
    public dialogRef: MatDialogRef<IncomeTaxDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.copyData = data;
    this.isEpayment = this.copyData['ePayment'];
    this.amount = this.copyData['amount'];
    this.totalAmount = (this.amount * (10.00)) / 100;
    if (this.isEpayment) {
      const INCOMETAX_DATA = {
        personName: this.copyData['personName'],
        panNo: 'EOXPS8331P',
        rate: '10.00',
        amountTax: this.totalAmount,
        remarks: ''
      };
      this.incomeTaxCopy.push(INCOMETAX_DATA);
    } else {
      const INCOMETAX_DATA = {
        personName: this.copyData['partyName'],
        panNo: 'EOXPS8331P',
        rate: '10.00',
        amountTax: this.totalAmount,
        remarks: ''
      };
      this.incomeTaxCopy.push(INCOMETAX_DATA);
    }
  }

  displayedColumns: string[] = [
    'personName',
    'panNo',
    'rate',
    'amountTax',
    'remarks'
  ];

  incomeTaxDetailDataSource = new MatTableDataSource<IncomeTaxDetails>(this.incomeTaxCopy);

  // close the dialog box
  onNoClick(): void {
    this.dialogRef.close();

  }

  // close the pop up on click on budget head
  selectBudgetHead(): void {
    this.dialogRef.close();
  }

}
/** IncomeTaxDetailsDialog end */


/** IncomeTaxDetailsCheckListDialog start */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'income-tax-details-check-list-dialog',
  templateUrl: 'income-tax-details-check-list-dialog.html'
})
// tslint:disable-next-line: component-class-suffix
export class IncomeTaxDetailsCheckListDialog {
  constructor(
    public dialogRef: MatDialogRef<IncomeTaxDetailsCheckListDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  displayedColumns: string[] = [
    'srNo',
    'panNo',
    'rate',
    'amountTax',
    'remarks'
  ];
  incomeTaxDetailDataSource = new MatTableDataSource<IncomeTaxDetails>(INCOMETAX_DETAILS_DATA);

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

}
/** IncomeTaxDetailsCheckListDialog end */


/** GTR44EmployeeDialogChecklist start */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'gtr-44dialog-Employee-CheckList-dialog',
  templateUrl: 'gtr-44-employee-dialog-Check-List.html'
})
// tslint:disable-next-line: component-class-suffix
export class GTR44EmployeeDialogChecklist implements OnInit {
  directiveObj = new CommonDirective(this.route);
  selectionData: EmployeeDetails[] = [];
  employeeTypeList: ListValue[] = [
    { value: '1', viewValue: 'GO' },
    { value: '2', viewValue: 'NGO' },
    { value: '3', viewValue: 'MLA' },
    { value: '4', viewValue: 'IAS/IPS/IFS' },

  ];
  designationList: ListValue[] = [
    { value: '1', viewValue: 'Section Officer' },
    { value: '2', viewValue: 'Deputy Section Officer' }
  ]
    ;
  elementData: EmployeeDetails[] = [
    {
      employeeNumber: '1234567891',
      gpfNumber: 'MEDL/4323',
      employeeName: 'ABC Employee',
      designation: 'Section Officer',
      employeeType: 'NGO',
      bankAccountNo: '3600178925',
      ifscCode: 'SBI000001',
      bankBranchName: 'Sargasan'
    },
    {
      employeeNumber: '1234567892',
      gpfNumber: 'MEDL/4231',
      employeeName: 'EFG Employee',
      designation: 'Deputy Section Officer',
      employeeType: 'MLA',
      bankAccountNo: '3600178926',
      ifscCode: 'SBI000003',
      bankBranchName: 'Kudasan'
    },
    {
      employeeNumber: '1234567893',
      gpfNumber: 'MEDL/4325',
      employeeName: 'HIJ Employee',
      designation: 'Section Officer',
      employeeType: 'IPS',
      bankAccountNo: '3600178928',
      ifscCode: 'SBI000001',
      bankBranchName: 'Sargasan'
    }
  ];

  isIfscCodeValid: boolean;
  filterElementData: EmployeeDetails[];
  smartSearch: FormGroup;
  dataSource = new MatTableDataSource<EmployeeDetails>(this.elementData);
  selection = new SelectionModel<EmployeeDetails>(true, []);
  displayedColumns: string[] = [
    'select',
    'employeeNumber',
    'gpfNumber',
    'employeeName',
    'designation',
    'employeeType',
    'bankAccountNo',
    'ifscCode',
    'bankBranchName'];
  employeeTypeCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<GTR44EmployeeDialogChecklist>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private route: Router) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.smartSearch = this.fb.group({

      employeeNumber: [''],
      gpfNumber: [''],
      employeeName: [''],
      designation: [''],
      employeeType: [''],
      accountNo: [''],
      ifscCode: [''],
      branchName: ['']
    });
  }

  // on checking the checkbox
  onCheck(event, row) {
    if (event.checked) {
      if (this.selectionData.filter(e => e['accountNo'] === row
      ['accountNo']).length === 0) {
        this.selectionData.push(row);

      }
    } else {
      this.selectionData.splice(this.selectionData.findIndex(e => e['accountNo'] === row
      ['accountNo'], 1));
    }
  }

  // search the table on basis of search fields
  onSearch() {
    const formVal = this.smartSearch.value;
    if (formVal.employeeNumber !== '' && formVal.employeeNumber != null) {
      this.filterElementData = this.elementData.filter(
        searchByemployee => searchByemployee.employeeNumber === formVal.employeeNumber);
      this.dataSource = new MatTableDataSource<EmployeeDetails>(this.filterElementData);
    }

    if (formVal.gpfNumber !== '' && formVal.gpfNumber != null) {
      this.filterElementData = this.elementData.filter(
        searchByGPFNumber => searchByGPFNumber.gpfNumber.toLowerCase() === formVal.gpfNumber.toLowerCase());
      this.dataSource = new MatTableDataSource<EmployeeDetails>(this.filterElementData);
    }

    if (formVal.employeeName !== '' && formVal.employeeName != null) {
      this.filterElementData = this.elementData.filter(
        searchByemployeeName => searchByemployeeName.employeeName.toLowerCase() === formVal.employeeName.toLowerCase());
      this.dataSource = new MatTableDataSource<EmployeeDetails>(this.filterElementData);
    }

    if (formVal.designation !== '' && formVal.designation != null) {

      if (formVal.designation === '1') {
        const designationValue = 'Section Officer';
        this.filterElementData = this.elementData.filter(
          searchBydesignationType => searchBydesignationType.designation.toLowerCase() === designationValue.toLowerCase());
        this.dataSource = new MatTableDataSource<EmployeeDetails>(this.filterElementData);
      }
      if (formVal.designation === '2') {
        const designationValue = 'Deputy Section Officer';
        this.filterElementData = this.elementData.filter(
          searchBydesignationType => searchBydesignationType.designation.toLowerCase() === designationValue.toLowerCase());
        this.dataSource = new MatTableDataSource<EmployeeDetails>(this.filterElementData);
      }
    }

    if (formVal.employeeType !== '' && formVal.employeeType != null) {

      if (formVal.employeeType === '1') {
        const employeeTypeValue = 'GO';
        this.filterElementData = this.elementData.filter(
          searchByemployeeType => searchByemployeeType.employeeType.toLowerCase() === employeeTypeValue.toLowerCase());
        this.dataSource = new MatTableDataSource<EmployeeDetails>(this.filterElementData);
      }
      if (formVal.employeeType === '2') {
        const employeeTypeValue = 'NGO';
        this.filterElementData = this.elementData.filter(
          searchByemployeeType => searchByemployeeType.employeeType.toLowerCase() === employeeTypeValue.toLowerCase());
        this.dataSource = new MatTableDataSource<EmployeeDetails>(this.filterElementData);
      }
      if (formVal.employeeType === '3') {
        const employeeTypeValue = 'MLA';
        this.filterElementData = this.elementData.filter(
          searchByemployeeType => searchByemployeeType.employeeType.toLowerCase() === employeeTypeValue.toLowerCase());
        this.dataSource = new MatTableDataSource<EmployeeDetails>(this.filterElementData);
      }
      if (formVal.employeeType === '4') {
        const employeeTypeValue = 'IAS/IPS/IFS';
        this.filterElementData = this.elementData.filter(
          searchByemployeeType => searchByemployeeType.employeeType.toLowerCase() === employeeTypeValue.toLowerCase());
        this.dataSource = new MatTableDataSource<EmployeeDetails>(this.filterElementData);
      }
    }



    if (formVal.accountNo !== '' && formVal.accountNo != null) {
      this.filterElementData = this.elementData.filter(
        searchByMobile => searchByMobile.bankAccountNo.toLowerCase() === formVal.accountNo.toLowerCase());
      this.dataSource = new MatTableDataSource<EmployeeDetails>(this.filterElementData);
    }

    if (formVal.ifscCode !== '' && formVal.ifscCode != null) {
      this.filterElementData = this.elementData.filter(
        searchByIfscCode => searchByIfscCode.ifscCode.toLowerCase() === formVal.ifscCode.toLowerCase());
      if (this.filterElementData.length !== 0) {
        this.isIfscCodeValid = true;
      } else {
        this.isIfscCodeValid = false;
      }
      this.dataSource = new MatTableDataSource<EmployeeDetails>(this.filterElementData);
    }

    if (formVal.branchName !== '' && formVal.branchName != null) {
      this.filterElementData = this.elementData.filter(
        searchByBranch => searchByBranch.bankBranchName.toLowerCase() === formVal.branchName.toLowerCase());
      this.dataSource = new MatTableDataSource<EmployeeDetails>(this.filterElementData);

    }

    if ((formVal.employeeNumber === '' || formVal.employeeNumber == null)
      && (formVal.gpfNumber === '' || formVal.gpfNumber == null)
      && (formVal.employeeName === '' || formVal.employeeName == null)
      && (formVal.designation === '' || formVal.designation == null)
      && (formVal.employeeType === '' || formVal.employeeType == null)
      && (formVal.accountNo === '' || formVal.accountNo == null)
      && (formVal.ifscCode === '' || formVal.ifscCode == null)
      && (formVal.branchName === '' || formVal.branchName == null)) {
      this.dataSource = new MatTableDataSource<EmployeeDetails>(this.elementData);
    }

  }

  // check is ifsc valid
  checkIfsc() {
    const formVal = this.smartSearch.value;
    if (formVal.ifscCode !== '' && formVal.ifscCode != null) {
      this.filterElementData = this.elementData.filter(
        searchByifscCode => searchByifscCode.ifscCode.toLowerCase() === formVal.ifscCode.toLowerCase());

      if (this.filterElementData.length !== 0) {
        this.isIfscCodeValid = true;
      } else {
        this.isIfscCodeValid = false;
      }
    }
  }

  // return control
  get fc() {
    return this.smartSearch.controls;
  }

  // reet the form
  clearForm() {
    this.smartSearch.reset();
  }

  // close the pop-up
  onNoClick(): void {
    this.dialogRef.close(this.selectionData);
  }

  // add to bill
  addToBill() { }

}
/** GTR44EmployeeDialogChecklist end */


/** IncomeTaxDetailsNoDialogComponent start */
@Component({
  selector: 'app-income-tax-details-no-dialog',
  templateUrl: 'income-tax-details-no-dialog.html'
})
export class IncomeTaxDetailsNoDialogComponent {
  index;
  constructor(
    public dialogRef: MatDialogRef<IncomeTaxDetailsNoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.index = data;
  }

  // closes the pop-up
  closeClick(event?) {
    this.dialogRef.close();
  }
}
/** IncomeTaxDetailsNoDialogComponent end */


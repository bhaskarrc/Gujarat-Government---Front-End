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
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { ddoMasage } from 'src/app/common/error-message/common-message.constants';
import {
  HeadData, GrpDetailsInner, GrpDetailsDeduction, EdpDetails, ReceiptDetails, ReceiptDataSummary,
  ChequeDetails, ReceiptSummaryDeduction, GtrThirty, RecoveryDetails, ChequeListTypeDialog1, EPaymentDetails
} from 'src/app/model/ddo-forms';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { DdoDirective } from 'src/app/common/directive/ddo-directive';
import { HeaderElement } from 'src/app/model/common-listing';


// ddo grant head data
const ELEMENT_DATA: HeadData[] = [
  {
    fundType: 'Consolidated',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: '2054:00:095:01:00:C1 ',
    subHeadDes: 'Treasuries',
    expenditure: 'Standing Charges',
    itemName: '-',
    schemeNo: '000000'
  },
  {
    fundType: 'Consolidated',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: '2054:00:095:01:00:C1 ',
    subHeadDes: 'Treasuries',
    expenditure: 'New Item',
    itemName: 'Purchase of new car for Director of Agriculture',
    schemeNo: '000000'
  }
];

const ELEMENT_DATA1: ChequeListTypeDialog1[] = [
  { gpfNumber: '123456', employeeName: 'ABC', designation: 'DYSO' },
  { gpfNumber: '223355', employeeName: 'XYZ', designation: 'DY' },
];

/** GtrThirtyComponent start */
@Component({
  selector: 'app-gtr-thirty',
  templateUrl: './gtr-thirty.component.html',
  styleUrls: ['./gtr-thirty.component.css'],

})
export class GtrThirtyComponent implements OnInit {

  // variables
  gtrThirty = 'Form GTR 30 - Pay Bill';
  refNuber = 'Reference Number:';
  refNuberDate = 'Reference Date:';
  home = 'Home';
  ddo = 'DDO';
  createBill = 'Create Online Bill';
  billPreForm = 'Bill Preparation Form';
  ddoInfo = 'DDO Information';
  budgetDetail = 'Budget Details';
  billRigister;
  billTransmitRegisterNo;
  message;
  checkTable = false;
  epayment = true;
  paymentTypeDropDown = true;
  isItemList = false;
  isInputEdpCode = true;
  isDelete = false;
  isInputEdpCode1 = true;
  ddoParty;
  todayDate = Date.now();
  tabDisable: Boolean = true;
  selectedIndex: number;
  billPreprationFormThirty: FormGroup;
  amount;
  errormsg;
  maxDate = new Date();

  grossTotl: HeaderElement[] = [
    { label: 'Gross Total', value: '10000.00' },
    { label: 'Recovery', value: '1000.00' },
    { label: 'Deduction A', value: '1000.00' },
    { label: 'Deduction B', value: '0.00' },
    { label: 'Net Total', value: '8000.00' },
    { label: 'Amount in Rs.', value: 'Eight Thousand Only' },
    { label: 'Appropriation For', value: '80000.00' },
    { label: 'Expenditure including this bill', value: '8000.00' },
    { label: 'Balance', value: '72000.00' },
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
  subMajorHead_list: ListValue[] = [
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

  detailedHeadList: ListValue[] = [
    { value: '1', viewValue: '00:GES-1 Directorate' },
    { value: '2', viewValue: '00:Pay and Accounts offices' },
    { value: '3', viewValue: '00:Treasuries' },
  ];

  objectClassList: ListValue[] = [
    { value: '1', viewValue: 'Object Class-1 (Administrative Expenses)' }
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

  typeOfEstiamteList: ListValue[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: 'New Item' },
    { value: '3', viewValue: 'New Work' },
    { value: '4', viewValue: 'Item Continuous' },
    { value: '5', viewValue: 'Work-In-Progress' }
  ];

  chequeListTypeList: ListValue[] = [
    { value: '1', viewValue: 'DYSO' },
    { value: '2', viewValue: 'DY' }
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
    { budgetCode: '0101', description: 'Pay Of Officers', edpCode: '0101', amount: '6000.00' },
    { budgetCode: '0102', description: 'Pay Of Establishment', edpCode: '0102', amount: '1000.00' },
    { budgetCode: '0103', description: 'Dearness Allow.', edpCode: '0103', amount: '2000.00' },
    { budgetCode: '0104', description: 'Other Allowance', edpCode: '0104', amount: '1000.00' },
    { budgetCode: '0107', description: 'Medical Allowances', edpCode: '0107', amount: '0.00' },
    { budgetCode: '0108', description: 'Bonus', edpCode: '0108', amount: '0.00' },
    { budgetCode: '0109', description: 'Leave Encashment', edpCode: '0109', amount: '0.00' },
    { budgetCode: '0110', description: 'House Rent Allowance', edpCode: '0110', amount: '0.00' },
    { budgetCode: '0111', description: 'Compensatory Local Allowance', edpCode: '0111', amount: '0.00' },
    { budgetCode: '0112', description: 'Interim Relief', edpCode: '0112', amount: '0.00' }
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
    {
      edpCode: '9530',
      description: 'Postal Life Insurance',
      dedType: 'A',
      majorHead: '8658',
      subMajorHead: '00',
      minerHead: '103',
      subHead: '00',
      amount: '0.00'
    },
    {
      edpCode: '9531',
      description: 'G.P.F. Class IV',
      dedType: 'A',
      majorHead: '8009',
      subMajorHead: '01',
      minerHead: '101',
      subHead: '02',
      amount: '0.00'
    },
    {
      edpCode: '9532',
      description: 'Pf Worked Charged Employee',
      dedType: 'A',
      majorHead: '8009',
      subMajorHead: '60',
      minerHead: '103',
      subHead: '02',
      amount: '0.00'
    },
    {
      edpCode: '9533',
      description: 'Pf Rozamdar Employee',
      dedType: 'A',
      majorHead: '8009',
      subMajorHead: '60',
      minerHead: '103',
      subHead: '04',
      amount: '0.00'
    },
    {
      edpCode: '9534',
      description: 'New Define Contributory Pension Scheme Type - 1, Govt. Servants Share',
      dedType: 'A',
      majorHead: '8342',
      subMajorHead: '00'
      , minerHead: '117',
      subHead: '01',
      amount: '0.00'
    },
    {
      edpCode: '9540',
      description: 'Baroda State Life Insurance',
      dedType: 'A',
      majorHead: '8658',
      subMajorHead: '00',
      minerHead: '103',
      subHead: '00',
      amount: '0.00'
    },
    {
      edpCode: '9550',
      description: 'Rent Of Building(0216)',
      dedType: 'A',
      majorHead: '0216',
      subMajorHead: '01',
      minerHead: '106',
      subHead: '01',
      amount: '0.00'
    },

  ];
  receiptDataSource = new MatTableDataSource<ReceiptDetails>(this.receiptList);

  //  receipt data summary
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
    { decuctionA: '1000.00', decuctionB: '0.00', expenditure: '10000.00', recovery: '1000.00' }
  ];
  deductionDataSource = new MatTableDataSource<ReceiptSummaryDeduction>(this.deductionList);


  // cheue details
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

  // gtr table
  gtrTbableColumn = ['subVoucher', 'description', 'amount', 'incomeTax', 'viewLink', 'action'];
  gtrDetailList: GtrThirty[] = [
    { subVoucher: '', description: '', amount: '0.00', incomeTax: 'No' },
  ];
  gtrDetailDataSource = new MatTableDataSource<GtrThirty>(this.gtrDetailList);

  // e-payment details
  epaymentColumn = ['payeeName', 'accountNo', 'ifscCode', 'amount', 'action'];
  epaymentDataSource = new MatTableDataSource<EPaymentDetails>([]);

  // recovery details
  recoveryColumn = ['budgetCode', 'description', 'edpCode', 'amount', 'action'];
  recoveryList: RecoveryDetails[] = [
    { budgetCode: '0101', description: 'Pay of Officers', edpCode: '0101', amount: '100.00' },
    { budgetCode: '0102', description: 'Pay Of Establishment', edpCode: '0102', amount: '300.00' },
    { budgetCode: '7057', description: 'Festival Advances', edpCode: '7057', amount: '300.00' },
    { budgetCode: '7058', description: 'Food Grains Advances', edpCode: '7058', amount: '300.00' }
  ];
  recoveryDataSource = new MatTableDataSource<RecoveryDetails>(this.recoveryList);

  // GTR-30_details
  displayedColumnsGrpInner: string[] = [
    'position',
    'EmpNo',
    'EmpName',
    'Designation',
    'payScale',
    'ph',
    'empGrp',
    'basiPay',
    'ficPay',
    'da',
    'hRa',
    'cLa',
    'mealAllow',
    'washAllow',
    'transAllow',
    'specialPay',
    'grossPay',
    'slo'
  ];
  grpDetailsInnerist: GrpDetailsInner[] = [
    {
      position: 1,
      EmpNo: '23467',
      EmpName: 'R.k Sharma',
      Designation: 'Head Accountant',
      payScale: '19500-44400',
      ph: 'NO',
      empGrp: '',
      basiPay: '',
      ficPay: '',
      da: '',
      hRa: '',
      cLa: '',
      mealAllow: '',
      washAllow: '',
      transAllow: '',
      specialPay: '',
      grossPay: '',
      slo: '',
    },

    {
      position: 2,
      EmpNo: '244567',
      EmpName: 'S.K Shukala',
      Designation: 'Head Accountant',
      payScale: '19500-44400',
      ph: 'NO',
      empGrp: '',
      basiPay: '',
      ficPay: '',
      da: '',
      hRa: '',
      cLa: '',
      mealAllow: '',
      washAllow: '',
      transAllow: '',
      specialPay: '',
      grossPay: '',
      slo: '',
    },

    {
      position: 3,
      EmpNo: '244567',
      EmpName: 'S.K Shukala',
      Designation: 'Head Accountant',
      payScale: '19500-44400',
      ph: 'NO',
      empGrp: '',
      basiPay: '',
      ficPay: '',
      da: '',
      hRa: '',
      cLa: '',
      mealAllow: '',
      washAllow: '',
      transAllow: '',
      specialPay: '',
      grossPay: '',
      slo: '',
    },

    {
      position: 4,
      EmpNo: '1544567',
      EmpName: 'Amit Mishsra',
      Designation: 'Head Accountant',
      payScale: '19500-44400',
      ph: 'NO',
      empGrp: '',
      basiPay: '',
      ficPay: '',
      da: '',
      hRa: '',
      cLa: '',
      mealAllow: '',
      washAllow: '',
      transAllow: '',
      specialPay: '',
      grossPay: '',
      slo: '',
    },


    {
      position: 5,
      EmpNo: '1544567',
      EmpName: 'Amit Mishsra',
      Designation: 'Head Accountant',
      payScale: '19500-44400',
      ph: 'NO',
      empGrp: '',
      basiPay: '',
      ficPay: '',
      da: '',
      hRa: '',
      cLa: '',
      mealAllow: '',
      washAllow: '',
      transAllow: '',
      specialPay: '',
      grossPay: '',
      slo: '',
    },


    {
      position: 6,
      EmpNo: '1544567',
      EmpName: 'Amit Mishsra',
      Designation: 'Head Accountant',
      payScale: '19500-44400',
      ph: 'NO',
      empGrp: '',
      basiPay: '',
      ficPay: '',
      da: '',
      hRa: '',
      cLa: '',
      mealAllow: '',
      washAllow: '',
      transAllow: '',
      specialPay: '',
      grossPay: '',
      slo: '',
    },

    {
      position: 7,
      EmpNo: '23467',
      EmpName: 'R.k Sharma',
      Designation: 'Head Accountant',
      payScale: '19500-44400',
      ph: 'NO',
      empGrp: '',
      basiPay: '',
      ficPay: '',
      da: '',
      hRa: '',
      cLa: '',
      mealAllow: '',
      washAllow: '',
      transAllow: '',
      specialPay: '',
      grossPay: '',
      slo: '',
    },

    {
      position: 8,
      EmpNo: '244567',
      EmpName: 'S.K Shukala',
      Designation: 'Head Accountant',
      payScale: '19500-44400',
      ph: 'NO',
      empGrp: '',
      basiPay: '',
      ficPay: '',
      da: '',
      hRa: '',
      cLa: '',
      mealAllow: '',
      washAllow: '',
      transAllow: '',
      specialPay: '',
      grossPay: '',
      slo: '',
    },

    {
      position: 9,
      EmpNo: '244567',
      EmpName: 'S.K Shukala',
      Designation: 'Head Accountant',
      payScale: '19500-44400',
      ph: 'NO',
      empGrp: '',
      basiPay: '',
      ficPay: '',
      da: '',
      hRa: '',
      cLa: '',
      mealAllow: '',
      washAllow: '',
      transAllow: '',
      specialPay: '',
      grossPay: '',
      slo: '',
    },

    {
      position: 10,
      EmpNo: '1544567',
      EmpName: 'Amit Mishsra',
      Designation: 'Head Accountant',
      payScale: '19500-44400',
      ph: 'NO',
      empGrp: '',
      basiPay: '',
      ficPay: '',
      da: '',
      hRa: '',
      cLa: '',
      mealAllow: '',
      washAllow: '',
      transAllow: '',
      specialPay: '',
      grossPay: '',
      slo: '',
    },


    {
      position: 11,
      EmpNo: '1544567',
      EmpName: 'Amit Mishsra',
      Designation: 'Head Accountant',
      payScale: '19500-44400',
      ph: 'NO',
      empGrp: '',
      basiPay: '',
      ficPay: '',
      da: '',
      hRa: '',
      cLa: '',
      mealAllow: '',
      washAllow: '',
      transAllow: '',
      specialPay: '',
      grossPay: '',
      slo: '',
    },


    {
      position: 12,
      EmpNo: '1544567',
      EmpName: 'Amit Mishsra',
      Designation: 'Head Accountant',
      payScale: '19500-44400',
      ph: 'NO',
      empGrp: '',
      basiPay: '',
      ficPay: '',
      da: '',
      hRa: '',
      cLa: '',
      mealAllow: '',
      washAllow: '',
      transAllow: '',
      specialPay: '',
      grossPay: '',
      slo: '',
    },


  ];
  dataSourcegrpinner = new MatTableDataSource<GrpDetailsInner>(this.grpDetailsInnerist);

  // GRP-30-detals-inner tabel End

  // GRP-30-detals-Deduction tabel

  displayedColumnsGrpDeduction: string[] = [
    'position',
    'EmpNo',
    'EmpName',
    'Designation',
    'incomeTax',
    'proTax',
    'hrDeal',
    'hraIntesrt',
    'gpfReg',
    'gpfIv',
    'gpfAdv',
    'govFund',
    'totalDEdiction',
    'netPay'

  ];
  grpDetailsDeductionList: GrpDetailsDeduction[] = [
    {
      position: 1,
      EmpNo: '23467',
      EmpName: 'R.k Sharma',
      Designation: 'Head Accountant',
      incomeTax: '',
      proTax: '',
      hrDeal: '',
      hraIntesrt: '',
      gpfReg: '',
      gpfIv: '',
      gpfAdv: '',
      govFund: '',
      totalDEdiction: '15500.00',
      netPay: '39,400.00',
    },

    {
      position: 2,
      EmpNo: '23467',
      EmpName: 'P.R Binoy',
      Designation: 'Head Accountant',
      incomeTax: '',
      proTax: '',
      hrDeal: '',
      hraIntesrt: '',
      gpfReg: '',
      gpfIv: '',
      gpfAdv: '',
      govFund: '',
      totalDEdiction: '15500.00',
      netPay: '39,400.00',
    },

    {
      position: 3,
      EmpNo: '21542687',
      EmpName: 'Atul Trivedi',
      Designation: 'Head Accountant',
      incomeTax: '',
      proTax: '',
      hrDeal: '',
      hraIntesrt: '',
      gpfReg: '',
      gpfIv: '',
      gpfAdv: '',
      govFund: '',
      totalDEdiction: '15500.00',
      netPay: '39,400.00',
    },

    {
      position: 4,
      EmpNo: '24682687',
      EmpName: 'Riya Gohil',
      Designation: 'Head Accountant',
      incomeTax: '',
      proTax: '',
      hrDeal: '',
      hraIntesrt: '',
      gpfReg: '',
      gpfIv: '',
      gpfAdv: '',
      govFund: '',
      totalDEdiction: '15500.00',
      netPay: '39,400.00',
    },

    {
      position: 5,
      EmpNo: '24687645',
      EmpName: 'Reena Patel',
      Designation: 'Head Accountant',
      incomeTax: '',
      proTax: '',
      hrDeal: '',
      hraIntesrt: '',
      gpfReg: '',
      gpfIv: '',
      gpfAdv: '',
      govFund: '',
      totalDEdiction: '15500.00',
      netPay: '39,400.00',
    },

    {
      position: 6,
      EmpNo: '23467',
      EmpName: 'R.k Sharma',
      Designation: 'Head Accountant',
      incomeTax: '',
      proTax: '',
      hrDeal: '',
      hraIntesrt: '',
      gpfReg: '',
      gpfIv: '',
      gpfAdv: '',
      govFund: '',
      totalDEdiction: '15500.00',
      netPay: '39,400.00',
    },

    {
      position: 7,
      EmpNo: '23467',
      EmpName: 'P.R Binoy',
      Designation: 'Head Accountant',
      incomeTax: '',
      proTax: '',
      hrDeal: '',
      hraIntesrt: '',
      gpfReg: '',
      gpfIv: '',
      gpfAdv: '',
      govFund: '',
      totalDEdiction: '15500.00',
      netPay: '39,400.00',
    },

    {
      position: 8,
      EmpNo: '21542687',
      EmpName: 'Atul Trivedi',
      Designation: 'Head Accountant',
      incomeTax: '',
      proTax: '',
      hrDeal: '',
      hraIntesrt: '',
      gpfReg: '',
      gpfIv: '',
      gpfAdv: '',
      govFund: '',
      totalDEdiction: '15500.00',
      netPay: '39,400.00',
    },

    {
      position: 9,
      EmpNo: '24682687',
      EmpName: 'Riya Gohil',
      Designation: 'Head Accountant',
      incomeTax: '',
      proTax: '',
      hrDeal: '',
      hraIntesrt: '',
      gpfReg: '',
      gpfIv: '',
      gpfAdv: '',
      govFund: '',
      totalDEdiction: '15500.00',
      netPay: '39,400.00',
    },

    {
      position: 10,
      EmpNo: '24687645',
      EmpName: 'Reena Patel',
      Designation: 'Head Accountant',
      incomeTax: '',
      proTax: '',
      hrDeal: '',
      hraIntesrt: '',
      gpfReg: '',
      gpfIv: '',
      gpfAdv: '',
      govFund: '',
      totalDEdiction: '15500.00',
      netPay: '39,400.00',
    },
  ];
  dataSourceGrpDeduction = new MatTableDataSource<GrpDetailsDeduction>(this.grpDetailsDeductionList);


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
  schemeNoCtrl: FormControl = new FormControl();
  itemCtrl: FormControl = new FormControl();
  chequeTypeChequeCtrl: FormControl = new FormControl();

  // directive object for workflow
  directiveObject = new DdoDirective(this.dialog);


  ngOnInit() {
    this.errormsg = ddoMasage;
    this.billPreprationFormThirty = this.fb.group({
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

  // sets whether item name/ work name field should display or not
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
  totalExpenditureAmount(): number {
    let amount = 0;
    this.expenditureDataSource.data.forEach((element1) => {
      amount = amount + Number(element1.amount);
    });
    return amount;
  }

  // calculate recovery details
  totalRecovery(): number {
    let amount = 0;
    this.recoveryDataSource.data.forEach((element1) => {
      amount = amount + Number(element1.amount);
    });
    return amount;
  }

  // calculate total receipt summary details
  totalSummary(): number {
    let amount = 0;
    this.summaryDataSource.data.forEach((element1) => {
      amount = amount + Number(element1.amount);
    });
    return amount;
  }

  // calculate total receipt details amount
  reciptTotal(): number {
    let amount = 0;
    this.receiptDataSource.data.forEach((element1) => {
      amount = amount + Number(element1.amount);
    });
    return amount;
  }

  // open ddo grant head dialog pop up
  openDialogDdoHead(data?): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(GTR30Dialog, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.billPreprationFormThirty.patchValue({
        // class: 'Class I',
        schemeNo: '000000',
        demand: '1',
        majorHead: '1',
        subMajorHead: '1',
        minorHead: '1',
        subHead: '1',
        detailHead: '1',
        objectClass: '1',
        headChargeable: '2054:00:095:01:00:C1 '
      });
    });
  }

  // reset form
  resetForm() {
    this.billPreprationFormThirty.reset();
  }

  // opens cheque list pop-up
  chequeTypeListDialog(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(GTR30DialogCheckList, {
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
      chequeType: '',
      address: ''
    });
    this.checkDataSource.data = p_data;
  }

  // add new row in gtr details table
  addNewRowDetail() {
    const Col_Data = this.gtrDetailDataSource.data;
    Col_Data.push({
      subVoucher: '',
      description: '',
      amount: '',
      incomeTax: 'NO'
    });
    this.gtrDetailDataSource.data = Col_Data;
  }

  // add row in receipt summary data
  addNewRowReceipt(data) {
    const Col_Data = this.summaryDataSource.data;
    Col_Data.push({
      edpCode: '9720',
      pdAccount: '',
      party: '',
      amount: '',
      challanDate: ''
    });
    this.summaryDataSource.data = Col_Data;
  }

  // add row in receipt details
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

  // fill description
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
      amount: '0.00'
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

  // delete row from e-payment details
  deleteEPaymentRow(index) {
    this.epaymentDataSource.data.splice(index, 1);
    this.epaymentDataSource = new MatTableDataSource(
      this.epaymentDataSource.data
    );
  }

  // remove row from receipt summary details
  removeRowsummary(index) {
    this.summaryDataSource.data.splice(index, 1);
    this.summaryDataSource = new MatTableDataSource(this.summaryDataSource.data);
  }

  // deleet row from cheque details
  deleteChequeRow(index) {
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
  changeDDovalue(data) {
    if (data.value === '1') {
      this.ddoParty = '';

    }
    if (data.value === '2') {
      this.ddoParty = 'District Treasury Officer, District Treasury Office, Gandhinagar';
    }
  }

  // go to report
  goToReport() {
    this.router.navigate(['/ddo/report-gtr-30']);
  }
}
/** GtrThirtyComponent ends */



/** GTR30Dialog start */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'gtr30-dialog',
  templateUrl: 'gtr30-dialog.html'
})
// tslint:disable-next-line: component-class-suffix
export class GTR30Dialog {

  constructor(
    public dialogRef: MatDialogRef<GTR30Dialog>,
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
  dataSource = new MatTableDataSource<HeadData>(ELEMENT_DATA);

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  // closes the dialog box on click on budget head structure
  selectBudgetHead(data): void {
    this.dialogRef.close();
  }


}
/** GTR30Dialog ends */

/** GTR30DialogCheckList start */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'gtr-30dialog-CheckList-dialog',
  templateUrl: 'gtr-30-dialog-Check-List.html'
})
// tslint:disable-next-line: component-class-suffix
export class GTR30DialogCheckList {
  constructor(
    public dialogRef: MatDialogRef<GTR30DialogCheckList>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private route: Router) { }
  displayedColumns: string[] = ['select', 'gpfNumber', 'employeeName', 'designation'];

  dataSource = new MatTableDataSource<ChequeListTypeDialog1>(ELEMENT_DATA1);
  selection = new SelectionModel<ChequeListTypeDialog1>(true, []);

  // directive object for checkbox
  directiveObj = new CommonDirective(this.route);

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  // add to bill
  addToBill() { }
}
/** GTR30DialogCheckList end */


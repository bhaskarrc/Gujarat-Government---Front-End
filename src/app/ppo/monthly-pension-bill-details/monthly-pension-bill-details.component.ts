import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { ReceiptSecondTableList, MonthlyPension, MonthlyPensionDetails, HeadCode } from 'src/app/model/ppo';

@Component({
  selector: 'app-monthly-pension-bill-details',
  templateUrl: './monthly-pension-bill-details.component.html',
  styleUrls: ['./monthly-pension-bill-details.component.css']
})
export class MonthlyPensionBillDetailsComponent implements OnInit {
  // variables
  token_num = '';
  todayDate = new Date();
  variationDetailsForm: FormGroup;
  monthlyPensionBillForm: FormGroup;
  budgetDetailsForm: FormGroup;
  billDetailsForm: FormGroup;
  isInputEdpCode = true;
  isDelete = false;
  isInputEdpCode1 = true;
  checked = true;

  // form controls
  monthCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();
  schemeCtrl: FormControl = new FormControl();
  sortByCtrl: FormControl = new FormControl();
  viewDetailsCtrl: FormControl = new FormControl();
  empTypeForTheMonthOfCtrl: FormControl = new FormControl();
  classOfExpenditureCtrl: FormControl = new FormControl();
  fundCtrl: FormControl = new FormControl();
  budgetTypeCtrl: FormControl = new FormControl();
  typeOfExpenditureCtrl: FormControl = new FormControl();
  billCategoryCtrl: FormControl = new FormControl();
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  auditorCTRL: FormControl = new FormControl();

  // lists
  month_list: ListValue[] = [
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

  year_list: ListValue[] = [
    { value: '1', viewValue: '2005' },
    { value: '2', viewValue: '2006' },
    { value: '3', viewValue: '2007' },
    { value: '4', viewValue: '2008' },
    { value: '5', viewValue: '2009' },
    { value: '6', viewValue: '2010' },
    { value: '7', viewValue: '2011' },
    { value: '8', viewValue: '2012' },
    { value: '9', viewValue: '2013' },
    { value: '10', viewValue: '2014' },
    { value: '11', viewValue: '2015' },
    { value: '12', viewValue: '2016' },
    { value: '13', viewValue: '2017' },
    { value: '14', viewValue: '2018' },
    { value: '15', viewValue: '2019' },
    { value: '16', viewValue: '2020' },
  ];

  scheme_list: ListValue[] = [
    { value: '1', viewValue: 'IRLA' },
    { value: '2', viewValue: 'Money Order' },
    { value: '3', viewValue: 'RUBARU' },
  ];

  sortBy_list: ListValue[] = [
    { value: '1', viewValue: 'PPO No.' },
    { value: '2', viewValue: 'Ledger No.' },
    { value: '3', viewValue: 'Account No.' },
  ];

  viewDetails_list: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  classOfExpenditure_list: ListValue[] = [
    { value: '1', viewValue: '1-Voted' },
    { value: '2', viewValue: '5-Public' },
  ];

  fund_list: ListValue[] = [
    { value: '1', viewValue: 'Consolidated' },
    { value: '2', viewValue: '' },
  ];

  budgetType_list: ListValue[] = [
    { value: '1', viewValue: 'State' },
    { value: '2', viewValue: 'CSS' },
  ];

  typeOfExpenditure_list: ListValue[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: '' },
  ];

  billCategory_list: ListValue[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: '' },
  ];

  // table data
  expenditureList: any[] = [
  ];

  expenditureColumn = [
    'edpCode',
    'description',
    'budgetCode',
    'amountExp',
  ];

  receiptList: any[] = [
  ];

  receiptColumn = [
    'edpCode',
    'dedType',
    'majorHead',
    'subMajorHead',
    'minerHead',
    'subHead',
    'amount',
  ];

  deductionList: ReceiptSecondTableList[] = [
    { deductionA: '0.00', deductionB: '0.00', expenditure: '0.00', amount: '0.00' }
  ];

  deductionCol = ['expenditure', 'recovery', 'decuctionA', 'decuctionB'];

  ELEMENT_DATA: MonthlyPension[] = [
    { chequeType: 'EP Cheque', partyName: 'ABC Ltd', accountNo: 12345654, ifscCode: 'SBIN002636', chequeAmount: 100 }
  ];

  displayedColumns: string[] = ['serialNo', 'chequeType', 'partyName', 'accountNo', 'ifscCode', 'chequeAmount'];

  headCodeWiseSummaryList: HeadCode[] = [
    { headcode: '', description: '', grossAmount: '', deductionA: '', deducitonB: '', netAmount: '' }
  ];

  headCodeWiseSummaryColumn: string[] = [
    'headcode', 'description', 'grossAmount', 'deductionA', 'deducitonB', 'netAmount'
  ];

  monthlyPensionListList: MonthlyPensionDetails[] = [
    {
      headCode: '', ppoNo: '', nameOfPensioner: '', acNo: '', allocationBefore01_01_1956: '',
      allocationAfter01_01_1956: '', allocationAfter01_01_1960: '',
      basicPanesion: '', dpAmount: '', adpAmount: '', tiAmount: '', maAmount: '', cvpMonthly: '',
      tiArears: '', otherArear: '', itCut: '', specialCut: '',
      otherBenefits: '', reliefBill: '', recoveryAmount: '', pensionCut: '', personalPension: '',
      irAmount: '', moCommission: '', netAmount: ''
    }
  ];

  monthlyPensionListColumn: string[] = [
    'srNo', 'headCode', 'ppoNo', 'nameOfPensioner', 'acNo', 'allocationBefore01_01_1956',
    'allocationAfter01_01_1956', 'allocationAfter01_01_1960',
    'basicPanesion', 'dpAmount', 'adpAmount', 'tiAmount', 'maAmount', 'cvpMonthly', 'tiArears',
    'otherArear', 'itCut', 'specialCut', 'otherBenefits',
    'reliefBill', 'recoveryAmount', 'pensionCut', 'personalPension', 'irAmount', 'moCommission', 'netAmount'
  ];

  expenditureDataSource = new MatTableDataSource(this.expenditureList);
  receiptDataSource = new MatTableDataSource(this.receiptList);
  deductionDataSource = new MatTableDataSource(this.deductionList);
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  headCodeWiseSummary = new MatTableDataSource(this.headCodeWiseSummaryList);
  monthlyPensionListDataSource = new MatTableDataSource(this.monthlyPensionListList);


  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.monthlyPensionBillFormData();
    this.budgetDetailsFormData();
    this.billDetailsFormData();
    this.variationDetailsFormData();
  }

  monthlyPensionBillFormData() {
    this.monthlyPensionBillForm = this.fb.group({
      month: [''],
      year: [''],
      scheme: [''],
      bankCode: [''],
      bank: [''],
      branch: [''],
      sortBy: [''],
      viewDetails: [''],
      ppoNo: ['']
    });
  }

  budgetDetailsFormData() {
    this.budgetDetailsForm = this.fb.group({
      employeeName: [''],
      designation: [''],
      forTheEstablishmentOf: [''],
      employeeTypeForTheMonthOf: [''],
      classOfExpenditure: ['1'],
      fund: ['1'],
      budgetType: ['1'],
      typeOfExpenditure: ['1'],
      billCategory: ['1'],
      schemeNo: [''],
      demand: [''],
      majorHead: [''],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
      detailedHead: [''],
      objectHeadClass: [''],
      headChargeable: [''],
    });
  }

  billDetailsFormData() {
    this.billDetailsForm = this.fb.group({
      billRemarks: ['']
    });
  }

  variationDetailsFormData() {
    this.variationDetailsForm = this.fb.group({
      b_b_1_11_56: [''],
      b_a_1_11_56: [''],
      basic_pension: [''],
      da_pension: [''],
      ir: [''],
      ma: [''],
      ti: [''],
      arrearTi: [''],
      netAmount: [''],
      g_a_1_5_60: [''],
      pensionCut: [''],
      cvpMonthly: [''],
      personalPension: [''],
      arrear: [''],
      otherBenefit: [''],
      otherCut: [''],
      moCom: [''],
      deduction: [''],
    });
  }

  // calculates total exp amt
  totalExpeAmount(): number {
    let amountExp = 0;
    this.expenditureDataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.amountExp);
    });
    return amountExp;
  }

  // adds new row
  addLeave() {
    const p_data = this.expenditureDataSource.data;
    this.isInputEdpCode = false;
    this.isDelete = true;
    p_data.push({
      budgetCode: '',
      description: '',
      edpCode: '',
      amountExp: '0.00'
    });
    this.expenditureDataSource.data = p_data;
  }

  // deletes row
  deletExpenditureRow(index) {
    this.expenditureDataSource.data.splice(index, 1);
    this.expenditureDataSource = new MatTableDataSource(
      this.expenditureDataSource.data
    );
  }

  // adds new row
  AddnewEdpRow() {
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

  // patches value
  fillEdpDSescription() {
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

  // calculates receipt total
  reciptTotal(): number {
    let amount = 0;
    this.receiptDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

}

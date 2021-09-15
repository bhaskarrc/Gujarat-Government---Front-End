import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource } from '@angular/material';
import { ReceiptDetails } from 'src/app/ddo/gtr-forms/gtr-sixtytwo-a/sixtytwo-a.component';
import { ppoMessage } from 'src/app/common/error-message/common-message.constants';
import { ListOfCheque, ReceiptSecondTableList, Expenditure } from 'src/app/model/ppo';

const listOfChequeDataSource: ListOfCheque[] = [
  {
    partyName: 'Ramatuji Kodarji',
    accountNo: '',
    paymentType: 'pc',
    address: 'Near Vari Gruh',
    chequeAmount: '874063.00',
    micrCode: ''
  }
];


const receiptSecondTableList: ReceiptSecondTableList[] = [{
  deductionA: '0.00',
  deductionB: '0.00',
  expenditure: '0.00',
  amount: '874063.00'
}];


const expenditureList: Expenditure[] = [
  {
    budgetCode: '0400',
    description: 'Pension',
    edpCode: '0401',
    amount: '874063.00'
  }
];

@Component({
  selector: 'app-pension-bill',
  templateUrl: './pension-bill.component.html',
  styleUrls: ['./pension-bill.component.css']
})
export class PensionBillComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  // variables
  errorMessages = ppoMessage;
  checkpayment = true;
  paymentBlock = true;
  billDetails: FormGroup;
  budgetDetails: FormGroup;
  selectedIndex: number;
  employeeName = 'H J Trivedi';
  designation = 'Treasury Officer(Pension)';
  officeName = 'Treasury Officer, PENSION PAYMENT OFFICE';
  amount = 874063.00;
  receiptTotal = 874063.00;
  deductionA = 0.00;
  deductionB = 0.00;
  expenditure = 0.00;

  // form controls
  monthsCTRL: FormControl = new FormControl();
  classOfExpenditureCtrl: FormControl = new FormControl();
  classCtrl: FormControl = new FormControl();
  fundTypeCtrl: FormControl = new FormControl();
  budgetTypeCtrl: FormControl = new FormControl();
  expenditureTypeCtrl: FormControl = new FormControl();
  billCatCtrl: FormControl = new FormControl();
  paymentTypeCtrl: FormControl = new FormControl();
  attachmentTypeCodeCtrl: FormControl = new FormControl();

  // lists
  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];

  billCategoryList: ListValue[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'Regular / Challen' },
    { value: '3', viewValue: 'TC' },
    { value: '4', viewValue: 'Nil' }
  ];

  budgetType: ListValue[] = [
    {
      value: '1', viewValue: 'State'
    }
  ];
  expenditureType: ListValue[] = [
    {
      value: '1', viewValue: 'Standing Charges'
    }
  ];

  classType: ListValue[] = [
    { value: '1', viewValue: ' 2-Charged' },
    { value: '2', viewValue: ' 1-Voted' }
  ];

  fundType: ListValue[] = [
    { value: '1', viewValue: '3-Consolidated' },
    { value: '2', viewValue: '4-Contingency' },
    { value: '3', viewValue: '5-Public Accounts' }
  ];

  Months_list: ListValue[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'September' },
    { value: '9', viewValue: 'October' },
    { value: '9', viewValue: 'November' },
    { value: '9', viewValue: 'Decmber' }
  ];

  // second table
  receiptSecondTableColumn: string[] = [
    'deductionA',
    'deductionB',
    'expenditure',
    'netAmount'
  ];

  chequeListColumn: string[] = [
    'paymentType',
    'partyName',
    'address',
    'accountNo',
    'micrCode',
    'chequeAmount'
  ];

  PaymentType_list: ListValue[] = [
    { value: '1', viewValue: 'Cheque' },
    { value: '2', viewValue: 'PC' }
  ];

  // Receipt Details
  receiptColumn = [
    'edpCode',
    'dedType',
    'majorHead',
    'subMajorHead',
    'minerHead',
    'subHead',
    'amount'
  ];

  receiptList: ReceiptDetails[] = [];

  // Receipt-Data Summary
  summaryData = [
    'edpCode',
    'chlanDate',
    'pdAccount',
    'party',
    'amount',
  ];

  expenditureColumn: string[] = [
    'budgetCode',
    'description',
    'edpCode',
    'amount'
  ];

  receiptDataSource = new MatTableDataSource(this.receiptList);
  expenditureDataSource = new MatTableDataSource(expenditureList);
  listOfChequeDataSource = new MatTableDataSource(listOfChequeDataSource);
  receiptSecondTableDataSource = new MatTableDataSource(receiptSecondTableList);

  // calculates total exp amt
  totalExpeAmount(): number {
    let amount = 0;
    this.expenditureDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculates net amt
  netAmount(): number {
    let amount = 0;
    this.expenditureDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  budgetDetailsformData() {
    this.budgetDetails = this.fb.group({
      month: ['2'],
      classExp: ['2'],
      funds: ['1'],
      budgetTypes: ['1'],
      expenditureTypes: ['1'],
      billCategory: ['1'],
      schemeNo: ['000000'],
      demand: ['018'],
      majorHead: ['2071'],
      subMajorHead: ['01'],
      minorHead: ['01'],
      detailedHead: ['00'],
      subHead: ['01'],
      objectHeadClass: ['C1'],
      headChargable: ['2071011010100C1'],
      paymentType: ['2'],
    });
  }

  billDetailsFormData() {
    this.billDetails = this.fb.group({
      ppoNo: 'L/GNR/STATE/CL-IV/P/0119',
      tokenNo: '0',
      pensionerName: 'Ramatuji Kodarji Thakor',
      pensionBillMonth: 'March-2019',
      date: '29/4/2020',
      basicPension: '4350.00',
      pensionCut: '0.00',
      dpAmount: '0.00',
      itCut: '0.00',
      adpAmount: '0.00',
      tiAmount: '5916.00',
      deduction: '0.00',
      medicalAllowance: '0.00',
      specialCut: '0.00',
      personalPension: '0.00',
      cvpMonthly: '0.00',
      irAmount: '0.00',
      otherBenefits: '0.00',
      tiArrear: '0.00',
      pensionBillAmount: '10266.00',
      netArrearAmount: '874063.00',
      netPensionAmount: '874063.00',
      fileDescription: '',
      attachFile: '',
      billRemarks: '',
      netAmountInWords: 'Eight Lac Seventy Four Thousand Sixty Three Rupees'
    });
  }


  // sets tab index
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
    const temp = this.selectedIndex;
  }

  // selects bill category
  billCategoryChange(data) {
    if (data.value === 3 || data.value === 4) {
      this.checkpayment = false;
      this.paymentBlock = false;
    } else {
      this.checkpayment = true;
      this.paymentBlock = true;
    }
  }

  ngOnInit() {
    this.budgetDetailsformData();
    this.billDetailsFormData();
  }

}

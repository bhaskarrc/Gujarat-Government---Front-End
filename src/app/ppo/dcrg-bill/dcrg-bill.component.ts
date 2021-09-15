import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ReceiptDetails } from 'src/app/ddo/gtr-forms/gtr-sixtytwo-a/sixtytwo-a.component';
import { MatTableDataSource } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';
import { ppoMessage } from 'src/app/common/error-message/common-message.constants';
import { ListOfCheque, ReceiptSecondTableList, Expenditure } from 'src/app/model/ppo';


const listOfChequeDataSource: ListOfCheque[] = [
  {
    partyName: 'Ramatuji Kodarji',
    accountNo: '1234567890123',
    paymentType: 'pc',
    address: 'Near Vari Gruh',
    chequeAmount: '176610.00',
    micrCode: 'SBIN002636'
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
    description: 'Gratuties',
    edpCode: '0402',
    amount: '176610.00'
  }
];

@Component({
  selector: 'app-dcrg-bill',
  templateUrl: './dcrg-bill.component.html',
  styleUrls: ['./dcrg-bill.component.css']
})
export class DcrgBillComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  // variables
  errorMessages = ppoMessage;
  todayDate = new Date();
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
  checkpayment = true;
  paymentBlock = true;

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


  PaymentType_list: ListValue[] = [
    { value: '1', viewValue: 'Cheque' },
    { value: '2', viewValue: 'PC' }
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
  // table data
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

  // calculates net amount
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

  dcrgBillDetailsFormData() {
    this.billDetails = this.fb.group({
      ppoNo: 'L/GNR/STATE/CL-IV/P/011941',
      tokenNo: '10250',
      pensionerName: 'Ramatuji Kodarji Thakor',
      pensionBillMonth: 'March-2019',
      date: '29/04/2019',
      address: 'Patana Nagar, Yojana Bhavan, Block-B',
      billDesignation: 'Mazdoor',
      cvpAmount: '176610.00',
      deduction: '0.00',
      billNetAmount: '176610.00',
      fileDescription: '',
      attachFile: '',
      billRemarks: '',
      netAmountInWords: 'One Lac Seventy Sixty Thousand Six Hundred Ten Rupees'
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
    this.dcrgBillDetailsFormData();
  }

}

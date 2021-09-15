import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { pdplaMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { AdviceAuditor, EpayTable, DetailPostingDate, ListValue } from 'src/app/model/pdpla';

@Component({
  selector: 'app-advice-to',
  templateUrl: './advice-to.component.html',
  styleUrls: ['./advice-to.component.css']
})
export class AdviceToComponent implements OnInit {

  // Date
  todayDate = Date.now();
  today = new Date();
  initiationdate = new Date(new Date());
  // Form Group
  pdplaform: FormGroup;
  // Variable
  selectedIndex: number;
  errorMessages = pdplaMessage;
  cheque = true;
  epay = false;

  constructor(
    private fb: FormBuilder, private router: Router
  ) { }

  Cheque_Data: AdviceAuditor[] = [
    {
      checked: false,
      chequeDate: '',
      chequeNo: '20564789',
      chequAmt: '10000.00',
      partyName: 'MR ABC',
      chequeTotal: '10000.00',
    },
  ];

  dataSourcecheque = new MatTableDataSource<any>(this.Cheque_Data);
  displayedColumncheque: any[] = [
    'checked',
    'chequeDate',
    'chequeNo',
    'chequAmt',
    'partyName',
    'chequeTotal',
    'action'
  ];

  Epay_Data: EpayTable[] = [
    {
      checked: false,
      partyName: 'MR ABC',
      bankAcNo: '20451789',
      epayDate: '',
      epayTotal: '10000.00',
      advType: '2548',
    },
  ];

  dataSourceEpay = new MatTableDataSource<any>(this.Epay_Data);
  displayedColumnEpay: any[] = [
    'checked',
    'partyName',
    'bankAcNo',
    'epayDate',
    'epayAmt',
    'epayTotal',
    'advType',
    'action'

  ];

  Detail_posting_Data: DetailPostingDate[] = [
    {
      checked: false,
      classOfEXp: '',
      fund: '',
      typeExp: '',
      budgetType: '',
      mjrHead: '',
      submjrHead: '',
      minorHead: '',
      subHead: '',
      detailHead: '',
      objectHead: '',
      eapAmt: '',
      headwise: '5000.00',
      acBal: '3000.00',
      expanditure: '8000.00',
    },
  ];

  dataSourcedetailsPosting = new MatTableDataSource<any>(
    this.Detail_posting_Data
  );
  displayedColumnDetailPosting: any[] = [
    'checked',
    'mjrHead',
    'submjrHead',
    'minorHead',
    'subHead',
    'detailHead',
    'eapAmt',
    'acBal',
    'action'
  ];
  // List
  objectHead_list: ListValue[] = [
    { value: '1', viewValue: '0110' },
  ];

  detailHead_list: ListValue[] = [
    { value: '1', viewValue: '00:' },
  ];

  subHead_list: ListValue[] = [
    { value: '1', viewValue: '01' },

  ];

  minorHead_list: ListValue[] = [
    { value: '1', viewValue: '109' },
  ];

  subMajorHead_list: ListValue[] = [
    { value: '1', viewValue: '00' },
  ];

  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '8448' },
    { value: '2', viewValue: '8342' },
  ];

  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];

  demand_list: ListValue[] = [
    { value: '1', viewValue: '001' },
    { value: '2', viewValue: '002' },
    { value: '3', viewValue: '047' },
    { value: '4', viewValue: '048' },
    { value: '5', viewValue: '049' },
    { value: '6', viewValue: '084' },
    { value: '7', viewValue: '085' },
    { value: '8', viewValue: '093' },
    { value: '9', viewValue: '095' },
    { value: '10', viewValue: '096' },
  ];

  budget_lists: ListValue[] = [
    { value: '1', viewValue: 'State' },
    { value: '2', viewValue: 'CSS' },
  ];

  type_EXp: ListValue[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: 'Development Charges' },
  ];

  fund_list: ListValue[] = [
    { value: '1', viewValue: 'Consolidated' },
    { value: '2', viewValue: 'Contingency' },
  ];

  class_of_Exp: ListValue[] = [
    { value: '1', viewValue: 'Voted' },
    { value: '2', viewValue: 'Charged' },
  ];

  lists: ListValue[] = [
    { value: '1', viewValue: 'Exempted' },
    { value: '2', viewValue: 'Non-Exempted' },
  ];

  payment_type_list: ListValue[] = [
    { value: '1', viewValue: 'Cheque ' },
    { value: '2', viewValue: 'E-Payment' },
  ];



  Months_list: ListValue[] = [
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
    { value: '9', viewValue: 'Decmber' },
  ];
  // Form COntrol
  monthCtrl: FormControl = new FormControl();
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  paymentCtrl: FormControl = new FormControl();
  ngOnInit() {
    this.pdplaform = this.fb.group({
      // Formfields
      payType: ['1'],
      advNo: [''],
      pdplaNo: [''],
      advDate: [''],
      month: ['6'],
      majorHeadCode: ['1'],
      submjrcode: ['1'],
      minorHead: ['1'],
      subHead: ['1'],
      detailHead: ['1'],
      objectHead: ['1'],
      eapAmt: [''],
      adviceBalanceAndNewAdvice: [''],
      bank: [''],
      treasuryOffice: [''],
      district: [''],
      ddoNo: [''],
      cardexNo: [''],
      pdplaName: [''],
      netTotal: [''],
      deductionTotal: [''],
      securityDeposit: [''],
      surcharge: [''],
      incomeTax: [''],
      professionalTax: ['']

    });
  }

  // sets value on selection pf payment type
  payment(data) {
    if (data.value === '1') {
      this.epay = false;
      this.cheque = true;
    }
    if (data.value === '2') {
      this.cheque = false;
      this.epay = true;
    }
  }

  // adds entry row for cheque
  addRowCheque() {
    if (this.dataSourcecheque) {
      this.dataSourcecheque = new MatTableDataSource<any>(this.Cheque_Data);
      const p_data = this.dataSourcecheque.data;

      p_data.push({
        checked: false,
        chequeDate: '',
        chequeNo: '20564789',
        chequAmt: '10000.00',
        partyName: 'MR ABC',
        chequeTotal: '10000.00',
      });
      this.dataSourcecheque.data = p_data;
    }

  }

  // adds entry row for epay
  addRowEpay() {
    if (this.dataSourceEpay) {
      this.dataSourceEpay = new MatTableDataSource<any>(this.Epay_Data);
      const p_data = this.dataSourceEpay.data;

      p_data.push({
        checked: false,
        partyName: 'MR ABC',
        bankAcNo: '20451789',
        epayDate: '',
        epayTotal: '10000.00',
        advType: '2548',
      });
      this.dataSourceEpay.data = p_data;
    }

  }

  // adds entry row for details
  addRowDetails() {
    if (this.dataSourcedetailsPosting) {
      this.dataSourcedetailsPosting = new MatTableDataSource<any>(this.Detail_posting_Data);
      const p_data = this.dataSourcedetailsPosting.data;

      p_data.push({
        checked: false,
        classOfEXp: '',
        fund: '',
        typeExp: '',
        budgetType: '',
        schemNO: '',
        demanNO: '',
        mjrHead: '',
        submjrHead: '',
        minorHead: '',
        subHead: '',
        detailHead: '',
        objectHead: '',
        eapAmt: '',
        headwise: '5000.00',
        acBal: '3000.00',
        expanditure: '8000.00',
      });
      this.dataSourcedetailsPosting.data = p_data;
    }

  }

  // sets tab index
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
  }

}

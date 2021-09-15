import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { ListValue, RBIDetails, AccountingEn, AccountingEntries, GSTDetails } from 'src/app/model/epaoModel';
import { EPaoDirectives } from 'src/app/common/directive/epao';
const ELEMENT_DATA: RBIDetails[] = [
  {
    status: 'Forwarded',
    cin: '4254432',
    amount: '10000.00',
    partyName: 'A K Mehta',
    govCreditDate: '12-Feb-20',
    scrollDate: '19-Dec-19',
    paymentDate: '19-Dec-19',
    remarks: '-',
    type: 'RAT Clear',
    bank: '-',
    scrollNo: 'ENV486468541'
  },
];
const ELEMENT_DATAGST: GSTDetails[] = [
  {

    gstin: '486468541',
    cin: '4254432',
    partyName: 'A K Mehta',
    paymentDate: '19-Dec-19',
    sgstFees: '5000.00',
    sgsttac: '5000.00',
    sgstInterest: '0.00',
    sgstOthers: '0.00',
    sgstPenalty: '0.00',
    sgstTotal: '10,000.00'
  }
];
const ELEMENT_DATAAS: AccountingEntries[] = [
  {
    matched: 'Yes',
    moeType: '-',
    moeId: '-',
    moeStatus: '-',
    debitHeaad: '05',
    creditHead: '01',
    amount: '10,000.00',
  }
];
const ELEMENT_DATAR: AccountingEn[] = [
  {

    majorHead: '8675',
    subMajorHead: '00',
    minorHead: '106',
    subhead: '05',
    detailHead: '01',
    amount: '10,000.00',
    majorHead1: '8568',
    subMajorHead1: '00',
    minorHead1: '108',
    subhead1: '01',
    detailHead1: '01',
    amount1: '10,000.00',
    description: 'deposit with Reverse Bank (Reserve Bank of India, PAD)',
    description1: ' suspense account (reserve Bank of India, PAD)',
  }
];
@Component({
  selector: 'app-accounting-screen',
  templateUrl: './accounting-screen.component.html',
  styleUrls: ['./accounting-screen.component.css']
})
export class AccountingScreenComponent implements OnInit {
  // FormGroup
  accountScreenForm: FormGroup;
  // Date
  maxDate = new Date();
  todayDate = new Date();
  // FormControl
  bankCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  // List
  bank_list: ListValue[] = [{
    value: '1', viewValue: ' State Bank Of India',
  },
  {
    value: '2', viewValue: 'Bank Of Baroda',
  }
    ,
  {
    value: '2', viewValue: 'HDFC Bank',
  }
  ];
  type_list: ListValue[] = [{
    value: '1', viewValue: ' RAT Clear',
  },
  {
    value: '2', viewValue: 'MOE Resolution',
  }
  ];
  account_list: ListValue[] = [{
    value: '1', viewValue: ' Yes',
  },
  {
    value: '2', viewValue: 'No',
  }
  ];
  // Data Source Table
  gstRows = new BehaviorSubject(['noData']);
  agstRows = new BehaviorSubject(['noData']);
  reconcileRows = new BehaviorSubject(['noData']);
  asdataSource = new MatTableDataSource<any>(ELEMENT_DATAAS);
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  gstdataSource = new MatTableDataSource<any>(ELEMENT_DATAGST);
  newdisplayedColumns: string[] = ['cin', 'govCreditDate', 'amount', 'scrollDate', 'scrollNo'];
  gstnewdisplayedColumns: string[] = ['gstin', 'partyName', 'cin', 'paymentDate',
    'sgsttac', 'sgstInterest', 'sgstFees', 'sgstOthers', 'sgstPenalty', 'sgstTotal'];
  agstnewdisplayedColumns: string[] = ['matched', 'moeId', 'moeType', 'moeStatus'];

  showTotalRow = false;
  reconcileSource = new MatTableDataSource<any>(ELEMENT_DATAR);
  // reconciledisplayedColumns: string[] = ['majorHead', 'subMajorHead', 'minorHead', 'subhead', 'detailHead',
  //   'amount', 'majorHead1', 'subMajorHead1', 'minorHead1', 'subhead1', 'detailHead1',
  //   'amount1'];
  reconciledisplayedColumns: string[] = ['majorHead', 'subMajorHead', 'minorHead', 'subhead', 'detailHead', 'description',
    'amount', 'majorHead1', 'subMajorHead1', 'minorHead1', 'subhead1', 'detailHead1', 'description1', 'amount1'];
  reconShow = false;
  total1 = '';
  total2 = '';
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  directiveObject = new EPaoDirectives(this.router, this.dialog);
  public errorMessages;
  ngOnInit() {
    this.errorMessages = EPOAMessage;
    this.accountScreenData();

  }
  accountScreenData() {
    this.accountScreenForm = this.fb.group({
      fromDate: [''],
      toDate: [''],
      babk: [''],
      type: [''],
      acountCtrl: ['1']
    });
  }
  // navigation
  navigate() {
    this.router.navigate(['./e-pao/account-screen-listing']);
  }
  reconcile() {
    this.reconShow = true;
    this.showTotalRow = true;
    this.gstRows.next(this.gstnewdisplayedColumns);
    this.agstRows.next(this.agstnewdisplayedColumns);
    this.reconcileRows.next(this.reconciledisplayedColumns);
    this.total1 = '10,000.00';
    this.total2 = '10,000.00';
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { pdplaMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ListValue } from 'src/app/model/pdpla';
import { PdplaDirectives } from 'src/app/common/directive/pdpla';

@Component({
  selector: 'app-account-closing-request-dat',
  templateUrl: './account-closing-request-dat.component.html',
  styleUrls: ['./account-closing-request-dat.component.css']
})
export class AccountClosingRequestDatComponent implements OnInit {
  // Date
  todayDate = Date.now();
  // Variable
  selectedIndex: number;
  purpose = 'Purpose of opening PLA';
  pdplaform: FormGroup;
  initiatiomdate = new Date();
  errorMessages = pdplaMessage;

  subMajorCtrl: FormControl = new FormControl();
  pdplaType_list: ListValue[] = [
    { value: '1', viewValue: 'PD ' },
    { value: '2', viewValue: 'PLA' }
  ];

  pdplaCtrl: FormControl = new FormControl();

  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '8448: Deposits of Local Funds(Bearing Interest)' },
    { value: '2', viewValue: '8342: Deposits of Local Funds(Bearing Interest)' },

  ];

  majorCtrl: FormControl = new FormControl();

  subMajorHead_list: ListValue[] = [
    { value: '1', viewValue: '01' },
    { value: '2', viewValue: '00' },
  ];

  minorHead_list: ListValue[] = [
    {
      value: '1',
      viewValue: '101 : National Mineral Exploration Trust Deposite'
    },
    {
      value: '117 : Defined Contribution Pension Scheme for Government Employees',
      viewValue: '117 : Defined Contribution Pension Scheme for Government Employees'
    },

  ];

  minorHeadCtrl: FormControl = new FormControl();

  subHead_list: ListValue[] = [
    { value: '1', viewValue: '00' },
    { value: '2', viewValue: '01' },
    { value: '3', viewValue: '02' },
  ];

  subHeadCtrl: FormControl = new FormControl();
  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) {

  }

  // Directive of pdpla
  directiveObject = new PdplaDirectives(this.router, this.dialog);

  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];

  attachmentTypeCodeCtrl: FormControl = new FormControl();


  ngOnInit() {
    this.pdplaform = this.fb.group({
      // formfields
      majorHead: ['1'],
      subMajorHead: ['1'],
      minorHead: ['1'],
      subHead: ['2'],
      pdplaType: ['2'],
      purpose: [''],
      pdplaAccNo: [''],
      officeName: [''],
      cardexNo: [''],
      ddoNo: [''],
      closingBalance: [''],
      lastTransactionDate: [''],
      toBalance: ['0.00'],
      agBalance: ['0.00'],
      administrativeBalance: ['0.00'],
      reasonForClosing: [''],
      reconciliationUpToDate: [''],
      unusedChequeHasBeenDestroyed: true,

    });
  }

  // sets value on change of pdpla type
  pdplaTypeChanged(data) {
    if (data.value === '1') {
      this.purpose = 'Purpose of opening PD';
    } else if (data.value === '2') {
      this.purpose = 'Purpose of opening PLA';
    }
  }

  // sets tab index
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
  }

  // routing
  gotoListing() {
    this.router.navigate(['./pdpla/create-account-closing-request-listing-dat']);
  }



}

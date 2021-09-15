import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { pdplaMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ListValue } from 'src/app/model/common-grant';
import { PdplaDirectives } from 'src/app/common/directive/pdpla';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  todayDate = Date.now();
  selectedIndex: number;
  initiatiomdate = new Date();
  pdplaform: FormGroup;
  errorMessages = pdplaMessage;
  purpose = 'Purpose of opening PLA';
  isSelectedSubtreasuryYes = true;

  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }
  directiveObject = new PdplaDirectives(this.router, this.dialog);


  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];

  attachmentTypeCodeCtrl: FormControl = new FormControl();

  subTresury_list: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  subTresuryCtrl: FormControl = new FormControl();

  shareAc_list: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No' },
  ];

  SharedAccountCtrl: FormControl = new FormControl();

  chequbook_list: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No' },
  ];

  chequeCtrl: FormControl = new FormControl();

  subMajorCtrl: FormControl = new FormControl();
  pdplaType_list: ListValue[] = [
    { value: '1', viewValue: 'PD ' },
    { value: '2', viewValue: 'PLA' },
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

  authority_list: ListValue[] = [
    { value: '1', viewValue: 'AG Office' },
    { value: '2', viewValue: 'High Court' },
    { value: '3', viewValue: 'Others' }
  ];
  authorityCtrl: FormControl = new FormControl();
  showOtherAuthority = false;
  treasuryNameCtrl: FormControl = new FormControl();
  treasuryName_list: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office, Gandhinagar' }
  ];
  subTreasuryNameCtrl: FormControl = new FormControl();
  subTreasuryName_list: ListValue[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Dhegam' },
    { value: '2', viewValue: 'Sub Treasury Office, Kalol' },
    { value: '3', viewValue: 'Sub Treasury Office, Mansa' }
  ];
  ngOnInit() {

    this.pdplaform = this.fb.group({
      subTreasuryName: [''],
      treasuryName: ['1'],
      ddoNo: [''],
      officeName: [''],
      sactionOrder: [''],
      refDate: [''],
      cardexNo: [''],
      majorHead: ['1'],
      subMajorHead: ['1'],
      minorHead: ['1'],
      subHead: ['2'],
      pdplaType: ['2'],
      purpose: [''],
      strDate: [''],
      sanOrderDate: [''],
      parntSanOrderDate: [''],
      fdSanOrderDate: [''],
      opinionDate: [''],
      remarks: [''],
      remarks1: [''],
      remarks2: [''],
      remarks3: [''],
      remarks4: [''],
      agSanOrderDate: [''],
      accountEndDate: [''],
      authDate: [''],
      subTresury: ['1'],
      sharedAccount: ['1'],
      chequebook: ['1'],
      authority: ['1'],
      auditAuthority: [''],
      checkOptionOne: true,
      checkOptionTwo: true,
      checkOptionThree: true,
      checkOptionFour: true,
      pdplaAccNo: [''],
      openingBalance: [''],
      bankName: ['State Bank of India'],
      bankAccNo: [''],
      isfcCode: ['SBIN0016051'],
      officeContactNo: [''],
      emailId: ['man-3train-fd@gujarat.gov.in'],
    });
  }

  // set values on change of authority
  authorityChanged(data) {
    if (data.value === '[3]') {
      this.showOtherAuthority = true;
    } else {
      this.showOtherAuthority = false;
    }
  }

  // set values on change of pdpla type
  pdplaTypeChanged(data) {
    if (data.value === '1') {
      this.purpose = 'Purpose of opening PD';
    } else if (data.value === '2') {
      this.purpose = 'Purpose of opening PLA';
    }
  }

  // set teb index
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
  }

  // routing
  gotoListing() {
    this.router.navigate(['./pdpla/create-account-listing']);
  }


  // set value of isSelectedSubtreasuryYes
  showSubTreasuryName(data) {
    if (data === '1') {
      this.isSelectedSubtreasuryYes = true;
    } else if (data === '2') {
      this.isSelectedSubtreasuryYes = false;
    }
  }

}

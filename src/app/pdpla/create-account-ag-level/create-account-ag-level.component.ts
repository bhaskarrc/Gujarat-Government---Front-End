

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { pdplaMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ListValue } from 'src/app/model/pdpla';
import { PdplaDirectives } from 'src/app/common/directive/pdpla';

@Component({
  selector: 'app-create-account-ag-level',
  templateUrl: './create-account-ag-level.component.html',
  styleUrls: ['./create-account-ag-level.component.css']
})
export class CreateAccountAgLevelComponent implements OnInit {
  // Date
  todayDate = Date.now();
  initiatiomdate = new Date();
  // Variable
  selectedIndex: number;
  errorMessages = pdplaMessage;
  purpose = 'Purpose of opening PLA';
  isSelectedSubtreasuryYes = true;
  // Form Group
  agLevelForm: FormGroup;
  // Form Control
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  subTresuryCtrl: FormControl = new FormControl();
  SharedAccountCtrl: FormControl = new FormControl();
  chequeCtrl: FormControl = new FormControl();
  pdplaCtrl: FormControl = new FormControl();
  majorCtrl: FormControl = new FormControl();
  proposalCtrl: FormControl = new FormControl();
  subMajorCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  authorityCtrl: FormControl = new FormControl();
  treasuryNameCtrl: FormControl = new FormControl();
  subTreasuryNameCtrl: FormControl = new FormControl();
  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }
  directiveObject = new PdplaDirectives(this.router, this.dialog);

  // List
  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];



  subTresury_list: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No' },
  ];



  shareAc_list: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No' },
  ];



  chequbook_list: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No' },
  ];



  pdplaType_list: ListValue[] = [
    { value: '1', viewValue: 'PD ' },
    { value: '2', viewValue: 'PLA' }
  ];



  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '8448: Deposits of Local Funds(Bearing Interest)' },
    { value: '2', viewValue: '8342: Deposits of Local Funds(Bearing Interest)' },

  ];



  subMajorHead_list: ListValue[] = [
    { value: '1', viewValue: '01' },
    { value: '2', viewValue: '00' },
  ];



  proposal_list: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
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



  subHead_list: ListValue[] = [
    { value: '1', viewValue: '00' },
    { value: '2', viewValue: '01' },
    { value: '3', viewValue: '02' },
  ];



  authority_list: ListValue[] = [
    { value: '1', viewValue: 'AG Office' },
    { value: '2', viewValue: 'High Court' },
    { value: '3', viewValue: 'Others' }
  ];

  showOtherAuthority = false;

  treasuryName_list: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office, Gandhinagar' }
  ];

  subTreasuryName_list: ListValue[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Dhegam' },
    { value: '2', viewValue: 'Sub Treasury Office, Kalol' },
    { value: '3', viewValue: 'Sub Treasury Office, Mansa' }
  ];
  ngOnInit() {

    this.agLevelForm = this.fb.group({
      // Formfields
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
      sanOrderDate: [''],
      parntSanOrderDate: [''],
      fdSanOrderDate: [''],
      optinDate: [''],
      remarks: [''],
      remarks1: [''],
      remarks2: [''],
      remarks3: [''],
      remarks4: [''],
      agSanOrderDate: [''],
      authority: ['1'],
      otherAuthority: [''],
      subTresury: ['1'],
      SharedAccount: ['1'],
      chaqubook: ['1'],
      pdplaType: ['2'],
      subHead: ['2'],
      checkOptionOne: true,
      checkOptionTwo: true,
      checkOptionThree: true,
      checkOptionFour: true,
      opinionDate: [''],
      fdSanctionOrderDate: [''],
      fdSanctionOrderNo: [''],
      parentDeptOrderSanctionDate: [''],
      parentDeptSanctionOrderNo: [''],
      hodSanctionOrderDate: [''],
      hodSanctionOrderNo: [''],
      officeContactNo: [''],
      emailId: ['man-3train-fd@gujarat.gov.in'],
    });
  }

  authorityChanged(data) {
    if (data.value === '3') {
      this.showOtherAuthority = true;
    } else {
      this.showOtherAuthority = false;
    }
  }

  // sets values when pdpla type is selected
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
    this.router.navigate(['./pdpla/create-account-listing-ag']);
  }

  // shows and hides sub treasury name
  showSubTreasuryName(data) {
    if (data === '1') {
      this.isSelectedSubtreasuryYes = true;
    } else {
      this.isSelectedSubtreasuryYes = false;
    }
  }
}

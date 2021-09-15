import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { pdplaMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/pdpla';
import { PdplaDirectives } from 'src/app/common/directive/pdpla';


@Component({
  selector: 'app-cheque-posting',
  templateUrl: './cheque-posting.component.html',
  styleUrls: ['./cheque-posting.component.css']
})
export class ChequePostingComponent implements OnInit {
  // Date
  today = new Date();
  initiatiomdate = new Date();
  todayDate = Date.now();
  // Form Group
  pdplaform: FormGroup;
  // Variable
  public isSelectedblankmajor = true;
  public isSelectedblankminor = true;
  public isSelectedblankdetail = true;
  isSelectedpdlaAc = false;
  selectedIndex: number;


  errorMessages = pdplaMessage;
  disableChequeNo = true;
  requireAuthorityLetterDate = true;
  hideInternalTc = true;
  isSelectedCash = false;
  constructor(
    private fb: FormBuilder, private router: Router, public dialog: MatDialog) {

  }
  // Directive of pdpla
  directiveObject = new PdplaDirectives(this.router, this.dialog);
  // List
  attachmentTypeCode: ListValue[] = [
    { value: '1', viewValue: 'Supporting Document' },
    { value: '2', viewValue: 'Sanction Order' },
    { value: '3', viewValue: 'Others' }
  ];

  attachmentTypeCodeCtrl: FormControl = new FormControl();

  transition_list: ListValue[] = [
    { value: '1', viewValue: 'Cash' },
    { value: '2', viewValue: 'TC' },
    { value: '3', viewValue: 'Adjustment' }
  ];

  trandCtrl: FormControl = new FormControl();

  inttc_list: ListValue[] = [
    { value: '1', viewValue: 'No' },
    { value: '2', viewValue: 'Yes' },
  ];


  pdpla_list: ListValue[] = [
    { value: '1', viewValue: 'PFD DEO BHUJ' },
    { value: '2', viewValue: 'PFD GDA' },

  ];

  detailHead_list: ListValue[] = [
    { value: '1', viewValue: '00' },
    { value: '2', viewValue: '00' },
  ];

  detailHead1_list: ListValue[] = [
    { value: '1', viewValue: '00' },
    { value: '2', viewValue: '00' },
  ];

  inteTcCtrl: FormControl = new FormControl();

  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '8449 : Other Deposite' },
    { value: '2', viewValue: '8342 : Other Deposite' },
  ];

  majorHead1_list: ListValue[] = [
    { value: '1', viewValue: '8449 : Other Deposite' },
    { value: '2', viewValue: '8342 : Other Deposite' },
  ];


  majorCtrl: FormControl = new FormControl();
  majorCtrl1: FormControl = new FormControl();

  minorHead_list: ListValue[] = [
    {
      value: '1',
      viewValue: '117 : Define Contribution Pension Schem For Government Employee '
    },
    { value: '2', viewValue: '120 : Misilinous Deposite' },

  ];

  minorHead1_list: ListValue[] = [
    {
      value: '1',
      viewValue: '117 : Define Contribution Pension Schem For Government Employee '
    },
    { value: '2', viewValue: '120 : Misilinous Deposite' },

  ];

  minorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl1: FormControl = new FormControl();

  detailHeadCtrl: FormControl = new FormControl();
  detailHeadCtrl1: FormControl = new FormControl();

  cheque_type_list: ListValue[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'CTS2010' },
  ];

  chequeCtrl: FormControl = new FormControl();
  pdplaCtrl: FormControl = new FormControl();

  acshortname_list: ListValue[] = [
    {
      value: '1',
      viewValue: 'Select'
    },

    {
      value: '2',
      viewValue: 'GNR'
    },

  ];

  acshortCtrl: FormControl = new FormControl();


  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
  }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.pdplaform = this.fb.group({
      // formfields
      payDate: [''],
      transType: [''],
      InternalTc: [''],
      autDate: [''],
      pdplaScNO: [''],
      majorHead: [''],
      majorHead1: ['1'],
      minorHead: [''],
      minorHead1: ['1'],
      detailHead: [''],
      detailHead1: ['1'],
      amt: [''],
      acShotName: ['2'],
      chequeType: ['1'],
      chequeNo: [''],
      currentBalance: [''],
      authorityLetterNo: [''],
      department: [''],
      narration: ['']
    });
  }

  // routing
  gotoListing() {
    this.router.navigate(['./pdpla/cheque-posting-listing']);
  }

  // sets value on selection of transaction type
  changeTransactionType(data) {
    if (data === '1') {
      this.isSelectedCash = true;
      this.requireAuthorityLetterDate = true;
      this.hideInternalTc = false;
      this.disableChequeNo = true;
    } else if (data === '2') {
      this.isSelectedCash = false;
      this.requireAuthorityLetterDate = true;
      this.hideInternalTc = true;
      this.disableChequeNo = false;
    } else {
      this.isSelectedCash = false;
      this.requireAuthorityLetterDate = false;
      this.hideInternalTc = true;
      this.disableChequeNo = true;
    }
  }

  // sets value on selection of bill
  selectBill(PDPLAC) {
    if (PDPLAC === '1') {
      this.isSelectedpdlaAc = true;
      this.isSelectedblankmajor = false;
      this.isSelectedblankminor = false;
      this.isSelectedblankdetail = false;
    } else if (PDPLAC === '2') {
      this.isSelectedpdlaAc = false;
      this.isSelectedblankmajor = true;
      this.isSelectedblankminor = true;
      this.isSelectedblankdetail = true;
    }
  }


}

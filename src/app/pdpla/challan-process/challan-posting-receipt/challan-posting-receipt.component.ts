import { ListValue } from './../../../model/common-grant';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { pdplaMessage } from 'src/app/common/error-message/common-message.constants';
import { PdplaDirectives } from 'src/app/common/directive/pdpla';

@Component({
  selector: 'app-challan-posting-receipt',
  templateUrl: './challan-posting-receipt.component.html',
  styleUrls: ['./challan-posting-receipt.component.css']
})
export class ChallanPostingReceiptComponent implements OnInit {
  // Form Group
  pdplaform: FormGroup;
  // Date
  todayDate = Date.now();
  initiatiomdate = new Date();
  // Vaiable
  public isSelectedblankmajor = true;
  public isSelectedblankminor = true;
  public isSelectedblankdetail = true;
  isSelectedpdlaAc = false;
  isSelectedAdjustment = false;
  isSelectedCash = false;
  isSelectedTc = false;
  isInternalTcYes = false;
  selectedIndex: number;

  errorMessages = pdplaMessage;

  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) {

  }
  // Directive of pdpla
  directiveObject = new PdplaDirectives(this.router, this.dialog);

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

  minorHead1_list: any[] = [
    {
      value: '1',
      viewValue: '117 : Define Contribution Pension Schem For Government Employee '
    },
    { value: '2', viewValue: '120 : Misilinous Deposite' },

  ];

  minorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl1: FormControl = new FormControl();

  pdpla_list: ListValue[] = [

    { value: '1', viewValue: 'GSRTC' },
    { value: '2', viewValue: 'PFD GDA' },
    { value: '3', viewValue: 'PFD GDA' },

  ];

  pdplaCtrl: FormControl = new FormControl();

  detailHead_list: ListValue[] = [
    { value: '1', viewValue: '00' },
    { value: '2', viewValue: '00' },
  ];

  detailHead1_list: ListValue[] = [
    { value: '1', viewValue: '00' },
    { value: '2', viewValue: '00' },
  ];

  detailHeadCtrl: FormControl = new FormControl();
  detailHeadCtrl1: FormControl = new FormControl();
  // sets index tab
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
  }

  ngOnInit() {

    this.pdplaform = this.fb.group({
      // formfields
      paymentFromAccNo: [''],
      dOr: [''],
      transType: [''],
      InternalTc: [''],
      autDate: [''],
      pdplaScNO: ['1'],
      majorHead: [''],
      majorHead1: ['1'],
      minorHead: [''],
      minorHead1: ['1'],
      detailHead: [''],
      detailHead1: ['1'],
      amt: [''],
      dateOfReceipt: [''],
      challanNo: [''],
      challanDate: [''],
      totalAmountForDay: [''],
      totalChallanForDay: [''],
      totalAmountForAccount: [''],
      totalChallanForAccount: [''],
      authhorityLetterNo: [''],
      department: [''],
      amt1: [''],
      amtInWords: [''],
      narration: [''],
    });
  }

  // sets value on selection of transaction type
  changeTransactionType(data) {
    if (data === '1') {
      this.isSelectedCash = true;
      this.isSelectedAdjustment = false;
      this.isSelectedTc = false;
    } else if (data === '2') {
      this.isSelectedCash = false;
      this.isSelectedAdjustment = false;
      this.isSelectedTc = true;
    } else {
      this.isSelectedCash = false;
      this.isSelectedAdjustment = true;
      this.isSelectedTc = false;
    }
  }

  // sets value on selection of internal TC
  changeInternalTc(data) {
    if (data === '1') {
      this.isInternalTcYes = false;
    } else {
      this.isInternalTcYes = true;
    }
  }

  // routing
  gotoListing() {
    this.router.navigate(['./pdpla/challan-posting-listing']);
  }
  // sets values on selection of bill
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


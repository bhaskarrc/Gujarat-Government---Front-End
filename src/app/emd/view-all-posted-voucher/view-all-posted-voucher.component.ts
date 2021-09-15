

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-view-all-posted-voucher',
  templateUrl: './view-all-posted-voucher.component.html',
  styleUrls: ['./view-all-posted-voucher.component.css']
})
export class ViewAllPostedVoucherComponent implements OnInit {
  // dates
  initiatiomdate = new Date();
  maxDate = new Date();
  date = new Date();

  // FormGroup
  allPostedVoucherForm: FormGroup;
  // FormControl
  departmentTypeCtrl: FormControl = new FormControl();
  // List values
  departmentType_list: ListValue[] = [
    { value: '1', viewValue: 'Finance Department' },
    { value: '1', viewValue: 'Treasury Department' },
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.allPostedVoucherForm = this.fb.group({
      // FormGroup Fields
      passingDate: ['21/04/2019'],
      type: ['Cheques'],
      code: ['SD'],
      codeDescription: ['Security Deposit'],
      edpcode: ['0000'],
      edpcodeDescription: ['Mh 8009'],
      majorHead: ['8443'],
      majorHeadDecscription: ['Civil Deposits(Not Bearing Interest)'],
      subMajorHead: ['00'],
      subMajorHeadDecscription: [''],
      minorHead: ['103'],
      minorHeadDecscription: ['Security Deposit'],
      subHead: ['00'],
      subHeadDecscription: ['Security Deposit'],
      vNo: ['1'],
      srNo: ['192000001'],
      partyname: [''],
      department: ['1'],
      tokenNo: ['442'],
      tokenDate: ['09/04/2019'],
      chkNo: ['653423'],
      paidDate: ['15/04/2019'],
      amount: ['2000.00'],
      amountInWord: ['Two Thousands Only'],
      challanSrNo: [''],
      party: [''],
      voucherNo: ['58'],
      challanDate: [''],

    });
  }
}

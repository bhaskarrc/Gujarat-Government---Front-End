
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-voucher-posting',
  templateUrl: './voucher-posting.component.html',
  styleUrls: ['./voucher-posting.component.css']
})
export class VoucherPostingComponent implements OnInit {
  // dates
  initiatiomdate = new Date();
  maxDate = new Date();
  date = new Date();
  // FormGroup
  voucherPostingForm: FormGroup;
  // FormControl
  departmentTypeCtrl: FormControl = new FormControl();
  // List values
  departmentType_list: ListValue[] = [
    { value: '1', viewValue: 'Finance Department' },
    { value: '1', viewValue: 'Treasury Department' },
  ];
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.voucherPostingForm = this.fb.group({
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
      partyname: ['Mr. A.B. Mishra'],
      department: ['1'],
      tokenNo: ['442'],
      tokenDate: ['09/04/2019'],
      chkNo: ['1234567890'],
      paidDate: ['15/04/2019'],
      amount: ['2000.00'],
      amountInWord: ['Two Thousands Only'],
      challanSrNo: ['192000001'],
      party: ['Mr. A.B. Mishra'],

    });
  }

}

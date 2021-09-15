import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-emd-received',
  templateUrl: './emd-received.component.html',
  styleUrls: ['./emd-received.component.css']
})
export class EmdReceivedComponent implements OnInit {

  initiatiomdate = new Date();
  // FormGroup
  emdReceivedForm: FormGroup;
  // FormControl
  departmentTypeCtrl: FormControl = new FormControl();
  maxDate = new Date();
  date = new Date().toLocaleDateString();
  // List values
  departmentType_list: ListValue[] = [
    { value: '1', viewValue: 'Finance Department' },
    { value: '1', viewValue: 'Treasury Department' },
  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.emdReceivedForm = this.fb.group({
      subTreasuryLocation: ['District Treasury Office , Bhuj'],
      type: ['Cash'],
      entryDate: [''],
      code: ['TDS'],
      codeDescription: ['Revenue Tenancy Deposits'],
      majorHead: ['8443'],
      majorHeadDecscription: ['Civil Deposits (Non Bearing Interest)'],
      subMajorHead: ['00'],
      subMajorHeadDecscription: [''],
      minorHead: ['101'],
      minorHeadDecscription: ['Revenue Deposit'],
      subHead: ['01'],
      subHeadDecscription: ['Revenue Tenancy Deposit'],
      srNo: ['192000001 '],
      partyname: ['Test 123'],
      amount: ['100.00'],
      amountInWord: ['One Hundred Only'],
      lapseDate: ['01/04/2023'],
      narration: [''],
      department: ['1'],
    });
  }

}

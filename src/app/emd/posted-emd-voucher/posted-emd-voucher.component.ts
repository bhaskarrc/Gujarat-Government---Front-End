
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-posted-emd-voucher',
  templateUrl: './posted-emd-voucher.component.html',
  styleUrls: ['./posted-emd-voucher.component.css']
})
export class PostedEmdVoucherComponent implements OnInit {
  // dates
  initiatiomdate = new Date();
  maxDate = new Date();
  date = new Date();
  isSubmitted = false;
  // FormGroup
  postedEmdVoucherForm: FormGroup;

  // FormControl
  departmentTypeCtrl: FormControl = new FormControl();
  // List values
  departmentType_list: ListValue[] = [
    { value: '1', viewValue: 'Agriculture, Famers welfare and Co-operation Department' },
    { value: '2', viewValue: 'Education Department' },
    { value: '3', viewValue: 'Energy & Petrochemicals Department' },
    { value: '4', viewValue: 'Finance Department' },
    { value: '5', viewValue: 'Food, Civil Supplies & Consumer Affairs Department' },
    { value: '6', viewValue: 'Forest & Environment Department' },
    { value: '7', viewValue: 'General Administration Department' },
    { value: '8', viewValue: 'Gujarat Legislature Secretariat Department' },
    { value: '9', viewValue: 'Health & Family Welfare Department' },
    { value: '10', viewValue: 'Home Department' },
    { value: '11', viewValue: 'Industries & Mines Department' },
    { value: '12', viewValue: 'Information & Broadcasting Department' },
    { value: '13', viewValue: 'Labour & Employment Department' },
    { value: '14', viewValue: 'Legal Department' },
    { value: '15', viewValue: 'Legislative & Parliamentary Affairs Department' },
    { value: '16', viewValue: 'Narmada, Water Resources, Water Supply & Kalpsar Department' },
    { value: '17', viewValue: 'Panchayat, Rural Housing & Rural Development Department' },
    { value: '18', viewValue: 'Ports & Transport Department' },
    { value: '19', viewValue: 'Revenue Department' },
    { value: '20', viewValue: 'Roads & Buildings Department' },
    { value: '21', viewValue: 'Science & Technology Department' },
    { value: '22', viewValue: 'Social Justice & Empowerment Department' },
    { value: '23', viewValue: 'Tribal Development Department' },
    { value: '24', viewValue: 'Sports, Youth & Cultural Activities Department' },
    { value: '25', viewValue: 'Urban Development & Urban Housing Department' },
    { value: '26', viewValue: 'Women & Child Development Department' },
    { value: '27', viewValue: 'Climate Change Department' },

  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.postedEmdVoucherForm = this.fb.group({
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
      brNo: [''],
      tNo: [''],

      billType: [''],
      cardexNo: [''],
      voucherNumber: [''],

      mHead: [''],
      netamount: [''],

    });
  }

}

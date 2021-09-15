import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-submit-accounts-to-ag-office',
  templateUrl: './submit-accounts-to-ag-office.component.html',
  styleUrls: ['./submit-accounts-to-ag-office.component.css']
})
export class SubmitAccountsToAgOfficeComponent implements OnInit {
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  submitAccountsToAgOfficeForm: FormGroup;
  submitAccountInfo = 'Submit Accounts to AG Office';

  typeCtrl: FormControl = new FormControl();

  typeList: ListValue[] = [
    { value: '1', viewValue: 'Receipt' },
    { value: '2', viewValue: 'Payment' },
  ];


  constructor(private fb: FormBuilder) { }

  minDate = new Date();
  maxDate = new Date();

  ngOnInit() {
    this.submitAccountsToAgOfficeForm = this.fb.group({
      fromDate: new Date(),
      toDate: new Date(),
      type: [''],
    });
  }
  submit() {
  }

  close() {
  }

  onlyAlphabet(event: any) {
    const pattern = /^[a-zA-Z]+$/;
    const inputChar = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    let tempstr = event.target.value;
    tempstr += inputChar;
    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }
  }

}

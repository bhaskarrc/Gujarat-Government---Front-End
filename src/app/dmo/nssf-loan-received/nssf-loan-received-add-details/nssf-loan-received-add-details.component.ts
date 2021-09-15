import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { dmoMessage } from './../../../common/error-message/common-message.constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nssf-loan-received-add-details',
  templateUrl: './nssf-loan-received-add-details.component.html',
  styleUrls: ['./nssf-loan-received-add-details.component.css']
})
export class NssfLoanReceivedAddDetailsComponent implements OnInit {
  errorMessages = dmoMessage;

  addDetailsForm: FormGroup;
  maxDate = new Date();
  todayDate = Date.now();


  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.addDetailsForm = this.fb.group({
      sanctionNo: [''],
      sanctionDate: [''],
      loanReceiptDate: [''],
      loanAmount: [''],
      loanTenure: [''],
      moratoriumPeriod: [''],
      rateOfInterest: [''],
      principalInstalmentsInYear: [''],
      principalTotalNoOfInstalments: [''],
      interestInstalmentsInYear: [''],
      interestTotalNoOfInstalments: [''],
    });
  }

  onCancel() {
    this.router.navigate(['./dmo/nssf-loan-received']);
  }
  onSave() {
    this.router.navigate(['./dmo/nssf-loan-received']);
  }


  decimalPoint1(event) {
    event.target.value = parseFloat(event.target.value).toFixed(1);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ppoMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-admin-pension-case-entry',
  templateUrl: './admin-pension-case-entry.component.html',
  styleUrls: ['./admin-pension-case-entry.component.css']
})
export class AdminPensionCaseEntryComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  // variables
  todayDate = new Date();
  adminPensionCaseEntry: FormGroup;
  errorMessages = ppoMessage;

  adminPensionCaseEntryForm() {
    this.adminPensionCaseEntry = this.fb.group({
      ppoNo: [''],
      lastPaidDate: [''],
      lastPaidMonth: [''],
      registrationDate: [''],
      cvpMonthlyAmount: [''],
      bankBranchCode: [''],
      accountNo: [''],
      bank: [''],
      branch: ['']
    });

  }
  ngOnInit() {
    this.adminPensionCaseEntryForm();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { dppfHbaMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-interest-calculation-sheet',
  templateUrl: './interest-calculation-sheet.component.html',
  styleUrls: ['./interest-calculation-sheet.component.css']
})
export class InterestCalculationSheetComponent implements OnInit {
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Form Group
  interestCalculationForm: FormGroup;
  // Variaable
  errorMessages = dppfHbaMessage;
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.interestCalculationForm = this.fb.group({
      name: [''],
      accountNo: [''],
      officeName: [''],
      loanAmount: [''],
      emiStartDate: [''],
      emiLastDate: [''],
      emiNo: [''],
      reducedLoanAmount: [''],
      insuranceNotTaken: [''],
      emiType: [''],
      status: [''],
      recoveredDate: [''],
      interest: [''],
      penaltyInterest: [''],
      additionalForHba: [''],
      totalInterest: ['']
    });
  }

}

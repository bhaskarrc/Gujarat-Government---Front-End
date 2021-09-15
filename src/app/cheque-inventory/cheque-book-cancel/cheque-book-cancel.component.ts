
import { MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ListValue } from 'src/app/model/common-grant';
import { ciMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { ChequeInventoryDirective } from 'src/app/common/directive/cheque-inventory';

@Component({
  selector: 'app-cheque-book-cancel',
  templateUrl: './cheque-book-cancel.component.html',
  styleUrls: ['./cheque-book-cancel.component.css']
})
export class ChequeBookCancelComponent implements OnInit {
  // variables
  chequeBookCancelForm: FormGroup;

  // form controls
  isIssuedCtrl: FormControl = new FormControl();
  chequeBookTypeCtrl: FormControl = new FormControl();
  bankAccountNoCtrl: FormControl = new FormControl();
  ciDirectiveObj = new ChequeInventoryDirective(this.dialog);

  // dates
  todayDate = Date.now();
  maxDate = new Date();
  errorMessages = ciMessage;

  // chequeBookType list
  chequeBookType_list: ListValue[] = [
    { value: '1', viewValue: 'LC' },
    { value: '2', viewValue: 'Deposit' },
    { value: '3', viewValue: 'Treasury' }
  ];

  // isIssued list
  isIssued_list: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  // dropdown data not given
  bankAccountNo_list: ListValue[] = [
    { value: '1', viewValue: '6386' },
    { value: '1', viewValue: '455595419' },
  ];

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.chequeBookCancelForm = this.fb.group({
      isIssued: [''],
      accountNo: [''],
      accountName: [''],
      chequeBookType: [''],
      bankAccountNo: [''],
      startSeries: [''],
      endSeries: [''],
      remark: [''],
    });
  }
  // sets form value
  onEnteringAccountNo() {
    this.chequeBookCancelForm.patchValue({
      accountName: 'O/O  the Executive Engineer',
    });
  }
  // To clear form
  clearForm() {
    this.chequeBookCancelForm.reset();
  }

  // Go to listing page
  gotoListing() {
    this.router.navigate(['./ci/cancel-issued-cheque-book-listing']);

  }
}

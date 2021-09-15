
import { MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ddoMasage } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-cheque-duplicate-dialog-new',
  templateUrl: './cheque-duplicate-dialog-new.component.html',
  styleUrls: ['./cheque-duplicate-dialog-new.component.css']
})
export class ChequeDuplicateDialogNewComponent implements OnInit {

  // Date
  maxDate = new Date();

  // variables
  isOthers = false;
  isSubmitted = false;
  errorMessages = ddoMasage;

  // form group
  chequeDuplicateForm: FormGroup;

  // form controls
  reasonCtrl: FormControl = new FormControl();


  // lists
  reasonList: ListValue[] = [
    { value: '1', viewValue: 'Due to Lost' },
    { value: '2', viewValue: 'Others' },
  ];

  // constructor
  constructor(public dialogRef: MatDialogRef<ChequeDuplicateDialogNewComponent>, private fb: FormBuilder) { }

  ngOnInit() {
    this.chequeDuplicateForm = this.fb.group({
      chequeNo: ['TRY61-286991'],
      favourOfOld: ['TEST C'],
      chequeAmount: ['200.00'],
      chequeDate: [''],
      reason: [''],
      reasonTxtArea: [''],
    });
  }

  // on reason
  onReason(event) {
    if (event.value === '2') {
      this.isOthers = true;
    } else {
      this.isOthers = false;
    }
  }

  // go to dashboard
  goToDashboard(): void {
    this.dialogRef.close('no');
  }

  // on click on subit
  onRename() {
    if (this.chequeDuplicateForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }
}

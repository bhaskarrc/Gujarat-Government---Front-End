import { MatDialogRef } from '@angular/material';
import { paoMessage } from '../../../../common/error-message/common-message.constants';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cheque-duplicate',
  templateUrl: './cheque-duplicate.component.html',
  styleUrls: ['./cheque-duplicate.component.css']
})
export class ChequeDuplicateComponent implements OnInit {
  chequeDuplicateForm: FormGroup;
  reasonCtrl: FormControl = new FormControl();
  isOthers = false;
  isSubmitted = false;
  maxDate = new Date();
  errorMessages = paoMessage;

  reason_list: any[] = [
    { value: '1', viewValue: 'Due to Lost' },
    { value: '2', viewValue: 'Others' },
  ];

  constructor(public dialogRef: MatDialogRef<ChequeDuplicateComponent>, private fb: FormBuilder) { }

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
  onReason(event) {
    console.log(event.value);

    if (event.value === '2') {
      this.isOthers = true;
    } else {
      this.isOthers = false;
    }
  }
  goToDashboard(): void {
    this.dialogRef.close('no');
  }
  onRename() {
    if (this.chequeDuplicateForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }
}

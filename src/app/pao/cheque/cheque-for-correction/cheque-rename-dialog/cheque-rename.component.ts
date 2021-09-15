import { paoMessage } from '../../../../common/error-message/common-message.constants';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cheque-rename',
  templateUrl: './cheque-rename.component.html',
  styleUrls: ['./cheque-rename.component.css']
})
export class ChequeRenameComponent implements OnInit {

  chequeRenameForm: FormGroup;
  typeCtrl: FormControl = new FormControl();
  reasonCtrl: FormControl = new FormControl();
  isOthers = false;
  isSubmitted = false;
  maxDate = new Date();
  errorMessages = paoMessage;

  type_list: any[] = [
    { value: '1', viewValue: 'Party Cheque' },
  ];
  reason_list: any[] = [
    { value: '1', viewValue: 'Due to Spelling Mistake' },
    { value: '2', viewValue: 'Wrongly written' },
    { value: '3', viewValue: 'Other' },
  ];

  constructor(public dialogRef: MatDialogRef<ChequeRenameComponent>, private fb: FormBuilder) { }

  ngOnInit() {
    this.chequeRenameForm = this.fb.group({
      chequeNo: ['TRY61-286991', Validators.required],
      favourOfOld: ['TEST C'],
      chequeAmount: ['200.00'],
      type: ['1'],
      favourOfNew: ['', Validators.required],
      partyAccount: [''],
      address: [''],
      reason: [''],
      reasonTxtArea: ['', Validators.required],
      chequeDate: [''],
    });
  }
  onReason(event) {
    console.log(event.value);

    if (event.value === '3') {
      this.isOthers = true;
    } else {
      this.isOthers = false;
    }
  }
  goToDashboard(): void {
    this.dialogRef.close('no');
  }
  onRename() {
    if (this.chequeRenameForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }

}

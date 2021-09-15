import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ddoMasage } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/common-grant';
@Component({
  selector: 'app-cheque-rename-dialog-new',
  templateUrl: './cheque-rename-dialog-new.component.html',
  styleUrls: ['./cheque-rename-dialog-new.component.css']
})
export class ChequeRenameDialogNewComponent implements OnInit {

  // date
  maxDate = new Date();

  // variables
  isOthers = false;
  isSubmitted = false;
  errorMessages = ddoMasage;

  // Form Group
  chequeRenameForm: FormGroup;

  // Form Control
  typeCtrl: FormControl = new FormControl();
  reasonCtrl: FormControl = new FormControl();

  // lists start
  typeList: ListValue[] = [
    { value: '1', viewValue: 'Party Cheque' },
  ];
  reasonList: ListValue[] = [
    { value: '1', viewValue: 'Due to Spelling Mistake' },
    { value: '2', viewValue: 'Wrongly written' },
    { value: '3', viewValue: 'Other' },
  ];
  // lists end

  // constructor
  constructor(public dialogRef: MatDialogRef<ChequeRenameDialogNewComponent>, private fb: FormBuilder) { }

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

  // on reason
  onReason(event) {
    if (event.value === '3') {
      this.isOthers = true;
    } else {
      this.isOthers = false;
    }
  }

  // go to dashboard
  goToDashboard(): void {
    this.dialogRef.close('no');
  }

  // on click on rename button
  onRename() {
    if (this.chequeRenameForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }

}

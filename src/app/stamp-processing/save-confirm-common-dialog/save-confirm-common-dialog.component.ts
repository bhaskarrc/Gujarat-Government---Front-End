import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-save-confirm-common-dialog',
  templateUrl: './save-confirm-common-dialog.component.html',
  styleUrls: ['./save-confirm-common-dialog.component.css']
})
export class SaveConfirmCommonDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<SaveConfirmCommonDialogComponent>) { }

  ngOnInit() {
  }
  onCancel() {
    this.closeDialog('no');
  }

  onyes() {
    this.closeDialog('yes');
  }

  closeDialog(popup: 'no' | 'yes') {
    this.dialogRef.close(popup);
  }

}

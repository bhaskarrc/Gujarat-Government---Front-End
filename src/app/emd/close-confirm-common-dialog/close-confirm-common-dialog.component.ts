import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-close-confirm-common-dialog',
  templateUrl: './close-confirm-common-dialog.component.html',
  styleUrls: ['./close-confirm-common-dialog.component.css']
})
export class CloseConfirmCommonDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CloseConfirmCommonDialogComponent>) { }

  ngOnInit() {
  }
  // closes dialog box
  onCancel() {
    this.closeDialog('no');
  }
  // closes dialog box
  onyes() {
    this.closeDialog('yes');
  }
  // closes dialog box
  closeDialog(popup: 'yes' | 'no') {
    this.dialogRef.close(popup);
  }


}

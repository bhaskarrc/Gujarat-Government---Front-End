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

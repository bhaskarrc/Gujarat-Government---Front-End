import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-authorize-confirm-common-dialog',
  templateUrl: './authorize-confirm-common-dialog.component.html',
  styleUrls: ['./authorize-confirm-common-dialog.component.css']
})
export class AuthorizeConfirmCommonDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AuthorizeConfirmCommonDialogComponent>) { }

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

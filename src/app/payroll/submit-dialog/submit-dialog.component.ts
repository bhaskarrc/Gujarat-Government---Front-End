import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-submit-dialog',
  templateUrl: './submit-dialog.component.html',
  styleUrls: ['./submit-dialog.component.css']
})
export class SubmitDialogComponent implements OnInit {
  message = '';
  constructor(public dialogRef: MatDialogRef<SubmitDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    if (this.data === '') {
      this.message = 'Record submitted successfully!';
    } else {
      this.message = this.data;
    }
  }
  // On Click of Ok button
  OnClickOk() {
    this.dialogRef.close('Ok');
  }
}

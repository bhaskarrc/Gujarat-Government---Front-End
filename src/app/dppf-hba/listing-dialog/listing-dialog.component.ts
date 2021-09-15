import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-dialog',
  templateUrl: './listing-dialog.component.html',
  styleUrls: ['./listing-dialog.component.css']
})
export class ListingDialogComponent implements OnInit {

  message = '';
  constructor(public dialogRef: MatDialogRef<ListingDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    if (this.data === '') {
      this.message = 'Do you want to save the data ?';
    } else {
      this.message = this.data;
    }
  }

  onClickYes() {
    this.dialogRef.close('Yes');
  }

  onClickNo() {
    this.dialogRef.close('No');
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-info-common-dialog',
  templateUrl: './info-common-dialog.component.html',
  styleUrls: ['./info-common-dialog.component.css']
})
export class InfoCommonDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<InfoCommonDialogComponent>) { }

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

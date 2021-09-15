import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-close-confirm-dialog',
  templateUrl: './close-confirm-dialog.component.html',
  styleUrls: ['./close-confirm-dialog.component.css']
})
export class CloseConfirmDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CloseConfirmDialogComponent>) { }

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

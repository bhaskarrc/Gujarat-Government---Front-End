import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-close-dialog-box',
  templateUrl: './close-dialog-box.component.html',
  styleUrls: ['./close-dialog-box.component.css']
})
export class CloseDialogBoxComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CloseDialogBoxComponent>) { }

  ngOnInit(): void {

  }

  onNo($event?) {
    this.dialogRef.close();
  }
  onYes() {
    this.dialogRef.close();
  }

}

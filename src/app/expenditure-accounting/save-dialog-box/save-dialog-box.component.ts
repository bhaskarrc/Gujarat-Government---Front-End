import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-save-dialog-box',
  templateUrl: './save-dialog-box.component.html',
  styleUrls: ['./save-dialog-box.component.css']
})
export class SaveDialogBoxComponent implements OnInit {
  isYes = false;

  constructor(
    public dialogRef: MatDialogRef<SaveDialogBoxComponent>) { }

  ngOnInit(): void {

  }

  onNo($event?) {
    this.dialogRef.close();
  }
  onYes() {
    this.isYes = !this.isYes;
  }

  onClose() {
    this.dialogRef.close();
  }
}

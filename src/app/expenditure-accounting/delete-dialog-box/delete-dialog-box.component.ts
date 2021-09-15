import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-dialog-box',
  templateUrl: './delete-dialog-box.component.html',
  styleUrls: ['./delete-dialog-box.component.css']
})
export class DeleteDialogBoxComponent implements OnInit {

  isYes = false;
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogBoxComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.isYes = data;
  }

  ngOnInit(): void {

  }

  onNo($event?) {
    this.dialogRef.close({ event: 'close', data: this.isYes });
  }
  onYes() {
    this.dialogRef.close({ event: 'close', data: !this.isYes });
  }

}

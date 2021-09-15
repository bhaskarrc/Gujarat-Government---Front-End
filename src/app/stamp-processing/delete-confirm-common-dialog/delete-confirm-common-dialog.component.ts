import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-delete-confirm-common-dialog',
  templateUrl: './delete-confirm-common-dialog.component.html',
  styleUrls: ['./delete-confirm-common-dialog.component.css']
})
export class DeleteConfirmCommonDialogComponent implements OnInit {

 
  constructor(public dialogRef: MatDialogRef<DeleteConfirmCommonDialogComponent>) { }

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

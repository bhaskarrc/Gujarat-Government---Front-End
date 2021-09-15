import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-submit-prompt-dialog',
  templateUrl: './submit-prompt-dialog.component.html',
  styleUrls: ['./submit-prompt-dialog.component.css']
})
export class SubmitPromptDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<SubmitPromptDialogComponent>) { }

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

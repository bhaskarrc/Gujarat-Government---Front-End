import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from 'src/app/model/standing-charge';

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.css']
})
export class FeedbackDialogComponent implements OnInit {
  feedbackForm: FormGroup;
  feedbackOptionTypeCtrl: FormControl = new FormControl;
  feedbackOption_list: CommonListing[] = [
    { value: 1, viewValue: 'Excellent' },
    { value: 2, viewValue: 'very Good' },
    { value: 3, viewValue: 'Good' },
    { value: 4, viewValue: 'Average' },
    { value: 5, viewValue: 'Poor' },
  ];

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<FeedbackDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.feedbackFormData();
  }

  feedbackFormData() {
    this.feedbackForm = this.fb.group({
      feedbackOption: [''],
      feedbackDescription: ['']
    });
  }
  // closes the dialog box
  onNoClick(): void {
    this.dialogRef.close();
  }
}

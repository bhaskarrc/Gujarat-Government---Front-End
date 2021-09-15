import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SubmitFeedback } from 'src/app/model/submit-feedback';
import { FeedbackDialogComponent } from '../feedback-dialog/feedback-dialog.component';

@Component({
  selector: 'app-submit-feedback',
  templateUrl: './submit-feedback.component.html',
  styleUrls: ['./submit-feedback.component.css']
})
export class SubmitFeedbackComponent implements OnInit {
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  submitFeedback: FormGroup;
  todayDate = new Date();

  feedbackOption_list: CommonListing[] = [
    { value: 1, viewValue: 'Excellent' },
    { value: 2, viewValue: 'very Good' },
    { value: 3, viewValue: 'Good' },
    { value: 4, viewValue: 'Average' },
    { value: 5, viewValue: 'Poor' },
  ];

  feedbackOptionTypeCtrl: FormControl = new FormControl();

  // table data
  Element_Data: SubmitFeedback[] = [
    {
      feedback: 'Good report', remarks: 'needs improvement'
    },
    {
      feedback: 'Average report', remarks: 'needs improvement'
    },
    {
      feedback: 'Poor report', remarks: 'needs improvement'
    },
    {
      feedback: 'very good report', remarks: 'needs improvement'
    },
  ];
  dataSource = new MatTableDataSource<SubmitFeedback>(this.Element_Data);

  displayedColumns: any[] = ['position', 'feedback', 'remarks'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.submitFeedback = this.fb.group({
      registrationNo: '',
      feedbackOption: [''],
      feedback: ''
    });
  }
  searchFeedback() { }
  // clears form
  clearForm() {
    this.submitFeedback.reset();
  }
  // opens feedback dialog
  openDialog() {
    const dialogRef = this.dialog.open(FeedbackDialogComponent, {
      width: '1000px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

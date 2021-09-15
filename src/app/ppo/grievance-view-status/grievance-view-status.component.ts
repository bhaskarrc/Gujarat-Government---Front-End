import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FeedbackDialogComponent } from '../feedback-dialog/feedback-dialog.component';
import { GrievenceData } from 'src/app/model/ppo';

@Component({
  selector: 'app-grievance-view-status',
  templateUrl: './grievance-view-status.component.html',
  styleUrls: ['./grievance-view-status.component.css']
})
export class GrievanceViewStatusComponent implements OnInit {
  // variables
  grievanceViewStatusForm: FormGroup;

  // table data
  grievenceData: GrievenceData[] = [
    {
      registrationNo: '', pensionerName: '', dateOfReceipt: '',
      officerName: '', emailID: '', currentStatus: '', remarks: ''
    }
  ];

  grievenceColumn: string[] = ['registrationNo', 'pensionerName', 'dateOfReceipt', 'officerName', 'emailID', 'currentStatus',
    'remarks', 'action'];

  grievenceDataSource = new MatTableDataSource(this.grievenceData);

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.grievanceViewStatusFormData();
  }

  grievanceViewStatusFormData() {
    this.grievanceViewStatusForm = this.fb.group({
      registrationNo: ['']
    });
  }
  // routing
  sendReminder() {
    this.router.navigate(['/ppo/send-reminder']);
  }
  // routing
  viewReminder() {
    this.router.navigate(['/ppo/view-reminder']);
  }
  // opens feedback dialog
  openFeedbackDialog() {
    const dialogRef = this.dialog.open(FeedbackDialogComponent, {
      width: '1000px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

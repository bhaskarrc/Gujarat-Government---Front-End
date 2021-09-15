import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

const todayDate = new Date();
const HISTORY_DATA: any[] = [
  { userRole: 'Creator', userSortName: 'Shri S M Modi', userCode: 'GAD12345', designation: 'HOD', dateAndTime1: '28-Apr-2020', dateAndTime: `${todayDate.getDate()}/${todayDate.getMonth()}/${todayDate.getFullYear()}`, proposedAmt: 100.00, remark: ''},
  { userRole: 'Verifier', userSortName: 'Shri P J Patel', userCode: 'GAGUJ23231', designation: 'HOD', dateAndTime1: '28-Apr-2020', dateAndTime: `${todayDate.getDate()}/${todayDate.getMonth()}/${todayDate.getFullYear()}`,  proposedAmt: 200.00, remark: 'We may approve.'},
  { userRole: 'Verifier', userSortName: 'Shri S M Jani', userCode: 'GAGUJ23343', designation: 'HOD', dateAndTime1: '28-Apr-2020', dateAndTime: `${todayDate.getDate()}/${todayDate.getMonth()}/${todayDate.getFullYear()}`,  proposedAmt: 170.00, remark: 'We may approve.'},
  { userRole: 'Verifier', userSortName: 'Shri R P Joshi', userCode: 'GAGUJ23232', designation: 'HOD', dateAndTime1: '28-Apr-2020', dateAndTime: `${todayDate.getDate()}/${todayDate.getMonth()}/${todayDate.getFullYear()}`,  proposedAmt: 250.00, remark: ''},
  { userRole: 'Verifier', userSortName: 'Shri P S Patel', userCode: 'GAGUJ23341', designation: 'HOD', dateAndTime1: '28-Apr-2020', dateAndTime: `${todayDate.getDate()}/${todayDate.getMonth()}/${todayDate.getFullYear()}`,  proposedAmt: 300.00, remark: 'We may approve.'},
  { userRole: 'Approver', userSortName: 'Shri M J Soni', userCode: 'GAGUJ34342', designation: 'HOD', dateAndTime1: '28-Apr-2020', dateAndTime: `${todayDate.getDate()}/${todayDate.getMonth()}/${todayDate.getFullYear()}`,  proposedAmt: 300.00, remark: 'Approved.'},
];
@Component({
  selector: 'app-standing-charge-consolidate-history',
  templateUrl: './standing-charge-consolidate-history.component.html',
  styleUrls: ['./standing-charge-consolidate-history.component.css']
})
export class StandingChargeConsolidateHistoryComponent implements OnInit {

 // title: string;
  // message: string;

  historyDataSource = new MatTableDataSource(HISTORY_DATA);
  historyColumns: string[] = [
    'srNo', 'userRole', 'userSortName', 'userCode', 'designation',
     'proposedAmt', 'dateAndTime', 'remark'
  ];

  constructor(public dialogRef: MatDialogRef<StandingChargeConsolidateHistoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {
    // Update view with given values
    // this.title = data.title;
    // this.message = data.message;
  }

  ngOnInit() {
  }

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}

/**
 * Class to represent confirm dialog model.
 *
 * It has been kept here to keep it as part of shared component.
 */
export class ConfirmDialogModel {

  constructor(
    // public title: string, public message: string
  ) {
  }
}

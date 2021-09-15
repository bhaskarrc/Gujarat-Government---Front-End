import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

const todayDate = new Date();
const HISTORY_DATA: any[] = [
{
  officeName: 'Office 1', userRole: 'Creator', userSortName: 'Shri S M Modi', userCode: 'GAD12345',
  designation: 'DDO', dateAndTime: '18-Sep-2019 15:48',
  proposedAmt: 100.00, remark: ''
},
{ officeName: 'Office 1', userRole: 'Verifier', userSortName: 'Shri P J Patel',
userCode: 'GAGUJ23231', designation: 'DDO',
dateAndTime: '18-Sep-2019 15:48',
proposedAmt: 200.00, remark: 'We may approve.'},
{ officeName: 'Office 1', userRole: 'Verifier', userSortName: 'Shri S M Jani',
  userCode: 'GAGUJ23343', designation: 'DDO',
  dateAndTime: '19-Sep-2019 15:48',
  proposedAmt: 170.00, remark: 'We may approve.'},
{ officeName: 'Office 1', userRole: 'Verifier', userSortName: 'Shri R P Joshi',
  userCode: 'GAGUJ23232', designation: 'DDO',
  dateAndTime: '20-Sep-2019 15:48',
  proposedAmt: 250.00, remark: ''},
{ officeName: 'Office 1', userRole: 'Verifier', userSortName: 'Shri P S Patel',
  userCode: 'GAGUJ23341', designation: 'DDO',
  dateAndTime: '18-Sep-2019 15:48',
  proposedAmt: 300.00, remark: 'We may approve.'},
{ officeName: 'Office 1', userRole: 'Approver', userSortName: 'Shri M J Soni',
  userCode: 'GAGUJ34342', designation: 'DDO',
  dateAndTime: '10-Sep-2019 15:48',
  proposedAmt: 300.00, remark: 'Approved.'},
];
@Component({
  selector: 'app-new-item-history',
  templateUrl: './new-item-history.component.html',
  styleUrls: ['./new-item-history.component.css']
})
export class NewItemHistoryComponent implements OnInit {
  // title: string;
  // message: string;

  historyDataSource = new MatTableDataSource(HISTORY_DATA);
  historyColumns: string[] = [
    'srNo', 'officeName', 'userRole', 'userSortName', 'userCode', 'designation',
    'dateAndTime', 'proposedAmt', 'remark'
  ];

  constructor(public dialogRef: MatDialogRef<NewItemHistoryComponent>,
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

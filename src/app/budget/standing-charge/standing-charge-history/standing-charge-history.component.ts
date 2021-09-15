import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

const todayDate = new Date();

const HISTORY_DATA: any[] = [
  { userRole: 'Approver', userSortName: 'Shri S M Modi', userCode: 'GAD12345', designation: 'Secretary', dateAndTime:'20-Oct-2020 11:23:01', proposedAmt: 100.00, remark: '' },
  { userRole: 'Verifier', userSortName: 'Shri P J Patel', userCode: 'GAGUJ23231', designation: 'Joint Secretary', dateAndTime:'19-Oct-2020 12:24:01', proposedAmt: 200.00, remark: 'We may approve.' },
  { userRole: 'Verifier', userSortName: 'Shri S M Jani', userCode: 'GAGUJ23343', designation: 'Deputy Secretary', dateAndTime: '18-Oct-2020 01:25:21', proposedAmt: 170.00, remark: 'We may approve.' },
  { userRole: 'Verifier', userSortName: 'Shri R P Joshi', userCode: 'GAGUJ23232', designation: 'Under Secretary', dateAndTime:'17-Oct-2020 02:52:51', proposedAmt: 250.00, remark: '' },
  { userRole: 'Verifier', userSortName: 'Shri P S Patel', userCode: 'GAGUJ23341', designation: 'Section Officer', dateAndTime:'10-Oct-2020 05:00:31', proposedAmt: 300.00, remark: 'We may approve.' }, 
  { userRole: 'Creator', userSortName: 'Shri M J Soni', userCode: 'GAGUJ34342', designation: 'Deputy Section Officer', dateAndTime:'09-Oct-2020 03:34:01', proposedAmt: 300.00, remark: 'Approved.' },
];
@Component({
  selector: 'app-standing-charge-history',
  templateUrl: './standing-charge-history.component.html',
  styleUrls: ['./standing-charge-history.component.css']
})
export class StandingChargeHistoryComponent implements OnInit {


  historyDataSource = new MatTableDataSource(HISTORY_DATA);
  historyColumns: string[] = [
    'srNo', 'userRole', 'userSortName', 'userCode', 'designation',
    'dateAndTime', 'proposedAmt', 'remark'
  ];

  constructor(public dialogRef: MatDialogRef<StandingChargeHistoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {
      

  }

  ngOnInit() {
  }

  onConfirm(): void {

    this.dialogRef.close(true);
  }

  onDismiss(): void {

    this.dialogRef.close(false);
  }
}


export class ConfirmDialogModel {

  constructor(

  ) {
  }
}

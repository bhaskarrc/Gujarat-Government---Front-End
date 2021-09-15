import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource,MatPaginator } from '@angular/material';
import { Component, OnInit, Inject ,ViewChild} from '@angular/core';

const todayDate = new Date();
const HISTORY_DATA: any[] = [
  {
    userRole: 'Creator', userSortName: 'Shri S M Modi', userCode: 'GAD12345', designation: 'HOD',
    dateAndTime1: '28-Apr-2020 11:30:30', dateAndTime: `${todayDate.getDate()}/${todayDate.getMonth()}/${todayDate.getFullYear()}`,
    proposedAmt: 100.00, remark: ''
  },

  {
    userRole: 'Verifier', userSortName: 'Shri P J Patel', userCode: 'GAGUJ23231', designation: 'HOD',
    dateAndTime1: '28-Apr-2020 11:30:30', dateAndTime: `${todayDate.getDate()}/${todayDate.getMonth()}/${todayDate.getFullYear()}`,
    proposedAmt: 200.00, remark: 'We may approve.'
  },

  {
    userRole: 'Verifier', userSortName: 'Shri S M Jani', userCode: 'GAGUJ23343', designation: 'HOD',
    dateAndTime1: '28-Apr-2020 11:30:30', dateAndTime: `${todayDate.getDate()}/${todayDate.getMonth()}/${todayDate.getFullYear()}`,
    proposedAmt: 170.00, remark: 'We may approve.'
  },

  {
    userRole: 'Verifier', userSortName: 'Shri R P Joshi', userCode: 'GAGUJ23232', designation: 'HOD',
    dateAndTime1: '28-Apr-2020 11:30:30', dateAndTime: `${todayDate.getDate()}/${todayDate.getMonth()}/${todayDate.getFullYear()}`,
    proposedAmt: 250.00, remark: ''
  },

  {
    userRole: 'Verifier', userSortName: 'Shri P S Patel', userCode: 'GAGUJ23341', designation: 'HOD',
    dateAndTime1: '28-Apr-2020 11:30:30', dateAndTime: `${todayDate.getDate()}/${todayDate.getMonth()}/${todayDate.getFullYear()}`,
    proposedAmt: 300.00, remark: 'We may approve.'
  },

  {
    userRole: 'Approver', userSortName: 'Shri M J Soni', userCode: 'GAGUJ34342', designation: 'HOD',
    dateAndTime1: '28-Apr-2020 11:30:30', dateAndTime: `${todayDate.getDate()}/${todayDate.getMonth()}/${todayDate.getFullYear()}`,
    proposedAmt: 300.00, remark: 'Approved.'
  },

];

@Component({
  selector: 'app-history-single-double-popup',
  templateUrl: './history-single-double-popup.component.html',
  styleUrls: ['./history-single-double-popup.component.css']
})
export class HistorySingleDoublePopupComponent implements OnInit {
  historyDataSource = new MatTableDataSource(HISTORY_DATA);
  historyColumns: string[] = [
    'srNo', 'userRole', 'userSortName', 'userCode', 'designation',
    'proposedAmt', 'dateAndTime',
  ];
  private paginator: MatPaginator;
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.historyDataSource.paginator = this.paginator;
  }
  constructor(public dialogRef: MatDialogRef<HistorySingleDoublePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
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

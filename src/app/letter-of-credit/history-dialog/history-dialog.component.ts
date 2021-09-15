import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatPaginator, MatTableDataSource, MAT_DIALOG_DATA } from '@angular/material';

const HISTORY_DATA: any[] = [
  {
    userRole: 'Creator',
    userName: 'Shri S M Modi',
    empNo: 'GAD12345',
    designation: 'HOD',
    dateAndTime: '28-Apr-2020 11:30',
    remarks: '',
    divName: 'Director, Sardar Patel Zological Park, kevadia',
    circleName: 'Dir. Parks & Garden, G. S. Gnr.',
    circleCode: 'SE005',
    agAuthorizationNo: '',
    agAuthorizationDate: '',
    majorHead: '8782 - Cash Remittances and adjustment between Officers',
    subMajorHead: '00',
    minorHead: '102 - Public Works Remittances',
    subHead: '01 - Remittances',
    detailedHead: '00',
    agRemarks: '',
    bankName: 'State Bank of India',
    bankBranch: 'State Bank of India (LIC Road, Godhra)',
    bankCode: '1257',
    bankRemarks: '',
    divisionCode: '',
    divRemarks: '',
  },

  {
    userRole: 'Verifier',
    userName: 'Shri P J Patel',
    empNo: 'GAGUJ23231',
    designation: 'HOD',
    dateAndTime: '28-Apr-2020 11:30',
    remarks: 'We may approve.',
    divName: 'Director, Sardar Patel Zological Park, kevadia',
    circleName: 'Dir. Parks & Garden, G. S. Gnr.',
    circleCode: 'SE005',
    agAuthorizationNo: '',
    agAuthorizationDate: '',
    majorHead: '8782 - Cash Remittances and adjustment between Officers',
    subMajorHead: '00',
    minorHead: '102 - Public Works Remittances',
    subHead: '01 - Remittances',
    detailedHead: '00',
    agRemarks: '',
    bankName: 'State Bank of India',
    bankBranch: 'State Bank of India (LIC Road, Godhra)',
    bankCode: '1257',
    bankRemarks: '',
    divisionCode: '',
    divRemarks: '',
  },

  {
    userRole: 'Verifier',
    userName: 'Shri S M Jani',
    empNo: 'GAGUJ23343',
    designation: 'HOD',
    dateAndTime: '28-Apr-2020 11:30',
    remarks: 'We may approve.',
    divName: 'Director, Sardar Patel Zological Park, kevadia',
    circleName: 'Dir. Parks & Garden, G. S. Gnr.',
    circleCode: 'SE005',
    agAuthorizationNo: '',
    agAuthorizationDate: '',
    majorHead: '8782 - Cash Remittances and adjustment between Officers',
    subMajorHead: '00',
    minorHead: '102 - Public Works Remittances',
    subHead: '01 - Remittances',
    detailedHead: '00',
    agRemarks: '',
    bankName: 'State Bank of India',
    bankBranch: 'State Bank of India (LIC Road, Godhra)',
    bankCode: '1257',
    bankRemarks: '',
    divisionCode: '',
    divRemarks: '',
  },

  {
    userRole: 'Verifier',
    userName: 'Shri R P Joshi',
    empNo: 'GAGUJ23232',
    designation: 'HOD',
    dateAndTime: '28-Apr-2020 11:30',
    remarks: '',
    divName: 'Director, Sardar Patel Zological Park, kevadia',
    circleName: 'Dir. Parks & Garden, G. S. Gnr.',
    circleCode: 'SE005',
    agAuthorizationNo: '',
    agAuthorizationDate: '',
    majorHead: '8782 - Cash Remittances and adjustment between Officers',
    subMajorHead: '00',
    minorHead: '102 - Public Works Remittances',
    subHead: '01 - Remittances',
    detailedHead: '00',
    agRemarks: '',
    bankName: 'State Bank of India',
    bankBranch: 'State Bank of India (LIC Road, Godhra)',
    bankCode: '1257',
    bankRemarks: '',
    divisionCode: '',
    divRemarks: '',
  },

  {
    userRole: 'Verifier',
    userName: 'Shri P S Patel',
    empNo: 'GAGUJ23341',
    designation: 'HOD',
    dateAndTime: '28-Apr-2020 11:30',
    remarks: 'We may approve.',
    divName: 'Director, Sardar Patel Zological Park, kevadia',
    circleName: 'Dir. Parks & Garden, G. S. Gnr.',
    circleCode: 'SE005',
    agAuthorizationNo: '',
    agAuthorizationDate: '',
    majorHead: '8782 - Cash Remittances and adjustment between Officers',
    subMajorHead: '00',
    minorHead: '102 - Public Works Remittances',
    subHead: '01 - Remittances',
    detailedHead: '00',
    agRemarks: '',
    bankName: 'State Bank of India',
    bankBranch: 'State Bank of India (LIC Road, Godhra)',
    bankCode: '1257',
    bankRemarks: '',
    divisionCode: '',
    divRemarks: '',
  },

  {
    userRole: 'Approver',
    userName: 'Shri M J Soni',
    empNo: 'GAGUJ34342',
    designation: 'HOD',
    dateAndTime: '28-Apr-2020 11:30',
    remarks: 'Approved.',
    divName: 'Director, Sardar Patel Zological Park, kevadia',
    circleName: 'Dir. Parks & Garden, G. S. Gnr.',
    circleCode: 'SE005',
    agAuthorizationNo: '',
    agAuthorizationDate: '',
    majorHead: '8782 - Cash Remittances and adjustment between Officers',
    subMajorHead: '00',
    minorHead: '102 - Public Works Remittances',
    subHead: '01 - Remittances',
    detailedHead: '00',
    agRemarks: '',
    bankName: 'State Bank of India',
    bankBranch: 'State Bank of India (LIC Road, Godhra)',
    bankCode: '1257',
    bankRemarks: '',
    divisionCode: '',
    divRemarks: '',
  },
];
@Component({
  selector: 'app-history-dialog',
  templateUrl: './history-dialog.component.html',
  styleUrls: ['./history-dialog.component.css']
})
export class HistoryDialogComponent implements OnInit {
  header = '';
  historyDataSource = new MatTableDataSource(HISTORY_DATA);
  historyColumns: string[] = [];
  private paginator: MatPaginator;
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.historyDataSource.paginator = this.paginator;
  }
  constructor(public dialogRef: MatDialogRef<HistoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    if (this.data === 'forLCAccountOpeningRequest') {
      this.historyColumns = [
        'srNo',
        'empNo',
        'userName',
        'userRole',
        'designation',
        'divName',
        'circleName',
        'circleCode',
        'dateAndTime',
        'remarks',
      ];
      this.header = 'LC Account Opening Request';
    } else if (this.data === 'forAGOffice') {
      this.historyColumns = [
        'srNo',
        'empNo',
        'userName',
        'userRole',
        'designation',
        'agAuthorizationNo',
        'agAuthorizationDate',
        'majorHead',
        'subMajorHead',
        'minorHead',
        'subHead',
        'detailedHead',
        'dateAndTime',
        'agRemarks',
      ];
      this.header = 'Details for AG Office';
    } else if (this.data === 'forBankDetails') {
      this.historyColumns = [
        'srNo',
        'empNo',
        'userName',
        'userRole',
        'designation',
        'bankName',
        'bankBranch',
        'bankCode',
        'dateAndTime',
        'bankRemarks',
      ];
      this.header = 'Bank Details';
    } else if (this.data === 'forDivisionOffice') {
      this.historyColumns = [
        'srNo',
        'empNo',
        'userName',
        'userRole',
        'designation',
        'divisionCode',
        'dateAndTime',
        'divRemarks',
      ];
      this.header = 'Details For Division Office';
    } else {
      this.historyColumns = [
        'srNo',
        'empNo',
        'userName',
        'userRole',
        'designation',
        'divName',
        'circleName',
        'circleCode',
        'dateAndTime',
        'remarks',
      ];
      this.header = 'LC Account Opening Request';
    }
  }


  onClose(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource, MatDialog } from '@angular/material';

import { CloseConfirmDialogComponent } from './close-confirm-dialog/close-confirm-dialog.component';
import { CommonListing } from 'src/app/model/common-listing';
import { DeleteConfirmCommonDialogComponent } from '../../delete-confirm-common-dialog/delete-confirm-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { ElementStIndentList, ElementStIndentTOList } from 'src/app/model/stamp-processing';
import { HistoryDetailsCommonDialogComponent } from '../../history-details-common-dialog/history-details-common-dialog.component';
import { DataService } from 'src/app/common/data.service';

// Listing table Data
const ELEMENT_DATA: ElementStIndentTOList[] = [
  {
    fYear: '2020-2021',
    indType: 'Regular Indent',
    treSubtreOff: 'District Treasury Office, Gandhinagar',
    iNumber: '51/00057/072019/23',
    iDuration: '6-Apr-2020 to 7-Apr-2020',
    refNo: '',
    recFromOn: '-',
    sentToON: '-',
    lyingWith: '',
    wStatus: '-',
    status: 'Draft'
  },
  {
    fYear: '2020-2021',
    indType: 'Regular Indent',
    treSubtreOff: 'District Treasury Office, Gandhinagar',
    iNumber: '51/00057/072019/23',
    iDuration: '6-Apr-2020 to 7-Apr-2020',
    refNo: '19-20/STM/SIP/004',
    recFromOn: 'Rajesh 10-Feb-2020 10:30',
    sentToON: 'Rajesh 10-Feb-2020 10:30',
    lyingWith: 'Mr. S G Yadav',
    wStatus: 'Forwarded to Verifier',
    status: 'Pending'
  },
  {
    fYear: '2020-2021',
    indType: 'Regular Indent',
    treSubtreOff: 'District Treasury Office, Gandhinagar',
    iNumber: '51/00057/072019/23',
    iDuration: '6-Apr-2020 to 7-Apr-2020',
    refNo: '19-20/STM/SIP/010',
    recFromOn: 'Rajesh 10-Feb-2020 10:30',
    sentToON: 'Rajesh 10-Feb-2020 10:30',
    lyingWith: 'Mr. S G Yadav',
    wStatus: 'Approved by Approver',
    status: 'Approved'
  },
  {
    fYear: '2020-2021',
    indType: 'Regular Indent',
    treSubtreOff: 'Sub Treasury Office, Kalol',
    iNumber: '51/00057/072019/23',
    iDuration: '6-Apr-2020 to 7-Apr-2020',
    refNo: '19-20/STM/SIP/012',
    recFromOn: 'Rajesh 10-Feb-2020 10:30',
    sentToON: 'Rajesh 10-Feb-2020 10:30',
    lyingWith: 'Mr. S G Yadav',
    wStatus: 'Cancelled',
    status: 'Cancelled'
  },
  {
    fYear: '2020-2021',
    indType: 'Mid-term Indent',
    treSubtreOff: 'Sub Treasury Office, Dehgam',
    iNumber: '51/00057/072019/23',
    iDuration: '-',
    refNo: '19-20/STM/SIP/014',
    recFromOn: 'Rajesh 10-Feb-2020 10:30',
    sentToON: 'Rajesh 10-Feb-2020 10:30',
    lyingWith: 'Mr. S G Yadav',
    wStatus: 'Rejected by Approver',
    status: 'Rejected'
  },
];

@Component({
  selector: 'app-treasury-indent-preparation-list',
  templateUrl: './treasury-indent-preparation-list.component.html',
  styleUrls: ['./treasury-indent-preparation-list.component.css']
})
export class TreasuryIndentPreparationListComponent implements OnInit {
  // Search Field Details
  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2011-2012' },
    { value: '2', viewValue: '2012-2013' },
    { value: '3', viewValue: '2013-2014' },
    { value: '4', viewValue: '2014-2015' },
    { value: '5', viewValue: '2015-2016' },
    { value: '6', viewValue: '2016-2017' },
    { value: '7', viewValue: '2017-2018' },
    { value: '8', viewValue: '2018-2019' },
    { value: '9', viewValue: '2019-2020' },
    { value: '10', viewValue: '2020-2021' },
  ];
  indType_List: CommonListing[] = [
    { value: '1', viewValue: 'Regular Indent' },
    { value: '2', viewValue: 'Mid-Term Indent' },
  ];
  treSubTre_List: CommonListing[] = [
    { value: '1', viewValue: 'Treasury Office' },
    { value: '2', viewValue: 'Sub Treasury Office' },
  ];
  subTre_List: CommonListing[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Dehgam' },
    { value: '2', viewValue: 'Sub Treasury Office, Kalol' },
    { value: '3', viewValue: 'Sub Treasury Office, Mansa' },
  ];
  status_List: CommonListing[] = [
    { value: '1', viewValue: 'Draft' },
    { value: '2', viewValue: 'Pending' },
    { value: '2', viewValue: 'Approved' },
    { value: '2', viewValue: 'Returned' },
    { value: '2', viewValue: 'Cancelled' },
  ];
  receive_List: CommonListing[] = [
    { value: '1', viewValue: 'Received From' },
    { value: '2', viewValue: 'Sent To' },
  ];
  wStatus_List: CommonListing[] = [
    { value: '1', viewValue: 'Cancelled'},
    { value: '2', viewValue: 'Forwarded to Verifier'},
    { value: '3', viewValue: 'Returned to Creator'},
    { value: '4', viewValue: 'Forwarded to Approver'},
    { value: '5', viewValue: 'Returned to Verifier'},
    { value: '6', viewValue: 'Approved by Approver'},
    { value: '7', viewValue: 'Returned to Creator'},
    { value: '8', viewValue: 'Rejected by Approver'},
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Listing Table
  displayedColumns: string[] = ['position', 'fYear', 'indType', 'treSubtreOff', 'iNumber', 'iDuration',
    'refNo', 'recFromOn', 'sentToON', 'lyingWith', 'wStatus', 'status', 'action'];

  finYearCtrl: FormControl = new FormControl();
  receiveCtrl: FormControl = new FormControl();
  indTypeCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  wStatusCtrl: FormControl = new FormControl();
  treSubTreCtrl: FormControl = new FormControl();
  subTreCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  treasuryIndentFormList: FormGroup;

  temp1Value = 'Treasury Office, Ahmedabad';
  temp2Value = 'Superintendent of Stamps Office, Gandhinagar';
  temp3Value = 'Treasury Office, Gandhinagar';
  date: any = new Date();
  intendDate = '04-Apr-2020';
  intendNumber = '51/00057/072019/23';
  lastIntendDate = '04-Apr-2020';

  stampVal: string;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private dataService: DataService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.treasuryIndentFormList = this.fb.group({
      finYear: [''],
      fromDate: [''],
      toDate: [''],
      refNo: [''],
      fromDateRef: [''],
      toDateRef: [''],
      indNumber: [''],
      indType: [''],
      treSubTre: [''],
      treOff: ['District Treasury Office, Gandhinagar'],
      subTre: [''],
      status: [''],
      receive: [''],
      recFrom: [''],
      wStatus: [''],
      sentTo: [''],
    });
  }

  clearForm() {
    this.treasuryIndentFormList.reset();
  }
  // Delete
  deleteConfirmPopup(index) {
    const dialogRef = this.dialog.open(DeleteConfirmCommonDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.deleteRec(index);
      }
    });
  }
  // History Details Dialog
  showHistoryDialog(): void {

    const dialogRef = this.dialog.open(HistoryDetailsCommonDialogComponent, {
      width: '2700px',
      height: '600px',
      data: 'fromStampIndentPreparationList'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log('The dialog was closed', result);
      } else if (result === 'yes') {
        console.log('The dialog was closed', result);
      }
    });
  }

  deleteRec(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }
  
  onView() {
    this.dataService.setOption('fromStampIndentPreparationView', 'viewMode');
    this.router.navigate(['./stamp-processing/stamp-indent-preparation-view']);
  }

}

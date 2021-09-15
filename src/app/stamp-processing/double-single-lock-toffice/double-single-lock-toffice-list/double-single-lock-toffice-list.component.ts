import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SaveConfirmCommonDialogComponent } from '../../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { DeleteConfirmCommonDialogComponent } from '../../delete-confirm-common-dialog/delete-confirm-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { ElementDoubleSingleList } from 'src/app/model/stamp-processing';


// Listing table Data
const ELEMENT_DATA: ElementDoubleSingleList[] = [
  {
    fYear: '2019-2020',
    modeOfTransfer: 'Manual',
    rNumber: '51/00057/072019/23',
    rDate: '14-Apr-2020',
    vendor: 'B S Patel (000123)',
    recFromOn: 'Rajesh 10-Feb-2020 10:30',
    sentToON: 'Rajesh 10-Feb-2020 10:30',
    lyingWith: 'Mr. S G Yadav',
    wStatus: 'Approved by Approver',
    status: 'Approved',
  },
  {
    fYear: '2019-2020',
    modeOfTransfer: 'Challan',
    rNumber: '51/00057/072019/23',
    rDate: '15-Apr-2020',
    vendor: 'A H Shah (000234)',
    recFromOn: 'Rajesh 10-Feb-2020 10:30',
    sentToON: 'Rajesh 10-Feb-2020 10:30',
    lyingWith: 'Mr. S G Yadav',
    wStatus: 'Forwarded to Verifier',
    status: 'Pending',
  },
  {
    fYear: '2019-2020',
    modeOfTransfer: 'Challan',
    rNumber: '51/00057/072019/23',
    rDate: '14-Apr-2020',
    vendor: 'S G Vania (002245)',
    recFromOn: '-',
    sentToON: '-',
    lyingWith: '',
    wStatus: '-',
    status: 'Draft',
  },
];

@Component({
  selector: 'app-double-single-lock-toffice-list',
  templateUrl: './double-single-lock-toffice-list.component.html',
  styleUrls: ['./double-single-lock-toffice-list.component.css']
})
export class DoubleSingleLockTofficeListComponent implements OnInit {
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
  status_List: CommonListing[] = [
    { value: '1', viewValue: 'Draft' },
    { value: '2', viewValue: 'Pending' },
    { value: '3', viewValue: 'Approved' },
    { value: '4', viewValue: 'Returned' },
    { value: '5', viewValue: 'Cancelled' },
  ];
  vendorName_List: CommonListing[] = [
    { value: '1', viewValue: 'B S Patel (000123)' },
    { value: '2', viewValue: 'A H Shah (000234)' },
    { value: '3', viewValue: 'S G Vania (002245)' },
  ];
  receive_List: CommonListing[] = [
    { value: '1', viewValue: 'Received From' },
    { value: '2', viewValue: 'Sent To' },
  ];
  wStatus_List: CommonListing[] = [
    { value: '1', viewValue: 'Cancelled' },
    { value: '2', viewValue: 'Forwarded to Verifier' },
    { value: '3', viewValue: 'Returned to Creator' },
    { value: '4', viewValue: 'Forwarded to Approver' },
    { value: '5', viewValue: 'Returned to Verifier' },
    { value: '6', viewValue: 'Approved by Approver' },
    { value: '7', viewValue: 'Returned to Creator' },
    { value: '8', viewValue: 'Rejected by Approver' },
  ];
  transferMode_List: CommonListing[] = [
    { value: '1', viewValue: 'Manual' },
    { value: '2', viewValue: 'Challan' },
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Listing Table
  displayedColumns: string[] = ['position', 'fYear', 'modeOfTransfer', 'rNumber', 'rDate',
  'recFromOn', 'sentToON', 'lyingWith', 'wStatus', 'status', 'action'];
  finYearCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  vendorNameCtrl: FormControl = new FormControl();
  receiveCtrl: FormControl = new FormControl();
  wStatusCtrl: FormControl = new FormControl();
  transferModeCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);
  lockListForm: FormGroup;

  temp1Value = '25000';
  temp2Value = 'Treasury Office, Gandhinagar';


  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.lockListForm = this.fb.group({
      finYear: ['10'],
      refNo: [''],
      fromDate: [''],
      toDate: [''],
      transferMode: [''],
      status: [''],
      receive: [''],
      recFrom: [''],
      sentTo: [''],
      wStatus: [''],
      vendorName: [''],
    });
  }

  clearForm() {
    this.lockListForm.reset();
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

  deleteRec(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }
}

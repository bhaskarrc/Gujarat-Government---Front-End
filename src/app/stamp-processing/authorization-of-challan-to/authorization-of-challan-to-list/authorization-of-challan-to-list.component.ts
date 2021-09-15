import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { DeleteConfirmCommonDialogComponent } from '../../delete-confirm-common-dialog/delete-confirm-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { ElementAuthToList } from 'src/app/model/stamp-processing';

// Listing table Data
const ELEMENT_DATA: ElementAuthToList[] = [
  {
    fYear: '2019-2020',
    rNumber: '51/00057/072019/23',
    rDate: '14-Apr-2020',
    cNumber: '51/00057/072019/23',
    cDate: '14-Apr-2020',
    authDate: '14-Apr-2020',
    receivedFromSentTo: 'Rajesh 10-Feb-2020 10:30',
    sentFromSentTo: 'Rajesh 10-Feb-2020 10:30',
    workflowStatus: 'Forwarded to Verifier',
    status: 'Approved',
  },
  {
    fYear: '2019-2020',
    rNumber: '51/00057/072019/23',
    rDate: '15-Apr-2020',
    cNumber: '51/00057/072019/24',
    cDate: '15-Apr-2020',
    authDate: '15-Apr-2020',
    receivedFromSentTo: 'Rajesh 10-Feb-2020 10:30',
    sentFromSentTo: 'Rajesh 10-Feb-2020 10:30',
    workflowStatus: 'Approved by Approver',
    status: 'Pending',
  },
  {
    fYear: '2019-2020',
    rNumber: '51/00057/072019/23',
    rDate: '14-Apr-2020',
    cNumber: '51/00057/072019/25',
    cDate: '14-Apr-2020',
    authDate: '-',
    receivedFromSentTo: '-',
    sentFromSentTo: '-',
    workflowStatus: '-',
    status: 'Draft',
  },
];

@Component({
  selector: 'app-authorization-of-challan-to-list',
  templateUrl: './authorization-of-challan-to-list.component.html',
  styleUrls: ['./authorization-of-challan-to-list.component.css']
})
export class AuthorizationOfChallanToListComponent implements OnInit {
  // Search Parameter Details
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
  challan_List: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23' },
    { value: '2', viewValue: '51/00057/082019/23' },
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

  receive_List: CommonListing[] = [
    { value: '1', viewValue: 'Received From' },
    { value: '2', viewValue: 'Sent To' },
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Listing Table
  displayedColumns: string[] = [
    'position',
    'fYear',
    'rNumber',
    'rDate',
    'cNumber',
    'cDate',
    'authDate',
    'receivedFromSentTo',
    'sentFromSentTo',
    'workflowStatus',
    'status',
    'action'
  ];
  finYearCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  challanCtrl: FormControl = new FormControl();
  receiveCtrl: FormControl = new FormControl();
  workflowStatusCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);
  authForm: FormGroup;

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
    this.authForm = this.fb.group({
      finYear: ['10'],
      fromDate: [''],
      toDate: [''],
      chFromDate: [''],
      chToDate: [''],
      challan: [''],
      status: [''],
      refNo: [''],
      receive: [''],
      recFrom: [''],
      sentTo: [''],
      workflowStatus: [''],
    });
  }

  clearForm() {
    this.authForm.reset();
  }
  // Delete Popup
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

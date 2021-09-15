
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/common-grant';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SaveConfirmCommonDialogComponent } from '../../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { ElementChallanCanList, ElementChallanCanListNew } from 'src/app/model/stamp-processing';
// Listing table Data
const ELEMENT_DATA: ElementChallanCanListNew[] = [
  {
    fYear: '2019-2020',
    refDate: '14-Apr-2019',
    refNo: '51/00057/072019/23',
    cNo: '51/00057/072019/23',
    cdt: '10-Apr-2020',
    cCancelDate: '13-Apr-2020',
    cancelBy: 'Mr. S J Desai',
    recFromOn: 'Rajesh 10-Feb-2020 10:30',
    sentToON: 'Rajesh 10-Feb-2020 10:30',
    lyingWith: 'Mr. S G Yadav',
    wStatus: 'Forwarded to Verifier',
    status: 'Approved',
  },
  {
    fYear: '2019-2020',
    refDate: '14-Apr-2019',

    refNo: '51/00057/072019/23',
    cNo: '51/00057/072019/23',
    cdt: '10-Apr-2020',
    cCancelDate: '13-Apr-2020',
    cancelBy: 'Mr. S J Desai',
    recFromOn: 'Rajesh 10-Feb-2020 10:30',
    sentToON: 'Rajesh 10-Feb-2020 10:30',
    lyingWith: 'Mr. S G Yadav',
    wStatus: 'Approved by Approver',
    status: 'Pending'
  },
  {
    fYear: '2019-2020',
    refDate: '14-Apr-2019',

    refNo: '51/00057/072019/23',
    cNo: '51/00057/072019/23',
    cdt: '10-Apr-2020',
    cCancelDate: '13-Apr-2020',
    cancelBy: 'Mr. S J Desai',
    recFromOn: 'Rajesh 10-Feb-2020 10:30',
    sentToON: 'Rajesh 10-Feb-2020 10:30',
    lyingWith: 'Mr. S G Yadav',
    wStatus: 'Cancelled',
    status: 'Draft'
  },


];

@Component({
  selector: 'app-challan-cancellation-to-list',
  templateUrl: './challan-cancellation-to-list.component.html',
  styleUrls: ['./challan-cancellation-to-list.component.css']
})
export class ChallanCancellationToListComponent implements OnInit {

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

  challan_List: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23' },
    { value: '2', viewValue: '51/00057/072019/34' },
    { value: '1', viewValue: '51/00057/072019/56' },
    { value: '2', viewValue: '51/00057/072019/77' },

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

  status_List: CommonListing[] = [
    { value: '1', viewValue: 'Pending' },
    { value: '2', viewValue: 'Approved' },
    { value: '3', viewValue: 'Returned' },
    { value: '4', viewValue: 'Cancelled' },
    { value: '5', viewValue: 'Draft' },
  ];
  receive_List: CommonListing[] = [
    { value: '1', viewValue: 'Received From' },
    { value: '2', viewValue: 'Sent To' },
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);
  // Listing Table
  displayedColumns: string[] = ['position', 'fYear', 'refNo', 'refDate', 'cNo', 'cdt', 'cCancelDate',
    'receivedFromTo', 'sentFromTo', 'workFlowStatus', 'status',
    'action'];

  finYearCtrl: FormControl = new FormControl();
  challanCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  workflowStatusCtrl: FormControl = new FormControl();
  receiveCtrl: FormControl = new FormControl();
  challanCancellationListForm: FormGroup;
  errorMessages = stampProcessMessage;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.challanCancellationListForm = this.fb.group({
      finYear: ['10'],

      refDate: [''],
      issueToDate: [''],
      cancellationFromDate: [''],
      cancellationToDate: [''],
      cNumber: [''],
      refNo: [''],
      status: [''],
      workflowStatus: [''],
      receive: [''],
      recFrom: [''],
      sentTo: [''],
    });
  }

  clearForm() {
    this.challanCancellationListForm.reset();
  }
  // Delete
  delete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }
}


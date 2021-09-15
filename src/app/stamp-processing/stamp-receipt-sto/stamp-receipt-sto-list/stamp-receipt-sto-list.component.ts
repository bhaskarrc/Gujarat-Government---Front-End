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
import { ElementRecStoList } from 'src/app/model/stamp-processing';

// Listing table data
const ELEMENT_DATA: ElementRecStoList[] = [
  {
    fYear: '2019-2020',
    rNumber: '51/00057/072019/23',
    rDate: '14-Apr-2020',
    receivedFrom: 'Superintendent of Stamps Office, Gandhinagar',
    dateStamp: '15-Apr-2020',
    treasuryOff: 'District Treasury Office, Gandhinagar',
    status: 'Pending',
   },
   {
    fYear: '2019-2020',
    rNumber: '51/00057/072019/23',
    rDate: '15-Apr-2020',
    receivedFrom: 'Sub Treasury Office, Mansa',
    dateStamp: '16-Apr-2020',
    treasuryOff: 'District Treasury Office, Gandhinagar',
    status: 'Issued',
   },
   {
    fYear: '2019-2020',
    rNumber: '51/00057/072019/23',
    rDate: '14-Apr-2020',
    receivedFrom: 'Superintendent of Stamps Office, Gandhinagar',
    dateStamp: '15-Apr-2020',
    treasuryOff: 'District Treasury Office, Gandhinagar',
    status: 'Pending',
   },
];

@Component({
  selector: 'app-stamp-receipt-sto-list',
  templateUrl: './stamp-receipt-sto-list.component.html',
  styleUrls: ['./stamp-receipt-sto-list.component.css']
})
export class StampReceiptStoListComponent implements OnInit {
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

  refNo_List: CommonListing[] = [
  { value: '1', viewValue: '51/00057/072019/23'},
  { value: '2', viewValue: '51/00057/072019/32'},
  { value: '3', viewValue: '51/00057/072019/44'},
  ];
  status_List: CommonListing[] = [
    { value: '1', viewValue: 'Pending'},
    { value: '2', viewValue: 'Issued'},
    ];

    dataSource = new MatTableDataSource(ELEMENT_DATA);
// Listing Table
    displayedColumns: string[] = ['position', 'fYear', 'rNumber', 'rDate', 'receivedFrom', 'dateStamp', 'treasuryOff', 'status', 'action'];
  finYearCtrl: FormControl = new FormControl();
  refNoCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  stampSubReceiptForm: FormGroup;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  treOffVal = 'District Treasury Office, Gandhinagar';


  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.stampSubReceiptForm = this.fb.group({
      finYear: ['10'],
      treOff: [''],
      srFromDate: [''],
      srToDate: [''],
      refNo: [''],
      fromDate: [''],
      toDate: [''],
      challan: [''],
      status: [''],
    });
  }

  clearForm() {
    this.stampSubReceiptForm.reset();
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

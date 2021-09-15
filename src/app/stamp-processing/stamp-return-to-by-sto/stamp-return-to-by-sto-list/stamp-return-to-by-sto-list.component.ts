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
import { ElementReturnToStoList } from 'src/app/model/stamp-processing';

// Listing table Data
const ELEMENT_DATA: ElementReturnToStoList[] = [
  {
    fYear: '2019-2020',
    rNumber: '51/00057/072019/23',
    rDate: '14-Apr-2020',
    stampType: 'Agreement',
    returnDate: '20-Apr-2020',
    returnTo: 'District Treasury Office, Gandhinagar',
    status: 'Approved',
   },
   {
    fYear: '2019-2020',
    rNumber: '51/00057/072019/23',
    rDate: '15-Apr-2020',
    stampType: 'Hundi',
    returnDate: '20-Apr-2020',
    returnTo: 'District Treasury Office, Gandhinagar',
    status: 'Pending',
   },
   {
    fYear: '2019-2020',
    rNumber: '51/00057/072019/23',
    rDate: '14-Apr-2020',
    stampType: 'Insurance',
    returnDate: '20-Apr-2020',
    returnTo: 'District Treasury Office, Gandhinagar',
    status: 'Draft',
   },
];

@Component({
  selector: 'app-stamp-return-to-by-sto-list',
  templateUrl: './stamp-return-to-by-sto-list.component.html',
  styleUrls: ['./stamp-return-to-by-sto-list.component.css']
})
export class StampReturnToByStoListComponent implements OnInit {
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
    { value: '1', viewValue: 'Draft'},
    { value: '2', viewValue: 'Pending'},
    { value: '3', viewValue: 'Approved'},
    { value: '4', viewValue: 'Returned'},
    { value: '5', viewValue: 'Cancelled'},
    ];

      stamp_List: CommonListing[] = [
        { value: '1', viewValue: 'Agency License'},
        { value: '2', viewValue: 'Agreement'},
        { value: '3', viewValue: 'Court Fee La'},
        { value: '4', viewValue: 'Court Fee Paper'},
        { value: '5', viewValue: 'Foreign bill'},
        { value: '6', viewValue: 'Hundi'},
        { value: '7', viewValue: 'Insurance'},
        { value: '8', viewValue: 'Non Judicial Paper'},
        { value: '9', viewValue: 'Notary'},
        { value: '10', viewValue: 'Revenue'},
        { value: '11', viewValue: 'Share transfer'},
        { value: '12', viewValue: 'Special Adhesive'},
        ];

    dataSource = new MatTableDataSource(ELEMENT_DATA);
// Listing Table
    displayedColumns: string[] = ['position', 'fYear', 'rNumber', 'rDate', 'stampType', 'returnDate', 'returnTo', 'status', 'action'];
  finYearCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  stampCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);
  stampReturnToList: FormGroup;

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
    this.stampReturnToList = this.fb.group({
      finYear: ['10'],
      fromDate: [''],
      toDate: [''],
      challan: [''],
      stamp: [''],
      status: [''],
    });
  }

  clearForm() {
    this.stampReturnToList.reset();
  }

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
// Delete
  deleteRec(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource, MatDialog } from '@angular/material';

import { CloseConfirmDialogComponent } from '../treasury-indent-preparation-list/close-confirm-dialog/close-confirm-dialog.component';
import { CommonListing } from 'src/app/model/common-listing';
import { DeleteConfirmCommonDialogComponent } from '../../delete-confirm-common-dialog/delete-confirm-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { ElementStIndentList } from 'src/app/model/stamp-processing';


// Listing table Data
const ELEMENT_DATA: ElementStIndentList[] = [
  {
    fYear: '2019-2020',
    iNumber: '51/00057/072019/23',
    iDuration: '6-Apr-2020 to 7-Apr-2020',
    iFor: 'Treasury Office, Gandhinagar',
    status: 'Approved'
   },
   {
    fYear: '2019-2020',
    iNumber: '51/00057/072019/23',
    iDuration: '6-Apr-2020 to 7-Apr-2020',
    iFor: 'Sub-Treasury Office, Dehgam',
    status: 'Draft'
   },
   {
    fYear: '2019-2020',
    iNumber: '51/00057/072019/23',
    iDuration: '6-Apr-2020 to 7-Apr-2020',
    iFor: 'Sub-Treasury Office, Kalol',
    status: 'Approved'
   },
   {
    fYear: '2019-2020',
    iNumber: '51/00057/072019/23',
    iDuration: '6-Apr-2020 to 7-Apr-2020',
    iFor: 'Sub-Treasury Office, Mansa',
    status: 'Cancelled'
   },
];
@Component({
  selector: 'app-sub-treasury-indent-preparation-list',
  templateUrl: './sub-treasury-indent-preparation-list.component.html',
  styleUrls: ['./sub-treasury-indent-preparation-list.component.css']
})
export class SubTreasuryIndentPreparationListComponent implements OnInit {
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

  indNumber_list: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23' },
  ];

  indentFor_List: CommonListing[] = [
    { value: '1', viewValue: 'Treasury Office'},
    { value: '2', viewValue: 'Sub Treasury Office'},
  ];
  treOff_List: CommonListing[] = [
    { value: '1', viewValue: 'Treasury Office, Gandhinagar'},
  ];
  subTre_List: CommonListing[] = [
    { value: '1', viewValue: 'Dhandhuka'},
    { value: '2', viewValue: 'Dholka'},
    { value: '2', viewValue: 'Sanad'},
    { value: '2', viewValue: 'Viramgam'},
  ];
  stamp_List: CommonListing[] = [
    { value: '1', viewValue: 'Agency License'},
    { value: '2', viewValue: 'Agreement'},
    { value: '3', viewValue: 'Court Fee Label'},
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

    status_List: CommonListing[] = [
      { value: '1', viewValue: 'Draft'},
      { value: '2', viewValue: 'Pending'},
      { value: '2', viewValue: 'Approved'},
      { value: '2', viewValue: 'Returned'},
      { value: '2', viewValue: 'Cancelled'},
    ];

    dataSource = new MatTableDataSource(ELEMENT_DATA);
// Listing Table
    displayedColumns: string[] = ['position', 'fYear', 'iNumber', 'iDuration', 'status', 'action'];

  finYearCtrl: FormControl = new FormControl();
  indNumberCtrl: FormControl = new FormControl();
  indentForCtrl: FormControl = new FormControl();
  treOffCtrl: FormControl = new FormControl();
  subTreOffCtrl: FormControl = new FormControl();
  stampCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
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
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.treasuryIndentFormList = this.fb.group({
      finYear: [''],
      fromDate: [''],
      toDate: [''],
      indNumber: [''],
      indentFor: [''],
      treOff: ['1'],
      subTreOff: [''],
      stamp: [''],
      status: [''],
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

  deleteRec(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }


}

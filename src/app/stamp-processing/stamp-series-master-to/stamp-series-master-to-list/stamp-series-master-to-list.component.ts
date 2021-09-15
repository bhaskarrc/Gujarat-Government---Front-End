
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SaveConfirmCommonDialogComponent } from '../../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { StampSeriesMasterList } from 'src/app/model/stamp-processing';


// Listing table Data
const ELEMENT_DATA: StampSeriesMasterList[] = [
  {
    fYear: '2019-2020',
    stamp: 'Agency License',

  },
  {
    fYear: '2019-2020',
    stamp: 'Agreement',

  },
  {
    fYear: '2019-2020',
    stamp: 'Court Fee Label',

  },
];

@Component({
  selector: 'app-stamp-series-master-to-list',
  templateUrl: './stamp-series-master-to-list.component.html',
  styleUrls: ['./stamp-series-master-to-list.component.css']
})
export class StampSeriesMasterToListComponent implements OnInit {
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
  stamp_List: CommonListing[] = [
    { value: '1', viewValue: 'Agency License' },
    { value: '2', viewValue: 'Agreement' },
    { value: '1', viewValue: 'Court Fee Label' },
    { value: '2', viewValue: 'Court Fee Paper' },
    { value: '1', viewValue: 'Foreign bill' },
    { value: '2', viewValue: 'Hundi' },
    { value: '1', viewValue: 'Insurance' },
    { value: '2', viewValue: 'Non Judicial Paper' },
    { value: '1', viewValue: 'Notary' },
    { value: '2', viewValue: 'Revenue' },
    { value: '1', viewValue: 'Share transfer' },
    { value: '2', viewValue: 'Special Adhesive' },

  ];



  dataSource = new MatTableDataSource(ELEMENT_DATA);
// Listing Table
  displayedColumns: string[] = ['position', 'fYear', 'stamp', 'action'];

  finYearCtrl: FormControl = new FormControl();
  stampCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  stampMasterStoListForm: FormGroup;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog, ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.stampMasterStoListForm = this.fb.group({
      finYear: ['10'],
      troffice: ['District Treasury Office, Ahmedabad'],
      challan: [''],
    });
  }

  clearForm() {
    this.stampMasterStoListForm.reset();
  }

}


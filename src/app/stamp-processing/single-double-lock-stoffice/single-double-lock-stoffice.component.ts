import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { SubmitConfirmCommonDialigComponent } from '../submit-confirm-common-dialig/submit-confirm-common-dialig.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { ElementSingleDoubleSTo } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';

// Listing table data
const ELEMENT_DATA: ElementSingleDoubleSTo[] = [
  {
    denomination: '1',
    availQty: '10',
    authQty: '8',
    qtyTransfer: '0',
    from: 'A-000001',
    to: 'A-000100',
  },
  {
    denomination: '2',
    availQty: '9',
    authQty: '7',
    qtyTransfer: '0',
    from: 'B-000001',
    to: 'B-000100',
  },
  {
    denomination: '5',
    availQty: '11',
    authQty: '10',
    qtyTransfer: '0',
    from: 'C-000001',
    to: 'C-000100',
  },
  {
    denomination: '10',
    availQty: '10',
    authQty: '10',
    qtyTransfer: '0',
    from: 'D-000001',
    to: 'D-000100',
  },
  {
    denomination: '20',
    availQty: '9',
    authQty: '0',
    qtyTransfer: '0',
    from: 'E-000001',
    to: 'E-000100',
  }
];

const ELEMENT_DATA2: ElementSingleDoubleSTo[] = [
  {
    denomination: '1',
    availQty: '10',
    authQty: '8',
    qtyTransfer: '0',
    from: 'A-000001',
    to: 'A-000100',
  },
  {
    denomination: '5',
    availQty: '9',
    authQty: '7',
    qtyTransfer: '0',
    from: 'B-000001',
    to: 'B-000100',
  },
];

@Component({
  selector: 'app-single-double-lock-stoffice',
  templateUrl: './single-double-lock-stoffice.component.html',
  styleUrls: ['./single-double-lock-stoffice.component.css']
})
export class SingleDoubleLockStofficeComponent implements OnInit {
// Entry Field Details
  challan_List: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23'},
    { value: '2', viewValue: '51/00057/082019/23'},
    ];

    dataSource = new MatTableDataSource(ELEMENT_DATA);
    dataSource2 = new MatTableDataSource(ELEMENT_DATA2);
// Entry Table
    displayedColumns: string[] = ['position', 'denomination', 'availQty', 'authQty', 'qtyTransfer', 'from', 'to'];
    challanCtrl: FormControl = new FormControl();
    errorMessages = stampProcessMessage;
    directiveObject = new StampProcessingDirectives(this.router, this.dialog);

    sdlockForm: FormGroup;
  date: any = new Date();
  stofficeVal = 'Kalol Sub Treasury Office';
  venNameVal = 'B S Patel (000123)';
  issueVal = 'Double Lock';
  stampVal: string;

  onAdd = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.sdlockForm = this.fb.group({
      finYear: ['2019-2020', Validators.required],
      stoffice: ['Kalol Sub Treasury Office', Validators.required],
      dateName: ['date | date: "dd-MMM-yyyy"', Validators.required],
      issue: ['Double Lock', Validators.required],
      challan: ['', Validators.required],
      availQty: ['', Validators.required],
      pending: ['', Validators.required],
    });
  }

// Add Button Click
  whenAddClick() {
      this.onAdd = true;
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/single-double-lock-stoffice-list']);
  }

}

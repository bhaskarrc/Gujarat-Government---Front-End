
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
import { ClosingStockUtilityList } from 'src/app/model/stamp-processing';

// Listing table Data
const ELEMENT_DATA: ClosingStockUtilityList[] = [
  {
    fYear: '2019-2020',
    rNumber: '51/00057/072019/23',
    closingDate: '12-May-2019',
    refDateTime: '12-Dec-2020 04:17 PM',

  },
  {
    fYear: '2019-2020',
    rNumber: '51/00057/072019/23',
    closingDate: '12-May-2019',
    refDateTime: '12-Dec-2020 04:17 PM',

  },
  {
    fYear: '2019-2020',
    rNumber: '51/00057/072019/23',
    closingDate: '12-May-2019',
    refDateTime: '12-Dec-2020 04:17 PM',

  },
];

@Component({
  selector: 'app-closing-utility-sto-list',
  templateUrl: './closing-utility-sto-list.component.html',
  styleUrls: ['./closing-utility-sto-list.component.css']
})
export class ClosingUtilityStoListComponent implements OnInit {
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

  dataSource = new MatTableDataSource(ELEMENT_DATA);
// Listing Table
  displayedColumns: string[] = ['position', 'fYear', 'closingDate', 'rNumber', 'refDateTime'];

  finYearCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;


  closingUtilityStoListForm: FormGroup;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);


  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog, ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.closingUtilityStoListForm = this.fb.group({
      finYear: ['10'],
      fromDate: [''],
      toDate: [''],
      stockFromDate: [''],
      stockToDate: [''],
      refNo: ['']
    });
  }

  clearForm() {
    this.closingUtilityStoListForm.reset();
  }


}


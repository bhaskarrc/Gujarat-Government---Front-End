
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
import { PhysicalVerifList } from 'src/app/model/stamp-processing';

// Listing table Data
const ELEMENT_DATA: PhysicalVerifList[] = [
  {
    fYear: '2019-2020',
    toffice: 'Mansa Sub Treasury Office',
    rNumber: '51/00057/072019/23',
    closingDate: '12-May-2019',
    vName: 'Mr.A.B Sharme',
    refDateTime: '12-Dec-2020 04:17 PM',
    desi: 'Account Officer',
    status: 'Draft',
  },
  {
    fYear: '2019-2020',
    toffice: 'Kalol Sub Treasury Office',
    rNumber: '51/00057/072019/23',
    closingDate: '10-May-2020',
    vName: 'Mr.A.B Sharme',
    refDateTime: '12-Dec-2020 04:17 PM',
    desi: 'Account Officer',
    status: 'Pending',
  },
  {
    fYear: '2019-2020',
    toffice: 'Dehgam Sub Treasury Office',
    rNumber: '51/00057/072019/23',
    closingDate: '13-Aug-2020',
    vName: 'Mr.A.B Sharme',
    refDateTime: '12-Dec-2020 04:17 PM',
    desi: 'Account Officer',
    status: 'Submitted'
  },
];

@Component({
  selector: 'app-physical-stock-verification-to-list',
  templateUrl: './physical-stock-verification-to-list.component.html',
  styleUrls: ['./physical-stock-verification-to-list.component.css']
})
export class PhysicalStockVerificationToListComponent implements OnInit {

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
  treasury_List: CommonListing[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Dehgam' },
    { value: '2', viewValue: 'Sub Treasury Office, Kalol' },
    { value: '3', viewValue: 'Sub Treasury Office, Mansa' },
  ];

  toDate_List: CommonListing[] = [
    { value: '1', viewValue: 'Date 1' },
    { value: '2', viewValue: 'Date 1' },
  ];
  status_List: CommonListing[] = [
    { value: '1', viewValue: 'Draft' },
    { value: '2', viewValue: 'Pending' },
    { value: '2', viewValue: 'Submitted' },
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
// Listing Table
  displayedColumns: string[] = ['position', 'fYear', 'toffice', 'closingDate', 'vName',
    'desi', 'status', 'action'];

  finYearCtrl: FormControl = new FormControl();
  trOfficeCtrl: FormControl = new FormControl();
  todateCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);
  errorMessages = stampProcessMessage;
  physicalStockToListForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog, ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.physicalStockToListForm = this.fb.group({
      finYear: ['10'],
      troffice: [''],
      visitFromDate: [''],
      todate: [''],
      status: [''],
    });
  }

  clearForm() {
    this.physicalStockToListForm.reset();
  }
// Delete
  delete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }
}

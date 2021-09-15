import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { VenDiscMasterList } from 'src/app/model/stamp-processing';

// Listing table Data
const ELEMENT_DATA: VenDiscMasterList[] = [
  {
    fYear: '2019-2020',
    vendorType: 'Regular Vendor',
  },
  {
    fYear: '2019-2020',
    vendorType: 'Regular Vendor',
  },
  {
    fYear: '2019-2020',
    vendorType: 'Special Vendor',
  }
];

@Component({
  selector: 'app-vendor-discount-master-list',
  templateUrl: './vendor-discount-master-list.component.html',
  styleUrls: ['./vendor-discount-master-list.component.css']
})
export class VendorDiscountMasterListComponent implements OnInit {
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
  vendorType_list: CommonListing[] = [
    { value: '1', viewValue: 'Regular Vendor' },
    { value: '2', viewValue: 'Special Vendor' },
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Listing Table
  displayedColumns: string[] = ['position', 'fYear', 'vendorType', 'action'];
  finYearCtrl: FormControl = new FormControl();
  vendorTypeCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  vendorDiscForm: FormGroup;

  temp1Value = 'Treasury Office, Ahmedabad';
  date: any = new Date();
  vCode = '123456';

  stampVal: string;
  showSubTre = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.vendorDiscForm = this.fb.group({
      finYear: ['10'],
      vendorType: [''],
    });
  }

  clearForm() {
    this.vendorDiscForm.reset();
  }


}

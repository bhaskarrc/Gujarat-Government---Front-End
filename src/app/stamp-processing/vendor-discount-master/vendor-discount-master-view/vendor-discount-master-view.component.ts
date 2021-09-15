import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { VenDiscMaster } from 'src/app/model/stamp-processing';



const ELEMENT_DATA: VenDiscMaster[] = [
  {
    typeOfVendor: 'Regular Vendor',
    typeOfStamp: 'Agency License',
  },
  {
    typeOfVendor: 'Regular Vendor',
    typeOfStamp: 'Agreement',
  },
  {
    typeOfVendor: 'Regular Vendor',
    typeOfStamp: 'Court Fee Label',
  },
];
@Component({
  selector: 'app-vendor-discount-master-view',
  templateUrl: './vendor-discount-master-view.component.html',
  styleUrls: ['./vendor-discount-master-view.component.css']
})
export class VendorDiscountMasterViewComponent implements OnInit {
  // Entry Field Details
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

  treSub_List: CommonListing[] = [
    { value: '1', viewValue: 'Treasury Office' },
    { value: '2', viewValue: 'Sub Treasury Office' },
  ];
  subTre_List: CommonListing[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Dhandhuka' },
    { value: '2', viewValue: 'Sub Treasury Office, Dholka' },
    { value: '3', viewValue: 'Sub Treasury Office, Sanad' },
    { value: '4', viewValue: 'Sub Treasury Office, Viramgam' },
  ];
  vendor_List: CommonListing[] = [
    { value: '1', viewValue: 'Regular Vendor' },
    { value: '2', viewValue: 'Special Vendor' },
  ];
  stamp_List: CommonListing[] = [
    { value: '1', viewValue: 'Agency License' },
    { value: '2', viewValue: 'Agreement' },
    { value: '3', viewValue: 'Court Fee Label' },
    { value: '4', viewValue: 'Court Fee Paper' },
    { value: '5', viewValue: 'Foreign bill' },
    { value: '6', viewValue: 'Hundi' },
    { value: '7', viewValue: 'Insurance' },
    { value: '8', viewValue: 'Non Judicial Paper' },
    { value: '9', viewValue: 'Notary' },
    { value: '10', viewValue: 'Revenue' },
    { value: '11', viewValue: 'Share transfer' },
    { value: '12', viewValue: 'Special Adhesive' },
  ];

  // Table Data
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns: string[] = ['position', 'typeOfVendor', 'typeOfStamp'];

  finYearCtrl: FormControl = new FormControl();
  treSubCtrl: FormControl = new FormControl();
  subTreOffCtrl: FormControl = new FormControl();
  stampCtrl: FormControl = new FormControl();
  typeOfVendorCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  minDate = new Date();
  vendorDiscForm: FormGroup;

  temp1Value = 'Treasury Office, Ahmedabad';
  date: any = new Date();
  vCode = '123456';
  venName = 'Vendor';

  stampVal: string;
  isTable = false;


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
      effectiveDate: ['14-Apr-2020'],
      typeOfVendor: ['1'],
      stamp: ['1'],
    });
  }


  gotoListing() {
    this.router.navigate(['./stamp-processing/vendor-discount-master-list']);
  }
}

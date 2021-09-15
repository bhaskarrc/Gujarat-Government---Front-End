import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SaveConfirmCommonDialogComponent } from '../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from '../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { ElementVendorMaster } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';

// Listing table Data
const ELEMENT_DATA: ElementVendorMaster[] = [
  { category: 'Agency License', disc: ''},
  { category: 'Agreement', disc: ''},
  { category: 'Court Fee Label', disc: ''},
  { category: 'Court Fee Paper', disc: ''},
  { category: 'Foreign bill', disc: ''},
  { category: 'Hundi', disc: ''},
  { category: 'Insurance', disc: ''},
  { category: 'Non Judicial Paper', disc: ''},
  { category: 'Notary', disc: ''},
  { category: 'Revenue', disc: ''},
  { category: 'Share transfer', disc: ''},
  { category: 'Special Adhesive', disc: ''},
];
@Component({
  selector: 'app-vendor-master',
  templateUrl: './vendor-master.component.html',
  styleUrls: ['./vendor-master.component.css']
})
export class VendorMasterComponent implements OnInit {
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
    { value: '1', viewValue: 'Dhandhuka' },
    { value: '2', viewValue: 'Dholka' },
    { value: '2', viewValue: 'Sanad' },
    { value: '2', viewValue: 'Viramgam' },
  ];

  discount_List: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];
  status_List: CommonListing[] = [
    { value: '1', viewValue: 'Active' },
    { value: '2', viewValue: 'Inactive' },
  ];
  spDisc_List: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];
  venType_List: CommonListing[] = [
    { value: '1', viewValue: 'Special Vendor' },
    { value: '2', viewValue: 'Regular Vendor' },
    { value: '3', viewValue: 'Notary' },
  ];
  denoCode_List: CommonListing[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '20' },
    { value: '3', viewValue: '30' },
    { value: '4', viewValue: '50' },
    { value: '5', viewValue: '60' },
    { value: '6', viewValue: '100' },
    { value: '7', viewValue: '200' },
    { value: '8', viewValue: '500' },
  ];

  attachmentType_list: CommonListing[] = [
    { value: '1', viewValue: 'Vendor License' },
    { value: '2', viewValue: 'Authority Letter' },
  ];

  finYearCtrl: FormControl = new FormControl();
  treSubCtrl: FormControl = new FormControl();
  subTreOffCtrl: FormControl = new FormControl();
  discCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  venTypeCtrl: FormControl = new FormControl();
  spDiscCtrl: FormControl = new FormControl();
  denoCodeCtrl: FormControl = new FormControl();
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Listing Table
  displayedColumns: string[] = ['position', 'category', 'disc'];
  vendorForm: FormGroup;

  date: any = new Date();
  stampVal: string;
  showSubTre = false;
  fileBrowseIndex: number;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private el: ElementRef) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.vendorForm = this.fb.group({
      // finYear: ['10', Validators.required],
      vendorName: ['', Validators.required],
      vendorCode: [{ value: '123456', disabled: true }],
      vendorAddress: ['', Validators.required],
      place: ['', Validators.required],
      contNum: ['', Validators.required],
      email: ['', Validators.required],
      treSub: ['', Validators.required],
      subTreOff: ['', Validators.required],
      discount: ['', Validators.required],
      regNo: ['', Validators.required],
      // denoCode: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      status: ['', Validators.required],
      venType: [''],
      spDisc: [''],
      treasuryOffice: [{ value: 'Treasury Office, Ahmedabad', disabled: true }],
    });
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/vendor-master-list']);
  }
}

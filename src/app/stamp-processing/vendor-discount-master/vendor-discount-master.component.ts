import { forEach } from '@angular/router/src/utils/collection';
import { datasource } from './../../budget/delegation/delegation.component';
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SaveConfirmCommonDialogComponent } from '../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from '../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { VenDiscMaster } from 'src/app/model/stamp-processing';



const ELEMENT_DATA: VenDiscMaster[] = [
  {
    typeOfVendor: '',
    typeOfStamp: '',
  }
];

@Component({
  selector: 'app-vendor-discount-master',
  templateUrl: './vendor-discount-master.component.html',
  styleUrls: ['./vendor-discount-master.component.css']
})
export class VendorDiscountMasterComponent implements OnInit {
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
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

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
      finYear: ['10', Validators.required],
      effectiveDate: ['', Validators.required],
      typeOfVendor: ['', Validators.required],
      stamp: ['', Validators.required],
    });
  }
  // Add button Click
  onAdd() {
    if (this.vendorDiscForm.valid) {
      console.log('ELEMENT_DATA[0].typeOfVendor' + ELEMENT_DATA[0].typeOfVendor);
      console.log(this.vendorDiscForm.controls.typeOfVendor.value);
      console.log(this.vendorDiscForm.controls.stamp.value);

      while (this.dataSource.data.length > 0) {
        this.dataSource.data.pop();
      }

      const stampVal = this.vendorDiscForm.controls.stamp.value;
      const vendorVal = this.vendorDiscForm.controls.typeOfVendor.value;
      let typeOfvender;
      this.vendor_List.forEach(item => {
        if (item.value == '' + vendorVal) { typeOfvender = item.viewValue; }
      });

      const temp_data = this.dataSource.data;
      stampVal.forEach(element => {
        console.log(element);
        console.log(typeOfvender);

        console.log(this.stamp_List.forEach(item => {
          console.log(item.value);
          if (item.value === '' + element) { return item.viewValue; }
        }));

        let stempViewVal;
        this.stamp_List.forEach(item => { if (item.value === '' + element) { stempViewVal = item.viewValue; } });
        temp_data.push({
          typeOfVendor: typeOfvender,
          typeOfStamp: stempViewVal,
        });
      });


      this.dataSource.data = temp_data;
      this.dataSource.data = this.dataSource.data;
      this.isTable = true;
    } else {
      this.isTable = false;
    }
  }


  gotoListing() {
    this.router.navigate(['./stamp-processing/vendor-discount-master-list']);
  }
}

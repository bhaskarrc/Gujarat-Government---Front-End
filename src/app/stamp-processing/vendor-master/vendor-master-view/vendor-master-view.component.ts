import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-vendor-master-view',
  templateUrl: './vendor-master-view.component.html',
  styleUrls: ['./vendor-master-view.component.css']
})
export class VendorMasterViewComponent implements OnInit {

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
    { value: 'e', viewValue: 'Notary' },
  ];
  treSubCtrl: FormControl = new FormControl();
  subTreOffCtrl: FormControl = new FormControl();
  discCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  venTypeCtrl: FormControl = new FormControl();
  spDiscCtrl: FormControl = new FormControl();

  vendorForm: FormGroup;

  date: any = new Date();

  stampVal: string;
  showSubTre = false;
  attachmentObj: any[] = [
    {
      type: 'stamp-view',
      attachmentType: 'Vendor License',
    },
  ];

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.vendorForm = this.fb.group({
      vendorName: [{ value: 'Vendor', disabled: true }],
      vendorCode: [{ value: '', disabled: true }],
      vendorAddress: [{ value: 'Ahmedabad', disabled: true }],
      place: [{ value: 'Ahmedabad', disabled: true }],
      contNum: [{ value: '9568735488', disabled: true }],
      email: [{ value: 'vendor@gmail.com', disabled: true }],
      treSub: [{ value: '1', disabled: true }],
      subTreOff: [{ value: '', disabled: true }],
      discount: [{ value: '1', disabled: true }],
      regNo: [{ value: '12536', disabled: true }],
      fromDate: [{ value: new Date('05-Apr-2020'), disabled: true }],
      toDate: [{ value: new Date('04/20/2020'), disabled: true }],
      status: [{ value: '1', disabled: true }],
      treasuryOffice: [{ value: 'Treasury Office, Ahmedabad', disabled: true }],
      venType: [{ value: '1', disabled: true }],
      spDisc: [{ value: '2', disabled: true }],
    });
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/vendor-master-list']);
  }

}

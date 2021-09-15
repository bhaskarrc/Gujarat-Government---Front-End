import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { ElementVendorMasterList } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';

// Listing table Data
const ELEMENT_DATA: ElementVendorMasterList[] = [
  {
    fYear: '2019-2020',
    treSubTre: 'Treasury Office, Gandhinagar',
    vendor: 'vendor1',
    vendorCode: '001',
    startDate: '14-Apr-2020',
    endDate: '30-Apr-2020',
    disc: 'Yes',
    status: 'Active'
  },
  {
    fYear: '2019-2020',
    treSubTre: 'Sub-Treasury Office, Mansa',
    vendor: 'vendor2',
    vendorCode: '002',
    startDate: '14-Apr-2020',
    endDate: '30-Apr-2020',
    disc: 'Yes',
    status: 'Inactive'
  },
  {
    fYear: '2019-2020',
    treSubTre: 'Sub-Treasury Office, Dehgam',
    vendor: 'vendor3',
    vendorCode: '003',
    startDate: '14-Apr-2020',
    endDate: '30-Apr-2020',
    disc: 'No',
    status: 'Active'
  }
];
@Component({
  selector: 'app-vendor-master-list',
  templateUrl: './vendor-master-list.component.html',
  styleUrls: ['./vendor-master-list.component.css']
})
export class VendorMasterListComponent implements OnInit {
  // Search Field Details

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
  category_List: CommonListing[] = [
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

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Listing Table
  displayedColumns: string[] = ['position', 'treSubTre', 'vendor', 'vendorCode', 'startDate', 'endDate', 'disc', 'status', 'action'];
  treSubCtrl: FormControl = new FormControl();
  subTreOffCtrl: FormControl = new FormControl();
  discCtrl: FormControl = new FormControl();
  categoryCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  vendorForm: FormGroup;

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
    this.vendorForm = this.fb.group({
      vendorName: [''],
      vendorCode: [''],
      treSub: [''],
      subTreOff: [''],
      discount: [''],
      category: [''],
      fromDate: [''],
      toDate: [''],
      status: [''],
      treasuryOffice: [{ value: 'Treasury Office, Ahmedabad', disabled: true }],
    });
  }

  clearForm() {
    this.vendorForm.reset();
  }

}

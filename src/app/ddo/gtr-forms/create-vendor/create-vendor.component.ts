
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { DdoDirective } from 'src/app/common/directive/ddo-directive';
import { CreateVendor } from 'src/app/model/ddo-forms';
import { ListValue } from 'src/app/model/common-grant';


const ELEMENT_DATA: CreateVendor[] = [
  {
    vender: 'Charul Patel',
    partyAddress: 'New ranip, Sector 10, Gandhinagar',
    accountNo: '9426283050005',
    ifscCode: 'ICIC0000165',
    bankBranchName: 'This Bank',
    panNo: 'QWER7895',
    tanNo: 'AAAA99999A',
    rateOfIncomeTax: '10.00',
    mobileNo: '9429283050',
    emailId: 'charul2211@gmail.com ',
    bankFlag: 'Yes',
    bankVerificationDate: '12-Feb-2020',
    chequeType: 'Beneficary',

  }
];

@Component({
  selector: 'app-create-vendor',
  templateUrl: './create-vendor.component.html',
  styleUrls: ['./create-vendor.component.css']
})
export class CreateVendorComponent implements OnInit {

  // variables
  isSearch: Boolean = true;
  public toggleButton = true;
  selectedBankFlag = true;
  filterElementData: CreateVendor[];
  isIfscValid;

  // Date
  maxDate = new Date();

  // form group
  vendorDetailsForm: FormGroup;

  // form control
  billCategoryCtrl: FormControl = new FormControl();
  bankVerificationFlag: FormControl = new FormControl();
  checkTypeNameCtrl: FormControl = new FormControl();

  // error message
  errorMessagePan = 'Please enter valid PAN No. in format Like :  AAAAA1111A';
  errorMessageTan = 'Please enter valid TAN No. in format Like :  AAAA99999A';
  errorMessageIfsc = 'Please enter valid IFSC Code';

  // directive object for mat checkbox
  directiveObj = new CommonDirective(this.router);

  // directive object for workfloe dialog box
  directiveObject = new DdoDirective(this.dialog);

  // table data
  displayedColumns: string[] = [
    'select',
    'vender',
    'partyAddress',
    'accountNo',
    'ifscCode',
    'bankBranchName',
    'panNo',
    'tanNo',
    'rateOfIncomeTax',
    'mobileNo',
    'emailId',
    'bankFlag',
    'bankVerificationDate',
    'chequeType', 'action'
  ];
  dataSource = new MatTableDataSource<CreateVendor>(ELEMENT_DATA);
  // table data end


  @ViewChild(MatSort) sort: MatSort;

  // list start

  chequeTypeList: ListValue[] = [
    { value: '1', viewValue: 'Beneficary' },
    { value: '2', viewValue: 'Contractor' },
    { value: '3', viewValue: 'Grant In Aid' },
    { value: '4', viewValue: 'GST/TDS' },
    { value: '5', viewValue: 'Scholarship' },
    { value: '6', viewValue: 'Service Provider' },
    { value: '7', viewValue: 'Supplier' },
  ];

  bankBranchList: ListValue[] = [
    { value: 'SBIN0016051', viewValue: 'STATE BANK OF INDIA, SECTOR 10B GANDHINAGAR' }
  ];

  bankFlagList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];
  // list end


  // constructor
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit() {
    this.vendorDetailsFormData();
    this.dataSource.sort = this.sort;
  }

  // vendor details form data function
  vendorDetailsFormData() {
    this.vendorDetailsForm = this.fb.group({
      vendorPartyName: [''],
      partyAddress: [''],
      bankAccountNo: [''],
      ifscCode: ['', Validators.pattern(/^([A-Z]){4}([0]){1}([A-Z0-9]){6}?$/)],
      emailId: ['', Validators.email],
      mobileNumber: ['', Validators.maxLength(10)],
      bankBranchName: [''],
      panNumber: ['', Validators.pattern(/^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/)],
      tanNumber: ['', Validators.pattern(/^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/)],
      chequeType: [''],
      bankFlag: ['1'],
      bankVerificationDate: [''],
      bankVerificationFlag: ['1'],
      rateOfIncomeTax: ['']
    });
  }

  // go to dashboard
  goToDashboard() { }

  // on search
  search() {

    this.isSearch = false;
  }

  // reset form
  clearForm() {
    this.vendorDetailsForm.reset();
  }

  // on selection change
  onSelectionChange(sel) {
    if (sel.value === '1') {
      this.selectedBankFlag = true;
    } else {
      this.selectedBankFlag = false;
    }
  }

  // delete details
  deleteDetail(index) { }

  // edit details
  editDetail(index) { }

}

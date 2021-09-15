import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ListValue } from 'src/app/model/common-grant';
import { Router } from '@angular/router';
import { AccountDetailsListingHeadData, AccountDetailsListingInwardScreen } from 'src/app/model/dppf-hba';



@Component({
  selector: 'app-account-details-listing',
  templateUrl: './account-details-listing.component.html',
  styleUrls: ['./account-details-listing.component.css']
})
export class AccountDetailsListingComponent implements OnInit {

  // Formm Group
  inwardDetailFormList: FormGroup;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Form Control
  typeOfEmployeeTypeCtrl: FormControl = new FormControl();
  typeOfEmployeeClassCtrl: FormControl = new FormControl();
  // List
  classTypeOfInward: ListValue[] = [
    { value: '1', viewValue: 'Top Schedule' },
    // { value: '2', viewValue: 'No Due Certificate' },
    { value: '3', viewValue: 'Others' },
    { value: '4', viewValue: 'Cheque / Demand Draft' },
    { value: '5', viewValue: 'Request for Account Generation' },
    { value: '6', viewValue: 'Demand for Interest Conformation Letter' },
    { value: '7', viewValue: 'Demand for NDC' },
    { value: '8', viewValue: 'Demand for refund order' },
    { value: '9', viewValue: 'AGTE Misclassified Entry' },
    { value: '10', viewValue: 'AGTE Clearance Entry(Sent by DPPF)' },
    { value: '11', viewValue: 'Debit/Credit Correction Entry' },
    { value: '12', viewValue: 'AG CA Figure' }

  ];

  classTypeOfDistrict: ListValue[] = [
    { value: '1', viewValue: 'Vadodara ' },
    { value: '2', viewValue: 'Ahmedabad' },
    { value: '3', viewValue: 'Panchmahal' },
    { value: '4', viewValue: 'Mahisagar' },

  ];
  classTypeOfTreasuryPao: ListValue[] = [
    { value: '1', viewValue: '1 ' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },

  ];

  classTypeOfEmployeeType: ListValue[] = [
    { value: '1', viewValue: '1 ' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },

  ];
  classTypeOfEmployeeClass: ListValue[] = [
    { value: '1', viewValue: 'Class IV ' },
    { value: '2', viewValue: 'Daily Wages' },
    { value: '3', viewValue: 'Work Charge' },

  ];
  // Variable
  errorMessage: { INWARD_NUMBER: string; INWARD_DATE: string; };

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }
  selection = new SelectionModel<AccountDetailsListingHeadData>(true, []);
  // Table Source

  Element_Data: AccountDetailsListingInwardScreen[] = [
    {
      srno: '1',
      inwardNo: '12345/05/2020',
      inwardDate: '12-Feb-2020',
      name: 'Pulkit Samrat',
      employeeClass: 'A type',
      employeeType: 'Permanent',
      dob: '12-Feb-1981',
      doj: '13-Feb-2007',
      status: 'Pending',
      lyingWith: 'Saksham Patel ',
    },

    {
      srno: '2',
      inwardNo: '12567/05/2019',
      inwardDate: '12-Feb-2020',
      name: 'Raj Damani',
      employeeClass: 'A type',
      employeeType: 'Contract',
      dob: '12-Feb-1980',
      doj: '13-Feb-2005',
      status: 'Pending',
      lyingWith: 'R.S. Rastogi',
    },

    {
      srno: '3',
      inwardNo: '16349/05/2019',
      inwardDate: '12-Feb-2020',
      name: 'Ashish Nikam',
      employeeClass: 'A type',
      employeeType: 'Permanent',
      dob: '12-Feb-1980',
      doj: '13-Feb-2009',
      status: 'Pending',
      lyingWith: 'Rajiv Rastogi',
    },

    {
      srno: '4',
      inwardNo: '12345/05/2019',
      inwardDate: '12-Feb-2020',
      name: 'Rajesh Razdan',
      employeeClass: 'A type',
      employeeType: 'Permanent',
      dob: '12-Feb-1980',
      doj: '13-Feb-2005',
      status: 'Pending',
      lyingWith: 'R.S. Rastogi',
    },

    {
      srno: '5',
      inwardNo: '12345/05/2020',
      inwardDate: '12-Feb-2020',
      name: 'Rakesh Srivastav',
      employeeClass: 'A type',
      employeeType: 'Contract',
      dob: '12-Feb-1981',
      doj: '13-Feb-2007',
      status: 'Pending',
      lyingWith: 'Saksham Patel ',
    },
  ];

  displayedColumns: any[] = [
    'srno',
    'inwardNo',
    'inwardDate',
    'name',
    'employeeClass',
    'employeeType',
    'dob',
    'doj',
    'status',
    'lyingWith',
    'action',

  ];

  dataSource = new MatTableDataSource<AccountDetailsListingInwardScreen>(this.Element_Data);

  ngOnInit() {
    this.errorMessage = DppfgpfMessage;
    this.inwardDetailFormList = this.fb.group({
      inwardNumber: [''],
      inwardDate: [''],
      name: [''],
      employeeClass: [''],
      employeeType: ['', Validators.required],
      dob: [''],
      doj: [''],
      status: [''],
      lyingWith: [''],
    });
  }

  // to clear form
  clearForm() {
    this.inwardDetailFormList.reset();
  }

  // navigation Route
  navigate() {
    this.router.navigate(['./dppf-hba/account-details-generation']);
  }


}

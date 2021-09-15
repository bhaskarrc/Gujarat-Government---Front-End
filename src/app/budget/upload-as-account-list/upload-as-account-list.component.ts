import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource } from '@angular/material/table';
import { UpAccount } from 'src/app/model/budget';


// Listing table Data
const ELEMENT_DATA: UpAccount[] = [
  { financialYear: '2017-2018', department: 'Agriculture, Farmers Welfare and Co-operation Department',
   bpnCode: '02: Receipt under Consolidated Fund & Transaction under Contingency Fund & Public Accounts, etc.',
    accType: 'Receipt Account', status: 'Submitted'},
  { financialYear: '2017-2018', department: 'Agriculture, Farmers Welfare and Co-operation Department',
   bpnCode: '03:Agriculture, Farmers Welfare and Co-operation Department', accType: 'Expenditure Account', status: 'Submitted'},
  { financialYear: '2017-2018', department: 'Agriculture, Farmers Welfare and Co-operation Department',
   bpnCode: '03:Agriculture, Farmers Welfare and Co-operation Department', accType: 'Expenditure Account', status: 'Submitted'},
];

@Component({
  selector: 'app-upload-as-account-list',
  templateUrl: './upload-as-account-list.component.html',
  styleUrls: ['./upload-as-account-list.component.css']
})
export class UploadAsAccountListComponent implements OnInit {

  uplaodAccountlistForm: FormGroup;

  finYearCtrl: FormControl = new FormControl();
  accountTypeCtrl: FormControl = new FormControl();
  accountTypeCtrl2: FormControl = new FormControl();
  bpnCodeCtrl: FormControl = new FormControl();

  // Search Field Details
  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2017-2018' },
    { value: '2', viewValue: '2018-2019' },
    { value: '3', viewValue: '2019-2020' },
    { value: '4', viewValue: '2020-2021' },
  ];

  accountTypeList: CommonListing[] = [
    { value: '1', viewValue: 'Receipt Account' },
  ];

  accountTypeList2: CommonListing[] = [
    { value: '1', viewValue: 'Expenditure Account'},
  ];

  bpnList: CommonListing[] = [
    {value: '1', viewValue: '02: Receipt under Consolidated Fund & Transaction under Contingency Fund & Public Accounts, etc.'},
    {value: '2', viewValue: '03:Agriculture, Farmers Welfare & Co-Operation Department '},
    {value: '3', viewValue: '04:Education Department'},
    {value: '4', viewValue: '05:Energy and Petro-Chemicals Department'},
    {value: '5', viewValue: '06:Finance Department'},
    {value: '6', viewValue: '07:Food, Civil Supplies and Consumer Affairs Department'},
  ];

  // Listing Table
  displayedColumns = ['srNO', 'financialYear', 'bpnCode', 'accType', 'status', 'action'];

  dataSource = new MatTableDataSource<UpAccount>(ELEMENT_DATA);

  constructor(private fb: FormBuilder, ) { }

  ngOnInit() {
    this.uplaodAccountlistForm = this.fb.group({
      financialYear: ['1'],
      bpnCode: [''],
      accountType: ['1'],
      accountType2: ['1'],
    });
  }
  clearForm() {}
  saveuploadAccount() {}
}

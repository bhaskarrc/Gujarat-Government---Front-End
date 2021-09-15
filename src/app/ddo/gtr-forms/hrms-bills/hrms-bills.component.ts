import { Router } from '@angular/router';
import { CommonListing } from './../../../model/common-listing';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HrmsBills } from './../../../model/hrms-bills';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { DdoDirective } from 'src/app/common/directive/ddo-directive';

@Component({
  selector: 'app-hrms-bills',
  templateUrl: './hrms-bills.component.html',
  styleUrls: ['./hrms-bills.component.css']
})
export class HrmsBillsComponent implements OnInit {

  // variable declaration
  billNetValueToAmt;
  billNetValueFromAmt;
  billGrossAmt;
  billGrossAmtTo;

  // form group
  hrmsBillForm: FormGroup;

  // form control
  billTypeCtrl: FormControl = new FormControl();
  billCategoryCtrl: FormControl = new FormControl();

  // date
  maxDate = new Date();

  // directive object for matcheckbox
  directiveObj = new CommonDirective(this.router);

  // duirective object for workflow
  directiveObject = new DdoDirective(this.dialog);

  // lists
  billTypeList: CommonListing[] = [
    { value: 1, viewValue: 'Abstract Bill for Contingent Changes' },
    { value: 2, viewValue: 'Advance Bill' },
    { value: 3, viewValue: 'Bill for Withdrawal of Final/DAV/Other Gpf (Class - IV)' },
    { value: 4, viewValue: 'Bill for Withdrawal of Final/DAV/Other Gpf (Other than Class - IV)' },
    { value: 5, viewValue: 'Court Fee Refund' },
    { value: 6, viewValue: 'Detailed Bill for Contingent Changes' },
    { value: 7, viewValue: 'G I S Insu & Savings Fund OnOnce Demise' },
    { value: 8, viewValue: 'G I S Savings Fund On Ones Retirement & Resi' },
    { value: 9, viewValue: 'Grant in Aid Bill' },
    { value: 10, viewValue: 'Grant in Aid Local Bodies' },
    { value: 11, viewValue: 'Grant in Aid Others' },
    { value: 12, viewValue: 'Grant in Aid Panchayat' },
    { value: 13, viewValue: 'Group Insu Scheme' },
    { value: 14, viewValue: 'Medical Bill' },
    { value: 15, viewValue: 'Pay Bill' },
    { value: 16, viewValue: 'Refund of Deposit' },
    { value: 17, viewValue: 'Refund of Lapsed Deposit' },
    { value: 18, viewValue: 'Refund of Revenue' },
    { value: 19, viewValue: 'Scholarship/Stipend' },
    { value: 19, viewValue: 'Services Postage Stamp' },
    { value: 19, viewValue: 'Simple Receipt for Online Bill' },
    { value: 19, viewValue: 'T A Bill' },
  ];

  billCategoryList: CommonListing[] = [
    { value: 1, viewValue: 'Nil' },
    { value: 2, viewValue: 'Regular' },
    { value: 3, viewValue: 'Regular/Challan' },
    { value: 4, viewValue: 'TC' },
  ];
  // lists end



  // table data
  displayedColumns: string[] = [
    'checkbox',
    'billControlNo',
    'date',
    'billType',
    'billCategory',
    'majorHead',
    'billGrossValue',
    'billNetValue',
    'ddoNo',
    'ddoName',
    'billStatus',
    'action'
  ];
  elementData: HrmsBills[] = [
    {
      checkbox: false, billControlNo: '441/57/1909/5434', date: '04-Feb-2020', billType: 'Services Postage Stamp', billCategory: 'Regular',
      majorHead: '2054', billNetValue: '7547.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', billStatus: 'Pending for Creation'
    },

    {
      checkbox: false, billControlNo: '441/57/7878/1348', date: '10-Feb-2020', billType: 'Pay Bill', billCategory: 'Regular',
      majorHead: '2054', billNetValue: '1457.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', billStatus: 'Detail Posting Done'
    },

    {
      checkbox: false,
      billControlNo: '441/57/3568/1478', date: '11-Feb-2020', billType: 'Detailed Bill For Contingent Charges', billCategory: 'Nil',
      majorHead: '2054', billNetValue: '514.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', billStatus: 'Pending for Creation'
    },

    {
      checkbox: false,
      billControlNo: '441/57/3658/1214', date: '13-Feb-2020',
      billType: 'Bill For Withdrawal Of Final/Dav/Other Gpf (Other Than Class-Iv)', billCategory: 'Regular',
      majorHead: '8009', billNetValue: '1247.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', billStatus: 'Detail Posting Done'
    },

    {
      checkbox: false,
      billControlNo: '441/57/1247/3568', date: '13-Feb-2020',
      billType: 'Bill For Withdrawal Of Final/Dav/Other Gpf (Other Than Class-Iv)', billCategory: 'Regular',
      majorHead: '8009', billNetValue: '3687.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', billStatus: 'Detail Posting Done'
    },

  ];
  dataSource = new MatTableDataSource<HrmsBills>(this.elementData);
  // table data end

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // constructo
  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }
  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.hrmsBillForm = this.fb.group({
      billRegNo: [''],
      billCreatedFrom: [''],
      billCreatedTo: [''],
      billType: [''],
      billCategory: [''],
      majorHead: [''],
      billNetValueFrom: [''],
      billNetValue: [''],
      ddoNo: [''],
      ddoName: [''],
      billGrossAmtTo: [''],
      billGrossAmt: [''],
      billNetValueTo: [''],
    });
  }

  // reset the form
  clearForm() {
    this.hrmsBillForm.reset();
  }

  // sets value of billNetValueToAmt
  decimalPointTo(data) {
    this.billNetValueToAmt = data;
  }
  // sets value of billNetValueFromAmt
  decimalPointFrom(data) {
    this.billNetValueFromAmt = data;
  }

  // search bill
  searchBill() { }

  // sets value of billGrossAmt
  decimalGross(data) {
    this.billGrossAmt = data;
  }

  // sets value of billGrossAmtTo
  decimalGrossTo(data) {
    this.billGrossAmtTo = data;
  }

}

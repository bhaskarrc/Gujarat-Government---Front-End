import { CommonListing } from './../../../model/common-listing';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PulledBackBills } from './../../../model/pulled-back-bills';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonDirective } from 'src/app/common/directive/validation.directive';

@Component({
  selector: 'app-pulled-back-bills',
  templateUrl: './pulled-back-bills.component.html',
  styleUrls: ['./pulled-back-bills.component.css']
})
export class PulledBackBillsComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router) { }

  // variables declaration
  billNetValueFromAmt;
  billNetValueToAmt;
  billGrossAmt;
  billGrossAmtTo;

  // Date
  maxDate = new Date();

  // form group
  pulledBackBillsForm: FormGroup;

  // form control
  billTypeCtrl: FormControl = new FormControl();
  billCategoryCtrl: FormControl = new FormControl();

  // directive object for matcheckbox
  directiveObj = new CommonDirective(this.router);

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
    'billRegNo',
    'date',
    'billType',
    'billCategory',
    'majorHead',
    'billGrossVal',
    'billNetValue',
    'ddoNo',
    'ddoName',
    'typeOfBill',
    'action'
  ];
  elementData: PulledBackBills[] = [
    {
      checkbox: false, billRegNo: '2447-', date: '04-Feb-2020', billType: 'Services Postage Stamp', billCategory: 'Regular',
      majorHead: '2054', billNetValue: '7547.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', TypeBill: 'Regular Bill'
    },

    {
      checkbox: false, billRegNo: '36-', date: '10-Feb-2020', billType: 'Pay Bill', billCategory: 'Regular',
      majorHead: '2054', billNetValue: '1457.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', TypeBill: 'Regular Bill'
    },

    {
      checkbox: false, billRegNo: '74-', date: '11-Feb-2020', billType: 'Detailed Bill For Contingent Charges', billCategory: 'Nil',
      majorHead: '2054', billNetValue: '514.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', TypeBill: 'Regular Bill'
    },

    {
      checkbox: false, billRegNo: '123-', date: '13-Feb-2020',
      billType: 'Bill For Withdrawal Of Final/Dav/Other Gpf (Other Than Class-Iv)', billCategory: 'Regular',
      majorHead: '8009', billNetValue: '1247.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', TypeBill: 'Regular Bill'
    },

    {
      checkbox: false, billRegNo: '43-', date: '13-Feb-2020',
      billType: 'Bill For Withdrawal Of Final/Dav/Other Gpf (Other Than Class-Iv)', billCategory: 'Regular',
      majorHead: '8009', billNetValue: '3687.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', TypeBill: 'Regular Bill'
    },
  ];
  dataSource = new MatTableDataSource<PulledBackBills>(this.elementData);
  // table data end

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.pulledBackBillsForm = this.fb.group({
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
    this.pulledBackBillsForm.reset();
  }


  // sets billNetValueToAmt equal to data
  decimalPointTo(data) {
    this.billNetValueToAmt = data;
  }

  // sets vslue of billNetValueFromAmt
  decimalPointFrom(data) {
    this.billNetValueFromAmt = data;
  }

  // sets vslue of billGrossAmt
  decimalGross(data) {
    this.billGrossAmt = data;
  }

  // sets vslue of billGrossAmtTo
  decimalGrossTo(data) {
    this.billGrossAmtTo = data;
  }

  // search bill
  searchBill() { }

}

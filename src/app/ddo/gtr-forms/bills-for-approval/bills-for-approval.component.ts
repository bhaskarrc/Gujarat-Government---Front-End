import { CommonListing } from './../../../model/common-listing';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { BillsForApproval } from './../../../model/bills-for-approval';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonDirective } from 'src/app/common/directive/validation.directive';

@Component({
  selector: 'app-bills-for-approval',
  templateUrl: './bills-for-approval.component.html',
  styleUrls: ['./bills-for-approval.component.css']
})
export class BillsForApprovalComponent implements OnInit {

  // variables
  billNetValueToAmt;
  billNetValueFromAmt;
  billGrossAmt;
  billGrossAmtTo;

  // Form group
  billsForApprovalForm: FormGroup;

  // form control
  billTypeCtrl: FormControl = new FormControl();
  billCategoryCtrl: FormControl = new FormControl();
  billStatusCtrl: FormControl = new FormControl();

  // Date
  maxDate = new Date();

  // Directive object
  directiveObj = new CommonDirective(this.router);


  // list start
  billTypelist: CommonListing[] = [
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
  // list end

  // table start
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
    'billStatus',
    'action'
  ];
  elementData: BillsForApproval[] = [
    {
      checkbox: false, billRegNo: '63-', date: '04-Feb-2020', billType: 'Services Postage Stamp', billCategory: 'Regular',
      majorHead: '2054', billNetValue: '2247.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', TypeBill: 'Regular Bill',
      billStatus: 'Pending',
    },

    {
      checkbox: false, billRegNo: '47-', date: '10-Feb-2020', billType: 'Pay Bill', billCategory: 'Regular',
      majorHead: '2054', billNetValue: '15769.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', TypeBill: 'Regular Bill',
      billStatus: 'Pending',
    },

    {
      checkbox: false, billRegNo: '91-', date: '11-Feb-2020', billType: 'Detailed Bill For Contingent Charges', billCategory: 'Regular',
      majorHead: '2054', billNetValue: '1200.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', TypeBill: 'Regular Bill',
      billStatus: 'Pending',
    },

    {
      checkbox: false, billRegNo: '55-', date: '13-Feb-2020',
      billType: 'Bill For Withdrawal Of Final/Dav/Other Gpf (Other Than Class-Iv)', billCategory: 'Regular',
      majorHead: '8009', billNetValue: '551.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ',
      TypeBill: 'Regular Bill',
      billStatus: 'Pending',
    },

    {
      checkbox: false, billRegNo: '123-', date: '13-Feb-2020',
      billType: 'Bill For Withdrawal Of Final/Dav/Other Gpf (Other Than Class-Iv)', billCategory: 'Regular',
      majorHead: '8009', billNetValue: '847.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', TypeBill: 'Regular Bill',
      billStatus: 'Pending',
    },

  ];
  dataSource = new MatTableDataSource<BillsForApproval>(this.elementData);
  // table end

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  // constructor
  constructor(private fb: FormBuilder, private router: Router) { }
  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.billsForApprovalForm = this.fb.group({
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

  // go to saved bill list
  goToSavedBillList() {
    this.router.navigate(['/ddo/saved-bill-list']);
  }

  // reset form
  clearForm() {
    this.billsForApprovalForm.reset();
  }

  // decimal point to
  decimalPointTo(data) {
    this.billNetValueToAmt = data;
  }

  // decimal point from
  decimalPointFrom(data) {
    this.billNetValueFromAmt = data;
  }


  // decimal gross
  decimalGross(data) {
    this.billGrossAmt = data;
  }

  // search bill
  searchBill() { }

  // decimal gross to
  decimalGrossTo(data) {
    this.billGrossAmtTo = data;
  }
}

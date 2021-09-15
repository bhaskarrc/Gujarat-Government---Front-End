import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { CommonListing } from './../../../model/common-listing';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BillsReturnedByVerifier } from 'src/app/model/bills-returned-by-verifier';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { DdoDirective } from 'src/app/common/directive/ddo-directive';

@Component({
  selector: 'app-bills-returned-by-verifier',
  templateUrl: './bills-returned-by-verifier.component.html',
  styleUrls: ['./bills-returned-by-verifier.component.css']
})
export class BillsReturnedByVerifierComponent implements OnInit {

  // directive object for workflow
  directiveObject = new DdoDirective(this.dialog);

  // directive object for matcheckbox
  directiveObj = new CommonDirective(this.router);

  // Date
  maxDate = new Date();

  // variables
  billNetValueToAmt;
  billNetValueFromAmt;
  billGrossAmt;
  billGrossAmtTo;

  // Fprm group
  billForApproalForm: FormGroup;

  // form control
  billTypeCtrl: FormControl = new FormControl();
  billCategoryCtrl: FormControl = new FormControl();
  billStatusCtrl: FormControl = new FormControl();

  // lists start
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


  // table data start
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
  elementData: BillsReturnedByVerifier[] = [
    {
      checkbox: false, billRegNo: '12-', date: '04-Feb-2020', billType: 'Services Postage Stamp', billCategory: 'Regular',
      majorHead: '2054', billNetValue: '20010.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', TypeBill: 'Regular Bill', status: 'Pending'
    },

    {
      checkbox: false, billRegNo: '46-', date: '10-Feb-2020', billType: 'Pay Bill', billCategory: 'Regular',
      majorHead: '2054', billNetValue: '90.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', TypeBill: 'Regular Bill', status: 'Pending'
    },

    {
      checkbox: false, billRegNo: '278-', date: '11-Feb-2020', billType: 'Detailed Bill For Contingent Charges', billCategory: 'Nil',
      majorHead: '2054', billNetValue: '255.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', TypeBill: 'Regular Bill', status: 'Pending'
    },

    {
      checkbox: false, billRegNo: '118-', date: '13-Feb-2020',
      billType: 'Bill For Withdrawal Of Final/Dav/Other Gpf (Other Than Class-Iv)', billCategory: 'Regular',
      majorHead: '8009', billNetValue: '10001.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', TypeBill: 'Regular Bill', status: 'Pending'
    },

    {
      checkbox: false, billRegNo: '20-', date: '13-Feb-2020',
      billType: 'Bill For Withdrawal Of Final/Dav/Other Gpf (Other Than Class-Iv)', billCategory: 'Regular',
      majorHead: '8009', billNetValue: '16540.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', TypeBill: 'Regular Bill', status: 'Pending'
    },

  ];
  dataSource = new MatTableDataSource<BillsReturnedByVerifier>(this.elementData);
  // table data end


  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;



  // constructorr
  constructor(private fb: FormBuilder, private router: Router, private dialog: MatDialog) { }
  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.billForApproalForm = this.fb.group({
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

  // clear form
  clearForm() {
    this.billForApproalForm.reset();
  }


  // search bill
  searchBill() { }

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

  // decimal gross to
  decimalGrossTo(data) {
    this.billGrossAmtTo = data;
  }
}

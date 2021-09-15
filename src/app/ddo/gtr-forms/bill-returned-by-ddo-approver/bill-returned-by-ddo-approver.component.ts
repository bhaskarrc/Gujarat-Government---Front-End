import { BillReturnedByDdoApprover } from './../../../model/bill-returned-by-ddo-approver';
import { CommonListing } from './../../../model/common-listing';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonDirective } from 'src/app/common/directive/validation.directive';

@Component({
  selector: 'app-bill-returned-by-ddo-approver',
  templateUrl: './bill-returned-by-ddo-approver.component.html',
  styleUrls: ['./bill-returned-by-ddo-approver.component.css']
})
export class BillReturnedByDdoApproverComponent implements OnInit {

  // variables
  billNetValueToAmt;
  billNetValueFromAmt;
  billGrossAmt;
  billGrossAmtTo;

  // form group
  billForApprovalForm: FormGroup;

  // form controls
  billTypeCtrl: FormControl = new FormControl();
  billCategoryCtrl: FormControl = new FormControl();
  billStatusCtrl: FormControl = new FormControl();

  // Date
  maxDate = new Date();

  // Directive object
  directiveObj = new CommonDirective(this.router);

  // list start
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
  // list end

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
  elementData: BillReturnedByDdoApprover[] = [
    {
      checkbox: false, billRegNo: '2247-', date: '04-Feb-2020', billType: 'Services Postage Stamp', billCategory: 'Regular',
      majorHead: '2054', billNetValue: '35577.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', typeOfBill: 'Regular Bill', status: 'Pending'
    },

    {
      checkbox: false, billRegNo: '457-', date: '10-Feb-2020', billType: 'Pay Bill', billCategory: 'Regular',
      majorHead: '2054', billNetValue: '11247.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', typeOfBill: 'Regular Bill', status: 'Pending'
    },

    {
      checkbox: false, billRegNo: '26-', date: '11-Feb-2020', billType: 'Detailed Bill For Contingent Charges', billCategory: 'Nil',
      majorHead: '2054', billNetValue: '147.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', typeOfBill: 'Regular Bill', status: 'Pending'
    },

    {
      checkbox: false, billRegNo: '23-', date: '13-Feb-2020',
      billType: 'Bill For Withdrawal Of Final/Dav/Other Gpf (Other Than Class-Iv)', billCategory: 'Regular',
      majorHead: '8009', billNetValue: '4531.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', typeOfBill: 'Regular Bill', status: 'Pending'
    },

    {
      checkbox: false, billRegNo: '1111-', date: '13-Feb-2020',
      billType: 'Bill For Withdrawal Of Final/Dav/Other Gpf (Other Than Class-Iv)', billCategory: 'Regular',
      majorHead: '8009', billNetValue: '889.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', typeOfBill: 'Regular Bill', status: 'Pending'
    },

  ];
  dataSource = new MatTableDataSource<BillReturnedByDdoApprover>(this.elementData);
  // table data end


  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, private router: Router) { }
  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.billForApprovalForm = this.fb.group({
      billRegNo: [''],
      billCreatedFrom: [''],
      billCreatedTo: [''],
      billType: [''],
      billCategory: [''],
      majorHead: [''],
      billNetValueFrom: [''],
      ddoNo: [''],
      ddoName: [''],
      billGrossAmtTo: [''],
      billGrossAmt: [''],
      billNetValueTo: [''],
    });
  }

  // go to savebill list
  goToSavedBillList() {
    this.router.navigate(['/ddo/saved-bill-list']);
  }

  // reset form
  clearForm() {
    this.billForApprovalForm.reset();
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

  // decimal gross to
  decimalGrossTo(data) {
    this.billGrossAmtTo = data;
  }


  // search bill
  searchBill() { }
}

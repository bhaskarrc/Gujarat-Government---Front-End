import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { DdoDirective } from 'src/app/common/directive/ddo-directive';
import { RejectedApprovedBillsByCo } from 'src/app/model/ddo-forms';

@Component({
  selector: 'app-rejected-approved-bills-by-co',
  templateUrl: './rejected-approved-bills-by-co.component.html',
  styleUrls: ['./rejected-approved-bills-by-co.component.css']
})
export class RejectedApprovedBillsByCoComponent implements OnInit {

  // date
  maxDate = new Date();

  // directive object for mtcheckbox
  directiveObj = new CommonDirective(this.router);

  // directive object for workflow dialog
  directiveObject = new DdoDirective(this.dialog);

  // form group
  savedBillForm: FormGroup;

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
  ];

  billCategoryList: CommonListing[] = [
    { value: 1, viewValue: 'Nil' },
    { value: 2, viewValue: 'Regular' },
    { value: 3, viewValue: 'Regular/Challan' },
    { value: 4, viewValue: 'TC' },
  ];

  billStatusList: CommonListing[] = [
    { value: 1, viewValue: 'Approved' },
    { value: 2, viewValue: 'Created' },
  ];
  // lists end

  // table data
  elementData: RejectedApprovedBillsByCo[] = [
    {
      checkbox: false, billRegNo: '111111-', date: '04-Feb-2020', billType: 'Services Postage Stamp', billCategory: 'Regular',
      majorHead: '2054', billNetValue: '10010.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ',
      billStatus: 'Approved', typeBill: 'Regular Bill', approvedByCo: 'Approved', grossAmount: '123.22',
    },

    {
      checkbox: false, billRegNo: '26-', date: '10-Feb-2020', billType: 'Pay Bill', billCategory: 'Regular',
      majorHead: '2054', billNetValue: '990.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ',
      billStatus: 'Created', typeBill: 'Regular Bill', approvedByCo: 'Approved', grossAmount: '12343.22',
    },

    {
      checkbox: false, billRegNo: '28-', date: '11-Feb-2020', billType: 'Detailed Bill For Contingent Charges', billCategory: 'Nil',
      majorHead: '2054', billNetValue: '0.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ',
      billStatus: 'Created', typeBill: 'Regular Bill', approvedByCo: 'Approved', grossAmount: '3123.22',
    },

    {
      checkbox: false, billRegNo: '88-', date: '13-Feb-2020',
      billType: 'Bill For Withdrawal Of Final/Dav/Other Gpf (Other Than Class-Iv)', billCategory: 'Regular', grossAmount: '4123.22',
      majorHead: '8009', billNetValue: '100.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ',
      billStatus: 'Created', typeBill: 'Regular Bill', approvedByCo: 'Approved'
    },

    {
      checkbox: false, billRegNo: '30-', date: '13-Feb-2020',
      billType: 'Bill For Withdrawal Of Final/Dav/Other Gpf (Other Than Class-Iv)', billCategory: 'Regular', grossAmount: '12123.22',
      majorHead: '8009', billNetValue: '100.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ',
      billStatus: 'Created', typeBill: 'Regular Bill', approvedByCo: 'Approved'
    },

  ];
  dataSource = new MatTableDataSource<RejectedApprovedBillsByCo>(this.elementData);
  displayedColumns: string[] =
    [
      'checkbox',
      'billRegNo',
      'date',
      'billType',
      'billCategory',
      'majorHead',
      'grossAmount',
      'billNetValue',
      'ddoNo',
      'ddoName',
      'billStatus',
      'approvedByCo',
      'billStatus2',
      'action'
    ];
  // table data end

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // constructor
  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.savedBillForm = this.fb.group({
      billRegNo: [''],
      tokenNumber: [''],
      billCreatedFrom: [''],
      billCreatedTo: [''],
      billType: [''],
      billCategory: [''],
      majorHead: [''],
      netTo: [''],
      netFrom: [''],
      grossTo: [''],
      grossFrom: [''],
      ddoNo: [''],
      ddoName: [''],
      billStatus: ['']
    });
  }

  // reset form
  resetForm() { }

  // search bill
  searchBill() { }

  // redirects to saved-bill-list
  goToSavedBillList() {
    this.router.navigate(['/ddo/saved-bill-list']);
  }

  // resets the form
  clearForm() {
    this.savedBillForm.reset();
  }

}

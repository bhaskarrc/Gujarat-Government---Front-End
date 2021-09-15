import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { SavedBillList } from 'src/app/model/saved-bill-list';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-saved-bill-list',
  templateUrl: './saved-bill-list.component.html',
  styleUrls: ['./saved-bill-list.component.css']
})
export class SavedBillListComponent implements OnInit {

  // form group
  savedBillListForm: FormGroup;

  // form controls
  billTypeCtrl: FormControl = new FormControl();
  billCategoryCtrl: FormControl = new FormControl();
  billStatusCtrl: FormControl = new FormControl();

  // date
  maxDate = new Date();

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
  elementData: SavedBillList[] = [
    {
      billRegNo: '111111-', date: '04-Feb-2020', billType: 'Services Postage Stamp', billCategory: 'Regular',
      majorHead: '2054', billNetValue: '10010.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ',
      billStatus: 'Approved', typeBill: 'Regular Bill', status: 'Pending', pendingWith: '-'
    },

    {
      billRegNo: '26-', date: '10-Feb-2020', billType: 'Pay Bill', billCategory: 'Regular',
      majorHead: '2054', billNetValue: '990.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ',
      billStatus: 'Created', typeBill: 'Regular Bill', status: 'Pending', pendingWith: '-'
    },

    {
      billRegNo: '28-', date: '11-Feb-2020', billType: 'Detailed Bill For Contingent Charges', billCategory: 'Nil',
      majorHead: '2054', billNetValue: '0.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ',
      billStatus: 'Created', typeBill: 'Regular Bill', status: 'Pending', pendingWith: '-'
    },

    {
      billRegNo: '88-', date: '13-Feb-2020',
      billType: 'Bill For Withdrawal Of Final/Dav/Other Gpf (Other Than Class-Iv)', billCategory: 'Regular',
      majorHead: '8009', billNetValue: '100.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ',
      billStatus: 'Created', typeBill: 'Regular Bill', status: 'Pending', pendingWith: '-'
    },

    {
      billRegNo: '30-', date: '13-Feb-2020',
      billType: 'Bill For Withdrawal Of Final/Dav/Other Gpf (Other Than Class-Iv)', billCategory: 'Regular',
      majorHead: '8009', billNetValue: '100.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ',
      billStatus: 'Created', typeBill: 'Regular Bill', status: 'Pending', pendingWith: '-'
    },
  ];
  dataSource = new MatTableDataSource<SavedBillList>(this.elementData);
  displayedColumns: string[] = [
    'position',
    'billRegNo',
    'date',
    'billType',
    'billCategory',
    'majorHead',
    'billNetValue',
    'ddoNo',
    'ddoName',
    'billStatus',
    'billStatus2',
    'status',
    'pendingWith',
    'action'
  ];
  // table data end

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // constructor
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.savedBillListForm = this.fb.group({
      billRegNo: [''],
      tokenNumber: [''],
      billCreatedFrom: [''],
      billCreatedTo: [''],
      billType: [''],
      billCategory: [''],
      majorHead: [''],
      billNetValue: [''],
      ddoNo: [''],
      ddoName: [''],
      billStatus: ['']
    });
  }

  // search bill
  searchBill() { }

  // reset the form
  clearForm() {
    this.savedBillListForm.reset();
  }

}

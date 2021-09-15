import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { SavedBillFourtySix } from 'src/app/model/ddo-forms';

@Component({
  selector: 'app-saved-bill-fourty-six',
  templateUrl: './saved-bill-fourty-six.component.html',
  styleUrls: ['./saved-bill-fourty-six.component.css']
})
export class SavedBillFourtySixComponent implements OnInit {

  // form group
  savedBillForm: FormGroup;

  // Date
  maxDate = new Date();

  // table data start
  elementData: SavedBillFourtySix[] = [
    {
      checkbox: false, billNo: '23', billRegNo: '111111-', date: '05-Feb-2020',
      billType: 'Abstract Bill of Contingent Charges', majorHead: '2055', billGrossAmount: '10010.00', billNetValue: '10010.00',
      voucherNo: '189', voucherDate: '03/03/2020', gtr46BillStatus: 'Not Initiated', pendingSinceDays: '15'
    },

    {
      checkbox: false, billNo: '25', billRegNo: '26-', date: '13-Feb-2020', billType: 'Abstract Bill of Contingent Charges',
      majorHead: '2055', billGrossAmount: '990.00', billNetValue: '990.00',
      voucherNo: '524', voucherDate: '03/03/2020', gtr46BillStatus: 'Not Initiated', pendingSinceDays: '15'
    },

    {
      checkbox: false, billNo: '27', billRegNo: '28-', date: '17-Feb-2020', billType: 'Abstract Bill of Contingent Charges',
      majorHead: '2055', billGrossAmount: '5000.00', billNetValue: '5000.00',
      voucherNo: '25', voucherDate: '03/03/2020', gtr46BillStatus: 'Not Initiated', pendingSinceDays: '15'
    },

    {
      checkbox: false, billNo: '29', billRegNo: '88-', date: '20-Feb-2020', billType: 'Abstract Bill of Contingent Charges',
      majorHead: '2055', billGrossAmount: '100.00', billNetValue: '100.00',
      voucherNo: '412', voucherDate: '03/03/2020', gtr46BillStatus: 'Not Initiated', pendingSinceDays: '15'
    },

    {
      checkbox: false, billNo: '21', billRegNo: '30-', date: '21-Feb-2020', billType: 'Abstract Bill of Contingent Charges',
      majorHead: '2055', billGrossAmount: '100.00', billNetValue: '100.00',
      voucherNo: '364', voucherDate: '03/03/2020', gtr46BillStatus: 'Not Initiated', pendingSinceDays: '15'
    },
  ];
  dataSource = new MatTableDataSource<SavedBillFourtySix>(this.elementData);
  displayedColumns: string[] = [
    'billNo',
    'billRegNo',
    'date',
    'billType',
    'majorHead',
    'billGrossAmount',
    'billNetValue',
    'voucherNo',
    'voucherDate',
    'gtr46BillStatus',
    'pendingSinceDays', 'action'];
  // table data end

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  // constructor
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.savedBillForm = this.fb.group({
      billRegNo: [''],
      tokenNumber: [''],
      billCreatedFrom: [''],
      billCreatedTo: [''],
      billType: [''],
      majorHead: [''],
      billNetValue: [''],
      billNo: [''],
      billGrossAmountFrom: [''],
      billGrossAmountTo: [''],
      voucherNo: [''],
      voucherFromDate: [''],
      voucherToDate: ['']
    });
  }

  // navigate to saved bill list
  goToSavedBillList() {
    this.router.navigate(['/ddo/saved-bill-list']);
  }

  // reset form
  clearForm() {
    this.savedBillForm.reset();
  }

  // search bill
  searchBill() { }

  // navigates to form gtr-46
  goToPage() {
    this.router.navigate(['./ddo/gtr-46']);
  }

}



import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UnpostedVoucherList } from 'src/app/model/emd';
@Component({
  selector: 'app-unposted-voucher-list',
  templateUrl: './unposted-voucher-list.component.html',
  styleUrls: ['./unposted-voucher-list.component.css']
})
export class UnpostedVoucherListComponent implements OnInit {
  // FormGroup
  unPostedVoucherListForm: FormGroup;
  maxDate = new Date();
  initiatiomdate = new Date();
  // Display Element Data
  ELEMENT_DATA: UnpostedVoucherList[] =
    [
      {
        billRefNo: '11 ',
        tokenNo: '10257',
        voucherDate: '20-Apr-2019',
        inwardedDate: '18-Apr-2019',
        btype: 'Refund of Lapse Deposit',
        cardexNo: '4',
        majorHead: '8443',
        amount: '2000.00',
      },

      {
        billRefNo: '12 ',
        tokenNo: '10258',
        voucherDate: '20-Apr-2019',
        inwardedDate: '18-Apr-2019',
        btype: 'Refund of Lapse Deposit',
        cardexNo: '4',
        majorHead: '8443',
        amount: '4000.00',
      },
      {
        billRefNo: '13 ',
        tokenNo: '10259',
        voucherDate: '20-Apr-2019',
        inwardedDate: '18-Apr-2019',
        btype: 'Refund of Lapse Deposit',
        cardexNo: '4',
        majorHead: '8443',
        amount: '45000.00',
      },
      {
        billRefNo: '14 ',
        tokenNo: '10210',
        voucherDate: '20-Apr-2019',
        inwardedDate: '18-Apr-2019',
        btype: 'Refund of Lapse Deposit',
        cardexNo: '4',
        majorHead: '8443',
        amount: '55000.00',
      },

    ];
  // Display Columns
  displayedColumns: string[] = ['srNo', 'billRefNo', 'tokenNo', 'voucherDate', 'inwardedDate',
    'btype', 'cardexNo', 'majorHead', 'amount', 'action'];
  // Table Source

  dataSource = new MatTableDataSource<UnpostedVoucherList>(this.ELEMENT_DATA);
  private paginator: MatPaginator;
  private sort: MatSort;
  showTable: Boolean = false;
  searchListForm: FormGroup;
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  constructor(private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }
  ngOnInit() {
    this.unPostedVoucherData();
  }
  unPostedVoucherData() {
    this.unPostedVoucherListForm = this.fb.group({
      // FormGroup Fields
      brNo: [''],
      tokenNo: [''],
      code: [''],
      billType: [''],
      cardexNo: [''],
      voucherNumber: [''],
      type: [''],
      majorHead: [''],
      netamount: [''],




    });
  }
  // sets paginator and sort variables
  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  // function to clear form
  clearForm() {
    this.unPostedVoucherListForm.reset();
  }
  // shows and hides table
  search() {
    this.showTable = true;
  }



}



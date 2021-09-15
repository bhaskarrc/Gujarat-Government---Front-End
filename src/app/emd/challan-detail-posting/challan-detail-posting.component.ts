
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { EmdDirectives } from 'src/app/common/directive/emd-directive';
import { ChallanDetailPosting } from 'src/app/model/emd';
@Component({
  selector: 'app-challan-detail-posting',
  templateUrl: './challan-detail-posting.component.html',
  styleUrls: ['./challan-detail-posting.component.css']
})
export class ChallanDetailPostingComponent implements OnInit {
  selectedAll: Boolean = false;
  showTable: Boolean = false;
  searchListForm: FormGroup;
  directiveObject = new EmdDirectives(this.router, this.dialog);

  // FormGroup
  challanDetailPostingListForm: FormGroup;

  // dates
  maxDate = new Date();
  initiatiomdate = new Date();

  // Display Element Data
  ELEMENT_DATA: ChallanDetailPosting[] =
    [
      {
        receiptNo: '1432',
        bankDate: '10-Apr-2019',
        depositorName: 'Mr. A.B. Mishra',
        majorHead: '8443',
        amount: '5000.00',
        challanType: 'Others',
        bankCode: 'SBI',
        branchCode: 'SBI0001234',
        tinNo: '1234',
      },

      {
        receiptNo: '1432',
        bankDate: '10-Apr-2019',
        depositorName: 'Mr. A.B. Mishra',
        majorHead: '8443',
        amount: '5000.00',
        challanType: 'Others',
        bankCode: 'SBI',
        branchCode: 'SBI0001234',
        tinNo: '1234',
      },
      {
        receiptNo: '1432',
        bankDate: '10-Apr-2019',
        depositorName: 'Mr. A.B. Mishra',
        majorHead: '8443',
        amount: '5000.00',
        challanType: 'Others',
        bankCode: 'SBI',
        branchCode: 'SBI0001234',
        tinNo: '1234',
      },

      {
        receiptNo: '1432',
        bankDate: '10-Apr-2019',
        depositorName: 'Mr. A.B. Mishra',
        majorHead: '8443',
        amount: '5000.00',
        challanType: 'Others',
        bankCode: 'SBI',
        branchCode: 'SBI0001234',
        tinNo: '1234',
      },
    ];
  // Display Columns
  displayedColumns: string[] = ['checkBox', 'receiptNo', 'bankDate', 'depositorName', 'majorHead',
    'amount', 'challanType', 'bankCode', 'branchCode', 'tinNo', 'action'];

  // Table Source
  dataSource = new MatTableDataSource<ChallanDetailPosting>(this.ELEMENT_DATA);
  private paginator: MatPaginator;
  private sort: MatSort;
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }
  ngOnInit() {
    this.challanDetailPostingData();
  }
  challanDetailPostingData() {
    this.challanDetailPostingListForm = this.fb.group({
      // FormGroup Fields
      payeeName: [''],
      challanNo: [''],
      mHead: [''],
      amount: [''],
      tinNo: [''],
      bCode: [''],
      branchCode: [''],
    });
  }
  // sets paginator and sort variables
  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  // function to clear form
  clearForm() {
    this.challanDetailPostingListForm.reset();
  }
  // shows and hides table
  search() {
    this.showTable = true;
  }

}



import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmdDirectives } from 'src/app/common/directive/emd-directive';
import { AcceptChallan } from 'src/app/model/emd';
@Component({
  selector: 'app-accept-challan',
  templateUrl: './accept-challan.component.html',
  styleUrls: ['./accept-challan.component.css']
})
export class AcceptChallanComponent implements OnInit {
  // variables
  selectedAll: Boolean = false;
  showTable: Boolean = false;
  searchListForm: FormGroup;
  directiveObject = new EmdDirectives(this.router, this.dialog);
  public toggleButton = false;
  maxDate = new Date();
  initiatiomdate = new Date();

  // FormGroup Posted Challan
  postedChallanListForm: FormGroup;

  //  Display Table Data
  ELEMENT_DATA: AcceptChallan[] =
    [
      {
        receiptNo: '1432',
        bankDate: '10-May-2019',
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
        bankDate: '10-May-2019',
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
        bankDate: '10-May-2019',
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
        bankDate: '10-May-2019',
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
  // Table Data Source
  dataSource = new MatTableDataSource<AcceptChallan>(this.ELEMENT_DATA);

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
    this.postedChallanListFormFormData();
  }
  // FormControls
  postedChallanListFormFormData() {
    this.postedChallanListForm = this.fb.group({
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
  // function to clears form fields
  clearForm() {
    this.postedChallanListForm.reset();
  }
  // shows and hides table
  search() {
    this.showTable = true;
  }

  // function to delete row from table
  delete(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
    this.setDataSourceAttributes();
  }

}



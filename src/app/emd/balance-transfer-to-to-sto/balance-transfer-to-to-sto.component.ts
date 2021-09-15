
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsEmdComponent } from '../workflow-details-emd/workflow-details-emd.component';
import { EmdDirectives } from 'src/app/common/directive/emd-directive';
import { ListValue } from 'src/app/model/common-grant';
import { BalanceTransferStoToTo } from 'src/app/model/emd';
@Component({
  selector: 'app-balance-transfer-to-to-sto',
  templateUrl: './balance-transfer-to-to-sto.component.html',
  styleUrls: ['./balance-transfer-to-to-sto.component.css']
})
export class BalanceTransferToToStoComponent implements OnInit {
  selectedAll: Boolean = false;
  showTable: Boolean = false;
  searchListForm: FormGroup;

  // FormGroup
  balanceStoToToListForm: FormGroup;
  transferStoToToListForm: FormGroup;

  // FormControl
  transferTypeCtrl: FormControl = new FormControl();
  codeCtrl: FormControl = new FormControl();
  departmentCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();

  // Dates
  maxDate = new Date();
  initiatiomdate = new Date();

  // Display Element Data
  ELEMENT_DATA: BalanceTransferStoToTo[] =
    [
      {
        challanNo: '192000001',
        code: 'SD',
        pName: 'Mr. A.B. Mishra',
        depart: 'Agriculture, Famers welfare and Co-operation Department',
        chDate: '08-May-2015',
        majorHead: '8443',
        ddoNo: '1234',
        cardexNo: '1214',
        offName: 'District Treasury Office, Gandhinagar',
        amount: '50000.00',
      },

      {
        challanNo: '192000001',
        code: 'RD',
        pName: 'Mr. B.B. Patel',
        depart: 'General Administration Department',
        chDate: '08-May-2015',
        majorHead: '8443',
        ddoNo: '1234',
        cardexNo: '1214',
        offName: 'District Treasury Office, Gandhinagar',
        amount: '50000.00',
      },

      {
        challanNo: '192000001',
        code: 'TD',
        pName: 'Mr. L.T. Naik',
        depart: 'Industries & Mines Department',
        chDate: '08-May-2015',
        majorHead: '8443',
        ddoNo: '1234',
        cardexNo: '1214',
        offName: 'District Treasury Office, Gandhinagar',
        amount: '50000.00',
      },

      {
        challanNo: '192000001',
        code: 'SD',
        pName: 'Mr. S.B. Patel',
        depart: 'Revenue Department',
        chDate: '08-May-2015',
        majorHead: '8443',
        ddoNo: '1234',
        cardexNo: '1214',
        offName: 'District Treasury Office, Gandhinagar',
        amount: '50000.00',
      },


    ];
  // List values
  transfer_Type_list: ListValue[] = [
    { value: '1', viewValue: 'Sub-Treasury Office, kalol, Gandhinagar' },
    { value: '1', viewValue: 'Sub-Treasury Office, Dahegam , Gandhinagar' },

  ];
  code_list: ListValue[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
  ];

  dept_list: ListValue[] = [{
    value: '1', viewValue: 'Home Department'
  },
  { value: '2', viewValue: 'Food, Civil Supplies & Consumer Affairs Department' },
  { value: '3', viewValue: 'Education Department' },
  ];

  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
  ];


  // Display Columns
  displayedColumns: string[] = ['checkBox', 'srNo', 'challanNo', 'code', 'pName', 'depart', 'chDate', 'majorHead',
    'ddoNo', 'cardexNo', 'offName', 'amount', 'action'];
  // Table Source
  dataSource = new MatTableDataSource<BalanceTransferStoToTo>(this.ELEMENT_DATA);
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
  directiveObject = new EmdDirectives(this.router, this.dialog);

  ngOnInit() {
    this.balanceStoToToListData();
    this.transferStoToToListData();
  }

  balanceStoToToListData() {
    this.balanceStoToToListForm = this.fb.group({
      // FormGroup Fields
      srNo: [''],
      challanNo: [''],
      code: [''],
      payeeName: [''],
      department: [''],
      majorHead: [''],
      amount: [''],
    });
  }
  transferStoToToListData() {
    this.transferStoToToListForm = this.fb.group({
      // FormGroup Fields
      officeName: ['District Treasury Office, Gandhinagar'],
      transferTo: ['1'],
    });
  }

  // sets paginator and sort variables
  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  // function to clear form
  clearForm() {
    this.balanceStoToToListForm.reset();
  }
  // shows and hides table
  search() {
    this.showTable = true;
  }

}


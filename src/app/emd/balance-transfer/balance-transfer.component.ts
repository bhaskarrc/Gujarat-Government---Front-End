
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { EmdDirectives } from 'src/app/common/directive/emd-directive';
import { ListValue } from 'src/app/model/common-grant';
import { BalanceTransfer } from 'src/app/model/emd';

@Component({
  selector: 'app-balance-transfer',
  templateUrl: './balance-transfer.component.html',
  styleUrls: ['./balance-transfer.component.css']
})
export class BalanceTransferComponent implements OnInit {
  selectedAll: Boolean = false;
  showTable: Boolean = false;
  searchListForm: FormGroup;

  // FormGroup
  depositTransferListForm: FormGroup;
  // FormControls
  statusTypeCtrl: FormControl = new FormControl();
  distTypeCtrl: FormControl = new FormControl();
  toStoTypeCtrl: FormControl = new FormControl();
  // Dates
  initiatiomdate = new Date();
  maxDate = new Date();

  // Display Element Data
  ELEMENT_DATA: BalanceTransfer[] = [
    {
      srNumber: '192000001', cCode: 'SD', pName: 'Mr. A.B. Mishra', depart: 'Agriculture, Famers welfare and Co-operation Department',
      cDate: '08-May-2015',
      cAmount: '50000.00', mHead: '8443',
      transferFromDdo: 1234, transferFromCardex: 1214, transferFromOfficeName: 'District Treasury Office, Gandhinagar',
      transferToDdo: 2233, transferToCardex: 1235, transferToofficeName: 'District Treasury Office, Ahemadabad',
      stat: 'Received', act: ''
    },
    {
      srNumber: '192000002', cCode: 'RD', pName: 'Mr. B.B. Patel', depart: 'General Administration Department', cDate: '10-Oct-2019',
      cAmount: '58000.00', mHead: '8443',
      transferFromDdo: 1236, transferFromCardex: 1228, transferFromOfficeName: 'District Treasury Office, Ahemadabad',
      transferToDdo: 2233, transferToCardex: 1238, transferToofficeName: 'District Treasury Office, Gandhinagar',
      stat: 'Pending for Received', act: ''
    },
    {
      srNumber: '192000003', cCode: 'TD', pName: 'Mr. L.T. Naik', depart: 'Industries & Mines Department', cDate: '01-Jan-2020',
      cAmount: '58000.00', mHead: '8443',
      transferFromDdo: 1222, transferFromCardex: 1223, transferFromOfficeName: 'District Treasury Office, Ahemadabad',
      transferToDdo: 2233, transferToCardex: 1239, transferToofficeName: 'District Treasury Office, Gandhinagar',
      stat: 'Received', act: ''
    },
  ];
  // List values
  status_Type_list: ListValue[] = [

    { value: '1', viewValue: 'Pending For Received' },
    { value: '2', viewValue: 'Received' },
  ];
  district_list: ListValue[] = [

    { value: '1', viewValue: 'Gandhinagar' },
    { value: '2', viewValue: 'Ahemadabad' },
  ];
  toSto_list: ListValue[] = [

    { value: '1', viewValue: 'District Treasury Office, Gandhinagar' },
    { value: '2', viewValue: 'District Treasury Office, Ahemadabad' },
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // Table Source
  dataSource = new MatTableDataSource<BalanceTransfer>(this.ELEMENT_DATA);
  // Display Columns
  displayedColumns: string[] = [
    'srNumber', 'cCode', 'pName', 'depart', 'cDate', 'cAmount', 'mHead',
    'transferFromDdo', 'transferFromCardex', 'transferFromOfficeName', 'transferToDdo', 'transferToCardex', 'transferToofficeName',
    'stat', 'act'
  ];


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


  directiveObject = new EmdDirectives(this.router, this.dialog);

  ngOnInit() {
    this.depositTransferListData();

  }

  depositTransferListData() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.depositTransferListForm = this.fb.group({
      // FormGroup Fields
      srNo: [''],
      code: [''],
      payeeName: [''],
      department: [''],
      majorHead: [''],
      amount: [''],
      status: [''],
      district: [''],
      toSto: [''],
    });
  }


  // sets paginator and sort variables
  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  // function to clear form
  clearForm() {
    this.depositTransferListForm.reset();
  }
  // shows and hides table
  search() {
    this.showTable = true;
  }

}



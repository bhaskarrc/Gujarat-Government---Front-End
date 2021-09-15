import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { EmdDirectives } from 'src/app/common/directive/emd-directive';
import { BalanceTransferStoToTo } from 'src/app/model/emd';
import { ListValue } from 'src/app/model/common-grant';
@Component({
  selector: 'app-balance-transfer-to-to-to',
  templateUrl: './balance-transfer-to-to-to.component.html',
  styleUrls: ['./balance-transfer-to-to-to.component.css']
})
export class BalanceTransferToToToComponent implements OnInit {
  selectedAll: Boolean = false;
  showTable: Boolean = false;
  public toggleButton = false;
  searchListForm: FormGroup;
  directiveObject = new EmdDirectives(this.router, this.dialog);

  // FormGroup
  balancetoToToListForm: FormGroup;
  transfertoToToListForm: FormGroup;
  // FormControl
  transferTypeCtrl: FormControl = new FormControl();
  codeCtrl: FormControl = new FormControl();
  departmentCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();

  // dates
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

    { value: '1', viewValue: 'District Treasury Office, Ahemadabad' },
    { value: '2', viewValue: 'District treasury Office, Bhuj' },
    { value: '3', viewValue: 'District treasury Office, Mehsana' },
    { value: '4', viewValue: 'District treasury Office, Kutch' },

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
  constructor(private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }
  ngOnInit() {
    this.balancetoToToListData();
    this.transfertoToToListData();
  }

  balancetoToToListData() {
    this.balancetoToToListForm = this.fb.group({
      // FormGroup Fields
      srNo: [''],
      code: [''],
      payeeName: [''],
      department: [''],
      majorHead: [''],
      amount: [''],
    });
  }
  transfertoToToListData() {
    this.transfertoToToListForm = this.fb.group({
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
    this.balancetoToToListForm.reset();
  }
  // shows and hides table
  search() {
    this.showTable = true;
  }

  enabledata() {

    if (this.toggleButton === true) {
      this.toggleButton = false;
    } else {
      this.toggleButton = true;
    }
  }


}


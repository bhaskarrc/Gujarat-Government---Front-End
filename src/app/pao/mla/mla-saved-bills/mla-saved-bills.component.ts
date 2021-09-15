
import { group } from '@angular/animations';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ListValue, PrintBillMLA } from 'src/app/model/paoModel';
@Component({
  selector: 'app-mla-saved-bills',
  templateUrl: './mla-saved-bills.component.html',
  styleUrls: ['./mla-saved-bills.component.css']
})
export class MlaSavedBillsComponent implements OnInit {
  // Variable

  valueRequired: Boolean = false;
  showSearch = false;
  // Form Group
  distributeVouchersForm: FormGroup;
  // Date
  maxDate = new Date();
  // Form COntrol
  majorHeadCtrl: FormControl = new FormControl();
  billtypeCtrl: FormControl = new FormControl();
  selection = new SelectionModel<any>(true, []);
  private paginator: MatPaginator;
  private sort: MatSort;

  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog,) { }
  // List
  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    { value: '2', viewValue: '5475:Capital Outlay on other General Economics Services' },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' },
  ];

  auditorName_list: ListValue[] = [
    { value: '1', viewValue: 'Mr. Shah' },
    { value: '2', viewValue: 'Mr. Modi' },
  ];
  // Table Source
  ELEMENT_DATA: PrintBillMLA[] =
    [
      {
        billControlNumber: '6098',
        billDate: '25-01-2018',
        mlaNo: '1',
        mlaName: 'Mr. Modi',
        majorHead: '2011',
        billNetAmount: '46999.00',
        mlaDesignation: 'MLA',
        mlaDepartment: 'Gujarat Legislature Secretariat',
        billStatus: 'Created',
        billMonth: 'December',
        billType: 'GTR 30 - Pay Bill'
      },
      {
        billControlNumber: '6099',
        billDate: '25-01-2018',
        mlaNo: '2',
        mlaName: 'Mr. Modi',
        majorHead: '2012',
        billNetAmount: '46999.00',
        mlaDesignation: 'Minister',
        mlaDepartment: 'General Administartion Department',
        billStatus: 'Created',
        billMonth: 'November',
        billType: 'GTR 30 - Pay Bill'
      },

    ];

  billtype_list: ListValue[] = [{
    value: '1',
    viewValue: 'Created'
  },
  {
    value: '2',
    viewValue: 'Approved'
  },
  {
    value: '3',
    viewValue: 'Rejected'
  },

  ];

  displayedColumns: string[] = ['checkBox', 'billControlNumber', 'billDate', 'mlaNo', 'mlaName', 'majorHead',
    'billNetAmount', 'mlaDesignation', 'mlaDepartment', 'billStatus', 'billMonth', 'billType',
    'action'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  ngOnInit() {
    this.distributeVouchersForm = this.fb.group({
      bControlNumber: [''],
      billDate: [''],
      mlaNumber: [''],
      mlaName: [''],
      majorHead: [''],
      billNetAmount: [''],
      mlaDesignation: [''],
      department: [''],
      billtypes: [''],
      toDate: [''],
      fromDate: [''],
      BillFromDate: [''],
    });
  }
  FromDate(event) {
    const fromdate = this.distributeVouchersForm.get('BillFromDate').value;
    if (fromdate != '') {
      this.valueRequired = true;
    }
  }
  clickSearch() {
    this.showSearch = true;
  }

  searchMlaAuthorityData() {

  }
  search() {

  }

}

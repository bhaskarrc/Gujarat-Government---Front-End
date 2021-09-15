import { paoMessage } from 'src/app/common/error-message/common-message.constants';

import { group } from '@angular/animations';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ListValue, PrintBillMLA } from 'src/app/model/paoModel';

@Component({
  selector: 'app-print-mla-bill',
  templateUrl: './print-mla-bill.component.html',
  styleUrls: ['./print-mla-bill.component.css']
})
export class PrintMlaBillComponent implements OnInit {
  // Form Group
  distributeVouchersForm: FormGroup;
  // Date
  maxDate = new Date();
  // Form COntrol
  majorHeadCtrl: FormControl = new FormControl();
  auditorCtrl: FormControl = new FormControl();
  // Variable
  private paginator: MatPaginator;
  private sort: MatSort;
  showSearch: boolean = false;
  isSubmitted: boolean = false;
  errorMessages = paoMessage;

  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog,) { }

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
  auditor_list: ListValue[] = [
    {
      value: '1', viewValue: 'Shri. Pratik Shah',
    },
    {
      value: '1', viewValue: 'Shri.Sanket Modi',
    },
  ];

  displayedColumns: string[] = ['checkBox', 'billControlNumber', 'billDate', 'mlaNo', 'mlaName', 'majorHead',
    'billNetAmount', 'mlaDesignation', 'mlaDepartment', 'billStatus', 'billMonth', 'billType',
    'action'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  ngOnInit() {
    this.distributeVouchersForm = this.fb.group({
      tokenNumber: [''],
      fromDate: [''],
      toDate: [''],
      auditor: [''],
      majorHead: [''],
      postReceivedDate: [''],
      postDate: [''],
      distributeToctrl: ['1'],

    });
  }

  clickSearch() {
    this.showSearch = true;
    if (this.distributeVouchersForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }
  onPrint() {
    if (this.distributeVouchersForm.valid) {
      this.isSubmitted = false;
    } else { this.isSubmitted = true; }
  }

  searchMlaAuthorityData() {

  }
  search() {

  }

  gotoListing() {

  }
  goToDashboard() {

  }


}

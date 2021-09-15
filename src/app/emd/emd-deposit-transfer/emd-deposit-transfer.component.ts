

import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { EmdDirectives } from 'src/app/common/directive/emd-directive';
import { EmdDepositTransfer } from 'src/app/model/emd';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-emd-deposit-transfer',
  templateUrl: './emd-deposit-transfer.component.html',
  styleUrls: ['./emd-deposit-transfer.component.css']
})
export class EmdDepositTransferComponent implements OnInit {
  showTable: Boolean = false;
  searchListForm: FormGroup;

  // FormGroup
  depositTransferForm: FormGroup;
  transfertoToListForm: FormGroup;
  // FormControl
  transferTypeCtrl: FormControl = new FormControl();
  ddoTypeCtrl: FormControl = new FormControl();
  cardexTypeCtrl: FormControl = new FormControl();
  // dates
  maxDate = new Date();
  initiatiomdate = new Date();

  // Display Element Data
  ELEMENT_DATA: EmdDepositTransfer[] =
    [
      {
        challanNo: '192000001',
        code: 'SD',
        pName: 'Mr. A.B. Mishra',
        depart: 'Agriculture, Famers welfare and Co-operation Department',
        edate: '08-May-2015',
        majorHead: '8443',
        ddoNo: '1234',
        cardexNo: '1214',
        offName: 'District Treasury Office, Gandhinagar',
        amount: '50000.00',
        transferTo: 'District Treasury Office, Gandhinagar',
        ddoOfficeName: 'Revenue Department'
      },


      {
        challanNo: '192000002',
        code: 'RD',
        pName: 'Mr. B.B. Patel',
        depart: 'General Administration Department',
        edate: '08-May-2015',
        majorHead: '8443',
        ddoNo: '1234',
        cardexNo: '1214',
        offName: 'District Treasury Office, Gandhinagar',
        amount: '10000.00',
        transferTo: 'District Treasury Office, Gandhinagar',
        ddoOfficeName: 'Revenue Department'
      },

      {
        challanNo: '192000003',
        code: 'TD',
        pName: 'Mr. L.T. Naik',
        depart: 'Industries & Mines Department',
        edate: '08-May-2015',
        majorHead: '8443',
        ddoNo: '1234',
        cardexNo: '1214',
        offName: 'District Treasury Office, Gandhinagar',
        amount: '75000.00',
        transferTo: 'District Treasury Office, Gandhinagar',
        ddoOfficeName: 'Revenue Department'
      },
      {
        challanNo: '192000004',
        code: 'SD',
        pName: 'Mr. S.B. Patel',
        depart: 'Revenue Department',
        edate: '08-May-2015',
        majorHead: '8443',
        ddoNo: '1234',
        cardexNo: '1214',
        offName: 'District Treasury Office, Gandhinagar',
        amount: '80000.00',
        transferTo: 'District Treasury Office, Gandhinagar',
        ddoOfficeName: 'Revenue Department'
      },
    ];
  // List values
  transfer_Type_list: ListValue[] = [

    { value: '1', viewValue: 'District Treasury Office, Gandhinagar' },
    { value: '2', viewValue: 'District treasury Office, Bhuj' },
    { value: '3', viewValue: 'District treasury Office, Mehsana' },
    { value: '4', viewValue: 'District treasury Office, Kutch' },
  ];

  ddo_Type_list: ListValue[] = [

    { value: '1', viewValue: '1234' },
    { value: '1', viewValue: '1235' },
  ];

  cardex_Type_list: ListValue[] = [

    { value: '1', viewValue: '5678' },
    { value: '1', viewValue: '5679' },
  ];
  // Display Columns
  displayedColumns: string[] = ['checkBox', 'srNo', 'challanNo', 'code', 'pName', 'depart', 'edate', 'majorHead',
    'ddoNo', 'cardexNo', 'offName', 'amount', 'action'];
  // Table Source
  dataSource = new MatTableDataSource<EmdDepositTransfer>(this.ELEMENT_DATA);
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
    this.depositTransferData();
    this.transfertoToListData();
  }

  depositTransferData() {
    this.depositTransferForm = this.fb.group({
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
  transfertoToListData() {
    this.transfertoToListForm = this.fb.group({
      // FormGroup Fields
      officeName: ['District Treasury Office, Banaskantha'],
      transferTo: ['1'],
      ddoNo: ['1'],
      cardexNo: ['1'],
      ddoOfficeName: [''],
    });
  }

  // sets paginator and sort variables
  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  // sets click status
  onclickStatus(data) {
    if (data.active) {
      data.active = false;
    } else {
      data.active = true;
    }
    return data;
  }
  // function to clear form
  clearForm() {
    this.depositTransferForm.reset();
  }
  // shows and hides table
  search() {
    this.showTable = true;
  }


}



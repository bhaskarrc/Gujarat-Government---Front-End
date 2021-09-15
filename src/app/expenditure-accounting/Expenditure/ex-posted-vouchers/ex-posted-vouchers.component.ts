
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CloseDialogBoxComponent } from '../../close-dialog-box/close-dialog-box.component';
import { EaDirectives } from 'src/app/common/directive/ea-directive';


@Component({
  selector: 'app-ex-posted-vouchers',
  templateUrl: './ex-posted-vouchers.component.html',
  styleUrls: ['./ex-posted-vouchers.component.css']
})
export class ExPostedVouchersComponent implements OnInit {
  directiveObject = new EaDirectives(this.dialog);
  // FormGroup
  voucherListForm: FormGroup;
  // FormControl
  majorHeadCtrl: FormControl = new FormControl();
  billTypeCtrl: FormControl = new FormControl();
  maxDate = new Date();
  initiatiomdate = new Date((new Date()));


  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog) { }
  // List values

  majorHead_list: any[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    { value: '2', viewValue: '5475:Capital Outlay on other General Economics Services' },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' },
  ];

  billType_list: any[] = [{
    value: '1',
    viewValue: 'GTR 30 - Pay Bill'
  },
  {
    value: '2',
    viewValue: 'GTR 35 - TA Bill'
  },
  {
    value: '3',
    viewValue: 'GTR 29 - Medical Bill'
  },
  {
    value: '4',
    viewValue: 'GTR 85 - Advance Bill'
  }
  ];

  // Display Element Data
  ELEMENT_DATA: any[] =
    [
      {
        voucherNo: '10001',
        voucherDate: '23-Jan-2017',
        billRefNo: '5001',
        tokenNumber: '5411',
        inwardedDate: '23-Jan-2017',
        bType: 'GTR 30 - Pay Bill',
        cardexNumber: '50',
        majorHead: '2011',
        netAmount: '61,250.00',
        postedBy: 'M D Ajmari'
      },

      {
        voucherNo: '10002',
        voucherDate: '09-Jan-2018',
        billRefNo: '5002',
        tokenNumber: '5110',
        inwardedDate: '09-Jan-2018',
        bType: 'GTR 30 - Pay Bill',
        cardexNumber: '56',
        majorHead: '2054',
        netAmount: '17,000.00',
        postedBy: 'B H Patel'

      },
      {
        voucherNo: '10003',
        voucherDate: '19-Jan-2018',
        billRefNo: '5003',
        tokenNumber: '5412 ',
        inwardedDate: '19-Jan-2018',
        bType: 'GTR 35 - TA Bill',
        cardexNumber: '900',
        majorHead: '2054',
        netAmount: '500.00',
        postedBy: 'M M Kapadiya'

      },
      {
        voucherNo: '10004',
        voucherDate: '24-Jan-2019',
        billRefNo: '5004',
        tokenNumber: '5115',
        inwardedDate: '24-Jan-2019',
        bType: 'GTR 30 - Pay Bill',
        cardexNumber: '51',
        majorHead: '8658',
        netAmount: '1,200.00',
        postedBy: 'Pratik k Shah'

      },
    ];
  // Display Columns
  displayedColumns: string[] = ['srNo', 'voucherNo', 'voucherDate', 'billRefNo', 'tokenNumber', 'inwardedDate',
    'bType', 'cardexNumber', 'majorHead', 'netAmount', 'postedBy', 'action'];
  // Table Source
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.voucherListForm = this.fb.group({
      // FormGroup Fields
      billRefNo: [''],
      tokenNo: [''],
      voucherDate: [''],
      inwardedDate: [''],
      billType: [''],
      cardexNo: [''],
      majorHead: [''],
      netAmount: [''],
      voucherNo: [''],

    });
  }

  searchPostedVoucher() {

  }
}

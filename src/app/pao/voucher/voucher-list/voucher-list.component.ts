import { ListValue } from './../../../model/common-grant';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { VoucherList } from 'src/app/model/paoModel';

@Component({
  selector: 'app-voucher-list',
  templateUrl: './voucher-list.component.html',
  styleUrls: ['./voucher-list.component.css']
})
export class VoucherListComponent implements OnInit {
  // Form Group
  voucherListForm: FormGroup;
  // Form COntrol
  majorHeadCtrl: FormControl = new FormControl();
  billTypeCtrl: FormControl = new FormControl();
  selection = new SelectionModel<any>(true, []);
  // Date
  maxDate = new Date();

  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog,) { }
  // List
  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    {
      value: '2', viewValue: '5475:Capital Outlay on other General Economics Services'
    },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' },
    { value: '6 : Secretariat-Social Services', viewValue: '2251 : Secretariat-Social Services' },
    { value: '7 : Interest Payments', viewValue: '2049 : Interest Payments' },
    { value: '8 : Water Supply and Sanitation', viewValue: '2215 : Water Supply and Sanitation' },
    { value: '9 : Ecology and Environment', viewValue: '3435 : Ecology and Environment' },
    { value: '10 : Capital Outlay on Urban Development', viewValue: '4217 : Capital Outlay on Urban Development' },
    { value: '11 : General Education', viewValue: '2202 : General Education' },

  ];

  billType_list: ListValue[] = [
    { value: '1', viewValue: 'GTR-30 - Pay Bill' },
    { value: '2', viewValue: 'GTR-45 - TA Bill' },
    { value: '3', viewValue: 'GTR-40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 - Advance Bill' }
  ];

  ELEMENT_DATA: VoucherList[] =
    [
      {

        voucherDate: '23-JAN-2017',
        billRefNo: '5001',
        tokenNumber: '5411',
        inwardedDate: '23-JAN-2017',
        bType: 'GTR 30 - Pay Bill',
        cardexNumber: '50',
        majorHead: '2011',
        netAmount: '61,250.00',
        postedBy: 'M D ajmari'
      },

      {

        voucherDate: '09-APR-2018',
        billRefNo: '5002',
        tokenNumber: '5110',
        inwardedDate: '09-APR-2018',
        bType: 'GTR 30 - Pay Bill',
        cardexNumber: '56',
        majorHead: '2054',
        netAmount: '17,000.00',
        postedBy: 'B H Patel'

      },
      {

        voucherDate: '19-JUL-2018',
        billRefNo: '5003',
        tokenNumber: '5412 ',
        inwardedDate: '19-JUL-2018',
        bType: 'GTR 35 - TA Bill',
        cardexNumber: '900',
        majorHead: '2054',
        netAmount: '500.00',
        postedBy: 'M M Kapadiya'

      },
      {

        voucherDate: '24-SEPT-2019',
        billRefNo: '5004',
        tokenNumber: '5115',
        inwardedDate: '24-SEPT-2019',
        bType: 'GTR 30 - Pay Bill',
        cardexNumber: '51',
        majorHead: '8658',
        netAmount: '1,200.00',
        postedBy: 'Pratik k Shah'

      },
    ];

  displayedColumns: string[] = ['srno', 'voucherNo', 'voucherDate', 'billRefNo', 'tokenNumber', 'inwardedDate',
    'bType', 'cardexNumber', 'majorHead', 'netAmount', 'postedBy'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  ngOnInit() {
    this.voucherListForm = this.fb.group({
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

import { group } from '@angular/animations';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ListValue, VoucherDetails } from 'src/app/model/paoModel';

@Component({
  selector: 'app-voucher-detail-posting',
  templateUrl: './voucher-detail-posting.component.html',
  styleUrls: ['./voucher-detail-posting.component.css']
})
export class VoucherDetailPostingComponent implements OnInit {
  // Date
  maxDate = new Date();
  // Form Group
  voucherDetailPostingForm: FormGroup;
  // For COntrol
  majorHeadCtrl: FormControl = new FormControl();
  billTypeCtrl: FormControl = new FormControl();
  selection = new SelectionModel<any>(true, []);
  private paginator: MatPaginator;
  private sort: MatSort;

  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog,) { }

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
  ELEMENT_DATA: VoucherDetails[] =
    [
      {
        billRefNo: '1',
        tokenNumber: '1728',
        voucherDate: '11/04/2018',
        inwardedDate: '10/04/2018',
        bType: 'GTR 30 - Pay Bill',
        cardexNumber: '56',
        majorHead: '2054',
        netAmount: '4560.00',
      },
      {
        billRefNo: '5001',
        tokenNumber: '5420',
        voucherDate: '08/03/2017',
        inwardedDate: '08/03/2017',
        bType: 'GTR 35 - TA Bill',
        cardexNumber: '51',
        majorHead: '2054',
        netAmount: '5,000.00',
      },
      {
        billRefNo: '5002',
        tokenNumber: '5422',
        voucherDate: '09/03/2017',
        inwardedDate: '09/03/2017',
        bType: 'GTR 29 - Medical Bill',
        cardexNumber: '51',
        majorHead: '2054',
        netAmount: '8,000.00',
      },

      {
        billRefNo: '5001',
        tokenNumber: '5118',
        voucherDate: '14/11/2019',
        inwardedDate: '14/11/2019',
        bType: 'GTR 85 - Advance Bill',
        cardexNumber: '1',
        majorHead: '8009',
        netAmount: '1,20,000.00',
      },
    ];
  // Table Source
  displayedColumns: string[] = ['srno', 'billRefNo', 'tokenNumber', 'voucherDate', 'inwardedDate',
    'bType', 'cardexNumber', 'majorHead', 'netAmount', 'action'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  ngOnInit() {
    this.voucherDetailPostingForm = this.fb.group({
      billRefNo: [''],
      tokenNo: [''],
      voucherDate: [''],
      inwardedDate: [''],
      billType: [''],
      cardexNo: [''],
      majorHead: [''],
      netAmount: [''],
    });
  }
  searchMlaAuthorityData() {

  }
}

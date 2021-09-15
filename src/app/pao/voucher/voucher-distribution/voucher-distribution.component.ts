import { group } from '@angular/animations';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ListValue, VoucherDistribution } from 'src/app/model/paoModel';
@Component({
  selector: 'app-voucher-distribution',
  templateUrl: './voucher-distribution.component.html',
  styleUrls: ['./voucher-distribution.component.css']
})
export class VoucherDistributionComponent implements OnInit {
  // Date
  maxDate = new Date();
  // Form Group
  distributeVouchersForm: FormGroup;

  majorHeadCtrl: FormControl = new FormControl();
  selection = new SelectionModel<any>(true, []);
  private paginator: MatPaginator;
  private sort: MatSort;

  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog,) { }

  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    { value: '2', viewValue: '5475:Capital Outlay on other General Economics Services' },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' },
  ];

  ELEMENT_DATA: VoucherDistribution[] =
    [
      {
        majorHead: '2054',
        voucherNumber: '2',
        totalAmount: '300.00',
        distributeTo: 'Shri. Pratik K Shah',
      },
    ];
  auditor_list: ListValue[] = [
    {
      value: '1', viewValue: 'Shri. Pratik Shah',
    },
    {
      value: '1', viewValue: 'Shri.Sanket Modi',
    },];
  // Table Source

  displayedColumns: string[] = ['checkBox', 'majorHead', 'voucherNumber', 'totalAmount', 'distributeTo', 'action'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  ngOnInit() {
    this.distributeVouchersForm = this.fb.group({
      voucherDate: [''],
      majorHead: [''],
      distributeToctrl: ['1'],
    });
  }

  searchMlaAuthorityData() {

  }
}

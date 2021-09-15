
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CloseDialogBoxComponent } from '../../close-dialog-box/close-dialog-box.component';
import { EaDirectives } from 'src/app/common/directive/ea-directive';


@Component({
  selector: 'app-pension-voucher-list',
  templateUrl: './pension-voucher-list.component.html',
  styleUrls: ['./pension-voucher-list.component.css']
})
export class PensionVoucherListComponent implements OnInit {
  directiveObject = new EaDirectives(this.dialog);
  initiatiomdate = new Date((new Date()));
  // FormGroup
  pensionVoucherListForm: FormGroup;
  // FormControl
  majorHeadCtrl: FormControl = new FormControl();
  billTypeCtrl: FormControl = new FormControl();
  maxDate = new Date();

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
        voucherDate: '19-Aug-2018',
        billRefNo: '10001',
        tokenNo: '5412 ',
        inwardedDate: '19-Aug-2018',
        bType: 'Pension Medical Reimbursment',
        cardexNumber: '900',
        majorHead: '2054',
        netAmount: '1200.00',
        grossAmount: '1200.00',
        deductionA: '0.00',
        voucherNo: '1'
      },
      {

        voucherDate: '24-Aug-2019',
        billRefNo: '10002',
        tokenNo: '5115',
        inwardedDate: '24-Aug-2019',
        bType: 'Pension Medical Reimbursment',
        cardexNumber: '51',
        majorHead: '8658',
        netAmount: '100.00',
        grossAmount: '100.00',
        deductionA: '0.00',
        voucherNo: '2'

      },
    ];
  // Display Columns
  displayedColumns: string[] = ['srNo', 'billRefNo', 'tokenNo', 'voucherDate', 'inwardedDate', 'bType',
    'cardexNumber', 'majorHead', 'netAmount', 'grossAmount', 'deductionA', 'voucherNo'];
  // Table Source
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.pensionVoucherListForm = this.fb.group({
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
      grossAmount: [''],

    });
  }

  searchPensionVoucher() {

  }
}

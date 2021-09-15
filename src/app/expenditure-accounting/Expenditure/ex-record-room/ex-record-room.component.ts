
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CloseDialogBoxComponent } from '../../close-dialog-box/close-dialog-box.component';
import { EaDirectives } from 'src/app/common/directive/ea-directive';


@Component({
  selector: 'app-ex-record-room',
  templateUrl: './ex-record-room.component.html',
  styleUrls: ['./ex-record-room.component.css']
})
export class ExRecordRoomComponent implements OnInit {
  directiveObject = new EaDirectives(this.dialog);
  // FormGroup
  voucherListForm: FormGroup;
  initiatiomdate = new Date((new Date()));

  // FormControl
  majorHeadCtrl: FormControl = new FormControl();
  billTypeCtrl: FormControl = new FormControl();
  selection = new SelectionModel<any>(true, []);
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
        voucherNo: '10001',
        voucherDate: '19-May-2018',
        billCtrlNo: '12/17/1708/2123',
        tokenNumber: '5412 ',
        inwardedDate: '19-May-2018',
        bType: 'GTR 35 - TA Bill',
        cardexNumber: '900',
        majorHead: '2054',
        netAmount: '120141.00',
        grossAmount: '120141.00'

      },
      {
        voucherNo: '10002',
        voucherDate: '24-May-2019',
        billCtrlNo: '12/17/1708/2123',
        tokenNumber: '5115',
        inwardedDate: '24-May-2019',
        bType: 'GTR 30 - Pay Bill',
        cardexNumber: '51',
        majorHead: '8658',
        netAmount: '100.00',
        grossAmount: '100.00'

      },
    ];
  // Display Columns
  displayedColumns: string[] = ['srNo', 'voucherNo', 'voucherDate', 'billCtrlNo', 'bType', 'inwardedDate',
    'cardexNumber', 'majorHead', 'netAmount', 'grossAmount', 'action'];
  // Table Source
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  ngOnInit() {
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
      grossAmount: [''],

    });
  }

  searchPostedVoucher() {

  }

}

import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
import { BlockCpin, ListValue, ModifiedTable } from 'src/app/model/epaoModel';

@Component({
  selector: 'app-block-cpin',
  templateUrl: './block-cpin.component.html',
  styleUrls: ['./block-cpin.component.css']
})
export class BlockCpinComponent implements OnInit {

  // date
  todayDate = Date.now();
  initiatiomdate = new Date();
  maxDate = new Date();
  // variable
  errorMessages = EPOAMessage;
  isSubmitted = false;
  // FormGroup
  blockCpinForm: FormGroup;
  // FormControl
  typeCtrl: FormControl = new FormControl();
  // table data
  ELEMENT_DATA: BlockCpin[] = [
    {
      cpin: '',
      cin: '',
      status: '',
      cpIn: '',
      fileNo: '',
      amountGovt: '',
      fileDate: ''
    },
  ];
  displayedColumns = ['srNo', 'cpin', 'cin', 'status', 'fileNo', 'fileDate', 'amountGovt'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  MODIFIED_DATA: ModifiedTable[] = [
    {
      desc: 'SGST',
      tax: '15121.00',
      interest: '0.00',
      fees: '0.00',
      penalty: '0.00',
      others: '0.00',
      rat: '0.00',
      total: '15121.00'
    },
    {
      desc: 'CGST',
      tax: '15121.00',
      interest: '0.00',
      fees: '0.00',
      penalty: '0.00',
      others: '0.00',
      rat: '0.00',
      total: '15121.00'
    },
    {
      desc: 'IGST',
      tax: '0.00',
      interest: '0.00',
      fees: '0.00',
      penalty: '0.00',
      others: '0.00',
      rat: '0.00',
      total: '0.00'
    },
    {
      desc: 'Cess',
      tax: '0.00',
      interest: '0.00',
      fees: '0.00',
      penalty: '0.00',
      others: '0.00',
      rat: '0.00',
      total: '0.00'
    },
    {
      desc: 'Total',
      tax: '30242.00',
      interest: '0.00',
      fees: '0.00',
      penalty: '0.00',
      others: '0.00',
      rat: '0.00',
      total: '30242.00'
    },
  ];
  modifiedTableCols = ['desc', 'tax', 'interest', 'fees', 'penalty', 'others', 'rat', 'total'];
  modifieddataSource = new MatTableDataSource(this.MODIFIED_DATA);
  // List Details
  type_list: ListValue[] = [
    { value: '1', viewValue: 'CPIN' },
    { value: '2', viewValue: 'CIN' },
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.blockCpinForm = this.fb.group({
      cinNo: [''],
      type: ['2'],
    });
  }

}

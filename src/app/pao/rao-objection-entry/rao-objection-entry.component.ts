import { paoMessage } from './../../common/error-message/common-message.constants';
import { ListValue } from './../../model/common-grant';
import { MatTableDataSource } from '@angular/material';
import { RaoObjectionEntry } from './../../model/rao-object-entry';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rao-objection-entry',
  templateUrl: './rao-objection-entry.component.html',
  styleUrls: ['./rao-objection-entry.component.css']
})
export class RaoObjectionEntryComponent implements OnInit {
  // Form Group
  raoObjectEntryForm: FormGroup;
  resultObjectionAndSettelmentDetailsForm: FormGroup;
  // Date
  maxDate: Date;
  // Variable
  isSearch: boolean = false;
  isChecked: boolean = false;
  errorMessages = paoMessage;
  // Form Control
  majorHeadCtrl: FormControl = new FormControl();
  // Table Source
  Element_Data: RaoObjectionEntry[] = [
    {
      checkbox: false,
      voucherNo: '1',
      voucherDate: '24/09/2019',
      billRefNo: '5001',
      tokenNo: '5115',
      voucherAmount: '1200.00',
      billType: 'Simple Recipt for Online Bill',
      cardexNo: '51',
      ddoName: 'Pay & Accounts office GNR',
      majorHead: '8658',

    }
  ];


  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '2054 : Treasury and Accounts Administration' }
  ];
  displayedColumns: any[] = ['checkbox',
    'voucherNo',
    'voucherDate',
    'billRefNo',
    'tokenNo',
    'voucherAmount',
    'billType',
    'cardexNo',
    'ddoName',
    'majorHead'];

  dataSource = new MatTableDataSource<RaoObjectionEntry>(this.Element_Data);

  constructor(private fb: FormBuilder) {
    this.maxDate = new Date();
  }

  ngOnInit() {
    this.raoObjectEntryForm = this.fb.group({
      voucherNo: [''],
      voucherDate: [''],
      majorHead: ['']
    });
    this.resultObjectionAndSettelmentDetailsForm = this.fb.group({
      employeeName: [''],
      raoLetterNo: [''],
      settelmentAmount: [''],
      settelmentDate: [''],
      settelmentLetterNo: [''],
      objection: [''],
      remarks: [''],
    });
  }

  search() {

    if ((this.raoObjectEntryForm.controls.voucherNo.value == 1
      && this.raoObjectEntryForm.controls.voucherDate.value.toDateString == new Date(2019, 8, 24).toDateString)
    ) {
      this.isSearch = true;
    }
    else {
      this.isSearch = false;
    }
  }
  selectAll() {

  }
  checkboxValueChange() {
    this.isChecked = !this.isChecked;

  }

}

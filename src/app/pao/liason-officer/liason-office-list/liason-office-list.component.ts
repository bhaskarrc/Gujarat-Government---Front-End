import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDatepickerInputEvent, MatDialog } from '@angular/material';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ListValue, LiasonOfficerList } from 'src/app/model/paoModel';

const ELEMENT_DATA: LiasonOfficerList[] = [
  {
    billAmount: '0.00',
    billtypes: '30',
    demand: '251',
    cardexNo: '4',
    voucherDate: '02-Feb-2020 11:00AM',
    voucherNo: '04',
    majorHead: '2054',
    tcbBll: '100.00',
    damand: '054',
    PayeeName: 'Mr. Abc',
    chequeNo: '1201210',
    chequeDate: '8-Feb-2020  12:00AM',
    chequeAmount: '100.00',
    clearDate: '8-May-2020 10:00AM'
  }
];

@Component({
  selector: 'app-liason-office-list',
  templateUrl: './liason-office-list.component.html',
  styleUrls: ['./liason-office-list.component.css']
})
export class LiasonOfficeListComponent implements OnInit {
  // Form Group
  liasonOfficeListForm: FormGroup;
  // Form Control
  majorHeadCtrl: FormControl = new FormControl();
  // Variable
  isvisible = false;
  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog,) { }
  // Date
  maxDate = new Date();
  // Table Source
  displayedBrowseColumns = ['srNo', 'voucherNo', 'voucherDate', 'cardexNo',
    'damand', 'billType', 'majorHead', 'billAmount', 'PayeeName', 'chequeNo', 'chequeDate', 'clearDate', 'chequeAmount'];
  dataSourceBrowse = new MatTableDataSource(ELEMENT_DATA);
  // List
  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    { value: '2', viewValue: '5475:Capital Outlay on other General Economics Services' },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' },
  ];

  ngOnInit() {
    this.liasonOfficeListData();
  }

  liasonOfficeListData() {
    this.liasonOfficeListForm = this.fb.group({
      billtypes: [''],
      demand: [''],
      cardexNo: [''],
      voucherDate: [''],
      voucherName: [''],
      majorHead: [''],
      tcbBll: [''],
      chequeAmount: [''],
      chequeDate: [''],
      chequeNo: [''],
      partyName: [''],
      chNo: [''],
      chDate: ['']
    });
  }

  search() {
    this.isvisible = true
  }

}

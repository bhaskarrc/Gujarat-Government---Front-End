import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDatepickerInputEvent, MatDialog } from '@angular/material';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LiasonOfficeDataEntry } from 'src/app/model/paoModel';



const ELEMENT_DATA: LiasonOfficeDataEntry[] = [
  {
    billAmount: '0.00',
    billtypes: '30',
    demand: '251',
    cardexNo: '4',
    voucherDate: '02-Feb-2020',
    voucherNo: '04',
    majorHead: '2054',
    tcbBll: '100.00',
    damand: '054',
    partyName: 'Mr. Abc',
    chequeNo: '1201210',
    chequeDate: '8-Feb-2020',
    chequeAmount: '100.00',
  }
];

@Component({
  selector: 'app-liason-office-data-entry',
  templateUrl: './liason-office-data-entry.component.html',
  styleUrls: ['./liason-office-data-entry.component.css']
})
export class LiasonOfficeDataEntryComponent implements OnInit {
  // FOrm Group
  liasonOfficeForm: FormGroup;
  // Form Ontrol
  billtypeCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  partyNameCtrl: FormControl = new FormControl();
  // Variable
  isvisible = false;
  chequeisvisible = false;
  // Lists
  partyName_list: any[] = [
    { value: '1', viewValue: 'Mr. Abx' },
    { value: '2', viewValue: 'Pratik K Shah' },
  ];
  billtype_list: any[] = [
    { value: '1', viewValue: 'GTR-30 - Pay Bill' },
    { value: '2', viewValue: 'GTR-45 - TA Bill' },
    { value: '3', viewValue: 'GTR-40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 - Advance Bill' }
  ];

  tcbill_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '1', viewValue: 'No' },
  ];
  majorHead_list: any[] = [
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

  // Table Source
  displayedBrowseColumns = ['srNo', 'voucherNo', 'voucherDate', 'cardexNo', 'damand', 'billType', 'majorHead', 'billAmount', 'action'];
  maxDate = new Date();
  dataSourceBrowse = new MatTableDataSource(ELEMENT_DATA);
  chequedisplayedBrowseColumns = ['srNo', 'partyName', 'chequeNo', 'chequeDate', 'chequeAmount', 'action'];
  chequedataSourceBrowse = new MatTableDataSource(ELEMENT_DATA);
  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog,) { }
  ngOnInit() {
    this.liasonOfficeData();
  }
  liasonOfficeData() {
    this.liasonOfficeForm = this.fb.group({
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
      partyName: ['']
    });
  }


  addData() {
    this.isvisible = true;
  }
  chequeAddData() {
    this.chequeisvisible = true;
  }
  deleteentry(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }
  deletecheque(index) {
    this.chequedataSourceBrowse.data.splice(index, 1);
    this.chequedataSourceBrowse = new MatTableDataSource(this.chequedataSourceBrowse.data);
  }
}

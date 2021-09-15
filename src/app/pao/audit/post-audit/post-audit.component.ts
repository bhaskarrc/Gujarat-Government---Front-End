import { group } from '@angular/animations';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { paoMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue, PostAudit } from 'src/app/model/paoModel';
@Component({
  selector: 'app-post-audit',
  templateUrl: './post-audit.component.html',
  styleUrls: ['./post-audit.component.css']
})
export class PostAuditComponent implements OnInit {
  // Form Group
  postAuditForm: FormGroup;
  // Form COntrol
  majorHeadCtrl: FormControl = new FormControl();
  auditorCtrl: FormControl = new FormControl();
  // Variable
  errorMessages = paoMessage;
  isSubmitted = false;
  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog,) { }
  // Lists
  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    { value: '2', viewValue: '5475:Capital Outlay on other General Economics Services' },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' },
  ];

  auditorName_list: ListValue[] = [
    { value: '1', viewValue: 'Mr. Shah' },
    { value: '2', viewValue: 'Mr. Modi' },
  ];

  ELEMENT_DATA: PostAudit[] =
    [
      {
        voucherNumber: '1',
        voucherDate: '24-04-2019',
        billRefNo: '5001',
        tokenNo: '5115',
        billAmount: '1200.00',
        billType: 'GTR 30 - Pay Bill',
        cardexNumber: '51',
        officeName: 'Pay & Accounts Office GNR',
        majorHead: '2054',
        billCategory: 'Regular',
        postAuditDate: '05-03-2020'
      },
      {
        voucherNumber: '2',
        voucherDate: '24-04-2019',
        billRefNo: '5002',
        tokenNo: '5116',
        billAmount: '1000.00',
        billType: 'GTR 35 - TA Bill',
        cardexNumber: '51',
        officeName: 'Pay & Accounts Office GNR',
        majorHead: '2054',
        billCategory: 'Regular',
        postAuditDate: '05-03-2020'
      },

      {
        voucherNumber: '3',
        voucherDate: '24-04-2019',
        billRefNo: '5003',
        tokenNo: '5117',
        billAmount: '10.00',
        billType: 'GTR 29 - Medical Bill',
        cardexNumber: '51',
        officeName: 'Pay & Accounts Office GNR',
        majorHead: '2054',
        billCategory: 'Regular',
        postAuditDate: '05-03-2020'
      },

    ];
  auditor_list: ListValue[] = [
    {
      value: '1', viewValue: 'Shri. Pratik Shah',
    },
    {
      value: '1', viewValue: 'Shri.Sanket Modi',
    },
  ];


  displayedColumns: string[] = ['checkBox', 'voucherNumber', 'voucherDate', 'billRefNo', 'tokenNo', 'billAmount',
    'billType', 'cardexNumber', 'officeName', 'majorHead', 'billCategory', 'postAuditDate',
    'action'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  maxDate = new Date();
  ngOnInit() {
    this.postAuditForm = this.fb.group({
      tokenNumber: ['', Validators.required],
      fromDate: [''],
      toDate: [''],
      auditor: [''],
      majorHead: [''],
      distributeToctrl: ['1'],

    });
  }
  // tslint:disable-next-line:whitespace
  // tslint:disable-next-line:member-ordering
  showSearch = false;
  clickSearch() {
    this.showSearch = true;
    if (this.postAuditForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }


  search() {

  }

}

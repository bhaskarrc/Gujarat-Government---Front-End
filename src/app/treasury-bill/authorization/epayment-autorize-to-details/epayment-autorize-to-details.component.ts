import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';


import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { EpaymentAuthorizeToDetails, ListValue } from 'src/app/model/treasury-bill';



@Component({
  selector: 'app-epayment-autorize-to-details',
  templateUrl: './epayment-autorize-to-details.component.html',
  styleUrls: ['./epayment-autorize-to-details.component.css']
})
export class EpaymentAutorizeToDetailsComponent implements OnInit {
  // Table Content
  ELEMENT_DATA: EpaymentAuthorizeToDetails[] = [
    {
      partyNameL: 'Test Ekuber',
      accountnoL: '1982019291',
      ifsccodeL: 'SBIN0000337',
      pponoL: 'PR-1/DPPF/98772',
      amount: '100.00',
      paymentrefno: '6104160004201809121',
      paybydate: '02-Mar-2019',
      settlementno: '05-Apr-2019',
      schemecode: '0172054000970100'
    }
  ];
  // Date
  todayDate = new Date();
  // Form Group
  epaymentAuthorized: FormGroup;
  // Form Controls
  partynameCtrl: FormControl = new FormControl();
  officeNameCtrl: FormControl = new FormControl();
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder,) { }
  // Table Source
  newdisplayedColumns: string[] = ['srno', 'partyNameL', 'accountnoL', 'ifsccodeL', 'amount', 'paymentrefno', 'paybydate'];
  newdataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  // Lists
  party_list: ListValue[] = [{
    value: '1', viewValue: 'SARSWATAM SANCHALIT HIGH SCHOOL, GUNDALA '
  },
  { value: '2', viewValue: 'SARSWATAM SANCHALIT HIGH SCHOOL, KHAVDA  ' },
  { value: '3', viewValue: 'SARSWATAM SANCHALIT HIGH SCHOOL, KOTDA-CHAKAR ' },
  { value: '4', viewValue: 'SARSWATAM SANCHALIT HIGH SCHOOL, KOTDI MAHADEVPURI  ' },
  { value: '5', viewValue: 'SARSWATAM SANCHALIT HIGH SCHOOL, MANJAL  ' },
  ];

  office_list: ListValue[] = [{
    value: '1', viewValue: 'SARSWATAM SANCHALIT HIGH SCHOOL, GUNDALA '
  },
  { value: '2', viewValue: 'SARSWATAM SANCHALIT HIGH SCHOOL, KHAVDA  ' },
  { value: '3', viewValue: 'SARSWATAM SANCHALIT HIGH SCHOOL, KOTDA-CHAKAR ' },
  { value: '4', viewValue: 'SARSWATAM SANCHALIT HIGH SCHOOL, KOTDI MAHADEVPURI  ' },
  { value: '5', viewValue: 'SARSWATAM SANCHALIT HIGH SCHOOL, MANJAL  ' },
  ];


  ngOnInit() {
    this.epaymentAuthorizedData();
  }
  epaymentAuthorizedData() {
    this.epaymentAuthorized = this.fb.group({
      // tokennumber:[''],
      //   epaymentcode:[''],
      ddono: [''],
      cardexno: [''],
      officeName: [''],
      partyname: [''],
      ifscCode: [''],
      accNo: [''],
      amount: [''],
      payRefNumber: [''],
    });
  }
  // Navigation
  gotopage() {
    this.router.navigate(['/treasury-bill/saved-bill/bill-prepration-fom']);
  }
}

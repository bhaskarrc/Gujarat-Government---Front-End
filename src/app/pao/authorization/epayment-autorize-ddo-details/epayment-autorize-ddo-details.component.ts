import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';


import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/paoModel';
import { EpaymentAuthorizeToDetails } from 'src/app/model/treasury-bill';



@Component({
  selector: 'app-epayment-autorize-ddo-details',
  templateUrl: './epayment-autorize-ddo-details.component.html',
  styleUrls: ['./epayment-autorize-ddo-details.component.css']
})
export class EpaymentAutorizeDdoDetailsComponent implements OnInit {

  // Content Table Source
  ELEMENT_DATA: EpaymentAuthorizeToDetails[] = [
    {
      partyNameL: 'Test Ekuber',
      accountnoL: '1982019291',
      ifsccodeL: 'SBIN0000337',
      pponoL: 'PR-1/DPPF/98772',
      amount: '100',
      paymentrefno: '6104160004201809121',
      paybydate: '02-Feb-2019',
      settlementno: '05-Mar-2019',
      schemecode: '0172054000970100'
    }
  ];
  // Form Group
  epaymentAuthorized: FormGroup;
  // Form Control
  partynameCtrl: FormControl = new FormControl();
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder,) { }
  // Table Source
  newdisplayedColumns: string[] = ['srno', 'partyNameL', 'accountnoL', 'ifsccodeL', 'amount', 'paymentrefno',
    'paybydate'];
  newdataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  party_list: ListValue[] = [{
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
      tokennumber: [''],
      epaymentcode: [''],
      partyname: [''],
      ddono: [''],
      cardexno: [''],
      officeName: [''],
      ifscCode: [''],
      accNo: [''],
      amount: [''],
      payRefNumber: [''],
    });
  }
  // Naavigation

  gotopage() {
    this.router.navigate(['/pao/saved-bill/bill-prepration-fom']);
  }

}

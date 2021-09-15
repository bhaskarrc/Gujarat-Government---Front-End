import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { LoadBalancerAOListing, ListValue } from 'src/app/model/epaoModel';

@Component({
  selector: 'app-load-balancer-ha-listing',
  templateUrl: './load-balancer-ha-listing.component.html',
  styleUrls: ['./load-balancer-ha-listing.component.css']
})
export class LoadBalancerHaListingComponent implements OnInit {
  ELEMENT_DATA: LoadBalancerAOListing[] = [
    {
      bankName: 'HDFC Bank',
      noOfChallan: '500',
      amount: '5000000.00',
      totalChallan: '500',
      totalAmount: '5000000.00',
      branch: 'Receipt Branch 1',
      saDA: 'M B Patel',
      fromSaDA: 'H A Mehta',
      toSaDA: 'M K Patel',
      challanAmount: '2000.00',
      bank: 'HDFC Bank'
    },
    {
      bankName: 'Bank Of Baroda',
      noOfChallan: '500',
      amount: '5000000.00',
      totalChallan: '500',
      totalAmount: '5000000.00',
      branch: 'Receipt Branch 2',
      saDA: 'B G Patel',
      fromSaDA: 'H A Mehata',
      toSaDA: 'H A PAtel',
      challanAmount: '2000.00',
      bank: 'State Bank Of India'
    },
    {
      bankName: 'State Bank Of India',
      noOfChallan: '500',
      amount: '5000000.00',
      totalChallan: '500',
      totalAmount: '5000000.00',
      branch: 'Receipt Branch 3',
      saDA: 'H A Mehta',
      fromSaDA: 'H A Mehta',
      toSaDA: 'H M Patel',
      challanAmount: '2000.00',
      bank: 'State Bank Of India'
    },

  ];

  // FormGroup
  scrollForm: FormGroup;
  // date
  maxDate = new Date();
  todayDate = new Date();
  // table source
  newdataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  newdisplayedColumns: string[] = ['srNo', 'bankName', 'saDa', 'noOfChallan', 'amount', 'totalChallan', 'totalAmount',
    'toSaDA', 'challanAmount', 'newaction'];
  selection = new SelectionModel<any>(true, []);
  // FormControl
  bankCtrl: FormControl = new FormControl();
  bankNameCtrl: FormControl = new FormControl();
  saDaCtrl: FormControl = new FormControl();
  fromSaDaCtrl: FormControl = new FormControl();
  toSaDaCtrl: FormControl = new FormControl();
  // Lists
  branch_list: ListValue[] = [{
    value: '1', viewValue: ' Receipt Branch 1',
  },
  {
    value: '2', viewValue: 'Receipt Branch 2',
  }
    ,
  {
    value: '3', viewValue: 'Receipt Branch 3',
  }
  ];
  sada_list: ListValue[] = [{
    value: '1', viewValue: ' H A Mehta',
  },
  {
    value: '2', viewValue: 'A B Patel',
  }
    ,
  {
    value: '2', viewValue: 'B G Patel',
  }
  ];
  bank_list: ListValue[] = [{
    value: '1', viewValue: ' State Bank Of India',
  },
  {
    value: '2', viewValue: 'Bank Of Baroda',
  }
    ,
  {
    value: '2', viewValue: 'HDFC Bank',
  }
  ];

  bankName_list: ListValue[] = [{
    value: '1', viewValue: 'CN87484165118421',
  },
  {
    value: '2', viewValue: 'CN87484165118421',
  },
  {
    value: '3', viewValue: 'CN87484165118421',
  }
  ];
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  public errorMessages;
  ngOnInit() {
    this.errorMessages = EPOAMessage;
    this.scrollData();

  }
  scrollData() {
    this.scrollForm = this.fb.group({
      bankName: [''],
      saDa: [''],
      noOfChallan: [''],
      amount: [''],
      totChallan: [''],
      totAmount: [''],
      fromSaDa: [''],
      toSaDa: [''],
      bank: [''],
      chaAmount: [''],
    });
  }

}

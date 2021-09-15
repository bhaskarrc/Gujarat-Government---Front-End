import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkFlowEPaoComponent } from '../work-flow-e-pao/work-flow-e-pao.component';
import { LoadBalancerAO, ListValue } from 'src/app/model/epaoModel';
import { EPaoDirectives } from 'src/app/common/directive/epao';

@Component({
  selector: 'app-load-balancer-ha',
  templateUrl: './load-balancer-ha.component.html',
  styleUrls: ['./load-balancer-ha.component.css']
})
export class LoadBalancerHaComponent implements OnInit {
  ELEMENT_DATA: LoadBalancerAO[] = [
    {
      bankName: 'Bank Of Baroda',
      saDa: 'M K Patel',
      noOfChallan: '5000.00',
      amount: '10000.00',
      totalChallan: '5000.00',
      totalAmount: '5000000.00',
      branch: 'Receipt Branch 1'
    },
    {
      bankName: 'State Bank Of India',
      saDa: 'P M Gosai',
      noOfChallan: '5000.00',
      amount: '20000.00',
      totalChallan: '5000.00',
      totalAmount: '5000000.00',
      branch: 'Receipt Branch 2'
    },
    {
      bankName: 'HDFC Bank',
      saDa: 'J K Lala',
      noOfChallan: '5000.00',
      amount: '30000.00',
      totalChallan: '5000.00',
      totalAmount: '5000000.00',
      branch: 'Receipt Branch 3'
    },

  ];
  // form gropu
  scrollForm: FormGroup;
  // date
  maxDate = new Date();
  todayDate = new Date();
  // table source
  newdataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  newdisplayedColumns: string[] = ['srNo', 'bankName', 'saDa', 'noOfChallan', 'amount', 'toSaDA', 'challanAmount'];
  newdisplayedFooterColumns: string[] = ['saDa', 'noOfChallan', 'amount', 'toSaDA', 'challanAmount'];
  selection = new SelectionModel<any>(true, []);
  // FormControl
  bankNameCtrl: FormControl = new FormControl();
  branchCtrl: FormControl = new FormControl();
  branch2Ctrl: FormControl = new FormControl();
  bankCtrl: FormControl = new FormControl();
  // Lists
  bankName_list: ListValue[] = [
    { value: '1', viewValue: 'CN87484165118421' },
    { value: '2', viewValue: 'CN87484165118421' },
    { value: '3', viewValue: 'CN87484165118421' },
  ];
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
    value: '1', viewValue: 'K M Shah',
  },
  {
    value: '2', viewValue: 'P H Mehta',
  }
    ,
  {
    value: '2', viewValue: 'Z B Patel',
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
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  directiveObject = new EPaoDirectives(this.router, this.dialog);
  public errorMessages;
  ngOnInit() {
    this.errorMessages = EPOAMessage;
    this.scrollData();

  }
  scrollData() {
    this.scrollForm = this.fb.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      bankName: ['1'],
    });
  }

  // navigation
  navigate() {
    this.router.navigate(['./e-pao/load-balancer-ha-listing']);
  }


  totalChallan(): number {
    let amountExp = 0;
    this.newdataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.noOfChallan);
    });
    return amountExp;
  }

  totalAmmount(): number {
    let amountExp = 0;
    this.newdataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.amount);
    });
    return amountExp;
  }
}

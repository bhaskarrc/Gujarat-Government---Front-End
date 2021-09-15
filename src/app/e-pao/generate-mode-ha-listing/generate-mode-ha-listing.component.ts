import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatDialogRef } from '@angular/material';
import { WorkFlowEPaoComponent } from '../work-flow-e-pao/work-flow-e-pao.component';
import { SelectionModel } from '@angular/cdk/collections';
const ELEMENT_DATA: any[] = [
  {
    status: 'Forwarded',
    gstIN: '4254432',
    mOEAmount: '550.00',
    cin: '4654651',
    mOEType: 'MOE',
    partyName: 'A K Mehta',
    rbiAmount: '500.00',
    gstAmount: '500.00',
    bank: 'Branch 1',
    govCreditDate: '12-Feb-20',
    paymentDate: '19-Dec-19',
    remarks: '-'
  },
];
@Component({
  selector: 'app-generate-mode-ha-listing',
  templateUrl: './generate-mode-ha-listing.component.html',
  styleUrls: ['./generate-mode-ha-listing.component.css']
})
export class GenerateModeHaListingComponent implements OnInit {

  generateMoeForm: FormGroup;
  maxDate = new Date();
  todayDate = new Date();
  bankCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  bank_list: any[] = [{
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
  type_list: any[] = [{
    value: '1', viewValue: ' RAT Clear',
  },
  {
    value: '2', viewValue: 'MOE Resolution',
  }
  ];
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  newdisplayedColumns: string[] = ['srNo', 'gstIN', 'partyName', 'cin', 'paymentDate', 'gstAmount',
    'rbiAmount', 'mOEType', 'bank', 'mOEAmount', 'govCreditDate', 'remarks', 'newaction'];
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder,) { }

  ngOnInit() {

    this.generateMoeData();

  }
  generateMoeData() {
    this.generateMoeForm = this.fb.group({
      paymentDate: [''],
      gcDate: [''],
      bank: [''],
      cin: [''],
      gstin: [''],
      partyName: [''],
      gstAmount: [''],
      rbiAmount: [''],
      moeType: [''],
      amuntType: [''],
      remarks: ['']
    });

  }
}


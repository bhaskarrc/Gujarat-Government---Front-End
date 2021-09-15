import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatDialogRef } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { AcountScreen, ListValue } from 'src/app/model/epaoModel';
import { EPaoDirectives } from 'src/app/common/directive/epao';

@Component({
  selector: 'app-accounting-screen-listing',
  templateUrl: './accounting-screen-listing.component.html',
  styleUrls: ['./accounting-screen-listing.component.css']
})
export class AccountingScreenListingComponent implements OnInit {
  // FormGroup
  ELEMENT_DATA: AcountScreen[] = [
    {
      status: 'Forwarded',
      cin: '4254432',
      amount: '10000.00',
      partyName: 'A K Mehta',
      govCreditDate: '12-Feb-20',
      scrollDate: '19-Dec-19',
      paymentDate: '19-Dec-19',
      remarks: '-'
    },
  ];
  accountScreenForm: FormGroup;
  maxDate = new Date();
  todayDate = new Date();
  // FormControl
  bankCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  // List
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
  type_list: ListValue[] = [{
    value: '1', viewValue: ' RAT Clear',
  },
  {
    value: '2', viewValue: 'MOE Resolution',
  }
  ];
  // Table Source
  newdataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  selection = new SelectionModel<any>(true, []);
  newdisplayedColumns: string[] = ['srNo', 'cin', 'govCreditDate', 'amount', 'scrollDate', 'paymentDate', 'partyName',
    'remarks', 'status', 'newaction'];
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  directiveObject = new EPaoDirectives(this.router, this.dialog);
  public errorMessages;
  ngOnInit() {
    this.errorMessages = EPOAMessage;
    this.accountScreenData();

  }
  accountScreenData() {
    this.accountScreenForm = this.fb.group({
      fromDate: [''],
      toDate: [''],
      babk: [''],
      type: ['']
    });

  }

  // Navigation
  navigate() {
    this.router.navigate(['./e-pao/account-screen']);
  }
  scrollData() {
    this.accountScreenForm = this.fb.group({
      fromDate: [''],
      toDate: ['']
    });
  }

}

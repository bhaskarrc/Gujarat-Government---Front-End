import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ppoMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-monthly-pension-bill',
  templateUrl: './monthly-pension-bill.component.html',
  styleUrls: ['./monthly-pension-bill.component.css']
})
export class MonthlyPensionBillComponent implements OnInit {

  // variables
  token_num = '';
  monthlyPensionBillForm: FormGroup;
  errorMessage = ppoMessage;
  isInputEdpCode = true;

  // form controls
  branchCtrl: FormControl = new FormControl();
  bankCtrl: FormControl = new FormControl();
  monthCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();
  sortByCtrl: FormControl = new FormControl();

  // lists
  month_list: ListValue[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'September' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' }
  ];

  year_list: ListValue[] = [
    { value: '1', viewValue: '2005' },
    { value: '2', viewValue: '2006' },
    { value: '3', viewValue: '2007' },
    { value: '4', viewValue: '2008' },
    { value: '5', viewValue: '2009' },
    { value: '6', viewValue: '2010' },
    { value: '7', viewValue: '2011' },
    { value: '8', viewValue: '2012' },
    { value: '9', viewValue: '2013' },
    { value: '10', viewValue: '2014' },
    { value: '11', viewValue: '2015' },
    { value: '12', viewValue: '2016' },
    { value: '13', viewValue: '2017' },
    { value: '14', viewValue: '2018' },
    { value: '15', viewValue: '2019' },
    { value: '16', viewValue: '2020' },
  ];

  sortBy_list: ListValue[] = [
    { value: '1', viewValue: 'PPO No.' },
    { value: '2', viewValue: 'Ledger No.' },
    { value: '3', viewValue: 'Account No.' },
  ];

  branch_list: ListValue[] = [
    { value: '1', viewValue: 'State Bank of India (LIC Road, Godhra)' }
  ];
  bank_list: ListValue[] = [
    { value: '1', viewValue: 'State Bank of India' },
    { value: '2', viewValue: 'Bank of India' },
    { value: '3', viewValue: 'Canara Bank' },
    { value: '4', viewValue: 'Central Bank of India' },
    { value: '5', viewValue: 'Indian Bank' },
    { value: '6', viewValue: 'Indian Overseas Bank' },
    { value: '7', viewValue: 'Punjab National Bank' },
    { value: '8', viewValue: 'State Bank of India' },
    { value: '9', viewValue: 'Union Bank of India' },
    { value: '10', viewValue: 'Axis Bank' },
    { value: '11', viewValue: 'HDFC Bank' },
    { value: '12', viewValue: 'ICICI Bank' },
    { value: '13', viewValue: 'IDBI Bank' },
    { value: '14', viewValue: 'IDFC First Bank' },
    { value: '15', viewValue: 'IndusInd Bank' },
    { value: '16', viewValue: 'Jammu & Kashmir Bank ' },
    { value: '17', viewValue: 'Karnataka Bank' },
    { value: '18', viewValue: 'Karur Vysya Bank' },
    { value: '19', viewValue: 'South Indian Bank' },
    { value: '20', viewValue: 'Tamilnad Mercantile Bank' },
    { value: '20', viewValue: 'Axis Bank' },
    { value: '21', viewValue: 'Yes Bank' },
  ];
  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.monthlyPensionBillFormData();
  }

  monthlyPensionBillFormData() {
    this.monthlyPensionBillForm = this.fb.group({
      month: [''],
      year: [''],
      bankCode: [''],
      bank: [''],
      branch: [''],
      sortBy: [''],
    });
  }

  // routing
  generateBill() {
    this.router.navigate(['/ppo/monthly-pension-bill-details']);
  }

}

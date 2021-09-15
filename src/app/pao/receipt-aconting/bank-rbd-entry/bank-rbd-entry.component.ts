import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { receptAccounting } from 'src/app/common/error-message/common-message.constants';
import { BankDetails } from 'src/app/model/paoModel';

@Component({
  selector: 'app-bank-rbd-entry',
  templateUrl: './bank-rbd-entry.component.html',
  styleUrls: ['./bank-rbd-entry.component.css']
})
export class BankRbdEntryComponent implements OnInit {
  // Listing
  model = {
    payment: '0.00',
    receipt: '0.00',
  };
  // Table Sourcea
  bankDetailsColumns: string[] = [
    'srno',
    'bankName',
    'receipt',
    'payment',
    'rdb',
    'desc',
    'action'

  ];

  bankdetails_Data: BankDetails[] = [
    {
      srno: '1',
      bankName: 'State Bank Of India',
      receipt: '10000.00',
      payment: '2000.00',
      rdb: '8000.00',
      desc: 'Nothing'
    },

  ];

  bankDetailsDataSource = new MatTableDataSource<any>(this.bankdetails_Data);
  // Form Group
  paymentRceiptForm: FormGroup;
  // Date
  todayDate = Date.now();
  today = new Date();
  // Variable
  isSearchJotting: Boolean = false;


  constructor(private fb: FormBuilder) { this.today.setDate(this.today.getDate()); }

  bank_list: any = [
    { value: '1', viewValue: 'State bank OF India' },
  ];

  bankCtrl: FormControl = new FormControl();

  errorMessages = receptAccounting;



  ngOnInit() {
    this.paymentRceiptFormData();
  }

  paymentRceiptFormData() {
    this.paymentRceiptForm = this.fb.group({
      bankName: [''],
      banvkBranch: [''],
      receipt: [''],
      payment: [''],
      rbdDate: [''],
      sDate: [''],
      amount: [''],
      desc: [''],
      rbd: [''],
    });
  }
  diff() {
    let p = +this.paymentRceiptForm.get('payment').value;
    let r = +this.paymentRceiptForm.get('receipt').value;
    let difference = '0.00';
    difference = parseFloat('' + (p - r)).toFixed(2);
    return difference;
  }

  search() {
    this.isSearchJotting = true;
  }
  clearForm() {

  }

}

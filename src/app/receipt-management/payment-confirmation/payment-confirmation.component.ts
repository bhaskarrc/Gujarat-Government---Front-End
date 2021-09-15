import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  // styleUrls: ['./payment-confirmation.component.css']
})
export class PaymentConfirmationComponent implements OnInit {
  // variables
  initiatiomdate = new Date();
  paymentConfirmationForm: FormGroup;
  paymentMode_list: ListValue[] = [
    { value: '1', viewValue: 'Bank Payment Scheme' },
    { value: '2', viewValue: 'Counter' },
    { value: '3', viewValue: 'Money Order Scheme' }
  ];
  // form controls
  paymentModeCtrl: FormControl = new FormControl();
  taxPurposeCtrl: FormControl = new FormControl();

  // lists
  taxPurpose_list: ListValue[] = [
    { value: '1', viewValue: 'Value Added Tax' },
    { value: '2', viewValue: 'Sales Tax' },
    { value: '3', viewValue: 'Professional Tax' },
    { value: '4', viewValue: 'Entry Tax' },
  ];
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.paymentConfirmationForm = this.fb.group({
      userName: [''],
      paymentMode: [''],
      taxPurpose: [''],
      grn: [''],
      amt: ['']
    });
  }

}

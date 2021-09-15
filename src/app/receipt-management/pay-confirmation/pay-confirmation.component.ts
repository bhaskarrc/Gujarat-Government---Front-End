import { receiptManagement } from './../../common/error-message/common-message.constants';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-pay-confirmation',
  templateUrl: './pay-confirmation.component.html',
  styleUrls: ['./pay-confirmation.component.css']
})
export class PayConfirmationComponent implements OnInit {
  // date
  todayDate = Date.now();
  maxDate = new Date();

  // variables
  isSubmitted = false;
  initiatiomdate = new Date();
  errorMessages = receiptManagement;
  payConfirmationForm: FormGroup;
  paymentConfirmationForm: FormGroup;

  // form controls
  paymentModeCtrl: FormControl = new FormControl();
  taxPurposeCtrl: FormControl = new FormControl();

  // lists
  paymentMode_list: ListValue[] = [
    { value: '1', viewValue: 'Bank Payment Scheme' },
    { value: '2', viewValue: 'Counter' },
    { value: '3', viewValue: 'Money Order Scheme' }
  ];

  taxPurpose_list: ListValue[] = [
    { value: '1', viewValue: 'Value Added Tax' },
    { value: '2', viewValue: 'Sales Tax' },
    { value: '3', viewValue: 'Professional Tax' },
    { value: '4', viewValue: 'Entry Tax' },
  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.payConfirmationForm = this.fb.group({
      name: [''],
      namePayer: [''],
      payDate: [''],
      cin: [''],
      status: [''],
      statusDesc: [''],
      paymentMode: ['1'],
      taxPurpose: ['1'],
      grn: ['45653518'],
      amt: ['15,000.00']
    });
  }

  // clears form
  clearForm() {
    this.payConfirmationForm.reset();
  }

  // saves form
  onSave() {
    if (this.payConfirmationForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }

}

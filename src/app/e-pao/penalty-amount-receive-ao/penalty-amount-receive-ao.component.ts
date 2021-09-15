

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { SelectionModel } from '@angular/cdk/collections';

import { Component, OnInit } from '@angular/core';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-penalty-amount-receive-ao',
  templateUrl: './penalty-amount-receive-ao.component.html',
  styleUrls: ['./penalty-amount-receive-ao.component.css']
})
export class PenaltyAmountReceiveAoComponent implements OnInit {
  // Date
  todayDate = Date.now();
  initiatiomdate = new Date((new Date()));
  maxDate = new Date();
  // Variable
  errorMessages = EPOAMessage;
  isSubmitted: boolean = false;
  // Form Group
  penaltyAmountAoForm: FormGroup;
  // Form COntrol
  bankTypeCtrl: FormControl = new FormControl();
  // List
  bankType_list: any[] = [
    { value: '1', viewValue: 'Bank Of Baroda, Baroda' },
    { value: '2', viewValue: 'State Bank Of India' },
  ];


  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.penaltyAmountAoForm = this.fb.group({
      fdate: [''],
      tdate: [''],
      bankType: [''],
      bank: ['Bank Of Baroda, Baroda'],
      penaltyAmount: ['200.00'],
      recoveredAmount: ['0.00'],
      rMonth: ['April'],
      rYear: ['2018-2019'],
      amt: ['0.00'],
    });
  }




  onSave() {
    if (this.penaltyAmountAoForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }

  clearForm() {
    this.penaltyAmountAoForm.reset();
  }

}




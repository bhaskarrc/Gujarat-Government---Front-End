import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { SelectionModel } from '@angular/cdk/collections';

import { Component, OnInit } from '@angular/core';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-penalty-amount-receive-ha',
  templateUrl: './penalty-amount-receive-ha.component.html',
  styleUrls: ['./penalty-amount-receive-ha.component.css']
})
export class PenaltyAmountReceiveHaComponent implements OnInit {
  todayDate = Date.now();
  initiatiomdate = new Date((new Date()));
  maxDate = new Date();

  errorMessages = EPOAMessage;
  isSubmitted: boolean = false;
  penaltyAmountHaForm: FormGroup;
  bankTypeCtrl: FormControl = new FormControl();

  bankType_list: any[] = [
    { value: '1', viewValue: 'Bank Of Baroda, Baroda' },
    { value: '2', viewValue: 'Bank Of Baroda, Baroda' },
  ];


  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.penaltyAmountHaForm = this.fb.group({
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
    if (this.penaltyAmountHaForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }

  clearForm() {
    this.penaltyAmountHaForm.reset();
  }

}



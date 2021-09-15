import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { SelectionModel } from '@angular/cdk/collections';

import { Component, OnInit } from '@angular/core';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-block-cpin-view',
  templateUrl: './block-cpin-view.component.html',
  styleUrls: ['./block-cpin-view.component.css']
})
export class BlockCpinViewComponent implements OnInit {
  // date
  todayDate = Date.now();
  initiatiomdate = new Date((new Date()));
  maxDate = new Date();
  // variables
  errorMessages = EPOAMessage;
  isSubmitted: boolean = false;
  // FormGroup
  blockCpinViewForm: FormGroup;

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.blockCpinViewForm = this.fb.group({
      gstId: ['1000000001'],
      party: ['ABC'],

      cinNo: ['10000000002'],
      cpinDate: new Date('4/12/2018'),
      sgt: ['1100.00'],
      sgtFee: ['1000.00'],
      sgtInt: ['2000.00'],
      sgtPenalty: ['5000.00'],
      sgtOthers: ['200.00'],

    });
  }

  onSave() {
    if (this.blockCpinViewForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }


}


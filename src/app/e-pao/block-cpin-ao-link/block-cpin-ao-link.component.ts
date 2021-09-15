
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { SelectionModel } from '@angular/cdk/collections';

import { Component, OnInit } from '@angular/core';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-block-cpin-ao-link',
  templateUrl: './block-cpin-ao-link.component.html',
  styleUrls: ['./block-cpin-ao-link.component.css']
})
export class BlockCpinAoLinkComponent implements OnInit {
  todayDate = Date.now();
  initiatiomdate = new Date((new Date()));
  maxDate = new Date();

  errorMessages = EPOAMessage;
  isSubmitted: boolean = false;
  blockCpinAoViewForm: FormGroup;

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.blockCpinAoViewForm = this.fb.group({
      gstId: ['1000000001'],
      party: ['ABC'],

      cinNo: ['10000000002'],
      cpinDate: ['12-Apr-2018 20:28'],
      sgt: ['1100.00'],
      sgtFee: ['1000.00'],
      sgtInt: ['2000.00'],
      sgtPenalty: ['5000.00'],
      sgtOthers: ['200.00'],

    });
  }

  onSave() {
    if (this.blockCpinAoViewForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }


}


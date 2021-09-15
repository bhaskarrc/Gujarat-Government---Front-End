

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { SelectionModel } from '@angular/cdk/collections';

import { Component, OnInit } from '@angular/core';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-manual-entry-ao-link',
  templateUrl: './manual-entry-ao-link.component.html',
  styleUrls: ['./manual-entry-ao-link.component.css']
})
export class ManualEntryAoLinkComponent implements OnInit {
  todayDate = Date.now();
  initiatiomdate = new Date((new Date()));
  maxDate = new Date();

  errorMessages = EPOAMessage;
  isSubmitted: boolean = false;
  entryMasterAoLinkForm: FormGroup;


  forwardCtrl: FormControl = new FormControl();

  forwardCtrl_list: any[] = [
    { value: '1', viewValue: 'SA' },
    { value: '2', viewValue: 'DA' },
    { value: '3', viewValue: 'AO' },

  ];


  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.entryMasterAoLinkForm = this.fb.group({
      refNo: ['10000001'],
      eDate: ['12-May-2019'],
      debitHead: ['101'],
      cinNo: ['56897412365899'],
      type: ['DA'],
      headAmt: ['1000.00'],
      totalAmt: ['2000.00'],
      creditHead: ['102'],
      totalHeadAmt: ['2000.00'],
      remark: [''],

    });
  }

  clearForm() {
    this.entryMasterAoLinkForm.reset();
  }

  onSave() {
    if (this.entryMasterAoLinkForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }

}



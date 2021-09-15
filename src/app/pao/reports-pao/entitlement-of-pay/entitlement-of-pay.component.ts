import { ListValue } from './../../../model/paoModel';
import { Component, OnInit } from '@angular/core';
import { paoMessage } from 'src/app/common/error-message/common-message.constants';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-entitlement-of-pay',
  templateUrl: './entitlement-of-pay.component.html',
  styleUrls: ['./entitlement-of-pay.component.css']
})
export class EntitlementOfPayComponent implements OnInit {
  // Form Group
  entitlementform: FormGroup;
  // Variable
  errorMessages = paoMessage;

  constructor(
    private fb: FormBuilder
  ) { }
  // List
  payrange_list: ListValue[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' }
  ];
  // Form COntrol
  payrangeCTRl: FormControl = new FormControl();

  ngOnInit() {
    this.entitlementform = this.fb.group({
      empNo: [''],
      payrange: [''],
    })
  }

}

import { ListValue } from './../../../model/paoModel';
import { Component, OnInit } from '@angular/core';
import { paoMessage } from 'src/app/common/error-message/common-message.constants';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pay-fixation',
  templateUrl: './pay-fixation.component.html',
  styleUrls: ['./pay-fixation.component.css']
})
export class PayFixationComponent implements OnInit {
  // Form Group
  payficationform: FormGroup;
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
    this.payficationform = this.fb.group({
      empNo: [''],
      payrange: [''],
    })
  }

}

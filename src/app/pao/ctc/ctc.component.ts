import { ListValue } from './../../model/paoModel';
import { Component, OnInit } from '@angular/core';
import { paoMessage } from 'src/app/common/error-message/common-message.constants';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ctc',
  templateUrl: './ctc.component.html',
  styleUrls: ['./ctc.component.css']
})
export class CtcComponent implements OnInit {
  // Form Group
  ctcForm: FormGroup;
  // Variable
  errorMessages = paoMessage;

  constructor(
    private fb: FormBuilder
  ) { }

  payrange_list: ListValue[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' }
  ];
  // Form Control
  payrangeCTRl: FormControl = new FormControl();

  ngOnInit() {
    this.ctcForm = this.fb.group({
      empNo: [''],
      payrange: [''],
    })
  }

}

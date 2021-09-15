import { ListValue } from './../../../model/paoModel';
import { Component, OnInit } from '@angular/core';
import { paoMessage } from 'src/app/common/error-message/common-message.constants';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-promotion-ent-of-pay',
  templateUrl: './promotion-ent-of-pay.component.html',
  styleUrls: ['./promotion-ent-of-pay.component.css']
})
export class PromotionEntOfPayComponent implements OnInit {

  // Form Group
  promotionForm: FormGroup;
  errorMessages = paoMessage;

  constructor(
    private fb: FormBuilder
  ) { }
  // List
  payrange_list: ListValue[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' }
  ];
  // Form Control
  payrangeCTRl: FormControl = new FormControl();

  ngOnInit() {
    this.promotionForm = this.fb.group({
      empNo: [''],
      payrange: [''],
    });
  }

}

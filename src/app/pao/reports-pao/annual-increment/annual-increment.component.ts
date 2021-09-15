import { Component, OnInit } from '@angular/core';
import { paoMessage } from 'src/app/common/error-message/common-message.constants';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-annual-increment',
  templateUrl: './annual-increment.component.html',
  styleUrls: ['./annual-increment.component.css']
})
export class AnnualIncrementComponent implements OnInit {
  // Form Group
  annaulrteportform: FormGroup;
  // Variable
  errorMessages = paoMessage;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.annaulrteportform = this.fb.group({
      empNo: [''],
      empName: [''],
    })
  }

}

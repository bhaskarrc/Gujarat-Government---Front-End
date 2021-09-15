import { group } from '@angular/animations';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { paoMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/paoModel';

@Component({
  selector: 'app-mla-authority',
  templateUrl: './mla-authority.component.html',
  styleUrls: ['./mla-authority.component.css']
})
export class MlaAuthorityComponent implements OnInit {
  // Variable
  isvisible = false;
  errorMessages = paoMessage;
  // Form Group
  mlaAuthorityForm: FormGroup
  // Form COntrol;
  mlaNameCtrl: FormControl = new FormControl();

  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog,) { }
  mlaName_list: ListValue[] = [
    { value: '1', viewValue: ' Mr. Saurabh Patel' },
  ];

  ngOnInit() {
    this.mlaAuthorityForm = this.fb.group({
      mlaNo: [''],
      mlaName: [''],
      bandPay: [''],
      gradePay: [''],
      bandGrade: [''],
      telephoneCharge: [''],
      postalCharge: [''],
      personalAllowance: [''],
      conveyanceAllowance: [''],
      consolidatedAllowance: [''],
      deamessAllowance: [''],
      other: [''],
    });
  }

  searchMlaAuthorityData() {

  }

  search() {
    this.isvisible = true;
  }
}

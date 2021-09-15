import { ListValue } from './../../../model/pdpla';
import { group } from '@angular/animations';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { paoMessage } from './../../../common/error-message/common-message.constants';
@Component({
  selector: 'app-counter-editing',
  templateUrl: './counter-editing.component.html',
  styleUrls: ['./counter-editing.component.css']
})
export class CounterEditingComponent implements OnInit {
  // Variable
  selectedAll = false;
  isSubmitted = false;
  private paginator: MatPaginator;
  private sort: MatSort;
  errorMessage = paoMessage;
  // Form Group
  counterEditingForm: FormGroup;
  // Form Control
  locationCtrl: FormControl = new FormControl();
  billTypeCtrl: FormControl = new FormControl();


  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog,) { }
  // List
  location_list: ListValue[] = [
    { value: '1', viewValue: 'Pay & Accounts Officer Gandhinagar' },
    { value: '2', viewValue: 'Gandhinagar' },
  ];

  billType_list: ListValue[] = [

    { value: '1', viewValue: 'GTR-30 - Pay Bill' },
    { value: '2', viewValue: 'GTR-45 - TA Bill' },
    { value: '3', viewValue: 'GTR-40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 - Advance Bill' }
  ];

  ngOnInit() {

    this.counterEditingForm = this.fb.group({
      tokenNumber: ['', Validators.required],
      billDate: ['', Validators.required],
      location: ['1', Validators.required],
      billType: [''],

    });
  }

  onClick(data) {
    if (this.counterEditingForm.value.billType === '1') {
      this.router.navigate(['./pao/inward-physical-bill-audit-level']);
    } else if (this.counterEditingForm.value.billType === '2') {
      this.router.navigate(['./pao/inward-physical-bill-audit-level']);
    } else {
      this.router.navigate(['./']);
    }
    if (this.counterEditingForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }

}


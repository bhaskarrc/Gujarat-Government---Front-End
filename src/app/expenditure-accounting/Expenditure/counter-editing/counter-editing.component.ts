
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { eaMessage } from './../../../common/error-message/common-message.constants';
@Component({
  selector: 'app-counter-editing',
  templateUrl: './counter-editing.component.html',
  styleUrls: ['./counter-editing.component.css']
})
export class CounterEditingComponent implements OnInit {
  todayDate = Date.now();
  initiatiomdate = new Date((new Date()));
  isSubmitted = false;
  selectedAll = false;
  isYes = true;
  // FormGroup
  counterEditingForm: FormGroup;
  // FormControl
  locationCtrl: FormControl = new FormControl();
  billTypeCtrl: FormControl = new FormControl();
  subTreasuryCtrl: FormControl = new FormControl();
  subTreasuryNameCtrl: FormControl = new FormControl();
  errorMessages = eaMessage;


  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog) { }
  // List values
  location_list: any[] = [
    { value: '1', viewValue: 'District Treasury Office, Gandhibnagar' },

  ];

  billType_list: any[] = [
    { value: '1', viewValue: 'Physical Bill' },
    { value: '2', viewValue: 'Online Bill' }
  ];

  subTreasury_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  subTreasuryName_list: any[];

  ngOnInit() {
    // FormGroup Fields
    this.counterEditingForm = this.fb.group({
      tokenNumber: ['', Validators.required],
      billDate: [''],
      location: ['1', Validators.required],
      billType: [''],
      subTreasuryName: [''],
      subTreasury: ['']

    });
  }
  // billType onclick
  onClick(data) {
    if (this.counterEditingForm.value.billType === '1') {
      this.router.navigate(['./ea/inward-physical-bill-audit-level']);

    } else if (this.counterEditingForm.value.billType === '2') {
      this.router.navigate(['./ea/inward-physical-bill-audit-level']);

    } else {
      this.router.navigate(['./ea/counter-editing']);
    }
    if (this.counterEditingForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }

  subTreasuryValue() {
    if (this.counterEditingForm.value.subTreasury === '1') {
      this.isYes = false;
      this.subTreasuryName_list = [
        { value: '1', viewValue: 'Sub Treasury Office,Anjar,Bhuj' },
        { value: '2', viewValue: 'Sub Treasury Office,Bhachau,Bhuj' },
        { value: '3', viewValue: 'Sub Treasury Office,Rachpar,Bhuj' },
        { value: '4', viewValue: 'Sub Treasury Office,Mundra,Bhuj' },
        { value: '5', viewValue: 'Sub Treasury Office,Mandvi,Bhuj' },
        { value: '6', viewValue: 'Sub Treasury Office,Nalia,Bhuj' },
        { value: '7', viewValue: 'Sub Treasury Office,Dayapar,Bhuj' },
        { value: '8', viewValue: 'Sub Treasury Office,Nakhtrana,Bhuj' },
        { value: '9', viewValue: 'Sub Treasury Office,Khavaad,Bhuj' },
        { value: '10', viewValue: 'Sub Treasury Office,Gandhidham,Bhuj' }
      ];
    }
    if (this.counterEditingForm.value.subTreasury === '2') {
      this.isYes = true;
      this.subTreasuryName_list = [
        { value: '1', viewValue: '' },
        { value: '2', viewValue: '' },
        { value: '3', viewValue: '' },
        { value: '4', viewValue: '' },
        { value: '5', viewValue: '' },
        { value: '6', viewValue: '' },
        { value: '7', viewValue: '' },
        { value: '8', viewValue: '' },
        { value: '9', viewValue: '' },
        { value: '10', viewValue: '' }
      ];
    }
  }

}


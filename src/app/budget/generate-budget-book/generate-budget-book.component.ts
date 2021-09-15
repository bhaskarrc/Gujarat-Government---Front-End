import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-generate-budget-book',
  templateUrl: './generate-budget-book.component.html',
  styleUrls: ['./generate-budget-book.component.css']
})
export class GenerateBudgetBookComponent implements OnInit {

  // Entry Field Details
  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2018-2019' },
    { value: '2', viewValue: '2019-2020' },
    { value: '3', viewValue: '2020-2021' },
    { value: '4', viewValue: '2021-2022' },
    { value: '5', viewValue: '2022-2023' },
    { value: '6', viewValue: '2023-2024' },
    { value: '7', viewValue: '2024-2025' },
    { value: '8', viewValue: '2025-2026' },
    { value: '9', viewValue: '2026-2027' },
    { value: '10', viewValue: '2027-2028' },
    { value: '11', viewValue: '2028-2029' },
    { value: '12', viewValue: '2029-2030' },
    { value: '13', viewValue: '2030-2031' },
  ];
  type_list: CommonListing[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'Modified' }
  ];
  bpn_list: CommonListing[] = [
    { value: '1', viewValue: '03:Agriculture, Farmers Welfare & Co-Operation Department'},
    { value: '2', viewValue: '04:Education Department'},
    { value: '3', viewValue: '05:Energy and Petro-Chemicals Department'},
    { value: '4', viewValue: '06:Finance Department'},
    { value: '5', viewValue: '07:Food, Civil Supplies and Consumer Affairs Department'},
  ];

  finYearCtrl: FormControl = new FormControl();
  bpnCtrl: FormControl = new FormControl();
  typeRegModCtrl: FormControl = new FormControl();
  date: any = new Date();
  counter = 1;
  errorMessages = budgetMessage;

  budBook: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.budBook = this.fb.group({
      finYear: ['3', Validators.required],
      bpn: ['', Validators.required],
      typeRegMod: ['', Validators.required],
    });
  }

  goToDashboard() {
    this.router.navigate(['']);
  }
  resetForm() {
    this.budBook.reset();
  }

}

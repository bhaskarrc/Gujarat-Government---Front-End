import { paoMessage } from './../../common/error-message/common-message.constants';
import { ListValue } from './../../model/common-grant';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

const ELEMENT_DATA = [
  {
    designation: 'Accountant',
    type: 'Temporary',
    sanctionPost: '1',
    s: '',
    l: '',
    o: '',
  },
  {
    designation: 'Clerk',
    type: 'Temporary',
    sanctionPost: '7',
    s: '',
    l: '',
    o: '',
  },
  {
    designation: 'Deputy Mamlatdar',
    type: 'Temporary',
    sanctionPost: '24',
    s: '',
    l: '',
    o: '',
  },
  {
    designation: 'Deputy Manager',
    type: 'Temporary',
    sanctionPost: '5',
    s: '',
    l: '',
    o: '',
  },
  {
    designation: 'Deputy Selection Officer',
    type: 'Temporary',
    sanctionPost: '1',
    s: '',
    l: '',
    o: '',
  },
  {
    designation: 'Driver',
    type: 'Temporary',
    sanctionPost: '3',
    s: '',
    l: '',
    o: '',
  },
  {
    designation: 'Peon',
    type: 'Temporary',
    sanctionPost: '7',
    s: '',
    l: '',
    o: '',
  },
  {
    designation: 'Peon-Cum-Driver',
    type: 'Temporary',
    sanctionPost: '1',
    s: '',
    l: '',
    o: '',
  },
  {
    designation: 'Senior Clerk',
    type: 'Temporary',
    sanctionPost: '3',
    s: '',
    l: '',
    o: '',
  },
  {
    designation: 'Stenographer-Ⅲ',
    type: 'Temporary',
    sanctionPost: '1',
    s: '',
    l: '',
    o: '',
  },
  {
    designation: 'Stenographer Grade-Ⅱ',
    type: 'Temporary',
    sanctionPost: '2',
    s: '',
    l: '',
    o: '',
  },
  {
    designation: 'Typist',
    type: 'Temporary',
    sanctionPost: '5',
    s: '',
    l: '',
    o: '',
  },
];
@Component({
  selector: 'app-slo-details',
  templateUrl: './slo-details.component.html',
  styleUrls: ['./slo-details.component.css']
})
export class SloDetailsComponent implements OnInit {
  // Form Group
  sloDetailsForm: FormGroup;
  // Form Control
  monthCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();
  ministerCtrl: FormControl = new FormControl();
  // Variable
  errorMessages = paoMessage;
  isSubmitted = false;
  selected = 3;
  // Table SOurce
  displayedColumns: string[] = ['designation', 'type', 'sanctionPost', 's', 'l', 'o'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  // List

  month_list: ListValue[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'September' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },
  ];

  year_list: ListValue[] = [
    { value: '1', viewValue: '2018' },
    { value: '2', viewValue: '2019' },
    { value: '3', viewValue: '2020' },
  ];
  minsiter_list: ListValue[] = [
    { value: '1', viewValue: 'Minister-0' },
  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.sloDetailsForm = this.fb.group({

      department: ['Accounts Officer,State Election Commission', Validators.required],
      minister: [''],
      month: ['', Validators.required],
      year: ['3', Validators.required],
      monthYear: [''],

    });

  }
  onSubmit() {
    if (this.sloDetailsForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }

}

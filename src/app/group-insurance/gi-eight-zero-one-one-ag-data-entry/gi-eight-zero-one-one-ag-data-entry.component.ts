import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-gi-eight-zero-one-one-ag-data-entry',
  templateUrl: './gi-eight-zero-one-one-ag-data-entry.component.html',
  styleUrls: ['./gi-eight-zero-one-one-ag-data-entry.component.css']
})
export class GiEightZeroOneOneAgDataEntryComponent implements OnInit {

  // form group
  agDataEntryForm: FormGroup;

  // date
  todayDate = new Date();

  // form control
  monthCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();

  // List of Months
  monthList: CommonListing[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'Sepetember' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },
  ];

  // List of Years
  yearList: CommonListing[] = [
    { value: '1', viewValue: '2005' },
    { value: '2', viewValue: '2006' },
    { value: '3', viewValue: '2007' },
    { value: '4', viewValue: '2008' },
    { value: '5', viewValue: '2009' },
    { value: '6', viewValue: '2010' },
    { value: '7', viewValue: '2011' },
    { value: '8', viewValue: '2012' },
    { value: '9', viewValue: '2013' },
    { value: '10', viewValue: '2014' },
    { value: '11', viewValue: '2015' },
    { value: '12', viewValue: '2016' },
    { value: '13', viewValue: '2017' },
    { value: '14', viewValue: '2018' },
    { value: '15', viewValue: '2019' },
    { value: '16', viewValue: '2020' },
  ];

  // constructor
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.agDataEntryForm = this.fb.group({
      officeName: [{ value: 'Ahmedabad', disabled: true }],
      month: [''],
      year: [''],
      insuranceFundAmountReceipt: [''],
      savingFundAmountReceipt: [''],
      insuranceFundAmountExpenditure: [''],
      savingFundAmountExpenditure: [''],

    });
  }

  // ag form data
  agDataEntryFormData() { }
}


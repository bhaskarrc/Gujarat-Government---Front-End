import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { InterestRateListing } from 'src/app/model/group-insurance';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-gi-interest-rate-listing',
  templateUrl: './gi-interest-rate-listing.component.html',
  styleUrls: ['./gi-interest-rate-listing.component.css']
})
export class GiInterestRateListingComponent implements OnInit {

  // variable
  showTable = false;
  // date
  todayDate = new Date();
  // form group
  searchForm: FormGroup;
  // form group
  finYearCtrl: FormControl = new FormControl();
  fromMonthCtrl: FormControl = new FormControl();
  toMonthCtrl: FormControl = new FormControl();

  // Table Columns for Employee Ledger
  employeeLedgerDataSourceColumn = [
    'srno',
    'financialYear',
    'month',
    'openingBalance',
    'interestAmount',
    'savingFundAmount',
    'interest',
    'rateOfInterest',
    'closingBalance',
    'statement',
    'workflowStatus',
    'status',
    'action',
  ];

  // Table Data for Interest Rate
  elementData: InterestRateListing[] = [
    {
      financialYear: '2019-2020',
      month: 'April',
      openingBalance: '51863.61',
      interestAmount: '345.76',
      savingFundAmount: '35.00',
      closingBalance: '52244.37',
      rateOfInterest: '8',
      statement1: 'Statement1',
      statement2: 'Statement2',
      statement3: 'Statement3',
      workflowStatus: 'Submitted By Creator',
      status: 'Submitted',
      interest: '0.00'
    },
    {
      financialYear: '2019-2020',
      month: 'May',
      openingBalance: '51863.61',
      interestAmount: '691.51',
      savingFundAmount: '70.00',
      closingBalance: '52625.36',
      rateOfInterest: '8',
      statement1: 'Statement1',
      statement2: 'Statement2',
      statement3: 'Statement3',
      workflowStatus: 'Forwarded To Verifier',
      status: 'Pending',
      interest: '0.23'
    },
    {
      financialYear: '2019-2020',
      month: 'June',
      openingBalance: '51863.61',
      interestAmount: '1037.27',
      savingFundAmount: '105.00',
      closingBalance: '53006.58',
      rateOfInterest: '8',
      statement1: 'Statement1',
      statement2: 'Statement2',
      statement3: 'Statement3',
      workflowStatus: 'Forwarded to Approver',
      status: 'Recommended',
      interest: '0.70'
    },
    {
      financialYear: '2019-2020',
      month: 'July',
      openingBalance: '53006.58',
      interestAmount: '348.96',
      savingFundAmount: '35.00',
      closingBalance: '53390.54',
      rateOfInterest: '8',
      statement1: 'Statement1',
      statement2: 'Statement2',
      statement3: 'Statement3',
      workflowStatus: 'Forwarded To Verifier',
      status: 'Pending',
      interest: '0.00'
    }
  ];
  employeeLedgerDataSource = new MatTableDataSource<InterestRateListing>(this.elementData);

  // List of Financial Year
  financialYearList: CommonListing[] = [
    { value: '1', viewValue: '2017' },
    { value: '2', viewValue: '2018' },
    { value: '3', viewValue: '2019' },
    { value: '4', viewValue: '2020' },
    { value: '5', viewValue: '2021' }
  ];

  // List of From Month
  fromMonthList: CommonListing[] = [
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

  // List of To Month
  toMonthList: CommonListing[] = [
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

  // constructor
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.searchFormData();
  }

  // form data
  searchFormData() {
    this.searchForm = this.fb.group({
      finYear: [''],
      fromMonth: [''],
      toMonth: ['']
    });
  }

  // on click on search button
  search() {
    if (
      this.searchForm.controls['finYear'].value ||
      this.searchForm.controls['fromMonth'].value || this.searchForm.controls['toMonth'].value
    ) {
      this.showTable = true;
    }
  }

  // go to statement1
  goToStatement1() {
    this.router.navigate(['gi/statement-one']);
  }

  // go to statement2
  goToStatement2() {
    this.router.navigate(['gi/statement-two']);
  }

  // go to statement3
  goToStatement3() {
    this.router.navigate(['gi/statement-three']);
  }
}

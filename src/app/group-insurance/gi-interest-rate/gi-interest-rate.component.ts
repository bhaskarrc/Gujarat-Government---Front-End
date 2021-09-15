import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { GroupInsuranceMessage } from 'src/app/common/error-message/common-message.constants';
import { InterestRate } from 'src/app/model/group-insurance';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-gi-interest-rate',
  templateUrl: './gi-interest-rate.component.html',
  styleUrls: ['./gi-interest-rate.component.css']
})
export class GiInterestRateComponent implements OnInit {

  // variables
  aprilTable = false;
  julyTable = false;
  octoberTable = false;
  januaryTable = false;
  errorMessages = GroupInsuranceMessage;

  // date
  todayDate = new Date();
  // form group
  interestRateForm: FormGroup;
  // form control
  fromMonthCtrl: FormControl = new FormControl();
  toMonthCtrl: FormControl = new FormControl();

  // List of Month
  monthList: CommonListing[] = [
    { value: '1', viewValue: 'April' },
    { value: '2', viewValue: 'May' },
    { value: '3', viewValue: 'June' },
    { value: '4', viewValue: 'July' },
    { value: '5', viewValue: 'August' },
    { value: '6', viewValue: 'Sepetember' },
    { value: '7', viewValue: 'October' },
    { value: '8', viewValue: 'November' },
    { value: '9', viewValue: 'December' },
    { value: '10', viewValue: 'January' },
    { value: '11', viewValue: 'February' },
    { value: '12', viewValue: 'March' },
  ];

  // Table data for Interest Rate Table
  interestRateData: InterestRate[] = [
    {
      month: 'April',
      openingBalance: '51863.61',
      interestAmount: '345.76',
      savingFund: '35.00',
      interest: '0.00',
      interestRate: '',
      closingBalance: '52244.37'
    },
    {
      month: 'May',
      openingBalance: '51863.61',
      interestAmount: '691.51',
      savingFund: '70.00',
      interest: '0.23',
      interestRate: '',
      closingBalance: '52625.36'
    },
    {
      month: 'June',
      openingBalance: '51863.61',
      interestAmount: '1037.27',
      savingFund: '105.00',
      interest: '0.70',
      interestRate: '',
      closingBalance: '53006.58 '
    },
    {
      month: 'July',
      openingBalance: '53006.58',
      interestAmount: '348.96',
      savingFund: '35.00',
      interest: '0.00',
      interestRate: '',
      closingBalance: '53390.54'
    },
    {
      month: 'August',
      openingBalance: '53006.58',
      interestAmount: '697.92',
      savingFund: '70.00',
      interest: '0.23',
      interestRate: '',
      closingBalance: '53774.73'
    },
    {
      month: 'September',
      openingBalance: '53006.58',
      interestAmount: '1046.88',
      savingFund: '105.00',
      interest: '0.70',
      interestRate: '',
      closingBalance: '54159.15'
    },
    {
      month: 'October',
      openingBalance: '54159.15',
      interestAmount: '361.06',
      savingFund: '35.00',
      interest: '0.00',
      interestRate: '',
      closingBalance: '54555.45'
    },
    {
      month: 'November',
      openingBalance: '54159.15',
      interestAmount: '722.12', savingFund: '70.00', interest: '0.23', interestRate: '', closingBalance: '54951.74'
    },
    {
      month: 'December',
      openingBalance: '54159.15',
      interestAmount: '1083.18',
      savingFund: '105.00',
      interest: '0.70',
      interestRate: '',
      closingBalance: '55348.03'
    },
    {
      month: 'January',
      openingBalance: '55348.03',
      interestAmount: '0.00',
      savingFund: '35.00',
      interest: '0.00',
      interestRate: '',
      closingBalance: '55383.03'
    },
    {
      month: 'February',
      openingBalance: '55348.03',
      interestAmount: '0.00',
      savingFund: '70.00',
      interest: '0.23',
      interestRate: '',
      closingBalance: '55418.03'
    },
    {
      month: 'March',
      openingBalance: '55348.03',
      interestAmount: '0.00',
      savingFund: '105.00',
      interest: '0.70',
      interestRate: '',
      closingBalance: '55453.03'
    },
  ];

  // Table Columns for Interest Rate Table
  interestRateDataSourceColumn: string[] = [
    'month', 'openingBalance', 'interestAmount', 'savingFund', 'interest', 'interestRate', 'closingBalance',
  ];

  // Table data for Interest Rate April Month table
  interestRateAprilData: InterestRate[] = [
    {
      month: 'April',
      openingBalance: '51863.61',
      interestAmount: '345.76',
      savingFund: '35.00',
      interest: '0.00',
      interestRate: '2.2',
      closingBalance: '52244.37'
    },
    {
      month: 'May',
      openingBalance: '51863.61',
      interestAmount: '691.51',
      savingFund: '70.00',
      interest: '0.23',
      interestRate: '3.4',
      closingBalance: '52625.36'
    },
    {
      month: 'June',
      openingBalance: '51863.61',
      interestAmount: '1037.27',
      savingFund: '105.00',
      interest: '0.70',
      interestRate: '2.4',
      closingBalance: '53006.58 '
    },
  ];

  // Table data for Interest Rate July Month table
  interestRateJulyData: InterestRate[] = [
    {
      month: 'July',
      openingBalance: '53006.58',
      interestAmount: '348.96',
      savingFund: '35.00',
      interest: '0.00',
      interestRate: '2.22',
      closingBalance: '53390.54'
    },
    {
      month: 'August',
      openingBalance: '53006.58',
      interestAmount: '697.92',
      savingFund: '70.00',
      interest: '0.23',
      interestRate: '3.34',
      closingBalance: '53774.73'
    },
    {
      month: 'September',
      openingBalance: '53006.58',
      interestAmount: '1046.88',
      savingFund: '105.00',
      interest: '0.70',
      interestRate: '4.3',
      closingBalance: '54159.15'
    },
  ];

  // Table data for Interest Rate October Month table
  interestRateOctoberData: InterestRate[] = [
    {
      month: 'October',
      openingBalance: '54159.15',
      interestAmount: '361.06',
      savingFund: '35.00',
      interest: '0.00',
      interestRate: '9.0',
      closingBalance: '54555.45'
    },
    {
      month: 'November',
      openingBalance: '54159.15',
      interestAmount: '722.12',
      savingFund: '70.00',
      interest: '0.23',
      interestRate: '9.0',
      closingBalance: '54951.74'
    },
    {
      month: 'December',
      openingBalance: '54159.15',
      interestAmount: '1083.18',
      savingFund: '105.00',
      interest: '0.70',
      interestRate: '4.0',
      closingBalance: '55348.03'
    },
  ];

  // Table data for Interest Rate January Month table
  interestRateJanuaryData: InterestRate[] = [
    {
      month: 'January',
      openingBalance: '55348.03',
      interestAmount: '0.00',
      savingFund: '35.00',
      interest: '0.00',
      interestRate: '4.4',
      closingBalance: '55383.03'
    },
    {
      month: 'February',
      openingBalance: '55348.03',
      interestAmount: '0.00',
      savingFund: '70.00',
      interest: '0.23',
      interestRate: '2.4',
      closingBalance: '55418.03'
    },
    {
      month: 'March',
      openingBalance: '55348.03', interestAmount: '0.00',
      savingFund: '105.00',
      interest: '0.70',
      interestRate: '2.4',
      closingBalance: '55453.03'
    },
  ];

  // datasources
  interestRateDataSource = new MatTableDataSource<InterestRate>(this.interestRateData);
  interestRateAprilDataSource = new MatTableDataSource<InterestRate>(this.interestRateAprilData);
  interestRateJulyDataSource = new MatTableDataSource<InterestRate>(this.interestRateJulyData);
  interestRateOctoberDataSource = new MatTableDataSource<InterestRate>(this.interestRateOctoberData);
  interestRateJanuaryDataSource = new MatTableDataSource<InterestRate>(this.interestRateJanuaryData);

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.interestRateFormData();
  }

  // naviagte to statement 1
  goToStatementOne() {
    this.router.navigate(['gi/statement-one']);
  }

  // naviagte to statement 2
  goToStatementTwo() {
    this.router.navigate(['gi/statement-two']);
  }

  // naviagte to statement 3
  goToStatementThree() {
    this.router.navigate(['gi/statement-three']);
  }

  // form data
  interestRateFormData() {
    this.interestRateForm = this.fb.group({
      finanacialYear: [''],
      fromMonth: [''],
      toMonth: [''],
      rateOfInterest: ['']
    });
  }

  // display quater wise data table on basis of from month and to month
  showResult(e) {
    e.preventDefault();
    this.aprilTable = false;
    this.julyTable = false;
    this.octoberTable = false;
    this.januaryTable = false;

    if (this.interestRateForm.controls['fromMonth'].value !== '' && this.interestRateForm.controls['toMonth'].value !== ''
      && this.interestRateForm.controls['rateOfInterest'].value !== '') {

      if (this.interestRateForm.controls['fromMonth'].value > 0 && this.interestRateForm.controls['toMonth'].value < 4) {

        this.aprilTable = true;
        this.julyTable = false;
        this.octoberTable = false;
        this.januaryTable = false;

        this.calculateAprilInterestRate();
      } else
        if (this.interestRateForm.controls['fromMonth'].value > 0 && this.interestRateForm.controls['toMonth'].value < 7) {
          this.aprilTable = true;
          this.julyTable = true;
          this.octoberTable = false;
          this.januaryTable = false;

          this.calculateAprilInterestRate();
          this.calculateJulyInterestRate();
        } else
          if (this.interestRateForm.controls['fromMonth'].value > 0 && this.interestRateForm.controls['toMonth'].value < 10) {
            this.aprilTable = true;
            this.julyTable = true;
            this.octoberTable = true;
            this.januaryTable = false;

            this.calculateAprilInterestRate();
            this.calculateJulyInterestRate();
            this.calculateOctoberInterestRate();
          }
      if (this.interestRateForm.controls['fromMonth'].value > 9) {
        this.aprilTable = true;
        this.julyTable = true;
        this.octoberTable = true;
        this.januaryTable = true;

        this.calculateAprilInterestRate();
        this.calculateJulyInterestRate();
        this.calculateOctoberInterestRate();
        this.calculateJanuaryInterestRate();
      }
    }
  }

  // assign interest rate for april-june quater
  calculateAprilInterestRate() {
    this.interestRateAprilDataSource.data.forEach(element => {
      element.interestRate = this.interestRateForm.controls['rateOfInterest'].value;
    });
    this.interestRateAprilDataSource = new MatTableDataSource(this.interestRateAprilDataSource.data);

  }

  // assign interest rate for july-sep quater
  calculateJulyInterestRate() {
    this.interestRateJulyDataSource.data.forEach(element => {
      element.interestRate = this.interestRateForm.controls['rateOfInterest'].value;
    });
    this.interestRateJulyDataSource = new MatTableDataSource(this.interestRateJulyDataSource.data);
  }

  // assign interest rate for oct-dec quater
  calculateOctoberInterestRate() {
    this.interestRateOctoberDataSource.data.forEach(element => {
      element.interestRate = this.interestRateForm.controls['rateOfInterest'].value;
    });
    this.interestRateOctoberDataSource = new MatTableDataSource(this.interestRateOctoberDataSource.data);
  }

  // assign interest rate for jan-mar quater
  calculateJanuaryInterestRate() {
    this.interestRateJanuaryDataSource.data.forEach(element => {
      element.interestRate = this.interestRateForm.controls['rateOfInterest'].value;
    });
    this.interestRateJanuaryDataSource = new MatTableDataSource(this.interestRateJanuaryDataSource.data);
  }

  // navigate to listing
  goToListing() {
    this.router.navigate(['gi/gi-interest-rate-listing']);
  }

  // reset form
  resetForm() { }
}

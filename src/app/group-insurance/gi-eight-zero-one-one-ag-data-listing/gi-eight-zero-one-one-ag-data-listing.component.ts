import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { AgDataList } from 'src/app/model/group-insurance';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-gi-eight-zero-one-one-ag-data-listing',
  templateUrl: './gi-eight-zero-one-one-ag-data-listing.component.html',
  styleUrls: ['./gi-eight-zero-one-one-ag-data-listing.component.css']
})
export class GiEightZeroOneOneAgDataListingComponent implements OnInit {

  // form group
  agDataListingForm: FormGroup;

  // variables
  showTable = false;

  // date
  todayDate = new Date();

  // form control
  monthCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();
  agOfficeNameCtrl: FormControl = new FormControl();

  // List of Offices
  agOfficeNameList: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Rajkot' },
  ];

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

  // shows rowspan colspan header
  header1: string[] = [
    'srno',
    'agOfficeName',
    'year',
    'month',
    'insuranceFund',
    'savingFund',
    'total',
  ];

  // shows under colspan headers
  header2: string[] = [
    'receiptInsuranceAmount',
    'expenditureInsuranceAmount',
    'receiptSavingAmount',
    'expenditureSavingAmount',
    'totalReceipt',
    'totalExpenditure',
  ];

  // Table data for AG Data
  agDataCoulmns: string[] = ['srno1', 'agOfficeNameData', 'yearData', 'monthData',
    'receiptInsuranceAmountData', 'expenditureInsuranceAmountData', 'receiptSavingAmountData', 'expenditureSavingAmountData',
    'totalReceiptData', 'totalExpenditureData'
  ];
  agDataList: AgDataList[] = [
    {
      agOfficeNameData: 'Ahmedabad',
      yearData: '2019',
      monthData: 'March',
      receiptInsuranceAmountData: 149876,
      expenditureInsuranceAmountData: 0,
      receiptSavingAmountData: 346149,
      expenditureSavingAmountData: 2766202,

    },
    {
      agOfficeNameData: 'Ahmedabad',
      yearData: '2019',
      monthData: 'April',
      receiptInsuranceAmountData: 150347,
      expenditureInsuranceAmountData: 0,
      receiptSavingAmountData: 147385,
      expenditureSavingAmountData: 2770600,

    },
    {
      agOfficeNameData: 'Ahmedabad',
      yearData: '2019',
      monthData: 'May',
      receiptInsuranceAmountData: 149987,
      expenditureInsuranceAmountData: 0,
      receiptSavingAmountData: 438298,
      expenditureSavingAmountData: 2774998,

    },
    {
      agOfficeNameData: 'Ahmedabad',
      yearData: '2019',
      monthData: 'June',
      receiptInsuranceAmountData: 157653,
      expenditureInsuranceAmountData: 0,
      receiptSavingAmountData: 350378,
      expenditureSavingAmountData: 2779396,

    },
  ];
  agDataListingDataSource = new MatTableDataSource<AgDataList>(this.agDataList);
  // Table data for AG Data end

  // constructor
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.agDataListingFormData();
  }

  // form data
  agDataListingFormData() {
    this.agDataListingForm = this.fb.group({
      agOfficeName: [''],
      month: [''],
      year: [''],
    });
  }

  // on click on search show table
  onSearch() {
    if (this.agDataListingForm.controls['agOfficeName'].value !== '' || this.agDataListingForm.controls['month'].value !== ''
      || this.agDataListingForm.controls['year'].value !== '') {
      this.showTable = true;
    }
  }

  // calculate total receipt amount
  calculateTotalReceiptAmount(index) {
    let amount = 0;
    amount = Number(this.agDataListingDataSource.data[index].receiptInsuranceAmountData) +
      Number(this.agDataListingDataSource.data[index].receiptSavingAmountData);

    return amount;
  }

  // calculate total expenditure amount
  calculateTotalExpenditureAmount(index) {
    let amount = 0;
    amount = Number(this.agDataListingDataSource.data[index].expenditureInsuranceAmountData) +
      Number(this.agDataListingDataSource.data[index].expenditureSavingAmountData);

    return amount;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { CommonListing, HeaderElement } from 'src/app/model/common-listing';
import {
  ExpenditureSavingData, ExpenditureInsuranceData, ExpenditureOfSavingData
} from 'src/app/model/group-insurance';

@Component({
  selector: 'app-gi-annexure-b',
  templateUrl: './gi-annexure-b.component.html',
  styleUrls: ['./gi-annexure-b.component.css']
})
export class GiAnnexureBComponent implements OnInit {

  // variable
  showTable = false;

  // date
  todayDate = new Date();

  // form group
  annexureBForm: FormGroup;

  // form control
  districtCtrl: FormControl = new FormControl();
  monthCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();

  // List of District
  districtList: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Vadodara' },
    { value: '4', viewValue: 'Surat' },
    { value: '5', viewValue: 'Rajkot' },
    { value: '6', viewValue: 'Anand' },
    { value: '7', viewValue: 'Bharuch' },
    { value: '8', viewValue: 'Valsad' },
    { value: '9', viewValue: 'Navsari' },
    { value: '10', viewValue: 'Dang' },
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

  // List of Gross Total
  grossTotl: HeaderElement[] = [
    { label: 'Total Insurance Fund', value: '350000.00' },
    { label: 'Total Saving Fund', value: '2434029.00' },
    { label: 'Gross Total', value: '2784029.00' },
  ];

  // List of District Details
  distDetail: HeaderElement[] = [
    { label: 'District', value: 'Gandhinagar' },
    { label: 'Office Name', value: 'District Treasury Office, Gandhinagar' },
    { label: 'Month & Year', value: 'May-19' },
  ];

  // Table data for Expenditure of Insurance and Saving table
  expenditureOfInsuranceAndSavingData: ExpenditureSavingData[] = [
    { grp: 'A', insFnd: 'NA', savFnd: 'NA' },
    { grp: 'B', insFnd: '200000.00', savFnd: '1650.00' },
    { grp: 'C', insFnd: '100000.00', savFnd: '125254.00' },
    { grp: 'D', insFnd: '50000.00', savFnd: '7387.00' },
  ];
  expenditureOfInsuranceAndSavingDataColumn: string[] = [
    'grp', 'insFnd', 'savFnd'
  ];
  expenditureOfInsuranceAndSavingDataSource = new MatTableDataSource<ExpenditureSavingData>(this.expenditureOfInsuranceAndSavingData);
  // Table data for Expenditure of Insurance and Saving table end


  // Table data for expenditure of insurance
  expenditureOfInsuranceData: ExpenditureInsuranceData[] = [
    { grp: 'A', expEmp: 'NA', retEmp: '6' },
    { grp: 'B', expEmp: '1', retEmp: '6' },
    { grp: 'C', expEmp: '1', retEmp: '7' },
    { grp: 'D', expEmp: '1', retEmp: 'NA' },
  ];
  expenditureOfInsuranceDataColumn: string[] = [
    'grp', 'expEmp', 'retEmp',
  ];
  expenditureOfInsuranceDataSource = new MatTableDataSource<ExpenditureInsuranceData>(this.expenditureOfInsuranceData);
  // Table data for expenditure of insurance end

  // Table Data for expenditure of Saving Table
  expenditureOfSavingData: ExpenditureOfSavingData[] = [
    { grp: 'A', savFnd: '601068.00' },
    { grp: 'B', savFnd: '518818.00' },
    { grp: 'C', savFnd: '1179852.00' },
    { grp: 'D', savFnd: 'NA' },
  ];
  expenditureOfSavingDataColumn: string[] = [
    'grp', 'savFnd'
  ];
  expenditureOfSavingDataSource = new MatTableDataSource<ExpenditureOfSavingData>(this.expenditureOfSavingData);
  // Table Data for expenditure of Saving Table end


  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.annexureBFormData();
  }

  // form data
  annexureBFormData() {
    this.annexureBForm = this.fb.group({
      district: [''],
      offName: ['District Treasury Office, Gandhinagar'],
      month: [''],
      year: [''],
    });
  }

  // on click on search button
  showResult() {
    if (
      this.annexureBForm.controls['district'].value !== '' || this.annexureBForm.controls['month'].value !== '' ||
      this.annexureBForm.controls['year'].value !== ''
    ) {
      this.showTable = true;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { GiDailyInputSheetAis } from 'src/app/model/group-insurance';

@Component({
  selector: 'app-gi-daily-input-sheet-ais',
  templateUrl: './gi-daily-input-sheet-ais.component.html',
  styleUrls: ['./gi-daily-input-sheet-ais.component.css']
})
export class GiDailyInputSheetAisComponent implements OnInit {

  // variables
  showTable = false;
  // date
  todayDate = new Date();
  // form group
  dailyInputSheetForm: FormGroup;

  // form controls
  districtCtrl: FormControl = new FormControl();
  monthCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();

  // Table data for Description Table
  descriptionData: GiDailyInputSheetAis[] = [
    {
      description: 'Pay and Accounts Office Suspense',
      accountCloseCode: '8658 00 101 00',
      case: 0,
      tc: 120
    },
    {
      description: 'Tax Deducted At Source-Suspense',
      accountCloseCode: '8011 00 112 00',
      case: 0,
      tc: 285668
    },
    {
      description: 'All India Services-Officers Group Insurance Scheme',
      accountCloseCode: '5658 00 123 00',
      case: 0,
      tc: 480
    }
  ];
  descriptionDataColumn: string[] = [
    'srno', 'description', 'accountCloseCode', 'case', 'tc'
  ];
  descriptionDataSource = new MatTableDataSource<GiDailyInputSheetAis>(this.descriptionData);
  // Table data for Description Table end

  // List of Year
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

  // List of Month
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

  // List of Major Head
  majorHeadList: CommonListing[] = [
    { value: '1', viewValue: '8011: Insurance and Pension Funds' },
    { value: '2', viewValue: '8658: Suspense Account' },
  ];

  // List of Sub Major Head
  subMajorHeadList: CommonListing[] = [
    { value: '1', viewValue: '' },
  ];

  // List of Minor Head
  minorHeadList: CommonListing[] = [
    { value: '1', viewValue: '' },
  ];

  // List of Sub Head
  subHeadList: CommonListing[] = [
    { value: '1', viewValue: '' },
  ];

  // List of Gross Total
  grossTotal: any[] = [
    { label: 'Total Cash', value: this.totalCash() },
    { label: 'Total TC', value: this.totalTC() },
    { label: 'Grand Total', value: this.grandTotal() },
  ];


  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dailyInputSheetFormData();
  }

  // form data
  dailyInputSheetFormData() {
    this.dailyInputSheetForm = this.fb.group({
      treasuryOffice: [''],
      officeAddress: [''],
      district: [''],
      month: [''],
      year: [''],
      majorHead: ['2'],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
      statementNo: [''],
      classOfExpenditure: [''],
      fund: [''],
      drawingOfficer: [''],
      demandNo: [''],
      typeOfBudget: [''],
      schemeNo: [''],
    });
  }

  // sets treasury office name and address name
  updateOffice() {
    this.dailyInputSheetForm.controls['treasuryOffice'].setValue('District Treasury Office, '
      + this.districtList[this.dailyInputSheetForm.controls['district'].value - 1].viewValue);
    this.dailyInputSheetForm.controls['officeAddress'].setValue('District Treasury Office, '
      + this.districtList[this.dailyInputSheetForm.controls['district'].value - 1].viewValue);
  }

  // show table
  showResult(e) {
    e.preventDefault();
    if (
      this.dailyInputSheetForm.controls['treasuryOffice'].value !== '' || this.dailyInputSheetForm.controls['officeAddress'].value !== '' ||
      this.dailyInputSheetForm.controls['district'].value !== '' || this.dailyInputSheetForm.controls['fromDate'].value !== '' ||
      this.dailyInputSheetForm.controls['toDate'].value !== '' || this.dailyInputSheetForm.controls['majorHead'].value !== ''
    ) {
      this.showTable = true;
    }
  }

  // total cash
  totalCash(): number {
    let total = 0;
    this.descriptionDataSource.data.forEach((element) => {
      total = total + Number(element.case);
    });
    return total;
  }

  // total tc
  totalTC(): number {
    let total = 0;
    this.descriptionDataSource.data.forEach((element) => {
      total = total + Number(element.tc);
    });
    return total;
  }

  // grand total
  grandTotal(): number {
    return this.totalCash() + this.totalTC();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { GroupInsuranceMessage } from 'src/app/common/error-message/common-message.constants';
import { CommonListing } from 'src/app/model/common-listing';
import { TreasuryOfficeReportData } from 'src/app/model/group-insurance';

@Component({
  selector: 'app-gi-treasury-office-report',
  templateUrl: './gi-treasury-office-report.component.html',
  styleUrls: ['./gi-treasury-office-report.component.css']
})
export class GiTreasuryOfficeReportComponent implements OnInit {

  // variable
  showTable = false;
  errorMessages = GroupInsuranceMessage;
  // date
  todayDate = new Date();
  // form group
  treasuryOfficeReportForm: FormGroup;
  // form control
  districtCtrl: FormControl = new FormControl();
  monthCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();

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

  // List of Districts
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


  // Table Data for Treasury Office Report table
  treasuryOfficeReportData: TreasuryOfficeReportData[] = [
    {
      date: '01-JUN-2020',
      vhNo: '3',
      majorHead: '2053',
      name: 'Chitnis, Collector Office, Aravali - Modasa',
      type: 'TC',
      city: 'Aravali',
      amount: 36
    },
    {
      date: '01-JUN-2020',
      vhNo: '3',
      majorHead: '2053',
      name: 'Chitnis, Collector Office, Aravali - Modasa',
      type: 'TC',
      city: 'Aravali',
      amount: 84
    },
    {
      date: '01-JUN-2020',
      vhNo: '38',
      majorHead: '2053',
      name: 'Chitnis, Collector Office, Bayad - Modasa',
      type: 'TC',
      city: 'Bayad',
      amount: 36
    },
    {
      date: '01-JUN-2020',
      vhNo: '38',
      majorHead: '2053',
      name: 'Chitnis, Collector Office, Bayad - Modasa',
      type: 'TC',
      city: 'Bayad',
      amount: 84
    },
    {
      date: '01-JUN-2020',
      vhNo: '2',
      majorHead: '2055',
      name: 'Supritendent Of Police - Modasa',
      type: 'TC',
      city: 'Aravali',
      amount: 36
    },
    {
      date: '01-JUN-2020',
      vhNo: '2',
      majorHead: '2055',
      name: 'Supritendent Of Police - Modasa',
      type: 'TC',
      city: 'Aravali',
      amount: 84
    }
  ];
  // Table Columns for Treasury Office Report Table
  treasuryOfficeReportDataColumn: string[] = [
    'srno', 'date', 'vhNo', 'majorHead', 'name', 'type', 'city', 'amount'
  ];
  treasuryOfficeReportDataSource = new MatTableDataSource<TreasuryOfficeReportData>(this.treasuryOfficeReportData);

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.treasuryOfficeReportFormData();
  }

  // form data
  treasuryOfficeReportFormData() {
    this.treasuryOfficeReportForm = this.fb.group({
      treasuryOffice: [''],
      officeAddress: [''],
      district: [''],
      month: [''],
      year: [''],
    });
  }

  // on basis of district set treasury office name and office address
  updateOffice() {
    this.treasuryOfficeReportForm.controls['treasuryOffice'].setValue('District Treasury Office, ' +
      this.districtList[this.treasuryOfficeReportForm.controls['district'].value - 1].viewValue);
    this.treasuryOfficeReportForm.controls['officeAddress'].setValue('District Treasury Office, ' +
      this.districtList[this.treasuryOfficeReportForm.controls['district'].value - 1].viewValue);
  }

  // on clicck on search show table
  showResult(e) {
    e.preventDefault();
    if (
      this.treasuryOfficeReportForm.controls['treasuryOffice'].value !== '' ||
      this.treasuryOfficeReportForm.controls['officeAddress'].value !== '' ||
      this.treasuryOfficeReportForm.controls['district'].value !== '' || this.treasuryOfficeReportForm.controls['month'].value !== '' ||
      this.treasuryOfficeReportForm.controls['year'].value !== ''
    ) {
      this.showTable = true;
    }
  }

  // calculate total amount
  totalAmount(): number {
    let total = 0;
    this.treasuryOfficeReportDataSource.data.forEach((element) => {
      total = total + Number(element.amount);
    });
    return total;
  }

}

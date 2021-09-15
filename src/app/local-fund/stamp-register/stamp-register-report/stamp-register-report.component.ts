import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { StampRegisterReportListing } from 'src/app/model/local-fund';

@Component({
  selector: 'app-stamp-register-report',
  templateUrl: './stamp-register-report.component.html',
  styleUrls: ['./stamp-register-report.component.css']
})
export class StampRegisterReportComponent implements OnInit {
  stampRegisterReport: FormGroup;
  id = 0;
  yearCtrl: FormControl = new FormControl();
  monthCtrl: FormControl = new FormControl();
  yearList: CommonListing[] = [
    { value: '1', viewValue: '2009' },
    { value: '2', viewValue: '2010' },
    { value: '3', viewValue: '2011' },
    { value: '4', viewValue: '2012' },
    { value: '5', viewValue: '2013' },
    { value: '6', viewValue: '2014' },
    { value: '7', viewValue: '2015' },
    { value: '8', viewValue: '2016' },
    { value: '9', viewValue: '2017' },
    { value: '10', viewValue: '2018' },
    { value: '11', viewValue: '2019' },
    { value: '12', viewValue: '2020' },
  ];
  monthList: CommonListing[] = [
    { value: '1', viewValue: 'Jan' },
    { value: '2', viewValue: 'Feb' },
    { value: '3', viewValue: 'Mar' },
    { value: '4', viewValue: 'Apr' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'Jun' },
    { value: '7', viewValue: 'Jul' },
    { value: '8', viewValue: 'Aug' },
    { value: '9', viewValue: 'Sep' },
    { value: '10', viewValue: 'Oct' },
    { value: '11', viewValue: 'Nov' },
    { value: '12', viewValue: 'Dec' },

  ];
  elementData: StampRegisterReportListing[] = [
    {
      date: '1-May-2019', openingBalance: '1000.00', amtOfReceivedTickets: '10000.00', totalAmtOfTickets: '11000.00',
      utilizationAmountOfTickets: '0.00', closingBalance: '11000.00', remarks: '', status: 'Approved'
    },
    {
      date: '8-May-2019', openingBalance: '500.00', amtOfReceivedTickets: '10000.00', totalAmtOfTickets: '11000.00',
      utilizationAmountOfTickets: '200.00', closingBalance: '10300.00', remarks: '', status: 'Approved'
    },
    {
      date: '10-May-2019', openingBalance: '10300.00', amtOfReceivedTickets: '0.00', totalAmtOfTickets: '10300.00',
      utilizationAmountOfTickets: '500.00', closingBalance: '9800.00', remarks: '', status: 'Approved'
    },
    {
      date: '15-May-2019', openingBalance: '9800.00', amtOfReceivedTickets: '0.00', totalAmtOfTickets: '9800.00',
      utilizationAmountOfTickets: '800.00', closingBalance: '9000.00', remarks: '', status: 'Approved'
    },
  ];
  dataSource = new MatTableDataSource<StampRegisterReportListing>(this.elementData);
  displayedColumns: string[] = ['position', 'date', 'openingBalance', 'amtOfReceivedTickets', 'totalAmtOfTickets',
    'utilizationAmountOfTickets', 'closingBalance', 'remarks', 'status'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.stampRegisterReport = this.fb.group({
      fromDate: [''],
      toDate: [''],
      year: [''],
      month: ['']
    });
    this.dataSource.paginator = this.paginator;

  }

}

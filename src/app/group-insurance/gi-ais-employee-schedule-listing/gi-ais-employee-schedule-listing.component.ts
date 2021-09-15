import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AisEmployeeScheduleListing } from 'src/app/model/group-insurance';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-gi-ais-employee-schedule-listing',
  templateUrl: './gi-ais-employee-schedule-listing.component.html',
  styleUrls: ['./gi-ais-employee-schedule-listing.component.css']
})
export class GiAisEmployeeScheduleListingComponent implements OnInit {

  // form group
  aisEmployeeSchedule: FormGroup;

  // form control
  monthCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();

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

  // List of Year
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

  // Table data for AIS Emoployee Schedule
  elementData: AisEmployeeScheduleListing[] = [{
    amt: '7000',
    chequeDate: new Date('06/05/2019'),
    chequeNo: '7845621',
    aisCadre: 'IAS',
    month: 'June',
    refNo: '145367',
    year: '2018',
    subsAmt: '1,200.00',
    subsDDDate: new Date('01/05/2019'),
    subsDDNo: '127463',
    insuranceFund: '128.00',
    savindFund: '272.00',
    total: '400.00',
    status: 'Pending',
    workflowStatus: 'Fowarded To Verifier'
  }];
  dataSource = new MatTableDataSource<AisEmployeeScheduleListing>(this.elementData);
  columns: string[] = ['srno', 'refNo',
    'month',
    'year',
    'aisCadre',
    'insuranceFund',
    'savindFund',
    'total',
    'chequeNo',
    'chequeDate',
    'amt', 'subsDDNo',
    'subsDDDate',
    'subsAmt',
    'workflowStatus',
    'status', 'action'
  ];
  // Table data for AIS Emoployee Schedule end

  // constructor
  constructor(public fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.aisEmployeeSchedule = this.fb.group({
      month: [''],
      year: ['']
    });
  }
}

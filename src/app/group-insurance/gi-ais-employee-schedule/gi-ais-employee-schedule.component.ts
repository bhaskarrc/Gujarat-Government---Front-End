import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { AisEmployeeScheduleEntry } from 'src/app/model/group-insurance';
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { GroupInsuranceDirective } from 'src/app/common/directive/group-insurance-directive';

@Component({
  selector: 'app-gi-ais-employee-schedule',
  templateUrl: './gi-ais-employee-schedule.component.html',
  styleUrls: ['./gi-ais-employee-schedule.component.css']
})
export class GiAisEmployeeScheduleComponent implements OnInit {

  // variable
  totalInsuranceFund = 0;
  totalSavingFund = 0;

  // date
  todayDate = new Date();

  // directive object for workflow dialog
  directiveObject = new GroupInsuranceDirective(this.dialog);

  // form group
  aisEmployeeSchedule: FormGroup;


  // form control
  cadreCtrl: FormControl = new FormControl();
  monthCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();

  // List of Designation
  cadreList: CommonListing[] = [
    { value: '1', viewValue: 'IAS' },
    { value: '2', viewValue: 'IPS' },
    { value: '3', viewValue: 'IFS' },
    { value: '4', viewValue: 'All' }
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

  // List of Years
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

  // Table data for AIS Employee Schedule
  elementData: AisEmployeeScheduleEntry[] = [{
    amt: '7000',
    chequeDate: new Date('06/05/2019'),
    chequeNo: '7845621',
    description: 'Gujarat Government Employees Group Insurance Scheme - Insurance Fund',
    ddoName: 'Directorate of Account & Treasury',
    designation: 'IAS',
    edpCode: '2004',
    empNo: '1000004643',
    insuranceFund: '128.00',
    majorHead: '8011 - Insurance and Pension Funds',
    name: 'Mr. S K Das',
    savindFund: '272.00',
    subsAmt: '1,200.00',
    subsDDDate: new Date('01/05/2019'),
    subsDDNo: '127463',
    total: ''
  }];
  dataSource = new MatTableDataSource<AisEmployeeScheduleEntry>(this.elementData);
  columns: string[] = ['srno', 'empNo',
    'name',
    'ddoName',
    'designation',
    'description',
    'majorHead',
    'edpCode',
    'insuranceFund',
    'savindFund',
    'total',
    'chequeNo',
    'chequeDate',
    'amt',
    'subsDDNo',
    'subsDDDate',
    'subsAmt', 'action'
  ];
  // Table data for AIS Employee Schedule  end

  // constructor
  constructor(public fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.aisEmployeeSchedule = this.fb.group({
      cadre: [''],
      month: [''],
      year: ['']
    });
  }

  // calculate insurance fund amount
  calculateTotalInsuranceFund(): number {
    let amount = 0;
    this.dataSource.data.forEach(row => {
      amount += Number(row.insuranceFund);
    });
    this.totalInsuranceFund = amount;
    return amount;
  }

  // calculate total saving fund amount
  calculateTotalSavingFund() {
    let amount = 0;
    this.dataSource.data.forEach(row => {
      amount += Number(row.savindFund);
    });
    this.totalSavingFund = amount;
    return amount;
  }

  // calculate total of total column
  grandTotal() {
    let amount = 0;
    amount = this.totalInsuranceFund + this.totalSavingFund;

    return amount;
  }

  // calculate total column value
  calculateTotal(element) {
    let amount = 0;

    amount = Number(element.insuranceFund) + Number(element.savindFund);
    return amount;

  }

  // naviagte to the office order
  generateOfficeOrder() {
    this.router.navigate(['gi/8658-office-order-screen']);
  }

}

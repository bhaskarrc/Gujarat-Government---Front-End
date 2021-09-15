import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { GiSearchEmployeeComponent } from '../gi-search-employee/gi-search-employee.component';
import { EmployeeScheduleListing } from 'src/app/model/group-insurance';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-gi-employee-schedule-listing',
  templateUrl: './gi-employee-schedule-listing.component.html',
  styleUrls: ['./gi-employee-schedule-listing.component.css']
})
export class GiEmployeeScheduleListingComponent implements OnInit {

  // variable
  showTable = false;

  // date
  todayDate = new Date();
  // form group
  employeeScheduleForm: FormGroup;

  // form control
  yearCtrl: FormControl = new FormControl();
  fromMonthCtrl: FormControl = new FormControl();
  toMonthCtrl: FormControl = new FormControl();

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

  // Table Data for Employee Schedule
  employeeSchduleData: EmployeeScheduleListing[] = [
    {
      employeeNo: '',
      employeeName: '',
      designation: '',
      group: 'A',
      subscriptionToInsuranceFund: '1',
      subscriptionToSavingFund: '1',
      contributionTowardsInsuranceFund: '36',
      contributionTowardsSavingFund: '84',
      totalContribution: '120',
      subscription: ''
    }
  ];
  employeeSchduleDataColumn: string[] = [
    'srno',
    'employeeNo',
    'employeeName',
    'designation',
    'group',
    'subscriptionToInsuranceFund',
    'subscriptionToSavingFund', 'contributionTowardsInsuranceFund',
    'contributionTowardsSavingFund',
    'totalContribution',
    'subscription'
  ];
  employeeSchduleDataSource = new MatTableDataSource<EmployeeScheduleListing>(this.employeeSchduleData);
  // Table Data for Employee Schedule end

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.employeeScheduleFormData();
  }

  // form data
  employeeScheduleFormData() {
    this.employeeScheduleForm = this.fb.group({
      treasuryOffice: [''],
      officeAddress: [''],
      employeeNo: [''],
      employeeName: [''],
      fromMonth: [''],
      toMonth: [''],
      year: [''],
    });
  }

  // on click on search button
  showResult(e) {
    e.preventDefault();
    if (
      this.employeeScheduleForm.controls['employeeNo'].value !== '' || this.employeeScheduleForm.controls['employeeName'].value !== '' ||
      this.employeeScheduleForm.controls['fromMonth'].value !== '' || this.employeeScheduleForm.controls['toMonth'].value !== '' ||
      this.employeeScheduleForm.controls['year'].value !== ''
    ) {
      this.showTable = true;
    }
  }

  // open employee number dialog box
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(GiSearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.employeeScheduleForm.patchValue({
          employeeNo: result[0].employeeNumber,
          employeeName: result[0].employeeName,
        });
      }
    });
  }

  // calculate total summary
  totalSummary(): number {
    let totalContribution = 0;
    this.employeeSchduleDataSource.data.forEach((element) => {
      totalContribution = totalContribution + Number(element.totalContribution);
    });
    return totalContribution;
  }

  // calculate total summary insurance
  totalSummaryInsurance(): number {
    let contributionTowardsInsuranceFund = 0;
    this.employeeSchduleDataSource.data.forEach((element) => {
      contributionTowardsInsuranceFund = contributionTowardsInsuranceFund + Number(element.contributionTowardsInsuranceFund);
    });
    return contributionTowardsInsuranceFund;
  }

  // calculate total summary saving
  totalSummarySaving(): number {
    let contributionTowardsSavingFund = 0;
    this.employeeSchduleDataSource.data.forEach((element) => {
      contributionTowardsSavingFund = contributionTowardsSavingFund + Number(element.contributionTowardsSavingFund);
    });
    return contributionTowardsSavingFund;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { GiSearchEmployeeComponent } from '../gi-search-employee/gi-search-employee.component';
import { GiEmployeeLedgerLising } from 'src/app/model/group-insurance';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-gi-employee-ledger-listing',
  templateUrl: './gi-employee-ledger-listing.component.html',
  styleUrls: ['./gi-employee-ledger-listing.component.css']
})
export class GiEmployeeLedgerListingComponent implements OnInit {

  // variables
  showTable = false;
  // date
  todayDate = new Date();
  // form group
  employeeLedgerForm: FormGroup;
  // form control
  designationCtrl: FormControl = new FormControl();
  groupCtrl: FormControl = new FormControl();
  classCtrl: FormControl = new FormControl();

  // List of Designation
  designationList: CommonListing[] = [
    { value: '1', viewValue: 'IAS' },
    { value: '2', viewValue: 'IPS' },
    { value: '3', viewValue: 'IFS' },
  ];

  // List of Group
  groupList: CommonListing[] = [
    { value: '1', viewValue: 'A' },
    { value: '2', viewValue: 'B' },
    { value: '3', viewValue: 'C' }
  ];

  // List of Class
  classList: CommonListing[] = [
    { value: '1', viewValue: 'Class I' },
    { value: '2', viewValue: 'Class II' },
    { value: '3', viewValue: 'Class III' }
  ];

  // Table Data for Employee Ledger
  employeeLedgerData: GiEmployeeLedgerLising[] = [
    {
      year: '2003-04',
      month: 'July',
      group: 'B',
      amountOfDeduction: '200',
      modeOfDeduction: 'Challan',
      challanNo: '1267',
      challanDate: '5-JUL-2005'
    },
    {
      year: '2003-04',
      month: 'August',
      group: 'B',
      amountOfDeduction: '200',
      modeOfDeduction: 'Challan',
      challanNo: '2437',
      challanDate: '5-AUG-2005'
    },
    {
      year: '2003-04',
      month: 'September',
      group: 'B',
      amountOfDeduction: '200',
      modeOfDeduction: 'Challan',
      challanNo: '2678',
      challanDate: '5-SEP-2005'
    },
    {
      year: '2003-04',
      month: 'October',
      group: 'A',
      amountOfDeduction: '400',
      modeOfDeduction: 'Payroll',
      challanNo: 'NA',
      challanDate: 'NA'
    },
    {
      year: '2003-04',
      month: 'November',
      group: 'A',
      amountOfDeduction: '400',
      modeOfDeduction: 'Payroll',
      challanNo: 'NA',
      challanDate: 'NA'
    },
    {
      year: '2003-04',
      month: 'December',
      group: 'A',
      amountOfDeduction: '400',
      modeOfDeduction: 'Payroll',
      challanNo: 'NA',
      challanDate: 'NA'
    },
    {
      year: '2004-05',
      month: 'January',
      group: 'B',
      amountOfDeduction: '200',
      modeOfDeduction: 'Payroll',
      challanNo: 'NA',
      challanDate: 'NA'
    },
    {
      year: '2004-05',
      month: 'February',
      group: 'B',
      amountOfDeduction: '200',
      modeOfDeduction: 'Payroll',
      challanNo: 'NA',
      challanDate: 'NA'
    },
    {
      year: '2004-05',
      month: 'March',
      group: 'B',
      amountOfDeduction: '200',
      modeOfDeduction: 'Payroll',
      challanNo: 'NA',
      challanDate: 'NA'
    },
    {
      year: '2004-05',
      month: 'April',
      group: 'B',
      amountOfDeduction: '200',
      modeOfDeduction: 'Payroll',
      challanNo: 'NA',
      challanDate: 'NA'
    },
    {
      year: '2004-05',
      month: 'May',
      group: 'B',
      amountOfDeduction: '200',
      modeOfDeduction: 'Payroll',
      challanNo: 'NA',
      challanDate: 'NA'
    },
    {
      year: '2004-05',
      month: 'June',
      group: 'B',
      amountOfDeduction: '200',
      modeOfDeduction: 'Payroll',
      challanNo: 'NA',
      challanDate: 'NA'
    },
  ];
  employeeLedgerDataSourceColumn: string[] = [
    'srno', 'year', 'month', 'group', 'amountOfDeduction', 'modeOfDeduction', 'challanNo', 'challanDate'
  ];
  employeeLedgerDataSource = new MatTableDataSource<GiEmployeeLedgerLising>(this.employeeLedgerData);
  // Table Data for Employee Ledger end

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.employeeLedgerFormData();
  }

  // on click on search button shoe table
  search() {
    if (this.employeeLedgerForm.controls['employeeNo'].value !== '' || this.employeeLedgerForm.controls['employeeName'].value !== ''
      || this.employeeLedgerForm.controls['designation'].value !== '' || this.employeeLedgerForm.controls['group'].value !== '' ||
      this.employeeLedgerForm.controls['class'].value !== '') { this.showTable = true; }
  }

  // form data
  employeeLedgerFormData() {
    this.employeeLedgerForm = this.fb.group({
      employeeNo: [''],
      employeeName: [''],
      designation: [''],
      group: [''],
      class: [''],
    });
  }

  // open employee number dialog box
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(GiSearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.employeeLedgerForm.patchValue({
          employeeNo: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          designation: '1',
          group: '1',
          class: '1',
        });
      }
    });
  }

}

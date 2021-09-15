import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { GiSearchEmployeeComponent } from '../gi-search-employee/gi-search-employee.component';
import { GiEmployeeLedgerAisListing } from 'src/app/model/group-insurance';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-gi-employee-ledger-ais-listing',
  templateUrl: './gi-employee-ledger-ais-listing.component.html',
  styleUrls: ['./gi-employee-ledger-ais-listing.component.css']
})
export class GiEmployeeLedgerAisListingComponent implements OnInit {

  // variable
  showTable = false;
  // date
  todayDate = new Date();
  // form group
  employeeLedgerForm: FormGroup;
  // form control
  designationCtrl: FormControl = new FormControl();


  // List of Designation
  designationList: CommonListing[] = [
    { value: '1', viewValue: 'IAS' },
    { value: '2', viewValue: 'IPS' },
    { value: '3', viewValue: 'IFS' },
  ];

  // Table Data for Employee Ledger
  employeeLedgerData: GiEmployeeLedgerAisListing[] = [
    {
      designation: '', officeName: '', monthOfDeduction: '', amountOfDeduction: '', majorHead: '', challanNo: '',
      challanDate: '', creaditHead: '', ddNo: '', date: '', amount: ''
    }
  ];
  employeeLedgerDataSourceColumn: string[] = [
    'srno', 'designation', 'department', 'officeName', 'monthOfDeduction', 'amountOfDeduction', 'majorHead', 'challanNo',
    'challanDate', 'creaditHead', 'ddNo', 'date', 'amount'
  ];
  employeeLedgerDataSource = new MatTableDataSource<GiEmployeeLedgerAisListing>(this.employeeLedgerData);
  // Table Data for Employee Ledger end

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.employeeLedgerFormData();
  }

  // form data
  employeeLedgerFormData() {
    this.employeeLedgerForm = this.fb.group({
      employeeNo: [''],
      employeeName: [''],
      enrollmentDate: [''],
      designation: [''],
      challanNo: [''],
      challanDate: [''],
    });
  }

  // on click on search button
  search() {
    if (this.employeeLedgerForm.controls['employeeNo'].value !== '' || this.employeeLedgerForm.controls['employeeName'].value !== ''
      || this.employeeLedgerForm.controls['enrollmentDate'].value !== '' || this.employeeLedgerForm.controls['designation'].value !== ''
      || this.employeeLedgerForm.controls['challanNo'].value !== '' || this.employeeLedgerForm.controls['challanDate'].value !== ''
    ) { this.showTable = true; }
  }

  // open employee number
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

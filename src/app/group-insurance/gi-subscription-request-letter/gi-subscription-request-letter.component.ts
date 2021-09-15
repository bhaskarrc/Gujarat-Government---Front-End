import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { GiSearchEmployeeComponent } from '../gi-search-employee/gi-search-employee.component';
import { SelectionModel } from '@angular/cdk/collections';
import { GiSubscriptionRequestLetterListing } from 'src/app/model/group-insurance';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-gi-subscription-request-letter',
  templateUrl: './gi-subscription-request-letter.component.html',
  styleUrls: ['./gi-subscription-request-letter.component.css']
})
export class GiSubscriptionRequestLetterComponent implements OnInit {

  // variable
  showTable = false;
  selection = new SelectionModel<any>(true, []);
  // date
  todayDate = new Date();
  // form group
  subscriptionRequestForm: FormGroup;

  // List of Designation
  designationList: CommonListing[] = [
    { value: '1', viewValue: 'IAS' },
    { value: '2', viewValue: 'IPS' },
    { value: '3', viewValue: 'IFS' }
  ];

  // Table Data for Subscription Table
  subscriptionData: GiSubscriptionRequestLetterListing[] = [
    {
      employeeNumber: '',
      employeeName: '',
      designation: '', officeName: '',
      pendingDeductionMonth: '',
      pendingDeductionAmount: '',
      emailID: '',
      ddNo: '',
      date: '',
      amount: ''
    }
  ];

  // Table Columns for Subscription Table
  subscriptionDataSourceColumn: string[] = [
    'select',
    'srno',
    'employeeNo',
    'employeeName',
    'designation',
    'enrollmentNo',
    'schemeJoinedDate',
    'tcCash',
    'pendingDeductionMonth',
    'pendingDeductionAmount',
    'emailID',
    'subscription',
    'action'
  ];
  subscriptionDataSource = new MatTableDataSource(this.subscriptionData);

  // constructor
  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.subscriptionRequestFormData();
  }

  // form data
  subscriptionRequestFormData() {
    this.subscriptionRequestForm = this.fb.group({
      employeeNo: [''],
      employeeName: [''],
      designation: [{ value: 'IAS', disabled: true }],
      fromDate: [''],
      toDate: [''],
      enrollmentNo: ['']

    });
  }

  // on click on search button
  search() {
    if (
      this.subscriptionRequestForm.controls['fromDate'].value !== ''
      || this.subscriptionRequestForm.controls['employeeNo'].value !== '' ||
      this.subscriptionRequestForm.controls['employeeName'].value !== ''
      || this.subscriptionRequestForm.controls['designation'].value !== '' ||
      this.subscriptionRequestForm.controls['toDate'].value !== '' ||
      this.subscriptionRequestForm.controls['enrollmentNo'].value !== ''
    ) {
      this.showTable = true;
    }
  }

  // reset form
  resetForm() {
    this.subscriptionRequestForm.reset();
  }

  // checks if all rows are selected unselect them and vice versa
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.subscriptionDataSource.data.forEach(row =>
        this.selection.select(row)
      );
  }

  // check are all rows selected
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.subscriptionDataSource.data.length;
    return numSelected === numRows;
  }

  // sets checkbox label
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'
      } row ${row.position + 1}`;
  }

  // opens employee number dialog box
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(GiSearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.subscriptionRequestForm.patchValue({
          employeeNo: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          designation: '1',
          group: '1',
          department: '5'
        });
      }
    });
  }

  // go to letter
  goToLetter() {
    this.router.navigate(['/gi/subscription-request-letter-print']);
  }

}

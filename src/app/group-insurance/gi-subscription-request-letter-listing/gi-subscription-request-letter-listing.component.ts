import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { GiSearchEmployeeComponent } from '../gi-search-employee/gi-search-employee.component';
import { SelectionModel } from '@angular/cdk/collections';
import { CommonListing } from 'src/app/model/common-listing';
import { GiSubscriptionRequestLetterListing } from 'src/app/model/group-insurance';

@Component({
  selector: 'app-gi-subscription-request-letter-listing',
  templateUrl: './gi-subscription-request-letter-listing.component.html',
  styleUrls: ['./gi-subscription-request-letter-listing.component.css']
})
export class GiSubscriptionRequestLetterListingComponent implements OnInit {

  // variable
  showTable = false;
  selection = new SelectionModel<any>(true, []);
  // date
  todayDate = new Date();
  // form group
  subscriptionRequestForm: FormGroup;
  // form control
  designationCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();


  // List of Designation
  designationList: CommonListing[] = [
    { value: '1', viewValue: 'IAS' },
    { value: '2', viewValue: 'IPS' },
    { value: '3', viewValue: 'IFS' }
  ];

  // List of Status
  statusList: CommonListing[] = [
    { value: '1', viewValue: 'Sent Mail' },
    { value: '3', viewValue: 'Received Acknowledgement' },
  ];

  // Table data for Subscription Table
  subscriptionData: GiSubscriptionRequestLetterListing[] = [
    {
      employeeNumber: '',
      employeeName: '',
      designation: '',
      officeName: '',
      pendingDeductionMonth: '',
      pendingDeductionAmount: '',
      emailID: '',
      ddNo: '',
      date: '',
      amount: '',
      status: ''
    }
  ];

  // Table Columns for Subscription Table
  subscriptionDataSourceColumn: string[] = [
    'srno',
    'employeeNumber',
    'employeeName',
    'designation',
    'officeName',
    'pendingDeductionMonth',
    'pendingDeductionAmount',
    'emailID',
    'ddNo',
    'date',
    'amount',
    'status',
    'action'
  ];
  subscriptionDataSource = new MatTableDataSource(this.subscriptionData);

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.subscriptionRequestFormData();
  }

  // form data
  subscriptionRequestFormData() {
    this.subscriptionRequestForm = this.fb.group({
      employeeNo: [''],
      employeeName: [''],
      designation: [''],
      department: [''],
      fromDate: [''],
      toDate: [''],
      status: [''],
    });
  }

  // on click on search button
  search() {
    if (
      this.subscriptionRequestForm.controls['fromDate'].value !== '' || this.subscriptionRequestForm.controls['employeeNo'].value !== '' ||
      this.subscriptionRequestForm.controls['employeeName'].value !== '' ||
      this.subscriptionRequestForm.controls['designation'].value !== '' ||
      this.subscriptionRequestForm.controls['department'].value !== '' || this.subscriptionRequestForm.controls['toDate'].value !== '' ||
      this.subscriptionRequestForm.controls['status'].value !== ''
    ) {
      this.showTable = true;
    }
  }

  // reset form
  resetForm() {
    this.subscriptionRequestForm.reset();
  }

  // if all rows are selected unselect them and vice versa
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.subscriptionDataSource.data.forEach(row =>
        this.selection.select(row)
      );
  }

  // check are all row selected
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

  // open employee number dialog box
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
        });
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { GroupInsuranceMessage } from 'src/app/common/error-message/common-message.constants';
import { GiSearchEmployeeComponent } from '../gi-search-employee/gi-search-employee.component';
import { GiEnrollEmployeeAisListing } from 'src/app/model/group-insurance';
import { CommonListing } from 'src/app/model/common-listing';

/**  GiEnrollEmployeeAisListingComponent start */
@Component({
  selector: 'app-gi-enroll-employee-ais-listing',
  templateUrl: './gi-enroll-employee-ais-listing.component.html',
  styleUrls: ['./gi-enroll-employee-ais-listing.component.css']
})
export class GiEnrollEmployeeAisListingComponent implements OnInit {

  // variables
  showTable = false;
  // date
  todayDate = new Date();
  // form group
  enrollEmployeeForm: FormGroup;
  // form control
  designationCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  monthCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();

  // List of designation
  designationList: CommonListing[] = [
    { value: '1', viewValue: 'IAS' },
    { value: '2', viewValue: 'IPS' },
    { value: '3', viewValue: 'IFS' }
  ];

  // List of district
  districtList: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Vadodara' },
    { value: '4', viewValue: 'Surat' },
    { value: '5', viewValue: 'Bharuch' },
    { value: '6', viewValue: 'Anand' },
    { value: '7', viewValue: 'Valsad' },
    { value: '8', viewValue: 'Dang' },
    { value: '9', viewValue: 'Rajkot' },
    { value: '10', viewValue: 'Amreli' },
  ];

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

  // Table data for Enroll Employee
  enrollEmployeeData: GiEnrollEmployeeAisListing[] = [
    {
      employeeNumber: '1000005384',
      employeeName: 'Mr P K Sinha',
      designation: 'IAS',
      class: 'Class 1',
      district: 'Ahmedabad',
      officeName: 'Collector Office Ahmedabad',
      group: 'A',
      groupInsuranceAmount: '120',
      dateOfEnrollmentNo: new Date(1982, 4, 14),
      enrollmentNo: '14051982',
      emailId: 'ahm.collector@gujarat.gov.in',
      workflowStatus: 'Verified', status: 'Sent Mail'
    },
    {
      employeeNumber: '1000002435',
      employeeName: 'Mr. S K Narayana',
      designation: 'IAS',
      class: 'Class 1', district: 'Amreli',
      officeName: 'Dy. Collector Office, Amreli',
      group: 'A',
      groupInsuranceAmount: '120',
      dateOfEnrollmentNo: new Date(1991, 5, 25),
      enrollmentNo: '25061991',
      emailId: 'amreli.dycollector@gujarat.gov.in',
      workflowStatus: 'Forward to Approver', status: 'Received Acknowledgement'
    },
    {
      employeeNumber: '1000003866',
      employeeName: 'Mr. S P Khanna',
      designation: 'IPS',
      class: 'Class 1',
      district: 'Rajkot',
      officeName: 'District Supritendant office, Rajkot',
      group: 'A',
      groupInsuranceAmount: '120',
      dateOfEnrollmentNo: new Date(1981, 2, 12),
      enrollmentNo: '12031981',
      emailId: 'rajkor.supri@gujarat.gov.in',
      workflowStatus: 'Verified', status: 'Sent Mail'
    },
    {
      employeeNumber: '1000001001',
      employeeName: 'Mr. K V Kamath',
      designation: 'IFS',
      class: 'Class 1',
      district: 'Dang',
      officeName: 'Dy. Conservative of Forest, Dang',
      group: 'A',
      groupInsuranceAmount: '120',
      dateOfEnrollmentNo: new Date(1998, 9, 10),
      enrollmentNo: '10101998',
      emailId: 'dang.dyconserv@gujarat.gov.in',
      workflowStatus: 'Approved', status: 'Received Acknowledgement'
    }
  ];
  enrollEmployeeDataColumn: string[] = [
    'srno',
    'employeeNumber',
    'employeeName',
    'designation',
    'class',
    'district',
    'officeName',
    'group',
    'groupInsuranceAmount',
    'dateOfEnrollmentNo',
    'enrollmentNo',
    'emailId',
    'workflowStatus',
    'status',
    'action'
  ];
  enrollEmployeeDataSource = new MatTableDataSource<GiEnrollEmployeeAisListing>(this.enrollEmployeeData);
  // Table data for Enroll Employee end

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.enrollEmployeeFormData();
  }

  // form data
  enrollEmployeeFormData() {
    this.enrollEmployeeForm = this.fb.group({
      employeeNo: [''],
      employeeName: [''],
      designation: [''],
      district: [''],
      officeName: [''],
      enrollmentOrderNo: [''],
      dateOfEnrollment: [''],
      month: [''],
      year: [''],
    });
  }

  // on click on search button
  search() {
    if (
      this.enrollEmployeeForm.controls['employeeNo'].value !== '' || this.enrollEmployeeForm.controls['employeeName'].value !== ''
      || this.enrollEmployeeForm.controls['designation'].value !== '' || this.enrollEmployeeForm.controls['district'].value !== ''
      || this.enrollEmployeeForm.controls['officeName'].value !== '' || this.enrollEmployeeForm.controls['enrollmentOrderNo'].value !== ''
      || this.enrollEmployeeForm.controls['dateOfEnrollment'].value !== ''
      || this.enrollEmployeeForm.controls['month'].value !== '' || this.enrollEmployeeForm.controls['year'].value !== ''
    ) { this.showTable = true; }
  }

  // go to delete
  goToDelete(index) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(DeleteReasonDialogComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });

  }

  // go to edit
  goToEdit() {
    this.router.navigate(['gi/enroll-employee-ais']);
  }

  // open employee number dialog box
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(GiSearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.enrollEmployeeForm.patchValue({
          employeeNo: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          designation: '2',
          district: '2',
          treasuryOffice: result[0].treasuryOffice,
        });
      }
    });
  }

}
/**  GiEnrollEmployeeAisListingComponent end*/


/** DeleteReasonDialogComponent start */
@Component({
  selector: 'app-delete-reason-dialog',
  templateUrl: './delete-reason-dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class DeleteReasonDialogComponent implements OnInit {
  // variable
  errorMessage = GroupInsuranceMessage;
  // form group
  deleteReasonForm: FormGroup;
  // form control
  reasonCtrl: FormControl = new FormControl();

  // list
  reasonList: CommonListing[] = [
    { value: '1', viewValue: 'Retired/Resign' },
    { value: '2', viewValue: 'Expired' }
  ];

  // constructor
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DeleteReasonDialogComponent>
  ) { }

  ngOnInit(): void {
    this.deleteReasonForm = this.fb.group({
      reason: [''],
    });
  }

  // on close
  okClick($event?) {
    this.dialogRef.close();
  }
  // on submit
  onSubmit($event?) {
    if (this.deleteReasonForm.valid) {
      this.dialogRef.close();
    }
  }
}
/** DeleteReasonDialogComponent end */

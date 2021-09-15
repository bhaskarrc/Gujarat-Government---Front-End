import { CommonListing } from 'src/app/model/common-listing';
import { SearchEmployeeDppfNpsComponent } from './../search-employee-dppf-nps/search-employee-dppf-nps.component';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { ReceivedAnnexureTwoK } from 'src/app/model/dppf-nps';

@Component({
  selector: 'app-received-annexure-two-k',
  templateUrl: './received-annexure-two-k.component.html',
  styleUrls: ['./received-annexure-two-k.component.css']
})
export class ReceivedAnnexureTwoKComponent implements OnInit {
  // List
  savedAnnexureData: ReceivedAnnexureTwoK[] = [
    {
      payFixationEmployeeId: '7591238641',
      ragNumber: 'RAG/01/2020/000001',
      employeeName: 'Karan Patel',
      designation: 'Officer',
      departmentBranchOfficeName: 'Office 1',
      dateOfBirth: '15-FEB-1950',
      joiningDate: '16-JUL-1967',
      status: 'In Process'
    }
  ];

  savedAnnexureDataSourceColumn: string[] = [
    'srno',
    'payFixationEmployeeId',
    'ragNumber',
    'employeeName',
    'designation',
    'departmentBranchOfficeName',
    'joiningDate',
    'status',
  ];

  designationList: CommonListing[] = [
    { value: '1', viewValue: '' }
  ];

  statusList: CommonListing[] = [
    { value: '1', viewValue: 'In Process' },
    { value: '2', viewValue: 'Approve' },
    { value: '3', viewValue: 'Reject' },
  ];
  // Date
  todayDate = new Date();
  // Form Group
  savedAnnexureOneForm: FormGroup;
  // FormControl
  designationCTRL: FormControl = new FormControl();
  statusCTRL: FormControl = new FormControl();
  savedAnnexureDataSource = new MatTableDataSource<ReceivedAnnexureTwoK>(this.savedAnnexureData);

  constructor(private fb: FormBuilder, private route: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.savedAnnexureOneFormData();
  }

  savedAnnexureOneFormData() {
    this.savedAnnexureOneForm = this.fb.group({
      employeeNumber: [''],
      ragNumber: [''],
      fromDate: [''],
      toDate: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      designation: [''],
      joiningDate: [''],
      retirementDate: [''],
      status: [''],
    });
  }
  // Routing
  openAnnexure() {
    this.route.navigate(['/dppf-nps/annexure-two-k-nps']);
  }
  // workflowDetails
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  printDetails() {
    // this.route.navigate(['/dppf-nps/print-annexure-two-k']);
  }

  search() { }
  // Search Employee DppfNpsC
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(SearchEmployeeDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.savedAnnexureOneForm.patchValue({
          payFixationEmployeeNumber: result[0].employeeNumber,
          firstName: result[0].firstName,
          middleName: result[0].middleName,
          lastName: result[0].lastName,
          designation: result[0].designation,
        });
      }
    });
  }

}

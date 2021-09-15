import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SearchEmployeeDppfNpsComponent } from '../search-employee-dppf-nps/search-employee-dppf-nps.component';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { ReceivedTwoKListing } from 'src/app/model/dppf-nps';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-nps-received-two-k-listing',
  templateUrl: './nps-received-two-k-listing.component.html',
  styleUrls: ['./nps-received-two-k-listing.component.css']
})
export class NpsReceivedTwoKListingComponent implements OnInit {
  // List
  designationList: CommonListing[] = [
    { value: '1', viewValue: '' }
  ];

  statusList: CommonListing[] = [
    { value: '1', viewValue: 'In Process' },
    { value: '2', viewValue: 'Approve' },
    { value: '3', viewValue: 'Reject' },
  ];
  savedAnnexureData: ReceivedTwoKListing[] = [
    {
      payFixationEmployeeId: '7591238641',
      employeeName: 'Karan Patel',
      designation: 'Officer',
      departmentBranchOfficeName: 'Forest',
      dateOfBirth: '15-FEB-1950',
      joiningDate: '16-JUL-1967',
      ppan: '',
      status: '',
      workFlowStatus: '',
    }
  ];
  // Table Source
  savedAnnexureDataSourceColumn: string[] =
    [
      'srno',
      'payFixationEmployeeId',
      'employeeName',
      'designation',
      'departmentBranchOfficeName',
      'dateOfBirth',
      'joiningDate',
      'ppan',
      'status',
      'workFlowStatus',
      'action'
    ];

  // Date
  todayDate = new Date();
  // Variable
  empdetails = true;
  // Form Group
  savedAnnexureOneForm: FormGroup;
  // Form COntrol
  designationCTRL: FormControl = new FormControl();
  statusCTRL: FormControl = new FormControl();
  selection = new SelectionModel<any>(true, []);
  // TAble Source
  savedAnnexureDataSource = new MatTableDataSource<ReceivedTwoKListing>(this.savedAnnexureData);
  // Constructor
  constructor(private fb: FormBuilder, private route: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.savedAnnexureOneFormData();
  }

  savedAnnexureOneFormData() {
    this.savedAnnexureOneForm = this.fb.group({
      payFixationEmployeeNumber: [''],
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
    this.route.navigate(['/dppf-nps/annexure-two-k']);
  }
  // WorkFLow
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // Print Function
  printAnnexure() {

  }
  // Search Function
  search() {

  }
  // open Dialog EmployeeNumber
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(SearchEmployeeDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.empdetails = true;
        this.savedAnnexureOneForm.patchValue({
          payFixationEmployeeNumber: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          designation: result[0].designation,
        });
      }
    });
  }


}

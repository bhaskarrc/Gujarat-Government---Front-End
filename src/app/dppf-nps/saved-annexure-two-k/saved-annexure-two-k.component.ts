import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SearchEmployeeDppfNpsComponent } from '../search-employee-dppf-nps/search-employee-dppf-nps.component';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { SavedAnnexureTwoK } from 'src/app/model/dppf-nps';

@Component({
  selector: 'app-saved-annexure-two-k',
  templateUrl: './saved-annexure-two-k.component.html',
  styleUrls: ['./saved-annexure-two-k.component.css']
})
export class SavedAnnexureTwoKComponent implements OnInit {
  // Table SOurce
  savedAnnexureData: SavedAnnexureTwoK[] = [
    {
      payFixationEmployeeId: '7591238641',
      ragNo: 'RAG/01/2020/000001',
      employeeName: 'Karan Patel',
      designation: 'Officer',
      departmentBranchOfficeName: 'Office 1',
      joiningDate: '16-JUL-1967',
      ppan: '',
      status: 'Forwarded'
    },
    {
      payFixationEmployeeId: '7591238642',
      ragNo: 'RAG/01/2020/000002',
      employeeName: 'Hetal Patel',
      designation: 'Officer',
      departmentBranchOfficeName: 'Office 2',
      joiningDate: '21-Mar-1967',
      ppan: '',
      status: 'Save as Draft'
    }
  ];

  savedAnnexureDataSourceColumn: string[] = [
    'srno',
    'payFixationEmployeeId',
    'ragNo',
    'employeeName',
    'designation',
    'joiningDate',
    'departmentBranchOfficeName',
    'ppan',
    'status',
    'action'
  ];
  // List
  designationList: CommonListing[] = [
    { value: '1', viewValue: '' }
  ];

  statusList: CommonListing[] = [
    { value: '1', viewValue: 'In Process' },
    { value: '2', viewValue: 'Approve' },
    { value: '3', viewValue: 'Reject' },
  ];
  // DATe
  todayDate = new Date();
  // Variable
  empdetails = true;
  // Form Group
  savedAnnexureOneForm: FormGroup;
  // Form COntrol
  designationCTRL: FormControl = new FormControl();
  statusCTRL: FormControl = new FormControl();
  savedAnnexureDataSource = new MatTableDataSource<SavedAnnexureTwoK>(this.savedAnnexureData);

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
      ragNumber: [''],
      fromDate: [''],
      toDate: [''],
      status: [''],
    });
  }
  // Routing
  openAnnexure() {
    this.route.navigate(['/dppf-nps/annexure-two-k']);
  }
  // Work Flow
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // Routing
  printDetails() {
    this.route.navigate(['/dppf-nps/print-annexure-two-k']);
  }

  search() {

  }
  // Search Employee DppfNps
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

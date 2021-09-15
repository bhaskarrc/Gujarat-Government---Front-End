import { CommonListing } from './../../model/common-listing';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SearchPpaDppfNpsComponent } from '../search-ppa-dppf-nps/search-ppa-dppf-nps.component';
import { SearchEmployeeDppfNpsComponent } from '../search-employee-dppf-nps/search-employee-dppf-nps.component';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { SavedWithdrawalCases } from 'src/app/model/dppf-nps';

@Component({
  selector: 'app-nps-saved-withdrawal-cases',
  templateUrl: './nps-saved-withdrawal-cases.component.html',
  styleUrls: ['./nps-saved-withdrawal-cases.component.css']
})
export class NpsSavedWithdrawalCasesComponent implements OnInit {
  // List
  withdrawalList: CommonListing[] = [
    { value: '1', viewValue: 'Partial' },
    { value: '2', viewValue: 'Final' },
  ];

  finalList: CommonListing[] = [
    { value: '1', viewValue: 'Superannuation' },
    { value: '2', viewValue: 'Registration' },
    { value: '3', viewValue: 'Death' },
  ];
  workflowStatusList: CommonListing[] = [
    { value: '1', viewValue: 'Approval in Progress' },
    { value: '2', viewValue: 'Send Back' },
    { value: '3', viewValue: 'Approved' },
    { value: '4', viewValue: 'Rejected' },
  ];
  // TableSource
  savedWithdrawalCasesData: SavedWithdrawalCases[] = [
    {
      employeeId: '1000000199', ppanNo: '2020000000123456', pranNo: '12312312311', name: '',
      withdrawal: 'Partial', officeName: 'Districe Treasury Office, Gandhinagar',
      nsdlAck: '12345', ddoRegistrationNo: 'SGV00011', status: 'DPPF Approved', workflowStatus: 'Save as Draft'
    },
    {
      employeeId: '1234567890', ppanNo: '2020123123123423', pranNo: '12312312311', name: '',
      withdrawal: 'Partial', officeName: 'Districe Treasury Office, Gandhinagar',
      nsdlAck: '12345', ddoRegistrationNo: 'SGV00011', status: 'DPPF Approved', workflowStatus: 'Save as Draft'
    }
  ];

  savedWithdrawalCasesDataColumn: string[] = [
    'srno', 'employeeId', 'ppanNo', 'pranNo', 'name',
    'withdrawal', 'officeName', 'nsdlAck', 'ddoRegistrationNo', 'status', 'workflowStatus', 'action'
  ];
  // Date
  todayDate = new Date();
  // Variable
  empdetails = true;
  inwardDetails = true;
  selection = new SelectionModel<any>(true, []);
  // Form Gorup
  ddoSideWithdrawalForm: FormGroup;
  // Form Control
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  withdrawalCTRL: FormControl = new FormControl();
  finalCTRL: FormControl = new FormControl();
  workflowStatusCTRL: FormControl = new FormControl();
  // Table Source
  savedWithdrawalCasesDataSource = new MatTableDataSource<SavedWithdrawalCases>(this.savedWithdrawalCasesData);

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.ddoSideWithdrawalFormData();
  }

  ddoSideWithdrawalFormData() {
    this.ddoSideWithdrawalForm = this.fb.group({
      createdFromDate: [''],
      createdToDate: [''],
      employeeNumber: [''],
      ppaNo: [''],
      pranNo: [''],
      withdrawal: [''],
      final: [''],
      name: [''],
      claimID: [''],
      officeName: [''],
      nsdlAcknowledgementNo: [''],
      ddoRegistrationNo: [''],
      status: [''],
      workflowStatus: ['']
    });
  }
  // Dialog of WorkFlow
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  printDetails() {
    // this.router.navigate(['/dppf-nps/print-annexure-two']);
  }

  search() {

  }



  // Search Ppa DppfNps 
  openDialogPPANumber() {
    const dialogRef = this.dialog.open(SearchPpaDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.ddoSideWithdrawalForm.patchValue({
          ppaNo: result[0].ppaNo,
        });
      }
    });
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
        this.ddoSideWithdrawalForm.patchValue({
          payFixationEmployeeNumber: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          designation: result[0].designation,
        });
      }
    });
  }
  // Routing
  edit() {
    this.router.navigate(['../dppf-nps//nps-ddo-side-withdrawal']);
  }
}

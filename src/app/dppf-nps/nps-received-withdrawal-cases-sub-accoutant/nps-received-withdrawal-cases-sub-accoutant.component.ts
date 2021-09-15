import { CommonListing } from './../../model/common-listing';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SearchPpaDppfNpsComponent } from '../search-ppa-dppf-nps/search-ppa-dppf-nps.component';
import { SearchEmployeeDppfNpsComponent } from '../search-employee-dppf-nps/search-employee-dppf-nps.component';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { ReceivedWithdrawalCasesSubAccoutant } from 'src/app/model/dppf-nps';

@Component({
  selector: 'app-nps-received-withdrawal-cases-sub-accoutant',
  templateUrl: './nps-received-withdrawal-cases-sub-accoutant.component.html',
  styleUrls: ['./nps-received-withdrawal-cases-sub-accoutant.component.css']
})
export class NpsReceivedWithdrawalCasesSubAccoutantComponent implements OnInit {
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
  // Table COntent
  savedWithdrawalCasesData: ReceivedWithdrawalCasesSubAccoutant[] = [
    {
      employeeId: '1000000199',
      ppanNo: '2020000000123456',
      pranNo: '12312312311',
      name: 'Arun Kumar Modi',
      withdrawal: 'Partial',
      officeName: 'Districe Treasury Office, Gandhinagar',
      nsdlAck: '12345',
      ddoRegistrationNo: 'SGV00011',
      status: 'Recived at DPPF',
      workflowStatus: 'Approval in Progress'
    },

    {
      employeeId: '1234567890',
      ppanNo: '2020123123123423',
      pranNo: '12312312311',
      name: 'Vikas Patel ',
      withdrawal: 'Partial',
      officeName: 'Districe Treasury Office, Gandhinagar',
      nsdlAck: '12345',
      ddoRegistrationNo: 'SGV00011',
      status: 'Recived at DPPF',
      workflowStatus: 'Approval in Progress'
    }

  ];
  // Table Source
  savedWithdrawalCasesDataColumn: string[] = [
    'srno',
    'employeeId',
    'ppanNo',
    'pranNo',
    'name',
    'withdrawal',
    'officeName',
    'nsdlAck',
    'ddoRegistrationNo',
    'status',
    'workflowStatus',
    'action'
  ];

  workflowStatusList: CommonListing[] = [
    { value: '1', viewValue: 'Approval in Progress' },
    { value: '2', viewValue: 'Send Back' },
    { value: '3', viewValue: 'Approved' },
    { value: '4', viewValue: 'Rejected' },
  ];
  // Date
  todayDate = new Date();
  // Variable
  empdetails = true;
  inwardDetails = true;
  selection = new SelectionModel<ReceivedWithdrawalCasesSubAccoutant>(true, []);
  // Form Group
  ddoSideWithdrawalForm: FormGroup;
  // Form COntrol
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  withdrawalCTRL: FormControl = new FormControl();
  finalCTRL: FormControl = new FormControl();
  workflowStatusCTRL: FormControl = new FormControl();
  // Table Source
  savedWithdrawalCasesDataSource = new MatTableDataSource(this.savedWithdrawalCasesData);

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
      workflowStatus: [''],
    });
  }
  // Work FLow
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  printAnnexure() {
    // this.router.navigate(['/dppf-nps/print-annexure-two']);
  }
  // Routing
  openEditScreen() {
    this.router.navigate(['/dppf-nps/nps-received-withdrawal-cases-sub-accountant-edit']);
  }
  // Routing
  openViewScreen() {
    this.router.navigate(['/dppf-nps/nps-received-withdrawal-cases-sub-accountant-edit']);
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
}

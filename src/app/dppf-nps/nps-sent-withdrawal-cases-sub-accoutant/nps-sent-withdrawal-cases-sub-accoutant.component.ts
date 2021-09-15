import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SearchInwardNoDppfNpsComponent } from '../search-inward-no-dppf-nps/search-inward-no-dppf-nps.component';
import { SearchCardexDppfNpsComponent } from '../search-cardex-dppf-nps/search-cardex-dppf-nps.component';
import { SearchPpaDppfNpsComponent } from '../search-ppa-dppf-nps/search-ppa-dppf-nps.component';
import { SearchEmployeeDppfNpsComponent } from '../search-employee-dppf-nps/search-employee-dppf-nps.component';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { SentWithdrawalCasesSubAccoutant } from 'src/app/model/dppf-nps';

@Component({
  selector: 'app-nps-sent-withdrawal-cases-sub-accoutant',
  templateUrl: './nps-sent-withdrawal-cases-sub-accoutant.component.html',
  styleUrls: ['./nps-sent-withdrawal-cases-sub-accoutant.component.css']
})
export class NpsSentWithdrawalCasesSubAccoutantComponent implements OnInit {
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
  // Table Content
  savedWithdrawalCasesData: SentWithdrawalCasesSubAccoutant[] = [
    {
      employeeId: '1000000199',
      ppanNo: '2020000000123456',
      pranNo: '12312312311',
      name: 'Arun Kumar Modi	',
      claimId: '',
      officeName: 'Districe Treasury Office, Gandhinagar',
      nsdlAck: '12345',
      ddoRegistrationNo: 'SGV00011',
      status: 'Sent to DPPF	'
    }
  ];
  // Table Source
  savedWithdrawalCasesDataColumn: string[] = [
    'srno', 'employeeId', 'ppanNo', 'pranNo', 'name', 'claimId', 'officeName', 'nsdlAck', 'ddoRegistrationNo', 'status', 'action'
  ];
  // Date
  todayDate = new Date();
  // Variable
  empdetails = true;
  inwardDetails = true;
  selection = new SelectionModel<any>(true, []);
  // Form Gorup
  ddoSideWithdrawalForm: FormGroup;
  // Form Group
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  withdrawalCTRL: FormControl = new FormControl();
  finalCTRL: FormControl = new FormControl();
  savedWithdrawalCasesDataSource = new MatTableDataSource<SentWithdrawalCasesSubAccoutant>(this.savedWithdrawalCasesData);

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.ddoSideWithdrawalFormData();
  }

  ddoSideWithdrawalFormData() {
    this.ddoSideWithdrawalForm = this.fb.group({
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

  openEditScreen() {
    this.router.navigate(['/dppf-nps/nps-ddo-side-withdrawal']);
  }

  search() {

  }
  // Dialog  Search Ppa DppfNps Component
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
  // Dialog Search Employee DppfNps 
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

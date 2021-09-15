import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SearchInwardNoDppfNpsComponent } from '../search-inward-no-dppf-nps/search-inward-no-dppf-nps.component';
import { SearchPpaDppfNpsComponent } from '../search-ppa-dppf-nps/search-ppa-dppf-nps.component';
import { SearchEmployeeDppfNpsComponent } from '../search-employee-dppf-nps/search-employee-dppf-nps.component';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { ReceivedWithdrawalCasesAccoutOfficer } from 'src/app/model/dppf-nps';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-nps-received-withdrawal-cases-accout-officer',
  templateUrl: './nps-received-withdrawal-cases-accout-officer.component.html',
  styleUrls: ['./nps-received-withdrawal-cases-accout-officer.component.css']
})
export class NpsReceivedWithdrawalCasesAccoutOfficerComponent implements OnInit {
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
  // Table Source
  savedWithdrawalCasesData: ReceivedWithdrawalCasesAccoutOfficer[] = [
    { employeeId: '', ppanNo: '', pranNo: '', name: '', claimId: '', officeName: '', nsdlAck: '', ddoRegistrationNo: '', status: '' }
  ];

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
  // Form COntrol
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  withdrawalCTRL: FormControl = new FormControl();
  finalCTRL: FormControl = new FormControl();
  // Table Source
  savedWithdrawalCasesDataSource = new MatTableDataSource<ReceivedWithdrawalCasesAccoutOfficer>(this.savedWithdrawalCasesData);
  // Constrctor
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
  // Routing
  openEditScreen() {
    this.router.navigate(['/dppf-nps/nps-ddo-side-withdrawal']);
  }

  search() {

  }

  // Dialog Search Inward No DppfNps 
  openDialogInwardNumber() {
    const dialogRef = this.dialog.open(SearchInwardNoDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.ddoSideWithdrawalForm.patchValue({
          inwardNo: result[0].inwardNo,
          inwardDate: result[0].inwardDate,
        });
      }
    });
  }
  // Dialog Searc hPpa Dppf-Nps 
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

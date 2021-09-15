import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SearchPpaDppfNpsComponent } from '../search-ppa-dppf-nps/search-ppa-dppf-nps.component';
import { SearchEmployeeDppfNpsComponent } from '../search-employee-dppf-nps/search-employee-dppf-nps.component';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';


@Component({
  selector: 'app-nps-sent-withdrawal-cases-accoutant',
  templateUrl: './nps-sent-withdrawal-cases-accoutant.component.html',
  styleUrls: ['./nps-sent-withdrawal-cases-accoutant.component.css']
})
export class NpsSentWithdrawalCasesAccoutantComponent implements OnInit {
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
  savedWithdrawalCasesData: any[] = [
    { employeeId: '', ppanNo: '', pranNo: '', name: '', claimId: '', officeName: '', nsdlAck: '', ddoRegistrationNo: '', status: '' }
  ];

  savedWithdrawalCasesDataColumn: string[] = [
    'srno', 'employeeId', 'ppanNo', 'pranNo', 'name', 'claimId', 'officeName', 'nsdlAck', 'ddoRegistrationNo', 'status', 'action'
  ];
  savedWithdrawalCasesDataSource = new MatTableDataSource(this.savedWithdrawalCasesData);
  // Date
  todayDate = new Date();
  // Variable
  empdetails = true;
  inwardDetails = true;
  selection = new SelectionModel<any>(true, []);
  // Form Group
  ddoSideWithdrawalForm: FormGroup;
  // Form COntrol
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  withdrawalCTRL: FormControl = new FormControl();
  finalCTRL: FormControl = new FormControl();
  // Constructor
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
  // Work Flow
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
  // search
  search() {

  }
  // Dialog PPANumber 
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
  // dialog Employee  DppfNps
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

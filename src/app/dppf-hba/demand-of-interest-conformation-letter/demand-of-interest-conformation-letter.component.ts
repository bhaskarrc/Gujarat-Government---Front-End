import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { InterestDialogComponent } from './interest-dialog/interest-dialog.component';
import { CurrentBalanceDialogComponent } from './current-balance-dialog/current-balance-dialog.component';
import { WorkflowDppfHbaComponent } from '../workflow-dppf-hba/workflow-dppf-hba.component';

@Component({
  selector: 'app-demand-of-interest-conformation-letter',
  templateUrl: './demand-of-interest-conformation-letter.component.html',
  styleUrls: ['./demand-of-interest-conformation-letter.component.css']
})
export class DemandOfInterestConformationLetterComponent implements OnInit {
  // Form Group
  demandForm: FormGroup;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // List
  headerJso: CommonListing[] = [
    { viewValue: 'HBA/MCA Account No', value: '2641773 ' },
    { viewValue: 'Name', value: 'A T MHETA  ' },
    { viewValue: 'Office Name', value: 'Deputy Executive Engineer,PANCHAYAT ROAD and BUILDING CIRCLE, Rajkot ' },
    { viewValue: 'File No', value: ' ' },
    { viewValue: 'Loan Amount', value: '20000.00' },
    { viewValue: 'Interest Amount', value: '11820.00' },
    { viewValue: 'Office Letter No', value: '1116.00' },
    { viewValue: 'Total Amount', value: '31820.00' },
  ];
  constructor( public dialog: MatDialog,
    public dialogRef: MatDialogRef<DemandOfInterestConformationLetterComponent>, private fb: FormBuilder) { }


  ngOnInit() {
    this.agcaDetailsData();
  }
  agcaDetailsData() {
    this.demandForm = this.fb.group({
      loanAmount: [''],
      total: [''],
      interestAmount: ['']
    });
  }

  // Interest Amount
  interestAmount(): void {
    const dialogRef = this.dialog.open(InterestDialogComponent, {
      width: '1200px',
      height: 'auto',
      data: {
        fromComponent: 'DemandOfInterestConformationLetterComponent'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.demandForm.patchValue({
        interestAmount: result.interestAmount,
        loanAmount: result.loanAmount,
      });
      console.log('The dialog was closed');
    });
  }

  // Current Balance
  currentBalance(): void {
    const dialogRef = this.dialog.open(CurrentBalanceDialogComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // Comment Grant Details
  commentGrantDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDppfHbaComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // On close button
  onClose() {
    this.dialogRef.close();
  }
}

import { CommonListing } from 'src/app/model/common-listing';
import { EmployeeDialogBoxComponent } from './../employee-dialog-box/employee-dialog-box.component';
import { InterestDialogComponent } from './../demand-of-interest-conformation-letter/interest-dialog/interest-dialog.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { dppfHbaMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { DPPFHbaDirectives } from 'src/app/common/directive/dppf-hba';
import { AccountWiseHbaComponent } from '../account-entry-wise/account-wise-hba/account-wise-hba.component';

@Component({
  selector: 'app-ndc-request-case',
  templateUrl: './ndc-request-case.component.html',
  styleUrls: ['./ndc-request-case.component.css']
})
export class NdcRequestCaseComponent implements OnInit {
  errorMessages = dppfHbaMessage;
  noDueCertificateForm: FormGroup;
  directiveObject = new DPPFHbaDirectives(this.dialog);

  // dates
  today = Date.now();
  todayDate = Date.now();
  maxDate = new Date();
  // form controls
  employeeClassCtrl: FormControl = new FormControl();
  loanForCtrl: FormControl = new FormControl();
  // lists
  employeeClass_list: CommonListing[] = [
    { value: '1', viewValue: 'Class 1' },
    { value: '2', viewValue: 'Class 2' },
    { value: '3', viewValue: 'Class 3' },
    { value: '4', viewValue: 'Class 4' },
  ];
  loanFor_list: CommonListing[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'MCA' }
  ];
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit() {
    this.noDueCertificateForm = this.fb.group({
      employeNo: [''],
      accountNo: [''],
      hbaMca: ['HBA'],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      employeeClass: [''],
      doj: [''],
      dod: [''],
      dateofDeath: [''],
      loanAmount: [''],
      district: [''],
      ddo: [''],
      cardex: [''],
      officeName: [''],
      totalPrincipleAmount: [''],
      totalInterestAmount: [''],
      totalRecoveryAmount: [''],
      totalPaidPrincipleAmount: [''],
      totalPaidInterestAmount: ['']
    });
  }

  // on listing
  navigate() {
    this.router.navigate(['./dppf-hba/ndc-request-listing']);
  }

  // open interest dialog
  recoveryAmount(): void {
    const dialogRef = this.dialog.open(InterestDialogComponent, {
      width: '1200px',
      data: {
        fromComponent: 'NdcRequestCaseRecovery'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.noDueCertificateForm.patchValue({
          totalRecoveryAmount: result.interestAmount,
        });
      }
      console.log('The dialog was closed');
    });
  }
  // open InterestDialog
  interestAmount(): void {
    const dialogRef = this.dialog.open(InterestDialogComponent, {
      width: '1200px',
      data: {
        fromComponent: 'InterestConformationCase'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.noDueCertificateForm.patchValue({
          totalInterestAmount: result.interestAmount,
        });
      }
      console.log('The dialog was closed');
    });
  }

  // open employee dialog box
  employeeNo(): void {
    const dialogRef = this.dialog.open(EmployeeDialogBoxComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === '1200064595') {
        this.noDueCertificateForm.patchValue({
          employeNo: '1200064595',
          hbaNo: '12345',
          hbaMca: 'HBA',
          firstName: 'Vipulbhai',
          middleName: 'Sankarbhai',
          lastName: 'Patel',
          employeeClass: '1',
          district: '1',
          doj: new Date('03/01/1990'),
          dod: new Date('03/31/2025'),
          loanAmount: '500000',
          ddo: '1',
          cardex: '1',
          officeName: 'District Treasury Office,Gandhinagar',
          totalPrincipleAmount: '650000',
        });
      }
      console.log('The dialog was closed');
    });
  }

  // open dialog AccountWiseHbaComponent
  hbaMca() {
    const dialogRef = this.dialog.open(AccountWiseHbaComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}

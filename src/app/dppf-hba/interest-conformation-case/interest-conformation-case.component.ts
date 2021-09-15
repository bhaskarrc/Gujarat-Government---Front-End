import { CommonListing } from 'src/app/model/common-listing';
import { EmployeeDialogBoxComponent } from './../employee-dialog-box/employee-dialog-box.component';
import { InterestDialogComponent } from './../demand-of-interest-conformation-letter/interest-dialog/interest-dialog.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { dppfHbaMessage } from 'src/app/common/error-message/common-message.constants';
import { DPPFHbaDirectives } from 'src/app/common/directive/dppf-hba';
import { AccountWiseHbaComponent } from '../account-entry-wise/account-wise-hba/account-wise-hba.component';
@Component({
  selector: 'app-interest-conformation-case',
  templateUrl: './interest-conformation-case.component.html',
  styleUrls: ['./interest-conformation-case.component.css']
})
export class InterestConformationCaseComponent implements OnInit {
  directiveObject = new DPPFHbaDirectives(this.dialog);

  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Form Group
  interestConformationForm: FormGroup;
  // Variable
  errorMessage;
  // Form Control
  employeClassCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();
  loanFornCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  // Lists
  designation_List: CommonListing[] = [
    { value: '1', viewValue: 'Under Secretary,URBAN DEVLOPMENT $$ URBAN HOUSING DEPARTMENT, GANDHINAGAR, Gandhinagar' },
  ];
  emplyeClass_List: CommonListing[] = [
    { value: '1', viewValue: 'Class 1' },
    { value: '2', viewValue: 'Class 2' },
    { value: '3', viewValue: 'Class 3' },
    { value: '4', viewValue: 'Class 4' },
  ];
  load_list: CommonListing[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'MCA' },
  ];
  districtList: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar' },
    { value: '2', viewValue: 'District Treasury Office,Ahmedabad' },
    { value: '3', viewValue: 'District Treasury Office,Rajkot' },
  ];
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  ngOnInit() {
    this.interestConformationFormData();
    this.errorMessage = dppfHbaMessage;
  }
  interestConformationFormData() {
    this.interestConformationForm = this.fb.group({
      employeNo: [''],
      hbaNo: [''],
      hbaMca: ['HBA'],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      employeClass: [''],
      designation: [''],
      district: [''],
      dateofJoining: [''],
      dateofRetirement: [''],
      dateofDeath: [''],
      loanAmount: [''],
      loanFor: [''],
      ddo: [''],
      cardex: [''],
      officeName: [''],
      basicSalary: [''],
      approvedPrincipalEMI: [''],
      reducedinterestAmountSum: [''],
      interestEmi: [''],
      valueofHouseCar: [''],
      eligibleAmount: [''],
      loanTakenAmount: [''],
      principleEmi: [''],
    });
  }


  // Navgation Route
  navigate() {
    this.router.navigate(['./dppf-hba/interest-conformation-case-listing']);
  }

  // open interest dialog
  interestAmount(): void {
    const dialogRef = this.dialog.open(InterestDialogComponent, {
      position: {
        top: '10px',
      },
      height: '100vw',
      width: '100vw',
      maxWidth: '95vw',
      panelClass: 'full-screen-modal',
      data: {
        fromComponent: 'InterestConformationCase'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.interestConformationForm.patchValue({
          interestEmi: result.interestAmount,
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
        this.interestConformationForm.patchValue({
          employeNo: '1200064595',
          hbaNo: '12345',
          hbaMca: 'HBA',
          firstName: 'Vipulbhai',
          middleName: 'Sankarbhai',
          lastName: 'Patel',
          employeClass: '1',
          district: '1',
          dateofJoining: new Date('03/01/1990'),
          dateofRetirement: new Date('03/31/2025'),
          loanAmount: '500000',
          ddo: '1',
          cardex: '1',
          officeName: 'District Treasury Office,Gandhinagar',
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
